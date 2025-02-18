import Container from '@/components/layout/Container'
import ProfileIcon from '@/components/shared/icons/profile-icon.svg'
import SearchIcon from '@/components/shared/icons/search-icon.svg'

import styles from './HeroSection.module.scss'
import { IHeroSectionProps } from './type'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const HeroSection = ({ className }: IHeroSectionProps) => {
  return (
    <section className={cx('hero', className)}>
      <Container className={cx('hero__container')}>
        HeroSection
        <SearchIcon className={cx('hero__icon')} />
        <ProfileIcon className={cx('hero__icon')} />
      </Container>
    </section>
  )
}

export default HeroSection
