'use client'

import { useState } from 'react'

import styles from './Accordion.module.scss'
import { IAccordionProps } from './Accordion.type'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const Accordion = ({
  id,
  title,
  text,
  className,
  group,
  isOpenTarget = false,
}: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(!!isOpenTarget)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={cx('accordion', className)} onClick={handleClick}>
      <details className={cx('accordion__details')} name={group} open={isOpen}>
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
