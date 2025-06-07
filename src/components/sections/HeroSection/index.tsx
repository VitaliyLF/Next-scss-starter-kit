import ProfileIcon from '@/components/icons/profile-icon.svg'
import SearchIcon from '@/components/icons/search-icon.svg'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

import styles from './HeroSection.module.scss'
import { IHeroSectionProps } from './HeroSection.types'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const HeroSection = ({ className }: IHeroSectionProps) => {
  return (
    <section className={cx('hero', className)}>
      <Container className={cx('hero__container')}>
        HeroSection
        <SearchIcon className={cx('hero__icon')} />
        <Button className={cx('hero__button')} size="small" startIcon={<SearchIcon />}>
          Click me
        </Button>
        <Button
          href="/blog"
          className={cx('hero__link')}
          size="small"
          ariaLabel="Link"
          title="Link"
          endIcon={<SearchIcon />}>
          Link
        </Button>
        <Button variant="primary" size="large">
          Primary
        </Button>
        <Button isLoading variant="primary" size="large">
          Loading
        </Button>
        <Button variant="secondary" size="small">
          Secondary
        </Button>
        <Button variant="primary" size="medium" isSquare>
          Square
        </Button>
        <Button variant="ghost" size="large">
          Ghost
        </Button>
        <Button
          variant="primary"
          ariaLabel="Search"
          size="large"
          href="/blog"
          startIcon={<SearchIcon />}></Button>
        <Button variant="secondary" size="large" href="/blog" startIcon={<ProfileIcon />}></Button>
        <Button variant="secondary" size="large" iconSize={42} endIcon={<ProfileIcon />}></Button>
        <Button variant="secondary" size="large" iconSize="large" endIcon={<ProfileIcon />}>
          Profile
        </Button>
      </Container>
    </section>
  )
}
