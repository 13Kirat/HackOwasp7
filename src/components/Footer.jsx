"use client"
import { Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* About section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-400">HackOwasp 7.0</h3>
            <p className="text-gray-300 mb-6">
              Join us for the ultimate 24-hour coding challenge where innovation meets technology. Build, collaborate,
              and transform your ideas into reality.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#timeline">Timeline</FooterLink>
              <FooterLink href="#tracks">Tracks</FooterLink>
              <FooterLink href="#partners">Partners</FooterLink>
              <FooterLink href="#register">Register</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Thapar Institute of Engineering & Technology, Patiala, Punjab, India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">hackowasp@thapar.edu</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Globe className="mr-3 h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">www.hackowasp.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and announcements.</p>
            <form className="space-y-3">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div> */}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-b border-gray-800 mb-10">
          <StatCounter number={500} label="Participants" />
          <StatCounter number={150} label="Teams" />
          <StatCounter number={5} label="Lakh Prize Pool" suffix="+" />
          <StatCounter number={24} label="Hour Hackathon" />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2025 HackOwasp 7.0. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>

      {/* Foreground image */}
      <img
        src="./legos-rbg.png"
        alt="Foreground Art"
        className="absolute w-full bottom-0 max-h-[109vh] object-cover z-0 opacity-80"
      />
    </div>
  )
}

// Helper components
const SocialIcon = ({ icon }) => {
  return (
    <motion.a
      href="#"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <motion.a
        href={href}
        className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center"
        whileHover={{ x: 5 }}
      >
        <span className="mr-2">→</span> {children}
      </motion.a>
    </li>
  )
}

const StatCounter = ({ number, label, suffix = "" }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-purple-400 flex justify-center items-end">
        <span>{number}</span>
        <span className="text-xl">{suffix}</span>
      </div>
      <p className="text-gray-300 mt-2">{label}</p>
    </motion.div>
  )
}