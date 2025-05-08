
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCareerById } from "@/data/careers";
import { getRoadmapByCareer } from "@/data/roadmaps";
import { useUserData } from "@/contexts/UserDataContext";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RoadmapCard } from "@/components/roadmap/RoadmapCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Clock } from "@/components/ui/clock";
import { 
  BarChart, BookOpen, Award, BriefcaseBusiness, 
  Building2, Calendar, CheckCircle, GraduationCap, 
  MapPin, Sparkles, Users, ArrowLeft, LucideIcon,
  Lightbulb, Code, LineChart, MessageSquare, Target
} from "lucide-react";

type CareerStat = {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
};

type RelatedSkill = {
  name: string;
  relevance: number;
  icon: LucideIcon;
};

const CareerDetail = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const { user } = useAuth();
  const { userData, setSelectedCareer } = useUserData();
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  
  const career = careerId ? getCareerById(careerId) : null;
  const roadmapItems = career ? getRoadmapByCareer(career.id) : [];
  
  useEffect(() => {
    if (career && userData.selectedCareerId === career.id) {
      setIsSelected(true);
    }
  }, [career, userData.selectedCareerId]);
  
  if (!career) {
    return (
      <div className="min-h-screen flex flex-col bg-darkBlue">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Career not found</h2>
            <Button asChild>
              <Link to="/careers">Back to Careers</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Career statistics
  const careerStats: CareerStat[] = [
    {
      label: "Average Salary",
      value: career.id === "software-developer" ? "$105,000" :
             career.id === "data-analyst" ? "$85,000" :
             career.id === "ux-designer" ? "$92,000" :
             career.id === "project-manager" ? "$95,000" :
             career.id === "digital-marketer" ? "$78,000" :
             career.id === "cybersecurity-analyst" ? "$110,000" :
             career.id === "content-creator" ? "$65,000" : "$80,000",
      icon: BriefcaseBusiness,
      color: "text-green-400"
    },
    {
      label: "Growth Rate",
      value: career.id === "software-developer" ? "22%" :
             career.id === "data-analyst" ? "28%" :
             career.id === "cybersecurity-analyst" ? "32%" :
             career.id === "ux-designer" ? "24%" : "18%",
      icon: LineChart,
      color: "text-blue-400"
    },
    {
      label: "Education",
      value: career.id === "software-developer" ? "Bachelor's+" :
             career.id === "cybersecurity-analyst" ? "Bachelor's+" : "Varied",
      icon: GraduationCap,
      color: "text-yellow-400"
    },
    {
      label: "Work Environment",
      value: "Hybrid/Remote",
      icon: Building2,
      color: "text-purple-400"
    },
  ];
  
  // Related skills
  const relatedSkills: RelatedSkill[] = career.id === "software-developer" ? [
    { name: "Programming", relevance: 95, icon: Code },
    { name: "Problem Solving", relevance: 90, icon: Lightbulb },
    { name: "Algorithms", relevance: 85, icon: Target },
    { name: "User Experience", relevance: 70, icon: Users },
    { name: "Communication", relevance: 65, icon: MessageSquare },
  ] : career.id === "data-analyst" ? [
    { name: "SQL", relevance: 90, icon: Code },
    { name: "Statistics", relevance: 85, icon: LineChart },
    { name: "Data Visualization", relevance: 80, icon: BarChart },
    { name: "Problem Solving", relevance: 75, icon: Lightbulb },
    { name: "Business Acumen", relevance: 70, icon: BriefcaseBusiness },
  ] : [
    { name: "Critical Thinking", relevance: 85, icon: Lightbulb },
    { name: "Technical Skills", relevance: 80, icon: Code },
    { name: "Communication", relevance: 90, icon: MessageSquare },
    { name: "Industry Knowledge", relevance: 75, icon: BookOpen },
    { name: "Project Management", relevance: 70, icon: Target },
  ];
  
  const handleSelectCareer = () => {
    setSelectedCareer(career.id);
    setIsSelected(true);
  };
  
  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-darkBlue">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-darkBlue py-12">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Button 
                variant="outline" 
                size="sm" 
                className="mb-4 text-gray-300 border-gray-600 hover:bg-extraLight hover:text-white"
                onClick={() => navigate("/careers")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to careers
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between gap-8 items-start mt-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-7/12"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">{career.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {career.id === "software-developer" && (
                    <>
                      <Badge className="bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border-none">Tech</Badge>
                      <Badge className="bg-green-600/30 text-green-300 hover:bg-green-600/40 border-none">High Demand</Badge>
                      <Badge className="bg-purple-600/30 text-purple-300 hover:bg-purple-600/40 border-none">Remote Friendly</Badge>
                    </>
                  )}
                  {career.id === "data-analyst" && (
                    <>
                      <Badge className="bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border-none">Analytics</Badge>
                      <Badge className="bg-green-600/30 text-green-300 hover:bg-green-600/40 border-none">Growing Field</Badge>
                      <Badge className="bg-yellow-600/30 text-yellow-300 hover:bg-yellow-600/40 border-none">Business</Badge>
                    </>
                  )}
                  {career.id === "ux-designer" && (
                    <>
                      <Badge className="bg-pink-600/30 text-pink-300 hover:bg-pink-600/40 border-none">Creative</Badge>
                      <Badge className="bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border-none">Tech</Badge>
                      <Badge className="bg-purple-600/30 text-purple-300 hover:bg-purple-600/40 border-none">Design</Badge>
                    </>
                  )}
                  {!["software-developer", "data-analyst", "ux-designer"].includes(career.id) && (
                    <>
                      <Badge className="bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border-none">Professional</Badge>
                      <Badge className="bg-green-600/30 text-green-300 hover:bg-green-600/40 border-none">In-Demand</Badge>
                    </>
                  )}
                </div>
                
                <div className="text-gray-300 text-lg mb-8">{career.description}</div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {careerStats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-extraLight/50 backdrop-blur-sm p-4 rounded-xl"
                    >
                      <div className={`${stat.color} mb-2 flex justify-center`}>
                        <stat.icon className="h-8 w-8" />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-bold text-2xl">{stat.value}</p>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {user && (
                    <div className="flex flex-col sm:flex-row gap-4">
                      {!isSelected ? (
                        <Button 
                          onClick={handleSelectCareer} 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Select This Career
                        </Button>
                      ) : (
                        <>
                          <Button 
                            variant="outline" 
                            className="text-green-400 border-green-600/30 bg-green-600/10 hover:bg-green-600/20"
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Selected Career
                          </Button>
                          <Button 
                            onClick={handleGoToDashboard}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            View Your Roadmap
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-5/12 bg-extraLight/30 backdrop-blur-sm rounded-xl p-6 border border-extraLight/50"
              >
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" /> Required Skills
                </h3>
                
                <div className="space-y-4">
                  {Object.entries(career.requiredSkills).map(([skill, level]) => (
                    <div key={skill} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="capitalize text-gray-300">{skill}</span>
                        <span className="text-white font-medium">{level}/10</span>
                      </div>
                      <Progress 
                        value={level * 10} 
                        className="h-2.5 bg-extraLight"
                        indicatorClassName={
                          skill === "analytical" ? "bg-blue-500" :
                          skill === "technical" ? "bg-green-500" :
                          skill === "creative" ? "bg-purple-500" :
                          skill === "communication" ? "bg-yellow-500" :
                          "bg-red-500"
                        }
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-400" /> Related Skills
                  </h3>
                  
                  <div className="space-y-3">
                    {relatedSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 bg-extraLight/20 p-3 rounded-lg pulse-highlight">
                        <div className="bg-extraLight/30 rounded-full p-2">
                          <skill.icon className="h-4 w-4 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="text-white font-medium">{skill.name}</p>
                            <span className="text-gray-400 text-sm">{skill.relevance}%</span>
                          </div>
                          <Progress 
                            value={skill.relevance} 
                            className="h-1.5 mt-1 bg-extraLight"
                            indicatorClassName="bg-blue-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Career Details Section */}
        <section className="py-12 bg-darkBlue">
          <div className="container px-4">
            <Tabs defaultValue="roadmap" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3 h-auto p-1 mb-8 bg-extraLight/20">
                <TabsTrigger value="roadmap" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2">
                  <BookOpen className="h-4 w-4 mr-2" /> Roadmap
                </TabsTrigger>
                <TabsTrigger value="day" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2">
                  <Calendar className="h-4 w-4 mr-2" /> Day in the Life
                </TabsTrigger>
                <TabsTrigger value="outlook" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2">
                  <BarChart className="h-4 w-4 mr-2" /> Job Outlook
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="roadmap" className="mt-0">
                <div className="bg-light/30 backdrop-blur-sm rounded-lg border border-extraLight/50 p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white">Career Roadmap</h3>
                  
                  <div className="space-y-4">
                    {roadmapItems.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <RoadmapCard item={item} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="day" className="mt-0">
                <div className="bg-light/30 backdrop-blur-sm rounded-lg border border-extraLight/50 p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white">A Day in the Life</h3>
                  
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-extraLight/20 rounded-xl p-5">
                        <h4 className="text-lg font-semibold text-white mb-2">Morning</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li>• Check emails and messages</li>
                          <li>• Team standup meeting</li>
                          <li>• Focus work on priority tasks</li>
                          {career.id === "software-developer" && <li>• Coding and development</li>}
                          {career.id === "data-analyst" && <li>• Data processing and analysis</li>}
                          {career.id === "ux-designer" && <li>• Design work and sketching</li>}
                          {career.id === "project-manager" && <li>• Review project timelines</li>}
                        </ul>
                      </div>
                      
                      <div className="bg-extraLight/20 rounded-xl p-5">
                        <h4 className="text-lg font-semibold text-white mb-2">Afternoon</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li>• Collaborate with team members</li>
                          <li>• Cross-functional meetings</li>
                          {career.id === "software-developer" && <li>• Code reviews and debugging</li>}
                          {career.id === "data-analyst" && <li>• Create visualizations and reports</li>}
                          {career.id === "ux-designer" && <li>• User testing sessions</li>}
                          {career.id === "project-manager" && <li>• Risk assessment and mitigation</li>}
                          <li>• Document progress</li>
                        </ul>
                      </div>
                      
                      <div className="bg-extraLight/20 rounded-xl p-5">
                        <h4 className="text-lg font-semibold text-white mb-2">Key Interactions</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li>• Direct team collaboration</li>
                          {career.id === "software-developer" && <li>• Product managers & designers</li>}
                          {career.id === "data-analyst" && <li>• Business stakeholders</li>}
                          {career.id === "ux-designer" && <li>• Developers & product owners</li>}
                          {career.id === "project-manager" && <li>• All team members & executives</li>}
                          <li>• Mentoring opportunities</li>
                          <li>• Industry networking</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-extraLight/20 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Work Environment</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-blue-400" />
                          <span className="text-gray-300">
                            {career.id === "software-developer" || career.id === "data-analyst" || career.id === "ux-designer" 
                              ? "Remote/Hybrid" : "Office/Hybrid"}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-purple-400" />
                          <span className="text-gray-300">
                            {career.id === "project-manager" ? "High collaboration" : "Mixed teamwork/solo"}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-green-400" />
                          <span className="text-gray-300">
                            {career.id === "project-manager" ? "Variable hours" : "Flexible schedule"}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-yellow-400" />
                          <span className="text-gray-300">
                            {career.id === "software-developer" || career.id === "cybersecurity-analyst" 
                              ? "High autonomy" : "Varied autonomy"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="outlook" className="mt-0">
                <div className="bg-light/30 backdrop-blur-sm rounded-lg border border-extraLight/50 p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white">Job Outlook</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Industry Growth</h4>
                      <div className="bg-extraLight/20 rounded-xl p-5">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-300">Growth Rate</span>
                          <Badge className="bg-green-600/40 text-green-300 hover:bg-green-600/50">
                            {career.id === "software-developer" ? "+22%" : 
                             career.id === "data-analyst" ? "+28%" : 
                             career.id === "cybersecurity-analyst" ? "+32%" : "+18%"} (Next 10 years)
                          </Badge>
                        </div>
                        <Progress 
                          value={career.id === "software-developer" ? 72 : 
                                career.id === "data-analyst" ? 78 : 
                                career.id === "cybersecurity-analyst" ? 82 : 68} 
                          className="h-3 bg-extraLight"
                          indicatorClassName="bg-green-500"
                        />
                        
                        <div className="mt-6 space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Job openings per year</span>
                            <span className="text-white font-medium">
                              {career.id === "software-developer" ? "189,200" : 
                              career.id === "data-analyst" ? "96,500" : 
                              career.id === "cybersecurity-analyst" ? "51,000" : "42,400"}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Unemployment rate</span>
                            <span className="text-white font-medium">
                              {career.id === "software-developer" || career.id === "cybersecurity-analyst" ? "1.9%" : 
                              career.id === "data-analyst" ? "2.1%" : "2.7%"}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-white mt-6">Top Industries</h4>
                      <div className="bg-extraLight/20 rounded-xl p-5">
                        <ul className="space-y-3 text-gray-300">
                          {career.id === "software-developer" && (
                            <>
                              <li>• Technology and Software</li>
                              <li>• Finance and Banking</li>
                              <li>• Healthcare Technology</li>
                              <li>• E-commerce and Retail</li>
                              <li>• Entertainment and Media</li>
                            </>
                          )}
                          {career.id === "data-analyst" && (
                            <>
                              <li>• Finance and Banking</li>
                              <li>• Technology and Software</li>
                              <li>• Healthcare and Pharmaceuticals</li>
                              <li>• Marketing and Advertising</li>
                              <li>• Government and Public Policy</li>
                            </>
                          )}
                          {career.id === "ux-designer" && (
                            <>
                              <li>• Technology and Software</li>
                              <li>• Marketing and Advertising</li>
                              <li>• Media and Entertainment</li>
                              <li>• E-commerce and Retail</li>
                              <li>• Healthcare Technology</li>
                            </>
                          )}
                          {!["software-developer", "data-analyst", "ux-designer"].includes(career.id) && (
                            <>
                              <li>• Technology and Software</li>
                              <li>• Healthcare</li>
                              <li>• Financial Services</li>
                              <li>• Manufacturing</li>
                              <li>• Professional Services</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Salary Range</h4>
                      <div className="bg-extraLight/20 rounded-xl p-5">
                        <div className="flex flex-col space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-400">Entry Level</span>
                              <span className="text-white font-medium">
                                {career.id === "software-developer" ? "$70,000" : 
                                 career.id === "data-analyst" ? "$65,000" : 
                                 career.id === "cybersecurity-analyst" ? "$75,000" : 
                                 career.id === "ux-designer" ? "$68,000" : "$60,000"}
                              </span>
                            </div>
                            <Progress 
                              value={30} 
                              className="h-2.5 bg-extraLight"
                              indicatorClassName="bg-blue-500"
                            />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-400">Mid-Level</span>
                              <span className="text-white font-medium">
                                {career.id === "software-developer" ? "$105,000" : 
                                 career.id === "data-analyst" ? "$85,000" : 
                                 career.id === "cybersecurity-analyst" ? "$110,000" : 
                                 career.id === "ux-designer" ? "$92,000" : "$80,000"}
                              </span>
                            </div>
                            <Progress 
                              value={60} 
                              className="h-2.5 bg-extraLight"
                              indicatorClassName="bg-blue-500"
                            />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-400">Senior Level</span>
                              <span className="text-white font-medium">
                                {career.id === "software-developer" ? "$150,000+" : 
                                 career.id === "data-analyst" ? "$120,000+" : 
                                 career.id === "cybersecurity-analyst" ? "$160,000+" : 
                                 career.id === "ux-designer" ? "$130,000+" : "$115,000+"}
                              </span>
                            </div>
                            <Progress 
                              value={90} 
                              className="h-2.5 bg-extraLight"
                              indicatorClassName="bg-blue-500"
                            />
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-4">*Salary ranges vary by location, company size, and experience</p>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-white mt-6">Future Trends</h4>
                      <div className="bg-extraLight/20 rounded-xl p-5">
                        <ul className="space-y-3 text-gray-300">
                          {career.id === "software-developer" && (
                            <>
                              <li>• Increased demand for AI/ML expertise</li>
                              <li>• Growth in remote development teams</li>
                              <li>• Specialization in AR/VR development</li>
                              <li>• Focus on cybersecurity integration</li>
                            </>
                          )}
                          {career.id === "data-analyst" && (
                            <>
                              <li>• Greater integration with ML/AI systems</li>
                              <li>• Increased real-time analytics demands</li>
                              <li>• Focus on predictive analytics</li>
                              <li>• Data ethics and governance expertise</li>
                            </>
                          )}
                          {career.id === "ux-designer" && (
                            <>
                              <li>• Growth in voice UI and multimodal interfaces</li>
                              <li>• AR/VR experience design</li>
                              <li>• Focus on accessibility and inclusive design</li>
                              <li>• Integration with AI-driven personalization</li>
                            </>
                          )}
                          {!["software-developer", "data-analyst", "ux-designer"].includes(career.id) && (
                            <>
                              <li>• Increased integration of digital technologies</li>
                              <li>• Remote and hybrid work models</li>
                              <li>• Growth in specialized expertise</li>
                              <li>• Emphasis on continuous learning</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareerDetail;
