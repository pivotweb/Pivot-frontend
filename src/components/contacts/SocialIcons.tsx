// components/SocialIcons.tsx
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import type { IconType } from 'react-icons'

const icons: IconType[] = [FaFacebookF, FaInstagram, FaTwitter, FaYoutube]

const SocialIcons: React.FC = () => (
          <div className="flex items-center gap-4 text-xl text-gray-800">
                    {icons.map((Icon, index) => (
                              <Icon
                                        key={index}
                                        className="cursor-pointer hover:text-orange-500 transition-colors duration-200"
                              />
                    ))}
          </div>
)

export default SocialIcons
