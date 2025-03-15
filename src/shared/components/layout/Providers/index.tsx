'use client'

import styles from './Providers.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cx('root')}>
      {children}
      {/* <Provider store={store}>{children}</Provider> */}
    </div>
  )
}

export default Providers
