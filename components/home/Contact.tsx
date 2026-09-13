import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0066B3] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-16">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Left Content */}
          <div className="text-white">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[46px]">
              Let's Talk About
              <br />
              <span className="text-white/80">
                Your Healthcare Needs
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Have a question, need more information or want to request a
              consultation? Get in touch with the clinic and our team will
              assist you.
            </p>

            {/* Contact Details */}
            <div className="mt-9 space-y-5">

              <ContactItem
                title="Call Us"
                value="+91 99999 99999"
                href="tel:+919999999999"
              />

              <ContactItem
                title="Email Us"
                value="doctor@example.com"
                href="mailto:doctor@example.com"
              />

              <ContactItem
                title="Clinic"
                value="New Delhi, India"
              />

            </div>

          </div>

          {/* Contact Card */}
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8 lg:p-10">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0066B3]">
                Send an Enquiry
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                How Can We Help?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in your details and the clinic team will get back to you.
              </p>
            </div>

            <form className="mt-7 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/10"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/10"
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#0066B3] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#005493]"
              >
                Send Enquiry
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                For urgent medical concerns, please contact the appropriate
                emergency medical service.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10" />

      <div>
        <p className="text-xs text-white/55">
          {title}
        </p>

        <p className="mt-0.5 text-sm font-semibold text-white">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      className="block transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  ) : (
    content
  );
}