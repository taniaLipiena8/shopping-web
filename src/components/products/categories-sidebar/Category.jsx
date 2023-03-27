import React from 'react'

const Category = ({category, setChosenCtg}) => {
  return (
    <li onClick={()=>setChosenCtg(String(category))}>
        <p>{category}</p>
    </li>
  )
}

export default Category