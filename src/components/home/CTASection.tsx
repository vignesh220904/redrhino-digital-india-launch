import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Let's discuss how we can help you achieve your digital goals. 
            Get a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-white text-primary font-semibold text-base shadow-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919499912508?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg border-2 border-white bg-transparent text-white font-semibold text-base hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
