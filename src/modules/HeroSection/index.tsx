import SearchIcon from '@/shared/components/icons/search-icon.svg'
import Container from '@/shared/components/layout/Container'
import Button from '@/shared/components/ui/Button'

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
        <Button
          className={cx('hero__button')}
          variant="primary"
          size="small"
          ariaLabel="Click me"
          title="Click me"
          iconPosition="right"
          icon={<SearchIcon className={cx('hero__icon')} />}>
          Click me
        </Button>
      </Container>
    </section>
  )
}

export default HeroSection
