import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { weddingImages, coupleStories } from '../data/galleryData';

export default function Couples() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-wedding-cream flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-wedding-gold border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wedding-cream">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-b from-white to-wedding-cream"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
            Couple Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover beautiful love stories and timeless moments captured through our lens
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {coupleStories.map((story) => (
              <motion.button
                key={story.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedStory(story)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedStory?.id === story.id
                    ? 'bg-wedding-gold text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {story.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="py-16">
        {selectedStory ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-4 mb-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                  {selectedStory.name}
                </h2>
                <p className="text-lg text-gray-600 mb-2">
                  {selectedStory.date} • {selectedStory.location}
                </p>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  {selectedStory.story}
                </p>
              </div>
            </div>
            <Gallery 
              images={selectedStory.images} 
              title={`${selectedStory.name}'s Wedding`}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Gallery 
              images={weddingImages} 
              title="Featured Weddings"
            />
          </motion.div>
        )}
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            Ready to Capture Your Story?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you create beautiful memories that will last a lifetime
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-wedding-gold text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Your Session
          </motion.button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
