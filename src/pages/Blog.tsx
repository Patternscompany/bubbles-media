import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = ["All", "SEO", "Social Media", "Advertising", "Web Design", "E-commerce"];

const blogPosts = [
  {
    id: 1,
    title: "10 SEO Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging SEO trends that will shape search engine optimization in the coming year.",
    category: "SEO",
    author: "Sasi Kumar",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    image: "🔍",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 2,
    title: "Instagram Reels: The Complete Guide",
    excerpt: "Master Instagram Reels with our comprehensive guide. Learn how to create engaging short-form content that drives results.",
    category: "Social Media",
    author: "Rakesh Sharma",
    date: "Jan 12, 2024",
    readTime: "8 min read",
    image: "📱",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: 3,
    title: "Google Ads Quality Score Explained",
    excerpt: "Understanding Quality Score is crucial for successful PPC campaigns. Here's everything you need to know.",
    category: "Advertising",
    author: "Ramya Devi",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    image: "📊",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 4,
    title: "Website Speed Optimization Tips",
    excerpt: "A fast website is essential for SEO and user experience. Learn how to optimize your site speed effectively.",
    category: "Web Design",
    author: "Jagadeesh",
    date: "Jan 8, 2024",
    readTime: "7 min read",
    image: "⚡",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 5,
    title: "Shopify vs WooCommerce: Which to Choose?",
    excerpt: "Confused between Shopify and WooCommerce? We break down the pros and cons of each platform.",
    category: "E-commerce",
    author: "Kumar",
    date: "Jan 5, 2024",
    readTime: "10 min read",
    image: "🛒",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 6,
    title: "Creating a Social Media Content Calendar",
    excerpt: "Learn how to plan and organize your social media content for maximum engagement and consistency.",
    category: "Social Media",
    author: "Manasa",
    date: "Jan 3, 2024",
    readTime: "6 min read",
    image: "📅",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 7,
    title: "Local SEO: A Complete Guide for 2024",
    excerpt: "Dominate local search results with our comprehensive local SEO strategy guide.",
    category: "SEO",
    author: "Sasi Kumar",
    date: "Dec 28, 2023",
    readTime: "9 min read",
    image: "📍",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 8,
    title: "Meta Ads Targeting Best Practices",
    excerpt: "Maximize your Facebook and Instagram ad performance with these proven targeting strategies.",
    category: "Advertising",
    author: "Hema",
    date: "Dec 25, 2023",
    readTime: "7 min read",
    image: "🎯",
    color: "from-blue-600 to-indigo-600",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                Our Blog
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Insights & <span className="text-primary">Resources</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Stay updated with the latest trends, tips, and strategies in digital marketing.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-background sticky top-20 z-30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
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

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group cursor-pointer"
                >
                  {/* Image */}
                  <div className={`aspect-video bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                    <span className="text-5xl group-hover:scale-110 transition-transform">
                      {post.image}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-bold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest marketing tips and insights delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="btn-primary bg-white text-primary hover:bg-gray-100 px-6">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
