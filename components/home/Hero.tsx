"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/images/icons/medical-background.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-[0.08]
          "
        />
      </div>
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#EAF4FB] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#F1F8FC] blur-3xl" />

      <div className="relative mx-auto grid min-h-150 max-w-360 grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-20 xl:px-16">
        
        {/* ====================bg-[#EAF4FB]==bg-[#F1F8FC]================================
            LEFT CONTENT
        ====================================================== */}
        <div className="order-2 max-w-2xl lg:order-1">

          {/* Specialty Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#CFE5F5] bg-[#F4FAFE] px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-[#0D9484]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0D9484] sm:text-xs">
              Consultant & Specialist
            </span>
          </div>

          {/* Doctor Name */}
          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[54px] xl:text-[60px]">
            Dr. Your Doctor
            <span className="mt-1 block text-[#0D9484]">
              Specialist Physician
            </span>
          </h1>

          {/* Short Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Providing compassionate, evidence-based medical care with a
            patient-first approach. Get expert consultation, personalized
            treatment and comprehensive healthcare support.
          </p>

          {/* Qualifications */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-600 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F4FB] text-[#0D9484]">
                ✓
              </span>
              10+ Years Experience
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F4FB] text-[#0D9484]">
                ✓
              </span>
              Expert Consultation
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">

            <Link
              href="/appointment"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#0D9484] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#07584f] hover:shadow-md"
            >
              Book an Appointment
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m13 6 6 6-6 6"
                />
              </svg>
            </Link>

            <a
              href="tel:+919999999999"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-[#0D9484] hover:text-[#0D9484]"
            >
              Contact Doctor
            </a>
          </div>

          {/* Trust Information */}
          <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-200 pt-6">

            <div>
              <p className="text-lg font-bold text-slate-900">
                10+
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-500">
                Years Experience
              </p>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            <div>
              <p className="text-lg font-bold text-slate-900">
                5K+
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-500">
                Patients Consulted
              </p>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            <div>
              <p className="text-lg font-bold text-slate-900">
                4.9/5
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-500">
                Patient Rating
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT DOCTOR IMAGE
        ====================================================== */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">

          <div className="relative w-full max-w-140">

            {/* Main Blue Shape */}
            <div className="absolute inset-x-4 bottom-0 top-8 rounded-4xl bg-[#0D9484] sm:inset-x-8" />

            {/* Decorative Circle */}
            <div className="absolute right-3 top-0 h-24 w-24 rounded-full border-12 border-white/20 sm:right-8 sm:h-32 sm:w-32" />

            {/* Doctor Image Container */}
            <div className="relative mx-auto aspect-4/4.5 w-[82%] overflow-hidden rounded-t-[8rem] rounded-b-4xl border-[5px] border-white/80 bg-[#EAF4FB] shadow-2xl sm:w-[78%]">

              <img
                src="/images/icons/doctor_profile.jpg"
                alt="Doctor"
                className="h-full w-full object-cover object-top"
              />

              {/* Image Gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* Qualification Card */}
            <div className="absolute bottom-5 left-0 w-47.5 rounded-xl border border-white/60 bg-white/95 p-4 shadow-xl/30 backdrop-blur-sm sm:bottom-8 sm:left-2 sm:w-[220px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0D9484]">
                Professional Qualification
              </p>

              <p className="mt-1.5 text-sm font-bold text-slate-900">
                MBBS, MD
              </p>

              <p className="mt-1 text-[10px] leading-4 text-slate-500">
                Consultant Physician & Medical Specialist
              </p>
            </div>

            {/* Experience Badge */}
            <div className="absolute right-0 top-24 hidden rounded-xl border border-white/60 bg-white/95 px-4 py-3 shadow-xl/30 backdrop-blur-sm sm:block">
              <p className="text-lg font-bold text-[#0D9484]">
                10+
              </p>

              <p className="text-[9px] font-medium uppercase tracking-wide text-slate-500">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}