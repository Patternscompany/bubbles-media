import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import HTML from "../assets/partners/html5.svg";
import CSS from "../assets/partners/css3.svg";
import JavaScript from "../assets/partners/javascript.png";
import ReactJS from "../assets/partners/react.svg";
import NodeJS from "../assets/partners/node.js.svg";
import MongoDB from "../assets/partners/mongodb.svg";
import GoDaddy from "../assets/partners/godaddy.png";
import Cloudflare from "../assets/partners/cloudflare.svg";
import Shopify from "../assets/partners/shopify.svg";
import OpenAI from "../assets/partners/openai.svg";

const partners = [
  { name: "HTML5", icon: HTML },
  { name: "CSS3", icon: CSS },
  { name: "JavaScript", icon: JavaScript },
  { name: "React.js", icon: ReactJS },
  { name: "Node.js", icon: NodeJS },
  { name: "MongoDB", icon: MongoDB },
  { name: "GoDaddy", icon: GoDaddy },
  { name: "Cloudflare", icon: Cloudflare },
  { name: "Shopify", icon: Shopify },
  { name: "OpenAI", icon: OpenAI },
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
      <div className="overflow-hidden relative">
        <style>{`
          .marquee {
            display: flex;
            align-items: center;
            gap: 2rem;
            width: max-content;
            animation: marquee 24s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee:hover { animation-play-state: paused; }
        `}</style>
        <div className="marquee" style={{ animationPlayState: isInView ? 'running' : 'paused' }}>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center p-2 hover:bg-primary/10 transition-colors">
                <img src={partner.icon} alt={partner.name} className="max-w-full max-h-full object-contain" />
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
