import clsx from 'clsx'
import { type ReactNode, useState } from 'react'
import HelpDot from './HelpDot.tsx'
import { twMerge } from 'tailwind-merge'

type Props = {
  id: string
  error?: string
  label: string
  helpText?: string
  rightSlot?: ReactNode
}

const DropDownWithoutOptions = ({
  id,
  error = '',
  label,
  rightSlot,
  helpText = '',
  ...props
}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="field combo relative block" data-combo={id}>
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
          aria-expanded="false"
          aria-controls={`${id}-options`}
        />
        {helpText && <HelpDot open={open} setOpen={setOpen} className="right-[35px]" />}

        {rightSlot && <>{rightSlot}</>}
        <button
          className="combo-toggle absolute right-[1px] top-[1px] !w-[38px] !h-[38px] !p-0 !border-0 !bg-transparent text-transparent flex items-center justify-center after:block after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45"
          type="button"
          aria-label={`Show ${id} options`}
        />
      </div>
      <div
        className="combo-menu absolute z-20 top-[44px] left-0 right-0 max-h-[260px] overflow-auto p-2 bg-surface border border-line rounded-[4px] shadow-[0_14px_32px_rgba(34,34,45,0.14)]"
        id={`${id}-options`}
        role="listbox"
      />
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

export default DropDownWithoutOptions
