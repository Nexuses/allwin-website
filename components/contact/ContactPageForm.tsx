"use client";

import { useState } from "react";
import { submitLead } from "./submitLead";

const inputClass =
  "w-full rounded-xl border border-[#D5DDD9] bg-white px-4 py-3.5 font-inter text-base text-[#26332F] outline-none transition placeholder:text-[#26332F]/35 focus:border-[#55BBB0] focus:ring-2 focus:ring-[#55BBB0]/25 disabled:opacity-60 sm:text-sm";

const labelClass =
  "mb-1.5 block font-inter text-sm font-medium text-[#385445]";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPageForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const name = [firstName, lastName].filter(Boolean).join(" ");

    setStatus("sending");
    setError("");

    try {
      await submitLead({
        source: "Contact page form",
        name,
        phone: String(data.get("phone") || ""),
        email: String(data.get("email") || ""),
        age: "",
        type: "General enquiry",
        message: String(data.get("message") || ""),
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
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="contact-first-name">
            First Name
          </label>
          <input
            id="contact-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className={inputClass}
            placeholder="First name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="contact-last-name">
            Last Name
          </label>
          <input
            id="contact-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className={inputClass}
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-phone">
          Phone Number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className={inputClass}
          placeholder="+971 5X XXX XXXX"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
          placeholder="Tell us what you need help with"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-[#1F4F4A] py-3.5 px-6 font-manrope text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0C665C] disabled:cursor-not-allowed disabled:opacity-60"
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

      <p className="font-inter text-xs leading-relaxed text-[#26332F]/55">
        By submitting this form you agree to our{" "}
        <a
          href="/privacy-policy"
          className="font-semibold text-[#1F4F4A] underline underline-offset-2"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
