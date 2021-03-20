import React from 'react'

import css from './groups-block.module.css'
import flagAM from '../../icons/png/flag-AM.png'
import flagUSA from '../../icons/png/flag-USA.png'
import flagRU from '../../icons/png/flag-RU.png'
import GroupForm from "./GroupeForm/group-form";

import brilliantWhite from '../../images/white_brilliant_image.png'
import brilliantCircle from '../../images/brilliant_form_circle.png'

const GroupBlock = () => {
  return (
    <div className={css.groupBlock}>
      <p className={css.groupBlockTitle}>группы</p>
      <div className={css.groupBlockFlags}>
          <img src={flagAM} alt="AM"/>
          <img src={flagRU} alt="RU"/>
          <img src={flagUSA} alt="USA"/>
      </div>
      <div className={css.groupBlockContent}>
        <table className={css.infoTable}>
          <thead>
            <tr>
                <th>
                    <select name="" id="">
                        <option value="USD">USD</option>
                        <option value="RU">RU</option>
                        <option value="AM">AM</option>
                    </select>
                </th>
                <th><p className={css.tableTitle}>качества</p></th>
            </tr>
          </thead>
          <tbody>
           <tr>
               <td className={css.imageSection}>
                   <div>
                       <img src={brilliantWhite} alt="brilliant color"/>
                       <p>белый</p>
                   </div>
                   <div>
                       <img src={brilliantCircle} alt="brilliant form"/>
                       <p>круглый</p>
                   </div>
               </td>
               <td><span className={css.plusIcon}>+</span></td>
           </tr>
          </tbody>

        </table>
        <table>
            <thead>
            <tr>
                <th>2</th>
                <th>2</th>
            </tr>
            </thead>

        </table>
      </div>

      {/*<GroupForm />*/}
    </div>
  )
};

export default GroupBlock