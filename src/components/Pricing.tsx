import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    category: "WEB",
    title: "Starter",
    subtitle: "POCKET PACK",
    price: "₹14,999",
    priceLabel: "starting at",
    included: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
    ],
    notIncluded: [
      "Social media integration",
      "Google Analytics setup",
      "Custom functionality",
      "E-commerce capabilities",
      "Content creation",
      "Ongoing maintenance",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    category: "SEO",
    title: "Starter",
    subtitle: "POCKET PACK",
    price: "₹9,000",
    priceLabel: "/month",
    included: [
      "Keyword Research (10 keywords)",
      "On-Page SEO Optimization",
      "Basic Technical SEO",
      "Monthly Reporting",
    ],
    notIncluded: [
      "Google My Business Optimization",
      "Content Creation",
      "Link Building",
      "Advanced Technical SEO",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    category: "SMM",
    title: "Starter",
    subtitle: "POCKET PACK",
    price: "₹9,000",
    priceLabel: "/month",
    included: [
      "Management of 2 social platforms",
      "12 posts per month (3 per week)",
      "Basic content creation",
      "Community management",
    ],
    notIncluded: [
      "Monthly performance reporting",
      "Basic hashtag strategy",
      "Paid social advertising",
      "Influencer marketing",
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    category: "GOOGLE",
    title: "Starter",
    subtitle: "POCKET PACK",
    price: "₹9,999",
    priceLabel: "/month",
    included: [
      "up to 2 campaigns",
      "up to 100 keywords",
      "Basic ad copy",
      "Standard ad extensions",
    ],
    notIncluded: [
      "Monthly performance reporting",
      "Basic conversion tracking",
      "Remarketing campaigns",
      "Landing page optimization",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    category: "META",
    title: "Starter",
    subtitle: "POCKET PACK",
    price: "₹5,999",
    priceLabel: "",
    included: [
      "Setup of 1 campaign",
      "Audience Targeting",
      "Ad Creative Setup (Images)",
      "Monthly Performance Report",
    ],
    notIncluded: [
      "Pixel Installation",
      "Video Production",
      "Advanced Retargeting",
      "A/B Testing",
    ],
    color: "from-blue-600 to-indigo-600",
  },
  {
    category: "ART",
    title: "Starter",
    subtitle: "POCKET PACK",
    price: "₹2,999",
    priceLabel: "",
    included: [
      "2 Logo Concepts",
      "3 Revision Rounds",
      "High-Res Exports (JPG/PNG)",
      "Social Media Kit",
    ],
    notIncluded: [
      "Color Palette",
      "Source Files (AI/PSD)",
      "Brand Guidelines Book",
      "Print Materials",
    ],
    color: "from-purple-500 to-purple-600",
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="pricing" className="py-20 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            <span className="text-primary">PRICING</span> PLANS
          </h2>
          <p className="section-subtitle">
            Affordable packages tailored to your business needs
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {pricingPlans.map((plan, index) => (
            <button
              key={plan.category}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                activeIndex === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-secondary"
              }`}
            >
              THE {plan.category}
            </button>
          ))}
        </div>

        {/* Active Card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <div className="card-pricing">
            {/* Header */}
            <div className="text-center mb-8">
              <span
                className={`inline-block px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${pricingPlans[activeIndex].color} mb-4`}
              >
                THE {pricingPlans[activeIndex].category}
              </span>
              <h3 className="text-2xl font-bold">{pricingPlans[activeIndex].title}</h3>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                {pricingPlans[activeIndex].subtitle}
              </p>
            </div>

            {/* Included Features */}
            <div className="space-y-3 mb-6">
              {pricingPlans[activeIndex].included.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Not Included Features */}
            <div className="space-y-3 mb-8 opacity-60">
              {pricingPlans[activeIndex].notIncluded.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span className="text-sm line-through">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="text-4xl font-black text-primary">
                {pricingPlans[activeIndex].price}
              </div>
              <span className="text-sm text-muted-foreground">
                {pricingPlans[activeIndex].priceLabel}
              </span>
            </div>

            {/* CTA */}
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              Get Started Now <ArrowRight className="w-4 h-4" />
            </button>

            {/* Explore Prices Link */}
            <a
              href="#"
              className="block text-center text-primary font-medium text-sm mt-4 hover:underline"
            >
              explore prices →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
