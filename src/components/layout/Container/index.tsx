import styles from './Container.module.scss'
import { IContainer } from './Container.types'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Container = ({ children, className }: IContainer) => {
  return <div className={cx(className, 'container')}>{children}</div>
}

export default Container
