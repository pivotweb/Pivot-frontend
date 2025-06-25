import React from 'react'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
          label: string
          id: string
}

const TextArea: React.FC<TextAreaProps> = ({ label, id, ...props }) => (
          <div className="flex flex-col gap-1 w-full">
                    <label htmlFor={id} className="text-sm font-medium text-gray-700">
                              {label}
                    </label>
                    <textarea
                              id={id}
                              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              rows={5}
                              {...props}
                    />
          </div>
)

export default TextArea