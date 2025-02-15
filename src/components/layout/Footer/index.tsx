import styles from './Footer.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className="">Footer</div>
    </footer>
  )
}

export default Footer
