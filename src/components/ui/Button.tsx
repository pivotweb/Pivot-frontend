// // components/Button.tsx
// import React from 'react'

// type ButtonProps = {
//   title: string
//   style?: string
// } & React.ButtonHTMLAttributes<HTMLButtonElement>

// const Button: React.FC<ButtonProps> = ({ title, style = '', ...rest }) => {
//   const baseClasses =
//     'cursor-pointer rounded-lg font-semibold shadow-md transition-colors duration-200 text-center text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'

//   return (
//     <button className={`${baseClasses} ${style}`} {...rest}>
//       {title}
//     </button>
//   )
// }

// export default Button


// components/Button.tsx
import React from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  title: string
  style?: string
  link?: string // Optional route path
  downloadLink?: string // File download path
  newTab?: boolean // Open link in a new tab
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ title, style = '', link, downloadLink, newTab, ...rest }) => {
  const baseClasses =
    'cursor-pointer rounded-lg font-semibold shadow-md transition-colors duration-200 text-center text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'

  if (downloadLink) {
    return (
      <a
        href={downloadLink}
        download
        className={`${baseClasses} ${style}`}
      >
        {title}
      </a>
    )
  }
  
  // External link (new tab)
  if (link && (newTab || link.startsWith('http'))) {
    return (
      <a
        href={link}
        className={`${baseClasses} ${style}`}
        target={newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
      >
        {title}
      </a>
    )
  }

  // If `link` is provided, render a <Link> styled like a button
  if (link) {
    return (
      <Link to={link} className={`${baseClasses} ${style}`} >
        {title}
      </Link>
    )
  }

  return (
    <button className={`${baseClasses} ${style}`} {...rest}>
      {title}
    </button>
  )
}

export default Button