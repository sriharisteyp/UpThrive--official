import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from "../components/layout/Navbar";
import { PaymentDialog } from "@/components/ui/payment-dialog";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  icon?: React.ElementType;
}

const PricingPlan = () => {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const getCurrentPlan = () => {
    const user = localStorage.getItem("careerGuidanceUser");
    if (user) {
      const userData = JSON.parse(user);
      return userData.subscription_plan || "Explorer";  // Free plan is now called "Explorer"
    }
    return null;
  };

  const handlePayment = (tier: PricingTier) => {
    const currentPlan = getCurrentPlan();
    
    if (!currentPlan) {
      navigate(`/auth?signup=true&plan=${tier.name}`);
      return;
    }

    if (currentPlan === tier.name) {
      toast({
        title: "Current Plan",
        description: "This is your current subscription plan",
        variant: "default"
      });
      return;
    }

    setSelectedTier(tier);
  };

  const getButtonText = (tier: PricingTier) => {
    const currentPlan = getCurrentPlan();
    if (currentPlan === tier.name) {
      return "Current Plan";
    }
    return tier.buttonText;
  };

  const pricingTiers: PricingTier[] = [
    {
      name: "Explorer",
      description: "Start your career journey",
      price: "Free",
      features: [
        { name: "Roadmap", included: true },
        { name: "Limited Chatbot (5/day)", included: true },
        { name: "Email Support", included: true },
        { name: "Job Lookout", included: true },
        { name: "Day In a Life", included: false },
        { name: "Interview Training", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "Priority Support", included: false }
      ],
      buttonText: "Start Free Journey",
      icon: Clock,
    },
    {
      name: "Achiever",
      description: "For serious career seekers",
      price: "₹799",
      features: [
        { name: "Roadmap", included: true },
        { name: "Extended Chatbot (15/day)", included: true },
        { name: "Email Support", included: true },
        { name: "Job Lookout", included: true },
        { name: "Day In a Life", included: true },
        { name: "Interview Training", included: true },
        { name: "Advanced Analytics", included: false },
        { name: "Priority Support", included: false }
      ],
      buttonText: "Boost Your Career",
      popular: true,
      icon: Zap,
    },
    {
      name: "Professional",
      description: "Complete career transformation",
      price: "₹1999",
      features: [
        { name: "Full Jobs Access", included: true },
        { name: "Roadmap", included: true },
        { name: "Unlimited Chatbot", included: true },
        { name: "Premium Email Support", included: true },
        { name: "Job Lookout", included: true },
        { name: "Day In a Life", included: true },
        { name: "Interview Questions", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Priority Support", included: true }
      ],
      buttonText: "Transform Career",
      icon: Shield,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen w-full bg-gradient-to-b from-darkBlue to-black">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Unlock your career potential with our flexible plans. Start for free, upgrade when you're ready.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <Card 
                  className={`group flex flex-col h-full bg-light/20 backdrop-blur-sm border-2 ${
                    tier.popular 
                      ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'border-gray-700/50'
                  } rounded-xl overflow-hidden hover:border-opacity-100 transition-all duration-300`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 inset-x-0 flex justify-center">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1">
                        <Sparkles className="w-4 h-4 mr-2 inline" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="relative">
                    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300`}>
                      {tier.icon && <tier.icon size={40} />}
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                    <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                        {tier.price}
                      </span>
                      {tier.price !== "Free" && (
                        <span className="text-gray-400 ml-2">/month</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                        >
                          <Check 
                            size={18} 
                            className={`${
                              feature.included 
                                ? 'text-green-400' 
                                : 'text-gray-500'
                            } mr-2 flex-shrink-0`}
                          />
                          <span className={`${
                            feature.included 
                              ? 'text-gray-200' 
                              : 'text-gray-500 line-through'
                          }`}>
                            {feature.name}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                          : getCurrentPlan() === tier.name
                            ? 'bg-gray-700 text-gray-300 cursor-default'
                            : 'bg-gray-800 hover:bg-gray-700 text-white'
                      }`}
                      onClick={() => handlePayment(tier)}
                    >
                      {getButtonText(tier)}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-400 mb-6">All plans include a 3-day free trial. No credit card required.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center mt-12">
              <div className="bg-light/10 rounded-lg p-6">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Instant Access</h3>
                <p className="text-gray-400">Get started immediately after signing up</p>
              </div>
              <div className="bg-light/10 rounded-lg p-6">
                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Secure Payment</h3>
                <p className="text-gray-400">Your transactions are safe with us</p>
              </div>
              <div className="bg-light/10 rounded-lg p-6">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Cancel Anytime</h3>
                <p className="text-gray-400">No long-term contracts or commitments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {selectedTier && (
        <PaymentDialog 
          isOpen={!!selectedTier} 
          onClose={() => setSelectedTier(null)} 
          tier={selectedTier}
        />
      )}
    </>
  );
};

export default PricingPlan;