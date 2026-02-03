import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Zap, 
  Shield, 
  Code,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique, brand-aligned designs that stand out from templates and competitors.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfect experience across all devices - desktop, tablet, and mobile.",
  },
  {
    icon: Zap,
    title: "Speed Optimized",
    description: "Lightning-fast loading times for better user experience and SEO.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL certificates, regular backups, and security best practices.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Well-structured, maintainable code that's easy to update and scale.",
  },
  {
    icon: Globe,
    title: "SEO Ready",
    description: "Built with search engines in mind from the ground up.",
  },
];

const portfolioItems = [
  { category: "E-commerce", image: "🛒" },
  { category: "Corporate", image: "🏢" },
  { category: "Portfolio", image: "📁" },
  { category: "Blog", image: "📝" },
  { category: "SaaS", image: "☁️" },
  { category: "Restaurant", image: "🍽️" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹14,999",
    period: "starting at",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "1 revision round",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "₹34,999",
    period: "starting at",
    features: [
      "Up to 10 pages",
      "Custom design",
      "Advanced SEO setup",
      "Blog integration",
      "Social media integration",
      "Google Analytics",
      "3 revision rounds",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹74,999",
    period: "starting at",
    features: [
      "Unlimited pages",
      "Premium custom design",
      "Complete SEO package",
      "E-commerce ready",
      "CMS integration",
      "Speed optimization",
      "Unlimited revisions",
      "1 year free support",
    ],
    highlighted: false,
  },
];

const process = [
  { step: "01", title: "Discovery", description: "Understand your goals" },
  { step: "02", title: "Wireframe", description: "Plan the structure" },
  { step: "03", title: "Design", description: "Create visual mockups" },
  { step: "04", title: "Develop", description: "Build the website" },
  { step: "05", title: "Launch", description: "Go live & support" },
];

const WebsiteDesign = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Website Design
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Stunning <span className="text-primary">Websites</span> That Convert
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional, responsive websites designed to impress visitors and 
                turn them into loyal customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="btn-primary">
                  View Pricing
                </a>
                <a href="/contact" className="btn-outline">
                  Request Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Websites We Build</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card text-center hover:shadow-card-hover transition-all cursor-pointer"
              >
                <div className="text-4xl mb-2">{item.image}</div>
                <h3 className="font-bold text-sm">{item.category}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <p className="section-subtitle">
              We build websites that look great and perform even better
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all border border-border/50"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our <span className="text-primary">Process</span></h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-card text-center min-w-[180px] relative"
              >
                <div className="text-3xl font-black text-primary mb-2">{item.step}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Website <span className="text-primary">Pricing</span>
            </h2>
            <p className="section-subtitle">
              Quality websites at competitive prices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card rounded-3xl p-8 shadow-card border-2 ${
                  plan.highlighted ? "border-primary scale-105" : "border-border/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black text-primary">{plan.price}</span>
                  <span className="text-muted-foreground text-sm block">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.highlighted 
                    ? "bg-primary text-primary-foreground hover:bg-orange-dark" 
                    : "bg-secondary hover:bg-primary hover:text-primary-foreground"
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready for a New Website?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's create a website that represents your brand perfectly
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center gap-2">
            Get Free Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDesign;
