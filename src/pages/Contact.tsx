import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Instagram, Linkedin, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your services. Can we discuss my requirements?");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:contact@redrhinodigital.in?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening Email Client! 📧",
      description: "Please send the email from your mail app. We'll respond within 24 hours.",
    });
    
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rhino-light via-background to-background">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4" />
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Let's Work <span className="text-gradient">Together</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to grow your business? Get in touch with us for a free consultation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Contact us 
                  using any of the methods below, or fill out the form.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+919499912508"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-button">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">Phone / WhatsApp</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                        +91 94999 12508
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@redrhinodigital.in"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-button">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">Email</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                        contact@redrhinodigital.in
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card">
                    <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-button">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">Location</p>
                      <p className="font-semibold text-foreground text-lg">Chennai, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4 font-medium">Connect with us</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com/redrhino_degital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:gradient-hero hover:border-transparent hover:shadow-button transition-all duration-300 group"
                    >
                      <Instagram className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://linkedin.com/company/redrhino-digital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:gradient-hero hover:border-transparent hover:shadow-button transition-all duration-300 group"
                    >
                      <Linkedin className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href={`https://wa.me/919499912508?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-whatsapp flex items-center justify-center hover:bg-whatsapp-dark hover:shadow-lg transition-all duration-300"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-elevated relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2 relative z-10">
                    Send Us a Message
                  </h3>
                  <p className="text-muted-foreground mb-8 relative z-10">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full h-13 px-5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        maxLength={15}
                        className="w-full h-13 px-5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={255}
                        className="w-full h-13 px-5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={1000}
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project or requirements"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-xl gradient-hero text-white font-semibold text-base flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-button disabled:opacity-70 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
