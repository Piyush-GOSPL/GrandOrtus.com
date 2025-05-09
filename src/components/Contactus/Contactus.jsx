import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validateField(name, value) }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required.' : '';
      case 'number':
        return !/^\d{10,}$/.test(value) ? 'Valid number is required.' : '';
      case 'email':
        return !/^\S+@\S+\.\S+$/.test(value) ? 'Valid email is required.' : '';
      case 'service':
        return value === '' ? 'Please select a service.' : '';
      case 'message':
        return value.trim() === '' ? 'Message cannot be empty.' : '';
      default:
        return '';
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setErrors((prevErrors) => ({ ...prevErrors, captcha: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (!captchaToken) {
      newErrors.captcha = 'Please verify that you are not a robot.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch('http://127.0.0.1:8000/api/sendmail/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            captcha: captchaToken,}),
        });

        const result = await response.json();

        if (result.success) {
          alert('Email sent!');
          setFormData({
            name: '',
            number: '',
            email: '',
            service: '',
            message: '',
          });
          setCaptchaToken(null);
        } else {
          alert('Failed to send email.');
        }
      } catch (err) {
        console.error(err);
        alert('Error sending email.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="px-20">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start p-5 my-10">
        <div className="md:w-1/2 flex justify-center">
          <img src="/assets/getintouch.svg" alt="Get in touch" className="max-w-full h-auto" />
        </div>
        <img src="/assets/ContactLine.png" alt="" className="line w-[40px]" />
        <div className="md:w-1/2 w-full">
          <h4 className="text-2xl font-semibold text-gray-700">Contact us</h4>
          <p className="text-xl font-semibold text-gray-700 mb-5">Let’s Start a Conversation</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="User Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <input
                  type="tel"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={handleChange}
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
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
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6Lc_TTIrAAAAACuJKo7gvfuxfzN-qtxXwock01dt"
                onChange={handleCaptchaChange}
              />
            </div>
            {errors.captcha && <p className="text-red-500 text-sm text-center">{errors.captcha}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-1/3 bg-blue-500 border border-blue-500 text-white p-3 rounded-lg text-center hover:bg-white hover:text-blue-500 cursor-pointer ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
