import Logo from '@/components/common/Logo'
import Container from '@/components/layout/Container'

import styles from './Header.module.scss'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cx('header')}>
      <Container className={cx('header__container')}>
        <div className="">
          Header
          <Logo />
        </div>
      </Container>
    </header>
  )
}

export default Header
