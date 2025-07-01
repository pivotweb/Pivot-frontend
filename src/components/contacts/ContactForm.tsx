import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import Input from "./Input";
import TextArea from "./TextArea";
import InfoItem from "./InfoItem";
import SocialIcons from "./SocialIcons";
import Button from "../ui/Button";
import { FaGlobe } from "react-icons/fa6";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

// interface ApiResponse {
//   success: boolean;
//   message: string;
//   data?: any;
// }

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      console.log('Sending data:', formData);

      // Temporary CORS proxy for testing - remove this in production
      // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      // const apiUrl = proxyUrl + 'https://pivot-9x7i.onrender.com/api/contact';

      const response = await axios.post('https://pivot-1.onrender.com/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 seconds timeout
      });

      console.log('Response received:', response);

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus({
          type: 'success',
          message: response.data.message || 'Message sent successfully!'
        });

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error('Full error object:', error);
      let errorMessage = 'An error occurred. Please try again.';

      if (axios.isAxiosError(error)) {
        console.log('Axios error details:', {
          message: error.message,
          code: error.code,
          response: error.response,
          request: error.request
        });

        if (error.response) {
          // Server responded with error status (4xx, 5xx)
          console.log('Response error:', error.response.status, error.response.data);
          errorMessage = error.response.data?.message || `Server Error: ${error.response.status}`;
        } else if (error.request) {
          // Request made but no response received (network/CORS issues)
          console.log('Request error - no response received');
          errorMessage = 'CORS or Network error. Check if the API allows requests from your domain.';
        } else {
          // Something else happened
          errorMessage = error.message;
        }
      }

      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
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
              title={isSubmitting ? "Sending..." : "Submit"}
              type="submit"
              disabled={isSubmitting}
              style="bg-[#F06621] hover:bg-[#F6A37A] px-10 py-3 md:w-max self-start w-full"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
