type ButtonType = 'button' | 'submit'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  rounded?: boolean
  isActive?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  ariaLabel?: string
  title?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}
