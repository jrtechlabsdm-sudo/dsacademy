import { useParams, useNavigate } from "react-router-dom";
import { getCourseBySlug } from "@shared/courses";
import { getTrainerById } from "@shared/trainers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, BarChart3, Users, Target } from "lucide-react";

export default function CoursePage() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const navigate = useNavigate();
  const course = getCourseBySlug(courseSlug || "");
  const trainer = course ? getTrainerById(course.trainerId) : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The course you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 mb-4">
              {course.category.charAt(0).toUpperCase() +
                course.category.slice(1)}
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-white/90 mb-6">
              {course.longDescription}
            </p>

            {/* Course Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <div>
                  <p className="text-sm text-white/70">Duration</p>
                  <p className="font-bold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6" />
                <div>
                  <p className="text-sm text-white/70">Level</p>
                  <p className="font-bold capitalize">{course.level}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-sm text-white/70">Trainer</p>
                  <p className="font-bold">{trainer?.name || "TBD"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Course Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-poppins font-bold text-2xl mb-4">
              About This Course
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {course.longDescription}
            </p>
          </div>

          {/* Syllabus */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-poppins font-bold text-2xl mb-6">
              Course Syllabus
            </h2>
            <Accordion type="single" collapsible>
              {course.syllabus.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-poppins font-bold">
                    {item.section}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {item.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Software & Tools */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-poppins font-bold text-2xl mb-4">
              Software & Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {course.software.map((tool, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200"
                >
                  <p className="text-sm font-medium text-gray-900">{tool}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-poppins font-bold text-2xl mb-4">
              What You'll Learn
            </h2>
            <div className="space-y-3">
              {course.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Highlights */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="font-poppins font-bold text-2xl mb-4">
              Course Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 p-4 rounded-lg border border-brand-primary/20"
                >
                  <p className="font-poppins font-bold text-gray-900">
                    ✨ {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trainer Info */}
          {trainer && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="font-poppins font-bold text-2xl mb-6">
                Your Instructor
              </h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg flex items-center justify-center text-white text-5xl flex-shrink-0">
                  👤
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-brand-primary font-bold mb-2">
                    {trainer.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {trainer.experience}+ years of experience
                  </p>
                  <p className="text-gray-700 mb-3">{trainer.bio}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-700 mb-2">
                      Qualifications:
                    </p>
                    <ul className="space-y-1">
                      {trainer.qualifications.map((qual, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          • {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enquiry Form */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg p-8 text-white">
            <h2 className="font-poppins font-bold text-2xl mb-6">
              Have Questions?
            </h2>
            <p className="mb-6">
              Fill out the form below and our team will get back to you soon.
            </p>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="mb-4">
                📞 Call us at +919842605439 or email us at info@dsschool.com
              </p>
              <a
                href="/admission"
                className="inline-block bg-brand-accent text-gray-900 px-8 py-3 rounded-lg font-bold hover:scale-105 transition-all"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
