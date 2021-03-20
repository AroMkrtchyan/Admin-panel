import React, { useState } from "react";

import css from './priceList.module.css'
import flagUSA from '../../../icons/png/flag-USA.png'
import toolsIcon from '../../../icons/svg/tools-icon.svg'
import brilliantColor from '../../../images/white_brilliant_image.png'
import brilliantFormCircle from '../../../images/brilliant_form_circle.png'
import brilliantFormCube from '../../../images/brilliant_form_cube.png'
import brilliantFormHeart from '../../../images/brilliant_form_heart.png'
import brilliantFormOval from '../../../images/brilliant_form_oval.png'
import AddNewPrice from "./add-new-price/add-new-price";


const PriceList = () => {
    let [priceList, setPriceList] = useState([
        {
            currency: "USD",
            flagCurrency: flagUSA,
            brilliant: brilliantColor,
            brilliantForm: brilliantFormCircle
        },
        {
            currency: "USD",
            flagCurrency: flagUSA,
            brilliant: brilliantColor,
            brilliantForm: brilliantFormHeart
        },
        {
            currency: "USD",
            flagCurrency: flagUSA,
            brilliant: brilliantColor,
            brilliantForm: brilliantFormCube
        },
        {
            currency: "USD",
            flagCurrency: flagUSA,
            brilliant: brilliantColor,
            brilliantForm: brilliantFormOval
        }
    ])

    let [isShowPriceListForm, setIsShowPriceListForm] = useState(false)
    let [formaValue, setFormaValue] = useState('')
    let [colorValue, setColorValue] = useState('')
    let [currencyValue, setCurrencyValue] = useState('')

    const showPriceListForm = () => {
        setIsShowPriceListForm(true)
    }
    const hidePriceListForm = () => {
        setIsShowPriceListForm(false)
    }
    const formaInputHandle = (e) => {
        setFormaValue(e.target.value)
    }
    const colorInputHandle = (e) => {
        setColorValue(e.target.value)
    }
    const currencyHandleValue = (e) => {
        setCurrencyValue(e.target.value)
    }
    const submitHandle = (e) => {
        e.preventDefault()
        setIsShowPriceListForm(false)
        setPriceList([...priceList, {
            currency: "USD",
            flagCurrency: flagUSA,
            brilliant: brilliantColor,
            brilliantForm: brilliantFormOval
        }])
        console.log(formaValue,colorValue,currencyValue)
    }

  return (
    <div className={css.priceList}>
      <p className={css.priceListTitle}>
        прайс лист
      </p>
      <div className={css.priceListItemWrapper}>
        <div className={css.addListItem} onClick={showPriceListForm}>+</div>
          {
            priceList.map((item,index ) => {
            return (
              <div className={css.priceListItem} key={index}>
                <div>
                  <span><img src={item.flagCurrency} alt="flag USD"/> {item.currency}</span>
                  <img src={toolsIcon} alt="tools icon"/>
                </div>
                <div>
                  <img src={item.brilliant} alt="brilliant"/>
                  <img src={item.brilliantForm} alt="brilliant form"/>
                </div>
              </div>
            )
            })
          }
      </div>
      {isShowPriceListForm ? <AddNewPrice closePriceListForm={hidePriceListForm}
                                          brilliantFormaValue={formaInputHandle}
                                          brilliantColorValue={colorInputHandle}
                                          formSubmitHandle={submitHandle}
                                          currencyHandle={currencyHandleValue}/>
         : null}
    </div>
  )
}

export default PriceList;