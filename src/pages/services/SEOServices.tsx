import { motion } from "framer-motion";
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  FileText, 
  Link2, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "In-depth analysis to find high-value keywords that drive targeted traffic to your business.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "Optimization of content, meta tags, headers, and internal linking structure.",
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Quality backlink acquisition from authoritative websites in your industry.",
  },
  {
    icon: BarChart3,
    title: "Technical SEO",
    description: "Site speed optimization, mobile-friendliness, and crawlability improvements.",
  },
  {
    icon: Target,
    title: "Local SEO",
    description: "Google My Business optimization and local citation building for local visibility.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description: "Monthly reports with actionable insights and ranking improvements.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,000",
    period: "/month",
    features: [
      "Keyword Research (10 keywords)",
      "On-Page SEO Optimization",
      "Basic Technical SEO",
      "Monthly Reporting",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹18,000",
    period: "/month",
    features: [
      "Keyword Research (25 keywords)",
      "On-Page SEO Optimization",
      "Advanced Technical SEO",
      "Link Building (5 links/month)",
      "Google My Business Optimization",
      "Bi-weekly Reporting",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "₹35,000",
    period: "/month",
    features: [
      "Unlimited Keywords",
      "Complete On-Page SEO",
      "Advanced Technical SEO",
      "Link Building (15 links/month)",
      "Content Creation (4 blogs/month)",
      "Weekly Reporting",
      "Dedicated Account Manager",
    ],
    highlighted: false,
  },
];

const process = [
  { step: "01", title: "Audit", description: "Complete website analysis" },
  { step: "02", title: "Strategy", description: "Custom SEO roadmap" },
  { step: "03", title: "Optimize", description: "On-page & technical fixes" },
  { step: "04", title: "Build", description: "Quality link acquisition" },
  { step: "05", title: "Report", description: "Track & improve rankings" },
];

const SEOServices = () => {
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
                <Search className="w-4 h-4" />
                SEO Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Dominate <span className="text-primary">Search Rankings</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get found by customers actively searching for your products and services. 
                Our data-driven SEO strategies deliver sustainable organic growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="btn-primary">
                  View Pricing
                </a>
                <a href="/contact" className="btn-outline">
                  Free SEO Audit
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our SEO <span className="text-primary">Services</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive search engine optimization to boost your online visibility
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
      <section className="py-20 bg-secondary/30">
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
                className="bg-card p-6 rounded-2xl shadow-card text-center min-w-[180px]"
              >
                <div className="text-3xl font-black text-primary mb-2">{item.step}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
              SEO <span className="text-primary">Pricing</span>
            </h2>
            <p className="section-subtitle">
              Transparent pricing with no hidden fees
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
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Rank #1 on Google?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover how we can boost your organic traffic
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

export default SEOServices;
