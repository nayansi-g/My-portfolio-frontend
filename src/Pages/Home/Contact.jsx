import React, { useState } from 'react';
import Section from '../../Components/Section';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://localhost:4000/api/portfolio/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      console.log(data);
      alert('Message submitted successfully');

      // Reset form state
      setFormData({ name: '', email: '', country: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="px-4">
      <Section title="Contact Me" />
      <div className="max-w-md w-full mx-auto mt-6 bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md text-white">
        <h2 className="text-lg sm:text-xl font-bold text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md text-white bg-gray-800"
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md text-white"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
