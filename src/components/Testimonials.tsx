import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Bubbles Media transformed our online presence completely. Their SEO strategies helped us rank on the first page for our key terms, resulting in a 200% increase in organic traffic.",
    author: "Rajesh Kumar",
    role: "Business Owner",
  },
  {
    quote:
      "The social media campaigns designed by Bubbles Media helped us increase our engagement by 150% and generated a significant number of qualified leads for our business.",
    author: "Priya Sharma",
    role: "Marketing Director",
  },
  {
    quote:
      "Working with Bubbles Media on our Google Ads campaigns was a game-changer. They optimized our ad spend and increased our conversion rate by 75%.",
    author: "Vikram Singh",
    role: "E-commerce Manager",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What our clients say about working with us
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-card rounded-full shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-card rounded-full shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div>
                <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
