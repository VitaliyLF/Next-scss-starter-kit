type ButtonType = 'button' | 'submit'
type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'small' | 'medium' | 'large'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  type?: ButtonType
  variant?: ButtonVariant
  size?: ButtonSize
  onClick?: () => void
  ariaLabel?: string
  title?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  href?: string
  targetBlank?: boolean
  isSquare?: boolean
  isFullWidth?: boolean
  isActive?: boolean
  isDisabled?: boolean
  isLoading?: boolean
}
