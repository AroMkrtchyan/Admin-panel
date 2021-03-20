import React from "react";

import css from './content.module.css'
import TypeBock from "../types-block/type-block";
import GroupBlock from "../groups-block/groups-block";
import Types from "../types-block/types/types";

const Content = () => {
  return (
    <div className={css.content}>
      <Types />
      <TypeBock />
      <GroupBlock />
    </div>
  )
}

export default Content