import { motion } from "framer-motion";

export default function GalleryGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
