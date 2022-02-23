import React from 'react'
import './style.scss'

interface InputProps {
  placeholder: string,
  type: string,
  required?: boolean,
  minLength?: number
}

export const Input: React.FC<InputProps> = ({placeholder, type, minLength, required}) => {
  return (
    <input className='input'
      placeholder={placeholder}
      type={type}
      required={required}
      minLength={minLength}
    />
  )
}