import Link from "next/link";

const specializations = [
  {
    number: "01",
    title: "Internal Medicine",
    description:
      "Comprehensive diagnosis and management of adult health conditions with a focus on personalized, evidence-based care.",
    points: [
      "General medical conditions",
      "Preventive healthcare",
      "Chronic disease management",
    ],
  },
  {
    number: "02",
    title: "Diabetes & Metabolic Care",
    description:
      "Personalized care plans for diabetes, metabolic disorders, and long-term health management.",
    points: [
      "Diabetes management",
      "Lifestyle & nutrition guidance",
      "Metabolic health monitoring",
    ],
  },
  {
    number: "03",
    title: "Hypertension & Heart Health",
    description:
      "Assessment and ongoing management of blood pressure and cardiovascular risk factors.",
    points: [
      "Blood pressure management",
      "Cardiovascular risk assessment",
      "Preventive heart care",
    ],
  },
  {
    number: "04",
    title: "Respiratory Care",
    description:
      "Diagnosis and treatment guidance for common respiratory conditions affecting adults.",
    points: [
      "Respiratory infections",
      "Asthma & breathing issues",
      "Long-term respiratory care",
    ],
  },
  {
    number: "05",
    title: "Thyroid & Hormonal Disorders",
    description:
      "Clinical evaluation and management of common thyroid and hormonal health conditions.",
    points: [
      "Thyroid disorders",
      "Hormonal imbalance",
      "Routine monitoring",
    ],
  },
  {
    number: "06",
    title: "Preventive Healthcare",
    description:
      "Proactive healthcare focused on early detection, regular health assessments, and disease prevention.",
    points: [
      "Health check-ups",
      "Risk assessment",
      "Lifestyle counselling",
    ],
  },
];

export default function Specializations() {
  return (
    <section
      id="specializations"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#BFDDF0] bg-[#EAF4FB] px-4 py-2 text-sm font-semibold text-[#0D9484]">
            Areas of Expertise
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Specialized Care for Your
            <span className="text-[#0D9484]"> Health Needs</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Providing expert medical consultation across a range of
            specialties with a patient-first approach and personalized care.
          </p>
        </div>

        {/* Specialization Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#A9D1EA] hover:shadow-[0_18px_45px_rgba(0,102,179,0.10)] sm:p-8"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-wider text-[#0D9484]">
                  {item.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4FB] transition-colors duration-300 group-hover:bg-[#07584f]">
                  <svg
                    className="h-5 w-5 text-[#0D9484] transition-colors duration-300 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18M3 12h18"
                    />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-7 text-xl font-bold text-slate-900 sm:text-2xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                {item.description}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-slate-100" />

              {/* Points */}
              <ul className="space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D9484]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0D9484] transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#EAF4FB] px-6 py-7 sm:flex-row sm:px-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Looking for personalized medical advice?
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              Book a consultation and discuss your health concerns directly.
            </p>
          </div>

          <Link
            href="/appointment"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#0D9484] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#07584f] hover:shadow-md"
          >
            Book an Appointment
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}