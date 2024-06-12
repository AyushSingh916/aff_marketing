'use client';

// pages/contact-us.tsx

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the data to an API
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center py-12 px-6 lg:px-24">
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl lg:text-6xl font-star-jedi mb-4">Contact Us</h1>
        <p className="text-lg lg:text-xl text-gray-700">
          We’d love to hear from you! Whether you have a question about our content, need assistance, or just want to give feedback, we’re here to help.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full max-w-4xl">
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl lg:text-4xl font-star-jedi mb-4">Get in Touch</h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-6">
            Fill out the form and we will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-3 border rounded w-full focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-3 border rounded w-full focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 p-3 border rounded w-full h-32 focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white font-bold rounded shadow hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              Send Message
            </button>
          </form>
          {submitted && (
            <div className="mt-6 text-center text-lg text-gray-700">
              Thank you for your message. We will get back to you shortly.
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-star-jedi mb-4">Reach Out to US</h2>
          <div className="flex gap-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="h-8 w-8 text-gray-700 hover:text-accent transition-colors" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-8 w-8 text-gray-700 hover:text-accent transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-8 w-8 text-gray-700 hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

