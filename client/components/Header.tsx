import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Trainers", href: "/trainers" },
    { label: "Admission", href: "/admission" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-brand-primary text-white flex items-center justify-center font-poppins font-bold">
              DS
            </div>
            <span className="hidden sm:inline font-poppins font-bold text-lg text-brand-primary">
              DS School
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admission"
              className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-opacity-90 transition-all"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admission"
                className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-opacity-90 transition-all w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999?text=Hi%20DS%20School%2C%20I%20am%20interested%20in%20your%20courses"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}
