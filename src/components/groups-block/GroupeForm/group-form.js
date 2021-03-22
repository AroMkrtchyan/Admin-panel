import React from 'react'

import css from './group-form.module.css'
import CloseIcon from '../../../icons/png/close-icon.png'

import { Slider } from "@material-ui/core";
import flagAM from "../../../icons/png/flag-AM.png";
import flagRU from "../../../icons/png/flag-RU.png";
import flagUSA from "../../../icons/png/flag-USA.png";




const GroupForm  = ({ formCloser,cleanlinessHandleChanger, shadeHandleChanger, internalNameValue, forSaleNameValue, formHandler }) => {

    const marksShade  = [
        {
            value: 0,
            label: 'D',
        },
        {
            value: 1,
            label: 'E',
        },
        {
            value: 2,
            label: 'F',
        },
        {
            value: 3,
            label: 'G',
        },
        {
            value: 4,
            label: 'H',
        },
        {
            value: 5,
            label: 'I',
        },
        {
            value: 6,
            label: 'J',
        },
    ];
    const marksCleanliness = [
        {
            value: 0,
            label: 'IF',
        },
        {
            value: 1,
            label: 'VVS1',
        },
        {
            value: 2,
            label: 'VVS2',
        },
        {
            value: 3,
            label: 'VS1',
        },
        {
            value: 4,
            label: 'VS2',
        },
        {
            value: 5,
            label: 'FL',
        },
        {
            value: 6,
            label: 'PL',
        },
        {
            value: 7,
            label: 'PL2',
        },
        {
            value: 8,
            label: 'SI1',
        },
        {
            value: 9,
            label: 'SI2',
        },
    ];



    return (
      <div className={css.groupForm}>
        <div className={css.groupFormHeader}>
          <p className={css.groupFormTitle}>
            группы
          </p>
          <span className={css.gropeFormClose} onClick={formCloser}>
            <img src={CloseIcon} alt="close"/>
          </span>
        </div>
        <form className={css.groupFormContent} onSubmit={formHandler}>
          <div className={css.groupformShade}>
            <p className={css.sliderTitle}>
              оттенок
            </p>
            <Slider
                onChange={shadeHandleChanger}
                defaultValue={[1,4]}
                aria-labelledby="discrete-slider-custom"
                marks={marksShade}
                min={0}
                max={6}
            />
          </div>
          <div className={css.groupformCleanliness}>
            <p className={css.sliderTitle}>
              Чистота
            </p>
            <Slider
                onChange={cleanlinessHandleChanger}
                defaultValue={[2,6]}
                aria-labelledby="discrete-slider-custom"
                marks={marksCleanliness}
                min={0}
                max={9}/>
          </div>
          <div className={css.bottomBlockWrapper}>
            <div className={css.groupFormFlags}>
              <img src={flagAM} alt="AM"/>
              <img src={flagRU} alt="RU"/>
              <img src={flagUSA} alt="USA"/>
            </div>
            <div className={css.FormInputWrapper}>
              <div className={css.internalName}>
                <p className={css.formInputTitle}>
                  внутренняя имя
                </p>
                <input type="text"  onChange={internalNameValue}/>
              </div>
              <div className={css.forSaleName}>
                <p className={css.formInputTitle}>
                  для продаже
                </p>
                <input type="text" onChange={forSaleNameValue}/>
                <button type='submit' className={css.groupformButton}>подтвердить</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
};

export default GroupForm