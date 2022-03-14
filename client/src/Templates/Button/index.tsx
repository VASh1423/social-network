import React from 'react'
import './style.scss'

interface ButtonProps {
  color: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button: React.FC<ButtonProps> = ({color, onClick, children}) => {
  return (
    <button className="button" style={{backgroundColor: color}} onClick={onClick}>
      {children}
    </button>
  )
}