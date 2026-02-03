import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MessageCircle
} from "lucide-react";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-100 h-20  rounded-full flex items-center justify-center">
                            <img src={Logo} alt="BUBBLES logo" className="w-100 h-20" />
                          </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              We build systems that scale - and we don't vanish after delivery.
              Your trusted digital marketing partner.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", to: "/" },
                { name: "Services", to: "/services/website-design" },
                { name: "About Us", to: "/about" },
                { name: "Gallery", to: "/gallery" },
                { name: "Career", to: "/career" },
                { name: "Blog", to: "/blog" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Web Designing", to: "/services/website-design" },
                { name: "SEO Optimization", to: "/services/seo" },
                { name: "Social Media", to: "/services/social-media" },
                { name: "Google Ads", to: "/services/ads" },
                { name: "Graphic Design", to: "/contact" },
                { name: "AI Marketing", to: "/contact" },
                { name: "E-commerce", to: "/services/ecommerce" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.to}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  123 Business Street,<br />
                  Digital City, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919849869055" className="text-white/70 text-sm hover:text-primary transition-colors">
                  +91 98498 69055
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@bubblesmedia.com" className="text-white/70 text-sm hover:text-primary transition-colors">
                  info@bubblesmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Bubbles Media. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 text-sm hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919849869055?text=Hi%20Bubbles%20Media!%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20marketing%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;
