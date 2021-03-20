import React, {useState} from "react";

import css from'./types.module.css'
import AddNewType from "./add-new-type/add-new-type";

const Types = () => {
    let [types, setTypes] = useState([
        {
            typeName: 'designer',
        },
        {
            typeName: 'типы 2',
        },
        {
            typeName: 'типы 3',
        },
        {
            typeName: 'типы 4',
        },
        {
            typeName: 'типы 5',
        }])
    let [isSowAddNewTypeForm, setIsShowAddNewTypeForm] = useState(false)
    const closeNewTypeForm = () => {
        setIsShowAddNewTypeForm(false)
    }
    const openNewTypeForm = () => {
        setIsShowAddNewTypeForm(true)
    }

    const addNewType = (name) => {
        const newType = {
            typeName: name
        }
        const newArray = [...types, newType]
        setTypes(newArray)
    }
    return (
        <div className={css.types}>
            <p className={css.typesTitle}>типы</p>
            <div className={css.changeType}>
                <ul className={css.changeTypelist}>
                    {
                        types.map((item,index) => {
                            return (
                                <li key={index}>{item.typeName}</li>
                            )
                        })
                    }
                </ul>
                <span className={css.listItemAdd} onClick={openNewTypeForm}>+</span>
            </div>

            {isSowAddNewTypeForm ?
                <AddNewType newTypeAdded={addNewType}
                            CloseAddNewTypeForm ={closeNewTypeForm}/>
                : null}
        </div>
    )
}

export default Types