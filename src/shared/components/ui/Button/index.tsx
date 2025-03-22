import styles from './Button.module.scss'
import { IButtonProps } from './Button.types'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const Button = ({
  children,
  className,
  variant,
  size,
  disabled,
  loading,
  type = 'button',
  ariaLabel,
  title,
  onClick,
  startIcon,
  endIcon,
  fullWidth,
  text,
  isActive,
  ...props
}: IButtonProps) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      title={title}
      className={cx('button', className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.tertiary]: variant === 'tertiary',
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
        [styles.fullWidth]: fullWidth,
        [styles.text]: text,
        [styles.active]: isActive,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
        [styles.startIcon]: startIcon,
        [styles.endIcon]: endIcon,
      })}
      {...props}
      onClick={onClick}>
      {loading && <span className={cx('button__loading')} />}
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  )
}
