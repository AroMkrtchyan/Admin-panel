import React, { useState } from "react";

import css from './types-group.module.css'
import AddTypesGroupForm from "./add-types-group-form/add-types-group-form";


const TypesGroup = () => {
    let [groupBrilliant, setGroupBrilliant] = useState([
        {
            type: 'бриллиант',
        },
        {
            type: 'цветной'
        }
    ])
    let [isOpenFormBlock, setIsOpenFormBlock] = useState(false)
    let [formInputValue, setFormInputValue] = useState('')

    const submitHandle = (e) => {
        e.preventDefault()
        closeAddForm()
        setGroupBrilliant([...groupBrilliant,
            {
                type: formInputValue
            }])
    }
    const inputNameHandle = (e) => {
        setFormInputValue(e.target.value)
    }
    const closeAddForm = () => {
        setIsOpenFormBlock(false)
    }
    const openAddForm = () => {
        setIsOpenFormBlock(true)
    }
  return (
    <div className={css.contentTitle}>
      <p>
        группы
      </p>
      <div className={css.changeColor}>
        <ul className={css.changeColorList}>
          {
              groupBrilliant.map((item,index) => {
              return (
                <li key={index}>{item.type}</li>
              )
            })
          }
        </ul>
        <span className={css.listItemAdd} onClick={openAddForm}>
            +
        </span>
      </div>
        {isOpenFormBlock ? <AddTypesGroupForm
                              closerFormBlock={closeAddForm}
                              inputNameHandler={inputNameHandle}
                              submitHandler={submitHandle}/> : null}
    </div>
  )
}

export default TypesGroup