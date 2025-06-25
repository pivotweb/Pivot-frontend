import React from 'react'

interface InfoItemProps {
          icon: React.ReactNode
          text: string
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, text }) => (
          <div className="flex items-center gap-3 text-sm text-gray-800">
                    <span className="text-lg text-primary-500">{icon}</span>
                    {text}
          </div>
)

export default InfoItem