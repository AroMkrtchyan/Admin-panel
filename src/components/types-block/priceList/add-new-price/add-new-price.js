import React from "react";

import css from './add-new-price.module.css'
import closeIcon from "../../../../icons/png/close-icon.png";
import BrilliantFormaList from "./brilliant-forma-list/brilliant-forma-list";
import BrilliantColorList from "./brilliant-color-list/brilliant-color-list";



const AddNewPrice = ({ closePriceListForm,
                       brilliantColorValue,
                       brilliantFormaValue,
                       formSubmitHandle,
                       currencyHandle}) => {

  return (
    <div className={css.addNewPrice}>
      <div className={css.addNewPriceHeader}>
        <p className={css.addNewPriceTitle}>
          добавить прайс лист
        </p>
        <span className={css.addNewPriceClose}>
          <img src={closeIcon} alt="close" onClick={closePriceListForm}/>
        </span>
      </div>
      <div className={css.addNewPriceContent}>
        <form action="" onSubmit={formSubmitHandle}>
          <p>Валюти</p>
          <select name="currency" id="currency"
                  className={css.currencySelect}
                  onChange={currencyHandle}>
            <option value="USD" >
             USD
            </option>
            <option value="RU">
              RU
            </option>
            <option value="AM">
              AM
            </option>
          </select>
          <BrilliantColorList brilliantColorValue={brilliantColorValue}/>
          <BrilliantFormaList brilliantFormaValue={brilliantFormaValue}/>
          <button type='submit' className={css.addNewPriceFormButton}>подтвердить</button>
        </form>
      </div>
    </div>
  )
}

export default AddNewPrice