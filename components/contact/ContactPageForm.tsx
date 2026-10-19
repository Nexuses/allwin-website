"use client";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#A9C1B8]/70 bg-white text-sm text-[#26332F] focus:outline-hidden focus:border-[#55BBB0] transition-colors";

const labelClass = "block font-inter text-sm font-semibold text-[#385445] mb-1.5";

const options = ["New purchase", "Refinance / Buy-Out", "SME / Corporate Loan", "Consumer Finance"];

export default function ContactPageForm() {
  return (
    <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="message-name">
            Full name
          </label>
          <input id="message-name" name="name" type="text" className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="message-phone">
            Phone number
          </label>
          <input id="message-phone" name="phone" type="tel" className={inputClass} autoComplete="tel" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="message-email">
            Email
          </label>
          <input id="message-email" name="email" type="email" className={inputClass} autoComplete="email" />
        </div>
        <div>
          <label className={labelClass} htmlFor="message-age">
            Age
          </label>
          <input id="message-age" name="age" type="number" min={18} className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="message-type">
          Are you buying or refinancing?
        </label>
        <select id="message-type" name="type" className={inputClass}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="message-help">
          What do you need help with?
        </label>
        <textarea id="message-help" name="help" rows={4} className={inputClass} />
      </div>
      <button
        type="submit"
        className="w-full bg-[#55BBB0] hover:bg-[#20AA45] text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300"
      >
        Send Message
      </button>
      <p className="font-inter text-sm text-[#26332F]/70 leading-relaxed">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy" className="font-semibold text-[#1F4F4A] underline underline-offset-4">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
