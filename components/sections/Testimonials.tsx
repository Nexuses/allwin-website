import Image from "next/image";

const TESTIMONIALS_IMAGE =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/midsection-colleagues-analyzing-graphs-desk.jpg";

const testimonials = [
  {
    quote:
      "AllWin Finances helped me navigate my first home loan with ease. Their team was knowledgeable and genuinely cared about my needs.",
    name: "Raj Mehta",
    location: "Dubai",
  },
  {
    quote:
      "From comparing rates to final approval, the process was smooth and stress-free.",
    name: "Emily Chen",
    location: "Abu Dhabi",
  },
  {
    quote: "They found me a better rate than my own bank. Highly recommended!",
    name: "Sarah Thompson",
    location: "Sharjah",
  },
];

export default function Testimonials() {
  return (
    <section
      className="w-full py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #0C665C 0%, #20AA45 38%, #55BBB0 72%, #20AA5C 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#F3EFE3] tracking-tight mb-2">
              What Our Clients Say
            </h2>
            <h3 className="font-manrope text-xl font-semibold text-[#F3EFE3]/90 mb-4">
              Real stories. Real impact.
            </h3>
            <p className="font-inter text-[#F3EFE3]/90 text-sm sm:text-base leading-relaxed sm:leading-6 mb-8">
              We have helped individuals and businesses across the UAE reach
              their financial goals. Here is what some of our clients say.
            </p>
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xs"
                >
                  <p className="font-inter text-gray-700 text-sm italic mb-3">
                    {`"${testimonial.quote}"`}
                  </p>
                  <div className="flex items-center justify-between">
                    <strong className="font-manrope text-xs font-bold text-[#385445]">
                      {testimonial.name}
                    </strong>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-white">
              <Image
                alt="Colleagues analyzing graphs and sales reports"
                className="w-full h-full object-cover object-center rounded-2xl"
                src={TESTIMONIALS_IMAGE}
                fill
                sizes="(min-width: 1024px) 512px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
