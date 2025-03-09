import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ClientProvider from "@/components/providers/ClientProvider";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function page() {
  return (
    <main className="min-h-screen flex flex-col">
      <ClientProvider>
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <Integrations />
        <Pricing />
        <Footer />
      </ClientProvider>
    </main>
  );
}
