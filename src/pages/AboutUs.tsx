
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Users, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Sparkles,
  HeartHandshake,
  Eye // Added Eye icon for Vision
} from "lucide-react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
};

type ValueItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const values: ValueItem[] = [
  { icon: Users, title: "User-Centric", description: "Your success is our priority. We meticulously design intuitive and personalized experiences to guide your career journey effectively, ensuring every interaction is meaningful and helpful. We actively listen to your feedback and continuously refine our platform to better serve your evolving needs and aspirations." },
  { icon: Lightbulb, title: "Innovation-Driven", description: "We constantly explore and leverage cutting-edge technology and data-driven insights to provide intelligent, forward-thinking career recommendations that adapt to the evolving job market. Our commitment to innovation means you'll always have access to the latest tools and strategies for career advancement." },
  { icon: Target, title: "Empowerment", description: "We believe in your potential. Our platform equips you with robust tools, comprehensive knowledge, and actionable insights, empowering you to make confident and informed career decisions. We strive to demystify the career landscape, giving you the clarity and agency to chart your own course." },
  { icon: HeartHandshake, title: "Supportive Guidance", description: "You're not alone on this journey. We are committed to supporting you at every step, fostering a community of growth and ensuring you have the encouragement to achieve success in your chosen path. Our guidance extends beyond just data; we aim to inspire and motivate you towards achieving your professional dreams." },
];

const avatarBasePath = "/avatars"; // Assuming avatars are in public/avatars

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sri Hari S A",
    role: "Founder & CEO",
    bio: "Sri Hari has over 5 years of experience in web development. He founded UpThrive with the mission to help individuals find their perfect career path using data-driven approaches.",
    avatar: `/srihari.jpg`,
    social: {
      github: "https://github.com/srihariSteyp",
      email: "srihari@upthrive.com"
    }
  },
    {
    id: 2,
    name: "Muhammed Aslam",
    role: "Co-Founder & CTO",
    bio: "Aslam brings 5 years of full-stack expertise, architecting the robust platform that powers UpThrive's personalized career guidance.",
    avatar: `/aslam.jpg`,
    social: {
      github:"https://github.com/aaslaam",
      email: "muhammedaslamks8@gmail.com"
    },
  },
  {
    id: 3,
    name: "Muhammad Sahl",
    role: "Director of Technology & CMO",
    bio: "Sahl leads our tech strategy and marketing, ensuring our career matching algorithms are precise and our message reaches those who need guidance.",
    avatar: `/sahl.jpg`,
    social: {
      github: "https://github.com/pets-19",
      email: "sahl@upthrive.com"
    }
  },
  {
    id: 4,
    name: "Fadi Naseel",
    role: "UX Designer",
    bio: "Fadi crafts seamless and engaging user experiences, transforming complex career data into an intuitive and enjoyable journey for our users.",
    avatar: `/fadi.jpg`,
    social: {
      github: "https://github.com",
      email: "fadi@upthrive.com"
    }
  }
];

