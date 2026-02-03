import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Heart, 
  Coffee, 
  GraduationCap, 
  Zap,
  ArrowRight,
  Send
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const perks = [
  { icon: Heart, title: "Health Insurance", description: "Comprehensive medical coverage" },
  { icon: Coffee, title: "Free Snacks", description: "Unlimited coffee & refreshments" },
  { icon: GraduationCap, title: "Learning Budget", description: "₹50K annual learning allowance" },
  { icon: Zap, title: "Flexible Hours", description: "Work-life balance matters" },
];

const jobs = [
  {
    id: 1,
    title: "Senior SEO Specialist",
    department: "Marketing",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹6-10 LPA",
    description: "Lead SEO strategies and drive organic growth for our clients.",
    requirements: ["3+ years SEO experience", "Google Analytics certified", "Strong analytical skills"],
  },
  {
    id: 2,
    title: "Social Media Manager",
    department: "Marketing",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹4-7 LPA",
    description: "Manage social media presence for multiple brands.",
    requirements: ["2+ years SMM experience", "Content creation skills", "Meta Business certified"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "Development",
    location: "Remote",
    type: "Full-time",
    salary: "₹8-15 LPA",
    description: "Build scalable web applications for our clients.",
    requirements: ["React/Next.js expertise", "Node.js experience", "Database management"],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹5-9 LPA",
    description: "Create beautiful, user-centric designs.",
    requirements: ["Figma proficiency", "Portfolio required", "User research experience"],
  },
  {
    id: 5,
    title: "Google Ads Specialist",
    department: "Marketing",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹5-8 LPA",
    description: "Manage and optimize Google Ads campaigns.",
    requirements: ["Google Ads certified", "2+ years PPC experience", "Data analysis skills"],
  },
  {
    id: 6,
    title: "Content Writer",
    department: "Content",
    location: "Remote",
    type: "Part-time",
    salary: "₹20-40K/month",
    description: "Create engaging content for blogs, social media, and websites.",
    requirements: ["Excellent writing skills", "SEO knowledge", "Research abilities"],
  },
];

const Career = () => {
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
                <Briefcase className="w-4 h-4" />
                Careers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Join the <span className="text-primary">Bubbles Team</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of a dynamic team that's shaping the future of digital marketing. 
                We're always looking for talented individuals to join us.
              </p>
              <a href="#openings" className="btn-primary inline-flex items-center gap-2">
                View Open Positions <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Why Join <span className="text-primary">Us?</span>
            </h2>
            <p className="section-subtitle">
              We offer more than just a job - we offer a career you'll love
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-card text-center hover:shadow-card-hover transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Open <span className="text-primary">Positions</span>
            </h2>
            <p className="section-subtitle">
              Find your perfect role and apply today
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                        {job.department}
                      </span>
                      <span className="bg-secondary text-foreground text-xs px-2 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" /> {job.salary}
                      </span>
                    </div>
                  </div>
                  
                  <button className="btn-primary whitespace-nowrap">
                    Apply Now
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req) => (
                      <span key={req} className="text-xs bg-secondary px-2 py-1 rounded">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume 
            and we'll reach out when we have a suitable position.
          </p>
          <a 
            href="mailto:careers@bubblesmedia.com" 
            className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center gap-2"
          >
            <Send className="w-5 h-5" /> Send Your Resume
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
