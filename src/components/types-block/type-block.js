import React from "react";

import css from './type-block.module.css'
import Supplier from "./supplier/supplier";
import PriceList from "./priceList/PriceList";
import Types from "./types/types";
import TypesGroup from "../types-group/types-group";


const TypeBlock = () => {

  return (
    <div className={css.typesBlock}>
        <TypesGroup />
        <Supplier />
        <PriceList />
    </div>
  )
}
export default TypeBlock