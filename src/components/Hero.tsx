"use client"
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRight, MessageSquare, CreditCard, ChevronRight } from 'lucide-react';
import { useInView } from '@/utils/animations';

const Hero = () => {
  const { ref: heroRef, isInView } = useInView({}, true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      ref={heroRef as React.RefObject<HTMLDivElement>}
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orderbot/5 to-background/0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orderbot/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div 
            className={`inline-flex items-center px-3 py-1 rounded-full bg-secondary border border-border mb-6 text-sm font-medium transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-orderbot">New</span>
            <span className="mx-2 text-foreground/70">Introducing Orderbot</span>
            <ChevronRight size={16} className="text-foreground/50" />
          </div>
          
          <h1 
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 transition-all duration-700 delay-100 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Transform Your Business with 
            <span className="text-orderbot"> WhatsApp-Powered</span> Order Management
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 transition-all duration-700 delay-200 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Streamline customer orders, payments and tracking with an AI-powered chatbot that turns conversations into transactions.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button size="lg" icon={<ArrowRight size={18} />}>
              Get Started Free
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
          
          <div 
            className={`relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-soft-xl transition-all duration-700 delay-400 ease-out ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80" 
              alt="Orderbot dashboard" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center gap-4">
              <div className="glass rounded-xl p-4 flex items-center gap-3 shadow-soft">
                <div className="bg-orderbot rounded-full p-2">
                  <MessageSquare size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Chatbot</p>
                  <p className="text-xs text-foreground/70">AI-Powered</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3 shadow-soft">
                <div className="bg-orderbot rounded-full p-2">
                  <CreditCard size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Payments</p>
                  <p className="text-xs text-foreground/70">Integrated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
