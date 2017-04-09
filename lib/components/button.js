import React from 'react'

const Button = (props) => {
  return (
  <button
    onClick={props.onClick} className={props.className} value={props.value}>{props.text}
  </button>
  )
}

export default Button
