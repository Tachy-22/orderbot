
import React from 'react';
import { useInView } from '@/utils/animations';
import { MessageSquare, CreditCard, ShoppingCart, Bell, Building, BarChart } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const { ref, isInView } = useInView({}, true);
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white rounded-2xl p-6 border border-border/50 shadow-soft transition-all duration-500 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-orderbot/10 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
        <div className="text-orderbot">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "Chatbot Integration",
      description: "AI-powered chatbot to handle customer orders through WhatsApp with natural language processing."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Integration",
      description: "Seamless Paystack integration for automated payment verification and confirmation."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Visual Catalog",
      description: "Upload product images, descriptions, and pricing for customers to browse and select."
    },
    {
      icon: <Bell size={24} />,
      title: "Order Tracking",
      description: "Automated notifications for order confirmation, preparation, and delivery status updates."
    },
    {
      icon: <Building size={24} />,
      title: "Multi-Business Support",
      description: "Easy onboarding process with a dedicated chatbot and admin panel for each business."
    },
    {
      icon: <BarChart size={24} />,
      title: "Analytics & Insights",
      description: "Detailed reports on order trends, peak hours, and overall sales performance."
    }
  ];

  const { ref, isInView } = useInView({}, true);

  return (
    <section id="features" className="section-padding bg-secondary/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p 
            ref={ref as React.RefObject<HTMLParagraphElement>}
            className={`text-sm font-medium text-orderbot mb-2 transition-all duration-500 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Features
          </p>
          <h2 
            className={`text-3xl md:text-4xl font-display font-bold mb-4 transition-all duration-500 delay-100 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Everything you need to manage orders
          </h2>
          <p 
            className={`text-lg text-foreground/70 max-w-2xl transition-all duration-500 delay-200 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Orderbot provides a comprehensive solution for businesses of all sizes to streamline their order management process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
