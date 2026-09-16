const galleryImages = [
  {
    src: "/images/gallery/gallery-01.webp",
    alt: "Clinic interior",
  },
  {
    src: "/images/gallery/gallery-02.webp",
    alt: "Doctor consultation",
  },
  {
    src: "/images/gallery/gallery-03.webp",
    alt: "Medical facility",
  },
  {
    src: "/images/gallery/gallery-04.webp",
    alt: "Healthcare environment",
  },
  {
    src: "/images/gallery/gallery-05.webp",
    alt: "Clinic space",
  },
];

export default function PhotoGallery2() {
  return (
    <section
      id="gallery"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D9484]">
              Our Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[44px]">
              A Look Inside Our
              <span className="text-[#0D9484]"> Healthcare Practice</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-600">
            Explore the clinic environment and the spaces designed to provide
            a comfortable and professional healthcare experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Large Image */}
          <div className="overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="h-full min-h-[300px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:min-h-[620px]"
            />
          </div>

          {/* Other Images */}
          {galleryImages.slice(1).map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[300px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}