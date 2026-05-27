import { type Dispatch, type SetStateAction, useRef } from 'react'
import clsx from 'clsx'
import { useClickOutside } from '../hooks/useClickOutside.tsx'

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

  useClickOutside(ref, open, () => setOpen(false))

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
