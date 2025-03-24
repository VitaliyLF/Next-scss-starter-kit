type ButtonType = 'button' | 'submit'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  text?: boolean
  isActive?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  ariaLabel?: string
  title?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}
