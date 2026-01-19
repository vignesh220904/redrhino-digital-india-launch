import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/redrhino-logo.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const Footer = () => {
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your services.");

  return (
    <footer className="bg-rhino-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Redrhino Digital" className="h-12 w-auto" />
              <div>
                <span className="font-display font-bold text-xl text-white">
                  Redrhino
                </span>
                <span className="font-display font-bold text-xl text-primary">
                  {" "}Digital
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Chennai-based digital agency providing result-driven digital marketing, 
              IT consulting, and web development services across India.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/redrhino_digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/redrhino-digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/919499912508?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-whatsapp flex items-center justify-center hover:bg-whatsapp-dark transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                "Digital Marketing",
                "IT Consulting",
                "Web Development",
                "Branding & Design",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/60 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="tel:+919499912508"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  +91 94999 12508
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="mailto:contact@redrhinodigital.in"
                  className="text-white/60 hover:text-primary transition-colors text-sm"
                >
                  contact@redrhinodigital.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/60">Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Redrhino Digital. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Made with ❤️ in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
