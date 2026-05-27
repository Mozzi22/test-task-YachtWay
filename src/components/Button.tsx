import type { ReactNode } from 'react'

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined
  title: string | ReactNode
  className?: string
}

const Button = ({ type = 'button', title, className = '', ...props }: Props) => (
  <button type={type} className={className} {...props}>
    {title}
  </button>
)

export default Button
