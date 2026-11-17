export type ValueService = {
  id: string;
  icon: string;
  label: string;
  title: string;
  shortTitle: string;
  text: string;
  tags: string[];
  highlights: string[];
  image: string;
  detail?: { title: string; text: string };
};

export const services: ValueService[] = [
  {
    id: "property",
    icon: "apartment",
    label: "01. Find the right property",
    title: "Real Estate Investment & Advisory",
    shortTitle: "Real Estate",
    text: "Guidance on buying residential or commercial property across Dubai, Abu Dhabi and Ras Al Khaimah — including legal steps, management and rentals.",
    tags: ["Buyers", "Investors", "Landlords"],
    highlights: [
      "Property search",
      "Legal support",
      "Management guidance",
      "Rental assistance",
    ],
    image: "https://assets.nexuses.xyz/Real_Estate_1794903965502_flyx.png",
  },
  {
    id: "business-setup",
    icon: "domain_add",
    label: "02. Launch with clarity",
    title: "Business Setup Advisory",
    shortTitle: "Business Setup",
    text: "End-to-end support to set up in mainland UAE or a free zone, matched to your investment and operations.",
    tags: ["Founders", "SMEs", "Investors"],
    highlights: [
      "Mainland setup",
      "Free zone options",
      "Licensing support",
      "Launch guidance",
    ],
    image: "https://assets.nexuses.xyz/Business_Setup_1794903809790_fggs.png",
  },
  {
    id: "tax",
    icon: "account_balance",
    label: "03. Plan with confidence",
    title: "Tax Advisory",
    shortTitle: "Tax Advisory",
    text: "Clear advice on UAE tax implications and how to structure investments more efficiently.",
    tags: ["Investors", "Businesses", "Expats"],
    highlights: [
      "Tax implications",
      "Efficiency planning",
      "Cross-border advice",
      "Next-step guidance",
    ],
    image: "https://assets.nexuses.xyz/Tax_Advisory_1794903979888_u4vi.png",
  },
  {
    id: "wealth",
    icon: "pie_chart",
    label: "04. Grow and diversify",
    title: "Wealth Solutions",
    shortTitle: "Wealth Solutions",
    text: "UAE-focused investment funds with professional management, plus specialist Sukuk financing advice.",
    tags: ["HNIs", "Investors", "Families"],
    highlights: [
      "UAE-focused funds",
      "Diversification",
      "Fund management",
      "Sukuk advice",
    ],
    image: "https://assets.nexuses.xyz/Wealth_Solutions_1794904025349_fs14.png",
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
    shortTitle: "Insurance",
    text: "Help choosing life, health, property and staff cover for you and your company.",
    tags: ["Individuals", "Employers", "Families"],
    highlights: [
      "Life & health",
      "Property cover",
      "Staff insurance",
      "Policy comparison",
    ],
    image: "https://assets.nexuses.xyz/Insurance_Advisory_1794903883527_4lxr.png",
  },
  {
    id: "logistics",
    icon: "local_shipping",
    label: "06. Move with ease",
    title: "Logistics & Relocation Support",
    shortTitle: "Logistics",
    text: "Support choosing logistics partners for your move to the UAE, including sea, air and local transport.",
    tags: ["Relocators", "Families", "Businesses"],
    highlights: [
      "Partner guidance",
      "Sea & air cargo",
      "Local transport",
      "Relocation planning",
    ],
    image: "https://assets.nexuses.xyz/Logistics_1794903920957_53vd.png",
  },
  {
    id: "compliance",
    icon: "verified_user",
    label: "07. Stay compliant",
    title: "Visa & Regulatory Compliance",
    shortTitle: "Compliance",
    text: "Help with visit and Golden Visas, property registration and key regulatory obligations.",
    tags: ["Investors", "Expats", "Entrepreneurs"],
    highlights: [
      "Visit & Golden Visas",
      "Property registration",
      "Regulatory guidance",
      "Tax obligations",
    ],
    image: "https://assets.nexuses.xyz/Compliance_1794903866167_gutj.png",
  },
  {
    id: "interiors",
    icon: "chair",
    label: "08. Shape your space",
    title: "Interior Design Partners",
    shortTitle: "Interior Design",
    text: "Trusted partners to design and create your residential or office space.",
    tags: ["Homeowners", "Investors", "Offices"],
    highlights: [
      "Space planning",
      "Residential interiors",
      "Office fit-outs",
      "Design partners",
    ],
    image: "https://assets.nexuses.xyz/Interior_Design_1794903906211_4tt0.png",
  },
  {
    id: "networking",
    icon: "groups",
    label: "09. Build connections",
    title: "Networking & Investor Events",
    shortTitle: "Networking",
    text: "Invitations to investment seminars and networking events with industry experts and investors.",
    tags: ["Investors", "Founders", "Professionals"],
    highlights: [
      "Investment seminars",
      "Networking events",
      "Expert access",
      "Introductions",
    ],
    image: "https://assets.nexuses.xyz/Networking_1794903936822_pyoj.png",
  },
  {
    id: "vastu",
    icon: "explore",
    label: "10. Align with intention",
    title: "Vastu Consultancy",
    shortTitle: "Vastu",
    text: "Partner-led vastu guidance to align your property with your requirements.",
    tags: ["Homeowners", "Buyers", "Investors"],
    highlights: [
      "Vastu review",
      "Layout advice",
      "Partner guidance",
      "Decision support",
    ],
    image: "https://assets.nexuses.xyz/Vastu_1794903997851_8v2c.png",
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
