import { Career } from "@/contexts/UserDataContext";

export const careerCategories = {
  "Information Technology": ["software-developer", "data-analyst", "data-scientist", "ai-ml-engineer", "cloud-engineer", "network-administrator", "cybersecurity-analyst", "devops-engineer", "full-stack-developer", "ui-ux-designer"],
  "Healthcare": ["doctor", "nurse", "medical-lab-technician", "pharmacist", "physiotherapist", "radiologist", "surgeon", "medical-transcriptionist"],
  "Finance": ["accountant", "financial-analyst", "investment-banker", "tax-consultant", "auditor"],
  "Sales and Marketing": ["marketing-manager", "sales-executive", "digital-marketing-specialist"],
  "Hospitality and Tourism": ["hotel-manager", "travel-agent", "chef"],
  "Arts and Media": ["graphic-designer", "content-writer", "journalist", "video-editor", "photographer", "animator", "film-director"]
};

export const careers: Career[] = [
  // Information Technology (IT)
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Design, develop, and maintain software applications across various platforms. Work with programming languages, frameworks, and collaborate with cross-functional teams.",
    requiredSkills: {
      analytical: 8,
      technical: 9,
      creative: 6,
      communication: 5,
      leadership: 4
    }
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Analyze data to extract meaningful insights and support business decisions. Work with tools like Excel, SQL, and visualization platforms.",
    requiredSkills: {
      analytical: 9,
      technical: 8,
      creative: 5,
      communication: 6,
      leadership: 3
    }
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Leverage data analysis and machine learning techniques to solve complex problems and drive business strategy.",
    requiredSkills: {
      analytical: 10,
      technical: 9,
      creative: 6,
      communication: 6,
      leadership: 5
    }
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    description: "Develop and implement machine learning models and artificial intelligence systems to solve problems and optimize processes.",
    requiredSkills: {
      analytical: 9,
      technical: 10,
      creative: 7,
      communication: 5,
      leadership: 4
    }
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    description: "Design, deploy, and manage cloud infrastructure. Ensure scalability, security, and cost-effectiveness.",
    requiredSkills: {
      analytical: 8,
      technical: 9,
      creative: 5,
      communication: 6,
      leadership: 5
    }
  },
  {
    id: "network-administrator",
    title: "Network Administrator",
    description: "Manage and maintain computer networks, ensuring reliability and security.",
    requiredSkills: {
      analytical: 7,
      technical: 8,
      creative: 4,
      communication: 5,
      leadership: 4
    }
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect systems and networks from cyber threats by monitoring and responding to incidents.",
    requiredSkills: {
      analytical: 9,
      technical: 9,
      creative: 5,
      communication: 5,
      leadership: 4
    }
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Bridge the gap between development and operations teams to improve deployment processes and infrastructure management.",
    requiredSkills: {
      analytical: 8,
      technical: 9,
      creative: 6,
      communication: 6,
      leadership: 5
    }
  },
  {
    id: "full-stack-developer",
    title: "Full-Stack Developer",
    description: "Develop both client-side and server-side components of web applications. Work with a range of technologies and frameworks.",
    requiredSkills: {
      analytical: 8,
      technical: 9,
      creative: 6,
      communication: 5,
      leadership: 4
    }
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description: "Design user-friendly interfaces and improve user experiences across digital platforms.",
    requiredSkills: {
      analytical: 6,
      technical: 7,
      creative: 9,
      communication: 6,
      leadership: 4
    }
  },

  // Healthcare
  {
    id: "doctor",
    title: "Doctor (General Physician, Specialist)",
    description: "Provide medical care and diagnosis to patients. Collaborate with healthcare teams and maintain detailed patient records.",
    requiredSkills: {
      analytical: 7,
      technical: 8,
      creative: 5,
      communication: 8,
      leadership: 7
    }
  },
  {
    id: "nurse",
    title: "Nurse",
    description: "Provide patient care, administer treatments, and support medical teams in hospitals and clinics.",
    requiredSkills: {
      analytical: 6,
      technical: 7,
      creative: 5,
      communication: 8,
      leadership: 5
    }
  },
  {
    id: "medical-lab-technician",
    title: "Medical Lab Technician",
    description: "Perform diagnostic tests in clinical laboratories to assist in patient care and treatment.",
    requiredSkills: {
      analytical: 7,
      technical: 8,
      creative: 4,
      communication: 5,
      leadership: 3
    }
  },
  {
    id: "pharmacist",
    title: "Pharmacist",
    description: "Dispense medications, counsel patients on usage, and ensure compliance with medical regulations.",
    requiredSkills: {
      analytical: 7,
      technical: 7,
      creative: 4,
      communication: 6,
      leadership: 4
    }
  },
  {
    id: "physiotherapist",
    title: "Physiotherapist",
    description: "Help patients recover mobility and function through physical therapy exercises and treatment plans.",
    requiredSkills: {
      analytical: 7,
      technical: 8,
      creative: 5,
      communication: 7,
      leadership: 5
    }
  },
  {
    id: "radiologist",
    title: "Radiologist",
    description: "Diagnose and treat illnesses using imaging techniques like X-rays, MRIs, and CT scans.",
    requiredSkills: {
      analytical: 8,
      technical: 9,
      creative: 5,
      communication: 6,
      leadership: 4
    }
  },
  {
    id: "surgeon",
    title: "Surgeon",
    description: "Perform surgical procedures to treat injuries, illnesses, and deformities.",
    requiredSkills: {
      analytical: 9,
      technical: 10,
      creative: 6,
      communication: 7,
      leadership: 8
    }
  },
  {
    id: "medical-transcriptionist",
    title: "Medical Transcriptionist",
    description: "Convert voice-recorded medical reports into written text and ensure accuracy and compliance.",
    requiredSkills: {
      analytical: 6,
      technical: 6,
      creative: 4,
      communication: 5,
      leadership: 3
    }
  },

  // Finance
  {
    id: "accountant",
    title: "Accountant",
    description: "Prepare and review financial records, ensuring accuracy and compliance with laws and regulations.",
    requiredSkills: {
      analytical: 8,
      technical: 8,
      creative: 5,
      communication: 5,
      leadership: 4
    }
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description: "Analyze financial data to support decision-making and provide insights on investments and strategies.",
    requiredSkills: {
      analytical: 9,
      technical: 8,
      creative: 5,
      communication: 6,
      leadership: 4
    }
  },
  {
    id: "investment-banker",
    title: "Investment Banker",
    description: "Assist clients in raising capital, managing investments, and executing mergers and acquisitions.",
    requiredSkills: {
      analytical: 9,
      technical: 9,
      creative: 6,
      communication: 7,
      leadership: 6
    }
  },
  {
    id: "tax-consultant",
    title: "Tax Consultant",
    description: "Advise clients on tax planning, compliance, and optimization of tax liabilities.",
    requiredSkills: {
      analytical: 8,
      technical: 8,
      creative: 5,
      communication: 6,
      leadership: 4
    }
  },
  {
    id: "auditor",
    title: "Auditor",
    description: "Examine financial records to ensure accuracy and compliance with regulations.",
    requiredSkills: {
      analytical: 8,
      technical: 8,
      creative: 5,
      communication: 5,
      leadership: 4
    }
  },

  // Sales and Marketing
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    description: "Develop and implement marketing strategies, manage campaigns, and analyze market trends.",
    requiredSkills: {
      analytical: 7,
      technical: 8,
      creative: 9,
      communication: 8,
      leadership: 7
    }
  },
  {
    id: "sales-executive",
    title: "Sales Executive",
    description: "Drive sales and customer engagement through product knowledge and communication skills.",
    requiredSkills: {
      analytical: 7,
      technical: 6,
      creative: 6,
      communication: 8,
      leadership: 4
    }
  },
  {
    id: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    description: "Implement digital marketing strategies across multiple channels such as social media, SEO, and email campaigns.",
    requiredSkills: {
      analytical: 7,
      technical: 8,
      creative: 9,
      communication: 7,
      leadership: 5
    }
  },

  // Hospitality and Tourism
  {
    id: "hotel-manager",
    title: "Hotel Manager",
    description: "Oversee hotel operations, manage staff, and ensure high-quality customer service.",
    requiredSkills: {
      analytical: 7,
      technical: 6,
      creative: 5,
      communication: 8,
      leadership: 8
    }
  },
  {
    id: "travel-agent",
    title: "Travel Agent",
    description: "Provide travel planning and booking services to clients, including accommodations, transportation, and tours.",
    requiredSkills: {
      analytical: 6,
      technical: 5,
      creative: 7,
      communication: 8,
      leadership: 4
    }
  },
  {
    id: "chef",
    title: "Chef",
    description: "Prepare high-quality meals, oversee kitchen staff, and ensure food safety and quality standards.",
    requiredSkills: {
      analytical: 6,
      technical: 9,
      creative: 10,
      communication: 7,
      leadership: 7
    }
  },

  // Arts and Media
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "Create visual concepts to communicate ideas that inform, inspire, and captivate consumers.",
    requiredSkills: {
      analytical: 6,
      technical: 7,
      creative: 9,
      communication: 7,
      leadership: 4
    }
  },
  {
    id: "content-writer",
    title: "Content Writer",
    description: "Write engaging content for websites, blogs, social media, and more to promote businesses and brands.",
    requiredSkills: {
      analytical: 6,
      technical: 6,
      creative: 9,
      communication: 8,
      leadership: 3
    }
  },
  {
    id: "journalist",
    title: "Journalist",
    description: "Research and write articles, interviews, and news stories for media outlets.",
    requiredSkills: {
      analytical: 7,
      technical: 6,
      creative: 8,
      communication: 8,
      leadership: 4
    }
  },
  {
    id: "video-editor",
    title: "Video Editor",
    description: "Edit video footage to create compelling and informative content for television, film, or online platforms.",
    requiredSkills: {
      analytical: 6,
      technical: 8,
      creative: 9,
      communication: 7,
      leadership: 4
    }
  },
  {
    id: "photographer",
    title: "Photographer",
    description: "Capture images that tell a story or provide visual content for different purposes like advertising, art, or journalism.",
    requiredSkills: {
      analytical: 5,
      technical: 8,
      creative: 9,
      communication: 6,
      leadership: 3
    }
  },
  {
    id: "animator",
    title: "Animator",
    description: "Create visual animations for video, film, games, and other media.",
    requiredSkills: {
      analytical: 6,
      technical: 9,
      creative: 10,
      communication: 7,
      leadership: 4
    }
  },
  {
    id: "film-director",
    title: "Film Director",
    description: "Direct the creative aspects of film production, managing actors and crew to bring a script to life.",
    requiredSkills: {
      analytical: 7,
      technical: 8,
      creative: 10,
      communication: 9,
      leadership: 10
    }
  },
];

export const getCareerById = (id: string): Career | undefined => {
  return careers.find(career => career.id === id);
};
