
import React from 'react';
import { useInView } from '@/utils/animations';
import { ShoppingBag, MessageSquare, Users, Store } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  index: number;
}

const StatCard = ({ icon, value, label, index }: StatCardProps) => {
  const { ref, isInView } = useInView({}, true);
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 transition-all duration-500 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-3 bg-orderbot/10 rounded-full w-12 h-12 flex items-center justify-center text-orderbot mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-foreground/60 text-sm">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: <ShoppingBag size={20} />,
      value: "2.5M+",
      label: "Orders Processed"
    },
    {
      icon: <MessageSquare size={20} />,
      value: "98%",
      label: "Customer Satisfaction"
    },
    {
      icon: <Users size={20} />,
      value: "500K+",
      label: "Happy Customers"
    },
    {
      icon: <Store size={20} />,
      value: "5,000+",
      label: "Businesses Empowered"
    }
  ];

  const { ref, isInView } = useInView({}, true);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orderbot/5 to-secondary/80 z-0" />
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-orderbot opacity-10 rounded-full blur-3xl z-0"
        style={{ transform: 'rotate(45deg)' }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-orderbot-dark opacity-10 rounded-full blur-3xl z-0"
      />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <p 
            ref={ref as React.RefObject<HTMLParagraphElement>}
            className={`text-sm font-medium text-orderbot mb-2 transition-all duration-500 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            By The Numbers
          </p>
          <h2 
            className={`text-3xl md:text-4xl font-display font-bold mb-4 transition-all duration-500 delay-100 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Growing businesses with OrderBot
          </h2>
          <p 
            className={`text-lg text-foreground/70 max-w-2xl transition-all duration-500 delay-200 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our platform is trusted by thousands of businesses around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
