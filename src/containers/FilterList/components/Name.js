import React from 'react'

/* ############################ */
/* ##### Single baby name ##### */
/* ############################ */

export default ({
  id,
  info,
  handleFavourite
}) => (
    <li
      className={info.cut}
      onClick={() => handleFavourite(id)}>
      {info.name}
    </li>
  )