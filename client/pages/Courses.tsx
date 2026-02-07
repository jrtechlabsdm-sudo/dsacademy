import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { courses, CourseCategory } from "@shared/courses";
import { CourseCard } from "@/components/CourseCard";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as CourseCategory | null;
  const [selectedCategory, setSelectedCategory] = useState<
    CourseCategory | "all"
  >((categoryParam as CourseCategory) || "all");

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam as CourseCategory);
    }
  }, [categoryParam]);

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Our Courses
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Explore our comprehensive range of courses in Engineering and
            Finance.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {["all", "engineering", "finance"].map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category as CourseCategory | "all")
              }
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? "bg-brand-primary text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-brand-primary"
              }`}
            >
              {category === "all"
                ? "All Courses"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No courses found in this category.
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-poppins font-bold text-3xl mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Choose a course and begin your journey to success with our expert
            instructors.
          </p>
          <a
            href="/admission"
            className="inline-block bg-brand-accent text-gray-900 px-8 py-3 rounded-lg font-bold hover:scale-105 transition-all"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
}
