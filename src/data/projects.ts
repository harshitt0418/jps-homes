export type ProjectCategory =
  "Apartments" | "Villas" | "Plots" | "Commercial" | "Township" | "Mixed-Use";

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  isIllustrative: boolean;
}

export interface FloorPlanItem {
  title: string;
  configuration?: string;
  area?: string;
  image: string;
  alt: string;
}

export interface ProjectConnectivity {
  landmark: string;
  distanceOrTime: string;
}

export interface ProjectSpecification {
  category: string;
  details: string;
}

export interface Project {
  name: string;
  developer: string;
  groupSlug: string;
  projectSlug: string;
  location: string;
  address?: string;
  category: ProjectCategory;
  configurations: string[];
  areaRanges?: string;
  acreage?: string;
  totalUnits?: string;
  launchDate?: string;
  possessionDate?: string;
  rera: string;
  status: string;
  overview: string;
  highlights: string[];
  amenities: string[];
  connectivity?: ProjectConnectivity[];
  specifications?: ProjectSpecification[];
  brochureUrl?: string;
  heroImage: ProjectImage;
  galleryImages: ProjectImage[];
  floorPlans?: FloorPlanItem[];
  masterPlanImage?: ProjectImage;
  locationMapImage?: ProjectImage;
  sourceUrls: string[];
  lastVerified: string;
}

export interface ProjectGroup {
  name: string;
  slug: string;
  aliases?: string[];
  logo: string;
  coverImage: string;
  shortDescription: string;
  fullOverview: string;
  established?: string;
  headquarters?: string;
  officialWebsite: string;
  lastVerified: string;
}

export const GROUPS: ProjectGroup[] = [
  {
    name: "Rishita Developers",
    slug: "rishita-developers",
    aliases: ["rishita"],
    logo: "/assets/groups/rishita-developers/logo.png",
    coverImage: "/assets/projects/rishita-developers/rishita-mulberry-heights/hero.png",
    shortDescription:
      "Premier luxury real estate builder in Lucknow, known for landmark high-rises including Mulberry Heights, Manhattan, and Serenity.",
    fullOverview:
      "Founded in 2008, Rishita Developers has emerged as one of Lucknow's most reputed luxury property creators. Committed to world-class architectural standards, eco-conscious planning, and on-time delivery, Rishita has established iconic high-rise residential addresses across Sushant Golf City and Gomti Nagar Extension. Their portfolio combines modern architectural refinement with vast open green habitats.",
    established: "2008",
    headquarters:
      "Coronation Anand Tower, 1st Floor 116-117, Vibhuti Khand, Gomti Nagar, Lucknow - 226010",
    officialWebsite: "https://www.rishita.in/",
    lastVerified: "2026-10-18",
  },
  {
    name: "Omaxe",
    slug: "omaxe",
    logo: "/assets/groups/omaxe/logo.png",
    coverImage: "/assets/projects/omaxe/omaxe-metro-city/hero.png",
    shortDescription:
      "Leading Indian real estate conglomerate with extensive townships, luxury towers, and commercial hubs across Lucknow.",
    fullOverview:
      "With a legacy spanning over three decades since 1987, Omaxe is one of India's largest and most trusted real estate developers. In Lucknow, Omaxe has delivered and continues to develop expansive integrated townships like Omaxe Metro City on Raebareli Road, luxury waterfront towers in Gomti Nagar Extension such as The Resort and Waterscapes, and contemporary commercial destinations under Omaxe BeTogether.",
    established: "1987",
    headquarters: "Omaxe City, Raebareli Road & Amar Shaheed Path, Lucknow",
    officialWebsite: "https://www.omaxelucknow.com/",
    lastVerified: "2026-10-18",
  },
  {
    name: "Pintail",
    slug: "pintail",
    logo: "/assets/groups/pintail/logo.webp",
    coverImage: "/assets/projects/pintail/pintail-park-city/hero.webp",
    shortDescription:
      "Eminent developer creating the expansive Pintail Park City plotted and villa township on Sultanpur Road.",
    fullOverview:
      "Pintail Infracon LLP is a progressive Lucknow infrastructure and real estate development firm focused on planned community ecosystems. Its flagship development, Pintail Park City on Sultanpur Road, integrates residential plots, custom-built villas, wide internal boulevards, landscaped parks, and modern sports infrastructure near the International Cricket Stadium.",
    headquarters:
      "D17, Pocket, Pintail Park City, 2, Sultanpur Road, Sector 4, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    officialWebsite: "https://pintailparkcity.co.in/",
    lastVerified: "2026-10-18",
  },
  {
    name: "Emaar India",
    slug: "emaar-india",
    logo: "/assets/groups/emaar-india/logo.svg",
    coverImage: "/assets/projects/emaar-india/gomti-greens-plots/hero.jpg",
    shortDescription:
      "World-renowned developer delivering LDA-approved integrated plotted townships and premium residences in Gomti Nagar Extension.",
    fullOverview:
      "Part of the global master-developer Emaar Properties, Emaar India brings iconic architectural precision, cohesive urban design, and international master-planning to Lucknow. Its signature development, Gomti Greens, is an LDA-approved integrated township offering planned residential plots and luxury residences in Gomti Nagar Extension.",
    headquarters: "Regional Office: Gomti Greens, Gomti Nagar Extension, Lucknow",
    officialWebsite: "https://in.emaar.com/en/properties/gomti-greens-plots/",
    lastVerified: "2026-10-18",
  },
  {
    name: "Migsun Group",
    slug: "migsun-group",
    logo: "/assets/groups/migsun-group/logo.png",
    coverImage: "/assets/projects/migsun-group/migsun-lucknow-central/hero.jpg",
    shortDescription:
      "Renowned multi-segment developer delivering Lucknow's premier commercial hub, Migsun Lucknow Central on Amar Shaheed Path.",
    fullOverview:
      "Migsun Group is one of North India's fastest-growing developers with over 20 million sq. ft. of delivered real estate. In Lucknow, Migsun has pioneered modern commercial development with Migsun Lucknow Central, a landmark commercial plaza strategically located right next to Medanta Hospital on Amar Shaheed Path.",
    headquarters: "Amar Shaheed Path, adjacent to Medanta Hospital, Lucknow",
    officialWebsite: "https://www.migsun-group.in/migsun-lucknow-central/",
    lastVerified: "2026-10-18",
  },
  {
    name: "Sushant Golf City / Ansal API",
    slug: "ansal-api",
    aliases: ["sushant-golf-city"],
    logo: "/assets/groups/ansal-api/logo.png",
    coverImage: "/assets/projects/ansal-api/palm-ville/hero.jpg",
    shortDescription:
      "Lucknow's flagship 3,530-acre hi-tech township on Amar Shaheed Path featuring an 18-hole championship golf course and diverse enclaves.",
    fullOverview:
      "Sushant Golf City is Lucknow's premier Hi-tech Township sprawling across 3,530 acres (extendable up to 6,000 acres) along Amar Shaheed Path and Lucknow-Sultanpur Highway. Conceptualized and developed by Ansal API, the township incorporates an 18-hole international championship golf course, luxury villas, high-rise apartments, spiritual centers, educational campuses like A.I.T.M., and major retail/commercial destinations.",
    headquarters: "Sushant Golf City, Amar Shaheed Path & Sultanpur Road, Lucknow - 226030",
    officialWebsite: "https://sushantgolfcity.co.in/overview.html",
    lastVerified: "2026-10-18",
  },
  {
    name: "Shree Raj Infrahousing",
    slug: "shree-raj",
    logo: "/assets/projects/shree-raj/gomti-green-city/hero.jpg",
    coverImage: "/assets/projects/shree-raj/gomti-green-city/hero.jpg",
    shortDescription:
      "Regional developer offering government-approved plotted residential developments along Kisan Path, Lucknow.",
    fullOverview:
      "Shree Raj Infrahousing specializes in organized plotted developments and residential land along high-growth transportation corridors including Kisan Path and New Jail Road in Lucknow.",
    officialWebsite: "https://www.shreerajinfra.com/gomti-green-city/",
    lastVerified: "2026-10-18",
  },
];

