import Image from "next/image";
import Icon from "../Icon";

const products = [
  {
    title: "Real Estate Mortgage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_4qsdVQUzIoqlk8p4KsjK1dpqd2ARg-LPcQvDLX2-sfeoJn_y1L6Mo7gie2WjOe4uLCL9ilSOwHkTiaqi7SurNZ9vKSwKsHpSqvXPuPHq0to7PKbhrr3sijUhJqJ26E1Y4dymyuPn7RyW9nHFbOVSLNAGn1akrzTQZwmr4O6T6pAvR9h9z6iCCG-UT2m4VRM-GifAdZJkcOggHDQACv3_K0hmR4Fsfms9AfZC0_GSPNYhN-ooTCa-",
    description:
      "Whether you're a first-time buyer, an investor, or looking to refinance — we provide access to the best mortgage solutions across all UAE banks. From residential to commercial financing, our experts are here to guide you every step of the way.",
    cta: "Get Started",
  },
  {
    title: "SME & Corporate Lending",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAey97j8TFmrC6pb3hFhWYjiUbz-QBuGqOBoyzTYZyl3_z90zwZZS26ACxv5ruUSAExHorozwOoLb-F8weyE3nb8VGRVsJYppURZNQxIiu-SLtF68G5NCwbNQPy7KQYjIWn6YPNAJR44rlmu9KlCAbvtAAtLnCfE0KhULNgPM1ueUGcP2aPUxEhiAzdtU4jFcq0G5Li2A6bpMa0qO_b-EbnPaYuMkjBcMYzyPafr20ILOzMo7wQoKB",
    description:
      "We offer tailored lending solutions for businesses of all sizes. From trade finance and working capital to business expansion, we partner with financial institutions to bring you flexible, smart lending options.",
    cta: "Explore Corporate",
  },
  {
    title: "Consumer Finance Products",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDzIS047m5ZDSA0WTbAtDGGGsvFJZuJlKapIsbQL2Pb13K2LRLblw5igdkY09_SEVYwotvMQI-WTp1ySNjv-gUbC1fxDVjl7QE8xh68Q8xJVbiF0fiW5pqQHltfRV2rhA6D4mPSv5RmA7FoqHaat7AFmRABvSQ8ORiBqXGMPVDzEVUzU8J3W42Jj-pTvIGuyg_hmrSbsc3nAESQ0T9DoaEVZcCParzQf_DvVEllHtErx-iS4tkydJp",
    description:
      "We offer a range of consumer finance solutions designed to make essential purchases more accessible and affordable. Whether it's electronics, home appliances, or lifestyle needs, our financing options are flexible, transparent, and tailored to fit your budget.",
    cta: "View Options",
  },
];

export default function CoreExpertise() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#FFFFFF]" id="products">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#212529] tracking-tight mb-3">
            Our Core Expertise
          </h2>
          <p className="font-inter text-gray-600 text-base sm:text-lg">
            Tailored Financial Solutions Designed to Meet Every Client&apos;s
            Unique Needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl overflow-hidden border border-[#E9ECEF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={product.image}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-[#55BBB0] text-white flex items-center justify-center shadow-md">
                  <Icon name="check" className="text-[20px]" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="font-poppins text-xl font-bold text-[#212529] mb-3">
                  {product.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <a
                  className="inline-flex items-center gap-1.5 text-[#55BBB0] font-semibold text-sm hover:text-[#44aba0] group/link"
                  href="#contact"
                >
                  <span>{product.cta}</span>
                  <Icon
                    name="arrow_forward"
                    className="text-[18px] group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
