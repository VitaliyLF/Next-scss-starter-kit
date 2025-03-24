import SearchIcon from '@/components/icons/search-icon.svg'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

import styles from './HeroSection.module.scss'
import { IHeroSectionProps } from './HeroSection.types'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const HeroSection = ({ className }: IHeroSectionProps) => {
  return (
    <section className={cx('hero', className)}>
      <Container className={cx('hero__container')}>
        HeroSection
        <SearchIcon className={cx('hero__icon')} />
        <Button
          className={cx('hero__button')}
          variant="primary"
          size="small"
          startIcon={<SearchIcon aria-hidden="true" />}>
          Click me
        </Button>
      </Container>
    </section>
  )
}

export default HeroSection
