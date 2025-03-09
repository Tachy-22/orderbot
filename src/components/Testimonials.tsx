"use client";

import React from "react";
import { useInView } from "@/utils/animations";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
  index: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  stars,
  index,
}: TestimonialCardProps) => {
  const { ref, isInView } = useInView({}, true);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white rounded-2xl p-6 shadow-subtle-lg border border-border/50 transition-all duration-500 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex text-amber-400">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < stars ? "currentColor" : "none"}
                className={i < stars ? "text-amber-400" : "text-gray-300"}
              />
            ))}
        </div>
        <Quote size={32} className="text-orderbot/10" />
      </div>
      <p className="text-foreground/80 mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orderbot to-orderbot-dark text-white flex items-center justify-center font-medium">
          {author
            .split(" ")
            .map((name) => name[0])
            .join("")}
        </div>
        <div className="ml-3">
          <p className="font-medium text-sm">{author}</p>
          <p className="text-xs text-foreground/60">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ref, isInView } = useInView({}, true);

  const testimonials = [
    {
      quote:
        "OrderBot has transformed how we handle orders. Our revenue increased by 35% in just two months!",
      author: "Sarah Johnson",
      role: "Owner",
      company: "Café Delight",
      stars: 5,
    },
    {
      quote:
        "The AI chatbot is remarkably intuitive. Our customers love how easy it is to place orders now.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "Fresh Eats Co.",
      stars: 5,
    },
    {
      quote:
        "Integration was seamless and the support team is always responsive. Best business decision we made this year.",
      author: "Priya Patel",
      role: "Operations Manager",
      company: "Spice Bazaar",
      stars: 4,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p
            ref={ref as React.RefObject<HTMLParagraphElement>}
            className={`text-sm font-medium text-orderbot mb-2 transition-all duration-500 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Testimonials
          </p>
          <h2
            className={`text-3xl md:text-4xl font-display font-bold mb-4 transition-all duration-500 delay-100 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Trusted by businesses like yours
          </h2>
          <p
            className={`text-lg text-foreground/70 max-w-2xl transition-all duration-500 delay-200 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Don&lsquo;t just take our word for it. See what our customers have
            to say about OrderBot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              stars={testimonial.stars}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
