import React from "react";
import emailjs from "emailjs-com";
import { useNotify } from "reactjs-notify-toast";

const ContactUs = () => {
  const { show } = useNotify();
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
  
    try {
      await emailjs.sendForm(
        "service_iwn8dar", 
        "template_a4t570x", 
        form, 
        "AvZCR-DRk4h1QPzjk" 
      );
      show("Message sent successfully!", "success");
      form.reset(); 
    } catch (error) {
      console.error("Failed to send message:", error);
      show("Failed to send message. Please try again later.", "error");
    }
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="mb-8 text-center text-gray-600">
          We'd love to hear from you! Please fill out the form below.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="example@example.com"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 px-4 text-white transition duration-300 hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
