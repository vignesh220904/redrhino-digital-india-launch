import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { 
  Megaphone, 
  Monitor, 
  Code, 
  Instagram, 
  Target, 
  Search, 
  Palette, 
  Video, 
  Settings, 
  HeadphonesIcon, 
  Zap, 
  ShoppingCart,
  Globe,
  FileText,
  Wand2,
  Sparkles
} from "lucide-react";

const services = [
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Drive growth and visibility with comprehensive digital marketing strategies tailored for your business.",
    gradient: "from-rose-500 to-red-600",
    subServices: [
      { icon: Instagram, name: "Social Media Marketing", desc: "Build your brand presence across all major social platforms" },
      { icon: Target, name: "Meta Ads (Facebook & Instagram)", desc: "Targeted advertising campaigns that convert" },
      { icon: Search, name: "Google Ads", desc: "PPC campaigns for maximum ROI and visibility" },
      { icon: Search, name: "SEO", desc: "Organic search optimization to rank higher" },
      { icon: Palette, name: "Branding & Promotion", desc: "Create a memorable brand identity" },
      { icon: Wand2, name: "Logo & Poster Design", desc: "Professional visual design assets" },
      { icon: Palette, name: "Graphic Design", desc: "Eye-catching visuals for all platforms" },
      { icon: Video, name: "Video Shoot & Editing", desc: "High-quality video content production" },
    ],
  },
  {
    id: "it-consulting",
    icon: Monitor,
    title: "IT Consulting",
    description: "Transform your business operations with expert technology guidance and implementation.",
    gradient: "from-blue-500 to-indigo-600",
    subServices: [
      { icon: Settings, name: "Business Technology Solutions", desc: "Custom tech solutions for your business needs" },
      { icon: Settings, name: "Software Guidance", desc: "Expert advice on the right software stack" },
      { icon: Settings, name: "System Setup", desc: "Complete IT infrastructure setup" },
      { icon: HeadphonesIcon, name: "Tech Support", desc: "Reliable ongoing technical support" },
      { icon: Zap, name: "Digital Transformation", desc: "Modernize your business processes" },
    ],
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Build stunning, high-performance websites that represent your brand and drive conversions.",
    gradient: "from-emerald-500 to-teal-600",
    subServices: [
      { icon: Globe, name: "Business Websites", desc: "Professional websites that build credibility" },
      { icon: FileText, name: "Portfolio Websites", desc: "Showcase your work beautifully" },
      { icon: FileText, name: "Landing Pages", desc: "High-converting campaign pages" },
      { icon: ShoppingCart, name: "E-commerce Websites", desc: "Complete online store solutions" },
      { icon: Code, name: "Custom Web Solutions", desc: "Tailored web applications for unique needs" },
    ],
  },
];

const Services = () => {
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
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Comprehensive <span className="text-gradient">Digital Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From strategy to execution, we provide end-to-end digital services 
                to help your business thrive online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-32">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Section Header */}
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </div>

                    <div className={`grid sm:grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      {service.subServices.map((sub, subIndex) => (
                        <motion.div
                          key={sub.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: subIndex * 0.05 }}
                          className="group p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center mb-4`} style={{ background: `linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(var(--primary) / 0.05) 100%)` }}>
                            <sub.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {sub.name}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {sub.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
