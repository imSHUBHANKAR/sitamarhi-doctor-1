import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Doctor", href: "#about" },
  { name: "Specializations", href: "#specializations" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
];

const usefulLinks = [
  { name: "Doctor Profile", href: "#doctor-profile" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16 xl:px-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">

            <Link
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0066B3]">
                <span className="text-xl font-bold">
                  +
                </span>
              </div>

              <div>
                <p className="text-lg font-bold">
                  Dr. Your Doctor
                </p>

                <p className="text-xs text-slate-400">
                  Specialist Physician
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Providing professional, personalized and patient-centered
              healthcare with a focus on trusted medical guidance and
              compassionate care.
            </p>

            <Link
              href="/appointment"
              className="mt-6 inline-flex rounded-lg bg-[#0066B3] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005493]"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-semibold">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href="tel:+919999999999"
                className="block text-sm text-slate-400 transition-colors hover:text-white"
              >
                +91 99999 99999
              </a>

              <a
                href="mailto:doctor@example.com"
                className="block break-all text-sm text-slate-400 transition-colors hover:text-white"
              >
                doctor@example.com
              </a>

              <p className="text-sm leading-6 text-slate-400">
                New Delhi,
                <br />
                Delhi 110001, India
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 xl:px-16">

          <p>
            © {new Date().getFullYear()} Dr. Your Doctor. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}