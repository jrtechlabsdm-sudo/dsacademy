import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-poppins font-bold text-brand-primary mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
