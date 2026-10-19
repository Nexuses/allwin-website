export type ValueService = {
  id: string;
  icon: string;
  title: string;
  text: string;
  detail?: { title: string; text: string };
};

export const services: ValueService[] = [
  {
    id: "property",
    icon: "apartment",
    title: "Real Estate Investment & Advisory",
    text: "Get guidance on buying residential or commercial property in popular areas such as Dubai, Abu Dhabi and Ras Al Khaimah. We help you find deals that match your needs, and we can assist with legal steps, property management and rental agreements.",
  },
  {
    id: "business-setup",
    icon: "domain_add",
    title: "Business Setup Advisory",
    text: "End-to-end support for setting up a new business in mainland UAE or in a free zone, whichever suits your investment or operations best.",
  },
  {
    id: "tax",
    icon: "account_balance",
    title: "Tax Advisory",
    text: "Understand the tax implications of investing in the UAE and how to make your investments more tax-efficient.",
  },
  {
    id: "wealth",
    icon: "pie_chart",
    title: "Wealth Solutions: Investment Funds & Portfolios",
    text: "Access managed investment funds focused on the UAE market, offering diversification and professional management.",
    detail: {
      title: "Sukuk Financing Advisory",
      text: "Specialist advice on Sukuk (Islamic bond) financing.",
    },
  },
  {
    id: "insurance",
    icon: "health_and_safety",
    title: "Insurance Advisory",
    text: "Get help choosing insurance for yourself and your company’s staff, including life, health, property and other key insurance.",
  },
  {
    id: "logistics",
    icon: "local_shipping",
    title: "Logistics & Relocation Support",
    text: "Guidance on choosing logistics partners to move from your home country to the UAE, including sea and air cargo with local transport support.",
  },
  {
    id: "compliance",
    icon: "verified_user",
    title: "Visa & Regulatory Compliance Assistance",
    text: "Help with visas, including visit visas and Golden Visas based on your investment or profile, as well as property registration and advice on tax obligations.",
  },
  {
    id: "interiors",
    icon: "chair",
    title: "Interior Design Partners",
    text: "Our partners help you design and create your dream space.",
  },
  {
    id: "networking",
    icon: "groups",
    title: "Networking & Investor Events",
    text: "Get invitations to local investment seminars and networking events where you can meet industry experts and other investors.",
  },
  {
    id: "vastu",
    icon: "explore",
    title: "Vastu Consultancy",
    text: "Our vastu partners guide you accurately to meet your vastu requirements.",
  },
];
