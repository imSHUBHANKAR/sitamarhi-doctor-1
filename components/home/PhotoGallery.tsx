const galleryImages = [
  {
    src: "/images/gallery/gallery-01.webp",
    alt: "Clinic environment",
  },
  {
    src: "/images/gallery/gallery-02.webp",
    alt: "Doctor consultation room",
  },
  {
    src: "/images/gallery/gallery-03.webp",
    alt: "Healthcare facility",
  },
  {
    src: "/images/gallery/gallery-04.webp",
    alt: "Professional medical consultation",
  },
  {
    src: "/images/gallery/gallery-05.webp",
    alt: "Clinic interior",
  },
  {
    src: "/images/gallery/gallery-06.webp",
    alt: "Healthcare environment",
  },
];

export default function PhotoGallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066B3]">
              Gallery
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A Look Inside Our
              <span className="text-[#0066B3]"> Healthcare Space</span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Explore the clinic environment and spaces designed to provide a
            comfortable and professional healthcare experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${
                index === 0
                  ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                  : "aspect-square"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-slate-900/0 transition-colors duration-300 group-hover:bg-slate-900/20" />

              {/* Hover Icon */}
              <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 text-slate-700"
                >
                  <circle cx="11" cy="11" r="5" />
                  <path
                    strokeLinecap="round"
                    d="m15 15 4 4"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}