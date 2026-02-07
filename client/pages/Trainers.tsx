import { trainers } from "@shared/trainers";
import { TrainerCard } from "@/components/TrainerCard";

export default function Trainers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Learn from Industry Experts
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Our faculty consists of experienced engineers, analysts, and
            industry professionals who provide practical, real-world training.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-poppins font-bold text-3xl mb-4">
            Ready to Learn?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Choose a course and start your learning journey with our expert
            trainers.
          </p>
          <a
            href="/courses"
            className="inline-block bg-brand-accent text-gray-900 px-8 py-3 rounded-lg font-bold hover:scale-105 transition-all"
          >
            Explore Courses
          </a>
        </div>
      </section>
    </div>
  );
}
