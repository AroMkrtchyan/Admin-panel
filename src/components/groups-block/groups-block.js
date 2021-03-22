import React, {useState} from 'react'

import css from './groups-block.module.css'
import flagAM from '../../icons/png/flag-AM.png'
import flagUSA from '../../icons/png/flag-USA.png'
import flagRU from '../../icons/png/flag-RU.png'
import GroupForm from "./GroupeForm/group-form";

import brilliantWhite from '../../images/white_brilliant_image.png'
import brilliantCircle from '../../images/brilliant_form_circle.png'
import brilliantSizeIcon from '../../icons/png/brilliant-size-icon.png'

const GroupBlock = () => {
  let [isFormOpen, setIsFormOpen] = useState(false)
  let [qualityData, setQualityData] = useState([])
  let [priceData, setPriceData] = useState([])
  let [shadeValue, setNewShadeValue] = useState([1,4]);
  let [cleanlinessValue, setNewCleanlinessValue] = useState([2,6]);
  let [internalName, setInternalName] = useState('');
  let [forSaleName, setForSaleName] = useState('');


  const formSubmit = (e) => {
    e.preventDefault()
    let shadeHandle = [];
    let cleanlinessHandle = [];
    switch (shadeValue[0]) {
      case 0 : shadeHandle[0] = 'D'; break;
      case 1 : shadeHandle[0] = 'E'; break;
      case 2 : shadeHandle[0] = 'F'; break;
      case 3 : shadeHandle[0] = 'G'; break;
      case 4 : shadeHandle[0] = 'H'; break;
      case 5 : shadeHandle[0] = 'I'; break;
      case 6 : shadeHandle[0] = 'J'; break;
    }
    switch (shadeValue[1]) {
      case 0 : shadeHandle[1] = 'D'; break;
      case 1 : shadeHandle[1] = 'E'; break;
      case 2 : shadeHandle[1] = 'F'; break;
      case 3 : shadeHandle[1] = 'G'; break;
      case 4 : shadeHandle[1] = 'H'; break;
      case 5 : shadeHandle[1] = 'I'; break;
      case 6 : shadeHandle[1] = 'J'; break;
    }
    switch (cleanlinessValue[0]) {
      case 0 : cleanlinessHandle[0] = 'IF'; break;
      case 1 : cleanlinessHandle[0] = 'VVS!'; break;
      case 2 : cleanlinessHandle[0] = 'VVS2'; break;
      case 3 : cleanlinessHandle[0] = 'VS1'; break;
      case 4 : cleanlinessHandle[0] = 'VS2'; break;
      case 5 : cleanlinessHandle[0] = 'FL'; break;
      case 6 : cleanlinessHandle[0] = 'PL'; break;
      case 7 : cleanlinessHandle[0] = 'P2'; break;
      case 8 : cleanlinessHandle[0] = 'SI1'; break;
      case 9 : cleanlinessHandle[0] = 'SI2'; break;
    }
    switch (cleanlinessValue[1]) {
      case 0 : cleanlinessHandle[1] = 'IF'; break;
      case 1 : cleanlinessHandle[1] = 'VVS!'; break;
      case 2 : cleanlinessHandle[1] = 'VVS2'; break;
      case 3 : cleanlinessHandle[1] = 'VS1'; break;
      case 4 : cleanlinessHandle[1] = 'VS2'; break;
      case 5 : cleanlinessHandle[1] = 'FL'; break;
      case 6 : cleanlinessHandle[1] = 'PL'; break;
      case 7 : cleanlinessHandle[1] = 'P2'; break;
      case 8 : cleanlinessHandle[1] = 'SI1'; break;
      case 9 : cleanlinessHandle[1] = 'SI2'; break;
    }

    setQualityData([...qualityData, {
      shade: shadeHandle.join(''),
      cleanliness: cleanlinessHandle.join(''),
      price : ''
    }])

    formClose()
  }
  const shadeHandleChange = (event, newShadeValue) => {
    setNewShadeValue(newShadeValue);
  };
  const cleanlinessHandleChange = (event, newCleanlinessValue) => {
    setNewCleanlinessValue(newCleanlinessValue);
  };
  const internalNameValueHandler = (e) => {
    setInternalName(e.target.value)
  };
  const forSaleNameValueHandler = (e) => {
    setForSaleName(e.target.value)
  };
  const formOpen = () => {
    setIsFormOpen(true)
  }
  const formClose = () => {
    setIsFormOpen(false)
  }
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
              <th colSpan='200'><p className={css.tableTitle}>качества</p></th>
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
              {qualityData.map((item, index) => {
                return (
                  <td key={index}>
                    <p>{`${item.shade}-${item.cleanliness}`}</p>
                    <p></p>
                  </td>
                  )
              })}
              <td>
                <span className={css.plusIcon} onClick={formOpen}>
                  +
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={css.priceTable}>
          <thead>
            <tr>
              <th><img src={brilliantSizeIcon} alt="size icon"/></th>
              <th colSpan="200"><p className={css.tableTitle}>цена</p></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <span></span>
              </td>
              {qualityData.map((item,index) => {
                return (
                    <td key={index}><span>{item.price}</span></td>
                )
              })}
              <td>
                <span></span>
              </td>
            </tr>

          </tbody>


       </table>
      </div>

      {isFormOpen ? <GroupForm formCloser={formClose}
                                cleanlinessHandleChanger={cleanlinessHandleChange}
                                shadeHandleChanger={shadeHandleChange}
                                internalNameValue={internalNameValueHandler}
                                forSaleNameValue={forSaleNameValueHandler}
                                formHandler = {formSubmit}/> : null}
    </div>
  )
};

export default GroupBlock