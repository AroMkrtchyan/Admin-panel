import React from 'react'
import css from './add-types-group-form.module.css'

import closeIcon from '../../../icons/png/close-icon.png'
import flagAM from '../../../icons/png/flag-AM.png'
import flagUSA from '../../../icons/png/flag-USA.png'
import flagRU from '../../../icons/png/flag-RU.png'

const AddTypesGroupForm = ({ closerFormBlock, submitHandler, inputNameHandler}) => {

    return (
        <div className={css.addNewTypeGroup}>
            <div className={css.addNewTypeGroupHeader}>
                <p className={css.addNewTypeGroupTitle}>
                    добавить Группы
                </p>
                <span className={css.addNewTypeGroupClose}>
          <img src={closeIcon} alt="close" onClick={closerFormBlock}/>
        </span>
            </div>
            <div className={css.addNewTypeGroupContent}>
                <div className={css.addNewTypeGroupFlags}>
                    <img src={flagAM} alt="AM"/>
                    <img src={flagRU} alt="RU"/>
                    <img src={flagUSA} alt="USA"/>
                </div>
                <p>названия</p>
                <form
                    action=""
                    className={css.addNewTypeGroupForm}
                    onSubmit={submitHandler}>
                    <input type="text" required
                           onChange={inputNameHandler}/>
                    <button type='submit' className={css.typesFormButton}>
                        подтвердить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddTypesGroupForm