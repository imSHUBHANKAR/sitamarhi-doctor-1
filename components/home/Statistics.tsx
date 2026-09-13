"use client";

const statistics = [
  {
    value: "15+",
    label: "Years of Experience",
    description: "Dedicated clinical practice",
  },
  {
    value: "10K+",
    label: "Patients Treated",
    description: "Trusted by patients and families",
  },
  {
    value: "25+",
    label: "Areas of Expertise",
    description: "Comprehensive healthcare services",
  },
  {
    value: "4.9/5",
    label: "Patient Rating",
    description: "Based on patient feedback",
  },
];

export default function Statistics() {
  return (
    <section
      id="experience"
      className="w-full bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0066B3] sm:text-xs">
            Experience & Trust
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[40px]">
            Trusted Experience,
            <span className="text-[#0066B3]"> Proven Care</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-[15px]">
            Years of experience, clinical expertise and patient-focused care
            come together to provide dependable healthcare.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                group relative px-6 py-8 text-center
                transition-colors duration-200
                hover:bg-[#F7FBFE]
                sm:px-7
                lg:py-9
                ${index !== 0 ? "border-t border-slate-200 sm:border-t-0" : ""}
                ${index === 2 ? "lg:border-l lg:border-slate-200" : ""}
                ${index !== 0 && index !== 2 ? "sm:border-l sm:border-slate-200" : ""}
              `}
            >
              {/* Number */}
              <div className="text-3xl font-bold tracking-[-0.04em] text-[#0066B3] sm:text-4xl">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="mt-2 text-sm font-semibold text-slate-900 sm:text-[15px]">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-1.5 max-w-[180px] text-xs leading-5 text-slate-500">
                {stat.description}
              </p>

              {/* Bottom Indicator */}
              <div className="mx-auto mt-5 h-[2px] w-8 rounded-full bg-[#0066B3] transition-all duration-300 group-hover:w-14" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}