import { Link } from "react-router-dom";
import { Clock, BarChart3 } from "lucide-react";
import { Course } from "@shared/courses";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      to={`/course/${course.slug}`}
      className="group h-full rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col"
    >
      {/* Image */}
<div className="h-48 overflow-hidden">
  <img
    src={course.image}
    alt={course.title}
    className="w-full h-full object-cover"
  />
</div>


      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category Badge */}
        <span
          className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-3 ${
            course.category === "engineering"
              ? "bg-blue-100 text-blue-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
        </span>

        {/* Title */}
        <h3 className="font-poppins font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Meta Information */}
        <div className="space-y-2 mt-auto mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Clock size={16} className="text-brand-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <BarChart3 size={16} className="text-brand-primary" />
            <span className="capitalize">{course.level}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-brand-primary text-white py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all">
          View Course
        </button>
      </div>
    </Link>
  );
}
