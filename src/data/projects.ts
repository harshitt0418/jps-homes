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
      "With a legacy spanning over three decades since 1987, Omaxe is one of India's largest and most trusted real estate developers. In Lucknow, Omaxe has delivered and continues to develop expansive integrated townships like Omaxe Metro City on Raebareli Road and contemporary commercial destinations under Omaxe BeTogether.",
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
    coverImage: "/assets/projects/ansal-api/sushant-golf-city/hero.jpg",
    shortDescription:
      "Lucknow's flagship 3,530-acre hi-tech township on Amar Shaheed Path featuring an 18-hole championship golf course and diverse enclaves.",
    fullOverview:
      "Sushant Golf City is Lucknow's premier Hi-tech Township sprawling across 3,530 acres (extendable up to 6,000 acres) along Amar Shaheed Path and Lucknow-Sultanpur Highway. Conceptualized and developed by Ansal API, the township incorporates an 18-hole international championship golf course, luxury villas, high-rise apartments, spiritual centers, educational campuses like A.I.T.M., and major retail/commercial destinations.",
    headquarters: "Sushant Golf City, Amar Shaheed Path & Sultanpur Road, Lucknow - 226030",
    officialWebsite: "https://sushantgolfcity.co.in/overview.html",
    lastVerified: "2026-10-18",
  },
];

