import { type Dispatch, type SetStateAction, useEffect, useRef } from 'react'
import clsx from 'clsx'

const HelpDot = ({
  open,
  setOpen,
  className = ''
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  className?: string
}) => {
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, setOpen])

  return (
    <span ref={ref}>
      <i
        onClick={() => setOpen((prev) => !prev)}
        className={clsx(
          'help-dot cursor-pointer absolute right-3 top-3 inline-flex items-center justify-center w-4 h-4 text-soft bg-[#2222221a] rounded-full text-[11px] leading-none not-italic',
          className
        )}
      >
        ?
      </i>
    </span>
  )
}

export default HelpDot
