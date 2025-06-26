// components/Button.tsx
import React from 'react'

type ButtonProps = {
  title: string
  style?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ title, style = '', ...rest }) => {
  const baseClasses =
    'cursor-pointer rounded-lg font-semibold shadow-md transition-colors duration-200 text-center text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'

  return (
    <button className={`${baseClasses} ${style}`} {...rest}>
      {title}
    </button>
  )
}

export default Button
