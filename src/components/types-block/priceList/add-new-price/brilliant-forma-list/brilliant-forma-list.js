import React, {useState} from "react";

import css from './brilliant-forma-list.module.css'
import circleFormaImage from "../../../../../images/brilliant_form_circle.png";
import ovalFormaImage from "../../../../../images/brilliant_form_oval.png";
import asherFormaImage from "../../../../../images/brilliant_form_asher.png";
import heartFormaImage from "../../../../../images/brilliant_form_heart.png";
import cubeFormaImage from "../../../../../images/brilliant_form_cube.png";
import emeraldFormaImage from "../../../../../images/brilliant_form_emerald.png";
import baguetteFormaImage from "../../../../../images/brilliant_form_baguette.png";
import princessFormaImage from "../../../../../images/brilliant_form_princess.png";

const BrilliantFormaList = ({ brilliantFormaValue }) => {

  let [brilliantFormaList, setBrilliantFormaList] = useState([
    {
      image: circleFormaImage,
      name: 'Круг',
      value: 'circle'
    },
    {
      image: ovalFormaImage,
      name: 'Овал',
      value: 'oval'
    },
    {
      image: asherFormaImage,
      name: 'Ашер',
      value: 'asher'
    },
    {
      image: heartFormaImage,
      name: 'Сердце',
      value: 'heart'
    },
    {
      image: cubeFormaImage,
      name: 'квадрат',
      value: 'cube'
    },
    {
      image: emeraldFormaImage,
      name: 'Изумруд',
      value: 'emerald'
    },
    {
      image: baguetteFormaImage,
      name: 'багет',
      value: 'baguette'
    },
    {
      image: princessFormaImage,
      name: 'Принцесса',
      value: 'princess'
    }
  ])

  return (
    <div className={css.brilliantFormaWrapper}>
      <p>Огранка</p>
      <div className={css.brilliantforma}>
      <span className={css.addBrilliantformaItem} >
        +
      </span>
        <ul className={css.brilliantFormaList}>
          {brilliantFormaList.map((item,index) => {
            return (
              <li key={index}>
                <label>
                  <input type="radio" name='Brilliantforma' value={item.value}
                         onChange={brilliantFormaValue} hidden/>
                  <img src={item.image} alt="brilliant"/>
                  <p>{item.name}</p>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default BrilliantFormaList