import { motion } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = ["All", "Web Design", "Social Media", "Branding", "Advertising"];

const projects = [
  {
    id: 1,
    title: "TechStart Website",
    category: "Web Design",
    image: "🌐",
    color: "from-blue-500 to-blue-600",
    description: "Modern SaaS landing page with conversion optimization",
  },
  {
    id: 2,
    title: "FoodieBox Campaign",
    category: "Social Media",
    image: "🍕",
    color: "from-red-500 to-orange-500",
    description: "Instagram campaign that drove 200% engagement increase",
  },
  {
    id: 3,
    title: "EcoLife Branding",
    category: "Branding",
    image: "🌿",
    color: "from-green-500 to-emerald-500",
    description: "Complete brand identity for sustainable products company",
  },
  {
    id: 4,
    title: "Fashion Hub Ads",
    category: "Advertising",
    image: "👗",
    color: "from-pink-500 to-purple-500",
    description: "Meta ads campaign with 5x ROAS",
  },
  {
    id: 5,
    title: "FinanceFlow App",
    category: "Web Design",
    image: "💰",
    color: "from-emerald-500 to-teal-500",
    description: "Financial dashboard with intuitive UX",
  },
  {
    id: 6,
    title: "GymFit Social",
    category: "Social Media",
    image: "💪",
    color: "from-orange-500 to-red-500",
    description: "Fitness brand social media management",
  },
  {
    id: 7,
    title: "PetCare Logo",
    category: "Branding",
    image: "🐾",
    color: "from-yellow-500 to-orange-500",
    description: "Friendly brand identity for pet services",
  },
  {
    id: 8,
    title: "TravelJoy Ads",
    category: "Advertising",
    image: "✈️",
    color: "from-cyan-500 to-blue-500",
    description: "Google Ads campaign for travel agency",
  },
  {
    id: 9,
    title: "CoffeeBean Shop",
    category: "Web Design",
    image: "☕",
    color: "from-amber-600 to-amber-800",
    description: "E-commerce store with smooth checkout",
  },
  {
    id: 10,
    title: "BeautyGlow Campaign",
    category: "Social Media",
    image: "💄",
    color: "from-rose-500 to-pink-500",
    description: "Influencer marketing campaign",
  },
  {
    id: 11,
    title: "StartupX Branding",
    category: "Branding",
    image: "🚀",
    color: "from-violet-500 to-purple-600",
    description: "Bold startup identity design",
  },
  {
    id: 12,
    title: "HomeDecor Ads",
    category: "Advertising",
    image: "🏠",
    color: "from-slate-500 to-slate-700",
    description: "Performance marketing for home decor",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Work
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Project <span className="text-primary">Gallery</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of successful projects across web design, 
                social media, branding, and advertising.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background sticky top-20 z-30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform">
                      {project.image}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-xs text-white/70 uppercase tracking-wider mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card rounded-3xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center mb-6`}>
              <span className="text-5xl">{selectedProject.image}</span>
            </div>

            <span className="text-xs text-primary uppercase tracking-wider font-semibold">
              {selectedProject.category}
            </span>
            <h2 className="text-2xl font-bold mt-1 mb-4">{selectedProject.title}</h2>
            <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

            <button className="btn-primary w-full flex items-center justify-center gap-2">
              View Project <ExternalLink className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
