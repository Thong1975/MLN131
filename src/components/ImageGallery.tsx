

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => openLightbox(image, index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm">{image.title}</p>
                <span className="text-xs text-accent-300">{image.category}</span>
              </div>
              <div className="absolute top-2 right-2">
                <ZoomIn className="text-white" size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent-400 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-accent-400 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-accent-400 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <span className="inline-block px-3 py-1 bg-accent-500 text-primary-900 rounded-full text-sm font-semibold">
                  {selectedImage.category}
                </span>
                <p className="text-gray-400 text-sm mt-2">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                    setSelectedImage(images[idx]);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? 'border-accent-400 scale-110'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


