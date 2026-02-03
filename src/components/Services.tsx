import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Search, 
  Share2, 
  Megaphone, 
  Palette, 
  Bot, 
  ShoppingBag 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Designing",
    description: "Custom, responsive websites that convert visitors into customers.",
    color: "from-blue-500 to-blue-600",
    link: "/services/website-design",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your rankings and drive organic traffic to your site.",
    color: "from-green-500 to-green-600",
    link: "/services/seo",
  },
  {
    icon: Share2,
    title: "Social Media Optimization",
    description: "Build your brand presence across all social platforms.",
    color: "from-pink-500 to-pink-600",
    link: "/services/social-media",
  },
  {
    icon: Megaphone,
    title: "Meta/Google Ads",
    description: "Data-driven advertising campaigns that maximize ROI.",
    color: "from-yellow-500 to-orange-500",
    link: "/services/ads",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Stunning visuals that capture your brand identity.",
    color: "from-purple-500 to-purple-600",
    link: "#",
  },
  {
    icon: Bot,
    title: "AI Marketing",
    description: "Leverage AI to automate and optimize your marketing.",
    color: "from-cyan-500 to-cyan-600",
    link: "#",
  },
  {
    icon: ShoppingBag,
    title: "Shopify/E-commerce",
    description: "Build and scale your online store with expert solutions.",
    color: "from-emerald-500 to-emerald-600",
    link: "/services/ecommerce",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="section-subtitle">
            We deliver end-to-end digital solutions through structured systems, in-house teams, 
            and clear execution - so your business grows without depending on freelancers or chance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="card-service group block h-full"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 
                             group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
