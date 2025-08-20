import Link from 'next/link'

import styles from './Button.module.scss'
import { IButton } from './Button.types'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Button = ({
  children,
  className,
  type = 'button',
  variant,
  size = 'medium',
  onClick,
  ariaLabel,
  title,
  startIcon,
  endIcon,
  href,
  targetBlank,
  isSquare,
  isFullWidth,
  isActive,
  isDisabled,
  isLoading,
  iconSize = 'medium',
  ...props
}: IButton) => {
  const buttonClass = cx('button', className, size, {
    primary: variant === 'primary',
    secondary: variant === 'secondary',
    ghost: variant === 'ghost',
    square: isSquare,
    fullWidth: isFullWidth,
    active: isActive,
    disabled: isDisabled,
    loading: isLoading,
    startIcon: startIcon,
    endIcon: endIcon,
  })

  const iconStyle =
    typeof iconSize === 'number' ? ({ '--icon-size': `${iconSize}px` } as React.CSSProperties) : {}

  const buttonContent = (
    <>
      {isLoading && <span className={cx('button__loading')}>...</span>}
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClass}
        aria-label={ariaLabel}
        title={title}
        target={targetBlank ? '_blank' : '_self'}
        data-icon-size={iconSize}
        style={iconStyle}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      title={title}
      className={buttonClass}
      {...props}
      onClick={onClick}>
      {buttonContent}
    </button>
  )
}

export default Button
