import Link from 'next/link'

import styles from './Button.module.scss'
import { IButtonProps } from './Button.types'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
export const Button = ({
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
}: IButtonProps) => {
  const buttonClass = cx('button', className, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.ghost]: variant === 'ghost',
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
    [styles.square]: isSquare,
    [styles.fullWidth]: isFullWidth,
    [styles.active]: isActive,
    [styles.disabled]: isDisabled,
    [styles.loading]: isLoading,
    [styles.startIcon]: startIcon,
    [styles.endIcon]: endIcon,
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
