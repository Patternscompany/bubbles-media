import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  Package, 
  BarChart3, 
  Shield,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: ShoppingBag,
    title: "Store Setup",
    description: "Complete e-commerce store setup on Shopify, WooCommerce, or custom platforms.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Secure payment gateways including Razorpay, PayPal, Stripe, and more.",
  },
  {
    icon: Package,
    title: "Product Management",
    description: "Easy-to-use product catalog with variants, inventory, and pricing.",
  },
  {
    icon: Truck,
    title: "Shipping Setup",
    description: "Integrated shipping solutions with real-time rates and tracking.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track sales, conversions, and customer behavior in real-time.",
  },
  {
    icon: Shield,
    title: "Security & SSL",
    description: "PCI compliant checkout with SSL encryption for safe transactions.",
  },
];

const platforms = [
  { name: "Shopify", icon: "🛍️", description: "Best for beginners" },
  { name: "WooCommerce", icon: "🔧", description: "WordPress powered" },
  { name: "Magento", icon: "🏪", description: "Enterprise solution" },
  { name: "Custom Build", icon: "⚡", description: "Tailored solution" },
];

const pricingPlans = [
  {
    name: "Starter Store",
    price: "₹24,999",
    period: "one-time",
    features: [
      "Up to 50 products",
      "Shopify/WooCommerce setup",
      "Payment gateway integration",
      "Basic theme customization",
      "Mobile responsive",
      "1 month support",
    ],
    highlighted: false,
  },
  {
    name: "Business Store",
    price: "₹49,999",
    period: "one-time",
    features: [
      "Up to 200 products",
      "Custom theme design",
      "Multiple payment gateways",
      "Shipping integration",
      "Inventory management",
      "SEO optimization",
      "3 months support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "₹99,999",
    period: "one-time",
    features: [
      "Unlimited products",
      "Custom e-commerce platform",
      "Advanced analytics",
      "Multi-vendor support",
      "API integrations",
      "Performance optimization",
      "6 months support",
      "Priority support",
    ],
    highlighted: false,
  },
];

const stats = [
  { value: "₹10Cr+", label: "Revenue Generated" },
  { value: "50+", label: "Stores Launched" },
  { value: "1M+", label: "Orders Processed" },
  { value: "99.9%", label: "Uptime" },
];

const Ecommerce = () => {
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
                <ShoppingBag className="w-4 h-4" />
                E-commerce Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Launch Your <span className="text-primary">Online Store</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Turn your products into profits with a powerful e-commerce store 
                designed to sell. From Shopify to custom builds, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="btn-primary">
                  View Pricing
                </a>
                <a href="/contact" className="btn-outline">
                  Free Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Platforms We Work With</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card text-center hover:shadow-card-hover transition-all"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="font-bold mb-1">{platform.name}</h3>
                <p className="text-xs text-muted-foreground">{platform.description}</p>
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
              E-commerce <span className="text-primary">Features</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to run a successful online business
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

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              E-commerce <span className="text-primary">Pricing</span>
            </h2>
            <p className="section-subtitle">
              Get your store up and running with our packages
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
                    BEST VALUE
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
      <section className="py-20 bg-gradient-to-r from-primary to-orange-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Start Selling Online?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's build an online store that converts visitors into customers
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center gap-2">
            Launch Your Store <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;
