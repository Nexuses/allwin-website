import CountUp from "../CountUp";
import Icon from "../Icon";
import Reveal from "../about/Reveal";

const STATS_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDmmEsnfTH41Wu0WRuFgrFVpCGz75Z2tyKoxSiRIg0lgV1-CU37Yj-2MF0pxOc2kdP0qvGDeUgbwoHOiftgm3zBEOd6CdRBpO76cmH0pyJh_vAZoq2THgBGDLJiddYV6HApE64bkMpuJV7_D_8PaQIyh6MfUpajmGuPbO5-b_J4XZMCQvniheUY7q_rh32bOrEXSK2FJIFrVdB_8kS-QkrtiV4wKKWVpRmQSM1gMDwRZ66cnn6T89s-";

const stats = [
  { icon: "groups", value: 500, suffix: "+", label: "Happy Clients" },
  { icon: "task_alt", value: 200, suffix: "+", label: "Projects Completed" },
  { icon: "history", value: 10, suffix: "+", label: "Years of Experience" },
  {
    icon: "military_tech",
    value: 20,
    suffix: "+",
    label: "Award-Winning Service",
  },
];

export default function TrackRecord() {
  return (
    <section
      className="relative w-full py-20 bg-[#1e2227] text-white overflow-hidden"
      id="stats"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url("${STATS_BG}")` }}
      />
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <Reveal>
        <h2 className="font-manrope text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
          Our Track Record Speaks for Itself
        </h2>
        <p className="font-inter text-gray-400 text-sm sm:text-base mb-14">
          Trusted by Clients Across the UAE and Beyond
        </p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
            <div className="group flex flex-col items-center">
              <div className="icon-chip w-12 h-12 rounded-full bg-[#55BBB0]/10 flex items-center justify-center text-[#55BBB0] mb-3">
                <Icon name={stat.icon} className="text-[28px]" />
              </div>
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                className="font-manrope text-3xl sm:text-5xl font-bold text-white mb-1"
              />
              <span className="font-inter text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
