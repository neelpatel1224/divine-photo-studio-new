import { Link } from "react-router-dom";

export default function Hero() {
  const leftImages = [
    "/assets/hero1.jpg",
    "/assets/hero2.jpg",
    "/assets/hero3.jpg",
    "/assets/hero4.jpg",
    "/assets/hero5.jpg",
    "/assets/hero6.jpg",
  ];

  const rightImages = [
    "/assets/hero7.jpg",
    "/assets/hero8.jpg",
    "/assets/hero9.jpg",
    "/assets/hero10.jpg",
    "/assets/hero11.jpg",
    "/assets/hero12.jpg",
  ];

  const repeatImages = (images) => [...images, ...images];

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Capture Your Moments
              <br />
              <span className="text-brand">Stunning Photography</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to our photo studio, where we transform your special moments
              into timeless memories. Our dedicated team is here to provide you with
              an unforgettable photography experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="btn-primary"
                aria-label="Book your photography session"
              >
                Book Now
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary"
                aria-label="View our photography portfolio"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right: Dual Column Seamless Scrolling Gallery */}
          <div className="flex-1 flex gap-4 max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-hidden">
            {/* Column 1 (scrolls up) */}
            <div className="w-1/2">
              <div className="flex flex-col gap-4 animate-scroll-up">
                {repeatImages(leftImages).map((src, i) => (
                  <div key={`left-${i}`} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={src}
                      alt={`Wedding photography sample ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 (scrolls down) */}
            <div className="w-1/2">
              <div className="flex flex-col gap-4 animate-scroll-down">
                {repeatImages(rightImages).map((src, i) => (
                  <div key={`right-${i}`} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={src}
                      alt={`Portrait photography sample ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

