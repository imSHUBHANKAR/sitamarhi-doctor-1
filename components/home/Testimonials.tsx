const testimonials = [
  {
    name: "Patient Name",
    treatment: "General Consultation",
    review:
      "The consultation was very comfortable and professional. The doctor listened carefully, explained everything clearly and provided helpful guidance.",
    rating: 5,
  },
  {
    name: "Patient Name",
    treatment: "Long-Term Healthcare",
    review:
      "I really appreciated the patient-first approach. Every question was answered properly, and the treatment plan was explained in a simple way.",
    rating: 5,
  },
  {
    name: "Patient Name",
    treatment: "Health Consultation",
    review:
      "A very professional and reassuring experience. I felt heard and understood throughout the consultation.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#F7FBFE] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D9484]">
            Patient Testimonials
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by Patients,
            <span className="text-[#0D9484]"> Valued by Families</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Experiences shared by patients who received professional medical
            consultation and care.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.review}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
            >
              {/* Quote */}
              <div className="text-5xl font-serif leading-none text-[#B8DDF2]">
                “
              </div>

              {/* Rating */}
              <div className="mt-2 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span
                    key={index}
                    className="text-sm text-[#0D9484]"
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {testimonial.review}
              </p>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="text-sm font-bold text-slate-900">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {testimonial.treatment}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Rating */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex gap-1 text-[#0D9484]">
            ★ ★ ★ ★ ★
          </div>

          <p className="text-sm font-semibold text-slate-900">
            Trusted healthcare experience
          </p>

          <p className="text-xs text-slate-500">
            Patient feedback and ratings can be updated with verified reviews.
          </p>
        </div>
      </div>
    </section>
  );
}