import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CourseCard } from "@/components/CourseCard";
import { courses, getCoursesByCategory } from "@shared/courses";
import { ArrowRight, Zap, BookOpen, Users, Target, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Index() {
  const engineeringCourses = getCoursesByCategory("engineering");
  const financeCourses = getCoursesByCategory("finance");

  return (
    <div className="min-h-screen bg-white">
      {/* Modern SaaS Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-200/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* LEFT SIDE - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 border border-blue-200/50 backdrop-blur-sm mb-8"
              >
                <span className="text-xl">🚀</span>
                <span className="text-sm font-medium text-blue-700">
                  Industry-Oriented Training Programs
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-gray-900"
              >
                Build Your Career with Industry-Level Engineering & Finance
                Training
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg"
              >
                Hands-on software training, live projects, and career-focused
                skill development from industry experts.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link
                  to="/admission"
                  className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-orange-300/50 group"
                >
                  Start Learning
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-lg"
                >
                  View Courses
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
              >
                <div>
                  <p className="text-3xl font-poppins font-bold text-gray-900">
                    1000+
                  </p>
                  <p className="text-sm text-gray-600">Students Trained</p>
                </div>
                <div>
                  <p className="text-3xl font-poppins font-bold text-gray-900">
                    15+
                  </p>
                  <p className="text-sm text-gray-600">Expert Courses</p>
                </div>
                <div>
                  <p className="text-3xl font-poppins font-bold text-gray-900">
                    4.9⭐
                  </p>
                  <p className="text-sm text-gray-600">Student Rating</p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - Visual with Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              {/* Student Image */}
              <div className="relative w-full max-w-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F90d8adcf22a14f4c95707f9169ac9b5e%2Fbebec1f5980643da8a548c5f6cbb1b71?format=webp&width=800&height=1200"
                  alt="Student holding books"
                  className="w-full object-cover"
                />

                {/* Floating Card 1 - Top Left */}
                <motion.div
                  {...floatingAnimation}
                  className="absolute -top-8 -left-8 w-48 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-lg">
                      📊
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">1000+</p>
                      <p className="text-xs text-gray-600">Students Trained</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 2 - Top Right */}
                <motion.div
                  {...floatingAnimation}
                  transition={{
                    duration: 4,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-12 w-48 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-lg">
                      💻
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Industry</p>
                      <p className="text-xs text-gray-600">Software Tools</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 3 - Bottom Left */}
                <motion.div
                  {...floatingAnimation}
                  transition={{
                    duration: 4,
                    delay: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-12 w-48 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg">
                      🎓
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Placement</p>
                      <p className="text-xs text-gray-600">Support Included</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 4 - Bottom Right */}
                <motion.div
                  {...floatingAnimation}
                  transition={{
                    duration: 4,
                    delay: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-8 -right-8 w-48 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-white text-lg">
                      ⭐
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">4.9 Rating</p>
                      <p className="text-xs text-gray-600">By Learners</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Our Students */}
<section className="py-20 bg-white overflow-hidden">
  <div className="container mx-auto px-4 md:px-6 mb-12">
    <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
      <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-gray-900">
        Our Students
      </h2>
      <p className="text-lg text-gray-600">
        Meet our learners who are building successful careers with DS School.
      </p>
    </motion.div>
  </div>

  {/* Horizontal Scroll */}
  <div className="relative">
    <div className="flex gap-6 animate-scroll px-6 w-max">
      {[
        "sd1.jpg",
        "sd2.jpg",
        "sd3.jpg",
        "sd4.jpg",
        "sd5.jpg",
        "sd6.jpg",
        "sd7.jpg",
        "sd8.jpg",
        "sd9.jpg",
        "sd10.jpg",
        'sd11.jpg',

      ].map((img, index) => (
        <div
          key={index}
          className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-lg group"
        >
          <img
            src={`/students/${img}`}
            alt="DS School Student"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-semibold text-sm">DS School Student</p>
            <p className="text-xs opacity-80">Career Growth Program</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Trusted By / Software Strip */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-medium text-gray-600 mb-8">
            INDUSTRY TOOLS & PLATFORMS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              "AutoCAD",
              "ETABS",
              "SAFE",
              "STAAD Pro",
              "TEKLA",
              "BIM 360",
              "Excel",
              "Financial Models",
            ].map((tool) => (
              <div
                key={tool}
                className="text-gray-700 font-medium text-sm md:text-base whitespace-nowrap"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Categories - Glassmorphism Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-gray-900">
              Our Training Categories
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive programs in Civil Engineering and Finance, designed
              by industry professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Engineering Card */}
            <motion.div
              {...fadeInUp}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl mb-6">
                  🔧
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-4 text-gray-900">
                  Engineering & BIM
                </h3>
                <p className="text-gray-600 mb-6">
                  Master professional structural design and BIM software used in
                  real-world construction projects.
                </p>

                <div className="space-y-3 mb-8">
                  {engineeringCourses.slice(0, 3).map((course) => (
                    <div key={course.id} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-sm text-gray-700">
                        {course.title}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/courses?category=engineering"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 group"
                >
                  Explore Courses
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Finance Card */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white text-2xl mb-6">
                  📈
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-4 text-gray-900">
                  Finance & Valuation
                </h3>
                <p className="text-gray-600 mb-6">
                  Develop expertise in financial modelling, valuation,
                  underwriting, and digital business skills.
                </p>

                <div className="space-y-3 mb-8">
                  {financeCourses.slice(0, 3).map((course) => (
                    <div key={course.id} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      <span className="text-sm text-gray-700">
                        {course.title}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/courses?category=finance"
                  className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 group"
                >
                  Explore Courses
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Icon Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-gray-900">
              Why Choose DS School?
            </h2>
            <p className="text-lg text-gray-600">
              Designed for professionals who want real skills, real projects,
              and real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: "🔨",
                title: "Live Project Training",
                description:
                  "Work on real-world projects with industry experts.",
              },
              {
                icon: "💻",
                title: "Industry Software",
                description:
                  "Learn tools used in professional engineering firms.",
              },
              {
                icon: "👨‍🏫",
                title: "Expert Trainers",
                description: "10+ years experience in their respective fields.",
              },
              {
                icon: "🎯",
                title: "Placement Assistance",
                description: "Career support and job opportunities included.",
              },
              {
                icon: "📚",
                title: "Practical Learning",
                description: "Hands-on training with real-world scenarios.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-gray-900">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600">
              Explore our most popular programs with proven industry outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course, index) => (
              <motion.div
                key={course.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-lg hover:shadow-orange-300/50"
            >
              View All Courses
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join 1000+ professionals who have transformed their careers with
              DS School.
            </p>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-lg"
            >
              Start Learning Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
