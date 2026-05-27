import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const Counter = ({
  current,
  max,
  className = ''
}: {
  current: number
  max: number
  className?: string
}) => (
  <b
    className={twMerge(
      clsx(
        'absolute right-[35px] top-2 px-2 py-1 bg-[#FCFAFE] text-[11px] font-medium leading-4 rounded-[26px]',
        className
      )
    )}
  >
    <span className="text-purple-line">{current}</span>
    <span className="text-purple">{`/${max}`}</span>
  </b>
)

export default Counter
