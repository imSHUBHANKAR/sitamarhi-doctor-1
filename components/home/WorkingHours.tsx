const workingHours = [
  {
    day: "Monday",
    time: "09:00 AM – 06:00 PM",
  },
  {
    day: "Tuesday",
    time: "09:00 AM – 06:00 PM",
  },
  {
    day: "Wednesday",
    time: "09:00 AM – 06:00 PM",
  },
  {
    day: "Thursday",
    time: "09:00 AM – 06:00 PM",
  },
  {
    day: "Friday",
    time: "09:00 AM – 06:00 PM",
  },
  {
    day: "Saturday",
    time: "09:00 AM – 02:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

export default function WorkingHours() {
  return (
    <section
      id="working-hours"
      className="bg-[#F7FBFE] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">

        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">

          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D9484]">
              Clinic Hours
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              When You Can
              <span className="text-[#0D9484]"> Visit Us</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Our consultation hours are designed to provide convenient access
              to professional medical care. Please contact the clinic before
              visiting.
            </p>

            {/* Status */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#C7E1F0] bg-white px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span className="text-sm font-semibold text-slate-700">
                Appointment Based Consultation
              </span>
            </div>
          </div>

          {/* Hours Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="divide-y divide-slate-100">
              {workingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {item.day}
                  </span>

                  <span
                    className={`text-sm font-semibold ${
                      item.time === "Closed"
                        ? "text-slate-400"
                        : "text-[#0D9484]"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}