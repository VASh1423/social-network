import React from 'react'
import './style.scss'

interface InputProps {
  placeholder: string,
  type: string,
  value: string,
  setValue: Function,
  required?: boolean,
  minLength?: number
}

export const Input: React.FC<InputProps> = ({placeholder, type, minLength, required, value, setValue}) => {
  return (
    <input className='input'
      placeholder={placeholder}
      type={type}
      required={required}
      minLength={minLength}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}