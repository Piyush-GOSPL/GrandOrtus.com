import React,{useState} from 'react'

const Model = ({show, onClose}) => {

    const [formData, setFormData] = useState({
      name: "",
      number: "",
      email: "",
      service: "",
      message: ""
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const validate = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.number || !/^\d{10,}$/.test(formData.number)) newErrors.number = "Valid number is required.";
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required.";
      if (!formData.service) newErrors.service = "Please select a service.";
      if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
      return newErrors;
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        setSubmitted(true);
        console.log("Form Submitted:", formData);
        // Optionally reset form
        setFormData({
          name: "",
          number: "",
          email: "",
          service: "",
          message: ""
        });
      }
    };

    console.log("formData", formData);



  return (
    <div className="p-6">
    {show && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-xl w-full max-w-2xl shadow-lg relative">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
            onClick={onClose}>
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <input
                  type="number"
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

            {/* <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select Service</option>
              <option value="development">Development</option>
              <option value="implementation">Implementation Services</option>
              <option value="infra_consulting">Infrastructure Consulting</option>
              <option value="datacenter">Datacenter Infra Design & Deployment</option>
              <option value="networking">Networking and Security</option>
              <option value="mobility_cloud">Mobility and Cloud</option>
              <option value="intranet">Intranet</option>
              <option value="fms_amc">FMS and AMC Support</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>} */}

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
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
  )
}

export default Model
