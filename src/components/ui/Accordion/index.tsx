'use client'

import { useState } from 'react'

import styles from './Accordion.module.scss'
import { IAccordion } from './Accordion.type'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Accordion = ({ id, title, text, className, group, isOpen = false }: IAccordion) => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(!!isOpen)

  const handleClick = () => {
    setIsOpenAccordion(!isOpenAccordion)
  }

  return (
    <div className={cx('accordion', className)} onClick={handleClick}>
      <details className={cx('accordion__details')} name={group} open={isOpenAccordion}>
        <summary className={cx('accordion__summary')} onClick={(e) => e.stopPropagation()}>
          <span className={cx('accordion__title')} role="term" aria-details={id}>
            {title}
          </span>
        </summary>
      </details>
      <div className={cx('accordion__content')} id={id} role="definition">
        <div className={cx('accordion__inner')}>
          <p className={cx('accordion__text')}>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
