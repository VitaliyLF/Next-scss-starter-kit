type ButtonType = 'button' | 'submit'
type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonIconSize = 'small' | 'medium' | 'large' | number

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  // Обязательные свойства
  size: ButtonSize
} & Partial<{
    // Partial чтобы свойства были необязательными и не писать ? у всех
    variant: ButtonVariant
    children: React.ReactNode
    className: string
    type: ButtonType
    onClick: () => void
    ariaLabel: string
    title: string
    startIcon: React.ReactNode
    endIcon: React.ReactNode
    href: string
    targetBlank: boolean
    isSquare: boolean
    isFullWidth: boolean
    isActive: boolean
    isDisabled: boolean
    isLoading: boolean
    iconSize: ButtonIconSize
  }>
