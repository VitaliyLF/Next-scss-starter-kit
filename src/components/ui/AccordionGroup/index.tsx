// import React, { useState } from 'react'

// import styles from './Accordion.module.scss'

// import classNames from 'classnames/bind'

// const cx = classNames.bind(styles)

// // Controlled Accordion component
// export const Accordion = ({ id, title, text, isOpen, onToggle, className }) => {
//   return (
//     <details
//       id={id}
//       className={cx('accordion', className)}
//       open={isOpen}
//       onClick={() => onToggle(id)}>
//       <summary className={cx('accordion__summary')}>
//         <span className={cx('accordion__title')} role="term">
//           {title}
//         </span>
//       </summary>
//       <div className={cx('accordion__content')} role="definition">
//         <div className={cx('accordion__inner')}>
//           <p className={cx('accordion__text')}>{text}</p>
//         </div>
//       </div>
//     </details>
//   )
// }

// // Parent component managing a group of Accordions
// export const AccordionGroup = () => {
//   // Default open IDs. You can list multiple for several open.
//   const [openIds, setOpenIds] = useState(new Set(['faq-2']))

//   const handleToggle = (id) => {
//     setOpenIds((prev) => {
//       const next = new Set(prev)
//       if (next.has(id)) {
//         next.delete(id)
//       } else {
//         next.add(id)
//       }
//       return next
//     })
//   }

//   const items = [
//     { id: 'faq-1', title: 'Title', text: 'Text' },
//     { id: 'faq-2', title: 'Title2', text: 'Text2' },
//     { id: 'faq-3', title: 'Title3', text: 'Text3' },
//     { id: 'faq-4', title: 'Title4', text: 'Text4' },
//   ]

//   return (
//     <div style={{ marginBottom: '200px' }}>
//       {items.map((item) => (
//         <Accordion
//           key={item.id}
//           id={item.id}
//           title={item.title}
//           text={item.text}
//           isOpen={openIds.has(item.id)}
//           onToggle={handleToggle}
//         />
//       ))}
//     </div>
//   )
// }
