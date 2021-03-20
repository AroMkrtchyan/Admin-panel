import React from "react";

import css from './add-new-color-item-form.module.css'
import closeIcon from '../../../../../../icons/png/close-icon.png'
import imageIcon from '../../../../../../icons/png/image_icon.png'

const AddNewColorItemForm = ({ closerAddColorForm,nameInputValue, sendForm }) => {
  return (
    <div className={css.addNewColorItemForm}>
      <div className={css.addNewColorItemFormHeader}>
        <p className={css.addNewColorItemFormTitle}>
          добавить цвет
        </p>
        <span className={css.addNewColorFormClose} onClick={closerAddColorForm}>
          <img src={closeIcon} alt="close"/>
        </span>
      </div>
      <form className={css.addNewColorItemFormContent}
            onSubmit={sendForm}>
        <label>
          <input type="file" hidden />
          <div className={css.addNewColorItemFormImageBlock}>
            <img src={imageIcon} alt="file block"/>
            <p>
              Фото
            </p>
          </div>
        </label>

        <p>названия</p>
        <input type="text" onChange={nameInputValue}/>
        <button type='submit'>подтвердить</button>
      </form>
    </div>
  )
}

export default AddNewColorItemForm