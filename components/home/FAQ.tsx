"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "You can submit an appointment request through the website. Please provide your basic contact details and reason for consultation. The doctor or clinic team will contact you to discuss availability and confirm the appointment.",
  },
  {
    question: "Will my appointment be confirmed immediately?",
    answer:
      "No. Submitting the form creates an appointment request. The doctor or clinic team will contact you based on availability and confirm the final date and time.",
  },
  {
    question: "What information should I provide while booking?",
    answer:
      "You will generally need to provide your name, phone number, email address if applicable, and a brief reason for your appointment request.",
  },
  {
    question: "Can I consult the doctor for a follow-up?",
    answer:
      "Yes, follow-up consultations can be requested. Please contact the clinic or submit an appointment request with relevant details about your previous consultation.",
  },
  {
    question: "How should I contact the clinic for urgent queries?",
    answer:
      "For urgent concerns, please use the clinic contact number provided on the website. This website's appointment form should not be treated as an emergency service.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="bg-[#F7FBFE] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        {/* Left Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D9484]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions?
            <span className="block text-[#0D9484]">
              We Have Answers.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Find helpful information about consultations and appointment
            requests before contacting the clinic.
          </p>

          <div className="mt-8 rounded-2xl bg-[#0D9484] p-6">
            <p className="text-sm font-semibold text-white">
              Still have a question?
            </p>

            <p className="mt-2 text-sm leading-6 text-blue-100">
              Contact the clinic directly or submit an appointment request.
            </p>

            <Link
              href="/appointment"
              className="mt-5 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0D9484] transition-all hover:shadow-lg"
            >
              Request Appointment
            </Link>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white transition-colors ${
                  isOpen
                    ? "border-[#B8DDF2]"
                    : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FB] text-lg font-medium text-[#0D9484] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}