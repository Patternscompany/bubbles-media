import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "React.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GoDaddy", icon: "🔵" },
  { name: "Cloudflare", icon: "☁️" },
  { name: "Shopify", icon: "🛒" },
  { name: "OpenAI", icon: "🤖" },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Our Partners
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Expertise in all Major <span className="text-primary">Platforms</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-3xl hover:bg-primary/10 transition-colors">
                {partner.icon}
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
