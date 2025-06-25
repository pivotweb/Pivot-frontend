import React, { useState } from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import Input from './Input'
import TextArea from './TextArea'
import InfoItem from './InfoItem'
import SocialIcons from './SocialIcons'
import Button from '../ui/Button'

const ContactSection: React.FC = () => {
          const [formData, setFormData] = useState({
                    name: '',
                    email: '',
                    message: '',
          })

          const handleChange = (
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
                    const { name, value } = e.target
                    setFormData((prev) => ({ ...prev, [name]: value }))
          }

          const handleSubmit = (e: React.FormEvent) => {
                    e.preventDefault()
                    console.log('Form submitted', formData)
          }

          return (
                    <section className="w-full max-w-7xl mx-auto rounded-xl bg-white p-6 md:p-10 shadow-lg">
                              <div className="flex flex-col md:flex-row gap-10">
                                        {/* Left – contact details */}
                                        <div className="md:w-5/12 w-full flex flex-col gap-6">
                                                  <div>
                                                            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
                                                            <p className="mt-3 text-sm text-gray-700 max-w-[44ch]">
                                                                      Wanna Say Hello or Ask a Question- Let’s Talk!
                                                            </p>
                                                  </div>

                                                  <div className="flex flex-col gap-4">
                                                            <InfoItem icon={<FiMail />} text="hello@thepivot.ng" />
                                                            <InfoItem icon={<FiPhone />} text="+234 816 408 2120" />
                                                  </div>

                                                  <div className="flex flex-col gap-2">
                                                            <p className="text-sm font-semibold text-gray-800">Follow us on social:</p>
                                                            <SocialIcons />
                                                  </div>
                                        </div>

                                        {/* Right – form */}
                                        <div className="md:w-7/12 w-full">
                                                  <form
                                                            className="flex flex-col gap-6"
                                                            onSubmit={handleSubmit}
                                                  >
                                                            <Input
                                                                      id="name"
                                                                      label="Name"
                                                                      name="name"
                                                                      value={formData.name}
                                                                      onChange={handleChange}
                                                                      required
                                                            />
                                                            <Input
                                                                      id="email"
                                                                      label="Email"
                                                                      name="email"
                                                                      type="email"
                                                                      value={formData.email}
                                                                      onChange={handleChange}
                                                                      required
                                                            />
                                                            <TextArea
                                                                      id="message"
                                                                      label="Message"
                                                                      name="message"
                                                                      value={formData.message}
                                                                      onChange={handleChange}
                                                                      required
                                                            />

                                                            <Button
                                                                      title="Submit"
                                                                      type="submit"
                                                                      style="bg-orange-500 hover:bg-orange-600 px-10 py-3 w-max self-start"
                                                            />
                                                  </form>
                                        </div>
                              </div>
                    </section>
          )
}

export default ContactSection
