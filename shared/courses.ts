export type CourseCategory = "engineering" | "finance";
export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: CourseCategory;
  image: string;
  duration: string;
  level: CourseLevel;
  price?: string;
  syllabus: any[];
  software: string[];
  outcomes: string[];
  highlights: string[];
  trainerId: string;
}

export const courses: Course[] = [
  // ================= CIVIL / ENGINEERING =================

  {
    id: "1",
    slug: "autocad",
    title: "AutoCAD",
    description: "2D & 3D drafting for civil engineering projects.",
    longDescription: "Industry-standard drafting for construction drawings.",
    category: "engineering",
    image: "/images/autocad.jpg",
    duration: "6 weeks",
    level: "beginner",
    syllabus: [],
    software: ["AutoCAD"],
    outcomes: ["Prepare drawings", "Construction documentation"],
    highlights: ["Industry standard", "Hands-on training"],
    trainerId: "trainer1",
  },
  {
    id: "2",
    slug: "lumion",
    title: "Lumion",
    description: "Real-time architectural visualization.",
    longDescription: "Create high-quality renders and walkthroughs.",
    category: "engineering",
    image: "/images/lumion.jpg",
    duration: "4 weeks",
    level: "intermediate",
    syllabus: [],
    software: ["Lumion"],
    outcomes: ["Photorealistic renders"],
    highlights: ["Client presentations"],
    trainerId: "trainer2",
  },
  {
    id: "3",
    slug: "bim",
    title: "BIM",
    description: "Building Information Modelling for civil projects.",
    longDescription: "End-to-end BIM workflow and coordination.",
    category: "engineering",
    image: "/images/bim.jpg",
    duration: "8 weeks",
    level: "advanced",
    syllabus: [],
    software: ["Revit", "Navisworks"],
    outcomes: ["BIM coordination", "Model management"],
    highlights: ["Industry workflow"],
    trainerId: "trainer3",
  },
  {
    id: "4",
    slug: "3ds-max",
    title: "3DS Max",
    description: "Advanced 3D modelling and visualization.",
    longDescription: "High-quality architectural and civil visualizations.",
    category: "engineering",
    image: "/images/3dsmax.jpg",
    duration: "6 weeks",
    level: "intermediate",
    syllabus: [],
    software: ["3DS Max"],
    outcomes: ["3D models", "Visualization skills"],
    highlights: ["Professional visuals"],
    trainerId: "trainer2",
  },
  {
    id: "5",
    slug: "staad-pro",
    title: "STAAD Pro",
    description: "Structural analysis and design software.",
    longDescription: "Design RCC and steel structures.",
    category: "engineering",
    image: "/images/staad.jpg",
    duration: "8 weeks",
    level: "intermediate",
    syllabus: [],
    software: ["STAAD Pro"],
    outcomes: ["Structural design", "Analysis reports"],
    highlights: ["Real-world projects"],
    trainerId: "trainer3",
  },
  {
    id: "6",
    slug: "v-ray",
    title: "V-Ray",
    description: "Photorealistic rendering engine.",
    longDescription: "Lighting, materials and rendering techniques.",
    category: "engineering",
    image: "/images/vray.jpg",
    duration: "4 weeks",
    level: "intermediate",
    syllabus: [],
    software: ["V-Ray"],
    outcomes: ["High-quality renders"],
    highlights: ["Realistic output"],
    trainerId: "trainer2",
  },
  {
    id: "7",
    slug: "sketchup",
    title: "SketchUp",
    description: "Quick 3D modelling for civil and architectural designs.",
    longDescription: "Easy-to-use building modelling tool.",
    category: "engineering",
    image: "/images/sketchup.jpg",
    duration: "4 weeks",
    level: "beginner",
    syllabus: [],
    software: ["SketchUp"],
    outcomes: ["3D building models"],
    highlights: ["Fast modelling"],
    trainerId: "trainer1",
  },
  {
    id: "8",
    slug: "revit",
    title: "Revit",
    description: "BIM-based architectural & structural modelling.",
    longDescription: "Create intelligent BIM models and drawings.",
    category: "engineering",
    image: "/images/revit_nhuukr.png",
    duration: "8 weeks",
    level: "beginner",
    syllabus: [],
    software: ["Revit"],
    outcomes: ["BIM drawings", "Model-based design"],
    highlights: ["Industry standard"],
    trainerId: "trainer1",
  },
  {
    id: "9",
    slug: "primavera",
    title: "Primavera P6",
    description: "Project planning and scheduling.",
    longDescription: "Civil project planning and tracking.",
    category: "engineering",
    image: "/images/primavera.jpg",
    duration: "6 weeks",
    level: "intermediate",
    syllabus: [],
    software: ["Primavera P6"],
    outcomes: ["Project schedules", "Planning skills"],
    highlights: ["Planning engineer role"],
    trainerId: "trainer3",
  },
  {
    id: "10",
    slug: "revit-mep",
    title: "Revit MEP",
    description: "MEP modelling and BIM coordination.",
    longDescription: "HVAC, plumbing and electrical systems modelling.",
    category: "engineering",
    image: "/images/revit.jpg",
    duration: "8 weeks",
    level: "advanced",
    syllabus: [],
    software: ["Revit MEP"],
    outcomes: ["MEP coordination", "BIM integration"],
    highlights: ["Industry workflow"],
    trainerId: "trainer3",
  },

  // ================= FINANCE =================

  {
    id: "11",
    slug: "financial-modelling",
    title: "Financial Modelling",
    description: "Build financial models for projects and businesses.",
    longDescription: "Excel-based financial modelling for real-world cases.",
    category: "finance",
    image: "/images/finance.jpg",
    duration: "8 weeks",
    level: "beginner",
    syllabus: [],
    software: ["Excel"],
    outcomes: ["Financial models", "Project evaluation"],
    highlights: ["Practical case studies"],
    trainerId: "trainer4",
  },
  {
    id: "12",
    slug: "mortgage-insurance-underwriting",
    title: "Mortgage & Insurance Underwriting",
    description: "Credit and risk assessment training.",
    longDescription: "Property valuation and underwriting fundamentals.",
    category: "finance",
    image: "/images/mortgage.jpg",
    duration: "8 weeks",
    level: "intermediate",
    syllabus: [],
    software: ["Excel"],
    outcomes: ["Risk assessment", "Credit analysis"],
    highlights: ["Industry standards"],
    trainerId: "trainer1",
  },
  {
    id: "13",
    slug: "business-startup-valuation",
    title: "Business & Startup Valuation",
    description: "Valuation of businesses and startups.",
    longDescription: "DCF, multiples and valuation techniques.",
    category: "finance",
    image: "/images/valuation.jpg",
    duration: "9 weeks",
    level: "intermediate",
    syllabus: [],
    software: ["Excel"],
    outcomes: ["Company valuation", "Investment analysis"],
    highlights: ["Real case studies"],
    trainerId: "trainer4",
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getCoursesByCategory(category: CourseCategory) {
  return courses.filter((course) => course.category === category);
}
