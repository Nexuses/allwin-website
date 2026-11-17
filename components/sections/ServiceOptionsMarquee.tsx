import Icon from "@/components/Icon";
import Reveal from "@/components/about/Reveal";

export type ServiceOption = {
  icon: string;
  title: string;
  text: string;
};

type ServiceOptionsMarqueeProps = {
  eyebrow: string;
  title: string;
  intro: string;
  options: ServiceOption[];
  ctaLabel?: string;
  ctaHref?: string;
};

function OptionCard({
  option,
  index,
  ctaLabel,
  ctaHref,
  hidden = false,
}: {
  option: ServiceOption;
  index: number;
  ctaLabel: string;
  ctaHref: string;
  hidden?: boolean;
}) {
  const tone =
    index === 1 || index === 2 ? (index === 1 ? "dark" : "sage") : "light";

  return (
    <article
      aria-hidden={hidden || undefined}
      className={`group flex min-h-[300px] w-[min(86vw,360px)] shrink-0 flex-col rounded-[1.75rem] border border-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#55BBB0] sm:w-[380px] sm:p-7 lg:w-[420px] ${
        tone === "dark"
          ? "bg-[#1F4F4A] text-white hover:shadow-[0_22px_48px_rgba(85,187,176,0.25)]"
          : tone === "sage"
            ? "bg-[#C5D5CC] text-[#26332F] hover:shadow-[0_22px_48px_rgba(85,187,176,0.22)]"
            : "bg-white text-[#26332F] shadow-[0_12px_32px_rgba(31,79,74,0.06)] hover:shadow-[0_22px_48px_rgba(85,187,176,0.22)]"
      }`}
    >
      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 ${
          tone === "dark"
            ? "bg-[#55BBB0]/25 text-[#55BBB0] group-hover:bg-[#55BBB0]/40"
            : "bg-[#1F4F4A]/10 text-[#20AA45] group-hover:bg-[#1F4F4A] group-hover:text-white"
        }`}
      >
        <Icon name={option.icon} className="text-[26px]" />
      </div>
      <h3
        className={`font-manrope text-lg font-bold tracking-tight transition-colors duration-300 sm:text-xl ${
          tone === "dark"
            ? "text-white"
            : "text-[#1F4F4A] group-hover:text-[#0C665C]"
        }`}
      >
        {option.title}
      </h3>
      <p
        className={`mt-3 flex-1 font-inter text-sm leading-relaxed ${
          tone === "dark" ? "text-white/75" : "text-[#26332F]/65"
        }`}
      >
        {option.text}
      </p>
      <a
        href={ctaHref}
        tabIndex={hidden ? -1 : undefined}
        className={`mt-6 inline-flex w-fit items-center gap-1.5 border-b pb-0.5 font-manrope text-sm font-semibold transition-colors ${
          tone === "dark"
            ? "border-white/50 text-white group-hover:border-[#55BBB0] group-hover:text-[#55BBB0]"
            : "border-[#1F4F4A]/40 text-[#1F4F4A] group-hover:border-[#0C665C] group-hover:text-[#0C665C]"
        }`}
      >
        {ctaLabel}
      </a>
    </article>
  );
}

export default function ServiceOptionsMarquee({
  eyebrow,
  title,
  intro,
  options,
  ctaLabel = "Talk to a specialist",
  ctaHref = "/contact",
}: ServiceOptionsMarqueeProps) {
  return (
    <section className="relative overflow-hidden rounded-t-[2rem] bg-[#EEF3F0] py-16 shadow-[0_-24px_80px_rgba(12,40,38,0.2)] sm:rounded-t-[2.5rem] lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#1F4F4A]/25 px-3.5 py-1 font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1F4F4A]">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-manrope text-3xl font-bold tracking-tight text-[#26332F] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-inter text-sm leading-relaxed text-[#26332F]/65 sm:text-base">
            {intro}
          </p>
        </Reveal>
      </div>

      <div className="group/commercial-marquee relative mt-10 w-full overflow-hidden sm:mt-12 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-commercial-marquee items-stretch gap-4 sm:gap-5">
          {[0, 1].flatMap((copy) =>
            options.map((option, index) => (
              <OptionCard
                key={`${copy}-${option.title}`}
                option={option}
                index={index}
                ctaLabel={ctaLabel}
                ctaHref={ctaHref}
                hidden={copy === 1}
              />
            )),
          )}
        </div>
      </div>
    </section>
  );
}
