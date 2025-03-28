import { Container } from '@/components/layout/Container'

import styles from './Footer.module.scss'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <Container className={cx('footer__container')}>
        <div className="">Footer</div>
      </Container>
    </footer>
  )
}
