import { useEffect, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../validation/vesselSchema'

type SyncableField = 'hullNumber'

export const useExternalDomFieldSync = (
  fieldName: SyncableField,
  selector: string,
  options?: { clearErrorOnSync?: boolean }
) => {
  const isSyncingRef = useRef(false)
  const { clearErrors, setValue } = useFormContext<VesselFormData>()

  useEffect(() => {
    let frameId = 0
    let timeoutId = 0

    const setupSync = () => {
      const input = document.querySelector<HTMLInputElement>(selector)

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

          if (options?.clearErrorOnSync !== false) {
            clearErrors(fieldName)
          }
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
    }

    let cleanup: VoidFunction | undefined

    const initialize = () => {
      cleanup = setupSync()
    }

    frameId = window.requestAnimationFrame(() => {
      timeoutId = window.setTimeout(initialize, 0)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
      cleanup?.()
    }
  }, [clearErrors, fieldName, options?.clearErrorOnSync, selector, setValue])
}
