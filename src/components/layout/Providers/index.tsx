'use client'

import { store } from '@/store'

import styles from './Providers.module.scss'

import classNames from 'classnames/bind'
import { Provider } from 'react-redux'

const cx = classNames.bind(styles)

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cx('root')}>
      {children}
      <Provider store={store}>{children}</Provider>
    </div>
  )
}

export default Providers
