import { motion } from "framer-motion";
import { 
  Megaphone, 
  Target, 
  BarChart3, 
  Users, 
  DollarSign, 
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach your ideal customers with advanced audience segmentation and targeting options.",
  },
  {
    icon: Zap,
    title: "Campaign Optimization",
    description: "Continuous A/B testing and optimization to maximize your ad performance.",
  },
  {
    icon: BarChart3,
    title: "Conversion Tracking",
    description: "Advanced tracking setup to measure ROI and optimize for conversions.",
  },
  {
    icon: Users,
    title: "Remarketing",
    description: "Re-engage visitors who showed interest but didn't convert the first time.",
  },
  {
    icon: DollarSign,
    title: "Budget Management",
    description: "Strategic budget allocation to maximize returns on your ad spend.",
  },
  {
    icon: Megaphone,
    title: "Ad Creative",
    description: "Compelling ad copy and visuals that drive clicks and conversions.",
  },
];

const platforms = [
  { name: "Google Search Ads", icon: "🔍" },
  { name: "Google Display", icon: "🖼️" },
  { name: "YouTube Ads", icon: "▶️" },
  { name: "Facebook Ads", icon: "📘" },
  { name: "Instagram Ads", icon: "📷" },
  { name: "Shopping Ads", icon: "🛒" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "/month",
    features: [
      "Up to 2 campaigns",
      "Up to 100 keywords",
      "Basic ad copy",
      "Standard ad extensions",
      "Monthly reporting",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹24,999",
    period: "/month",
    features: [
      "Up to 5 campaigns",
      "Unlimited keywords",
      "Custom ad copy & creative",
      "Advanced targeting",
      "Remarketing setup",
      "Bi-weekly reporting",
      "Landing page optimization",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "₹49,999",
    period: "/month",
    features: [
      "Unlimited campaigns",
      "Multi-platform management",
      "Video ad production",
      "Advanced attribution",
      "Competitor analysis",
      "Weekly strategy calls",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
];

const MetaGoogleAds = () => {
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
                <Megaphone className="w-4 h-4" />
                Paid Advertising
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Meta & Google <span className="text-primary">Ads</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Drive instant traffic and qualified leads with data-driven paid advertising 
                campaigns that deliver measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="btn-primary">
                  View Pricing
                </a>
                <a href="/contact" className="btn-outline">
                  Free Strategy Call
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
            <h2 className="text-2xl md:text-3xl font-bold">Platforms We Manage</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-4 rounded-xl shadow-card flex items-center gap-3 min-w-[180px]"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-xl">
                  {platform.icon}
                </div>
                <span className="font-medium">{platform.name}</span>
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
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="section-subtitle">
              End-to-end paid advertising management for maximum ROI
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
            {[
              { value: "₹5Cr+", label: "Ad Spend Managed" },
              { value: "300%", label: "Average ROAS" },
              { value: "150+", label: "Campaigns Launched" },
              { value: "40%", label: "Lower CPC" },
            ].map((stat, index) => (
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
              Ads <span className="text-primary">Pricing</span>
            </h2>
            <p className="section-subtitle">
              Management fees only - ad spend is separate
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
                  <span className="text-muted-foreground">{plan.period}</span>
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
            Ready to Scale Your Business?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free ad account audit and custom strategy for your business
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center gap-2">
            Get Free Audit <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetaGoogleAds;
