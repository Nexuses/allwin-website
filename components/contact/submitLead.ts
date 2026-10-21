export type LeadPayload = {
  source: string;
  name: string;
  phone: string;
  email: string;
  age: string;
  type: string;
  message: string;
};

export async function submitLead(payload: LeadPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as {
    error?: string;
  } | null;

  if (!response.ok) {
    throw new Error(data?.error || "We could not send your message.");
  }
}
