import Link from "next/link";

export default function Location() {
  return (
    <section
      id="location"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0066B3]">
            Visit Our Clinic
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[44px]">
            Conveniently Located for
            <span className="text-[#0066B3]"> Your Care</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Visit our clinic for a comfortable and professional healthcare
            consultation. Contact us before visiting to confirm availability.
          </p>
        </div>

        {/* Location Content */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Map */}
          <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-[#EAF4FB]">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.6764037827793!2d85.49617492831123!3d26.5947574143701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1372b6aacfb%3A0x97e52f59238b7155!2sKilkari%20hospital%20sitamarhi%20Dr%20k%20c%20sharma!5e0!3m2!1sen!2sin!4v1789300387140!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
            />
            
            {/* Map Overlay */}
            <div className="absolute bottom-5 left-5 right-5 max-w-sm rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur">
              <p className="text-sm font-bold text-slate-900">
                Dr. Your Doctor's Clinic
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Sitamarhi, Bihar (845305), India
              </p>
            </div>
          </div>

          {/* Address Card */}
          <div className="rounded-2xl bg-[#EAF4FB] p-6 sm:p-8">

            <div className="space-y-7">

              {/* Address */}
              <LocationItem
                title="Clinic Address"
                text={
                  <>
                    Kailash Hospital, Sitamarhi
                    <br />
                    Bihar (845305)
                    
                    <br />
                    India
                  </>
                }
                icon="location"
              />

              {/* Phone */}
              <LocationItem
                title="Phone"
                text="+91 99999 99999"
                href="tel:+919999999999"
                icon="phone"
              />

              {/* Email */}
              <LocationItem
                title="Email"
                text="doctor@example.com"
                href="mailto:doctor@example.com"
                icon="email"
              />

              {/* Direction */}
              <div className="border-t border-[#C7E1F0] pt-7">
                <Link
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-[#0066B3] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#005493]"
                >
                  Get Directions

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
          </div>
        </div>

      </div>
    </section>
  );
}

function LocationItem({
  title,
  text,
  href,
  icon,
}: {
  title: string;
  text: React.ReactNode;
  href?: string;
  icon: "location" | "phone" | "email";
}) {
  const content = (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0066B3]">
        {icon === "location" && (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
            />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        )}

        {icon === "phone" && (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 16.92v3a2 2 0 0 1-2.18 2
              19.8 19.8 0 0 1-8.63-3.07
              19.5 19.5 0 0 1-6-6
              A19.8 19.8 0 0 1 2.12 4.18
              2 2 0 0 1 4.11 2h3
              a2 2 0 0 1 2 1.72
              c.12.9.33 1.78.62 2.63
              a2 2 0 0 1-.45 2.11L8 9.73
              a16 16 0 0 0 6 6l1.27-1.27
              a2 2 0 0 1 2.11-.45
              c.85.29 1.73.5 2.63.62
              A2 2 0 0 1 22 16.92Z"
            />
          </svg>
        )}

        {icon === "email" && (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
            />
            <path d="m3 7 9 6 9-6" />
          </svg>
        )}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
          {text}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}