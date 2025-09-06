"use client";
import { useContext, useState } from "react";
import axios from "axios";
import ThemeContext from "@/context/ThemeContext";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Send,
} from "lucide-react";
import { toast } from "react-toastify";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
       process.env.NEXT_PUBLIC_FORMSPREE_URL,
        formData,
        {
          headers: { Accept: "application/json" },
        }
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 px-6 transition-colors ${
        theme === "light"
          ? "bg-[#F8FAFC] text-black"
          : "bg-[#020817] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-2">
            Get In <span className="text-purple-600">Touch</span>
          </h2>
          <p
            className={`text-lg ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let’s create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div
              className={`p-6 rounded-xl shadow ${
                theme === "light"
                  ? "bg-[#FFFFFF] text-[#020817]"
                  : "bg-[#020817] text-[#fff] border shadow-lg"
              }`}
            >
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="text-purple-600" size={20} />
                  <div>
                    <span className="font-semibold">Email</span>
                    <p>naderarifshahriyar@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-purple-600" size={20} />
                  <div>
                    <span className="font-semibold">Phone</span>
                    <p>+8801780875354</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-purple-600" size={20} />
                  <div>
                    <span className="font-semibold">Location</span>
                    <p>Sylhet, Bangladesh</p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className={`p-6 rounded-xl shadow ${
                theme === "light"
                  ? "bg-[#FFFFFF] text-[#020817]"
                  : "bg-[#020817] text-[#fff] border shadow-lg"
              }`}
            >
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/arifshahriyarnader"
                  target="_blank"
                  className="p-3 rounded-full hover:bg-purple-600 hover:text-white transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/arif-shahriyar-nader/"
                  target="_blank"
                  className="p-3 rounded-full hover:bg-purple-600 hover:text-white transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/arifshahriyarnader"
                  target="_blank"
                  className="p-3 rounded-full hover:bg-purple-600 hover:text-white transition"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div
              className={`p-6 rounded-xl shadow flex items-center gap-3 ${
                theme === "light"
                  ? "bg-[#FFFFFF] text-[#020817]"
                  : "bg-[#020817] text-[#fff] border shadow-lg"
              }`}
            >
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
              <div>
                <h4 className="font-semibold">Available for Projects</h4>
                <p className="text-sm">Currently accepting new opportunities</p>
              </div>
            </div>
          </div>

          <div
            className={`p-6 rounded-xl shadow ${
              theme === "light"
                ? "bg-[#FFFFFF] text-[#020817] "
                : "bg-[#020817] text-[#fff] border shadow-lg"
            }`}
          >
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div
                className={`grid md:grid-cols-2 gap-4 ${
                  theme === "light"
                    ? "bg-[#fff] text-[#020817]"
                    : "bg-[#020817] text-[#fff]"
                }`}
              >
                <div>
                  <label className={`block mb-1 font-medium`}>Full Name</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className={`w-full p-3 rounded-lg border placeholder:text-[#000] ${
    theme === "light"
      ? "bg-[#fff] text-[#64749A] placeholder:text-[#64749A]"
      : "bg-[#020817] text-[#ffffff] placeholder:text-[#fff]"
  }`}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@gmail.com"
                    className={`w-full p-3 rounded-lg border ${
                      theme === "light"
                        ? "bg-[#FFFFFF] text-[#64749A] placeholder:text-[#64749A]"
                        : "bg-[#020817] text-[#fff] placeholder:text-[#fff]"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Subject</label>
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={`w-full p-3 rounded-lg border ${
                    theme === "light"
                      ? "bg-[#FFFFFF] text-[#64749A] placeholder:text-[#64749A]"
                      : "bg-[#020817] text-[#fff] placeholder:text-[#fff]"
                  }`}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hello!"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                    className={`w-full p-3 rounded-lg border ${
                    theme === "light"
                      ? "bg-[#fff] text-[#64749A] placeholder:text-[#64749A]"
                      : "bg-[#020817] text-[#ffffff] placeholder:text-[#fff]"
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
