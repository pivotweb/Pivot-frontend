import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import Input from "./Input";
import TextArea from "./TextArea";
import InfoItem from "./InfoItem";
import SocialIcons from "./SocialIcons";
import Button from "../ui/Button";
import { FaGlobe } from "react-icons/fa6";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section className="w-full max-w-7xl mx-auto rounded-xl bg-white py-10  mb-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left – contact details */}
        <div className="md:w-5/12 w-full flex flex-col gap-6 md:text-start text-center">
          <div>
            <h2 className="text-3xl font-bold mb-10">Contact</h2>
            <p className="mt-3 text-sm text-gray-700 max-w-[44ch]">
              Wanna Say Hello or Ask a Question- Let’s Talk!
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-start items-center">
            <InfoItem icon={<FiMail />} text="hello@thepivot.ng" />
            <InfoItem icon={<FiPhone />} text="+234 816 408 2120" />
          </div>

          <div className="flex flex-col gap-2 md:items-start items-center">
            <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
             <span> <FaGlobe/> </span> Follow us on social:
            </p>
            <SocialIcons />
          </div>
        </div>

        {/* Right – form */}
        <div className="md:w-7/12 w-full">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input
              id="name"
              label="Name"
              name="name"
              placeholder="Enter name "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              id="email"
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              id="message"
              label="Message"
              name="message"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <Button
              title="Submit"
              type="submit"
              style="bg-[#F06621] hover:bg-[#F6A37A] px-10 py-3 md:w-max self-start w-full"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
