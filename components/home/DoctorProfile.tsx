import Link from "next/link";

export default function DoctorProfile() {
  return (
    <section
      id="doctor-profile"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 xl:px-16">
        
        {/* Doctor Image */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-5 rounded-[2rem] bg-[#EAF4FB]" />

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
            <img
              src="/images/doctor/doctor-profile.webp"
              alt="Doctor Profile"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>

          {/* Experience Card */}
          <div className="absolute -bottom-5 left-4 rounded-xl bg-[#0D9484] px-5 py-4 text-white shadow-lg sm:left-8">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-xs text-white/80">
              Years of Experience
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D9484]">
            Meet Your Doctor
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[44px]">
            Professional Expertise.
            <br />
            <span className="text-[#0D9484]">
              Personal Attention.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
            Dr. Your Doctor brings years of clinical experience and a
            patient-focused approach to every consultation. The goal is to
            understand each patient's concerns and provide clear guidance for
            better health outcomes.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProfileItem
              title="Education"
              value="MBBS, MD"
            />

            <ProfileItem
              title="Experience"
              value="10+ Years"
            />

            <ProfileItem
              title="Consultation"
              value="Online & Offline"
            />

            <ProfileItem
              title="Approach"
              value="Patient-First Care"
            />
          </div>

          <Link
            href="/appointment"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#0D9484] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#005493]"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProfileItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border-l-2 border-[#0D9484] pl-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}