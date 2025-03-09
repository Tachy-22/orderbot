
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <a href="#" className="text-xl font-display font-semibold text-foreground mb-4 inline-block">
              Orderbot
            </a>
            <p className="text-foreground/70 mb-6 max-w-xs">
              Transform your business with WhatsApp-powered order management and AI chatbots.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/50 hover:text-orderbot transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-orderbot transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-orderbot transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-orderbot transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-foreground/70 hover:text-orderbot transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-foreground/70 hover:text-orderbot transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">Integrations</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">Guides</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">API Reference</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">Contact</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-orderbot transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Orderbot. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-foreground/70 hover:text-orderbot transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/70 hover:text-orderbot transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/70 hover:text-orderbot transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
