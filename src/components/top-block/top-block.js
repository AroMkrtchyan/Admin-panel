import React from 'react';

import css from './top-block.module.css'
import hamburgerIcon from '../../icons/png/hamburger-icon.png'

const TopBlock = () => {
  return (
    <div className={css.topBlock}>
        <div><img src={hamburgerIcon} alt="hamburger-icon"/></div>
        <div><img src={hamburgerIcon} alt="hamburger-icon"/></div>
    </div>
  )
}

export default TopBlock