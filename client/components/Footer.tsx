import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">DS School</h3>
            <p className="text-sm text-gray-200">
              Build your career with industry-level training in Engineering and
              Finance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/trainers"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Trainers
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Admission
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/courses"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Engineering
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Finance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@dsschool.com"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  info@dsschool.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919842605439"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  +919842605439
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">No : 3/279-37, 2nd Floor, KP Commercials Complex, Sri Devi Nagar, Natham Main Road, Umachikulam, Madurai - 625 014. ​</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
          <p>
            &copy; 2024 DS School of Engineering & Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
