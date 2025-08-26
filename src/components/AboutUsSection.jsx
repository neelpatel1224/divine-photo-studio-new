import { Link } from "react-router-dom";

export default function AboutUsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Image */}
          <div className="flex-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/studio-imgae.jpg"
                alt="Our professional photography studio space"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About Divine Photo Studio
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're a passionate team of photographers and filmmakers dedicated to capturing the essence of your love, traditions, and celebration.
              With over 10 years of experience, we've turned countless fleeting moments into timeless stories.
            </p>
            <ul className="text-gray-700 text-base space-y-3 text-left">
              <li className="flex items-center gap-3">
                <span className="text-2xl">📸</span>
                <span>Over 500+ weddings captured</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🎥</span>
                <span>Cinematic films that feel like Bollywood dreams</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <span>Personalized experience with every couple</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                to="/about"
                className="btn-primary"
                aria-label="Learn more about our studio"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
