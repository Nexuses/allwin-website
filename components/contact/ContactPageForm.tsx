"use client";

import { useState } from "react";
import { submitLead } from "./submitLead";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#A9C1B8]/70 bg-white text-sm text-[#26332F] focus:outline-hidden focus:border-[#55BBB0] transition-colors disabled:opacity-60";

const labelClass = "block font-inter text-sm font-semibold text-[#385445] mb-1.5";

const options = ["New purchase", "Refinance / Buy-Out", "SME / Corporate Loan", "Consumer Finance"];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPageForm() {
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
        source: "Contact page form",
        name: String(data.get("name") || ""),
        phone: String(data.get("phone") || ""),
        email: String(data.get("email") || ""),
        age: String(data.get("age") || ""),
        type: String(data.get("type") || ""),
        message: String(data.get("help") || ""),
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
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="message-name">
            Full name
          </label>
          <input id="message-name" name="name" type="text" className={inputClass} autoComplete="name" required />
        </div>
        <div>
          <label className={labelClass} htmlFor="message-phone">
            Phone number
          </label>
          <input id="message-phone" name="phone" type="tel" className={inputClass} autoComplete="tel" required />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="message-email">
            Email
          </label>
          <input id="message-email" name="email" type="email" className={inputClass} autoComplete="email" required />
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
        disabled={status === "sending"}
        className="w-full bg-[#55BBB0] hover:bg-[#20AA45] text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
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
