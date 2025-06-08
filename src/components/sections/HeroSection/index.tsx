import ProfileIcon from '@/components/icons/profile-icon.svg'
import SearchIcon from '@/components/icons/search-icon.svg'
import { Container } from '@/components/layout/Container'
import { Accordion } from '@/components/ui/Accordion'
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
        <div
          className=""
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: '200px',
            marginTop: '50px',
          }}>
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
          <Button
            variant="secondary"
            size="large"
            href="/blog"
            startIcon={<ProfileIcon />}></Button>
          <Button variant="secondary" size="large" iconSize={42} endIcon={<ProfileIcon />}></Button>
          <Button variant="secondary" size="large" iconSize="large" endIcon={<ProfileIcon />}>
            Profile
          </Button>
        </div>
        <div
          style={{
            marginBottom: '200px',
          }}>
          <Accordion id="faq-1" title="Title" text="Text" group="faq" />
          <Accordion id="faq-2" title="Title2" text="Text2" group="faq" isOpenTarget />
          <Accordion id="faq-3" title="Title3" text="Text3" group="faq" />
          <Accordion id="faq-4" title="Title4" text="Text4" group="faq" />
        </div>
      </Container>
    </section>
  )
}
