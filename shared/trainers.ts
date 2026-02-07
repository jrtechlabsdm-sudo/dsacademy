export interface Trainer {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: number; // in years
  bio: string;
  photo: string;
  linkedCourses: string[]; // course ids
  qualifications: string[];
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}

export const trainers: Trainer[] = [
  {
    id: "trainer1",
    name: "Rajesh Kumar",
    title: "Structural Design Engineer & CAD Specialist",
    specialization: "AutoCAD, Foundation Design, SAFE",
    experience: 12,
    bio: "Structural design engineer with 12+ years in building design and BIM coordination. Led teams at leading construction firms.",
    photo: "/placeholder.svg",
    linkedCourses: ["1", "3"],
    qualifications: [
      "B.Tech in Civil Engineering",
      "Advanced CAD Certification",
      "BIM Specialist",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "trainer2",
    name: "Priya Singh",
    title: "Structural Analysis & BIM Engineer",
    specialization: "ETABS, STAAD Pro, Structural Design",
    experience: 10,
    bio: "Structural analysis specialist with 10+ years experience in multi-storey building design. Expert in seismic design and code compliance.",
    photo: "/placeholder.svg",
    linkedCourses: ["2", "5"],
    qualifications: [
      "B.Tech in Structural Engineering",
      "ETABS Certified",
      "Seismic Design Specialist",
    ],
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "trainer3",
    name: "Amit Patel",
    title: "BIM & 3D Modelling Expert",
    specialization: "TEKLA, Revit, BIM Coordination",
    experience: 9,
    bio: "BIM coordinator with 9+ years in 3D structural modelling and clash detection. Implemented BIM on major infrastructure projects.",
    photo: "/placeholder.svg",
    linkedCourses: ["4", "6"],
    qualifications: [
      "B.Tech in Civil Engineering",
      "TEKLA Structures Certified",
      "BIM Manager",
    ],
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "trainer4",
    name: "Vikram Reddy",
    title: "Financial Analyst & Valuation Expert",
    specialization: "Financial Modelling, Valuation, Underwriting",
    experience: 11,
    bio: "Finance professional with 11+ years in real estate finance and project valuation. Experienced in mortgage underwriting and investment analysis.",
    photo: "/placeholder.svg",
    linkedCourses: ["7", "8", "9"],
    qualifications: [
      "MBA Finance",
      "Valuation Specialist",
      "Mortgage Underwriting Certified",
    ],
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
];

export function getTrainerById(id: string): Trainer | undefined {
  return trainers.find((trainer) => trainer.id === id);
}

export function getFeaturedTrainers(count: number = 3): Trainer[] {
  return trainers.slice(0, count);
}
