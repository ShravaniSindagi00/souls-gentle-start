import { Link } from "react-router-dom";
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-hero rounded-lg shadow-soft">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-display font-bold text-foreground">
                OurSoulss
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your 24/7 wellness and mental health support platform. 
              Connect with professionals and find the help you deserve.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Services
            </h3>
            <div className="space-y-2">
              <Link to="/therapists" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Find Therapists
              </Link>
              <Link to="/ai-therapy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                AI Therapy Chat
              </Link>
              <Link to="/wellness" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Wellness Programs
              </Link>
              <Link to="/b2b" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Corporate Wellness
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Support
            </h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  support@oursoulss.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  24/7 Crisis Support
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Available Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 OurSoulss. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Your feelings matter. You're not alone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;