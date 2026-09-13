import Link from "next/link";

const services = [
  {
    number: "01",
    title: "General Consultation",
    description:
      "Professional medical consultation for common health concerns, symptoms, diagnosis and treatment guidance.",
  },
  {
    number: "02",
    title: "Preventive Health Check-ups",
    description:
      "Regular health assessments focused on early detection, risk evaluation and maintaining long-term wellbeing.",
  },
  {
    number: "03",
    title: "Chronic Disease Management",
    description:
      "Ongoing care and monitoring for long-term health conditions with personalized treatment guidance.",
  },
  {
    number: "04",
    title: "Diagnostic Evaluation",
    description:
      "Careful evaluation of symptoms and medical reports to help identify health concerns and recommend next steps.",
  },
];

export default function HealthcareServices() {
  return (
    <section
      id="services"
      className="bg-[#F7FBFE] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066B3]">
              Healthcare Services
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Comprehensive Care,
              <span className="text-[#0066B3]"> Focused on You</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            From routine consultations to long-term healthcare management,
            every service is designed around understanding your individual
            health needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8DDF2] hover:shadow-lg sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-bold text-[#0066B3]">
                  {service.number}
                </span>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF4FB] text-[#0066B3] transition-all duration-300 group-hover:bg-[#0066B3] group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      d="M12 5v14M5 12h14"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-bold text-slate-900 sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                {service.description}
              </p>

              <Link
                href="/appointment"
                className="mt-7 inline-flex items-center text-sm font-semibold text-[#0066B3] transition-colors hover:text-[#005493]"
              >
                Book Consultation
                <span className="ml-2 text-lg leading-none">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-[#0066B3] px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                Need Medical Guidance?
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Take the first step towards better health.
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                Share your concern and request an appointment for a
                professional consultation.
              </p>
            </div>

            <Link
              href="/appointment"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0066B3] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}