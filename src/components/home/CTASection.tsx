import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const CTASection = () => {
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your services. Can we discuss my project requirements?");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-white/90 bg-white/10 rounded-full border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Let's Build Together
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
            Let's discuss how we can help you achieve your digital goals. 
            Get a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-white text-primary font-semibold text-base shadow-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/919499912508?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 h-14 px-8 rounded-xl border-2 border-white bg-white/10 text-white font-semibold text-base hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
            >
              <WhatsAppIcon className="w-6 h-6" />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
