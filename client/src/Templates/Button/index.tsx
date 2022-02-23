import React from 'react'
import './style.scss'

interface ButtonProps {
  color: string,
}

export const Button: React.FC<ButtonProps> = ({color, children}) => {
  return (
    <button className="button" type="submit" style={{backgroundColor: color}}>
      {children}
    </button>
  )
}