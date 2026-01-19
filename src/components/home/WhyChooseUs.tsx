import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Result-Driven Approach",
    description: "We focus on measurable outcomes that directly impact your business growth.",
  },
  {
    icon: Users,
    title: "Client-Centric Service",
    description: "Your success is our priority. We tailor solutions to meet your unique needs.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Trusted by businesses across India for delivering consistent results.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "We leverage the latest tools and strategies to keep you ahead of competition.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-rhino-black text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/20 rounded-full">
            Why Redrhino
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Partner with a team that's committed to your success
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold mb-3">
                {reason.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
