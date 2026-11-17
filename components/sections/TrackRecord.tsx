import Image from "next/image";
import CountUp from "../CountUp";
import Reveal from "../about/Reveal";

const STATS_IMAGE =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/business-person-looking-finance-graphs.jpg";

const stats = [
  { value: 500, suffix: "+", label: "Happy clients" },
  { value: 200, suffix: "+", label: "Projects completed" },
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 20, suffix: "+", label: "Award-winning service" },
];

export default function TrackRecord() {
  return (
    <section
      id="stats"
      className="relative w-full overflow-hidden bg-[#E9EFEE] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="relative z-0 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <h2 className="max-w-[20ch] font-manrope text-4xl font-bold leading-[1.08] tracking-tight text-[#26332F] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Experience that
              <br />
              inspires confidence.
            </h2>
            <p className="mt-5 max-w-md font-inter text-base leading-relaxed text-[#26332F]/70 sm:text-lg">
              Trusted by clients across the UAE and beyond for clear advice and
              finance outcomes that hold up.
            </p>
          </Reveal>

          <Reveal delay={80} className="flex justify-center lg:justify-end">
            <div className="relative aspect-[5/4] w-full max-w-[420px] sm:max-w-[480px]">
              <span
                aria-hidden="true"
                className="animate-orbit-a absolute left-[-6%] top-[-8%] h-[86%] w-[82%] rounded-[1.75rem] border border-[#55BBB0]/55 will-change-transform sm:rounded-[2rem]"
              />
              <span
                aria-hidden="true"
                className="animate-orbit-b absolute right-[-5%] top-[2%] h-[80%] w-[78%] rounded-[1.5rem] border border-[#0C665C]/30 will-change-transform sm:rounded-[1.75rem]"
              />
              <span
                aria-hidden="true"
                className="animate-orbit-c absolute bottom-[-6%] left-[6%] h-[74%] w-[72%] rounded-[1.35rem] border border-[#A9C1B8]/80 will-change-transform sm:rounded-[1.6rem]"
              />
              <div className="absolute inset-[8%] overflow-hidden rounded-[1.5rem] bg-[#1F4F4A] shadow-[0_24px_60px_rgba(31,79,74,0.18)] sm:rounded-[1.75rem]">
                <Image
                  src={STATS_IMAGE}
                  alt="Finance specialist reviewing market graphs"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 640px) 380px, 480px"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          className="relative z-10 mt-9 sm:mt-11 lg:mt-[60px]"
        >
          <div className="relative overflow-hidden rounded-[22px] bg-white px-4 py-8 shadow-[0_20px_50px_rgba(31,79,74,0.1)] sm:rounded-[26px] sm:px-2 sm:py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center px-4 py-5 text-center sm:px-6 sm:py-2 ${
                    index % 2 === 1
                      ? "border-l border-[#26332F]/15"
                      : ""
                  } ${
                    index >= 2
                      ? "border-t border-[#26332F]/15 lg:border-t-0"
                      : ""
                  } ${
                    index > 0
                      ? "lg:border-l lg:border-[#26332F]/15"
                      : "lg:border-l-0"
                  }`}
                >
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    className="font-manrope text-4xl font-bold tracking-tight text-[#26332F] sm:text-5xl"
                  />
                  <span className="mt-2 max-w-[14ch] font-inter text-sm leading-snug text-[#26332F]/65 sm:text-[15px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
