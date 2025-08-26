# WeddingNama-Style Photo Gallery

A responsive, masonry-style photo gallery built with React, Tailwind CSS, and modern photo gallery libraries.

## Features

### 🎨 Masonry Grid Layout
- **Responsive columns**: 1 column on mobile, 2-3 on tablets, 4+ on desktops
- **Dynamic sizing**: Supports different image aspect ratios (portrait, square, landscape)
- **Smooth animations**: Framer Motion animations for enhanced UX

### 🖼️ Lightbox Gallery
- **Full-featured lightbox**: Zoom, fullscreen, slideshow, thumbnails
- **Keyboard navigation**: Arrow keys, Escape to close
- **Touch gestures**: Swipe, pinch to zoom on mobile
- **Image counter**: Shows current position in gallery

### 🎯 UI/UX Design
- **Clean white background**: WeddingNama-inspired design
- **Generous spacing**: Proper padding and margins
- **Subtle shadows**: Elegant depth and dimension
- **Hover effects**: Scale-up and light overlay on images
- **Loading states**: Smooth loading animations

### 📱 Responsive Design
- **Mobile-first**: Optimized for all screen sizes
- **Touch-friendly**: Large touch targets on mobile
- **Performance**: Lazy loading and optimized images

## File Structure

```
src/
├── components/
│   ├── Gallery.jsx          # Main gallery component
│   └── Gallery.css          # Gallery-specific styles
├── pages/
│   └── Couples.jsx          # Gallery showcase page
├── data/
│   └── galleryData.js       # Sample images and couple stories
└── App.jsx                  # Updated with new route
```

## Components

### Gallery.jsx
The main gallery component that handles:
- Masonry layout using `react-photo-album`
- Lightbox functionality with `yet-another-react-lightbox`
- Responsive column configuration
- Error handling for failed image loads
- Loading states and animations

### Couples.jsx
The showcase page featuring:
- Hero section with couple story selection
- Dynamic gallery display based on selected story
- Call-to-action section
- Smooth page transitions

## Usage

### Basic Gallery Implementation

```jsx
import Gallery from './components/Gallery';

const images = [
  {
    url: 'path/to/image.jpg',
    alt: 'Image description',
    width: 800,
    height: 600,
    title: 'Image Title'
  }
];

function MyPage() {
  return (
    <Gallery 
      images={images} 
      title="My Photo Gallery"
    />
  );
}
```

### Adding New Couple Stories

Edit `src/data/galleryData.js`:

```javascript
export const coupleStories = [
  {
    id: 6,
    name: "New Couple",
    date: "December 15, 2024",
    location: "Venue Name, Location",
    story: "Description of their wedding story...",
    images: weddingImages.slice(0, 5) // Use subset of images
  }
];
```

### Customizing Styles

The gallery uses Tailwind CSS classes and custom CSS in `Gallery.css`. Key customization points:

- **Colors**: Update `wedding-gold`, `wedding-cream` in `tailwind.config.js`
- **Spacing**: Modify padding and margins in component classes
- **Animations**: Adjust Framer Motion transition values
- **Lightbox**: Configure lightbox plugins in `Gallery.jsx`

## Dependencies

```json
{
  "react-photo-album": "^2.6.0",
  "yet-another-react-lightbox": "^4.0.0",
  "framer-motion": "^12.19.1"
}
```

## Performance Optimizations

1. **Lazy Loading**: Images load as they enter viewport
2. **Optimized Images**: Use appropriate sizes and formats
3. **Error Handling**: Fallback images for failed loads
4. **Smooth Animations**: Hardware-accelerated CSS transforms

## Browser Support

- Modern browsers with CSS Grid support
- Mobile browsers with touch gesture support
- Progressive enhancement for older browsers

## Customization Guide

### Adding New Image Categories

1. Update `galleryCategories` in `galleryData.js`
2. Add filtering logic in the gallery component
3. Style category buttons in the UI

### Changing Layout

1. Modify `columns` function in `Gallery.jsx`
2. Adjust `spacing` and `padding` values
3. Update responsive breakpoints in Tailwind config

### Styling Modifications

1. Edit `Gallery.css` for component-specific styles
2. Update Tailwind classes in components
3. Modify lightbox theme in component props

## Troubleshooting

### Common Issues

1. **Images not loading**: Check image URLs and CORS settings
2. **Layout issues**: Verify image dimensions are provided
3. **Performance**: Optimize image sizes and use lazy loading
4. **Mobile issues**: Test touch gestures and responsive behavior

### Debug Tips

- Check browser console for errors
- Verify all dependencies are installed
- Test on different devices and screen sizes
- Validate image URLs and formats

## Future Enhancements

- [ ] Image filtering by category
- [ ] Search functionality
- [ ] Social sharing integration
- [ ] Download capabilities
- [ ] Advanced image editing tools
- [ ] Analytics tracking
