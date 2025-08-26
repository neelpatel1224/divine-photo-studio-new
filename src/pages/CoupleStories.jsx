import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FilterNav from "../components/FilterNav";
import StoryCard from "../components/StoryCard";
import storiesData from "../data/stories.json";

export default function CoupleStories() {
  const [stories, setStories] = useState(storiesData);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Stories" },
    { value: "destination", label: "Destination" },
    { value: "traditional", label: "Traditional" },
    { value: "beach", label: "Beach" },
    { value: "urban", label: "Urban" },
  ];

  useEffect(() => {
    if (activeCategory === "all") {
      setStories(storiesData);
    } else {
      const filtered = storiesData.filter(story => story.category === activeCategory);
      setStories(filtered);
    }
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[65vh] lg:h-[70vh] min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/hero1.jpg"
            alt="Couple Stories Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 sm:mb-6 lg:mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Love Stories
              </h1>
              <div className="w-20 sm:w-24 lg:w-28 h-0.5 sm:h-1 bg-[#D4AF37] mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-200 font-light leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto"
            >
              Every couple has a unique story. We capture the moments that make yours unforgettable.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <FilterNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Stories Grid */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
              Featured Couples
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto">
              Discover the beautiful love stories we've had the privilege to capture
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {stories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-r from-[#1A3455] to-[#14273F]">
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-white mb-6 sm:mb-8 lg:mb-10">
              Ready to Create Your Story?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 lg:mb-12 max-w-2xl lg:max-w-3xl mx-auto">
              Let us capture the magic of your special day and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-semibold bg-[#D4AF37] text-[#1A3455] rounded-lg hover:bg-[#B8941F] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Book Your Session
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-semibold bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#1A3455] transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
