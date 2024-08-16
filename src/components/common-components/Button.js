import React from 'react'

export const Button = ({ functions, value, color, border, icon, font, fontWeight }) => {
  return (
    <>
      <button className='commonBtn' onClick={functions} style={{ backgroundColor: color, border: border, color: font, fontWeight: fontWeight }}>{value}{icon}</button>
    </>
  )
}
