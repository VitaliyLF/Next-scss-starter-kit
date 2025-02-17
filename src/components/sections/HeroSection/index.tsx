import TwitterIcon from '@/assets/svg/twitter.svg'

import styles from './HeroSection.module.scss'
import { IHeroSectionProps } from './type'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const HeroSection = ({ className }: IHeroSectionProps) => {
  return (
    <div className={cx('hero', className)}>
      <div className="">HeroSection</div>
      <TwitterIcon className={cx('hero__twitter-icon')} />
    </div>
  )
}

export default HeroSection
