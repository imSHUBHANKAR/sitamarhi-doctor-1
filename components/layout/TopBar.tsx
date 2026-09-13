"use client";

import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[36px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* Left - Announcement */}
        <div className="hidden items-center gap-2 text-[10px] font-medium text-slate-600 sm:flex md:text-[11px]">
          <span className="inline-flex h-5 items-center rounded-sm bg-[#0066B3] px-2 text-[9px] font-semibold uppercase tracking-wide text-white">
            Important
          </span>

          <p>
            For appointments and consultations, please contact the clinic
            directly.
          </p>
        </div>

        {/* Mobile Announcement */}
        <div className="flex items-center text-[9px] font-medium text-slate-600 sm:hidden">
          <span className="mr-2 inline-flex h-5 items-center rounded-sm bg-[#0066B3] px-2 text-[8px] font-semibold uppercase tracking-wide text-white">
            Notice
          </span>

          <span>Appointments available</span>
        </div>

        {/* Right - Contact Information */}
        <div className="ml-auto flex items-center gap-4">

          {/* Phone */}
          <Link
            href="tel:+919999999999"
            className="group flex items-center gap-1.5 text-[10px] font-medium text-slate-600 transition-colors hover:text-[#0066B3] md:text-[11px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.474-1.118a1.125 1.125 0 0 0-1.173.417l-.982 1.178a1.125 1.125 0 0 1-1.21.337 12.04 12.04 0 0 1-7.278-7.278 1.125 1.125 0 0 1 .337-1.21l1.178-.982c.361-.301.52-.777.417-1.173L6.633 2.74A1.125 1.125 0 0 0 5.543 1.89H4.25A2.25 2.25 0 0 0 2 4.14v2.61Z"
              />
            </svg>

            <span>+91 99999 99999</span>
          </Link>

          {/* Divider */}
          <span className="hidden h-4 w-px bg-slate-200 sm:block" />

          {/* Email */}
          <Link
            href="mailto:doctor@example.com"
            className="hidden items-center gap-1.5 text-[10px] font-medium text-slate-600 transition-colors hover:text-[#0066B3] md:flex md:text-[11px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.812l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.812V6.75"
              />
            </svg>

            <span>doctor@example.com</span>
          </Link>

        </div>
      </div>
    </div>
  );
}