import React, { useState } from 'react'

import css from './add-new-type.module.css'
import closeIcon from '../../../../icons/png/close-icon.png'
import flagAM from '../../../../icons/png/flag-AM.png'
import flagUSA from '../../../../icons/png/flag-USA.png'
import flagRU from '../../../../icons/png/flag-RU.png'

const AddNewType = ({newTypeAdded, CloseAddNewTypeForm}) => {
    let [inputValue, setInputValue] = useState('')

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        CloseAddNewTypeForm()
        newTypeAdded(inputValue)
        setInputValue('')
    }
  return (
    <div className={css.addNewType}>
      <div className={css.addNewTypeHeader}>
        <p className={css.addNewTypeTitle}>
          добавить типы
        </p>
        <span className={css.addNewTypeClose}>
          <img src={closeIcon} alt="close" onClick={CloseAddNewTypeForm}/>
        </span>
      </div>
      <div className={css.addNewTypeContent}>
        <div className={css.addNewTypeFlags}>
          <img src={flagAM} alt="AM"/>
          <img src={flagRU} alt="RU"/>
          <img src={flagUSA} alt="USA"/>
        </div>
        <p>названия</p>
        <form
            action=""
            className={css.addNewTypeForm}
            onSubmit={handleSubmit}>
          <input type="text" required value={inputValue}
                    onChange={handleChangeInput}/>
          <button type='submit' className={css.typesFormButton}>
              подтвердить
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddNewType