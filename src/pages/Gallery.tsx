import { useState } from 'react';
import Card from '../components/Card';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = [
    {
      url: '/Data/Golden_Silk_hair_patch.jpg',
      category: 'women',
      caption: 'Golden Silk Hair Patch - Premium Quality',
      type: 'image',
    },
    {
      url: '/Data/Golden_hair_patch.jpg',
      category: 'women',
      caption: 'Golden Hair Patch - Natural Look',
      type: 'image',
    },
    {
      url: '/Data/Australian_mirage.jpg',
      category: 'women',
      caption: 'Australian Mirage - Premium Hair',
      type: 'image',
    },
    {
      url: '/Data/gallery/3.mp4',
      category: 'men',
      caption: 'Men\'s Hair System - Professional Look',
      type: 'video',
    },
    {
      url: '/Data/gallery/4.mp4',
      category: 'men',
      caption: 'Natural Hairline Restoration',
      type: 'video',
    },
    {
      url: '/Data/gallery/5.mp4',
      category: 'men',
      caption: 'Active Lifestyle Hair System',
      type: 'video',
    },
    {
      url: '/Data/gallery/1.mp4',
      category: 'products',
      caption: 'Premium Quality Hair Patches',
      type: 'video',
    },
    {
      url: '/Data/gallery/2.mp4',
      category: 'products',
      caption: 'Various Wig Collections',
      type: 'video',
    },
    {
      url: '/Data/gallery/6.mp4',
      category: 'products',
      caption: 'Professional Hair Solutions',
      type: 'video',
    },
    {
      url: '/Data/gallery/78.mp4',
      category: 'products',
      caption: 'Advanced Hair Systems',
      type: 'video',
    },
    {
      url: '/Data/gallery/9.mp4',
      category: 'products',
      caption: 'Premium Hair Products',
      type: 'video',
    },
    {
      url: '/Data/mf_patch.jpg',
      category: 'services',
      caption: 'MF Hair Patch - Professional Grade',
      type: 'image',
    },
    {
      url: '/Data/china_mirage.jpg',
      category: 'services',
      caption: 'China Mirage - High Quality Hair',
      type: 'image',
    },
    {
      url: '/Data/golden_miraz.jpg',
      category: 'women',
      caption: 'Golden Miraz - Premium Hair Solution',
      type: 'image',
    },
  ];

  const filteredImages = activeFilter === 'all' ? images : images.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-[#8B1538] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600">Transformations that speak for themselves</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'women', 'men', 'products', 'services'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeFilter === filter
                  ? 'bg-[#8B1538] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              hover
              className="overflow-hidden cursor-pointer"
              onClick={() => setLightboxImage(image.url)}
            >
              <div className="relative group">
                {image.type === 'video' ? (
                  <video 
                    src={image.url} 
                    className="w-full h-72 object-cover" 
                    muted 
                    loop 
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                ) : (
                  <img src={image.url} alt={image.caption} className="w-full h-72 object-cover" />
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white text-center px-4 font-medium">{image.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
            {lightboxImage.endsWith('.mp4') ? (
              <video 
                src={lightboxImage} 
                className="max-w-full max-h-full object-contain" 
                controls 
                autoPlay
                loop
              />
            ) : (
              <img src={lightboxImage} alt="Enlarged view" className="max-w-full max-h-full object-contain" />
            )}
          </div>
        )}

        <section className="mt-16 bg-gradient-to-r from-[#F5E6EA] to-[#E4B5C0] rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-serif text-[#8B1538] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Follow Our Transformations
          </h2>
          <p className="text-gray-700 mb-6">@h2h_hairstudio_ on Instagram</p>
          <a
            href="https://www.instagram.com/h2h_hairstudio_/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B1538] text-white px-8 py-3 rounded-lg hover:bg-[#A0153E] transition font-medium"
          >
            Follow Us on Instagram
          </a>
        </section>
      </div>
    </div>
  );
}
