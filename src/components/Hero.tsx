import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import heroWoman from "@/assets/hero.png";

// const floatingBadges = [
//   { name: "React", icon: "⚛️", position: "top-[15%] left-[5%]", delay: 0 },
//   { name: "Google Workspace", icon: "🔧", position: "top-[8%] right-[10%]", delay: 0.2 },
//   { name: "GoDaddy", icon: "🌐", position: "top-[25%] right-[5%]", delay: 0.4 },
//   { name: "SEO SMM", icon: "📈", position: "bottom-[30%] right-[3%]", delay: 0.6 },
//   { name: "Shopify", icon: "🛒", position: "bottom-[20%] right-[15%]", delay: 0.8 },
// ];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-hero-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            {/* Spaced Letters */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl tracking-[0.5em] text-muted-foreground font-medium mb-4"
            >
              B U B B L E S
            </motion.p>

            {/* Main Headline */}
            <h1 className="section-title leading-[1.1] mb-6">
              <span className="text-primary">A TEAM,</span>
              <br />
              <span className="text-primary">NOT A</span>
              <br />
              <span className="text-primary">FREELANCER.</span>
            </h1>

            {/* Tagline */}
            <div className="mb-8">
              <p className="text-xs tracking-wider text-primary font-semibold mb-2">APP.CO</p>
              <p className="text-foreground font-semibold text-lg italic">FREELANCE IS A GAMBLE.</p>
              <p className="text-foreground font-medium">
                WE BUILD SYSTEMS THAT SCALE - AND
                <br />
                WE DON'T VANISH AFTER DELIVERY.
              </p>
            </div>

      
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Orange Circle Background */}
            <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-primary rounded-full opacity-90" />

            {/* Hero Image */}
            <img
              src={heroWoman}
              alt="Professional Team Member"
              className="relative z-10 w-auto h-[450px] md:h-[550px] object-contain"
            />

            
          </motion.div>
        </div>
      </div>

      {/* Quick Quote Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="bg-dark py-4 mt-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="input-quote flex-1"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="input-quote flex-1"
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="input-quote flex-1"
            />
            <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
              QUICK QUOTE <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
