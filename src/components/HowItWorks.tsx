"use client";

import React from "react";
import { useInView } from "@/utils/animations";
import {
  CheckCircle2,
  SmartphoneNfc,
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  MessageSquare,
} from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isActive: boolean;
}

const Step = ({ icon, title, description, index, isActive }: StepProps) => {
  return (
    <div
      className={`relative flex items-start gap-4 pb-8 ${
        index === 5 ? "border-0" : "border-l"
      } border-border/50 ml-3`}
    >
      <div
        className={`absolute top-0 left-0 w-6 h-6 rounded-full -ml-3 z-10 flex items-center justify-center transition-all duration-300 ${
          isActive
            ? "bg-orderbot text-white scale-110"
            : "bg-muted text-foreground/30"
        }`}
      >
        {isActive ? (
          <CheckCircle2 size={16} />
        ) : (
          <span className="text-xs font-semibold">{index + 1}</span>
        )}
      </div>

      <div
        className={`pt-0 pl-6 transition-all duration-300 ${
          isActive ? "opacity-100" : "opacity-60"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`p-2 rounded-lg ${
              isActive
                ? "bg-orderbot/10 text-orderbot"
                : "bg-muted text-foreground/50"
            }`}
          >
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const { ref, isInView } = useInView();
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  const steps = [
    {
      icon: <SmartphoneNfc size={20} />,
      title: "Start Chat with WhatsApp Bot",
      description:
        "Customer initiates a conversation with the business's WhatsApp bot.",
    },
    {
      icon: <ShoppingCart size={20} />,
      title: "Browse Products & Select Items",
      description:
        "Bot provides a menu/catalog, and customer adds items to their cart.",
    },
    {
      icon: <CreditCard size={20} />,
      title: "Process Payment",
      description: "Customer completes payment via Paystack virtual account.",
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: "Confirmation & Notification",
      description:
        "Bot verifies payment and notifies the business of the new order.",
    },
    {
      icon: <Package size={20} />,
      title: "Order Processing",
      description:
        "Business processes the order and updates status in the admin panel.",
    },
    {
      icon: <Truck size={20} />,
      title: "Delivery & Completion",
      description:
        "Customer receives updates and order is marked as completed upon delivery.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div
              ref={ref as React.RefObject<HTMLDivElement>}
              className="max-w-xl"
            >
              <p
                className={`text-sm font-medium text-orderbot mb-2 transition-all duration-500 ease-out ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                How It Works
              </p>
              <h2
                className={`text-3xl md:text-4xl font-display font-bold mb-4 transition-all duration-500 delay-100 ease-out ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Simple, intuitive order flow for your customers
              </h2>
              <p
                className={`text-lg text-foreground/70 mb-8 transition-all duration-500 delay-200 ease-out ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                From initial chat to delivery confirmation, Orderbot provides a
                seamless end-to-end experience for your customers.
              </p>

              <div
                className={`transition-all duration-500 delay-300 ease-out ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {steps.map((step, index) => (
                  <Step
                    key={index}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    index={index}
                    isActive={activeStep === index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-500 ease-out ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
                alt="Customer using WhatsApp to order"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-soft-xl max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-orderbot rounded-full flex items-center justify-center">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <p className="font-medium">Order Confirmation</p>
              </div>
              <p className="text-sm text-foreground/70">
                Your order #1234 has been confirmed. It will be ready in 20
                minutes.
              </p>
            </div>

            <div className="absolute -top-6 -right-6 glass rounded-xl p-4 shadow-soft-xl max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-white" />
                </div>
                <p className="font-medium">Payment Received</p>
              </div>
              <p className="text-sm text-foreground/70">
                Payment of $35.99 has been successfully processed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
