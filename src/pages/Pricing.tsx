import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from "../components/layout/Navbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { QRCodeSVG } from 'qrcode.react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
}

const PaymentDialog = ({ isOpen, onClose, tier }: { isOpen: boolean; onClose: () => void; tier: PricingTier }) => {
  const [paymentApp, setPaymentApp] = useState<string>("gpay");
  const upiId = "anusajesh5@oksbi";
  const amount = tier.price === "Free" ? "0" : tier.price.replace('₹', '');
  
  const getUPIUrl = (app: string) => {
    const base = `upi://pay?pa=${upiId}&pn=DreamPilot&am=${amount}&cu=INR`;
    switch(app) {
      case 'gpay':
        return `tez://upi/pay?pa=${upiId}&pn=DreamPilot&am=${amount}&cu=INR`;
      case 'phonepe':
        return `phonepe://pay?pa=${upiId}&pn=DreamPilot&am=${amount}&cu=INR`;
      case 'paytm':
        return `paytmmp://pay?pa=${upiId}&pn=DreamPilot&am=${amount}&cu=INR`;
      default:
        return base;
    }
  };
  
  const handleRedirect = () => {
    window.location.href = getUPIUrl(paymentApp);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-light text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Pay for {tier.name} Plan</DialogTitle>
          <DialogDescription className="text-gray-300">
            Select your preferred UPI app and scan the QR code or click the button below to pay
          </DialogDescription>
        </DialogHeader>
        <Select onValueChange={setPaymentApp} defaultValue="gpay">
          <SelectTrigger className="w-full bg-extralight text-white border-gray-600">
            <SelectValue placeholder="Select UPI App" />
          </SelectTrigger>
          <SelectContent className="bg-light text-white border-gray-600">
            <SelectItem value="gpay" className="text-white hover:bg-extralight focus:bg-extralight">Google Pay</SelectItem>
            <SelectItem value="phonepe" className="text-white hover:bg-extralight focus:bg-extralight">PhonePe</SelectItem>
            <SelectItem value="paytm" className="text-white hover:bg-extralight focus:bg-extralight">Paytm</SelectItem>
            <SelectItem value="other" className="text-white hover:bg-extralight focus:bg-extralight">Other UPI Apps</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex justify-center p-4">
          <div className="bg-white p-4 rounded-lg">
            <QRCodeSVG value={getUPIUrl(paymentApp)} size={200} />
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Button 
            onClick={handleRedirect}
            className="bg-blue-500 hover:bg-blue-600 text-white w-full max-w-xs"
          >
            Open in {paymentApp === 'gpay' ? 'Google Pay' : 
                     paymentApp === 'phonepe' ? 'PhonePe' : 
                     paymentApp === 'paytm' ? 'Paytm' : 'UPI App'}
          </Button>
          
          <div className="text-center text-gray-300">
            <p>Amount: ₹{amount}</p>
            <p className="text-sm mt-2">UPI ID: {upiId}</p>
            <p className="text-sm mt-1">After payment, your plan will be automatically upgraded</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PricingPlan = () => {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const handlePayment = (tier: PricingTier) => {
    setSelectedTier(tier);
  };

  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      description: "Everything you need to get started",
      price: "Free",
      features: [
        { name: "Limited Jobs", included: true },
        { name: "Roadmap", included: true },
        { name: "Limited Chatbot (5/per day)", included: true },
        { name: "Email Support", included: true },
        { name: "Job Lookout", included: false },
        { name: "Day In a Life", included: false },
        { name: "Interview Training", included: false },
        { name: "Advanced Analytics", included: false },
      ],
      buttonText: "Signup to get free",
    },
    {
      name: "Pro",
      description: "Perfect for growing teams",
      price: "₹799",
      features: [
        { name: "50% Jobs", included: true },
        { name: "Roadmap", included: true },
        { name: "Chatbot (15/per day)", included: true },
        { name: "Email Support", included: true },
        { name: "Job Lookout", included: true },
        { name: "Day In a Life", included: true },
        { name: "Interview Training", included: false },
        { name: "Advanced Analytics", included: false },
      ],
      buttonText: "Upgrade Now",
      popular: true,
    },
    {
      name: "Mega",
      description: "For large organizations & teams",
      price: "₹1999",
      features: [
        { name: "Full Jobs", included: true },
        { name: "Personalized Roadmap", included: true },
        { name: "Chatbot (unlimited/per day)", included: true },
        { name: "Email Support", included: true },
        { name: "Job Lookout", included: true },
        { name: "Day In a Life", included: true },
        { name: "Interview Training", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Priority Support", included: true },
      ],
      buttonText: "Upgrade Now",
    },
  ];

  return (
    <>
      <Navbar/>
      <div className="bg-darkblue min-h-screen w-full">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Choose the perfect plan for your needs. No hidden fees or long-term contracts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`flex flex-col h-full bg-light border-extralight text-white relative ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                  <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check 
                          size={18} 
                          className={feature.included ? "text-green-400 mr-2" : "text-gray-500 mr-2"}
                        />
                        <span className={feature.included ? "text-gray-200" : "text-gray-400"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${tier.popular 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-extralight hover:bg-gray-600'}`}
                    onClick={() => handlePayment(tier)}
                  >
                    {tier.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6">All plans include a 3-day free trial. No credit card required.</p>
          </div>
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