import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Focus, Clock, Mail, Calendar } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
              About Our Company
            </h2>
            
            <div className="space-y-8 mt-8">
              {/* Mission */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Elaborate on your company's mission and how you envision championing the goals, objectives,
                    and desired outcomes of your new client or customer.
                  </p>
                </div>
              </div>

              {/* Focus */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Focus className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enumerate the key activities your company will provide the new client or customer.
                    This way, the new client or customer knows what to expect from you.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Add more items to this list as needed.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Team Image Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-orange-light/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👥</span>
                  </div>
                  <p className="text-lg font-medium text-foreground">Our Team</p>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-xl shadow-card flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Operating Hours</p>
                  <p className="text-sm font-medium">7 AM to 4 PM (AEST)</p>
                </div>
              </div>
              
              <div className="bg-card p-4 rounded-xl shadow-card flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Schedule</p>
                  <p className="text-sm font-medium">Calendar Link</p>
                </div>
              </div>
              
              <div className="bg-card p-4 rounded-xl shadow-card flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">info@bubblesmedia.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
