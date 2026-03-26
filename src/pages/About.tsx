import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { Target, Eye, Heart, Award, Instagram, Linkedin, Github } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results Focused",
    description: "Every strategy is designed to deliver measurable business outcomes.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest reporting at every step.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your growth is our success. We're invested in your journey.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do.",
  },
];

const teamMembers = [
  { name: "Vignesh G", role: "Founder & Managing Director – Marketing Strategy" },
  { name: "Beulah Mercy A", role: "Co-Founder – Social Media & Page Management" },
  { name: "Pranaveshwaran M K", role: "Chief Executive Officer (CEO) – Creative Strategy & Design" },
  { name: "Vishwa S H", role: "Creative Director & Video Editor" },
  { name: "Sreekanth S", role: "Performance Marketing & SEO Specialist" },
  { name: "Prajit Ramachanthran", role: "AI & Software Engineer" },
  { name: "Ruth Jesica S", role: "Business Intelligence Analyst" },
  { name: "Sasitha S", role: "Business Intelligence Analyst" },
  { name: "Rajapriyan P", role: "Lead Web Developer & Tech Architect" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-rhino-light">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Your Trusted Digital Partner
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empowering businesses across India with innovative digital solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Redrhino Digital is a professional digital solutions company based in Chennai, 
                    serving clients all over India. We are passionate about helping businesses 
                    succeed in the digital landscape.
                  </p>
                  <p>
                    We specialize in <strong className="text-foreground">Digital Marketing</strong>, 
                    <strong className="text-foreground"> IT Consulting</strong>, and 
                    <strong className="text-foreground"> Web Development</strong>. Our team combines 
                    creativity with technical expertise to deliver solutions that drive real results.
                  </p>
                  <p>
                    Our mission is to help businesses grow online with smart strategies, 
                    modern technology, and powerful digital presence. We believe in building 
                    long-term partnerships based on trust, transparency, and mutual success.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl gradient-hero p-1">
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl md:text-7xl font-display font-bold text-gradient mb-2">
                        15+
                      </div>
                      <p className="text-lg text-muted-foreground">Projects Completed</p>
                      <div className="mt-8 grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-3xl font-display font-bold text-foreground">12+</div>
                          <p className="text-sm text-muted-foreground">Happy Clients</p>
                        </div>
                        <div>
                          <div className="text-3xl font-display font-bold text-foreground">1</div>
                          <p className="text-sm text-muted-foreground">Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-background" id="founder">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Meet Our Founder
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The visionary behind Redrhino Digital
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                {/* Photo Placeholder */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl font-display font-bold text-white">VG</span>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                    Vignesh G
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Founder & Managing Director at Redrhino Digital
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Vignesh G is the Founder and Managing Director of Redrhino Digital, a digital marketing and technology company based in Chennai, India. He leads the company's marketing strategy, SEO initiatives, and digital growth solutions for businesses. Under his leadership, Redrhino Digital focuses on digital marketing, AI automation, and modern website development to help businesses grow online.
                  </p>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <a
                      href="https://instagram.com/ig.vikki_"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vignesh220904/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/vignesh220904"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-rhino-light" id="team">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The talented people powering Redrhino Digital
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-2xl shadow-card p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-display font-bold text-white">
                      {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-card rounded-2xl shadow-card"
                >
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
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

export default About;
