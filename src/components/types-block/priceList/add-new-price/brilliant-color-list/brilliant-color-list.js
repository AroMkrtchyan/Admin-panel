import React, {useState} from "react";

import css from './brilliant-color-list.module.css'
import whiteBrilliantImage from "../../../../../images/white_brilliant_image.png";
import pinkBrilliantImage from "../../../../../images/pink_brilliant_image.png";
import yellowBrilliantImage from "../../../../../images/yellow_brilliant_image.png";
import blackBrilliantImage from "../../../../../images/black_brilliant_image.png";
import AddNewColorItemForm from "./add-new-color-item-form/add-new-color-item-form";

const BrilliantColorList = ({ brilliantColorValue }) => {
    let [brilliantColorList, setBrilliantColorList] = useState([
        {
            image: whiteBrilliantImage,
            name: 'белый',
            value: 'white'
        },
        {
            image: pinkBrilliantImage,
            name: 'жёлтый',
            value: 'pink'
        },
        {
            image: yellowBrilliantImage,
            name: 'розовый',
            value: 'yellow'
        },
        {
            image: blackBrilliantImage,
            name: 'черный',
            value: 'black'
        }
    ])
    let [isOpenAddColorForm, setIsOpenAddColorForm] = useState(false)
    let [addNewColorNameInputValue, setAddNewColorNameInputValue] = useState('')

    const addNewColorNameInputHandle = (e) => {
        setAddNewColorNameInputValue(e.target.value)
    }
    const sendFormHandle = (event) => {
        event.preventDefault()
        alert('yu')
        setBrilliantColorList([...brilliantColorList, {
            image: whiteBrilliantImage,
            name: addNewColorNameInputValue,
            value: 'white'
        }])
    }
    const openAddColorForm = () => {
        setIsOpenAddColorForm(true)
    }
    const closeAddColorForm = () => {
        setIsOpenAddColorForm(false)
    }

    return (
    <div className={css.brilliantColorListWrapper}>
      <p>Цвет</p>
      <div className={css.brilliantColor}>
      <span className={css.addColorListItem} onClick={openAddColorForm}>
        +
      </span>
        <ul className={css.brilliantColorList}>
          {brilliantColorList.map((item,index) => {
            return (
              <li key={index}>
                <label className={css.inputLabel}>
                  <input type="radio" name='BrilliantColor' value={item.value} hidden
                            onChange={brilliantColorValue}/>
                  <img src={item.image} alt="brilliant"/>
                  <p>{item.name}</p>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
        {isOpenAddColorForm ? <AddNewColorItemForm
                                sendForm={sendFormHandle}
                                nameInputValue={addNewColorNameInputHandle}
                                closerAddColorForm={closeAddColorForm}/> : null}
    </div>
  )
}

export default BrilliantColorList