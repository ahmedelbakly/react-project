import React from 'react'

const Button = ({customClass,text,callback}) => {
  return (
    <div>
    <button className={`${customClass ? customClass  : "" } button`} onClick={callback}>
   {text}
    
    </button>
    
    </div>
  )
}

export default Button