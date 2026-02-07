import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { courses } from "@shared/courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const admissionSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  courseId: z.string().min(1, "Please select a course"),
  message: z.string().optional(),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

export default function Admission() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Application submitted! Our advisor will contact you.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
      {/* HERO */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold font-poppins mb-6">
            Build Your Future with <span className="text-brand-primary">DS School</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join industry-focused programs designed to transform your skills into career success.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE INFO */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-poppins">
              Why Students Choose Us
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h3 className="font-bold">Industry Experts</h3>
                  <p className="text-gray-600">Learn from professionals with real-world experience.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">💼</div>
                <div>
                  <h3 className="font-bold">Career Assistance</h3>
                  <p className="text-gray-600">Placement support and interview preparation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="font-bold">Live Projects</h3>
                  <p className="text-gray-600">Hands-on real project exposure.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-poppins mb-6 text-center">
              Admission Form
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              <div>
                <Input {...register("name")} placeholder="Full Name" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div>
                <Input {...register("email")} type="email" placeholder="Email Address" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div>
                <Input {...register("phone")} placeholder="Phone Number" />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div>
                <select
                  {...register("courseId")}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
                {errors.courseId && <p className="text-red-500 text-sm">{errors.courseId.message}</p>}
              </div>

              <textarea
                {...register("message")}
                placeholder="Message (optional)"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 rounded-lg shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Apply Now"}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-5">
              Your details are secure and confidential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
