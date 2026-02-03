import { motion } from "framer-motion";
import { 
  Share2, 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Calendar, 
  Camera,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Calendar,
    title: "Content Planning",
    description: "Strategic content calendar tailored to your brand voice and audience preferences.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Eye-catching graphics, videos, and copy that engage and convert.",
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description: "Active engagement with your audience to build lasting relationships.",
  },
  {
    icon: Heart,
    title: "Influencer Marketing",
    description: "Strategic partnerships with influencers to expand your reach.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategies",
    description: "Proven tactics to grow your followers and engagement organically.",
  },
  {
    icon: Share2,
    title: "Analytics & Reporting",
    description: "Detailed insights on performance and actionable recommendations.",
  },
];

const platforms = [
  { name: "Instagram", icon: "📸", followers: "1B+ Users" },
  { name: "Facebook", icon: "📘", followers: "3B+ Users" },
  { name: "LinkedIn", icon: "💼", followers: "900M+ Users" },
  { name: "Twitter/X", icon: "🐦", followers: "500M+ Users" },
  { name: "YouTube", icon: "▶️", followers: "2B+ Users" },
  { name: "Pinterest", icon: "📌", followers: "450M+ Users" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,000",
    period: "/month",
    features: [
      "2 Social Platforms",
      "12 posts per month",
      "Basic content creation",
      "Community management",
      "Monthly reporting",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹18,000",
    period: "/month",
    features: [
      "3 Social Platforms",
      "20 posts per month",
      "Custom graphics & reels",
      "Story management",
      "Hashtag strategy",
      "Bi-weekly reporting",
      "Engagement campaigns",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "₹35,000",
    period: "/month",
    features: [
      "5 Social Platforms",
      "30+ posts per month",
      "Video content creation",
      "Influencer outreach",
      "Social listening",
      "Weekly reporting",
      "Crisis management",
      "Dedicated manager",
    ],
    highlighted: false,
  },
];

const SocialMediaMarketing = () => {
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
                <Share2 className="w-4 h-4" />
                Social Media Marketing
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Build Your <span className="text-primary">Social Presence</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Engage your audience, build brand loyalty, and drive sales with strategic 
                social media marketing that gets results.
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
            <h2 className="text-2xl md:text-3xl font-bold">Platforms We Manage</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-4 rounded-xl shadow-card text-center"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  {platform.icon}
                </div>
                <h3 className="font-bold text-sm">{platform.name}</h3>
                <p className="text-xs text-muted-foreground">{platform.followers}</p>
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
              Our SMM <span className="text-primary">Services</span>
            </h2>
            <p className="section-subtitle">
              Complete social media management to grow your brand
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
              { value: "500K+", label: "Followers Grown" },
              { value: "150%", label: "Avg Engagement Increase" },
              { value: "50+", label: "Brands Managed" },
              { value: "10M+", label: "Content Reach" },
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
              SMM <span className="text-primary">Pricing</span>
            </h2>
            <p className="section-subtitle">
              Flexible plans to fit your business needs
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
            Ready to Go Viral?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's create a social media strategy that grows your brand
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center gap-2">
            Start Growing <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;
