import { type ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import HelpDot from './HelpDot.tsx'

type Props = {
  id: string
  error?: string
  label: string
  rightSlot?: ReactNode
  className?: string
  helpText?: string
  autoComplete?: string
}

const Input = ({
  id,
  label,
  error = '',
  helpText = '',
  rightSlot,
  className = '',
  autoComplete = 'off',
  ...props
}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <label className={twMerge(clsx('field hull-field relative block', className))} htmlFor={id}>
      <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-surface text-xs font-medium leading-[18px]">
        {label}
      </span>
      <input
        id={id}
        {...props}
        maxLength={20}
        className={clsx('input', error && 'input--error')}
        autoComplete={autoComplete}
      />
      {rightSlot && <>{rightSlot}</>}
      {helpText && <HelpDot open={open} setOpen={setOpen} />}
      <p
        className={twMerge(
          clsx('hint leading-4 hidden', error && 'block text-danger', open && 'block text-muted')
        )}
        id={`${id}-message`}
      >
        {open ? helpText : error}
      </p>
    </label>
  )
}

export default Input