export const PROJECTS: Project[] = [
  /* ─────────────────────────────────────────────────────────────────────────
   * 1. RISHITA MULBERRY HEIGHTS (Rishita Developers)
   * Link: https://www.rishita.in/projects/ongoing-projects/rishita-mulberry-heights
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Rishita Mulberry Heights",
    developer: "Rishita Developers",
    groupSlug: "rishita-developers",
    projectSlug: "rishita-mulberry-heights",
    location: "Sushant Golf City, Lucknow",
    address:
      "Group Housing 1, Sector C, Pocket-6, Sushant Golf City, Amar Shaheed Path, Lucknow - 226030, Uttar Pradesh (India)",
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
    areaRanges: "1,032 Sq.Ft. - 2,250 Sq.Ft.",
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
      "Rishita Mulberry Heights offers an open and refined lifestyle amidst vast green landscapes with 80% open spaces in Sushant Golf City. Giving you the choice of 2 and 3 BHK apartments bedecked with modern handpicked features, Mulberry Heights is a peaceful sanctum for wholesome family living.",
    highlights: [
      "80% open spaces across a 21.45-acre green landscape",
      "675+ Possessions already offered across completed phases",
      "Close to Medanta Hospital, Ekana International Cricket Stadium, Lulu Mall, and Walmart Best Price",
      "Smooth airport connectivity via Amar Shaheed Path with traffic-free wide access roads",
      "Wi-Fi enabled campus and on-site basement supermart",
    ],
    amenities: [
      "High-End Clubhouse with Modern Facilities",
      "Gated Community with CCTV & Entrance Access Control",
      "Power Back-up for Common Areas & High-Speed Elevators",
      "Basement & Open Car Parking",
      "Lush Green Parks with Jogging Tracks & Fountains",
      "Swimming Pool & Kids Splash Pool",
      "Cricket Practice Pitch & Lawn Tennis Court",
      "Fully Equipped Gymnasium & Yoga Center",
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
        url: "/assets/projects/rishita-developers/rishita-mulberry-heights/master-plan.jpg",
        alt: "Rishita Mulberry Heights master site plan and tower layout with legend",
        caption: "Official Master Site Plan with Legend",
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
        url: "/assets/projects/rishita-developers/rishita-mulberry-heights/possession-675-milestone.jpg",
        alt: "Rishita Mulberry Heights 675 plus families possession milestone",
        caption: "675+ Possessions Handed Over",
        isIllustrative: false,
      },
    ],
    masterPlanImage: {
      url: "/assets/projects/rishita-developers/rishita-mulberry-heights/master-plan.jpg",
      alt: "Rishita Mulberry Heights official architectural site plan and tower layout with legend",
      caption: "Official Architectural Site Plan & Layout with Legend",
      isIllustrative: false,
    },
    locationMapImage: {
      url: "/assets/projects/rishita-developers/rishita-mulberry-heights/location-map.jpg",
      alt: "Rishita Mulberry Heights strategic location and connectivity map in Sushant Golf City",
      caption: "Official Location & Connectivity Map",
      isIllustrative: false,
    },
    sourceUrls: [
      "https://www.rishita.in/projects/ongoing-projects/rishita-mulberry-heights",
      "https://www.up-rera.in/",
    ],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 2. RISHITA SERENITY (Rishita Developers)
   * Link: https://rishitaserenity.co.in/
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Rishita Serenity",
    developer: "Rishita Developers",
    groupSlug: "rishita-developers",
    projectSlug: "rishita-serenity",
    location: "Sushant Golf City, Lucknow",
    address:
      "Sector C, Pocket 7, Sushant Golf City, Amar Shaheed Path, Lucknow - 226030, Uttar Pradesh (India)",
    category: "Apartments",
    configurations: [
      "3 BHK + SQ (3,035 Sq.Ft.)",
      "4 BHK + SQ (3,431 Sq.Ft.)",
      "4 BHK + SQ-Large (3,452 Sq.Ft.)",
    ],
    areaRanges: "3,035 Sq.Ft. to 3,452 Sq.Ft.",
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
    status: "Under Construction · Launch Date: 19-06-2025",
    overview:
      "Rishita Serenity represents the pinnacle of biophilic luxury living in Sushant Golf City. Rising across 21.45 acres, the project features ultra-luxurious 3 and 4 BHK residences with expansive wraparound balconies overlooking lush golf greens. Featuring world-class wellness pavilions, infinity pools, and five-star hospitality inspired clubhouses.",
    highlights: [
      "Official RERA registered project: UPRERAPRJ351436/06/2025 (Launch Date: 19-06-2025)",
      "21.45-acre master development in prestigious Sector C, Pocket 7, Sushant Golf City",
      "Palatial unit sizes ranging from 3,035 Sq.Ft. to 3,452 Sq.Ft. with servant quarters",
      "Biophilic architectural design with cantilevered sky gardens and floor-to-ceiling glass",
      "Minutes from Medanta Medicity, Lulu Mall, and Amar Shaheed Path",
    ],
    amenities: [
      "Exclusive Clubhouse with Infinity-Edge Rooftop Pool",
      "Temperature-Controlled Indoor Swimming Pool",
      "State-of-the-art Wellness Spa, Sauna, and Steam Rooms",
      "Private Squash Court & Indoor Badminton Court",
      "Billiards & Snooker Recreation Lounge",
      "Banquet & Multi-Purpose Celebration Hall",
      "Landscaped Reflexology Paths & Meditation Pavilions",
      "High-Speed Smart Elevators & 3-Tier Security",
    ],
    heroImage: {
      url: "/assets/projects/rishita-developers/rishita-serenity/hero.png",
      alt: "Rishita Serenity luxury architectural towers in Sushant Golf City",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/rishita-developers/rishita-serenity/gallery-1.png",
        alt: "Rishita Serenity aerial perspective and landscaped podium",
        caption: "Serenity Aerial Podium & Towers",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-serenity/gallery-2.png",
        alt: "Rishita Serenity luxury club and swimming pool deck",
        caption: "Resort-Style Pool Deck",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-serenity/gallery-3.png",
        alt: "Rishita Serenity grand entrance boulevard and green landscape",
        caption: "Grand Entrance Boulevard",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-serenity/gallery-4.png",
        alt: "Rishita Serenity lavish designer interior living room",
        caption: "Designer Living Suite",
        isIllustrative: false,
      },
    ],
    floorPlans: [
      {
        title: "3 BHK + SQ (3,035 Sq.Ft.)",
        configuration: "3 BHK + SQ",
        area: "3,035 Sq.Ft.",
        image: "/assets/projects/rishita-developers/rishita-serenity/floorplan-1.png",
        alt: "Rishita Serenity 3 BHK + SQ Floor Plan 3035 sqft",
      },
      {
        title: "4 BHK + SQ (3,431 Sq.Ft.)",
        configuration: "4 BHK + SQ",
        area: "3,431 Sq.Ft.",
        image: "/assets/projects/rishita-developers/rishita-serenity/floorplan-2.png",
        alt: "Rishita Serenity 4 BHK + SQ Floor Plan 3431 sqft",
      },
      {
        title: "4 BHK + SQ-Large (3,452 Sq.Ft.)",
        configuration: "4 BHK + SQ-Large",
        area: "3,452 Sq.Ft.",
        image: "/assets/projects/rishita-developers/rishita-serenity/floorplan-3.png",
        alt: "Rishita Serenity 4 BHK + SQ-Large Floor Plan 3452 sqft",
      },
    ],
    sourceUrls: ["https://rishitaserenity.co.in/", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 3. RISHITA MANHATTAN (Rishita Developers)
   * Link: https://www.rishita.in/projects/ongoing-projects/rishita-manhattan
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Rishita Manhattan",
    developer: "Rishita Developers",
    groupSlug: "rishita-developers",
    projectSlug: "rishita-manhattan",
    location: "Gomti Nagar Extension, Lucknow",
    address: "Sector 7, Gomti Nagar Extension, Amar Shaheed Path, Lucknow - 226010, Uttar Pradesh",
    category: "Apartments",
    configurations: ["2 BHK", "3 BHK", "4 BHK (C2 Tower)"],
    areaRanges: "1,085 Sq.Ft. - 2,650 Sq.Ft.",
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
    rera: "UPRERAPRJ6682 / UPRERAPRJ544612 / UPRERAPRJ868210",
    status: "Ready to Move · 1,250+ Possessions Offered",
    overview:
      "Rishita Manhattan brings the iconic lifestyle of New York to Gomti Nagar Extension. Designed with metropolitan elegance, the development features grand residential towers overlooking manicured central lawns inspired by Central Park. With over 1,000 registries completed and 1,250+ possessions offered, Manhattan is an established luxury landmark in Lucknow.",
    highlights: [
      "1,000+ Registries completed and 1,250+ Possessions already offered",
      "New York Manhattan inspired architecture with iconic club facilities",
      "Located in high-growth Sector 7, Gomti Nagar Extension on Amar Shaheed Path",
      "Adjacent to Ekana International Stadium, Phoenix Palassio, and Atal Bihari Vajpayee Medical University",
      "Fully operational luxury amenities including Olympic-size pool and theatre",
    ],
    amenities: [
      "Club Manhattan with Indoor Games and Banquet Hall",
      "Olympic-Sized Swimming Pool & Sun Deck",
      "Manhattan Central Park Themed Landscaped Gardens",
      "Tennis Court, Basketball Court & Badminton Arena",
      "State-of-the-Art Gymnasium & Aerobics Center",
      "Jogging & Cycling Tracks amidst Tree-Lined Avenues",
      "Children's Adventure Play Zone",
      "Multi-Tier Security with 24/7 Monitoring & Access Control",
    ],
    heroImage: {
      url: "/assets/projects/rishita-developers/rishita-manhattan/hero.png",
      alt: "Rishita Manhattan luxury high-rise towers in Gomti Nagar Extension",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/rishita-developers/rishita-manhattan/gallery-1.jpg",
        alt: "Rishita Manhattan residential elevations and landscaped courtyards",
        caption: "Delivered Residential Towers",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-manhattan/gallery-2.jpg",
        alt: "Rishita Manhattan towers view from central greens",
        caption: "Towers Overview",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-manhattan/gallery-3.jpg",
        alt: "Rishita Manhattan podium and recreation areas",
        caption: "Recreation Podium",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/rishita-developers/rishita-manhattan/gallery-4.jpg",
        alt: "Rishita Manhattan landscape and water features",
        caption: "Central Park Features",
        isIllustrative: false,
      },
    ],
    locationMapImage: {
      url: "/assets/projects/rishita-developers/rishita-manhattan/location-map.jpg",
      alt: "Rishita Manhattan location map in Gomti Nagar Extension",
      caption: "Official Location & Sector Access Map",
      isIllustrative: false,
    },
    sourceUrls: [
      "https://www.rishita.in/projects/ongoing-projects/rishita-manhattan",
      "https://www.up-rera.in/",
    ],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 4. OMAXE METRO CITY (Omaxe)
   * Link: https://www.omaxelucknow.com/property/omaxe-metro-city-lucknow
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Omaxe Metro City",
    developer: "Omaxe",
    groupSlug: "omaxe",
    projectSlug: "omaxe-metro-city",
    location: "Raebareli Road & Amar Shaheed Path, Lucknow",
    address: "Omaxe Metro City, Sector 7 & 8, Raebareli Road, Lucknow - 226025, Uttar Pradesh",
    category: "Township",
    configurations: [
      "Residential Plots (1,215 - 3,150 sq.ft.)",
      "4 BHK Luxury Villas (2,650 sq.ft.)",
      "Cassia Enclave (2 & 3 BHK Apartments)",
      "Silver Birch Low-Rise Floors",
      "Commercial Showrooms & SCO Plots",
    ],
    areaRanges: "1,215 Sq.Ft. to 3,150 Sq.Ft.",
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
    rera: "UPRERAPRJ17158 / UPRERAPRJ3210",
    status: "Under Construction & Ready Possession Phases",
    overview:
      "Omaxe Metro City is a 42-acre integrated hi-tech township strategically located on Raebareli Road, Lucknow. Designed for comprehensive community living, the development integrates residential plots, upscale independent villas, contemporary low-rise floors, and high-rise apartment towers like Cassia. Boasting wide sector avenues, landscaped green buffers, and commercial retail zones.",
    highlights: [
      "42-acre master-planned integrated township by Omaxe",
      "Multiple residential formats: Plots, Villas, Cassia Apartments & Silver Birch floors",
      "Exceptional connectivity: 5 mins from SGPGI and direct link to Amar Shaheed Path & Outer Ring Road",
      "350+ Plotted units and 8 residential towers",
      "Comprehensive social infrastructure including modern club, school, and convenience market",
    ],
    amenities: [
      "Grand Township Clubhouse with Sports Lounge",
      "Swimming Pool & Kids Splash Arena",
      "Landscaped Parks with Jogging and Walking Pathways",
      "Badminton, Basketball & Tennis Courts",
      "Underground Electrification & Wide Paved Roads",
      "Commercial Shopping Plaza for Daily Groceries",
      "24/7 Guarded Security with Gated Entry Barriers",
      "Dedicated Sewage Treatment Plant & Rainwater Replenishment",
    ],
    heroImage: {
      url: "/assets/projects/omaxe/omaxe-metro-city/hero.png",
      alt: "Omaxe Metro City integrated township on Raebareli Road Lucknow",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/omaxe/omaxe-metro-city/gallery-1.jpg",
        alt: "Omaxe Metro City township boulevards and residential towers",
        caption: "Township Boulevard View",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/omaxe/omaxe-metro-city/gallery-2.webp",
        alt: "Omaxe Metro City Cassia tower elevation",
        caption: "Cassia Enclave High-Rise",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/omaxe/omaxe-metro-city/gallery-3.webp",
        alt: "Omaxe Metro City villas and green lawns",
        caption: "Luxury Villa Living",
        isIllustrative: false,
      },
    ],
    masterPlanImage: {
      url: "/assets/projects/omaxe/omaxe-metro-city/master-plan.jpg",
      alt: "Omaxe Metro City 42-acre master layout plan",
      caption: "Township Master Plan Layout",
      isIllustrative: false,
    },
    sourceUrls: [
      "https://www.omaxelucknow.com/property/omaxe-metro-city-lucknow",
      "https://www.up-rera.in/",
    ],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 5. OMAXE BETOGETHER (Omaxe)
   * Link: https://www.omaxebetogether.co/
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Omaxe BeTogether",
    developer: "Omaxe",
    groupSlug: "omaxe",
    projectSlug: "omaxe-betogether",
    location: "Amausi, Vibhuti Khand & Gomti Nagar Extension, Lucknow",
    category: "Commercial",
    configurations: [
      "High-Street Retail Shops",
      "Food Court Dining Spaces",
      "Anchor Showrooms",
      "Commercial Office Suites",
    ],
    areaRanges: "150 Sq.Ft. - 5,000 Sq.Ft.",
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
    rera: "UPRERAPRJ9093 / Developer RERA Registered",
    status: "Under Development & Active Booking",
    overview:
      "Backed by over 30 years of Omaxe trust and delivery, Omaxe BeTogether is Lucknow's prime commercial real estate investment initiative. Encompassing premier retail spaces, multi-brand high-street stores, and culinary hubs across strategic corridors including Amausi (Airport Road), Vibhuti Khand (Gomti Nagar), and Gomti Nagar Extension.",
    highlights: [
      "30+ years developer legacy of innovation and execution",
      "Prime high-footfall catchment locations: Amausi, Vibhuti Khand, and Gomti Nagar Extension",
      "Double-height shop fronts with maximum visibility and modern glass facades",
      "Integrated multi-level car parking, escalators, and 100% power backup",
      "Attractive commercial yields and established consumer transit routes",
    ],
    amenities: [
      "High-Visibility Retail Showroom Spaces",
      "Multi-Cuisine Themed Food Court & Dining Terraces",
      "High-Speed Escalators & Modern Passenger Lifts",
      "Multi-Level Basement Car Parking with Valet Facility",
      "100% Power Back-up for Common Commercial Services",
      "24/7 CCTV Vigilance, Boom Barriers & Security Guard Posts",
      "Centrally Air-Conditioned Public Atriums",
      "Modern Fire-Fighting & Life Safety Systems",
    ],
    heroImage: {
      url: "/assets/projects/omaxe/omaxe-betogether/hero.jpg",
      alt: "Omaxe BeTogether commercial destination in Lucknow",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/omaxe/omaxe-betogether/gallery-1.jpg",
        alt: "Omaxe BeTogether commercial atrium and retail elevation",
        caption: "Commercial Frontage & Atrium",
        isIllustrative: false,
      },
    ],
    sourceUrls: ["https://www.omaxebetogether.co/", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 6. PINTAIL PARK CITY (Pintail)
   * Link: https://pintailparkcity.co.in/
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Pintail Park City",
    developer: "Pintail",
    groupSlug: "pintail",
    projectSlug: "pintail-park-city",
    location: "Sultanpur Road, Gomti Nagar Extension, Lucknow",
    address:
      "D17, Pocket 2, Sector 4, Sultanpur Road, near IT City, Lucknow - 226010, Uttar Pradesh",
    category: "Township",
    configurations: ["Residential Plots (1,740 - 3,200 sq.ft.)", "Custom Designer Villas"],
    areaRanges: "1,740 Sq.Ft. to 3,200 Sq.Ft.",
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
    rera: "UPRERAPRJ15457",
    status: "Under Active Development · Launch Date: 12-03-2018",
    overview:
      "Pintail Park City is a 200-acre integrated smart township by Pintail Infracon LLP situated on Sultanpur Road, near Lucknow IT City. Planned for families seeking an open, nature-infused community, the development features planned residential plots and bespoke luxury villas. Anchored by wide sector boulevards, world-class sports amenities, and immediate proximity to the IT City and Cancer Hospital.",
    highlights: [
      "Official RERA registered smart township: UPRERAPRJ15457 (Launched 12-03-2018)",
      "200-acre expansive low-density green layout on Sultanpur Road",
      "Immediate proximity to Lucknow IT City (HCL Campus), Ekana Stadium, and Cancer Institute",
      "Wide 45-metre and 24-metre landscaped sector boulevards",
      "Comprehensive amenities: club, swimming pool, indoor games, and CCTV surveillance",
    ],
    amenities: [
      "Grand Township Club House",
      "CCTV Surveillance & 24/7 Security",
      "Indoor Sports Lounge (Carrom, Table Tennis, Snooker)",
      "Swimming Pool & Kids Splash Area",
      "Lush Landscaped Theme Parks with Play Area",
      "Lawn Tennis Court, Badminton Court & Jogging Tracks",
      "Underground Utilities & Solar Street Lighting",
      "Wide 45-Meter & 24-Meter Internal Sector Roads",
    ],
    heroImage: {
      url: "/assets/projects/pintail/pintail-park-city/hero.webp",
      alt: "Pintail Park City 200-acre township on Sultanpur Road Lucknow",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/pintail/pintail-park-city/gallery-1.webp",
        alt: "Pintail Park City planned residential plots and landscaped boulevards",
        caption: "Plotted Enclave Boulevards",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/pintail/pintail-park-city/about.webp",
        alt: "Pintail Park City township gate and infrastructure view",
        caption: "Township Infrastructure",
        isIllustrative: false,
      },
    ],
    locationMapImage: {
      url: "/assets/projects/pintail/pintail-park-city/location-map.jpg",
      alt: "Pintail Park City 200-acre smart township location map and connectivity on Sultanpur Road",
      caption: "Official Pintail Park City Location & Benefit Map",
      isIllustrative: false,
    },
    sourceUrls: ["https://pintailparkcity.co.in/", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 7. GOMTI GREENS PLOTS (Emaar India)
   * Link: https://in.emaar.com/en/properties/gomti-greens-plots/
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Gomti Greens Plots",
    developer: "Emaar India",
    groupSlug: "emaar-india",
    projectSlug: "gomti-greens-plots",
    location: "Gomti Nagar Extension, Lucknow",
    address:
      "Gomti Greens, Sector 6 & 7, Gomti Nagar Extension, Amar Shaheed Path, Lucknow - 226010, Uttar Pradesh",
    category: "Plots",
    configurations: ["Residential Plots (200 sq.yd to 500 sq.yd)"],
    areaRanges: "200 Sq.Yd. - 500 Sq.Yd.",
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
    rera: "UPRERAPRJ3786 / LDA Approved",
    status: "Delivered & Ongoing Allotment",
    overview:
      "Gomti Greens by Emaar India is an LDA-approved integrated plotted development located in Gomti Nagar Extension, Lucknow. Engineered with Emaar's renowned international master-planning standards, the township features meticulously planned residential plots enveloped by manicured green landscaping, wide internal roads, and robust civic infrastructure.",
    highlights: [
      "Master-planned development by globally renowned developer Emaar India",
      "LDA (Lucknow Development Authority) approved plotted development",
      "Prime location in Gomti Nagar Extension with direct access to Amar Shaheed Path",
      "Underground utilities, sewage treatment, and continuous water supply infrastructure",
      "Minutes from Medanta Medicity, Phoenix Palassio, and International Cricket Stadium",
    ],
    amenities: [
      "LDA Approved Master Planned Infrastructure",
      "Lush Green Landscaped Theme Gardens",
      "Wide Paved Internal Roads with Street Lighting",
      "Underground Electrical Cabling & Storm Drains",
      "Regulated 24/7 Water Supply & Sewerage Network",
      "Gated Neighborhood with Security Checkpoints",
      "Dedicated Parks with Children's Play Areas",
      "Convenient Access to Primary Schools & Healthcare",
    ],
    heroImage: {
      url: "/assets/projects/emaar-india/gomti-greens-plots/hero.jpg",
      alt: "Emaar Gomti Greens planned residential plots in Gomti Nagar Extension Lucknow",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/emaar-india/gomti-greens-plots/property.jpg",
        alt: "Emaar Gomti Greens site development and landscaped avenue",
        caption: "Site Infrastructure View",
        isIllustrative: false,
      },
    ],
    sourceUrls: [
      "https://in.emaar.com/en/properties/gomti-greens-plots/",
      "https://www.up-rera.in/",
    ],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 8. MIGSUN LUCKNOW CENTRAL (Migsun Group)
   * Link: https://www.migsun-group.in/migsun-lucknow-central/
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Migsun Lucknow Central",
    developer: "Migsun Group",
    groupSlug: "migsun-group",
    projectSlug: "migsun-lucknow-central",
    location: "Amar Shaheed Path, Lucknow",
    address:
      "Amar Shaheed Path, adjacent to Medanta Hospital, Ghuswal Kalan, Lucknow - 226002, Uttar Pradesh",
    category: "Commercial",
    configurations: [
      "Lower Ground Floor (Hypermarket & Retail)",
      "Ground Floor (High-Street Retail)",
      "1st Floor (Retail Brand Outlets)",
      "2nd Floor (Entertainment & Anchor Dining)",
      "3rd Floor (Grand Food Court)",
    ],
    areaRanges: "150 Sq.Ft. - 2,500 Sq.Ft.",
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
    rera: "UPRERAPRJ260381/06/2024",
    status: "Under Construction · Booking Open",
    overview:
      "Migsun Lucknow Central is poised to be Lucknow's premier high-street commercial destination. Strategically situated right next to Medanta Hospital on Amar Shaheed Path, the project features a stunning multi-level commercial plaza encompassing high-street shopping outlets, a grand 500+ seat food court, hypermarket zones, and premium dining terraces with maximum highway visibility.",
    highlights: [
      "Lucknow's biggest commercial high-street plaza directly on Amar Shaheed Path",
      "Located directly adjacent to Medanta Medicity Hospital with massive captive daily footfall",
      "Grand food court with 500+ seating capacity and international dining brands",
      "Just 10 minutes drive from Chaudhary Charan Singh International Airport",
      "Official RERA registered project: UPRERAPRJ260381/06/2024",
    ],
    amenities: [
      "High-Street Commercial Architecture with Glass Facades",
      "Grand 500+ Seater Food Court & Anchor Dining",
      "Lower Ground Hypermarket & Anchor Stores",
      "Modern Escalators & High-Speed Passenger Elevators",
      "Multi-Level Basement Parking for Visitors & Staff",
      "100% Power Back-up for Common Commercial Utilities",
      "24/7 Security Surveillance with Central Control Desk",
      "Advanced Fire Fighting & Life Safety Infrastructure",
    ],
    heroImage: {
      url: "/assets/projects/migsun-group/migsun-lucknow-central/hero.jpg",
      alt: "Migsun Lucknow Central high-street commercial plaza on Amar Shaheed Path",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/migsun-group/migsun-lucknow-central/gallery-1.jpg",
        alt: "Migsun Lucknow Central architectural rendering and food court",
        caption: "Commercial Plaza Elevation",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/migsun-group/migsun-lucknow-central/gallery-2.jpg",
        alt: "Migsun Lucknow Central atrium and escalators",
        caption: "Central Atrium & Escalators",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/migsun-group/migsun-lucknow-central/gallery-3.jpg",
        alt: "Migsun Lucknow Central retail facade and highway view",
        caption: "Shaheed Path Frontage",
        isIllustrative: false,
      },
    ],
    locationMapImage: {
      url: "/assets/projects/migsun-group/migsun-lucknow-central/location-map.jpg",
      alt: "Migsun Lucknow Central location map on Amar Shaheed Path adjacent to Medanta Hospital",
      caption: "Official Location & Proximity Map",
      isIllustrative: false,
    },
    sourceUrls: ["https://www.migsun-group.in/migsun-lucknow-central/", "https://www.up-rera.in/"],
    lastVerified: "2026-10-18",
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 9. SUSHANT GOLF CITY (Sushant Golf City / Ansal API)
   * Link: https://sushantgolfcity.co.in/overview.html
   * ───────────────────────────────────────────────────────────────────────── */
  {
    name: "Sushant Golf City",
    developer: "Ansal API",
    groupSlug: "ansal-api",
    projectSlug: "sushant-golf-city",
    location: "Amar Shaheed Path & Sultanpur Highway, Lucknow",
    address:
      "Sushant Golf City, Amar Shaheed Path & Lucknow-Sultanpur Highway, Lucknow - 226030, Uttar Pradesh",
    category: "Township",
    configurations: [
      "18-Hole Championship Golf Course",
      "Luxury Golf Villas & Enclaves",
      "Hi-Tech Residential Enclaves (Palm Ville, Celebrity Greens)",
      "Group Housing Luxury Towers",
      "Commercial Shopping & Business Parks",
    ],
    areaRanges: "Plots (1,250 - 5,000 sq.ft.), Villas & High-Rise Apartments",
    acreage: "3,530 Acres (extendable up to 6,000 Acres)",
    totalUnits: "Lucknow's Largest Hi-Tech Integrated Township",
    possessionDate: "Operational Township with Phased Handover",
    brochureUrl: "/brochures/sushant-golf-city-brochure.pdf",
    connectivity: [
      { landmark: "Medanta Super Speciality Hospital", distanceOrTime: "Within Township (3 mins)" },
      { landmark: "Lulu Mall Lucknow", distanceOrTime: "Within Township (3 mins)" },
      {
        landmark: "Chaudhary Charan Singh International Airport",
        distanceOrTime: "15 mins via Shaheed Path",
      },
      { landmark: "Ekana International Stadium", distanceOrTime: "5 mins" },
      { landmark: "Charbagh Railway Station", distanceOrTime: "20 mins" },
    ],
    specifications: [
      {
        category: "Township Infrastructure",
        details:
          "Wide multi-lane arterial boulevards, underground electrical cabling, comprehensive storm water drainage, and sewage treatment plants",
      },
      {
        category: "Recreation & Greenery",
        details:
          "Sprawling landscaped fairways, lake view promenades, manicured public theme gardens, and international standard sporting facilities",
      },
    ],
    rera: "UPRERAPRJ3331 / Hi-Tech Township Approved",
    status: "Delivered & Ongoing Mega Township",
    overview:
      "Sushant Golf City is Lucknow's premier Hi-Tech Township sprawling across 3,530 acres (extendable up to 6,000 acres) along Amar Shaheed Path and Lucknow-Sultanpur Highway. Conceptualized and developed by Ansal API, this integrated city features an 18-hole international championship golf course, luxury villas, modern residential communities, world-class healthcare including Medanta Hospital, retail malls like Lulu Mall, and premier educational institutions.",
    highlights: [
      "3,530-acre Hi-Tech integrated township extendable up to 6,000 acres",
      "18-hole international championship golf course & country club",
      "Home to Medanta Super Speciality Hospital & Lulu Mall Lucknow",
      "Comprehensive educational zone including A.I.T.M. campus",
      "Direct signal-free connectivity to Chaudhary Charan Singh Airport via Amar Shaheed Path",
    ],
    amenities: [
      "18-Hole International Championship Golf Course",
      "Grand Golf Club & Country Club",
      "Lulu Mall Lucknow Shopping Destination",
      "Medanta Medicity Super Speciality Hospital",
      "ISKCON Temple & Cultural Centre",
      "A.I.T.M. Educational Campus & Global Schools",
      "Township Auto Park & Post Office",
      "24/7 Gated Security & Broad Arterial Road Network",
    ],
    heroImage: {
      url: "/assets/projects/ansal-api/sushant-golf-city/hero.jpg",
      alt: "Sushant Golf City 3,530-acre hi-tech township in Lucknow",
      isIllustrative: false,
    },
    galleryImages: [
      {
        url: "/assets/projects/ansal-api/golf-vista/hero.jpg",
        alt: "Sushant Golf City championship golf course fairways and residential towers",
        caption: "Golf Course Fairways View",
        isIllustrative: false,
      },
      {
        url: "/assets/projects/ansal-api/palm-ville/hero.jpg",
        alt: "Sushant Golf City Palm Ville enclave and lush green surroundings",
        caption: "Palm Ville Enclave",
        isIllustrative: false,
      },
    ],
    locationMapImage: {
      url: "/assets/projects/ansal-api/sushant-golf-city/location-map.jpg",
      alt: "Sushant Golf City 3,530-acre master township layout and location map",
      caption: "Official Township Location & Master Layout Map",
      isIllustrative: false,
    },
    sourceUrls: ["https://sushantgolfcity.co.in/overview.html", "https://www.up-rera.in/"],
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