export const PROJECTS: Project[] = [
  /* ─────────────────────────────────────────────────────────────────────────
   * RISHITA DEVELOPERS
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Rishita Mulberry Heights",
    developer: "Rishita Developers",
    groupSlug: "rishita-developers",
    projectSlug: "rishita-mulberry-heights",
    location: "Sushant Golf City, Lucknow",
    address:
      "Group Housing 1, Sector C, Pocket-6, Sushant Golf City, Lucknow - 226 030, Uttar Pradesh (India)",
    category: "Apartments",
    configurations: [
      "2 BHK (D1 Tower)",
      "2 BHK (D2 Tower)",
      "2 BHK (E2 & E3)",
      "2 BHK + Store (E2 & E3)",
      "3 BHK (E3 Tower)",
      "3 BHK + SQ (C3 Tower)",
      "3 BHK + SQ-Large (B3 Tower)",
    ],
    acreage: "21.45 Acres (80% open landscaped greens)",
    totalUnits: "8 High-Rise Towers · 675+ Possessions Offered",
    possessionDate: "Phase 1-4 Delivered · Phase 5 Ongoing Handover",
    brochureUrl: "/brochures/rishita-mulberry-heights-brochure.pdf",
    connectivity: [
      { landmark: "Medanta Super Speciality Hospital", distanceOrTime: "3 mins (2.5 km)" },
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "5 mins (4.0 km)" },
      { landmark: "Lulu Mall Lucknow", distanceOrTime: "4 mins (3.2 km)" },
      { landmark: "Walmart Best Price Wholesale", distanceOrTime: "2 mins (1.5 km)" },
      {
        landmark: "Chaudhary Charan Singh International Airport",
        distanceOrTime: "15 mins via Amar Shaheed Path",
      },
      { landmark: "Phoenix Palassio Mall", distanceOrTime: "6 mins" },
      { landmark: "Charbagh Railway Station", distanceOrTime: "20 mins" },
    ],
    specifications: [
      {
        category: "Structure",
        details: "Earthquake resistant RCC framed structure designed to seismic zone compliance",
      },
      {
        category: "Flooring",
        details:
          "Vitrified tiles in drawing, dining & bedrooms; Anti-skid ceramic tiles in toilets & balconies; Wooden laminated flooring in master bedroom",
      },
      {
        category: "Doors & Windows",
        details:
          "Hardwood door frames with European style flush doors; Anodized / powder-coated aluminum sliding windows",
      },
      {
        category: "Kitchen",
        details:
          "Granite working counter with stainless steel sink; 2-ft ceramic tiles above counter",
      },
      {
        category: "Electrical & Power",
        details:
          "Concealed copper wiring with modular switches; Provision for AC points in all rooms; 100% common area power backup",
      },
      {
        category: "Security",
        details:
          "Gated 3-tier security with 24/7 CCTV surveillance, boom barriers, and biometric entrance access",
      },
    ],
    acreage: "21.45 Acres (80% open landscaped greens)",
    totalUnits: "8 High-Rise Towers · 675+ Possessions Offered",
    possessionDate: "Phase 1-4 Delivered · Phase 5 Ongoing Handover",
    brochureUrl: "/brochures/rishita-mulberry-heights-brochure.pdf",
    connectivity: [
      { landmark: "Medanta Super Speciality Hospital", distanceOrTime: "3 mins (2.5 km)" },
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "5 mins (4.0 km)" },
      { landmark: "Lulu Mall Lucknow", distanceOrTime: "4 mins (3.2 km)" },
      { landmark: "Walmart Best Price Wholesale", distanceOrTime: "2 mins (1.5 km)" },
      {
        landmark: "Chaudhary Charan Singh International Airport",
        distanceOrTime: "15 mins via Amar Shaheed Path",
      },
      { landmark: "Phoenix Palassio Mall", distanceOrTime: "6 mins" },
      { landmark: "Charbagh Railway Station", distanceOrTime: "20 mins" },
    ],
    specifications: [
      {
        category: "Structure",
        details: "Earthquake resistant RCC framed structure designed to seismic zone compliance",
      },
      {
        category: "Flooring",
        details:
          "Vitrified tiles in drawing, dining & bedrooms; Anti-skid ceramic tiles in toilets & balconies; Wooden laminated flooring in master bedroom",
      },
      {
        category: "Doors & Windows",
        details:
          "Hardwood door frames with European style flush doors; Anodized / powder-coated aluminum sliding windows",
      },
      {
        category: "Kitchen",
        details:
          "Granite working counter with stainless steel sink; 2-ft ceramic tiles above counter",
      },
      {
        category: "Electrical & Power",
        details:
          "Concealed copper wiring with modular switches; Provision for AC points in all rooms; 100% common area power backup",
      },
      {
        category: "Security",
        details:
          "Gated 3-tier security with 24/7 CCTV surveillance, boom barriers, and biometric entrance access",
      },
    ],
    rera: "UPRERAPRJ357829 / UPRERAPRJ323529 / UPRERAPRJ308470 / UPRERAPRJ192087 / UPRERAPRJ626431 / UPRERAPRJ447396",
    status: "Ongoing · 675+ Possessions Offered",
    overview:
      "Rishita Mulberry Heights offers an open and refined lifestyle amidst vast green landscapes with 80% open spaces in Sushant Golf City. Giving you the choice of 2 and 3 BHK apartments bedecked with the most modern and handpicked features, Mulberry Heights is a peaceful sanctum for wholesome family living.",
    highlights: [
      "80% open spaces across a vast green landscape",
      "675+ Possessions already offered",
      "Close to Medanta Hospital, Ekana International Cricket Stadium, Lulu Mall, and Walmart Best Price",
      "Smooth airport connectivity via Amar Shaheed Path with traffic-free wide access roads",
      "Wi-Fi enabled campus and on-site basement supermart",
    ],
    amenities: [
      "High-End Clubhouse with Modern Facilities",
      "Gated Community with CCTV & Entrance Access Control",
      "Power Back-up for Common Areas",
      "Basement & Open Car Parking",
      "Lush Green Parks with Jogging Tracks & Fountains",
      "Swimming Pool & Kids Pool",
      "Cricket Pitch & Tennis Court",
      "Fully Equipped Gymnasium",
      "Yoga & Aerobics Center",
      "On-site Supermart for Daily Needs",
    ],
    heroImage: {
      url: "/assets/projects/rishita-developers/rishita-mulberry-heights/hero.png",
      alt: "Rishita Mulberry Heights luxury high-rise residences in Sushant Golf City",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/rishita-developers/rishita-mulberry-heights/actual-site-photo.jpg",
        alt: "Rishita Mulberry Heights actual building photography and elevations",
        caption: "Actual Project Photograph",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-mulberry-heights/gallery-1.jpg",
        alt: "Rishita Mulberry Heights aerial construction and tower progress",
        caption: "Actual Tower Aerial View",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-mulberry-heights/gallery-2.jpg",
        alt: "Rishita Mulberry Heights site view and skyline",
        caption: "Tower Exterior",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-mulberry-heights/gallery-3.jpg",
        alt: "Rishita Mulberry Heights residential towers",
        caption: "Project View",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-mulberry-heights/possession.jpg",
        alt: "Rishita Mulberry Heights completed possession phase",
        caption: "Possession Offered Tower",
        isIllustrative: false,
      },
    ],
    locationMapImage: {
      url: "/assets/projects/rishita-developers/rishita-mulberry-heights/location-map.jpg",
      alt: "Rishita Mulberry Heights official location map in Sushant Golf City",
      isIllustrative: false,
    },
    sourceUrls: [
      "https://www.rishita.in/projects/ongoing-projects/rishita-mulberry-heights",
      "https://www.up-rera.in/",
    ],
    lastVerified: "2026-10-18",
  },
  {
    name: "Rishita Serenity",
    developer: "Rishita Developers",
    groupSlug: "rishita-developers",
    projectSlug: "rishita-serenity",
    location: "Sushant Golf City, Lucknow",
    address:
      "Opposite Urban Woods, Golf City Phase 1, Yusufnagar, Muzaffar Nagar Ghusval, Lucknow, UP 226030",
    category: "Apartments",
    configurations: ["3 BHK + SQ", "4 BHK + SQ", "4 BHK + SQ + ST"],
    areaRanges: "2,586 sq. ft. to 3,500+ sq. ft.",
    acreage: "21.45 Acres",
    launchDate: "19-06-2025",
    possessionDate: "Under Active Construction (Scheduled Delivery)",
    brochureUrl: "/brochures/rishita-serenity-brochure.pdf",
    connectivity: [
      {
        landmark: "Sushant Golf City 18-Hole Championship Golf Course",
        distanceOrTime: "Overlooking Golf Course",
      },
      { landmark: "Medanta Super Speciality Hospital", distanceOrTime: "4 mins" },
      { landmark: "Lulu Mall Lucknow", distanceOrTime: "5 mins" },
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "5 mins" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "15 mins" },
      { landmark: "Amar Shaheed Path Corridor", distanceOrTime: "Direct Access" },
    ],
    specifications: [
      {
        category: "Architectural Concept",
        details:
          "Biophilic architectural design featuring cantilevered sky terraces, expansive balconies, and panoramic golf greens",
      },
      {
        category: "Lobby & Entrances",
        details: "Triple-height air-conditioned designer entrance lobby with 5-star concierge desk",
      },
      {
        category: "Lifts & Circulation",
        details:
          "High-speed automated passenger elevators with separate dedicated service/stretcher elevator",
      },
      {
        category: "Clubhouse & Leisure",
        details:
          "Exclusive clubhouse with temperature-controlled indoor pool, rooftop infinity pool, and spa",
      },
      {
        category: "Eco Features",
        details: "Rainwater harvesting, solar lighting in common areas, and EV fast-charging bays",
      },
    ],
    acreage: "21.45 Acres",
    launchDate: "19-06-2025",
    possessionDate: "Under Active Construction (Scheduled Delivery)",
    brochureUrl: "/brochures/rishita-serenity-brochure.pdf",
    connectivity: [
      {
        landmark: "Sushant Golf City 18-Hole Championship Golf Course",
        distanceOrTime: "Overlooking Golf Course",
      },
      { landmark: "Medanta Super Speciality Hospital", distanceOrTime: "4 mins" },
      { landmark: "Lulu Mall Lucknow", distanceOrTime: "5 mins" },
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "5 mins" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "15 mins" },
      { landmark: "Amar Shaheed Path Corridor", distanceOrTime: "Direct Access" },
    ],
    specifications: [
      {
        category: "Architectural Concept",
        details:
          "Biophilic architectural design featuring cantilevered sky terraces, expansive balconies, and panoramic golf greens",
      },
      {
        category: "Lobby & Entrances",
        details: "Triple-height air-conditioned designer entrance lobby with 5-star concierge desk",
      },
      {
        category: "Lifts & Circulation",
        details:
          "High-speed automated passenger elevators with separate dedicated service/stretcher elevator",
      },
      {
        category: "Clubhouse & Leisure",
        details:
          "Exclusive clubhouse with temperature-controlled indoor pool, rooftop infinity pool, and spa",
      },
      {
        category: "Eco Features",
        details: "Rainwater harvesting, solar lighting in common areas, and EV fast-charging bays",
      },
    ],
    rera: "UPRERAPRJ351436/06/2025",
    status: "Under Construction · Ongoing",
    overview:
      "Rishita Serenity is an ultra-premium residential project spanning 21.45 acres in Sushant Golf City, Lucknow. Featuring 16 grand towers, it is designed for palatial luxury living with panoramic golf course views, generous natural light, and IGBC Gold Pre-certified sustainability features.",
    highlights: [
      "21.45-acre master development with 16 grand towers",
      "IGBC Gold Pre-certified green building with sustainable specifications",
      "Spacious residences ranging from 2,586 to 3,500+ sq. ft.",
      "1 minute to Shaheed Path, 2 minutes to Lulu Mall, 5 minutes to Medanta Hospital",
      "Grand double-height entrance lobbies and resort-style living",
    ],
    amenities: [
      "Exclusive Luxury Club",
      "Modern Gymnasium",
      "Swimming Pool & Separate Kids' Pool",
      "Dedicated Jogging Track",
      "Amphitheatre",
      "Children's Play Park & Forest Garden",
      "Senior Citizen Lawn & Sculpture Court",
      "Celebration Lawn & Welcome Plaza",
      "Commercial Plaza within Premises",
      "Ample Multi-Level Car Parking",
      "24/7 Gated Security & Guard Room",
    ],
    heroImage: {
      url: "/assets/projects/rishita-developers/rishita-serenity/hero.png",
      alt: "Rishita Serenity ultra-luxury residences in Sushant Golf City",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/rishita-developers/rishita-serenity/gallery-1.png",
        alt: "Rishita Serenity luxury architectural rendering",
        caption: "Architectural Exterior",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-serenity/gallery-2.png",
        alt: "Rishita Serenity landscape and grand tower elevation",
        caption: "Tower Landscape",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-serenity/gallery-3.png",
        alt: "Rishita Serenity resort swimming pool and recreation",
        caption: "Resort Pool & Deck",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-serenity/gallery-4.png",
        alt: "Rishita Serenity central garden and drop-off court",
        caption: "Arrival Court",
        isIllustrative: false,
      },
    ],
    floorPlans: [
      {
        title: "3 BHK + SQ Floor Plan",
        configuration: "3 BHK + SQ",
        area: "3,035 Sq.Ft.",
        image: "/assets/projects/rishita-developers/rishita-serenity/floorplan-1.png",
        alt: "Rishita Serenity 3 BHK + SQ floor plan layout",
      },
      {
        title: "4 BHK + SQ Floor Plan (Type A)",
        configuration: "4 BHK + SQ",
        area: "3,431 Sq.Ft.",
        image: "/assets/projects/rishita-developers/rishita-serenity/floorplan-2.png",
        alt: "Rishita Serenity 4 BHK + SQ Type A floor plan layout",
      },
      {
        title: "4 BHK + SQ Floor Plan (Type B)",
        configuration: "4 BHK + SQ",
        area: "3,452 Sq.Ft.",
        image: "/assets/projects/rishita-developers/rishita-serenity/floorplan-3.png",
        alt: "Rishita Serenity 4 BHK + SQ Type B floor plan layout",
      },
    ],
    sourceUrls: ["https://rishitaserenity.co.in/", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Rishita Manhattan",
    developer: "Rishita Developers",
    groupSlug: "rishita-developers",
    projectSlug: "rishita-manhattan",
    location: "Gomti Nagar Extension, Lucknow",
    address: "Omaxe World, Sector-7, Gomti Nagar Extension, Lucknow, Uttar Pradesh (India)",
    category: "Apartments",
    configurations: ["2 BHK", "3 BHK", "4 BHK"],
    totalUnits: "1,000+ Registries Done · 1,250+ Possessions Offered",
    possessionDate: "Ready to Move · Ongoing Handover",
    brochureUrl: "/brochures/rishita-manhattan-brochure.pdf",
    connectivity: [
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "2 mins" },
      { landmark: "Phoenix Palassio Mall", distanceOrTime: "3 mins" },
      { landmark: "Police Headquarters (Signature Building)", distanceOrTime: "4 mins" },
      { landmark: "Medanta Super Speciality Hospital", distanceOrTime: "6 mins" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "15 mins" },
      { landmark: "Hazratganj City Centre", distanceOrTime: "18 mins" },
    ],
    specifications: [
      {
        category: "Architecture",
        details:
          "Manhattan New York inspired architectural elevation with classic stone and modern curtain glazing",
      },
      {
        category: "Central Greens",
        details:
          "Manhattan Central Park themed green landscaping, musical fountains and artistic sculptures",
      },
      {
        category: "Club Manhattan",
        details:
          "Grand clubhouse with Olympic-size swimming pool, yoga lawn, badminton court, and mini theatre",
      },
      {
        category: "Security",
        details: "Multi-tier 24/7 security with RFID boom barriers and CCTV perimeter coverage",
      },
    ],
    totalUnits: "1,000+ Registries Done · 1,250+ Possessions Offered",
    possessionDate: "Ready to Move · Ongoing Handover",
    brochureUrl: "/brochures/rishita-manhattan-brochure.pdf",
    connectivity: [
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "2 mins" },
      { landmark: "Phoenix Palassio Mall", distanceOrTime: "3 mins" },
      { landmark: "Police Headquarters (Signature Building)", distanceOrTime: "4 mins" },
      { landmark: "Medanta Super Speciality Hospital", distanceOrTime: "6 mins" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "15 mins" },
      { landmark: "Hazratganj City Centre", distanceOrTime: "18 mins" },
    ],
    specifications: [
      {
        category: "Architecture",
        details:
          "Manhattan New York inspired architectural elevation with classic stone and modern curtain glazing",
      },
      {
        category: "Central Greens",
        details:
          "Manhattan Central Park themed green landscaping, musical fountains and artistic sculptures",
      },
      {
        category: "Club Manhattan",
        details:
          "Grand clubhouse with Olympic-size swimming pool, yoga lawn, badminton court, and mini theatre",
      },
      {
        category: "Security",
        details: "Multi-tier 24/7 security with RFID boom barriers and CCTV perimeter coverage",
      },
    ],
    rera: "UPRERAPRJ6682 (Phase 1) / UPRERAPRJ544612 (Phase 2) / UPRERAPRJ868210 (Phase 3)",
    status: "Ready to Move / Ongoing · 1000+ Registries Done",
    overview:
      "Rishita Manhattan draws inspiration from the towering skyscrapers of Manhattan, transported to the lush green meadows of Sector-7 Gomti Nagar Extension. Blending modern architectural idioms with the traditional warmth of Lucknow, Manhattan delivers 2, 3, and 4 BHK lifestyle residences with over 1,250 possessions offered.",
    highlights: [
      "1,000+ Registries done & 1,250+ Possessions offered",
      "Ready to move apartments in Sector-7 Gomti Nagar Extension",
      "Adjacent to Dial 112 HQ, Police Signature Building, and Phoenix Palassio",
      "High-rise towers with manicured podium gardens and sports courts",
    ],
    amenities: [
      "The Manhattan Club",
      "Large Swimming Pool & Sun Deck",
      "Gymnasium & Fitness Centre",
      "Indoor Movie Screening Theatre",
      "Restaurant & Social Lounge",
      "Landscaped Central Green Courtyards",
      "Tennis & Badminton Courts",
      "Children's Play Zone",
      "24/7 Multi-Tier Security & CCTV",
      "Covered Resident Parking",
    ],
    heroImage: {
      url: "/assets/projects/rishita-developers/rishita-manhattan/hero.png",
      alt: "Rishita Manhattan high-rise towers in Gomti Nagar Extension",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/rishita-developers/rishita-manhattan/gallery-1.jpg",
        alt: "Rishita Manhattan swimming pool and recreational deck",
        caption: "Swimming Pool & Clubhouse Deck",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-manhattan/gallery-2.jpg",
        alt: "Rishita Manhattan club architecture",
        caption: "The Manhattan Club Entrance",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-manhattan/gallery-3.jpg",
        alt: "Rishita Manhattan towers exterior view",
        caption: "Tower Skyline",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-manhattan/gallery-4.jpg",
        alt: "Rishita Manhattan completed buildings and central lawn",
        caption: "Completed Central Lawns",
        isIllustrative: false,
      },
    ],
    locationMapImage: {
      url: "/assets/projects/rishita-developers/rishita-manhattan/location-map.jpg",
      alt: "Rishita Manhattan official location map in Gomti Nagar Extension",
      isIllustrative: false,
    },
    sourceUrls: [
      "https://www.rishita.in/projects/ongoing-projects/rishita-manhattan",
      "https://www.up-rera.in/",
    ],
    lastVerified: "2026-10-18",
  },
  {
    name: "Rishita Mulberry Villas",
    developer: "Rishita Developers",
    groupSlug: "rishita-developers",
    projectSlug: "rishita-mulberry-villas",
    location: "Sushant Golf City, Lucknow",
    category: "Villas",
    configurations: ["Luxury Independent Villas"],
    acreage: "Part of 21.45-acre Mulberry master development",
    possessionDate: "Delivered / Ready for Possession",
    brochureUrl: "/brochures/rishita-mulberry-villas-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Golf Course", distanceOrTime: "Walking Distance" },
      { landmark: "Medanta Hospital", distanceOrTime: "3 mins" },
      { landmark: "Lulu Mall", distanceOrTime: "4 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    specifications: [
      {
        category: "Structure",
        details: "Independent multi-level RCC framed luxury villa architecture",
      },
      {
        category: "Finishings",
        details:
          "Imported marble in living spaces, wooden flooring in master suites, private landscaped lawns",
      },
    ],
    acreage: "Part of 21.45-acre Mulberry master development",
    possessionDate: "Delivered / Ready for Possession",
    brochureUrl: "/brochures/rishita-mulberry-villas-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Golf Course", distanceOrTime: "Walking Distance" },
      { landmark: "Medanta Hospital", distanceOrTime: "3 mins" },
      { landmark: "Lulu Mall", distanceOrTime: "4 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    specifications: [
      {
        category: "Structure",
        details: "Independent multi-level RCC framed luxury villa architecture",
      },
      {
        category: "Finishings",
        details:
          "Imported marble in living spaces, wooden flooring in master suites, private landscaped lawns",
      },
    ],
    rera: "Delivered Project · RERA Phase Completed",
    status: "Delivered",
    overview:
      "A completed luxury villa development by Rishita Developers located inside Sushant Golf City, presenting private landscaped residences in an exclusive gated neighborhood.",
    highlights: [
      "Exclusive private villa enclave",
      "Delivered project with active resident community",
      "Located within Sushant Golf City township ecosystem",
    ],
    amenities: [
      "Private Landscaped Lawns",
      "Gated Neighborhood Security",
      "Clubhouse Access",
      "Dedicated Car Parking",
      "Full Power Backup",
    ],
    heroImage: {
      url: "/assets/projects/ansal-api/palm-ville/hero.jpg",
      alt: "Rishita Mulberry Villas in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://www.rishita.in/projects/delivered-projects/rishita-mulberry-villas"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * OMAXE
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Omaxe Metro City",
    developer: "Omaxe",
    groupSlug: "omaxe",
    projectSlug: "omaxe-metro-city",
    location: "Raebareli Road, Lucknow",
    address: "Kalli Pashchim, Raebareli Road, Lucknow, Uttar Pradesh",
    category: "Township",
    configurations: [
      "Residential Plots",
      "Commercial Plots",
      "2 BHK + Study (Cassia)",
      "3 BHK (Cassia)",
      "4 BHK + Servant (Cassia)",
    ],
    acreage: "42 Acres Integrated Hi-Tech Township",
    totalUnits: "350+ Plotted Units & 8 Towers (Cassia Enclave, Silver Birch)",
    possessionDate: "Ongoing & Ready Possession Phases",
    brochureUrl: "/brochures/omaxe-metro-city-brochure.pdf",
    connectivity: [
      { landmark: "SGPGI Medical Institute", distanceOrTime: "5 mins" },
      { landmark: "Amar Shaheed Path Corridor", distanceOrTime: "2 mins" },
      { landmark: "Lucknow Outer Ring Road / Kisan Path", distanceOrTime: "Direct Link" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "10-12 mins" },
      { landmark: "Charbagh Railway Station", distanceOrTime: "18 mins" },
    ],
    specifications: [
      {
        category: "Township Infrastructure",
        details:
          "Underground electrical cables, wide asphalt sector roads, sewage treatment plant (STP), and rainwater harvesting",
      },
      {
        category: "Township Security",
        details:
          "Gated access security with boom barriers, 24/7 CCTV vigilance, and perimeter boundary wall",
      },
      {
        category: "Clubhouse",
        details:
          "Exclusive clubhouse with swimming pool, sports courts, banquet hall, and daily retail market",
      },
    ],
    acreage: "42 Acres Integrated Hi-Tech Township",
    totalUnits: "350+ Plotted Units & 8 Towers (Cassia Enclave, Silver Birch)",
    possessionDate: "Ongoing & Ready Possession Phases",
    brochureUrl: "/brochures/omaxe-metro-city-brochure.pdf",
    connectivity: [
      { landmark: "SGPGI Medical Institute", distanceOrTime: "5 mins" },
      { landmark: "Amar Shaheed Path Corridor", distanceOrTime: "2 mins" },
      { landmark: "Lucknow Outer Ring Road / Kisan Path", distanceOrTime: "Direct Link" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "10-12 mins" },
      { landmark: "Charbagh Railway Station", distanceOrTime: "18 mins" },
    ],
    specifications: [
      {
        category: "Township Infrastructure",
        details:
          "Underground electrical cables, wide asphalt sector roads, sewage treatment plant (STP), and rainwater harvesting",
      },
      {
        category: "Township Security",
        details:
          "Gated access security with boom barriers, 24/7 CCTV vigilance, and perimeter boundary wall",
      },
      {
        category: "Clubhouse",
        details:
          "Exclusive clubhouse with swimming pool, sports courts, banquet hall, and daily retail market",
      },
    ],
    rera: "UPRERAPRJ166763/08/2024 / UPRERAPRJ344049/7/2024",
    status: "Ongoing Township Development",
    overview:
      "Omaxe Metro City is a planned township situated on Raebareli Road in the Kalli Pashchim corridor of Lucknow. Offering residential plots, commercial plots, and integrated mid-rise towers like Cassia and Celestia, the township combines planned road networks, open green spaces, and modern utility infrastructure near SGPGI and HCL IT City.",
    highlights: [
      "Integrated planned township on Raebareli Road, Kalli Pashchim",
      "Close to Sanjay Gandhi Postgraduate Institute (SGPGI) and HCL IT City",
      "Wide internal roads, rainwater harvesting, and underground utilities",
      "Offers freedom to build custom homes on plots or choose ready Cassia residences",
    ],
    amenities: [
      "Organized Internal Road Network",
      "Landscaped Green Parks & Boulevards",
      "Children's Play Area",
      "Gymnasium & Fitness Centre",
      "Township Library",
      "Hanging Gallery Feature",
      "Rainwater Harvesting System",
      "Independent Water Supply Infrastructure",
      "Optical-Fibre Ready Telecommunications",
      "24/7 Gated Security & Common Area Power Backup",
    ],
    heroImage: {
      url: "/assets/projects/omaxe/omaxe-metro-city/hero.png",
      alt: "Omaxe Metro City integrated township on Raebareli Road, Lucknow",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/omaxe/omaxe-metro-city/gallery-1.jpg",
        alt: "Omaxe Metro City landscaped boulevards and fountain square",
        caption: "Township Boulevards & Fountains",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/omaxe/omaxe-metro-city/gallery-2.webp",
        alt: "Omaxe Metro City kids outdoor play facilities",
        caption: "Children's Play Area",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/omaxe/omaxe-metro-city/gallery-3.webp",
        alt: "Omaxe Metro City fitness and gym center",
        caption: "Fitness Centre",
        isIllustrative: false,
      },
    ],
    masterPlanImage: {
      url: "/assets/projects/omaxe/omaxe-metro-city/master-plan.jpg",
      alt: "Omaxe Metro City official township layout and master plan",
      caption: "Master Layout Plan",
      isIllustrative: false,
    },
    sourceUrls: [
      "https://www.omaxelucknow.com/property/omaxe-metro-city-lucknow",
      "https://www.omaxe.com/residential-property-in-lucknow/cassia",
      "https://www.up-rera.in/",
    ],
    lastVerified: "2026-10-18",
  },
  {
    name: "Omaxe BeTogether",
    developer: "Omaxe",
    groupSlug: "omaxe",
    projectSlug: "omaxe-betogether",
    location: "Gomti Nagar Extension & Vibhuti Khand, Lucknow",
    address: "Prime Commercial Nodes, Gomti Nagar Extension and Vibhuti Khand, Lucknow",
    category: "Commercial",
    configurations: [
      "Retail Shops & Showrooms",
      "High-Street Food Courts",
      "Corporate Office Spaces",
      "Luxury Studio Apartments",
    ],
    possessionDate: "Under Active Development & Leasing",
    brochureUrl: "/brochures/omaxe-betogether-brochure.pdf",
    connectivity: [
      { landmark: "Chaudhary Charan Singh Airport (Amausi Hub)", distanceOrTime: "2 mins" },
      { landmark: "Vibhuti Khand Gomti Nagar (Commercial CBD)", distanceOrTime: "Immediate" },
      { landmark: "Ekana Stadium & Shaheed Path (Extension Hub)", distanceOrTime: "3 mins" },
    ],
    specifications: [
      {
        category: "Facade",
        details:
          "Modern high-visibility double-height glass retail facade with dynamic LED signage provisions",
      },
      {
        category: "Internal Circulation",
        details:
          "Spacious central atriums, automated escalators, and dedicated goods/service elevators",
      },
      {
        category: "Parking & Utilities",
        details:
          "Multi-level basement parking with valet capacity, 100% DG power backup, central HVAC in common corridors",
      },
    ],
    possessionDate: "Under Active Development & Leasing",
    brochureUrl: "/brochures/omaxe-betogether-brochure.pdf",
    connectivity: [
      { landmark: "Chaudhary Charan Singh Airport (Amausi Hub)", distanceOrTime: "2 mins" },
      { landmark: "Vibhuti Khand Gomti Nagar (Commercial CBD)", distanceOrTime: "Immediate" },
      { landmark: "Ekana Stadium & Shaheed Path (Extension Hub)", distanceOrTime: "3 mins" },
    ],
    specifications: [
      {
        category: "Facade",
        details:
          "Modern high-visibility double-height glass retail facade with dynamic LED signage provisions",
      },
      {
        category: "Internal Circulation",
        details:
          "Spacious central atriums, automated escalators, and dedicated goods/service elevators",
      },
      {
        category: "Parking & Utilities",
        details:
          "Multi-level basement parking with valet capacity, 100% DG power backup, central HVAC in common corridors",
      },
    ],
    rera: "Registered Phase-wise per Commercial Project",
    status: "Ongoing Commercial Platform",
    overview:
      "BeTogether by Omaxe is an enterprise commercial and mixed-use platform creating high-footfall retail destinations, modern grade-A professional office suites, and high-yield luxury studio apartments across prime economic corridors of Lucknow.",
    highlights: [
      "High-footfall commercial plazas across Gomti Nagar Extension and Vibhuti Khand",
      "Curated retail, entertainment, and food court zones",
      "Modern professional workspaces for growing enterprises and professionals",
      "Compact luxury studio apartments for corporate and investor needs",
    ],
    amenities: [
      "Centrally Air-Conditioned Commercial Atrium",
      "High-Speed Passenger & Service Elevators",
      "Multi-Tier Parking Facilities",
      "24/7 Security & High-Definition CCTV Surveillance",
      "100% Power Backup for Commercial Operations",
      "Designated Food & Beverage Courtyards",
    ],
    heroImage: {
      url: "/assets/projects/omaxe/omaxe-betogether/hero.jpg",
      alt: "Omaxe BeTogether commercial and retail destination in Lucknow",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/omaxe/omaxe-betogether/gallery-1.jpg",
        alt: "Omaxe BeTogether modern commercial architecture",
        caption: "Commercial Plaza View",
        isIllustrative: false,
      },
    ],
    sourceUrls: ["https://www.omaxebetogether.co/"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Omaxe The Resort",
    developer: "Omaxe",
    groupSlug: "omaxe",
    projectSlug: "omaxe-the-resort",
    location: "Gomti Nagar Extension, Lucknow",
    category: "Apartments",
    configurations: ["3 BHK Residences", "4 BHK Residences", "Penthouses"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/omaxe-the-resort-brochure.pdf",
    connectivity: [
      { landmark: "Gomti Riverfront Park", distanceOrTime: "Fronting River Promenade" },
      { landmark: "Shaheed Path Junction", distanceOrTime: "4 mins" },
      { landmark: "Phoenix Palassio", distanceOrTime: "5 mins" },
      { landmark: "Airport", distanceOrTime: "18 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/omaxe-the-resort-brochure.pdf",
    connectivity: [
      { landmark: "Gomti Riverfront Park", distanceOrTime: "Fronting River Promenade" },
      { landmark: "Shaheed Path Junction", distanceOrTime: "4 mins" },
      { landmark: "Phoenix Palassio", distanceOrTime: "5 mins" },
      { landmark: "Airport", distanceOrTime: "18 mins" },
    ],
    rera: "UPRERAPRJ326163",
    status: "Under Construction",
    overview:
      "Omaxe The Resort is a luxury residential development in Gomti Nagar Extension delivering resort-style living with expansive floor layouts, private penthouses, and tranquil water-themed landscaped recreation.",
    highlights: [
      "Resort-themed luxury high-rise residences",
      "Starting from ₹2.79 Cr onwards*",
      "Prime address in Gomti Nagar Extension",
      "Spacious 3 & 4 BHK residences with penthouses",
    ],
    amenities: [
      "Resort-Themed Swimming Pool & Sun Deck",
      "Grand Lifestyle Clubhouse",
      "Fitness & Yoga Studio",
      "Lush Landscaped Water Gardens",
      "Reserved Resident Parking",
      "24/7 Security Surveillance",
    ],
    heroImage: {
      url: "/assets/projects/omaxe/the-resort/hero.jpg",
      alt: "Omaxe The Resort luxury residences in Gomti Nagar Extension",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: [
      "https://www.omaxe.com/residential-property-in-lucknow/the-resort-1",
      "https://www.up-rera.in/",
    ],
    lastVerified: "2026-10-18",
  },
  {
    name: "Omaxe Waterscapes",
    developer: "Omaxe",
    groupSlug: "omaxe",
    projectSlug: "omaxe-waterscapes",
    location: "Gomti Nagar Extension, Lucknow",
    category: "Apartments",
    configurations: ["3 BHK", "3 BHK + Servant"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/omaxe-waterscapes-brochure.pdf",
    connectivity: [
      { landmark: "Gomti Nagar Extension", distanceOrTime: "Prime Sector 7" },
      { landmark: "Ekana Cricket Stadium", distanceOrTime: "3 mins" },
      { landmark: "Phoenix Palassio", distanceOrTime: "4 mins" },
      { landmark: "Medanta Hospital", distanceOrTime: "7 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/omaxe-waterscapes-brochure.pdf",
    connectivity: [
      { landmark: "Gomti Nagar Extension", distanceOrTime: "Prime Sector 7" },
      { landmark: "Ekana Cricket Stadium", distanceOrTime: "3 mins" },
      { landmark: "Phoenix Palassio", distanceOrTime: "4 mins" },
      { landmark: "Medanta Hospital", distanceOrTime: "7 mins" },
    ],
    rera: "UPRERAPRJ1538 / UPRERAPRJ1263",
    status: "Established / Ready to Move",
    overview:
      "A completed water-themed residential complex in Gomti Nagar Extension featuring tranquil water cascades, central fountains, and spacious 3 BHK family residences.",
    highlights: [
      "Water cascade landscaping throughout community",
      "Ready to move apartments in Gomti Nagar Extension",
      "Close to Shaheed Path and Ekana Stadium",
    ],
    amenities: [
      "Fountains & Water Bodies",
      "Residents Clubhouse",
      "Play Area for Children",
      "Gated Security",
      "Car Parking",
    ],
    heroImage: {
      url: "/assets/projects/omaxe/waterscapes/hero.jpg",
      alt: "Omaxe Waterscapes residential apartments in Gomti Nagar Extension",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://www.omaxe.com/residential-property-in-lucknow/omaxe-waterscapes"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Hazratganj Residency",
    developer: "Omaxe",
    groupSlug: "omaxe",
    projectSlug: "hazratganj-residency",
    location: "Gomti Nagar Extension, Lucknow",
    category: "Apartments",
    configurations: ["1 BHK", "2 BHK", "3 BHK", "Penthouses"],
    possessionDate: "Ready to Move",
    brochureUrl: "/brochures/hazratganj-residency-brochure.pdf",
    connectivity: [
      { landmark: "Hazratganj Commercial Core", distanceOrTime: "Walking Distance" },
      { landmark: "Charbagh Railway Station", distanceOrTime: "10 mins" },
      { landmark: "Vidhan Sabha / Secretariat", distanceOrTime: "5 mins" },
    ],
    possessionDate: "Ready to Move",
    brochureUrl: "/brochures/hazratganj-residency-brochure.pdf",
    connectivity: [
      { landmark: "Hazratganj Commercial Core", distanceOrTime: "Walking Distance" },
      { landmark: "Charbagh Railway Station", distanceOrTime: "10 mins" },
      { landmark: "Vidhan Sabha / Secretariat", distanceOrTime: "5 mins" },
    ],
    rera: "UPRERAPRJ2050",
    status: "Established / Delivered",
    overview:
      "Hazratganj Residency draws inspiration from the colonial architecture and promenade charm of Hazratganj, adapted into modern apartment living in Gomti Nagar Extension.",
    highlights: [
      "Heritage-inspired architecture",
      "RERA Registered: UPRERAPRJ2050",
      "Diverse options from 1 to 3 BHK and penthouses",
    ],
    amenities: [
      "Clubhouse & Recreation",
      "Swimming Pool",
      "Landscaped Lawns",
      "Power Backup",
      "24/7 Security",
    ],
    heroImage: {
      url: "/assets/projects/omaxe/hazratganj-residency/hero.jpg",
      alt: "Hazratganj Residency in Gomti Nagar Extension",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://www.omaxe.com/residential-property-in-lucknow/hazratganj-residency"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Omaxe Residency II",
    developer: "Omaxe",
    groupSlug: "omaxe",
    projectSlug: "omaxe-residency-ii",
    location: "Gomti Nagar Extension, Lucknow",
    category: "Apartments",
    configurations: ["2 BHK", "3 BHK", "3 BHK + Servant"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/omaxe-residency-ii-brochure.pdf",
    connectivity: [
      { landmark: "Sector 7 Gomti Nagar Extension", distanceOrTime: "Immediate" },
      { landmark: "Shaheed Path", distanceOrTime: "3 mins" },
      { landmark: "Airport", distanceOrTime: "16 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/omaxe-residency-ii-brochure.pdf",
    connectivity: [
      { landmark: "Sector 7 Gomti Nagar Extension", distanceOrTime: "Immediate" },
      { landmark: "Shaheed Path", distanceOrTime: "3 mins" },
      { landmark: "Airport", distanceOrTime: "16 mins" },
    ],
    rera: "UPRERAPRJ1682 / UPRERAPRJ1720 / UPRERAPRJ368818",
    status: "Delivered / Established Community",
    overview:
      "A prominent multi-phase residential development in Gomti Nagar Extension offering comfortable family apartments, green parks, and community facilities.",
    highlights: [
      "Established community in Sector-7 Gomti Nagar Extension",
      "Multi-phase development with verified RERA registrations",
      "Practical family configurations with servant quarter options",
    ],
    amenities: [
      "Community Hall",
      "Kids Play Area",
      "Jogging Track",
      "Power Backup",
      "Gated Security",
    ],
    heroImage: {
      url: "/assets/projects/omaxe/omaxe-residency-ii/hero.jpg",
      alt: "Omaxe Residency II in Gomti Nagar Extension",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://www.omaxe.com/residential-property-in-lucknow/omaxe-residency-ii"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * PINTAIL
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Pintail Park City",
    developer: "Pintail Infracon LLP",
    groupSlug: "pintail",
    projectSlug: "pintail-park-city",
    location: "Sultanpur Road, Lucknow",
    address:
      "D17, Pocket, Pintail Park City, 2, Sultanpur Road, Sector 4, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    category: "Township",
    configurations: ["Premium Residential Plots", "Luxury Villas"],
    acreage: "200-Acre Integrated Smart Township by Pintail Infracon LLP",
    launchDate: "12-03-2018",
    possessionDate: "Under Active Development & Phased Handover",
    brochureUrl: "/brochures/pintail-park-city-brochure.pdf",
    connectivity: [
      { landmark: "Lucknow IT City (HCL SEZ Campus)", distanceOrTime: "2 mins" },
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "5 mins" },
      { landmark: "Shaan-E-Awadh Shopping Complex & Tower", distanceOrTime: "5 mins" },
      {
        landmark: "Super-Specialty Cancer Hospital & Research Institute",
        distanceOrTime: "3 mins",
      },
      { landmark: "Police & PSC Training Academy", distanceOrTime: "3 mins" },
      {
        landmark: "Mother Dairy / Amul Automated Processing Plant",
        distanceOrTime: "Direct Proximity",
      },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "15 mins" },
    ],
    specifications: [
      {
        category: "Township Master Plan",
        details:
          "200-acre smart integrated township with 45-meter and 24-meter wide internal sector boulevards",
      },
      {
        category: "Recreation & Club",
        details:
          "Grand clubhouse with swimming pool, indoor sports lounge (carrom, snooker, table tennis), and fitness gym",
      },
      {
        category: "Security & Safety",
        details:
          "24/7 CCTV surveillance across sector roads, boundary walled township with controlled access checkpoints",
      },
      {
        category: "Civil Utilities",
        details:
          "Underground electrical conduits, street lighting, scientific sewage network, and rainwater replenishment pits",
      },
    ],
    acreage: "200-Acre Integrated Smart Township by Pintail Infracon LLP",
    launchDate: "12-03-2018",
    possessionDate: "Under Active Development & Phased Handover",
    brochureUrl: "/brochures/pintail-park-city-brochure.pdf",
    connectivity: [
      { landmark: "Lucknow IT City (HCL SEZ Campus)", distanceOrTime: "2 mins" },
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "5 mins" },
      { landmark: "Shaan-E-Awadh Shopping Complex & Tower", distanceOrTime: "5 mins" },
      {
        landmark: "Super-Specialty Cancer Hospital & Research Institute",
        distanceOrTime: "3 mins",
      },
      { landmark: "Police & PSC Training Academy", distanceOrTime: "3 mins" },
      {
        landmark: "Mother Dairy / Amul Automated Processing Plant",
        distanceOrTime: "Direct Proximity",
      },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "15 mins" },
    ],
    specifications: [
      {
        category: "Township Master Plan",
        details:
          "200-acre smart integrated township with 45-meter and 24-meter wide internal sector boulevards",
      },
      {
        category: "Recreation & Club",
        details:
          "Grand clubhouse with swimming pool, indoor sports lounge (carrom, snooker, table tennis), and fitness gym",
      },
      {
        category: "Security & Safety",
        details:
          "24/7 CCTV surveillance across sector roads, boundary walled township with controlled access checkpoints",
      },
      {
        category: "Civil Utilities",
        details:
          "Underground electrical conduits, street lighting, scientific sewage network, and rainwater replenishment pits",
      },
    ],
    rera: "UPRERAPRJ15457 (Promoter: PINTAIL INFRACON LLP, Agent: UPRERAAGT000525/04/2026, Launch: 12-03-2018)",
    status: "Ongoing Plotted & Villa Township",
    overview:
      "Pintail Park City is an integrated plotted and villa township on Sultanpur Road, Lucknow. Spanning lush landscaped corridors, it offers buyers the freedom to build their dream residence on well-spaced plots or choose ready planned villas accompanied by modern community amenities.",
    highlights: [
      "Starting From ₹ 1.16 Cr* Onwards",
      "Plots & Villas in a gated master-planned township",
      "Close to International Cricket Stadium, Shaan-E-Awadh, and Phoenix Palassio",
      "Near IIIT, CSI Tower, and Super-Speciality Cancer Hospital",
      "Official RERA Registered: UPRERAPRJ15457",
    ],
    amenities: [
      "24X7 Water Supply",
      "Open-Air Amphitheater",
      "Badminton Court & Basketball Courts",
      "Equipped Gymnasium Area",
      "Carrom Board & Indoor Games Room",
      "Swimming Pool & Kids Splash Park",
      "Children's Play Area",
      "Dedicated Car Parking",
      "High-Definition CCTV Camera Coverage",
      "24/7 Multi-Point Security",
    ],
    heroImage: {
      url: "/assets/projects/pintail/pintail-park-city/hero.webp",
      alt: "Pintail Park City entrance and landscaped boulevard on Sultanpur Road, Lucknow",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/pintail/pintail-park-city/gallery-1.webp",
        alt: "Pintail Park City lush green township view",
        caption: "Township Landscape",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/pintail/pintail-park-city/about.webp",
        alt: "Pintail Park City community parks and roads",
        caption: "Township Infrastructure",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/pintail/pintail-park-city/rera-qr.png",
        alt: "Pintail Park City official UP RERA QR Code",
        caption: "Official RERA QR",
        isIllustrative: false,
      },
    ],
    sourceUrls: ["https://pintailparkcity.co.in/", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * EMAAR INDIA
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Gomti Greens Plots",
    developer: "Emaar India",
    groupSlug: "emaar-india",
    projectSlug: "gomti-greens-plots",
    location: "Gomti Nagar Extension, Lucknow",
    address: "Gomti Greens, Amar Shaheed Path Link, Gomti Nagar Extension, Lucknow, UP",
    category: "Plots",
    configurations: ["Residential Plots"],
    acreage: "Master-Planned LDA Approved Township",
    possessionDate: "Ready for Possession & Registry",
    brochureUrl: "/brochures/gomti-greens-plots-brochure.pdf",
    connectivity: [
      { landmark: "Amar Shaheed Path Corridor", distanceOrTime: "3 mins" },
      { landmark: "Medanta Super Speciality Hospital", distanceOrTime: "5 mins" },
      { landmark: "Phoenix Palassio & Ekana Stadium", distanceOrTime: "6 mins" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "15 mins" },
      { landmark: "Charbagh Railway Station", distanceOrTime: "20 mins" },
    ],
    specifications: [
      {
        category: "Approvals",
        details:
          "Fully approved by Lucknow Development Authority (LDA) with clear freehold ownership",
      },
      {
        category: "Infrastructure",
        details:
          "Emaar international engineering standards: underground power cables, storm water drains, and municipal water supply",
      },
      {
        category: "Roads & Greens",
        details:
          "Paved broad internal roads with tree-lined pedestrian footpaths and manicured neighborhood parks",
      },
    ],
    acreage: "Master-Planned LDA Approved Township",
    possessionDate: "Ready for Possession & Registry",
    brochureUrl: "/brochures/gomti-greens-plots-brochure.pdf",
    connectivity: [
      { landmark: "Amar Shaheed Path Corridor", distanceOrTime: "3 mins" },
      { landmark: "Medanta Super Speciality Hospital", distanceOrTime: "5 mins" },
      { landmark: "Phoenix Palassio & Ekana Stadium", distanceOrTime: "6 mins" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "15 mins" },
      { landmark: "Charbagh Railway Station", distanceOrTime: "20 mins" },
    ],
    specifications: [
      {
        category: "Approvals",
        details:
          "Fully approved by Lucknow Development Authority (LDA) with clear freehold ownership",
      },
      {
        category: "Infrastructure",
        details:
          "Emaar international engineering standards: underground power cables, storm water drains, and municipal water supply",
      },
      {
        category: "Roads & Greens",
        details:
          "Paved broad internal roads with tree-lined pedestrian footpaths and manicured neighborhood parks",
      },
    ],
    rera: "UPRERAPRJ5635",
    status: "LDA Approved Township",
    overview:
      "Gomti Greens is an LDA-approved integrated plotted township developed by Emaar India in Gomti Nagar Extension. Featuring lush green landscaping, well spaced-out residential plots, plush amenities, and solid infrastructure, Gomti Greens provides a secure, well-planned gated community for contemporary living.",
    highlights: [
      "LDA approved integrated township",
      "Cohesive urban design with unified signage and aesthetic road lighting",
      "Common landscape green area spread across the entire township",
      "Landscaped boulevards and wide internal asphalt roads",
      "Comprehensive master-planned plots approved by Lucknow Development Authority",
    ],
    amenities: [
      "Gated Community Security & Surveillance",
      "Underground Electrical & Water Supply Networks",
      "Landscaped Boulevards & Central Green Parks",
      "Rainwater Drainage Infrastructure",
      "Dedicated Commercial & Conveniences Zone",
    ],
    heroImage: {
      url: "/assets/projects/emaar-india/gomti-greens-plots/hero.jpg",
      alt: "Emaar Gomti Greens residential plots in Gomti Nagar Extension",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/emaar-india/gomti-greens-plots/property.jpg",
        alt: "Emaar Gomti Greens landscaped community avenues and green open plots",
        caption: "Township Avenues & Greenery",
        isIllustrative: false,
      },
    ],
    sourceUrls: [
      "https://in.emaar.com/en/properties/gomti-greens-plots/",
      "https://www.up-rera.in/",
    ],
    lastVerified: "2026-10-18",
  },
  {
    name: "Elite Oasis",
    developer: "Emaar India",
    groupSlug: "emaar-india",
    projectSlug: "elite-oasis",
    location: "Gomti Greens, Sector 7, Lucknow",
    address: "Sector 7, Gomti Greens, Gomti Nagar Extension, Lucknow",
    category: "Apartments",
    configurations: ["3 BHK Residences", "4 BHK Residences"],
    possessionDate: "Under Construction · Premium Emaar Enclave",
    brochureUrl: "/brochures/elite-oasis-brochure.pdf",
    connectivity: [
      { landmark: "Gomti Nagar Extension", distanceOrTime: "Prime Sector" },
      { landmark: "Shaheed Path", distanceOrTime: "3 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    possessionDate: "Under Construction · Premium Emaar Enclave",
    brochureUrl: "/brochures/elite-oasis-brochure.pdf",
    connectivity: [
      { landmark: "Gomti Nagar Extension", distanceOrTime: "Prime Sector" },
      { landmark: "Shaheed Path", distanceOrTime: "3 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    rera: "UPRERAPRJ944123/02/2025",
    status: "Ongoing Development",
    overview:
      "Elite Oasis is a premium residential development by Emaar India nestled inside Sector 7 of the Gomti Greens township, providing elegant 3 and 4 BHK residences with private club amenities and verdant views.",
    highlights: [
      "Located inside master-planned Gomti Greens township",
      "3 & 4 BHK premium floor plan configurations",
      "RERA Registered: UPRERAPRJ944123/02/2025",
    ],
    amenities: [
      "Clubhouse & Social Lounge",
      "Swimming Pool",
      "Fitness Center",
      "Landscaped Green Courtyards",
      "24/7 Security & Surveillance",
      "Dedicated Parking",
    ],
    heroImage: {
      url: "/assets/projects/emaar-india/elite-oasis/hero.jpg",
      alt: "Emaar Elite Oasis residences in Gomti Greens, Lucknow",
      isIllustrative: false,
    },
    galleryImages: [],
    sourceUrls: ["https://in.emaar.com/en/properties/elite-oasis/", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * MIGSUN GROUP
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Migsun Lucknow Central",
    developer: "Migsun Group",
    groupSlug: "migsun-group",
    projectSlug: "migsun-lucknow-central",
    location: "Amar Shaheed Path, Lucknow",
    address: "Amar Shaheed Path, adjacent to Medanta Hospital, Lucknow, Uttar Pradesh",
    category: "Commercial",
    configurations: [
      "Lower Ground Retail",
      "Ground Floor High-Street Retail",
      "1st Floor Retail Outlets",
      "2nd Floor Business Suites",
      "3rd Floor Business Suites",
      "Grand Food Court",
    ],
    possessionDate: "Under Active Construction · Booking Open",
    brochureUrl: "/brochures/migsun-lucknow-central-brochure.pdf",
    connectivity: [
      {
        landmark: "Medanta Super Speciality Hospital",
        distanceOrTime: "Direct Adjacency (Zero-minute walk)",
      },
      { landmark: "Amar Shaheed Path", distanceOrTime: "Direct Frontage with Dedicated Slip Road" },
      { landmark: "Lulu Mall Lucknow", distanceOrTime: "2 mins" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "10 mins" },
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "4 mins" },
      { landmark: "Decathlon Sports Hub", distanceOrTime: "2 mins" },
    ],
    specifications: [
      {
        category: "Retail Architecture",
        details:
          "Stunning high-street commercial architecture with triple-height glass frontage and maximum road visibility",
      },
      {
        category: "Grand Food Court",
        details:
          "Massive 500+ seating capacity themed international grand food court with premium restaurant anchors",
      },
      {
        category: "Circulation & Parking",
        details:
          "Multiple escalators, high-speed passenger elevators, and multi-level basement car parking",
      },
      {
        category: "Power & Systems",
        details:
          "100% generator power backup, central air-conditioning in public atriums, and advanced fire safety systems",
      },
    ],
    possessionDate: "Under Active Construction · Booking Open",
    brochureUrl: "/brochures/migsun-lucknow-central-brochure.pdf",
    connectivity: [
      {
        landmark: "Medanta Super Speciality Hospital",
        distanceOrTime: "Direct Adjacency (Zero-minute walk)",
      },
      { landmark: "Amar Shaheed Path", distanceOrTime: "Direct Frontage with Dedicated Slip Road" },
      { landmark: "Lulu Mall Lucknow", distanceOrTime: "2 mins" },
      { landmark: "Chaudhary Charan Singh International Airport", distanceOrTime: "10 mins" },
      { landmark: "Ekana International Cricket Stadium", distanceOrTime: "4 mins" },
      { landmark: "Decathlon Sports Hub", distanceOrTime: "2 mins" },
    ],
    specifications: [
      {
        category: "Retail Architecture",
        details:
          "Stunning high-street commercial architecture with triple-height glass frontage and maximum road visibility",
      },
      {
        category: "Grand Food Court",
        details:
          "Massive 500+ seating capacity themed international grand food court with premium restaurant anchors",
      },
      {
        category: "Circulation & Parking",
        details:
          "Multiple escalators, high-speed passenger elevators, and multi-level basement car parking",
      },
      {
        category: "Power & Systems",
        details:
          "100% generator power backup, central air-conditioning in public atriums, and advanced fire safety systems",
      },
    ],
    rera: "UPRERAPRJ589752/04/2024 (Agent: UPRERAAGT25307)",
    status: "Booking Open · Ongoing Construction",
    overview:
      "Migsun Lucknow Central is a landmark commercial development situated on Amar Shaheed Path right next to Medanta Hospital. Designed as Lucknow's largest commercial plaza, it integrates high-street retail shops, expansive dining options, a grand food court with an attractive 50:50 payment plan, and sophisticated business suites.",
    highlights: [
      "Starts from ₹9,990/- Sq.Ft.*",
      "Lucknow's biggest commercial plaza with architectural landmark facade",
      "Located directly on Amar Shaheed Path adjacent to Medanta Hospital",
      "Grand Food Court with 50:50 payment plan option",
      "High-street retail with double-height shops and maximum road visibility",
    ],
    amenities: [
      "Stunning Hi-Street Mall Format",
      "Grand Food Court & Fine Dining Terraces",
      "High-Speed Elevators & Escalators",
      "Multi-Tier Dedicated Basement Parking",
      "Centrally Air-Conditioned Common Circulation",
      "24/7 Power Backup & Fire Safety Systems",
      "High-Definition CCTV & Round-the-Clock Security",
    ],
    heroImage: {
      url: "/assets/projects/migsun-group/migsun-lucknow-central/hero.jpg",
      alt: "Migsun Lucknow Central commercial plaza on Amar Shaheed Path, Lucknow",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/migsun-group/migsun-lucknow-central/gallery-1.jpg",
        alt: "Migsun Lucknow Central architectural rendering",
        caption: "Plaza Elevation",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/migsun-group/migsun-lucknow-central/gallery-2.jpg",
        alt: "Migsun Lucknow Central shopping galleria",
        caption: "Retail Galleria",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/migsun-group/migsun-lucknow-central/gallery-3.jpg",
        alt: "Migsun Lucknow Central business suites and food court",
        caption: "Business & Food Court",
        isIllustrative: false,
      },
    ],
    sourceUrls: ["https://www.migsun-group.in/migsun-lucknow-central/", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * SUSHANT GOLF CITY / ANSAL API
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Palm Ville",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "palm-ville",
    location: "Sushant Golf City, Lucknow",
    category: "Villas",
    configurations: ["4 BHK Luxury Villas"],
    acreage: "Prime Enclave within 3,530-Acre Sushant Golf City",
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/palm-ville-brochure.pdf",
    connectivity: [
      { landmark: "18-Hole Championship Golf Course", distanceOrTime: "2 mins" },
      { landmark: "Medanta Hospital", distanceOrTime: "4 mins" },
      { landmark: "Lulu Mall", distanceOrTime: "5 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    acreage: "Prime Enclave within 3,530-Acre Sushant Golf City",
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/palm-ville-brochure.pdf",
    connectivity: [
      { landmark: "18-Hole Championship Golf Course", distanceOrTime: "2 mins" },
      { landmark: "Medanta Hospital", distanceOrTime: "4 mins" },
      { landmark: "Lulu Mall", distanceOrTime: "5 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    rera: "Phase details to confirm",
    status: "Established Villa Enclave",
    overview:
      "Palm Ville is a distinguished enclave of 4 BHK luxury villas inside the 3,530-acre Sushant Golf City township, offering private lawns, wide road frontages, and golf course community living.",
    highlights: [
      "4 BHK luxury independent villas",
      "Set inside Sushant Golf City with championship golf access",
      "Private gardens and covered parking",
    ],
    amenities: [
      "Access to 18-Hole Championship Golf Course",
      "Gated Security & Patrolling",
      "Township Parks & Open Spaces",
      "Wide Boulevard Roads",
      "Power Backup & Utilities",
    ],
    heroImage: {
      url: "/assets/projects/ansal-api/palm-ville/hero.jpg",
      alt: "Palm Ville luxury villas in Sushant Golf City, Lucknow",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Celebrity Greens",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "celebrity-greens",
    location: "Sushant Golf City, Lucknow",
    category: "Apartments",
    configurations: ["2 BHK", "3 BHK", "4 BHK Apartments"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/celebrity-greens-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Core", distanceOrTime: "Direct" },
      { landmark: "Medanta Hospital", distanceOrTime: "4 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/celebrity-greens-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Core", distanceOrTime: "Direct" },
      { landmark: "Medanta Hospital", distanceOrTime: "4 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    rera: "UPRERAPRJ8838 / UPRERAPRJ3405",
    status: "Established Community",
    overview:
      "Celebrity Greens is one of Sushant Golf City's premier high-rise residential apartment communities, providing golf-facing views, landscaped recreation, and access to township conveniences.",
    highlights: [
      "Views overlooking the golf course fairways",
      "RERA Registered: UPRERAPRJ8838 / UPRERAPRJ3405",
      "Close to Walmart Best Price, Medanta Hospital, and ISKCON Spiritual Centre",
    ],
    amenities: [
      "Clubhouse & Swimming Pool",
      "Children's Play Park",
      "Landscaped Central Greens",
      "24/7 Gated Security",
      "Covered Parking & Power Backup",
    ],
    heroImage: {
      url: "/assets/projects/ansal-api/celebrity-greens/hero.jpg",
      alt: "Celebrity Greens residential towers in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Celebrity Meadows",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "celebrity-meadows",
    location: "Sushant Golf City, Lucknow",
    category: "Apartments",
    configurations: ["Residential Apartments"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/celebrity-meadows-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Core", distanceOrTime: "Direct" },
      { landmark: "Ekana Stadium", distanceOrTime: "6 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/celebrity-meadows-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Core", distanceOrTime: "Direct" },
      { landmark: "Ekana Stadium", distanceOrTime: "6 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    rera: "UPRERAPRJ3206 / UPRERAPRJ5602",
    status: "Established Community",
    overview:
      "A peaceful apartment complex in Sushant Golf City surrounded by green meadows and landscaped courtyards, ideal for family living.",
    highlights: [
      "Quiet residential enclave within Sushant Golf City",
      "RERA Registered: UPRERAPRJ3206 / UPRERAPRJ5602",
      "Near GD Goenka Public School and Ansal Institute (A.I.T.M.)",
    ],
    amenities: [
      "Green Lawns & Play Area",
      "Community Hall",
      "Gated Security",
      "Dedicated Parking",
      "Water Supply",
    ],
    heroImage: {
      url: "/assets/projects/ansal-api/celebrity-meadows/hero.jpg",
      alt: "Celebrity Meadows in Sushant Golf City, Lucknow",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Golf Gateway Towers",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "golf-gateway",
    location: "Sushant Golf City, Lucknow",
    category: "Apartments",
    configurations: ["Residential Apartments"],
    possessionDate: "Under Construction / Finishing",
    brochureUrl: "/brochures/golf-gateway-towers-brochure.pdf",
    connectivity: [
      { landmark: "Main Entry Boulevard of Sushant Golf City", distanceOrTime: "Direct Frontage" },
      { landmark: "Shaheed Path", distanceOrTime: "1 min" },
      { landmark: "Medanta", distanceOrTime: "3 mins" },
    ],
    rera: "UPRERAPRJ3331",
    status: "Established",
    overview:
      "Positioned right at the entry gateway of Sushant Golf City on Amar Shaheed Path, Golf Gateway Towers offers unmatched connectivity and modern high-rise living.",
    highlights: [
      "Gateway address on Amar Shaheed Path",
      "RERA Registered: UPRERAPRJ3331",
      "Direct arterial access to Lucknow Airport and Gomti Nagar",
    ],
    amenities: ["Security Surveillance", "High-Speed Lifts", "Power Backup", "Resident Parking"],
    heroImage: {
      url: "/assets/projects/ansal-api/golf-gateway/hero.jpg",
      alt: "Golf Gateway Towers in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Golf Vista",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "golf-vista",
    location: "Sushant Golf City, Lucknow",
    category: "Apartments",
    configurations: ["Residential Apartments"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/golf-vista-brochure.pdf",
    connectivity: [
      { landmark: "18-Hole Golf Course", distanceOrTime: "Overlooking Fairways" },
      { landmark: "Lulu Mall", distanceOrTime: "4 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/golf-vista-brochure.pdf",
    connectivity: [
      { landmark: "18-Hole Golf Course", distanceOrTime: "Overlooking Fairways" },
      { landmark: "Lulu Mall", distanceOrTime: "4 mins" },
      { landmark: "Airport", distanceOrTime: "15 mins" },
    ],
    rera: "UPRERAPRJ5801",
    status: "Established",
    overview:
      "Golf Vista offers residential apartments with expansive views overlooking the 18-hole championship golf course and green fairways of Sushant Golf City.",
    highlights: [
      "Direct views of the golf fairways",
      "RERA Registered: UPRERAPRJ5801",
      "Peaceful environment with world-class sports amenities",
    ],
    amenities: [
      "Clubhouse Access",
      "Gated Security",
      "Landscaped Parks",
      "Resident Parking",
      "Power Backup",
    ],
    heroImage: {
      url: "/assets/projects/ansal-api/golf-vista/hero.jpg",
      alt: "Golf Vista apartments in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Bliss Delight",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "bliss-delight",
    location: "Sushant Golf City, Lucknow",
    category: "Apartments",
    configurations: ["Residential Apartments"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/bliss-delight-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City", distanceOrTime: "Direct" },
      { landmark: "Medanta Hospital", distanceOrTime: "5 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/bliss-delight-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City", distanceOrTime: "Direct" },
      { landmark: "Medanta Hospital", distanceOrTime: "5 mins" },
    ],
    rera: "UPRERAPRJ4754",
    status: "Established",
    overview:
      "Contemporary residential apartment complex built inside Sushant Golf City offering secure, well-planned apartments for modern families.",
    highlights: [
      "RERA Registered: UPRERAPRJ4754",
      "Close to shopping and healthcare facilities in the township",
      "Gated family-oriented environment",
    ],
    amenities: ["Play Parks", "24/7 Security", "Water Supply", "Power Backup", "Dedicated Parking"],
    heroImage: {
      url: "/assets/projects/ansal-api/bliss-delight/hero.jpg",
      alt: "Bliss Delight residential apartments in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Larchwood Villa",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "larchwood-villa",
    location: "Sushant Golf City, Lucknow",
    category: "Villas",
    configurations: ["Independent Luxury Villas"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/larchwood-villa-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Golf Course", distanceOrTime: "3 mins" },
      { landmark: "Sultanpur Highway", distanceOrTime: "2 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/larchwood-villa-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Golf Course", distanceOrTime: "3 mins" },
      { landmark: "Sultanpur Highway", distanceOrTime: "2 mins" },
    ],
    rera: "Confirm phase registration",
    status: "Established Villa Enclave",
    overview:
      "Exclusive independent villa enclave in Sushant Golf City characterized by spacious layouts, private gardens, and serene tree-lined streets.",
    highlights: [
      "Independent luxury villas",
      "Located inside Sushant Golf City with full township access",
      "Private gardens and driveways",
    ],
    amenities: ["Gated Security", "Private Parking", "Wide Internal Roads", "Township Utilities"],
    heroImage: {
      url: "/assets/projects/ansal-api/larchwood-villa/hero.jpg",
      alt: "Larchwood Villa in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Akanksha Enclave",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "akanksha-enclave",
    location: "Sushant Golf City, Lucknow",
    category: "Apartments",
    configurations: ["Residential Apartments"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/akanksha-enclave-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Sector B", distanceOrTime: "Direct" },
      { landmark: "Walmart Best Price", distanceOrTime: "3 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/akanksha-enclave-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Sector B", distanceOrTime: "Direct" },
      { landmark: "Walmart Best Price", distanceOrTime: "3 mins" },
    ],
    rera: "Confirm phase registration",
    status: "Established Community",
    overview:
      "Residential apartment development in Sushant Golf City offering comfortable family living with convenient access to markets and schools.",
    highlights: [
      "Established community inside Sushant Golf City",
      "Convenient access to local shopping and schools",
      "Gated residential neighborhood",
    ],
    amenities: ["Gated Security", "Parking", "Water & Electricity Supply"],
    heroImage: {
      url: "/assets/projects/ansal-api/akanksha-enclave/hero.jpg",
      alt: "Akanksha Enclave in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Serene Lakeview",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "serene-lakeview",
    location: "Sushant Golf City, Lucknow",
    category: "Apartments",
    configurations: ["Residential Apartments"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/serene-lakeview-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Lake Precinct", distanceOrTime: "Lake Facing" },
      { landmark: "Medanta", distanceOrTime: "4 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/serene-lakeview-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Lake Precinct", distanceOrTime: "Lake Facing" },
      { landmark: "Medanta", distanceOrTime: "4 mins" },
    ],
    rera: "Confirm phase registration",
    status: "Established Community",
    overview:
      "Waterfront-facing residential towers overlooking the lakes and green landscapes of Sushant Golf City.",
    highlights: [
      "Overlooks internal lakes and fairways",
      "Tranquil community atmosphere",
      "Full access to Sushant Golf City amenities",
    ],
    amenities: ["Lakefront Promenade", "Gated Security", "Parking", "Power Backup"],
    heroImage: {
      url: "/assets/projects/ansal-api/serene-lakeview/hero.jpg",
      alt: "Serene Lakeview in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Basera Enclave",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "basera-enclave",
    location: "Sushant Golf City, Lucknow",
    category: "Apartments",
    configurations: ["Residential Apartments"],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/basera-enclave-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Arterial Access", distanceOrTime: "Direct" },
      { landmark: "Shaheed Path", distanceOrTime: "4 mins" },
    ],
    possessionDate: "Delivered / Ready to Move",
    brochureUrl: "/brochures/basera-enclave-brochure.pdf",
    connectivity: [
      { landmark: "Sushant Golf City Arterial Access", distanceOrTime: "Direct" },
      { landmark: "Shaheed Path", distanceOrTime: "4 mins" },
    ],
    rera: "Confirm phase registration",
    status: "Established Community",
    overview:
      "High-density residential community in Sushant Golf City designed for accessible and practical family living.",
    highlights: [
      "Convenient access to Amar Shaheed Path",
      "Established residential enclave",
      "Gated neighborhood",
    ],
    amenities: ["Security", "Parking", "Water Supply"],
    heroImage: {
      url: "/assets/projects/ansal-api/basera-enclave/hero.jpg",
      alt: "Basera Enclave in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html"],
    lastVerified: "2026-10-18",
  },
  {
    name: "Ansal Business Park 2",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "ansal-business-park-2",
    location: "Sushant Golf City, Lucknow",
    category: "Commercial",
    configurations: ["Commercial & Corporate Offices"],
    possessionDate: "Operational / Ready for Fitouts",
    brochureUrl: "/brochures/ansal-business-park-2-brochure.pdf",
    connectivity: [
      { landmark: "Amar Shaheed Path Corridor", distanceOrTime: "Direct Frontage" },
      { landmark: "Airport", distanceOrTime: "12 mins" },
    ],
    possessionDate: "Operational / Ready for Fitouts",
    brochureUrl: "/brochures/ansal-business-park-2-brochure.pdf",
    connectivity: [
      { landmark: "Amar Shaheed Path Corridor", distanceOrTime: "Direct Frontage" },
      { landmark: "Airport", distanceOrTime: "12 mins" },
    ],
    rera: "Confirm registration and current status",
    status: "Commercial Development",
    overview:
      "Modern commercial business park located inside Sushant Golf City tailored for offices, corporate spaces, and retail outlets.",
    highlights: [
      "Commercial address inside 3,530-acre township",
      "Suited for corporate suites and commercial ventures",
      "Wide boulevard connectivity",
    ],
    amenities: [
      "Commercial Lifts",
      "Power Backup",
      "Fire Safety Systems",
      "Visitor Parking",
      "Security",
    ],
    heroImage: {
      url: "/assets/projects/ansal-api/ansal-business-park-2/hero.jpg",
      alt: "Ansal Business Park 2 in Sushant Golf City",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * SHREE RAJ INFRAHOUSING
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Gomti Green City",
    developer: "Shree Raj Infrahousing",
    groupSlug: "shree-raj",
    projectSlug: "gomti-green-city",
    location: "Kisan Path, near New Jail Road, Lucknow",
    category: "Plots",
    configurations: ["Residential Plots"],
    possessionDate: "Active Plotted Development & Registries",
    brochureUrl: "/brochures/gomti-green-city-brochure.pdf",
    connectivity: [
      { landmark: "Kisan Path / Outer Ring Road", distanceOrTime: "Direct Arterial Link" },
      { landmark: "New Jail Road Corridor", distanceOrTime: "2 mins" },
      { landmark: "Faizabad Road / Ayodhya Highway", distanceOrTime: "10 mins" },
    ],
    possessionDate: "Active Plotted Development & Registries",
    brochureUrl: "/brochures/gomti-green-city-brochure.pdf",
    connectivity: [
      { landmark: "Kisan Path / Outer Ring Road", distanceOrTime: "Direct Arterial Link" },
      { landmark: "New Jail Road Corridor", distanceOrTime: "2 mins" },
      { landmark: "Faizabad Road / Ayodhya Highway", distanceOrTime: "10 mins" },
    ],
    rera: "UPRERAPRJ17806",
    status: "Ongoing Plotted Development",
    overview:
      "Gomti Green City by Shree Raj Infrahousing offers government-approved residential plots situated along the expanding Kisan Path corridor near New Jail Road.",
    highlights: [
      "Residential plots on Kisan Path corridor",
      "RERA Registered: UPRERAPRJ17806",
      "Rapidly developing investment corridor",
    ],
    amenities: ["Internal Roads", "Demarcated Plots", "Electricity & Water Line Provisions"],
    heroImage: {
      url: "/assets/projects/shree-raj/gomti-green-city/hero.jpg",
      alt: "Gomti Green City residential plots on Kisan Path",
      isIllustrative: true,
    },
    galleryImages: [],
    sourceUrls: ["https://www.shreerajinfra.com/gomti-green-city/"],
    lastVerified: "2026-10-18",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
 * Helper Lookup Functions
 * ───────────────────────────────────────────────────────────────────────── */

export function getAllGroups(): ProjectGroup[] {
  return GROUPS;
}

export function getGroupBySlug(slug: string): ProjectGroup | undefined {
  const normalized = slug.toLowerCase();
  return GROUPS.find((g) => g.slug === normalized || g.aliases?.includes(normalized));
}

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectsByGroup(groupSlug: string): Project[] {
  const group = getGroupBySlug(groupSlug);
  if (!group) return [];
  return PROJECTS.filter(
    (p) => p.groupSlug === group.slug || (group.aliases && group.aliases.includes(p.groupSlug)),
  );
}

export function getProjectBySlug(groupSlug: string, projectSlug: string): Project | undefined {
  const group = getGroupBySlug(groupSlug);
  if (!group) return undefined;
  const normalizedProj = projectSlug.toLowerCase();
  return PROJECTS.find(
    (p) =>
      (p.groupSlug === group.slug || (group.aliases && group.aliases.includes(p.groupSlug))) &&
      p.projectSlug.toLowerCase() === normalizedProj,
  );
}

export function findProjectByName(name: string): Project | undefined {
  const n = name.trim().toLowerCase();
  return PROJECTS.find((p) => p.name.trim().toLowerCase() === n);
}
