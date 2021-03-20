import React, { useState } from 'react'

import css from './supplier.module.css'
import supplierImage from '../../../images/supplier.png'
import toolsIcon from '../../../icons/svg/tools-icon.svg'
import AddNewSupplier from "./add-new-supplier/add-new-supplier";


const Supplier = () => {
    let [isShowAddNewSupplierForm, setIsShowAddNewSupplierForm] = useState(false)
    let [suppliers, setSuppliers] = useState([
                                                    {
                                                        image: supplierImage,
                                                        name: 'Поставщики',
                                                        id: 1
                                                    }
                                                    ])
    const openNewSupplierForm = () => {
        setIsShowAddNewSupplierForm(true)
    }
    const closeNewSupplierForm = () => {
        setIsShowAddNewSupplierForm(false)
    }
    const addNewSupplier = (name, type) => {
        setSuppliers([...suppliers,{
            image: supplierImage,
            name: name,
            type: type,
            id: suppliers.length + 1
        }])
    }
  return (
    <div className={css.supplier}>
      <p className={css.supplierTitle}>
          Поставщики
      </p>
      <div className={css.supplierItemWrapper}>
        <div className={css.addListItem} onClick={openNewSupplierForm}>+</div>
        {suppliers.map((item,index) => {
          return (
            <div className={css.supplierItem}  key={index}>
              <img src={item.image} alt="supplier"/>
              <p>{item.name}<span><img src={toolsIcon} alt="tools"/></span></p>
            </div>
          )
        })}
      </div>
      {isShowAddNewSupplierForm ?
          <AddNewSupplier newSupplierAdded ={addNewSupplier}
                          closeSupplierForm = {closeNewSupplierForm} />
          : null}

    </div>
  )
}

export default Supplier;