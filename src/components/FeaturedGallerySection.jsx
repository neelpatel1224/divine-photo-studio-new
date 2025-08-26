export default function FeaturedGallerySection() {
  const images = [
    { src: "/assets/m1.jpg", alt: "Traditional Indian wedding ceremony", span: "row-span-2" },
    { src: "/assets/m2.jpg", alt: "Modern wedding couple portrait", span: "row-span-1" },
    { src: "/assets/m19.jpg", alt: "Engagement celebration", span: "row-span-1" },
    { src: "/assets/m3.jpg", alt: "Wedding reception celebration", span: "row-span-2" },
    { src: "/assets/m4.jpg", alt: "Bridal portrait session", span: "row-span-1" },
    { src: "/assets/m5.jpg", alt: "Wedding day preparation", span: "row-span-2" },
    { src: "/assets/m6.jpg", alt: "Couple wedding ceremony", span: "row-span-1" },
    { src: "/assets/m7.jpg", alt: "Wedding reception details", span: "row-span-1" },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Selected Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated collection of our finest photography moments
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
