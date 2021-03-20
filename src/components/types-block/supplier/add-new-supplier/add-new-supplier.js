import React, { useState } from 'react'

import css from './add-new-supplier.module.css'
import closeIcon from "../../../../icons/png/close-icon.png";
import flagAM from "../../../../icons/png/flag-AM.png";
import flagRU from "../../../../icons/png/flag-RU.png";
import flagUSA from "../../../../icons/png/flag-USA.png";
import imageIcon from "../../../../icons/png/image_icon.png";

const AddNewSupplier = ({ newSupplierAdded, closeSupplierForm }) => {
  let [inputValue, setInputValue]  = useState('')
  let [selectValue, setSelectValue]  = useState('')


  const handleChangeSelect = (e) => {
      setSelectValue(e.target.value);
  }
  const handleChangeInput = (e) => {
      setInputValue(e.target.value);
  }
  const handleSubmit = (event) => {
      event.preventDefault()
      closeSupplierForm()
      newSupplierAdded(inputValue, selectValue)
      setInputValue('')
  }

  return (
    <div className={css.addNewSupplier}>
        <div className={css.addNewSupplierHeader}>
          <p className={css.addNewSupplierTitle}>
            добавить Поставщики
          </p>
          <span className={css.addNewSupplierClose}>
            <img src={closeIcon} alt="close" onClick={closeSupplierForm}/>
          </span>
        </div>
        <div className={css.addNewSupplierContent}>
            <div className={css.addNewSupplierFlags}>
                <img src={flagAM} alt="AM"/>
                <img src={flagRU} alt="RU"/>
                <img src={flagUSA} alt="USA"/>
            </div>
            <form action=""
                className={css.addNewSupplierForm}
                onSubmit={handleSubmit}>
                <label>
                    <input type="file" hidden />
                    <div className={css.addNewSupplierItemFormImageBlock}>
                        <img src={imageIcon} alt="file block"/>
                        <p>
                            Фото
                        </p>
                    </div>
                </label>
              <p>названия</p>
              <input type="text" value={inputValue} onChange={handleChangeInput} required/>
              <p>тип </p>
              <select name="supplier-type" id="supplier-type" onChange={handleChangeSelect} >
                <option value="no type">Select Type</option>
                <option value="Designer">Designer</option>
                <option value="type 1">type 1</option>
                <option value="type 2">type 2</option>
              </select>
              <button type='submit' className={css.supplierButton}>
                  подтвердить
              </button>
            </form>
        </div>
    </div>
  )
}

export default AddNewSupplier;