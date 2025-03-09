"use client"
import React from 'react';
import { useInView } from '@/utils/animations';
import { Zap } from 'lucide-react';

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: string;
  index: number;
}

const IntegrationCard = ({ name, description, icon, index }: IntegrationCardProps) => {
  const { ref, isInView } = useInView({}, true);
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white rounded-2xl p-6 border border-border/50 shadow-subtle transition-all duration-500 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 mb-4 flex items-center justify-center">
        <img src={icon} alt={name} className="w-10 h-10 object-contain" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  );
};

const Integrations = () => {
  const { ref, isInView } = useInView({}, true);
  
  const integrations = [
    {
      name: "WhatsApp Business",
      description: "Connect with customers where they already are with our seamless WhatsApp integration.",
      icon: "/placeholder.svg"
    },
    {
      name: "Paystack",
      description: "Process payments securely and receive instant notifications when customers pay.",
      icon: "/placeholder.svg"
    },
    {
      name: "Google Analytics",
      description: "Track customer behavior and optimize your order flow with detailed analytics.",
      icon: "/placeholder.svg"
    },
    {
      name: "Shopify",
      description: "Sync your product catalog and inventory with your existing Shopify store.",
      icon: "/placeholder.svg"
    },
    {
      name: "Zapier",
      description: "Connect OrderBot to thousands of other apps and automate your workflow.",
      icon: "/placeholder.svg"
    },
    {
      name: "Slack",
      description: "Get instant notifications and manage team communication all in one place.",
      icon: "/placeholder.svg"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div 
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-orderbot/10 text-orderbot mb-4 transition-all duration-500 ease-out ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <Zap size={18} />
          </div>
          <p 
            className={`text-sm font-medium text-orderbot mb-2 transition-all duration-500 delay-100 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Powerful Connections
          </p>
          <h2 
            className={`text-3xl md:text-4xl font-display font-bold mb-4 transition-all duration-500 delay-200 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Integrate with your favorite tools
          </h2>
          <p 
            className={`text-lg text-foreground/70 max-w-2xl transition-all duration-500 delay-300 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            OrderBot works seamlessly with the tools you already use, making it easy to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <IntegrationCard 
              key={index}
              name={integration.name}
              description={integration.description}
              icon={integration.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
