import styles from './Container.module.scss'
import { IContainerProps } from './type'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const Container = ({ children, className }: IContainerProps) => {
  return <div className={cx(className, 'container')}>{children}</div>
}
