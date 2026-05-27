import clsx from 'clsx'

const Checkbox = ({ label, className = '', ...props }: { label: string; className?: string }) => (
  <label
    className={clsx(
      'check flex items-center gap-3 min-h-[20px] text-ink text-xs leading-[18px] cursor-pointer',
      className
    )}
  >
    <input type="checkbox" {...props} className="checkbox" />
    <span>{label}</span>
  </label>
)

export default Checkbox
