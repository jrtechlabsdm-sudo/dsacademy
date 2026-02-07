import { Trainer } from "@shared/trainers";
import { Linkedin, Twitter } from "lucide-react";

interface TrainerCardProps {
  trainer: Trainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
      {/* Image */}
      <div className="h-48 bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center text-white text-6xl">
        👤
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="font-poppins font-bold text-lg text-gray-900 mb-1">
          {trainer.name}
        </h3>

        {/* Title */}
        <p className="text-sm font-medium text-brand-primary mb-2">
          {trainer.title}
        </p>

        {/* Experience */}
        <p className="text-xs text-gray-600 mb-3">
          {trainer.experience}+ years of experience
        </p>

        {/* Bio */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{trainer.bio}</p>

        {/* Specialization */}
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-700 mb-2">
            Specialization:
          </p>
          <p className="text-sm text-gray-600">{trainer.specialization}</p>
        </div>

        {/* Socials */}
        {trainer.socials && (
          <div className="flex gap-3">
            {trainer.socials.linkedin && (
              <a
                href={trainer.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {trainer.socials.twitter && (
              <a
                href={trainer.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
