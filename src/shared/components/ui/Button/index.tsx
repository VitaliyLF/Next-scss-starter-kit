import styles from './Button.module.scss'
import { IButtonProps } from './type'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Button = ({
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
  icon,
  iconPosition = 'left',
  fullWidth,
  rounded,
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
        [styles.rounded]: rounded,
        [styles.active]: isActive,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
        [styles.hasIcon]: !!icon,
        [styles.iconLeft]: icon && iconPosition === 'left',
        [styles.iconRight]: icon && iconPosition === 'right',
      })}
      {...props}
      onClick={onClick}>
      {loading && <span className={cx('button__loading')} />}
      {icon && icon}
      {children}
    </button>
  )
}

export default Button
