import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MapPin, Calendar } from "lucide-react";

export default function StoryCard({ story, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <Link to={`/couple-stories/${story.id}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 bg-white">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={story.thumbnail}
              alt={`${story.title} wedding story`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  <span className="text-xs sm:text-sm font-medium text-[#D4AF37]">Love Story</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold mb-2 sm:mb-3">{story.title}</h3>
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-200">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-gray-900 mb-2 sm:mb-3">{story.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">{story.location}</p>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm text-[#1A3455] font-medium capitalize">{story.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-xs sm:text-sm text-gray-500">{story.date}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
