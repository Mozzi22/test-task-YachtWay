import { Calendar as CalendarIcon } from 'lucide-react'
import Calendar from './Calendar.tsx'
import { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'

const DropDownCalendar = ({
  id,
  value,
  label,
  disabled = false,
  setValue
}: {
  id: string
  value: string
  label: string
  disabled?: boolean
  setValue: (date: string) => void
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLabelElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const date = value ? dayjs(value).format('DD.MM.YYYY') : ''

  return (
    <label ref={ref} className="field full calendar-field relative block w-full h-10">
      <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-surface text-xs font-medium leading-[18px]">
        {label}
      </span>
      <input
        id={id}
        value={date}
        className="input"
        disabled={disabled}
        onClick={() => setOpen(true)}
      />
      <i
        className="absolute right-[10px] top-[10px] text-ink not-italic text-[16px] pointer-events-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <CalendarIcon width={16} height={16} />
      </i>
      {open && (
        <div
          className="absolute z-20 top-[44px] left-0 right-0 overflow-auto min-w-[329px] p-2 bg-surface border border-line rounded-[4px] shadow-[0_14px_32px_rgba(34,34,45,0.14)]"
          id={`${id}-options`}
          role="dialog"
        >
          <Calendar
            selected={value}
            onSelect={(date) => {
              if (!date) return
              setValue(dayjs(date).toISOString())
              setOpen(false)
            }}
          />
        </div>
      )}
    </label>
  )
}

export default DropDownCalendar
