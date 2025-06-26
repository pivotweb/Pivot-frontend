// components/SocialIcons.tsx
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import type { IconType } from 'react-icons'

type SocialLink = {
  icon: IconType
  url: string
  label: string
}

const socialLinks: SocialLink[] = [
  { icon: FaFacebookF, url: 'https://web.facebook.com/thepivotng?mibextid=ZbWKwL&_rdc=1&_rdr', label: 'Facebook' },
  { icon: FaInstagram, url: 'https://www.instagram.com/thepivotng?igsh=cWo3Z3N5bW9qZ3cx', label: 'Instagram' },
  { icon: FaTwitter, url: 'https://x.com/ThePivotNG?t=a1g56a7FCmtJr09y847sLQ&s=09', label: 'Twitter' },
  { icon: FaYoutube, url: 'https://www.youtube.com/@ThePivotNg', label: 'YouTube' }
]

const SocialIcons: React.FC = () => (
  <div className="flex items-center gap-4 text-xl text-gray-800">
    {socialLinks.map(({ icon: Icon, url, label }, index) => (
      <a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="hover:text-orange-500 transition-colors duration-200"
      >
        <Icon className="cursor-pointer" />
      </a>
    ))}
  </div>
)

export default SocialIcons