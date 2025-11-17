import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted to-muted/50 mt-20 border-t">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-xl font-bold text-white">LB</span>
              </div>
              <h3 className="text-xl font-bold gradient-text">Life Biotech</h3>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Manufacturing quality medicines for a healthier tomorrow. Trusted by healthcare professionals nationwide.
            </p>
          </div>

          <div className="animate-fade-in stagger-1">
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Home
              </Link>
              <Link to="/products" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Products
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Contact
              </Link>
            </div>
          </div>

          <div className="animate-fade-in stagger-2">
            <h4 className="font-semibold mb-4 text-lg">Policies</h4>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Terms & Conditions
              </Link>
              <Link to="/shipping-policy" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Shipping Policy
              </Link>
              <Link to="/refund-policy" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Refund Policy
              </Link>
            </div>
          </div>

          <div className="animate-fade-in stagger-3">
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 group">
                <MapPin className="w-4 h-4 mt-1 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">
                  Kurshi Road, Near Puja Narshing Home,
Jankipuram Sector H, Lucknow
                </p>
              </div>
              <div className="flex items-center space-x-2 group">
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <a href="mailto:lifebiotech.org@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  lifebiotech.org@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 group">
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <a href="tel:+919198476276" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91-9198476276
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="text-center space-y-3">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <span>•</span>
              <Link to="/shipping-policy" className="hover:text-primary transition-colors">Shipping Policy</Link>
              <span>•</span>
              <Link to="/refund-policy" className="hover:text-primary transition-colors">Cancellations & Refunds</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Life Biotech. All rights reserved. | 
              <span className="mx-2">Made with ❤️ for Healthcare</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
