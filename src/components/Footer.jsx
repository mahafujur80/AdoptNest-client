import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 - Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Adopt<span className="text-emerald-400">Nest</span>
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Giving homeless pets a second chance at finding their forever home.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-2 rounded-full hover:bg-emerald-500 transition">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-emerald-500 transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-emerald-500 transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-emerald-500 transition">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-emerald-400 transition">Home</Link></li>
              <li><Link href="/all-pets" className="text-gray-400 hover:text-emerald-400 transition">All Pets</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-emerald-400" />
                <span className="text-sm">Chirirbander, Dinajpur, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-emerald-400" />
                <span className="text-sm">+8801709534480</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-emerald-400" />
                <span className="text-sm">info@petadoption.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to get updates about new pets.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="px-4 py-2 bg-emerald-500 rounded-r-lg hover:bg-emerald-600 transition text-sm">
                Subscribe
              </button>
            </div>
          </div>
          
        </div>
        
      </div>
        {/* Copyright */}
        <div className="border-t py-5 border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pet Adoption Platform. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;