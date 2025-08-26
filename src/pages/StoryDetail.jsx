import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Share2, Play } from "lucide-react";
import Lightbox from "../components/Lightbox";
import storiesData from "../data/stories.json";

export default function StoryDetail() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundStory = storiesData.find(s => s.id === id);
    setStory(foundStory);
  }, [id]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-6">Story Not Found</h1>
          <Link to="/couple-stories" className="btn-primary text-lg px-8 py-4">
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % story.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + story.images.length) % story.images.length);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Large horizontal image */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={story.heroImage}
            alt={`${story.title} wedding hero`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            to="/couple-stories"
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>

        {/* Hero Content - Couple Names and Brand */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                {story.title}
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl text-[#D4AF37] font-medium mb-8">
                DIVINE PHOTO STUDIO
              </div>
              <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#1A3455] transition-all duration-300 text-lg font-semibold">
                VIEW GALLERY
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Text Band Section - Couple names and icons */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {story.title}
              </h2>
              <p className="text-lg text-gray-600">
                DIVINE PHOTO STUDIO
              </p>
            </div>
            
            {/* Interactive Icons */}
            <div className="flex items-center gap-4">
              <button className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-all duration-300">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-all duration-300">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-all duration-300">
                <Play className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - 2 rows of 5 images each */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row - 5 images */}
          <div className="grid grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
            {story.images.slice(0, 5).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`${story.title} wedding photo ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Watermark */}
                  <div className="absolute top-2 right-2 opacity-70">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-[#1A3455]">
                      DIVINE
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 5 images */}
          <div className="grid grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {story.images.slice(5, 10).map((image, index) => (
              <motion.div
                key={index + 5}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index + 5)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`${story.title} wedding photo ${index + 6}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Watermark */}
                  <div className="absolute top-2 right-2 opacity-70">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-[#1A3455]">
                      DIVINE
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#1A3455] to-[#14273F]">
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-white mb-6 sm:mb-8 lg:mb-10">
              Ready to Tell Your Story?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 lg:mb-12 max-w-2xl lg:max-w-3xl mx-auto">
              Let us capture the beautiful moments of your wedding day and create a story as unique as your love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-semibold bg-[#D4AF37] text-[#1A3455] rounded-lg hover:bg-[#B8941F] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Book Your Wedding
              </Link>
              <Link
                to="/couple-stories"
                className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-semibold bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#1A3455] transition-all duration-300"
              >
                View More Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentImage={currentImageIndex}
        images={story.images}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </main>
  );
}
