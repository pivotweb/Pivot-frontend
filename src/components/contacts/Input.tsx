import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
          label: string
          id: string
          placeholder?: string
}

const Input: React.FC<InputProps> = ({ label, id, placeholder, ...props }) => (
          <div className="flex flex-col gap-1 w-full">
                    <label htmlFor={id} className="text-sm font-medium text-gray-700">
                              {label}
                    </label>
                    <input placeholder={placeholder}
                              id={id}
                              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              {...props}
                    />
          </div>
)

export default Input
