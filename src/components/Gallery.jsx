import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import './Gallery.css';

export default function Gallery({ images = [], title = "Photo Gallery" }) {
  const [index, setIndex] = useState(-1);

  // Transform images to the format expected by react-photo-album
  const photos = images.map((image, index) => ({
    src: image.url || image,
    alt: image.alt || `Gallery image ${index + 1}`,
    width: image.width || 800,
    height: image.height || 600,
    title: image.title || `Image ${index + 1}`,
  }));

  const slides = photos.map(({ src, alt, title }) => ({ src, alt, title }));

  const handlePhotoClick = useCallback(({ index }) => setIndex(index), []);

  const handleClose = useCallback(() => setIndex(-1), []);

  // Error handling for failed image loads
  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YWFhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
  };

  return (
    <div className="min-h-screen bg-wedding-cream">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing beautiful moments and timeless memories
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <PhotoAlbum
            photos={photos}
            layout="masonry"
            columns={(containerWidth) => {
              if (containerWidth < 640) return 1; // mobile
              if (containerWidth < 768) return 2; // tablet
              if (containerWidth < 1024) return 3; // small desktop
              if (containerWidth < 1280) return 4; // desktop
              return 5; // large desktop
            }}
            spacing={16}
            padding={8}
            targetRowHeight={300}
            onClick={handlePhotoClick}
            componentsProps={{
              containerProps: {
                className: "gallery-container"
              },
              imageProps: {
                className: "gallery-image",
                onError: handleImageError,
                loading: "lazy"
              }
            }}
          />
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={handleClose}
          plugins={[Thumbnails, Counter, Zoom, Fullscreen, Slideshow]}
          thumbnails={{
            position: "bottom",
            width: 120,
            height: 80,
            padding: 4,
            border: 2,
            borderRadius: 8,
            gap: 8,
            imageFit: "contain",
          }}
          counter={{
            container: {
              style: {
                top: "unset",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1rem",
                background: "rgba(0, 0, 0, 0.8)",
                color: "white",
                textAlign: "center",
              },
            },
          }}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
            scrollToZoom: true,
          }}
          fullscreen={{
            ref: null,
            button: {
              position: "top",
            },
          }}
          slideshow={{
            autoplay: false,
            delay: 3000,
            interval: 5000,
          }}
          carousel={{
            finite: false,
            preload: 2,
            padding: "16px",
            spacing: "30%",
            imageFit: "contain",
          }}
          animation={{
            fade: 300,
            swipe: 500,
          }}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true,
          }}
        />
      </div>
    </div>
  );
}
