export default function Portal() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Student Portal
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Access your courses, track progress, and connect with instructors.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-6">🔐</div>
            <h2 className="font-poppins font-bold text-2xl mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              Our student portal is currently under development. We're building
              a comprehensive platform for course access, progress tracking, and
              instructor communication.
            </p>

            <div className="space-y-4 text-left bg-blue-50 p-6 rounded-lg inline-block">
              <h3 className="font-poppins font-bold mb-3">Portal Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-brand-accent">✓</span>
                  Access course materials and lectures
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-accent">✓</span>
                  Track your learning progress
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-accent">✓</span>
                  Communicate with instructors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-accent">✓</span>
                  Download certificates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-accent">✓</span>
                  Join live sessions
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="/admission"
                className="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
              >
                Enroll in a Course
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
