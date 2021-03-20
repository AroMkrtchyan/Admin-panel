import React from 'react';

import css from './left-block.module.css'
import icon1 from '../../icons/png/left-icon1.png'
import icon2 from '../../icons/png/left-icon2.png'
import icon3 from '../../icons/png/left-icon3.png'
import icon4 from '../../icons/png/left-icon4.png'
import icon5 from '../../icons/png/left-icon5.png'

const LeftBlock = () => {
  return (
    <div className={css.leftBlock}>
      <div><img src={icon1} alt="icon"/></div>
      <div><img src={icon2} alt="icon"/></div>
      <div><img src={icon3} alt="icon"/></div>
      <div><img src={icon4} alt="icon"/></div>
      <div><img src={icon5} alt="icon"/></div>
    </div>
  )
}

export default LeftBlock