import { Star } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  courseTaken: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-brand-accent text-brand-accent"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div>
        <p className="font-poppins font-bold text-gray-900">
          {testimonial.name}
        </p>
        <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
        <p className="text-xs text-brand-primary font-medium">
          Took: {testimonial.courseTaken}
        </p>
      </div>
    </div>
  );
}
