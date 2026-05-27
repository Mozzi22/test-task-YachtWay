import { useEffect, useRef, useState } from 'react'

const CURRENCY_OPTIONS = ['USD', 'EUR']

const CurrencyDropDown = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>(CURRENCY_OPTIONS[0])
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
    <b
      ref={ref}
      className="absolute rounded-[4px] right-3 top-1.5 p-1 text-[#2f2f39] text-[14px] bg-surface-alt font-medium leading-4 flex items-center cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
    >
      {selected}
      <button
        className="right-[1px] !w-[20px] !h-[20px] !p-0 !border-0 !bg-transparent text-transparent flex items-center justify-center after:block after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45"
        type="button"
        aria-label="Show currency options"
      />
      {open && (
        <div
          className="combo-menu flex-col w-[100px] flex p-2 bg-surface border border-line rounded-[4px] shadow-[0_14px_32px_rgba(34,34,45,0.14)]"
          id="currency-options"
          role="dialog"
        >
          {CURRENCY_OPTIONS.map((option) => (
            <div key={option} className="combo-option" onClick={() => setSelected(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </b>
  )
}

export default CurrencyDropDown
