import type { ReactNode } from 'react'

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined
  title: string | ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({ type = 'button', title, className = '', onClick, ...props }: Props) => (
  <button type={type} className={className} onClick={onClick} {...props}>
    {title}
  </button>
)

export default Button
