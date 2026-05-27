import { type RefObject, useEffect } from 'react'

type AnyRef = RefObject<HTMLElement | null>

export const useClickOutside = (ref: AnyRef, open: boolean, onClose: () => void) => {
  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, onClose, ref])
}
