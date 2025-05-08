export type RoadmapItem = {
  title: string;
  description: string;
  type: "study" | "certification" | "project" | "skill";
  timeframe?: string;
  progress?: 'not-started' | 'in-progress' | 'completed';
};

export type Roadmap = {
  careerId: string;
  items: RoadmapItem[];
};

export const roadmaps: Record<string, Roadmap> = {
  // Software Developer
  "software-developer": {
    careerId: "software-developer",
    items: [
      { title: "Learn Programming Fundamentals", description: "Master a language like Python or JavaScript, understanding variables, data structures, control flow, and functions.", type: "study", timeframe: "2-3 months" },
      { title: "Web Development Basics", description: "Learn HTML, CSS, and JavaScript to build interactive websites.", type: "study", timeframe: "1-2 months" },
      { title: "Build a Personal Project", description: "Create a small web app or tool that solves a problem you care about.", type: "project", timeframe: "1 month" },
      { title: "Learn a Framework", description: "Master a popular framework like React, Angular, or Vue.js for frontend, or Node.js, Django, or Flask for backend.", type: "study", timeframe: "2-3 months" },
      { title: "AWS Certified Developer", description: "Learn cloud computing principles and get certified to enhance your employability.", type: "certification", timeframe: "2-3 months" }
    ]
  },
  // Data Analyst
  "data-analyst": {
    careerId: "data-analyst",
    items: [
      { title: "Learn SQL", description: "Master database querying and data manipulation with SQL.", type: "study", timeframe: "1-2 months" },
      { title: "Statistics Fundamentals", description: "Learn statistical concepts like probability, distributions, and hypothesis testing.", type: "study", timeframe: "1-2 months" },
      { title: "Python for Data Analysis", description: "Learn Python and libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization.", type: "study", timeframe: "2-3 months" },
      { title: "Create a Data Analysis Portfolio", description: "Build projects analyzing real-world datasets and create visualizations.", type: "project", timeframe: "1-2 months" },
      { title: "Google Data Analytics Certificate", description: "Get certified in data analytics fundamentals and tools.", type: "certification", timeframe: "3-6 months" }
    ]
  },
  // Data Scientist
  "data-scientist": {
    careerId: "data-scientist",
    items: [
      { title: "Master Statistics and Probability", description: "Learn advanced statistical methods, probability, and data modeling techniques.", type: "study", timeframe: "2-3 months" },
      { title: "Learn Python or R", description: "Master data manipulation and analysis using Python or R.", type: "study", timeframe: "2-3 months" },
      { title: "Build Machine Learning Models", description: "Learn supervised and unsupervised machine learning techniques.", type: "project", timeframe: "2-3 months" },
      { title: "Create a Data Science Portfolio", description: "Work on real-world datasets and publish your findings on platforms like Kaggle.", type: "project", timeframe: "3 months" },
      { title: "AWS Certified Machine Learning", description: "Get certified in machine learning principles and tools.", type: "certification", timeframe: "3 months" }
    ]
  },
  // AI/ML Engineer
  "ai-ml-engineer": {
    careerId: "ai-ml-engineer",
    items: [
      { title: "Learn Machine Learning Basics", description: "Understand ML concepts, algorithms, and frameworks like TensorFlow or PyTorch.", type: "study", timeframe: "3 months" },
      { title: "Master Python for AI", description: "Learn Python libraries such as NumPy, Pandas, and Scikit-learn.", type: "study", timeframe: "2 months" },
      { title: "Deep Learning Techniques", description: "Understand neural networks, CNNs, RNNs, and how to implement them.", type: "study", timeframe: "3-4 months" },
      { title: "Build AI Projects", description: "Develop AI-driven solutions such as chatbots or recommendation systems.", type: "project", timeframe: "2-3 months" },
      { title: "Microsoft Certified: AI Engineer Associate", description: "Get certified to validate your AI engineering expertise.", type: "certification", timeframe: "3-6 months" }
    ]
  },
  // Cloud Engineer
  "cloud-engineer": {
    careerId: "cloud-engineer",
    items: [
      { title: "Learn Cloud Basics", description: "Understand cloud computing principles and popular platforms like AWS, Azure, or Google Cloud.", type: "study", timeframe: "1-2 months" },
      { title: "Learn Infrastructure as Code", description: "Use tools like Terraform or AWS CloudFormation to manage cloud resources.", type: "study", timeframe: "1 month" },
      { title: "Get Certified (AWS, Azure, Google Cloud)", description: "Earn certifications like AWS Certified Solutions Architect or Azure Fundamentals.", type: "certification", timeframe: "2-3 months" },
      { title: "Deploy Cloud Projects", description: "Build and deploy scalable cloud-based solutions.", type: "project", timeframe: "2 months" }
    ]
  },
  // Network Administrator
  "network-administrator": {
    careerId: "network-administrator",
    items: [
      { title: "Networking Fundamentals", description: "Understand TCP/IP, DNS, DHCP, LAN/WAN, and network hardware.", type: "study", timeframe: "2-3 months" },
      { title: "CompTIA Network+", description: "Get certified in network troubleshooting, configuration, and management.", type: "certification", timeframe: "2-3 months" },
      { title: "Learn Server Administration", description: "Gain skills in Windows Server or Linux server management.", type: "study", timeframe: "3-4 months" },
      { title: "Network Security Basics", description: "Understand firewalls, VPNs, and intrusion detection systems.", type: "study", timeframe: "1-2 months" },
      { title: "Setup a Home Lab Network", description: "Practice configuring routers, switches, and servers in a lab environment.", type: "project", timeframe: "1-2 months" }
    ]
  },
  // Cybersecurity Analyst
  "cybersecurity-analyst": {
    careerId: "cybersecurity-analyst",
    items: [
      { title: "Security Fundamentals", description: "Learn about threats, vulnerabilities, risk management, and security principles.", type: "study", timeframe: "2-3 months" },
      { title: "CompTIA Security+", description: "Validate core cybersecurity skills.", type: "certification", timeframe: "2-3 months" },
      { title: "Learn Ethical Hacking", description: "Understand penetration testing tools and techniques.", type: "study", timeframe: "3-4 months" },
      { title: "Security Information and Event Management (SIEM)", description: "Learn to use SIEM tools for threat detection and analysis.", type: "skill", timeframe: "2 months" },
      { title: "Participate in CTF Challenges", description: "Practice cybersecurity skills in Capture The Flag competitions.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // DevOps Engineer
  "devops-engineer": {
    careerId: "devops-engineer",
    items: [
      { title: "Linux Fundamentals & Shell Scripting", description: "Master command line and scripting for automation.", type: "study", timeframe: "2 months" },
      { title: "CI/CD Pipelines", description: "Learn tools like Jenkins, GitLab CI, or GitHub Actions.", type: "skill", timeframe: "2-3 months" },
      { title: "Containerization with Docker & Kubernetes", description: "Understand container orchestration and management.", type: "study", timeframe: "3 months" },
      { title: "Infrastructure as Code (IaC)", description: "Learn Terraform or Ansible for automating infrastructure provisioning.", type: "study", timeframe: "2 months" },
      { title: "AWS Certified DevOps Engineer - Professional or Azure DevOps Engineer Expert", description: "Get certified in DevOps practices on a cloud platform.", type: "certification", timeframe: "3-4 months" }
    ]
  },
  // Full-Stack Developer
  "full-stack-developer": {
    careerId: "full-stack-developer",
    items: [
      { title: "Frontend Fundamentals", description: "Master HTML, CSS, JavaScript, and a frontend framework (React, Angular, Vue).", type: "study", timeframe: "3-4 months" },
      { title: "Backend Development", description: "Learn a backend language (Node.js, Python, Ruby, Java) and framework (Express, Django, Rails).", type: "study", timeframe: "3-4 months" },
      { title: "Database Management", description: "Understand SQL (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB) databases.", type: "study", timeframe: "2 months" },
      { title: "Build a Full-Stack Application", description: "Develop an application integrating frontend, backend, and database.", type: "project", timeframe: "2-3 months" },
      { title: "Learn about APIs and RESTful services", description: "Understand how to design, build, and consume APIs.", type: "skill", timeframe: "1 month" }
    ]
  },
  // UI/UX Designer
  "ui-ux-designer": {
    careerId: "ui-ux-designer",
    items: [
      { title: "UX Design Fundamentals", description: "Learn user research, personas, user flows, wireframing, and usability testing.", type: "study", timeframe: "2-3 months" },
      { title: "UI Design Principles", description: "Understand visual design, color theory, typography, and layout.", type: "study", timeframe: "2 months" },
      { title: "Master Design Tools", description: "Learn Figma, Adobe XD, or Sketch for wireframing, prototyping, and UI design.", type: "skill", timeframe: "2-3 months" },
      { title: "Build a UX Portfolio", description: "Create case studies of UI/UX projects showcasing your design process and solutions.", type: "project", timeframe: "3 months" },
      { title: "Google UX Design Certificate", description: "Get certified in UX design principles and practices.", type: "certification", timeframe: "4-6 months" }
    ]
  },
  // --- Healthcare ---
  // Doctor (General Physician) - Post-MBBS
 "doctor-general-physician": {
    careerId: "doctor-general-physician",
    items: [
      { title: "Complete Medical Degree (MBBS)", description: "Obtain the foundational medical qualification from a recognized institution.", type: "study", timeframe: "5.5 years" },
      { title: "Mandatory Internship", description: "Gain practical experience through a supervised internship as per medical council guidelines.", type: "project", timeframe: "1 year" },
      { title: "Licensing Examination", description: "Pass the required national or state medical licensing examination (e.g., NEXT in India).", type: "certification", timeframe: "3-6 months prep" },
      { title: "Postgraduate Specialization (MD/MS/DNB) in General Medicine", description: "Pursue further specialization for advanced knowledge and skills.", type: "study", timeframe: "3 years" },
      { title: "Continuous Medical Education (CME)", description: "Engage in ongoing learning to stay updated with medical advancements.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Nurse
  "nurse": {
    careerId: "nurse",
    items: [
      { title: "Nursing Degree or Diploma", description: "Complete B.Sc. Nursing or General Nursing and Midwifery (GNM).", type: "study", timeframe: "3-4 years" },
      { title: "Pass Licensing Exam", description: "Obtain nursing license by passing the council exam.", type: "certification", timeframe: "2-3 months prep" },
      { title: "Gain Clinical Experience", description: "Work in hospitals or clinics to develop practical nursing skills.", type: "project", timeframe: "1-2 years" },
      { title: "Specialization (Optional)", description: "Consider specializing in areas like ICU, pediatrics, or oncology.", type: "study", timeframe: "1-2 years" },
      { title: "Develop Soft Skills", description: "Enhance communication, empathy, and critical thinking skills.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Medical Lab Technician
  "medical-lab-technician": {
    careerId: "medical-lab-technician",
    items: [
      { title: "Diploma or Bachelor's in Medical Lab Technology (DMLT/BMLT)", description: "Complete formal education in laboratory sciences.", type: "study", timeframe: "2-3 years" },
      { title: "Learn Laboratory Techniques", description: "Master sample collection, testing procedures, and equipment operation.", type: "skill", timeframe: "During study" },
      { title: "Internship/Practical Training", description: "Gain hands-on experience in a clinical laboratory setting.", type: "project", timeframe: "6 months - 1 year" },
      { title: "Certification (Optional but Recommended)", description: "Obtain certification from relevant medical laboratory boards.", type: "certification", timeframe: "2-3 months prep" },
      { title: "Quality Control and Safety Protocols", description: "Understand and implement lab safety and quality assurance procedures.", type: "study", timeframe: "1 month" }
    ]
  },
  // Pharmacist
  "pharmacist": {
    careerId: "pharmacist",
    items: [
      { title: "Bachelor of Pharmacy (B.Pharm)", description: "Complete a 4-year degree in pharmaceutical sciences.", type: "study", timeframe: "4 years" },
      { title: "Pass Pharmacist Licensing Exam", description: "Register with the Pharmacy Council to practice.", type: "certification", timeframe: "2-3 months prep" },
      { title: "Understand Pharmacology & Dispensing", description: "Master knowledge of drugs, their uses, side effects, and dispensing practices.", type: "skill", timeframe: "During study & practice" },
      { title: "Retail or Hospital Pharmacy Experience", description: "Gain practical experience in a pharmacy setting.", type: "project", timeframe: "6 months - 1 year" },
      { title: "Continuing Pharmacy Education (CPE)", description: "Stay updated with new drugs and pharmacy practices.", type: "study", timeframe: "Ongoing" }
    ]
  },
  // Physiotherapist
  "physiotherapist": {
    careerId: "physiotherapist",
    items: [
      { title: "Bachelor of Physiotherapy (BPT)", description: "Complete a 4.5-year degree program including internship.", type: "study", timeframe: "4.5 years" },
      { title: "Licensing/Registration", description: "Register with the relevant physiotherapy council.", type: "certification", timeframe: "1-2 months" },
      { title: "Master Manual Therapy Techniques", description: "Learn various hands-on techniques for patient treatment.", type: "skill", timeframe: "During study & workshops" },
      { title: "Gain Clinical Experience", description: "Work under supervision or independently to treat patients.", type: "project", timeframe: "1-2 years" },
      { title: "Specialization (e.g., Sports, Neuro, Ortho)", description: "Pursue Master's (MPT) or specialized certifications.", type: "study", timeframe: "2 years for MPT" }
    ]
  },
  // Radiologist - Post-MBBS
  "radiologist": {
    careerId: "radiologist",
    items: [
      { title: "Complete Medical Degree (MBBS)", description: "Obtain the foundational medical qualification.", type: "study", timeframe: "5.5 years" },
      { title: "Postgraduate Specialization (MD/DNB) in Radiology", description: "Specialize in medical imaging techniques.", type: "study", timeframe: "3 years" },
      { title: "Master Imaging Modalities", description: "Gain expertise in X-ray, CT, MRI, Ultrasound interpretation.", type: "skill", timeframe: "During specialization" },
      { title: "Fellowships in Sub-specialties (Optional)", description: "Further specialize in areas like Interventional Radiology or Neuroradiology.", type: "study", timeframe: "1-2 years" },
      { title: "Continuous Learning in Imaging Technology", description: "Stay updated with new imaging technologies and diagnostic approaches.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Surgeon - Post-MBBS
  "surgeon": {
    careerId: "surgeon",
    items: [
      { title: "Complete Medical Degree (MBBS)", description: "Obtain the foundational medical qualification.", type: "study", timeframe: "5.5 years" },
      { title: "Postgraduate Specialization (MS/DNB) in General Surgery", description: "Complete specialization in general surgery.", type: "study", timeframe: "3 years" },
      { title: "Develop Surgical Skills", description: "Gain extensive hands-on experience in performing various surgical procedures.", type: "skill", timeframe: "During specialization and beyond" },
      { title: "Super-specialization (M.Ch./DrNB)", description: "Further specialize in fields like Cardiothoracic, Neuro, or Plastic Surgery.", type: "study", timeframe: "3 years" },
      { title: "Attend Surgical Workshops & Conferences", description: "Continuously refine surgical techniques and knowledge.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Medical Transcriptionist
  "medical-transcriptionist": {
    careerId: "medical-transcriptionist",
    items: [
      { title: "Medical Terminology and Anatomy", description: "Learn medical terms, anatomy, and physiology.", type: "study", timeframe: "3-6 months" },
      { title: "Transcription Training Course", description: "Complete a vocational training program for medical transcription.", type: "study", timeframe: "6-12 months" },
      { title: "Develop Typing and Listening Skills", description: "Achieve high accuracy and speed in typing and comprehending medical dictations.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Practice with Diverse Accents and Dictations", description: "Gain experience with various medical specialties and physician accents.", type: "project", timeframe: "3-6 months" },
      { title: "Certification (e.g., CHDS - Certified Healthcare Documentation Specialist)", description: "Optional but can enhance job prospects.", type: "certification", timeframe: "2-3 months prep" }
    ]
  },
  // --- Finance ---
  // Accountant
  "accountant": {
    careerId: "accountant",
    items: [
      { title: "Bachelor's Degree in Commerce (B.Com) or Accounting", description: "Obtain a foundational degree in accounting principles.", type: "study", timeframe: "3 years" },
      { title: "Learn Accounting Software", description: "Master software like Tally, QuickBooks, or SAP FICO.", type: "skill", timeframe: "2-3 months" },
      { title: "Understand Tax Laws and Financial Reporting", description: "Study GST, Income Tax, and financial statement preparation.", type: "study", timeframe: "3-6 months" },
      { title: "Internship or Entry-Level Accounting Role", description: "Gain practical experience in bookkeeping, reconciliation, and reporting.", type: "project", timeframe: "6-12 months" },
      { title: "Consider Professional Certification (e.g., CA Inter, CMA Inter)", description: "Enhance qualifications for career advancement.", type: "certification", timeframe: "Varies" }
    ]
  },
  // Financial Analyst
  "financial-analyst": {
    careerId: "financial-analyst",
    items: [
      { title: "Degree in Finance, Economics, or Business", description: "Obtain a relevant bachelor's or master's degree.", type: "study", timeframe: "3-4 years" },
      { title: "Develop Strong Excel and Financial Modeling Skills", description: "Master spreadsheet software for financial analysis and forecasting.", type: "skill", timeframe: "3-6 months" },
      { title: "Learn Valuation Techniques", description: "Understand DCF, comparable company analysis, and precedent transactions.", type: "study", timeframe: "2-4 months" },
      { title: "CFA Program (Chartered Financial Analyst)", description: "Consider pursuing the CFA designation for advanced financial knowledge.", type: "certification", timeframe: "2-4 years (for all levels)" },
      { title: "Analyze Financial Statements and Market Data", description: "Build projects involving company analysis or investment research.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // Investment Banker
  "investment-banker": {
    careerId: "investment-banker",
    items: [
      { title: "Prestigious Degree in Finance/Economics (MBA often preferred)", description: "Graduate from a top-tier university.", type: "study", timeframe: "4-6 years (incl. MBA)" },
      { title: "Excel & Financial Modeling Mastery", description: "Develop exceptional skills in building complex financial models.", type: "skill", timeframe: "6-12 months intensive" },
      { title: "Understanding of M&A, Capital Markets", description: "Gain deep knowledge of corporate finance, IPOs, debt and equity financing.", type: "study", timeframe: "1-2 years" },
      { title: "Internships at Investment Banks", description: "Secure competitive internships to gain exposure and network.", type: "project", timeframe: "Multiple summers" },
      { title: "Develop Networking and Communication Skills", description: "Build strong interpersonal and presentation skills.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Tax Consultant
  "tax-consultant": {
    careerId: "tax-consultant",
    items: [
      { title: "Degree in Commerce, Law, or Accounting", description: "Obtain a relevant educational background.", type: "study", timeframe: "3-5 years" },
      { title: "In-depth Knowledge of Tax Laws", description: "Master direct (Income Tax) and indirect (GST) taxation.", type: "study", timeframe: "1-2 years" },
      { title: "Tax Software Proficiency", description: "Learn to use tax preparation and filing software.", type: "skill", timeframe: "2-3 months" },
      { title: "Practical Experience in Tax Filing and Advisory", description: "Work with a CA firm or tax consultancy.", type: "project", timeframe: "1-2 years" },
      { title: "Stay Updated with Tax Amendments", description: "Continuously track changes in tax regulations and case laws.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Auditor
  "auditor": {
    careerId: "auditor",
    items: [
      { title: "Degree in Accounting or Finance (CA preferred)", description: "Obtain strong academic grounding in accounting principles.", type: "study", timeframe: "3-5 years" },
      { title: "Understand Auditing Standards and Procedures", description: "Learn SA (Standards on Auditing) and ethical guidelines.", type: "study", timeframe: "6-12 months" },
      { title: "Develop Analytical and Investigative Skills", description: "Learn to examine financial records for accuracy and compliance.", type: "skill", timeframe: "Ongoing" },
      { title: "Gain Experience in an Audit Firm", description: "Participate in statutory, internal, or tax audits.", type: "project", timeframe: "2-3 years (articleship for CA)" },
      { title: "Consider Certifications like CISA (Certified Information Systems Auditor)", description: "Specialize in IT audits if interested.", type: "certification", timeframe: "3-6 months prep" }
    ]
  },
  // Credit Analyst
  "credit-analyst": {
    careerId: "credit-analyst",
    items: [
      { title: "Degree in Finance, Economics, or Business", description: "Obtain a relevant bachelor's degree.", type: "study", timeframe: "3 years" },
      { title: "Financial Statement Analysis", description: "Master analyzing balance sheets, income statements, and cash flow statements.", type: "skill", timeframe: "3-6 months" },
      { title: "Understand Credit Risk Assessment", description: "Learn to evaluate borrowers' creditworthiness and assign risk ratings.", type: "study", timeframe: "2-4 months" },
      { title: "Knowledge of Lending Products and Regulations", description: "Familiarize with different types of loans and banking regulations.", type: "study", timeframe: "1-2 months" },
      { title: "Internship or Junior Role in a Bank/Financial Institution", description: "Gain practical experience in credit appraisal.", type: "project", timeframe: "6-12 months" }
    ]
  },
  // Actuary
  "actuary": {
    careerId: "actuary",
    items: [
      { title: "Strong Foundation in Mathematics & Statistics", description: "Excel in quantitative subjects at degree level (Maths, Stats, Economics, Actuarial Science).", type: "study", timeframe: "3 years" },
      { title: "Pass Actuarial Exams (e.g., from IAI - Institute of Actuaries of India or SOA/CAS)", description: "Commit to a rigorous series of professional exams.", type: "certification", timeframe: "5-7 years (for fellowship)" },
      { title: "Develop Programming Skills (R, Python, SQL)", description: "Learn tools for data analysis and modeling.", type: "skill", timeframe: "6-12 months" },
      { title: "Understand Insurance, Pensions, and Risk Management", description: "Gain domain knowledge relevant to actuarial work.", type: "study", timeframe: "During exam prep" },
      { title: "Internships or Entry-level Roles in Insurance/Consulting", description: "Apply theoretical knowledge in practical settings.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // Chartered Accountant (CA)
  "chartered-accountant-ca": {
    careerId: "chartered-accountant-ca",
    items: [
      { title: "Pass CA Foundation Exam", description: "Clear the first level of the CA course (after Class 12 or graduation).", type: "certification", timeframe: "4-6 months prep" },
      { title: "Pass CA Intermediate Exam", description: "Clear both groups of the second level.", type: "certification", timeframe: "9-18 months prep" },
      { title: "Complete Articleship Training", description: "Undergo 3 years of practical training under a practicing CA.", type: "project", timeframe: "3 years" },
      { title: "Complete AICITSS Training", description: "Attend Advanced Integrated Course on Information Technology and Soft Skills.", type: "study", timeframe: "Varies" },
      { title: "Pass CA Final Exam", description: "Clear both groups of the final level to qualify as a CA.", type: "certification", timeframe: "6-12 months prep" }
    ]
  },
  // --- Education ---
  // School Teacher
  "school-teacher": {
    careerId: "school-teacher",
    items: [
      { title: "Bachelor's Degree (e.g., B.A., B.Sc., B.Com)", description: "Obtain a degree in the subject you wish to teach.", type: "study", timeframe: "3 years" },
      { title: "Bachelor of Education (B.Ed.)", description: "Complete a professional teaching qualification.", type: "study", timeframe: "2 years" },
      { title: "Pass Teacher Eligibility Test (TET/CTET)", description: "Qualify state or central teacher eligibility tests.", type: "certification", timeframe: "3-6 months prep" },
      { title: "Develop Classroom Management Skills", description: "Learn techniques for effective teaching and student engagement.", type: "skill", timeframe: "During B.Ed. & practice" },
      { title: "Gain Teaching Experience", description: "Start as a trainee or assistant teacher, or through volunteer work.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // College Professor - Post PhD
  "college-professor": {
    careerId: "college-professor",
    items: [
      { title: "Master's Degree in Specialization", description: "Obtain a postgraduate degree in your chosen academic field.", type: "study", timeframe: "2 years" },
      { title: "Qualify NET/SET or Ph.D.", description: "Clear National/State Eligibility Test or complete a Ph.D. for lectureship eligibility.", type: "certification", timeframe: "6 months - 5 years" },
      { title: "Develop Research and Publication Skills", description: "Engage in academic research and publish in reputed journals.", type: "skill", timeframe: "Ongoing (especially with Ph.D.)" },
      { title: "Gain Teaching Experience (Ad-hoc, Guest Lecturer)", description: "Seek opportunities to teach at college level.", type: "project", timeframe: "Varies" },
      { title: "Attend Academic Conferences and Seminars", description: "Present research and network with peers.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Online Tutor
  "online-tutor": {
    careerId: "online-tutor",
    items: [
      { title: "Subject Matter Expertise", description: "Have a strong understanding of the subject(s) you plan to teach.", type: "skill", timeframe: "Ongoing" },
      { title: "Familiarity with Online Teaching Platforms", description: "Learn to use tools like Zoom, Google Meet, and virtual whiteboards.", type: "skill", timeframe: "1 month" },
      { title: "Create Engaging Teaching Material", description: "Develop digital notes, presentations, and practice exercises.", type: "project", timeframe: "1-2 months" },
      { title: "Develop Communication and Patience", description: "Effectively explain concepts and handle student queries online.", type: "skill", timeframe: "Ongoing" },
      { title: "Build an Online Presence/Portfolio", description: "Market your services on tutoring platforms or social media.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // Educational Content Developer
  "educational-content-developer": {
    careerId: "educational-content-developer",
    items: [
      { title: "Strong Subject Matter Knowledge", description: "Deep understanding of the educational topics for content creation.", type: "skill", timeframe: "Ongoing" },
      { title: "Excellent Writing and Editing Skills", description: "Ability to create clear, concise, and engaging educational material.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Understanding of Instructional Design Principles", description: "Learn how to structure content for effective learning.", type: "study", timeframe: "2-3 months" },
      { title: "Familiarity with Content Creation Tools", description: "Use tools for creating text, images, videos, and interactive content.", type: "skill", timeframe: "1-2 months" },
      { title: "Build a Portfolio of Content Samples", description: "Showcase your ability to create different types of educational content.", type: "project", timeframe: "2-3 months" }
    ]
  },
  // Instructional Designer
  "instructional-designer": {
    careerId: "instructional-designer",
    items: [
      { title: "Learn Adult Learning Theories (Andragogy)", description: "Understand how adults learn best.", type: "study", timeframe: "2-3 months" },
      { title: "Master Instructional Design Models (ADDIE, SAM)", description: "Learn frameworks for designing learning experiences.", type: "study", timeframe: "2-3 months" },
      { title: "Proficiency in Authoring Tools (Articulate Storyline, Adobe Captivate)", description: "Develop skills in creating e-learning courses.", type: "skill", timeframe: "3-6 months" },
      { title: "Develop Needs Analysis and Evaluation Skills", description: "Learn to identify learning needs and measure training effectiveness.", type: "skill", timeframe: "2 months" },
      { title: "Create an Instructional Design Portfolio", description: "Showcase projects demonstrating your ID process and outcomes.", type: "project", timeframe: "3-4 months" }
    ]
  },
  // School Administrator
  "school-administrator": {
    careerId: "school-administrator",
    items: [
      { title: "Teaching Experience", description: "Significant experience as a teacher is usually required.", type: "project", timeframe: "5+ years" },
      { title: "Master's Degree in Education Administration or Leadership", description: "Obtain specialized qualifications for administrative roles.", type: "study", timeframe: "1-2 years" },
      { title: "Understand School Policies and Regulations", description: "Familiarize with education laws, safety protocols, and administrative procedures.", type: "study", timeframe: "Ongoing" },
      { title: "Develop Leadership and Management Skills", description: "Learn to manage staff, budgets, and school operations.", type: "skill", timeframe: "Ongoing" },
      { title: "Obtain Administrative Licenses/Certifications (if required by state/board)", description: "Meet regulatory requirements for school administrators.", type: "certification", timeframe: "Varies" }
    ]
  },
  // --- Government and Public Sector ---
  // Civil Servant (IAS, IPS, IFS)
  "civil-servant-ias-ips-ifs": {
    careerId: "civil-servant-ias-ips-ifs",
    items: [
      { title: "Bachelor's Degree (Any Stream)", description: "Complete a graduation degree from a recognized university.", type: "study", timeframe: "3-4 years" },
      { title: "UPSC Civil Services Exam - Prelims", description: "Clear the preliminary stage covering General Studies and CSAT.", type: "certification", timeframe: "1-2 years prep" },
      { title: "UPSC Civil Services Exam - Mains", description: "Clear the main written exams including essays, GS papers, and optional subject.", type: "certification", timeframe: "6-9 months after prelims" },
      { title: "UPSC Civil Services Exam - Interview", description: "Successfully complete the personality test/interview.", type: "certification", timeframe: "2-3 months after mains" },
      { title: "Develop Strong General Awareness and Analytical Skills", description: "Continuous study of current affairs, history, polity, economy.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Clerk (Government)
  "clerk-government": {
    careerId: "clerk-government",
    items: [
      { title: "Complete 10+2 or Graduation (as per notification)", description: "Meet the minimum educational qualification.", type: "study", timeframe: "Varies" },
      { title: "Prepare for Competitive Exams (SSC CHSL, State PSC Clerk)", description: "Focus on subjects like Quantitative Aptitude, Reasoning, English, General Awareness.", type: "study", timeframe: "6-12 months" },
      { title: "Develop Typing Skills", description: "Achieve required typing speed (English/Hindi) as per exam criteria.", type: "skill", timeframe: "2-3 months practice" },
      { title: "Familiarize with Basic Computer Operations", description: "Knowledge of MS Office is often required.", type: "skill", timeframe: "1 month" },
      { title: "Practice Previous Year Question Papers", description: "Understand exam pattern and improve time management.", type: "project", timeframe: "Ongoing during prep" }
    ]
  },
  // Railway Engineer (via RRB JE/SSE)
  "railway-engineer": {
    careerId: "railway-engineer",
    items: [
      { title: "Diploma or B.E./B.Tech in Engineering (Civil, Mechanical, Electrical, etc.)", description: "Obtain relevant engineering qualification.", type: "study", timeframe: "3-4 years" },
      { title: "Prepare for RRB JE/SSE Exams", description: "Study technical subjects of your engineering discipline, General Awareness, Reasoning, Maths.", type: "study", timeframe: "6-12 months" },
      { title: "Clear CBT Stage 1 and Stage 2", description: "Pass Computer Based Tests as per RRB selection process.", type: "certification", timeframe: "During exam cycle" },
      { title: "Medical Fitness Test", description: "Meet the medical standards prescribed by Railway Recruitment Boards.", type: "certification", timeframe: "Post exam qualification" },
      { title: "Stay Updated with Railway Technology and Operations", description: "Continuous learning relevant to railway engineering.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Bank Officer (SBI PO, IBPS PO, RBI Grade B)
  "bank-officer": {
    careerId: "bank-officer",
    items: [
      { title: "Bachelor's Degree (Any Stream)", description: "Complete graduation from a recognized university.", type: "study", timeframe: "3-4 years" },
      { title: "Prepare for Bank PO/Officer Exams", description: "Focus on Quantitative Aptitude, Reasoning, English, General/Banking Awareness, Computer Knowledge.", type: "study", timeframe: "6-12 months" },
      { title: "Clear Preliminary and Main Exams", description: "Successfully pass the multiple stages of the selection process.", type: "certification", timeframe: "During exam cycle" },
      { title: "Prepare for Group Discussion and Interview", description: "Develop communication skills and awareness of banking sector.", type: "skill", timeframe: "1-2 months" },
      { title: "Understand Banking Products and Financial Services", description: "Gain knowledge about loans, deposits, digital banking, etc.", type: "study", timeframe: "Ongoing" }
    ]
  },
  // PSU Roles (ONGC, BHEL, etc. - Engineer/Executive Trainee via GATE or direct exams)
  "psu-roles": {
    careerId: "psu-roles",
    items: [
      { title: "B.E./B.Tech in Relevant Engineering Discipline or MBA/PGDM for management roles", description: "Obtain required qualification.", type: "study", timeframe: "2-4 years" },
      { title: "Qualify GATE (Graduate Aptitude Test in Engineering) with a good score (for technical roles)", description: "Many PSUs recruit based on GATE scores.", type: "certification", timeframe: "6-12 months prep" },
      { title: "Prepare for PSU Specific Written Tests (if applicable)", description: "Some PSUs conduct their own exams.", type: "study", timeframe: "3-6 months" },
      { title: "Group Discussion and Personal Interview", description: "Clear selection rounds focused on technical and managerial skills.", type: "skill", timeframe: "1-2 months prep" },
      { title: "Develop Domain Knowledge and Current Affairs Awareness", description: "Stay updated with industry trends and general knowledge.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Army/Navy/Air Force Officer
  "defence-officer": {
    careerId: "defence-officer",
    items: [
      { title: "Meet Eligibility Criteria (Education, Age, Physical Standards)", description: "Varies by entry scheme (NDA, CDS, AFCAT, Technical Entry).", type: "study", timeframe: "Varies" },
      { title: "Prepare for Written Examination (NDA, CDS, AFCAT)", description: "Study subjects like Maths, English, General Knowledge, Reasoning.", type: "study", timeframe: "6-12 months" },
      { title: "SSB Interview Preparation", description: "Focus on psychological tests, group tasks, interview, and physical fitness.", type: "skill", timeframe: "3-6 months intensive prep" },
      { title: "Clear SSB Interview (5-day process)", description: "Successfully pass the Services Selection Board tests.", type: "certification", timeframe: "During selection" },
      { title: "Undergo Training at Respective Academies (NDA, IMA, AFA, INA)", description: "Rigorous training post-selection.", type: "project", timeframe: "1-4 years" }
    ]
  },
  // Police Sub-Inspector
  "police-sub-inspector": {
    careerId: "police-sub-inspector",
    items: [
      { title: "Bachelor's Degree (Any Stream)", description: "Complete graduation from a recognized university.", type: "study", timeframe: "3-4 years" },
      { title: "Prepare for State Police SI Recruitment Exam", description: "Study General Knowledge, Current Affairs, Reasoning, Maths, relevant laws (IPC, CrPC).", type: "study", timeframe: "6-12 months" },
      { title: "Physical Efficiency Test (PET) and Physical Standard Test (PST)", description: "Meet the required physical fitness criteria (running, jumps, height, chest).", type: "skill", timeframe: "3-6 months training" },
      { title: "Clear Written Examination and Interview (if applicable)", description: "Pass all stages of the selection process.", type: "certification", timeframe: "During exam cycle" },
      { title: "Develop Understanding of Law and Order", description: "Knowledge of criminal justice system and police procedures.", type: "study", timeframe: "Ongoing" }
    ]
  },
  // --- Manufacturing and Engineering ---
  // Mechanical Engineer
  "mechanical-engineer": {
    careerId: "mechanical-engineer",
    items: [
      { title: "Bachelor's Degree in Mechanical Engineering (B.E./B.Tech)", description: "Obtain a foundational degree in mechanical principles.", type: "study", timeframe: "4 years" },
      { title: "Learn CAD/CAM Software (AutoCAD, SolidWorks, CATIA)", description: "Master design and manufacturing software.", type: "skill", timeframe: "3-6 months" },
      { title: "Understand Thermodynamics, Fluid Mechanics, Manufacturing Processes", description: "Deepen knowledge in core mechanical subjects.", type: "study", timeframe: "During degree & beyond" },
      { title: "Undertake Industry Internships or Projects", description: "Gain practical experience in design, manufacturing, or maintenance.", type: "project", timeframe: "3-6 months" },
      { title: "Consider Master's Degree or Specialization (e.g., Robotics, Automotive)", description: "Enhance expertise for specialized roles.", type: "study", timeframe: "2 years" }
    ]
  },
  // Electrical Engineer
  "electrical-engineer": {
    careerId: "electrical-engineer",
    items: [
      { title: "Bachelor's Degree in Electrical Engineering (B.E./B.Tech)", description: "Obtain a degree focusing on electrical systems and electronics.", type: "study", timeframe: "4 years" },
      { title: "Learn Circuit Design and Simulation Software (e.g., SPICE, Multisim)", description: "Master tools for designing and analyzing electrical circuits.", type: "skill", timeframe: "3-6 months" },
      { title: "Understand Power Systems, Control Systems, Electronics", description: "Deepen knowledge in core electrical subjects.", type: "study", timeframe: "During degree & beyond" },
      { title: "Gain Experience with PLC Programming and Automation (for industrial roles)", description: "Learn to program and implement control systems.", type: "skill", timeframe: "2-4 months" },
      { title: "Work on Projects related to Power Generation, Transmission, or Embedded Systems", description: "Apply theoretical knowledge to practical problems.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // Civil Engineer
  "civil-engineer": {
    careerId: "civil-engineer",
    items: [
      { title: "Bachelor's Degree in Civil Engineering (B.E./B.Tech)", description: "Obtain a degree in structural design, construction, and infrastructure.", type: "study", timeframe: "4 years" },
      { title: "Learn Design Software (AutoCAD, STAAD.Pro, Revit)", description: "Master tools for structural design and drafting.", type: "skill", timeframe: "3-6 months" },
      { title: "Understand Structural Analysis, Geotechnical Engineering, Transportation Engineering", description: "Gain expertise in core civil engineering areas.", type: "study", timeframe: "During degree & beyond" },
      { title: "Site Experience through Internships or Projects", description: "Gain practical knowledge of construction processes and project management.", type: "project", timeframe: "3-6 months" },
      { title: "Consider Professional Engineer (PE) License or Master's Degree", description: "Enhance credentials for advanced roles.", type: "certification", timeframe: "Varies" }
    ]
  },
  // Production Manager
  "production-manager": {
    careerId: "production-manager",
    items: [
      { title: "Degree in Engineering (Mechanical, Industrial, Production) or Business Management", description: "Obtain relevant educational background.", type: "study", timeframe: "3-4 years" },
      { title: "Gain Experience in Manufacturing/Operations", description: "Start in roles like production supervisor or engineer.", type: "project", timeframe: "3-5 years" },
      { title: "Learn Lean Manufacturing and Six Sigma Principles", description: "Understand methodologies for process improvement and efficiency.", type: "study", timeframe: "3-6 months (can include certification)" },
      { title: "Develop Planning, Scheduling, and Resource Management Skills", description: "Master the art of managing production workflows.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Quality Control and Safety Standards", description: "Ensure products meet quality requirements and workplace safety.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Quality Assurance Engineer
  "quality-assurance-engineer": {
    careerId: "quality-assurance-engineer",
    items: [
      { title: "Degree in Engineering or a Related Technical Field", description: "Obtain a foundational technical education.", type: "study", timeframe: "3-4 years" },
      { title: "Understand Quality Management Systems (ISO 9001, etc.)", description: "Learn standards and methodologies for ensuring quality.", type: "study", timeframe: "2-3 months" },
      { title: "Learn Statistical Process Control (SPC) and Root Cause Analysis", description: "Master tools for monitoring and improving quality.", type: "skill", timeframe: "3-6 months" },
      { title: "Gain Experience in Testing, Inspection, and Auditing", description: "Work in a QA/QC role within a manufacturing or service industry.", type: "project", timeframe: "1-2 years" },
      { title: "Consider Certifications like CQE (Certified Quality Engineer)", description: "Validate your expertise in quality engineering.", type: "certification", timeframe: "3-6 months prep" }
    ]
  },
  // Industrial Designer
  "industrial-designer": {
    careerId: "industrial-designer",
    items: [
      { title: "Bachelor's Degree in Industrial Design, Product Design, or a related field", description: "Complete a specialized design education.", type: "study", timeframe: "3-4 years" },
      { title: "Master 2D and 3D Design Software (e.g., Adobe Illustrator, Photoshop, SolidWorks, Rhino, Keyshot)", description: "Develop strong software skills for visualization and modeling.", type: "skill", timeframe: "6-12 months" },
      { title: "Understand Design Principles, Ergonomics, Materials, and Manufacturing Processes", description: "Gain a holistic understanding of product creation.", type: "study", timeframe: "During degree" },
      { title: "Develop a Strong Portfolio of Design Projects", description: "Showcase your creativity, problem-solving skills, and design process.", type: "project", timeframe: "Ongoing" },
      { title: "Internships or Freelance Projects", description: "Gain real-world experience and build industry connections.", type: "project", timeframe: "Multiple opportunities" }
    ]
  },
  // Plant Manager
  "plant-manager": {
    careerId: "plant-manager",
    items: [
      { title: "Degree in Engineering (Industrial, Mechanical) or Business Management", description: "Obtain a strong educational foundation.", type: "study", timeframe: "3-4 years" },
      { title: "Extensive Experience in Manufacturing Operations", description: "Progress through roles like Production Supervisor, Production Manager.", type: "project", timeframe: "7-10+ years" },
      { title: "Develop Strong Leadership and People Management Skills", description: "Effectively lead and motivate large teams.", type: "skill", timeframe: "Ongoing" },
      { title: "Master Budgeting, Cost Control, and Efficiency Improvement", description: "Manage plant finances and optimize operations.", type: "skill", timeframe: "Ongoing" },
      { title: "In-depth Knowledge of Safety, Quality, and Regulatory Compliance", description: "Ensure the plant operates safely and meets all standards.", type: "study", timeframe: "Ongoing" }
    ]
  },
  // --- Sales and Marketing ---
  // Marketing Manager
  "marketing-manager": {
    careerId: "marketing-manager",
    items: [
      { title: "Bachelor's or Master's Degree in Marketing or Business", description: "Obtain a relevant degree.", type: "study", timeframe: "3-5 years" },
      { title: "Gain Experience in Marketing Roles (e.g., Marketing Executive, Specialist)", description: "Build a foundation in various marketing functions.", type: "project", timeframe: "3-5 years" },
      { title: "Develop Strategic Thinking and Campaign Management Skills", description: "Learn to plan, execute, and measure marketing campaigns.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Market Research, Analytics, and Reporting", description: "Use data to inform marketing decisions and demonstrate ROI.", type: "skill", timeframe: "Ongoing" },
      { title: "Stay Updated with Digital Marketing Trends and Tools", description: "Continuously learn about new marketing technologies and strategies.", type: "study", timeframe: "Ongoing" }
    ]
  },
  // Sales Executive
  "sales-executive": {
    careerId: "sales-executive",
    items: [
      { title: "Bachelor's Degree (Any Stream, Business/Marketing preferred)", description: "A degree can be helpful but not always mandatory.", type: "study", timeframe: "3 years" },
      { title: "Develop Excellent Communication and Interpersonal Skills", description: "Master the art of persuasion, negotiation, and relationship building.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Understand Sales Techniques and CRM Software", description: "Learn about sales funnels, closing techniques, and using CRM tools.", type: "study", timeframe: "1-3 months" },
      { title: "Gain Product Knowledge and Understand Target Audience", description: "Thoroughly learn about what you are selling and who you are selling to.", type: "skill", timeframe: "Ongoing" },
      { title: "Practice Cold Calling, Lead Generation, and Presentation Skills", description: "Actively work on core sales activities.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // Digital Marketing Specialist
  "digital-marketing-specialist": {
    careerId: "digital-marketing-specialist",
    items: [
      { title: "Learn Fundamentals of Digital Marketing", description: "Understand SEO, SEM, SMM, Content Marketing, Email Marketing.", type: "study", timeframe: "2-3 months" },
      { title: "Master Digital Marketing Tools (Google Analytics, Google Ads, SEO tools, Email Marketing Platforms)", description: "Gain proficiency in key industry tools.", type: "skill", timeframe: "3-6 months" },
      { title: "Google Digital Garage Certification or similar", description: "Get certified in digital marketing fundamentals.", type: "certification", timeframe: "1-2 months" },
      { title: "Build a Portfolio of Digital Marketing Projects", description: "Run sample campaigns, optimize a website for SEO, or manage social media accounts.", type: "project", timeframe: "2-3 months" },
      { title: "Stay Updated with Algorithm Changes and New Platforms", description: "Digital marketing is ever-evolving; continuous learning is key.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Brand Manager
  "brand-manager": {
    careerId: "brand-manager",
    items: [
      { title: "Degree in Marketing, Communications, or Business (MBA often preferred)", description: "Obtain a strong educational background.", type: "study", timeframe: "3-5 years" },
      { title: "Experience in Marketing, Advertising, or Product Management", description: "Gain experience in roles that contribute to brand building.", type: "project", timeframe: "3-7 years" },
      { title: "Develop Brand Strategy and Positioning Skills", description: "Learn to define brand identity, messaging, and market positioning.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Consumer Behavior and Market Research", description: "Use insights to develop effective brand strategies.", type: "study", timeframe: "Ongoing" },
      { title: "Master Communication, Project Management, and Analytical Skills", description: "Effectively manage brand campaigns and measure their impact.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Content Marketer
  "content-marketer": {
    careerId: "content-marketer",
    items: [
      { title: "Excellent Writing and Storytelling Skills", description: "Ability to create compelling and valuable content.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Understand SEO and Content Strategy", description: "Learn how to create content that ranks and attracts the target audience.", type: "study", timeframe: "2-3 months" },
      { title: "Familiarity with Different Content Formats (Blogs, Videos, Infographics, Podcasts)", description: "Learn to create and distribute various types of content.", type: "skill", timeframe: "3-6 months" },
      { title: "Learn Content Management Systems (CMS) like WordPress", description: "Understand how to publish and manage content online.", type: "skill", timeframe: "1 month" },
      { title: "Build a Portfolio of Content Pieces and Campaign Results", description: "Showcase your ability to drive results through content.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // SEO Specialist
  "seo-specialist": {
    careerId: "seo-specialist",
    items: [
      { title: "Understand Search Engine Algorithms and Ranking Factors", description: "Learn how search engines like Google work.", type: "study", timeframe: "2-3 months" },
      { title: "Master On-Page, Off-Page, and Technical SEO", description: "Learn all aspects of optimizing websites for search.", type: "study", timeframe: "3-6 months" },
      { title: "Proficiency in SEO Tools (Google Analytics, Search Console, Ahrefs, SEMrush, Moz)", description: "Learn to use tools for keyword research, site audits, and rank tracking.", type: "skill", timeframe: "2-4 months" },
      { title: "Practice Link Building and Content Optimization Strategies", description: "Implement SEO techniques on websites.", type: "project", timeframe: "Ongoing" },
      { title: "Stay Updated with SEO Best Practices and Algorithm Updates", description: "SEO is dynamic; continuous learning is essential.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Social Media Manager
  "social-media-manager": {
    careerId: "social-media-manager",
    items: [
      { title: "Understand Different Social Media Platforms and Their Audiences", description: "Learn the nuances of Facebook, Instagram, Twitter, LinkedIn, TikTok, etc.", type: "study", timeframe: "1-2 months" },
      { title: "Develop Content Creation and Curation Skills", description: "Create engaging posts, visuals, and videos tailored for each platform.", type: "skill", timeframe: "2-3 months" },
      { title: "Learn Social Media Analytics and Reporting", description: "Understand how to measure performance and report on KPIs.", type: "skill", timeframe: "1-2 months" },
      { title: "Master Social Media Management Tools (Hootsuite, Buffer, Sprout Social)", description: "Learn to schedule posts, monitor engagement, and manage multiple accounts.", type: "skill", timeframe: "1-2 months" },
      { title: "Build a Portfolio by Managing Social Media Accounts (Personal or for Small Businesses)", description: "Showcase your ability to grow and engage an online community.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // --- Hospitality and Tourism ---
  // Hotel Manager
  "hotel-manager": {
    careerId: "hotel-manager",
    items: [
      { title: "Degree or Diploma in Hotel Management or Hospitality Management", description: "Obtain formal education in the field.", type: "study", timeframe: "3-4 years" },
      { title: "Gain Experience in Various Hotel Departments (Front Office, F&B, Housekeeping)", description: "Understand all aspects of hotel operations.", type: "project", timeframe: "3-5 years" },
      { title: "Develop Leadership, Customer Service, and Problem-Solving Skills", description: "Essential skills for managing staff and guest satisfaction.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Financial Management and Budgeting for Hotels", description: "Manage hotel revenue, expenses, and profitability.", type: "study", timeframe: "During study & experience" },
      { title: "Knowledge of Hotel Management Software (PMS)", description: "Proficiency in Property Management Systems.", type: "skill", timeframe: "2-3 months" }
    ]
  },
  // Travel Agent
  "travel-agent": {
    careerId: "travel-agent",
    items: [
      { title: "Diploma or Certification in Travel and Tourism", description: "Formal training can be beneficial.", type: "study", timeframe: "6 months - 1 year" },
      { title: "Develop Strong Geographical Knowledge and Destination Expertise", description: "Learn about popular and niche travel destinations.", type: "skill", timeframe: "Ongoing" },
      { title: "Master Booking Systems (GDS like Amadeus, Sabre) and Online Travel Portals", description: "Learn to book flights, hotels, and tours.", type: "skill", timeframe: "2-3 months" },
      { title: "Excellent Communication and Customer Service Skills", description: "Understand client needs and provide tailored travel solutions.", type: "skill", timeframe: "Ongoing" },
      { title: "Stay Updated with Travel Regulations, Visas, and Industry Trends", description: "Provide accurate and current information to travelers.", type: "study", timeframe: "Ongoing" }
    ]
  },
  // Tour Guide
  "tour-guide": {
    careerId: "tour-guide",
    items: [
      { title: "In-depth Knowledge of Local History, Culture, and Attractions", description: "Become an expert on the areas you will guide.", type: "study", timeframe: "Ongoing research" },
      { title: "Excellent Storytelling and Public Speaking Skills", description: "Engage and entertain tourists with compelling narratives.", type: "skill", timeframe: "Practice" },
      { title: "Obtain Tour Guide License (if required by local authorities)", description: "Meet regulatory requirements.", type: "certification", timeframe: "Varies" },
      { title: "Develop Interpersonal and Group Management Skills", description: "Handle diverse groups of tourists effectively.", type: "skill", timeframe: "Ongoing" },
      { title: "Learn Basic First Aid and Emergency Procedures", description: "Ensure safety and well-being of tourists.", type: "study", timeframe: "1-2 days course" }
    ]
  },
  // Chef
  "chef": {
    careerId: "chef",
    items: [
      { title: "Culinary School Diploma or Apprenticeship", description: "Formal culinary training is highly recommended.", type: "study", timeframe: "1-3 years" },
      { title: "Master Fundamental Cooking Techniques and Cuisines", description: "Develop a strong foundation in various cooking methods and styles.", type: "skill", timeframe: "During training & early career" },
      { title: "Gain Experience in Professional Kitchens (Commis Chef, Demi Chef, Chef de Partie)", description: "Work your way up the kitchen hierarchy.", type: "project", timeframe: "5-10 years to reach senior levels" },
      { title: "Develop Creativity, Menu Planning, and Food Costing Skills", description: "Learn to design menus and manage kitchen budgets.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Kitchen Hygiene, Safety, and Management", description: "Ensure a safe and efficient kitchen operation.", type: "study", timeframe: "During training & on-the-job" }
    ]
  },
  // Front Office Executive
  "front-office-executive": {
    careerId: "front-office-executive",
    items: [
      { title: "Diploma or Degree in Hotel Management or a related field (optional but helpful)", description: "Formal education can provide a good foundation.", type: "study", timeframe: "1-3 years" },
      { title: "Excellent Communication and Customer Service Skills", description: "Be the first point of contact and create a positive impression.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Proficiency in Hotel Management Software (PMS) for Check-in/Check-out and Reservations", description: "Learn to use front office systems.", type: "skill", timeframe: "1-2 months" },
      { title: "Develop Problem-Solving and Complaint Handling Skills", description: "Address guest queries and issues effectively.", type: "skill", timeframe: "Ongoing" },
      { title: "Gain Experience through Internships or Entry-Level Positions", description: "Start in a front desk or guest relations role.", type: "project", timeframe: "6-12 months" }
    ]
  },
  // Event Manager
  "event-manager": {
    careerId: "event-manager",
    items: [
      { title: "Degree or Diploma in Event Management, Hospitality, or Marketing", description: "Formal education can provide structured knowledge.", type: "study", timeframe: "1-3 years" },
      { title: "Develop Strong Organizational and Project Management Skills", description: "Manage timelines, budgets, vendors, and logistics.", type: "skill", timeframe: "Ongoing" },
      { title: "Gain Experience by Volunteering or Assisting at Events", description: "Start small and build your portfolio.", type: "project", timeframe: "Ongoing" },
      { title: "Master Negotiation and Vendor Management Skills", description: "Secure best deals and manage relationships with suppliers.", type: "skill", timeframe: "Practice" },
      { title: "Excellent Communication, Interpersonal, and Problem-Solving Abilities", description: "Handle diverse stakeholders and unexpected challenges.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // --- Arts and Media ---
  // Graphic Designer
  "graphic-designer": {
    careerId: "graphic-designer",
    items: [
      { title: "Learn Design Principles (Color Theory, Typography, Layout)", description: "Understand the fundamentals of visual communication.", type: "study", timeframe: "3-6 months" },
      { title: "Master Design Software (Adobe Photoshop, Illustrator, InDesign)", description: "Develop proficiency in industry-standard tools.", type: "skill", timeframe: "6-12 months" },
      { title: "Build a Strong Portfolio of Design Work", description: "Showcase your creativity and skills through diverse projects (logos, brochures, web graphics).", type: "project", timeframe: "Ongoing" },
      { title: "Understand Branding and Marketing Concepts", description: "Learn how design supports brand identity and marketing goals.", type: "study", timeframe: "2-3 months" },
      { title: "Seek Internships or Freelance Projects", description: "Gain real-world experience and client feedback.", type: "project", timeframe: "Multiple opportunities" }
    ]
  },
  // Content Writer
  "content-writer": {
    careerId: "content-writer",
    items: [
      { title: "Develop Excellent Writing, Grammar, and Editing Skills", description: "Master the art of clear, concise, and engaging writing.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Learn Different Writing Styles (Blog posts, Articles, Web Copy, SEO Writing)", description: "Adapt your writing for various platforms and purposes.", type: "skill", timeframe: "3-6 months" },
      { title: "Understand SEO Principles for Writers", description: "Learn to write content that is search engine friendly.", type: "study", timeframe: "1-2 months" },
      { title: "Build a Portfolio of Writing Samples", description: "Showcase your versatility and quality of work.", type: "project", timeframe: "Ongoing" },
      { title: "Practice Research and Fact-Checking", description: "Ensure accuracy and credibility in your content.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Journalist
  "journalist": {
    careerId: "journalist",
    items: [
      { title: "Bachelor's Degree in Journalism, Mass Communication, or a related field", description: "Obtain foundational knowledge and skills.", type: "study", timeframe: "3 years" },
      { title: "Develop Strong Writing, Interviewing, and Reporting Skills", description: "Master the core competencies of journalism.", type: "skill", timeframe: "During study & practice" },
      { title: "Understand Media Ethics and Law", description: "Learn the principles of responsible journalism.", type: "study", timeframe: "During degree" },
      { title: "Gain Experience through Internships at Newspapers, TV Channels, or Online Media", description: "Build practical skills and a portfolio.", type: "project", timeframe: "Multiple opportunities" },
      { title: "Stay Updated with Current Affairs and Develop a Niche (e.g., Politics, Sports, Business)", description: "Cultivate expertise in specific areas.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Video Editor
  "video-editor": {
    careerId: "video-editor",
    items: [
      { title: "Learn Video Editing Principles (Storytelling, Pacing, Visual Composition)", description: "Understand the art and craft of video editing.", type: "study", timeframe: "2-3 months" },
      { title: "Master Video Editing Software (Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve)", description: "Develop proficiency in industry-standard tools.", type: "skill", timeframe: "3-6 months" },
      { title: "Understand Video Formats, Codecs, and Color Correction/Grading", description: "Learn the technical aspects of video post-production.", type: "study", timeframe: "1-2 months" },
      { title: "Build a Demo Reel or Portfolio of Editing Projects", description: "Showcase your skills with diverse video content.", type: "project", timeframe: "Ongoing" },
      { title: "Practice Editing Different Types of Videos (Short films, Documentaries, Vlogs, Ads)", description: "Gain versatility in your editing style.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // Photographer
  "photographer": {
    careerId: "photographer",
    items: [
      { title: "Understand Photography Fundamentals (Exposure, Composition, Lighting)", description: "Master the basics of capturing good images.", type: "study", timeframe: "2-3 months" },
      { title: "Learn to Use DSLR/Mirrorless Cameras and Lenses", description: "Become proficient with professional photography equipment.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Master Photo Editing Software (Adobe Lightroom, Photoshop)", description: "Learn post-processing techniques to enhance images.", type: "skill", timeframe: "3-6 months" },
      { title: "Develop a Specialization (e.g., Portrait, Wedding, Wildlife, Product Photography)", description: "Find your niche and hone your skills.", type: "skill", timeframe: "Ongoing" },
      { title: "Build a Strong Portfolio Showcasing Your Best Work", description: "Create a collection of high-quality images in your chosen specialty.", type: "project", timeframe: "Ongoing" }
    ]
  },
  // Animator
  "animator": {
    careerId: "animator",
    items: [
      { title: "Learn Principles of Animation (Timing, Spacing, Weight, etc.)", description: "Understand the core concepts that bring characters and objects to life.", type: "study", timeframe: "3-6 months" },
      { title: "Master Animation Software (e.g., Autodesk Maya, Blender, Toon Boom Harmony for 2D; After Effects for motion graphics)", description: "Develop proficiency in industry-standard tools.", type: "skill", timeframe: "6-18 months" },
      { title: "Develop Drawing and Storyboarding Skills", description: "Visualize scenes and plan animation sequences.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Create a Demo Reel Showcasing Your Animation Skills", description: "Compile your best animation pieces (character animation, motion graphics).", type: "project", timeframe: "Ongoing" },
      { title: "Consider a Degree or Diploma in Animation", description: "Formal education can provide structured learning and industry connections.", type: "study", timeframe: "2-4 years" }
    ]
  },
  // Film Director
  "film-director": {
    careerId: "film-director",
    items: [
      { title: "Study Film History, Theory, and Cinematography", description: "Understand the art and craft of filmmaking.", type: "study", timeframe: "1-2 years" },
      { title: "Learn Screenwriting and Storytelling", description: "Develop the ability to create compelling narratives.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Gain Experience in Various Crew Roles (e.g., Assistant Director, Editor)", description: "Understand all aspects of film production.", type: "project", timeframe: "Several years" },
      { title: "Direct Short Films or Independent Projects", description: "Build a portfolio and develop your directorial voice.", type: "project", timeframe: "Ongoing" },
      { title: "Develop Leadership, Communication, and Visionary Skills", description: "Effectively lead a film crew and realize your artistic vision.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // --- Other Popular Roles ---
  // Lawyer - Post LLB
  "lawyer": {
    careerId: "lawyer",
    items: [
      { title: "Complete Bachelor of Laws (LLB) Degree", description: "Obtain the foundational law degree.", type: "study", timeframe: "3 or 5 years" },
      { title: "Enroll with State Bar Council and Pass All India Bar Examination (AIBE)", description: "Get licensed to practice law in India.", type: "certification", timeframe: "3-6 months prep after LLB" },
      { title: "Develop Legal Research and Drafting Skills", description: "Master the ability to find relevant case law and draft legal documents.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Gain Courtroom Experience or Specialize (Corporate, Criminal, Civil)", description: "Work under a senior advocate or join a law firm.", type: "project", timeframe: "2-5 years for specialization" },
      { title: "Stay Updated with Legal Amendments and Judgments", description: "Continuous learning is crucial in the legal field.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Architect
  "architect": {
    careerId: "architect",
    items: [
      { title: "Bachelor of Architecture (B.Arch)", description: "Complete a 5-year professional degree program.", type: "study", timeframe: "5 years" },
      { title: "Register with the Council of Architecture (COA)", description: "Obtain a license to practice as an architect in India.", type: "certification", timeframe: "Post B.Arch" },
      { title: "Master Architectural Design Software (AutoCAD, Revit, SketchUp, Lumion)", description: "Develop proficiency in design, drafting, and visualization tools.", type: "skill", timeframe: "During degree & beyond" },
      { title: "Develop a Strong Portfolio of Architectural Designs and Projects", description: "Showcase your design philosophy and technical skills.", type: "project", timeframe: "Ongoing" },
      { title: "Gain Practical Experience through Internships and Junior Architect Roles", description: "Learn about project execution, site management, and client interaction.", type: "project", timeframe: "2-3 years" }
    ]
  },
  // Human Resource Manager
  "human-resource-manager": {
    careerId: "human-resource-manager",
    items: [
      { title: "Bachelor's Degree (MBA in HR often preferred for managerial roles)", description: "Obtain relevant education in HR or business.", type: "study", timeframe: "3-5 years" },
      { title: "Gain Experience in HR Functions (Recruitment, Payroll, Employee Relations, Training)", description: "Start as an HR Executive or Specialist.", type: "project", timeframe: "3-5 years" },
      { title: "Understand Labor Laws and Compliance", description: "Ensure HR practices align with legal requirements.", type: "study", timeframe: "Ongoing" },
      { title: "Develop Interpersonal, Communication, and Conflict Resolution Skills", description: "Effectively manage employee relations and organizational development.", type: "skill", timeframe: "Ongoing" },
      { title: "Consider HR Certifications (e.g., SHRM-CP, PHR)", description: "Enhance your credentials and knowledge in HR.", type: "certification", timeframe: "3-6 months prep" }
    ]
  },
  // Business Analyst
  "business-analyst": {
    careerId: "business-analyst",
    items: [
      { title: "Bachelor's Degree in Business, IT, Economics, or a related field", description: "Obtain a relevant educational background.", type: "study", timeframe: "3-4 years" },
      { title: "Develop Strong Analytical and Problem-Solving Skills", description: "Learn to analyze data, processes, and identify business needs.", type: "skill", timeframe: "Ongoing" },
      { title: "Learn Requirements Elicitation and Documentation Techniques", description: "Master creating BRDs, FRSs, Use Cases, User Stories.", type: "study", timeframe: "2-3 months" },
      { title: "Familiarity with Data Analysis Tools (Excel, SQL) and Visualization Tools (Tableau, Power BI)", description: "Use data to drive insights and recommendations.", type: "skill", timeframe: "3-6 months" },
      { title: "Consider Certifications like CBAP (Certified Business Analysis Professional)", description: "Validate your business analysis expertise.", type: "certification", timeframe: "Varies" }
    ]
  },
  // Logistics Manager
  "logistics-manager": {
    careerId: "logistics-manager",
    items: [
      { title: "Degree in Supply Chain Management, Logistics, or Business Administration", description: "Obtain relevant education.", type: "study", timeframe: "3-4 years" },
      { title: "Gain Experience in Logistics Operations (Warehouse, Transportation, Inventory)", description: "Start in roles like Logistics Coordinator or Supervisor.", type: "project", timeframe: "3-5 years" },
      { title: "Understand Supply Chain Principles and Inventory Management", description: "Optimize the flow of goods and manage stock levels.", type: "study", timeframe: "Ongoing" },
      { title: "Develop Planning, Organizing, and Problem-Solving Skills", description: "Manage complex logistics networks efficiently.", type: "skill", timeframe: "Ongoing" },
      { title: "Learn Logistics Software (TMS, WMS) and Data Analysis", description: "Use technology to improve logistics performance.", type: "skill", timeframe: "2-4 months" }
    ]
  },
  // Customer Support Executive
  "customer-support-executive": {
    careerId: "customer-support-executive",
    items: [
      { title: "Develop Excellent Communication (Verbal and Written) and Active Listening Skills", description: "Understand and address customer queries effectively.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Master Product/Service Knowledge", description: "Thoroughly understand what you are supporting to provide accurate assistance.", type: "skill", timeframe: "Ongoing" },
      { title: "Learn CRM Software and Ticketing Systems", description: "Efficiently manage customer interactions and track issues.", type: "skill", timeframe: "1 month" },
      { title: "Develop Problem-Solving and Empathy Skills", description: "Resolve customer issues with patience and understanding.", type: "skill", timeframe: "Ongoing" },
      { title: "Practice Handling Difficult Customers and Escalations", description: "Learn de-escalation techniques and when to seek help.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  // Entrepreneur
  "entrepreneur": {
    careerId: "entrepreneur",
    items: [
      { title: "Develop a Business Idea and Conduct Market Research", description: "Identify a problem to solve or a market need.", type: "project", timeframe: "1-3 months" },
      { title: "Create a Business Plan", description: "Outline your business goals, strategies, financial projections, and operational plan.", type: "project", timeframe: "1-2 months" },
      { title: "Secure Funding (Bootstrapping, Angel Investors, Venture Capital)", description: "Acquire the necessary capital to start and grow your business.", type: "skill", timeframe: "Varies" },
      { title: "Build a Team and Develop Leadership Skills", description: "Recruit and manage talent to execute your vision.", type: "skill", timeframe: "Ongoing" },
      { title: "Master Sales, Marketing, and Financial Management", description: "Drive growth, manage resources, and ensure profitability.", type: "skill", timeframe: "Ongoing learning & execution" }
    ]
  }
};


export const getRoadmapByCareer = (careerId: string): RoadmapItem[] => {
  return roadmaps[careerId]?.items || [];
};
