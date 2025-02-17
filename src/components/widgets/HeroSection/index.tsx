import SearchIcon from '@/components/shared/icons/search-icon.svg'

import styles from './HeroSection.module.scss'
import { IHeroSectionProps } from './type'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const HeroSection = ({ className }: IHeroSectionProps) => {
  return (
    <div className={cx('hero', className)}>
      <div className="">HeroSection</div>
      <SearchIcon className={cx('hero__icon')} />
    </div>
  )
}

export default HeroSection
