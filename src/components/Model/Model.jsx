import React, { useState } from 'react';

const Model = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required.';
        } else if (!/^[a-zA-Z\s]{2,50}$/.test(value.trim())) {
          error = 'Name must contain only letters and spaces (2-50 characters).';
        }
        break;

      case 'number':
        if (!value.trim()) {
          error = 'Number is required.';
        } else if (!/^\d{10,15}$/.test(value.trim())) {
          error = 'Number must be between 10 and 15 digits.';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = 'Please enter a valid email address.';
        }
        break;

      case 'service':
        if (!value) {
          error = 'Please select a service.';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Message cannot be empty.';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters long.';
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      validateField(name, value); // clear error in real-time
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      validateField(name, value);
      const error = validateSingleField(name, value);
      if (error) newErrors[name] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/sendmail/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          setSubmitted(true);
          alert('Email sent!');
          setFormData({
            name: '',
            number: '',
            email: '',
            service: '',
            message: '',
          });
          setErrors({});
        } else {
          alert('Failed to send email.');
        }
      } catch (err) {
        console.error(err);
        alert('Error sending email.');
      }
    }
  };

  const validateSingleField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required.';
        } else if (!/^[a-zA-Z\s]{2,50}$/.test(value.trim())) {
          error = 'Name must contain only letters and spaces (2-50 characters).';
        }
        break;

      case 'number':
        if (!value.trim()) {
          error = 'Number is required.';
        } else if (!/^\d{10,10}$/.test(value.trim())) {
          error = 'Number must be between 10 and 15 digits.';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = 'Please enter a valid email address.';
        }
        break;

      case 'service':
        if (!value) {
          error = 'Please select a service.';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Message cannot be empty.';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters long.';
        }
        break;

      default:
        break;
    }

    return error;
  };

  return (
    <div className="p-6">
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-2xl shadow-lg relative">
            <button className="absolute top-3 right-3 text-gray-500 hover:text-black" onClick={onClose}>
              ✖
            </button>

            <h2 className="text-xl font-semibold mb-6 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="User Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.name, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="phone"
                    name="number"
                    placeholder="Number"
                    value={formData.number}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
                </div>

                <div className="w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.name, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="development">Development</option>
                <option value="implementation">Implementation Services</option>
                <option value="infra_consulting">Infrastructure Consulting</option>
                <option value="datacenter">Datacenter Infra Design & Deployment</option>
                <option value="networking">Networking and Security</option>
                <option value="mobility_cloud">Mobility and Cloud</option>
                <option value="intranet">Intranet</option>
                <option value="fms_amc">FMS and AMC Support</option>
              </select>
              {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.name, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              <button
                type="submit"
                className="w-full md:w-1/3 bg-blue-500 border border-blue-500 text-white p-3 rounded-lg text-center hover:bg-white hover:text-blue-500"
              >
                Submit
              </button>

              {submitted && <p className="text-green-600 pt-3">Form submitted successfully!</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
