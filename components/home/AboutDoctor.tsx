"use client";

import Link from "next/link";

export default function AboutDoctor() {
  return (
    <section
      id="about"
      className="w-full bg-[#EAF4FB] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0066B3]">
            About the Doctor
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.025em] text-slate-900 sm:text-4xl lg:text-[42px]">
            Compassionate Care Backed by
            <span className="text-[#0066B3]"> Experience & Expertise</span>
          </h2>

          <div className="mt-4 h-[2px] w-16 bg-[#0066B3]" />
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* LEFT - QUICK INFORMATION */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E8F4FB] text-[#0066B3]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                  />
                </svg>
              </div>

              <div>
                <p className="text-lg font-bold text-slate-900">
                  Dr. Your Doctor
                </p>

                <p className="text-sm text-slate-500">
                  Consultant & Specialist Physician
                </p>
              </div>
            </div>

            {/* Information List */}
            <div className="divide-y divide-slate-100">

              <InfoRow
                label="Qualification"
                value="MBBS, MD"
              />

              <InfoRow
                label="Experience"
                value="10+ Years"
              />

              <InfoRow
                label="Specialization"
                value="Internal Medicine"
              />

              <InfoRow
                label="Consultation"
                value="In-Person & Online"
              />

              <InfoRow
                label="Location"
                value="New Delhi, India"
              />

            </div>

            {/* CTA */}
            <Link
              href="/appointment"
              className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[#0066B3] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#005493] hover:shadow-md"
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
          </div>

          {/* RIGHT - ABOUT CONTENT */}
          <div>

            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Dedicated to Better Health,
              <span className="text-[#0066B3]"> Every Day</span>
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
              <p>
                Dr. Your Doctor is an experienced medical professional
                dedicated to providing comprehensive and patient-centered
                healthcare. With years of clinical experience, the doctor
                focuses on understanding each patient's individual needs
                before recommending an appropriate treatment approach.
              </p>

              <p>
                The approach combines clinical expertise, careful diagnosis,
                clear communication and personalized treatment planning. Every
                consultation is focused on helping patients understand their
                condition and make informed decisions about their health.
              </p>

              <p>
                From routine consultations to the management of complex
                medical conditions, patients receive attentive care in a
                comfortable and professional environment.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <HighlightCard
                title="Patient-Centered Care"
                description="Personalized consultations focused on every patient's individual needs."
              />

              <HighlightCard
                title="Evidence-Based Approach"
                description="Treatment decisions supported by current medical knowledge and clinical expertise."
              />

              <HighlightCard
                title="Experienced Professional"
                description="Years of clinical experience across diagnosis, treatment and patient care."
              />

              <HighlightCard
                title="Clear Communication"
                description="Helping patients understand their condition, treatment and healthcare options."
              />

            </div>

            {/* Bottom Note */}
            <div className="mt-8 border-l-2 border-[#0066B3] bg-white/70 px-5 py-4">
              <p className="text-sm font-medium leading-6 text-slate-700">
                "My goal is not only to treat a condition, but to understand
                the person behind it and provide care that is practical,
                compassionate and effective."
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   INFORMATION ROW
============================================================ */

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5 py-4">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </span>

      <span className="text-right text-sm font-semibold text-slate-800">
        {value}
      </span>
    </div>
  );
}


/* ============================================================
   HIGHLIGHT CARD
============================================================ */

function HighlightCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B8D9EE] hover:shadow-sm">

      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F4FB] text-xs font-bold text-[#0066B3]">
          ✓
        </span>

        <h4 className="text-sm font-bold text-slate-900">
          {title}
        </h4>
      </div>

      <p className="text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}