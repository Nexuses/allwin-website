import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/about/Reveal";

export type FeatureSplitRow = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  id?: string;
};

type FeatureSplitRowsProps = {
  rows: [FeatureSplitRow, FeatureSplitRow];
};

export default function FeatureSplitRows({ rows }: FeatureSplitRowsProps) {
  const [first, second] = rows;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-4 sm:gap-16 sm:px-6 lg:gap-20 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div>
              <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0C665C]">
                {first.eyebrow}
              </p>
              <h3 className="mt-3 font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
                {first.title}
              </h3>
              <p className="mt-4 font-inter text-sm leading-relaxed text-[#26332F]/65 sm:text-base">
                {first.text}
              </p>
              {first.bullets && first.bullets.length > 0 ? (
                <ul className="mt-6 space-y-2.5">
                  {first.bullets.map((use) => (
                    <li
                      key={use}
                      className="flex gap-2.5 font-inter text-sm text-[#26332F]/75 sm:text-[15px]"
                    >
                      <Icon
                        name="check_circle"
                        className="mt-0.5 shrink-0 text-[18px] text-[#20AA45]"
                      />
                      {use}
                    </li>
                  ))}
                </ul>
              ) : null}
              {first.ctaLabel ? (
                <a
                  href={first.ctaHref || "/contact"}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1F4F4A] px-6 py-3 font-manrope text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C665C]"
                >
                  {first.ctaLabel}
                  <Icon name="arrow_forward" className="text-[16px]" />
                </a>
              ) : null}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[360px]">
              <Image
                src={first.image}
                alt={first.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 540px, 90vw"
              />
            </div>
          </Reveal>
        </div>

        <div
          id={second.id}
          className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <Reveal delay={80} className="lg:order-2">
            <div>
              <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0C665C]">
                {second.eyebrow}
              </p>
              <h3 className="mt-3 font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
                {second.title}
              </h3>
              <p className="mt-4 font-inter text-sm leading-relaxed text-[#26332F]/65 sm:text-base">
                {second.text}
              </p>
              {second.bullets && second.bullets.length > 0 ? (
                <ul className="mt-6 space-y-2.5">
                  {second.bullets.map((use) => (
                    <li
                      key={use}
                      className="flex gap-2.5 font-inter text-sm text-[#26332F]/75 sm:text-[15px]"
                    >
                      <Icon
                        name="check_circle"
                        className="mt-0.5 shrink-0 text-[18px] text-[#20AA45]"
                      />
                      {use}
                    </li>
                  ))}
                </ul>
              ) : null}
              {second.ctaLabel ? (
                <a
                  href={second.ctaHref || "/contact"}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1F4F4A] px-6 py-3 font-manrope text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C665C]"
                >
                  {second.ctaLabel}
                  <Icon name="arrow_forward" className="text-[16px]" />
                </a>
              ) : null}
            </div>
          </Reveal>
          <Reveal className="lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[360px]">
              <Image
                src={second.image}
                alt={second.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 540px, 90vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
