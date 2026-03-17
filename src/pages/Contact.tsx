import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

interface ContactFormData {
  email: string;
  name: string;
  contact: string;
  message: string;
}

const ContactUsPage: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Contact Us";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      email: "",
      name: "",
      contact: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  const styles = `
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
    }
    .typing-cursor { display: inline-block; width: 3px; height: 1em; background:#14b8a6; margin-left:2px; animation: blink 0.7s infinite; }
    .heading-gradient { background: linear-gradient( #0a2472 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .contact-section { animation: slideUp 0.8s ease-out; }
    .form-input { transition: all 0.3s ease; border: 2px solid #e5e7eb; }
    .form-input:focus { border-color: #14b8a6; box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1); transform: translateY(-2px); }
    .form-label { transition: all 0.3s ease; color: #6b7280; }
    .form-input:focus + .form-label, .form-input:not(:placeholder-shown) + .form-label { color: #14b8a6; transform: translateY(-25px) scale(0.85); }
    .submit-btn { animation: float 3s ease-in-out infinite; }
  `;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <style>{styles}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold heading-gradient mb-4 min-h-16">
          {displayedText}
          {displayedText.length < fullText.length && <span className="typing-cursor"></span>}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with us. We're here to help with your engineering and environmental needs.
        </p>
        <div className="flex justify-center mt-6">
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-700 rounded-full"></div>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="contact-section bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Corporate office</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <i className="fa fa-map-marker text-2xl text-teal-600 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">Kigali, Gasabo, Ndera</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fa fa-envelope text-2xl text-teal-600 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">ulesgroupholdingltd.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fa fa-phone text-2xl text-teal-600 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+250 788 302619</p>
                  <p className="text-gray-600"></p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact-section bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.528!2d30.0644!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6c5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sNdera%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Corporate Office Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="contact-section bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      {...field}
                      type="text"
                      placeholder=" "
                      className="form-input w-full px-4 py-4 bg-gray-50 rounded-xl text-gray-900 font-medium focus:bg-white"
                    />
                    <label className="form-label absolute left-4 top-4 pointer-events-none bg-transparent px-1 transition-all duration-300">
                      Your Name
                    </label>
                    {errors.name && (
                      <span className="text-red-500 text-sm mt-2 block animate-pulse">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                )}
              />

              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email address is invalid",
                  },
                }}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      {...field}
                      type="email"
                      placeholder=" "
                      className="form-input w-full px-4 py-4 bg-gray-50 rounded-xl text-gray-900 font-medium focus:bg-white"
                    />
                    <label className="form-label absolute left-4 top-4 pointer-events-none bg-transparent px-1 transition-all duration-300">
                      Email Address
                    </label>
                    {errors.email && (
                      <span className="text-red-500 text-sm mt-2 block animate-pulse">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>

            <Controller
              name="contact"
              control={control}
              rules={{
                required: "Contact number is required",
                pattern: {
                  value: /^\+?[\d\s\-\(\)]+$/,
                  message: "Please enter a valid contact number",
                },
              }}
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    type="text"
                    placeholder=" "
                    className="form-input w-full px-4 py-4 bg-gray-50 rounded-xl text-gray-900 font-medium focus:bg-white"
                  />
                  <label className="form-label absolute left-4 top-4 pointer-events-none bg-transparent px-1 transition-all duration-300">
                    Contact Number
                  </label>
                  {errors.contact && (
                    <span className="text-red-500 text-sm mt-2 block animate-pulse">
                      {errors.contact.message}
                    </span>
                  )}
                </div>
              )}
            />

            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <div className="relative">
                  <textarea
                    {...field}
                    placeholder=" "
                    className="form-input w-full px-4 py-4 bg-gray-50 rounded-xl text-gray-900 font-medium focus:bg-white h-40 resize-none"
                  />
                  <label className="form-label absolute left-4 top-4 pointer-events-none bg-transparent px-1 transition-all duration-300">
                    Your Message
                  </label>
                  {errors.message && (
                    <span className="text-red-500 text-sm mt-2 block animate-pulse">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              )}
            />

            <div className="text-center pt-4">
              <button
                type="submit"
                className="submit-btn px-12 py-4 bg-customBlue-950 hover:bg-black text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <i className="fa fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;