
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

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

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sri Hari S A",
    role: "Founder & CEO",
    bio: "Sri Hari has over 5 years of experience in software development. He founded UpThrive with the mission to help individuals find their perfect career path using data-driven approaches.",
    avatar: "/srihari.jpg",
    social: {
      github: "https://github.com/srihariSteyp",
      email: "srihari@upthrive.com"
    }
  },
    {
    id: 2,
    name: "Muhammed Aslam",
    role: "Co-Founder & CTO",
    bio: "Aslam Has experience of 5 years full stack web development and he is trying to help people find the right career path.",
    avatar: "/aslam.jpg",
    social: {
      github:"https://github.com/aaslaam",
      email: "muhammedaslamks8@gmail.com"
    },
  },
  {
    id: 3,
    name: "Muhammad Sahl",
    role: "Director of Technology & CMO",
    bio: "Sahl specializes in machine learning algorithms that power our career matching system. His expertise in data analysis helps create personalized career recommendations tailored to each user's unique skills.",
    avatar: "sahl.jpg",
    social: {
      github: "https://github.com",
      email: "sahl@upthrive.com"
    }
  },
  {
    id: 4,
    name: "Fadi Naseel",
    role: "UX Designer",
    bio: "Fadi designs intuitive user experiences that make career exploration enjoyable. His user-centered approach ensures that complex career data is presented in accessible and actionable ways.",
    avatar: "/fadi.jpg",
    social: {
      github: "https://github.com",
      email: "fadi@upthrive.com"
    }
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-darkBlue">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-600/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-800/30 to-transparent"></div>
          </div>
          
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto px-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Meet Our Team</h1>
              <p className="text-xl text-gray-300 mb-8">
                We're a passionate group of experts dedicated to helping you find your ideal career path.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-light">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="team-card-gradient rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-blue-600/20 flex flex-col sm:flex-row">
                    <div className="sm:w-1/3">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-64 sm:h-full object-cover"
                      />
                    </div>
                    <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                        <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                        <p className="text-gray-300 mb-4">{member.bio}</p>
                      </div>
                      <div className="flex space-x-3">
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                            <Twitter size={18} />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                            <Linkedin size={18} />
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
                            <Github size={18} />
                          </a>
                        )}
                        {member.social.email && (
                          <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Email">
                            <Mail size={18} />
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
        
        {/* Our Mission Section */}
        <section className="py-20 bg-gradient-to-b from-light to-darkBlue">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                <div className="bg-extraLight/50 backdrop-blur-sm p-8 rounded-xl">
                  <p className="text-gray-300 mb-4">
                    At UpThrive, we believe everyone deserves a fulfilling career that aligns with their unique talents and passions.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Our mission is to provide data-driven career guidance that helps individuals identify their strengths and discover career paths where they can truly excel.
                  </p>
                  <p className="text-gray-300">
                    Through our skills assessment, career matching algorithms, and personalized roadmap, we're empowering people to make informed career decisions with confidence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
