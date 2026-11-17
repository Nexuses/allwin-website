export type ValueService = {
  id: string;
  icon: string;
  label: string;
  title: string;
  text: string;
  tags: string[];
  detail?: { title: string; text: string };
};

export const services: ValueService[] = [
  {
    id: "property",
    icon: "apartment",
    label: "01. Find the right property",
    title: "Real Estate Investment & Advisory",
    text: "Get guidance on buying residential or commercial property in popular areas such as Dubai, Abu Dhabi and Ras Al Khaimah. We help you find deals that match your needs, and we can assist with legal steps, property management and rental agreements.",
    tags: ["Buyers", "Investors", "Landlords"],
  },
  {
    id: "business-setup",
    icon: "domain_add",
    label: "02. Launch with clarity",
    title: "Business Setup Advisory",
    text: "End-to-end support for setting up a new business in mainland UAE or in a free zone, whichever suits your investment or operations best.",
    tags: ["Founders", "SMEs", "Investors"],
  },
  {
    id: "tax",
    icon: "account_balance",
    label: "03. Plan with confidence",
    title: "Tax Advisory",
    text: "Understand the tax implications of investing in the UAE and how to make your investments more tax-efficient.",
    tags: ["Investors", "Businesses", "Expats"],
  },
  {
    id: "wealth",
    icon: "pie_chart",
    label: "04. Grow and diversify",
    title: "Wealth Solutions",
    text: "Access managed investment funds focused on the UAE market, offering diversification and professional management. Specialist advice on Sukuk (Islamic bond) financing is also available.",
    tags: ["HNIs", "Investors", "Families"],
    detail: {
      title: "Sukuk Financing Advisory",
      text: "Specialist advice on Sukuk (Islamic bond) financing.",
    },
  },
  {
    id: "insurance",
    icon: "health_and_safety",
    label: "05. Protect what matters",
    title: "Insurance Advisory",
    text: "Get help choosing insurance for yourself and your company’s staff, including life, health, property and other key insurance.",
    tags: ["Individuals", "Employers", "Families"],
  },
  {
    id: "logistics",
    icon: "local_shipping",
    label: "06. Move with ease",
    title: "Logistics & Relocation Support",
    text: "Guidance on choosing logistics partners to move from your home country to the UAE, including sea and air cargo with local transport support.",
    tags: ["Relocators", "Families", "Businesses"],
  },
  {
    id: "compliance",
    icon: "verified_user",
    label: "07. Stay compliant",
    title: "Visa & Regulatory Compliance",
    text: "Help with visas, including visit visas and Golden Visas based on your investment or profile, as well as property registration and advice on tax obligations.",
    tags: ["Investors", "Expats", "Entrepreneurs"],
  },
  {
    id: "interiors",
    icon: "chair",
    label: "08. Shape your space",
    title: "Interior Design Partners",
    text: "Our partners help you design and create your dream space.",
    tags: ["Homeowners", "Investors", "Offices"],
  },
  {
    id: "networking",
    icon: "groups",
    label: "09. Build connections",
    title: "Networking & Investor Events",
    text: "Get invitations to local investment seminars and networking events where you can meet industry experts and other investors.",
    tags: ["Investors", "Founders", "Professionals"],
  },
  {
    id: "vastu",
    icon: "explore",
    label: "10. Align with intention",
    title: "Vastu Consultancy",
    text: "Our vastu partners guide you accurately to meet your vastu requirements.",
    tags: ["Homeowners", "Buyers", "Investors"],
  },
];

export const heroGallery = [
  {
    src: "https://assets.nexuses.xyz/People_relaxing_with_a_laptop_1794828668983_vdyp.png",
    alt: "Property and lifestyle planning",
    offset: "mt-10 sm:mt-16",
  },
  {
    src: "https://assets.nexuses.xyz/Coworkers_in_a_Glass_Conference_Room_1794828134974_2uop.png",
    alt: "Business setup advisory",
    offset: "mt-2 sm:mt-4",
  },
  {
    src: "https://assets.nexuses.xyz/Colleagues_collaborating_in_a_glass_office_1794829728071_ia1l.png",
    alt: "Wealth and investment guidance",
    offset: "mt-14 sm:mt-20",
  },
  {
    src: "https://assets.nexuses.xyz/Silver-haired_potter_in_her_studio_1794829254104_a2mx.png",
    alt: "SME and enterprise support",
    offset: "mt-0 sm:mt-2",
  },
  {
    src: "https://assets.nexuses.xyz/Boutique_Clothing_Display_on_Wood_Floors_1794828888248_yllv.png",
    alt: "Consumer and lifestyle finance",
    offset: "mt-8 sm:mt-12",
  },
];
