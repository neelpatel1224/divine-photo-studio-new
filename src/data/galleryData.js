// Sample wedding images with different aspect ratios for masonry layout
export const weddingImages = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop',
    alt: 'Wedding couple in garden',
    width: 800,
    height: 1200,
    title: 'Garden Wedding'
  },
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
    alt: 'Wedding ceremony setup',
    width: 1200,
    height: 800,
    title: 'Ceremony Setup'
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=800&fit=crop',
    alt: 'Wedding rings',
    width: 800,
    height: 800,
    title: 'Wedding Rings'
  },
  {
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=1200&fit=crop',
    alt: 'Bride in white dress',
    width: 800,
    height: 1200,
    title: 'Beautiful Bride'
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop',
    alt: 'Wedding reception',
    width: 1200,
    height: 800,
    title: 'Reception Celebration'
  },
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
    alt: 'Wedding cake',
    width: 800,
    height: 600,
    title: 'Wedding Cake'
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop',
    alt: 'Couple portrait',
    width: 600,
    height: 800,
    title: 'Couple Portrait'
  },
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&h=1000&fit=crop',
    alt: 'Wedding flowers',
    width: 1000,
    height: 1000,
    title: 'Wedding Flowers'
  },
  {
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=600&fit=crop',
    alt: 'Wedding venue',
    width: 1200,
    height: 600,
    title: 'Wedding Venue'
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1000&fit=crop',
    alt: 'Wedding dance',
    width: 800,
    height: 1000,
    title: 'First Dance'
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=900&fit=crop',
    alt: 'Wedding details',
    width: 900,
    height: 900,
    title: 'Wedding Details'
  },
  {
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1000&h=800&fit=crop',
    alt: 'Wedding celebration',
    width: 1000,
    height: 800,
    title: 'Celebration'
  },
  // Additional images for variety
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop',
    alt: 'Wedding details closeup',
    width: 800,
    height: 1200,
    title: 'Wedding Details'
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
    alt: 'Wedding ceremony',
    width: 1200,
    height: 800,
    title: 'Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=800&fit=crop',
    alt: 'Wedding couple',
    width: 800,
    height: 800,
    title: 'Happy Couple'
  }
];

// Sample couple stories
export const coupleStories = [
  {
    id: 1,
    name: "Sarah & Michael",
    date: "June 15, 2024",
    location: "Garden Estate, California",
    story: "A romantic garden wedding with 200 guests celebrating their love story that began in college. The ceremony was held under a beautiful floral arch with the golden hour providing the perfect lighting for their vows.",
    images: weddingImages.slice(0, 5)
  },
  {
    id: 2,
    name: "Emma & David",
    date: "August 22, 2024",
    location: "Beach Resort, Hawaii",
    story: "A dreamy beach wedding with sunset vows and tropical celebrations. The couple exchanged rings as the sun set over the Pacific, creating a magical moment for all their guests.",
    images: weddingImages.slice(5, 10)
  },
  {
    id: 3,
    name: "Jessica & Ryan",
    date: "September 10, 2024",
    location: "Historic Mansion, New York",
    story: "An elegant mansion wedding with vintage charm and modern sophistication. The historic venue provided the perfect backdrop for their classic yet contemporary celebration.",
    images: weddingImages.slice(10, 15)
  },
  {
    id: 4,
    name: "Amanda & James",
    date: "October 5, 2024",
    location: "Vineyard Estate, Napa Valley",
    story: "A sophisticated vineyard wedding surrounded by rolling hills and grapevines. The rustic elegance of the venue perfectly complemented their intimate celebration.",
    images: weddingImages.slice(0, 4)
  },
  {
    id: 5,
    name: "Sophie & Thomas",
    date: "November 20, 2024",
    location: "Mountain Lodge, Colorado",
    story: "A cozy mountain wedding with breathtaking views and warm hospitality. The couple celebrated their love surrounded by family and friends in the heart of the Rockies.",
    images: weddingImages.slice(4, 8)
  }
];

// Gallery categories for filtering
export const galleryCategories = [
  {
    id: 'all',
    name: 'All Photos',
    description: 'Complete collection of wedding moments'
  },
  {
    id: 'ceremony',
    name: 'Ceremony',
    description: 'Sacred moments of vows and rings'
  },
  {
    id: 'reception',
    name: 'Reception',
    description: 'Celebration and festivities'
  },
  {
    id: 'details',
    name: 'Details',
    description: 'Beautiful wedding details and decor'
  },
  {
    id: 'portraits',
    name: 'Portraits',
    description: 'Couple and family portraits'
  }
];
