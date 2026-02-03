import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Manasa",
    role: "Team Manager",
    specialty: "Leadership & Operations",
    experience: "5+ Years",
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "Chandra",
    role: "Designer",
    specialty: "Creative UI/UX",
    experience: "Brand Visuals",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Jagadeesh",
    role: "Full Stack Developer",
    specialty: "Web Applications",
    experience: "API Integration",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Kumar",
    role: "Backend Developer",
    specialty: "Performance & Security",
    experience: "Database Management",
    color: "from-green-400 to-green-600",
  },
  {
    name: "Pandu",
    role: "Frontend Developer",
    specialty: "React & UI Logic",
    experience: "Responsive Design",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Rakesh",
    role: "Social Media Manager",
    specialty: "Campaign Strategy",
    experience: "Brand Engagement",
    color: "from-rose-400 to-rose-600",
  },
  {
    name: "Sasi",
    role: "SEO Specialist",
    specialty: "On-page & Off-page",
    experience: "Ranking Growth",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    name: "Ramya",
    role: "Google Ads Expert",
    specialty: "Lead Generation",
    experience: "ROI Optimization",
    color: "from-yellow-400 to-orange-500",
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            team
          </p>
          <h2 className="section-title mb-4">
            <span className="text-primary">Bubbleism</span>
          </h2>
          <p className="section-subtitle">
            Our dedicated professionals who drive our success
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-team group"
            >
              {/* Front */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-90`}
                />

                {/* Avatar Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {member.name[0]}
                    </span>
                  </div>
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-white/80">{member.role}</p>
                    <div className="mt-2 text-xs text-white/60">
                      <p>{member.specialty}</p>
                      <p>{member.experience}</p>
                    </div>
                  </div>
                </div>

                {/* Default Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
