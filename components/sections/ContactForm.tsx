"use client";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#55BBB0] transition-colors";

const labelClass = "block text-xs font-semibold text-gray-700 mb-1";

const requirementOptions = [
  "New purchase",
  "Refinance / Buy-Out",
  "SME / Corporate Loan",
  "Consumer Finance",
];

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="contact-name">
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            className={inputClass}
            placeholder="Full Name"
            type="text"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="contact-phone">
            Contact Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            className={inputClass}
            placeholder="Contact Number"
            type="tel"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="contact-email">
            Your email
          </label>
          <input
            id="contact-email"
            name="email"
            className={inputClass}
            placeholder="Your email"
            type="email"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="contact-age">
            Age
          </label>
          <input
            id="contact-age"
            name="age"
            className={inputClass}
            placeholder="Age"
            type="number"
          />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="contact-type">
          New purchase or refinance
        </label>
        <select
          id="contact-type"
          name="type"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#55BBB0] bg-white transition-colors"
        >
          {requirementOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="contact-requirement">
          Describe your requirement
        </label>
        <textarea
          id="contact-requirement"
          name="requirement"
          className={inputClass}
          placeholder="Describe your requirement"
          rows={4}
        />
      </div>
      <button
        className="w-full bg-[#55BBB0] hover:bg-[#44aba0] text-[#1e2227] font-bold py-3.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm tracking-wide"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
