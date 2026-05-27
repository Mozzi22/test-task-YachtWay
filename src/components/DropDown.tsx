import HelpDot from './HelpDot.tsx'
import { type ReactNode, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useClickOutside } from '../hooks/useClickOutside.tsx'

type Props<T> = {
  id: string
  error?: string
  label: string
  options: T[]
  onChange: (value: T) => void
  helpText?: string
  rightSlot?: ReactNode
}

const DropDown = <T extends string>({
  id,
  error = '',
  label,
  options,
  onChange,
  rightSlot,
  helpText = '',
  ...props
}: Props<T>) => {
  const [open, setOpen] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)

  const ref = useRef<HTMLDivElement | null>(null)

  useClickOutside(ref, openOptions, () => setOpenOptions(false))

  return (
    <div ref={ref} className="field combo relative block" data-combo={id}>
      <div className="relative h-10">
        <label
          htmlFor={`${id}-input`}
          className="absolute left-3 -top-2 z-10 px-1 text-muted bg-surface text-xs font-medium leading-[18px]"
        >
          {label}
        </label>

        <input
          id={`${id}-input`}
          {...props}
          className={clsx('input m-0 pl-3 pr-[44px]', error && 'input--error')}
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-controls={`${id}-options`}
          onFocus={() => setOpenOptions(true)}
        />

        {helpText && <HelpDot open={open} setOpen={setOpen} className="right-[35px]" />}

        {rightSlot && <>{rightSlot}</>}

        <button
          className="combo-toggle absolute right-[1px] top-[1px] !w-[38px] !h-[38px] !p-0 !border-0 !bg-transparent text-transparent flex items-center justify-center after:block after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45"
          type="button"
          aria-label={`Show ${id} options`}
          onClick={() => setOpenOptions((prev) => !prev)}
        />
      </div>

      {openOptions && (
        <div
          className="absolute z-20 top-[44px] left-0 right-0 overflow-auto p-2 bg-surface border border-line rounded-[4px] shadow-[0_14px_32px_rgba(34,34,45,0.14)]"
          id={`${id}-options`}
          role="dialog"
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className="flex items-center w-full min-h-9 px-2 rounded text-sm text-left hover:bg-[#f6f6f7]"
              onClick={() => {
                onChange(option)
                setOpenOptions(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      <p
        className={twMerge(
          clsx(
            'mt-1 text-xs leading-4 hidden',
            error && 'block text-danger',
            open && 'block text-muted'
          )
        )}
        id={`${id}-message`}
      >
        {open ? helpText : error}
      </p>
    </div>
  )
}

export default DropDown
