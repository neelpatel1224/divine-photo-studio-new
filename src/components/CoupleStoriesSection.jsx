export default function CoupleStoriesSection() {
  const stories = [
    {
      name: "Aarav & Meera",
      photo: "/assets/m22.jpg",
      text: "Our wedding shoot was absolutely magical! The team captured every emotion perfectly.",
      rating: 5
    },
    {
      name: "Rahul & Isha",
      photo: "/assets/m23.jpg",
      text: "The photos were so cinematic! We couldn't stop smiling going through them.",
      rating: 5
    },
    {
      name: "Kabir & Priya",
      photo: "/assets/m24.jpg",
      text: "Hands down, the best experience we've had. Thank you for making our day timeless!",
      rating: 5
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Couple Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real love. Real moments. Here's what our amazing couples have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {stories.map((story, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-brand/10 mr-4">
                  <img
                    src={story.photo}
                    alt={`${story.name} - Happy couple`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-brand mb-1 leading-tight">
                    {story.name}
                  </h3>
                  <div className="flex items-center">
                    {renderStars(story.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                "{story.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
