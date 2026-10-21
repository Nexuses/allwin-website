"use client";

import { useState } from "react";
import { submitLead } from "../contact/submitLead";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-hidden focus:border-[#55BBB0] transition-colors disabled:opacity-60";

const labelClass = "block text-xs font-semibold text-gray-700 mb-1";

const requirementOptions = [
  "New purchase",
  "Refinance / Buy-Out",
  "SME / Corporate Loan",
  "Consumer Finance",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      await submitLead({
        source: "Homepage contact form",
        name: String(data.get("name") || ""),
        phone: String(data.get("phone") || ""),
        email: String(data.get("email") || ""),
        age: String(data.get("age") || ""),
        type: String(data.get("type") || ""),
        message: String(data.get("requirement") || ""),
      });
      form.reset();
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "We could not send your message.",
      );
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
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
            autoComplete="name"
            required
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
            autoComplete="tel"
            required
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
            autoComplete="email"
            required
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
            min={18}
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
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-hidden focus:border-[#55BBB0] bg-white transition-colors"
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
        className="w-full bg-[#55BBB0] hover:bg-[#44aba0] text-[#1e2227] font-bold py-3.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm tracking-wide disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
      {status === "success" ? (
        <p
          role="status"
          className="rounded-xl border border-[#55BBB0]/40 bg-[#E8F8F5] px-4 py-3 text-sm font-medium text-[#1F4F4A]"
        >
          Thank you. Your message has been sent and we will get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {error}
        </p>
      ) : null}
    </form>
  );
}
