import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { Target, Eye, Heart, Award } from "lucide-react";

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
                        100+
                      </div>
                      <p className="text-lg text-muted-foreground">Projects Completed</p>
                      <div className="mt-8 grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-3xl font-display font-bold text-foreground">50+</div>
                          <p className="text-sm text-muted-foreground">Happy Clients</p>
                        </div>
                        <div>
                          <div className="text-3xl font-display font-bold text-foreground">5+</div>
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

        {/* Values */}
        <section className="py-20 bg-rhino-light">
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
