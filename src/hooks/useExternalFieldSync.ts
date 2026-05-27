import { useEffect, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../validation/vesselSchema'

type SyncableField = 'make' | 'model' | 'year'

export const useExternalFieldSync = (fieldName: SyncableField) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const isSyncingRef = useRef(false)
  const { clearErrors, setValue } = useFormContext<VesselFormData>()

  useEffect(() => {
    const input = inputRef.current
    if (!input) return

    const prototype = Object.getPrototypeOf(input)
    const descriptor = Object.getOwnPropertyDescriptor(prototype, 'value')

    if (!descriptor?.get || !descriptor?.set) return

    const originalGet = descriptor.get
    const originalSet = descriptor.set

    const syncFormValue = (nextValue: string, shouldDirty: boolean) => {
      if (isSyncingRef.current) return

      isSyncingRef.current = true

      try {
        setValue(fieldName, nextValue, {
          shouldDirty,
          shouldTouch: false,
          shouldValidate: false
        })

        clearErrors(fieldName)
      } finally {
        isSyncingRef.current = false
      }
    }

    Object.defineProperty(input, 'value', {
      configurable: true,
      get() {
        return originalGet.call(this)
      },
      set(nextValue) {
        originalSet.call(this, nextValue)
        syncFormValue(String(nextValue ?? ''), true)
      }
    })

    if (input.value) {
      syncFormValue(input.value, false)
    }

    return () => {
      Object.defineProperty(input, 'value', descriptor)
    }
  }, [clearErrors, fieldName, setValue])

  return inputRef
}
