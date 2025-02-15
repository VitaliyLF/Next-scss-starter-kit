import styles from './HeroSection.module.scss'
import { IHeroSectionProps } from './type'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const HeroSection = ({ className }: IHeroSectionProps) => {
  return (
    <div className={cx('hero', className)}>
      <div className="">HeroSection</div>
    </div>
  )
}

export default HeroSection