const AboutUs = () => {
  const { scrollYProgress } = useScroll();

  // Parallax and scale effect for the hero background image
  // Animate as the user scrolls the first 25% of the page
  const heroBgY = useTransform(scrollYProgress, [0, 0.25], [0, -150]); // Moves image up
  const heroBgScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]); // Scales image down

  return (
    <div 
      className="min-h-screen flex flex-col bg-darkBlue" 
    >
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
        >
          <motion.img
            src="/team2.png"
            alt="UpThrive Team Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{
              y: heroBgY,
              scale: heroBgScale,
            }}
          />
          {/* Animated shapes - behind overlay */}
          <div className="absolute inset-0 z-1 opacity-50"> 
            {/* Animated background elements */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
          {/* Overlay for text readability, on top of shapes */}
          <div className="absolute inset-0 z-2 bg-gradient-to-b from-darkBlue/80 via-darkBlue/60 to-darkBlue/80"></div>
          
          <div className="container relative z-3 px-4"> {/* Content on top of overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto px-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Meet The UpThrive Team
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                We're a passionate group of experts dedicated to helping you find your ideal career path.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section - Moved out of Hero */}
        <section className="py-16 md:py-24 bg-darkBlue"> {/* Added bg-darkBlue for consistency or choose another */}
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center justify-center gap-3">
                <Sparkles className="text-yellow-400 h-8 w-8" />
                Our Core Values
              </h2>
              <p className="text-lg text-gray-300">The principles that guide our work and define who we are.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-light/50 border-2 border-extraLight/50 p-6 rounded-xl text-center hover:shadow-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:scale-[1.02]"
                >
                  <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24 bg-light/80">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto ">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }} // Added whileInView for re-animation on scroll if desired
                  viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-extraLight/30 border border-extraLight/50 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.03]"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-64 sm:h-full object-cover object-center"
                      />
                    </div>
                    <div className="sm:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-white">{member.name}</h3>
                        <p className="text-blue-400 font-semibold mb-4 text-md">{member.role}</p>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed">{member.bio}</p>
                      </div>
                      <div className="flex space-x-4 mt-auto">
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                            <Twitter size={22} />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                            <Linkedin size={22} />
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
                            <Github size={22} />
                          </a>
                        )}
                        {member.social.email && (
                          <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Email">
                            <Mail size={22} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Combined Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-light/80 to-darkBlue/80">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16">
              {/* Our Mission Section (Left) */}
              <div className="md:w-1/2 mb-12 md:mb-0">
                <div className="max-w-xl mx-auto text-center md:text-left h-full"> {/* Added h-full */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }} className="flex flex-col h-full" // Added flex flex-col h-full
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center justify-center md:justify-start gap-3">
                      <Target className="text-blue-400 h-8 w-8" />
                      Our Mission
                    </h2>
                    <motion.div 
                      className="bg-extraLight/30 border-2 border-gray-500 p-6 md:p-8 rounded-xl shadow-lg" // Changed border color
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }} // Adjusted delay as image is removed
                      viewport={{ once: true, amount: 0.3 }} className="flex-1"> {/* Added flex-1 */}
                      <p className="text-gray-200 text-md md:text-lg leading-relaxed mb-4"> {/* Adjusted text size and margin */}
                        At UpThrive, we believe everyone deserves a fulfilling career that aligns with their unique talents and passions.
                      </p>
                      <p className="text-gray-200 text-md md:text-lg leading-relaxed mb-4">
                        Our mission is to provide data-driven career guidance that helps individuals identify their strengths and discover career paths where they can truly excel.
                      </p>
                      <p className="text-gray-200 text-md md:text-lg leading-relaxed">
                        Through our skills assessment, career matching algorithms, and personalized roadmap, we're empowering people to make informed career decisions with confidence.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Our Vision Section (Right) */}
              <div className="md:w-1/2">
                <div className="max-w-xl mx-auto text-center md:text-left h-full"> {/* Added h-full */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }} // Slight delay for staggered effect
                    viewport={{ once: true, amount: 0.3 }} className="flex flex-col h-full" // Added flex flex-col h-full
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center justify-center md:justify-start gap-3">
                      <Eye className="text-purple-400 h-8 w-8" />
                      Our Vision
                    </h2>
                    {/* You can add an image here for vision if you have one, similar to the mission section */}
                    <motion.div 
                      className="bg-extraLight/30 border-2 border-gray-500 p-6 md:p-8 rounded-xl shadow-lg" // Changed border color
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }} // Slight delay after title
                      viewport={{ once: true, amount: 0.3 }} className="flex-1"> {/* Added flex-1 */}
                      <p className="text-gray-200 text-md md:text-lg leading-relaxed mb-4">
                        To be the leading global platform that empowers individuals to navigate their career paths with clarity, confidence, and continuous growth.
                      </p>
                      <p className="text-gray-200 text-md md:text-lg leading-relaxed">
                        We envision a world where everyone has access to personalized guidance and resources, enabling them to achieve their full professional potential and find true fulfillment in their work.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Combined Mission & Vision Section */}

        {/* The original "Our Vision Section" below is now part of the combined section above and can be removed if it was standalone */}
        {/* 
        <section className="py-16 md:py-24 bg-darkBlue">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center justify-center gap-3">
                  <Eye className="text-purple-400 h-8 w-8" /> 
                  Our Vision
                </h2>
                <motion.div 
                  className="bg-extraLight/30 border border-extraLight/50 p-8 md:p-10 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}>
                  <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    To be the leading global platform that empowers individuals to navigate their career paths with clarity, confidence, and continuous growth.
                  </p>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    We envision a world where everyone has access to personalized guidance and resources, enabling them to achieve their full professional potential and find true fulfillment in their work.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section> 
        */}
      </main>
    </div>
  );
};

export default AboutUs;
