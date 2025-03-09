
import React, { useState } from 'react';
import { useInView } from '@/utils/animations';
import Button from './Button';
import { Check, Percent, Tag, Zap } from 'lucide-react';

interface PricingCardProps {
  name: string;
  fixedFee: string;
  percentFee: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  index: number;
}

const PricingCard = ({ name, fixedFee, percentFee, description, features, isPopular, index }: PricingCardProps) => {
  const { ref, isInView } = useInView({}, true);
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative flex flex-col h-full bg-white rounded-2xl border ${
        isPopular ? 'border-orderbot shadow-highlight' : 'border-border/50 shadow-subtle-lg'
      } overflow-hidden transition-all duration-500 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-orderbot text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-6 pb-0">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2">
            <Tag size={16} className="text-orderbot" />
            <span className="text-lg font-semibold">{fixedFee}</span>
            <span className="text-foreground/70 text-sm">fixed fee</span>
          </div>
          <div className="flex items-center gap-2">
            <Percent size={16} className="text-orderbot" />
            <span className="text-lg font-semibold">{percentFee}</span>
            <span className="text-foreground/70 text-sm">per order</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6 flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-orderbot mt-0.5"><Check size={16} /></span>
              <span className="text-foreground/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <Button 
          variant={isPopular ? 'primary' : 'outline'}
          fullWidth
        >
          {isPopular ? 'Get Started' : 'Learn More'}
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const { ref, isInView } = useInView({}, true);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    {
      name: "Starter",
      fixedFee: "$19/mo",
      percentFee: "1.5%",
      description: "Perfect for small businesses just getting started.",
      features: [
        "AI-powered WhatsApp chatbot",
        "Up to 500 orders per month",
        "Payment integration",
        "Basic order tracking",
        "Email support"
      ],
      isPopular: false
    },
    {
      name: "Growth",
      fixedFee: "$49/mo",
      percentFee: "1.2%",
      description: "Ideal for growing businesses with increasing orders.",
      features: [
        "Everything in Starter",
        "Up to 2,000 orders per month",
        "Advanced analytics",
        "Custom chatbot responses",
        "Priority email & chat support",
        "Multi-business support (up to 3)"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      fixedFee: "Custom",
      percentFee: "0.9%",
      description: "For established businesses with high-volume needs.",
      features: [
        "Everything in Growth",
        "Unlimited orders",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
        "Phone support",
        "Unlimited businesses"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p 
            ref={ref as React.RefObject<HTMLParagraphElement>}
            className={`text-sm font-medium text-orderbot mb-2 transition-all duration-500 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Pricing
          </p>
          <h2 
            className={`text-3xl md:text-4xl font-display font-bold mb-4 transition-all duration-500 delay-100 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Simple, transparent pricing
          </h2>
          <p 
            className={`text-lg text-foreground/70 max-w-2xl mb-6 transition-all duration-500 delay-200 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Choose the plan that best fits your business needs. All plans include a fixed monthly fee plus a small percentage of each order.
          </p>
          <div 
            className={`inline-flex items-center bg-secondary border border-border p-1 rounded-lg mb-2 transition-all duration-500 delay-300 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md ${billingCycle === 'monthly' ? 'bg-white shadow-sm' : 'text-foreground/70'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md ${billingCycle === 'yearly' ? 'bg-white shadow-sm' : 'text-foreground/70'}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly (20% off)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              name={plan.name}
              fixedFee={billingCycle === 'yearly' ? `$${parseInt(plan.fixedFee.replace(/\D/g, '')) * 0.8 * 12}/yr` : plan.fixedFee}
              percentFee={plan.percentFee}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
