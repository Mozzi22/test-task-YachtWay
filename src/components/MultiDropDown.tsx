import { useRef, useState } from 'react'
import Counter from './Counter.tsx'
import { CheckIcon, X } from 'lucide-react'
import { useClickOutside } from '../hooks/useClickOutside.tsx'

type Props = {
  value: string[]
  onChange: (value: string[]) => void
  options: string[]
  label: string
  max?: number
}

const MultiDropDown = ({ value = [], onChange, options, label, max = 4 }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  useClickOutside(ref, open, () => setOpen(false))

  const add = (item: string) => {
    if (value.includes(item)) return onChange(value.filter((i) => i !== item))
    if (value.length >= max) return

    onChange([...value, item])
  }

  const remove = (item: string) => onChange(value.filter((i) => i !== item))

  return (
    <div
      ref={ref}
      className="field full tag-field relative flex items-center gap-1.5 w-full h-10 px-3 bg-surface border border-line rounded-[2px] text-sm flex-wrap cursor-text"
      onClick={() => setOpen((prev) => !prev)}
    >
      <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-surface text-xs font-medium">
        {label}
      </span>

      {value.map((item) => (
        <em
          key={item}
          className="inline-flex items-center gap-1 h-[22px] text-[14px] px-1 text-inc bg-[#f6f6f7] rounded-[2px] not-italic"
        >
          {item}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              remove(item)
            }}
            className="ml-1 text-soft"
          >
            <X height={16} width={16} />
          </button>
        </em>
      ))}

      <Counter current={value.length} max={max} className="right-3" />

      {open && (
        <div className="absolute left-0 right-0 top-[44px] z-20 bg-white border border-line rounded-[4px] shadow-lg p-2">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={(e) => {
                e.stopPropagation()
                add(opt)
              }}
              className={`px-2 py-1 flex justify-between items-center h-[46px] rounded cursor-pointer text-sm hover:bg-[#f6f6f7] ${
                value.includes(opt) ? 'text-purple' : ''
              }`}
            >
              {opt}
              {value.includes(opt) && (
                <span className="text-purple h-[20px] w-[20px] border border-purple rounded flex items-center justify-center">
                  <CheckIcon />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MultiDropDown
