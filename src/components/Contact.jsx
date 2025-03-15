import  { useState } from "react";
import { Send, Mail } from "lucide-react";
import { FaLinkedin , FaWhatsapp} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "949828fd-f56e-42db-a786-c7a734f29f7d"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main
      className="pt-20 lg:pt-[0rem] bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 text-white min-h-screen"
    >
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>

              <div className="space-y-6">
  <div className="flex items-center space-x-4">
    <a
      href="mailto:muzammalrafique26@gmail.com"
      className="p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition duration-300"
    >
      <Mail className="w-6 h-6 text-purple-400 hover:text-purple-300 transition duration-300" />
    </a>
    <div>
      <h3 className="font-semibold">Email</h3>
      <p className="text-gray-400">muzammalrafique26@gmail.com</p>
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <a href="https://www.linkedin.com/in/muzammalrafique26/" target="_blank">
      <div className="bg-sky-300/20 cursor-pointer p-3 rounded-lg hover:bg-sky-300/30 transition duration-300">
        <FaLinkedin className="w-6 h-6 text-sky-600 hover:text-sky-500 transition duration-300" />
      </div>
    </a>
    <div>
      <h3 className="font-semibold">LinkedIn</h3>
      <p className="text-gray-400">muzammalrafique26</p>
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <a href="https://github.com/Muzammal-Rafique" target="_blank">
      <div className="bg-gray-500/80 p-3 rounded-lg hover:bg-gray-700 transition duration-300">
        <FaSquareGithub className="w-6 h-6 text-[#181717] hover:text-gray-300 transition duration-300" />
      </div>
    </a>
    <div>
      <h3 className="font-semibold">GitHub</h3>
      <p className="text-gray-400">Muzammal-Rafique</p>
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <a href="https://wa.me/+923055164591" target="_blank">
      <div className="bg-green-500/10 p-3 rounded-lg hover:bg-green-500/20 transition duration-300">
        <FaWhatsapp className="w-6 h-6 text-[#25D366] hover:text-green-400 transition duration-300" />
      </div>
    </a>
    <div>
      <h3 className="font-semibold">WhatsApp</h3>
      <p className="text-gray-400">+923055164591</p>
    </div>
  </div>
</div>

            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.subject ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
