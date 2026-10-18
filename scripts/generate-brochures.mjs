import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicBrochuresDir = path.join(rootDir, "public", "brochures");

// Ensure output directory exists
if (!fs.existsSync(publicBrochuresDir)) {
  fs.mkdirSync(publicBrochuresDir, { recursive: true });
}

// Helper: wrap text to fit within maxWidth
function wrapText(text, maxWidth, font, fontSize) {
  if (!text) return [];
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const width = font.widthOfTextAtSize(testLine, fontSize);
    if (width <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

// Clean non-standard characters for standard PDF fonts (winansi/ascii)
function sanitizeText(str) {
  if (!str) return "";
  return str
    .replace(/[—–]/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[•·]/g, "*")
    .replace(/₹/g, "Rs. ")
    .replace(/[^\x00-\x7F]/g, " ");
}

async function tryEmbedImage(pdfDoc, imageRelPath) {
  if (!imageRelPath) return null;
  const imagePath = path.join(rootDir, "public", imageRelPath.replace(/^\//, ""));
  if (!fs.existsSync(imagePath)) return null;

  try {
    const bytes = fs.readFileSync(imagePath);
    // Try JPEG first (most real estate images are JPEGs)
    try {
      return await pdfDoc.embedJpg(bytes);
    } catch {
      // Fallback to PNG
      return await pdfDoc.embedPng(bytes);
    }
  } catch (err) {
    console.warn(`Could not embed image ${imageRelPath}:`, err.message);
    return null;
  }
}

async function buildBrochure(project) {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle(`${sanitizeText(project.name)} - Official Brochure | JPS Real Estates`);
  pdfDoc.setAuthor("JPS Real Estates");
  pdfDoc.setSubject(`Official Project Brochure Dossier for ${sanitizeText(project.name)}`);
  pdfDoc.setKeywords([
    "Lucknow",
    "Real Estate",
    "JPS Real Estates",
    sanitizeText(project.name),
    sanitizeText(project.developer),
  ]);
  pdfDoc.setCreationDate(new Date());

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const colors = {
    navy: rgb(15 / 255, 23 / 255, 42 / 255),
    gold: rgb(180 / 255, 83 / 255, 9 / 255),
    goldLight: rgb(254 / 255, 243 / 255, 199 / 255),
    slate: rgb(30 / 255, 41 / 255, 59 / 255),
    muted: rgb(100 / 255, 116 / 255, 139 / 255),
    cardBg: rgb(248 / 255, 250 / 255, 252 / 255),
    border: rgb(203 / 255, 213 / 255, 225 / 255),
    white: rgb(1, 1, 1),
    highlightBg: rgb(241 / 255, 245 / 255, 249 / 255),
  };

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  // ═════════════════════════════════════════════════════════════════════════
  // PAGE 1: OVERVIEW, IMAGE, KEY METRICS & HIGHLIGHTS
  // ═════════════════════════════════════════════════════════════════════════
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);

  // Top Navy Brand Banner
  page1.drawRectangle({
    x: 0,
    y: pageHeight - 75,
    width: pageWidth,
    height: 75,
    color: colors.navy,
  });

  // Amber accent line
  page1.drawRectangle({
    x: 0,
    y: pageHeight - 78,
    width: pageWidth,
    height: 3,
    color: colors.gold,
  });

  page1.drawText("JPS REAL ESTATES", {
    x: margin,
    y: pageHeight - 34,
    size: 16,
    font: fontBold,
    color: colors.white,
  });

  page1.drawText("JPS ASSOCIATE · TRUSTED LUCKNOW REAL ESTATE ADVISORY SINCE 2007", {
    x: margin,
    y: pageHeight - 48,
    size: 8,
    font: fontRegular,
    color: colors.goldLight,
  });

  page1.drawText("3/104 Viram Khand, Gomti Nagar, Lucknow | +91 73552 23299", {
    x: margin,
    y: pageHeight - 62,
    size: 7.5,
    font: fontRegular,
    color: rgb(203 / 255, 213 / 255, 225 / 255),
  });

  let currentY = pageHeight - 105;

  // Project Title
  page1.drawText(sanitizeText(project.name), {
    x: margin,
    y: currentY,
    size: 20,
    font: fontBold,
    color: colors.navy,
  });

  currentY -= 16;
  page1.drawText(
    `Developed by ${sanitizeText(project.developer)} | ${sanitizeText(project.location)}`,
    {
      x: margin,
      y: currentY,
      size: 9.5,
      font: fontRegular,
      color: colors.muted,
    },
  );

  currentY -= 28;

  // RERA Box Banner
  const reraBoxHeight = 32;
  page1.drawRectangle({
    x: margin,
    y: currentY - reraBoxHeight + 10,
    width: contentWidth,
    height: reraBoxHeight,
    color: colors.goldLight,
    borderColor: colors.gold,
    borderWidth: 1,
  });

  page1.drawText("OFFICIAL UP-RERA REGISTRATION", {
    x: margin + 12,
    y: currentY - 2,
    size: 7.5,
    font: fontBold,
    color: colors.gold,
  });

  page1.drawText(
    sanitizeText(project.rera || "Contact JPS Real Estates for verified registration"),
    {
      x: margin + 12,
      y: currentY - 14,
      size: 8.5,
      font: fontBold,
      color: colors.navy,
    },
  );

  currentY -= 38;

  // Key Specifications Table Card
  const specBoxHeight = 84;
  page1.drawRectangle({
    x: margin,
    y: currentY - specBoxHeight,
    width: contentWidth,
    height: specBoxHeight,
    color: colors.cardBg,
    borderColor: colors.border,
    borderWidth: 1,
  });

  const colWidth = contentWidth / 3;
  const specs = [
    { label: "PROJECT CATEGORY", value: sanitizeText(project.category) },
    { label: "STATUS", value: sanitizeText(project.status) },
    {
      label: "POSSESSION TIMELINE",
      value: sanitizeText(project.possessionDate || "Available on Enquiry"),
    },
    {
      label: "CONFIGURATIONS",
      value: sanitizeText(project.configurations?.slice(0, 3).join(", ") || "Various layouts"),
    },
    { label: "AREA RANGES", value: sanitizeText(project.areaRanges || "Available on Request") },
    {
      label: "TOTAL UNITS / LAND",
      value: sanitizeText(project.totalUnits || project.acreage || "Gated community"),
    },
  ];

  specs.forEach((item, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const itemX = margin + 12 + col * colWidth;
    const itemY = currentY - 20 - row * 38;

    page1.drawText(item.label, {
      x: itemX,
      y: itemY,
      size: 6.5,
      font: fontBold,
      color: colors.muted,
    });

    const valLines = wrapText(item.value, colWidth - 16, fontBold, 8);
    if (valLines[0]) {
      page1.drawText(valLines[0], {
        x: itemX,
        y: itemY - 12,
        size: 8,
        font: fontBold,
        color: colors.slate,
      });
    }
  });

  currentY -= specBoxHeight + 20;

  // Hero Image Embedding on Page 1
  let imageEmbedded = false;
  const embeddedHero = await tryEmbedImage(pdfDoc, project.heroImage?.url);
  if (embeddedHero) {
    const imgHeight = 150;
    const imgWidth = contentWidth;
    page1.drawImage(embeddedHero, {
      x: margin,
      y: currentY - imgHeight,
      width: imgWidth,
      height: imgHeight,
    });
    currentY -= imgHeight + 16;
    imageEmbedded = true;
  }

  // Project Overview Section
  page1.drawText("PROJECT OVERVIEW", {
    x: margin,
    y: currentY,
    size: 10,
    font: fontBold,
    color: colors.navy,
  });
  currentY -= 14;

  const overviewLines = wrapText(sanitizeText(project.overview), contentWidth, fontRegular, 8.5);
  const maxOverviewLines = imageEmbedded ? 6 : 9;
  for (let i = 0; i < Math.min(overviewLines.length, maxOverviewLines); i++) {
    page1.drawText(overviewLines[i], {
      x: margin,
      y: currentY,
      size: 8.5,
      font: fontRegular,
      color: colors.slate,
    });
    currentY -= 12;
  }

  currentY -= 10;

  // Project Highlights Section
  page1.drawText("KEY PROJECT HIGHLIGHTS", {
    x: margin,
    y: currentY,
    size: 10,
    font: fontBold,
    color: colors.navy,
  });
  currentY -= 14;

  const highlights = project.highlights || [];
  const maxHighlights = imageEmbedded ? 4 : 6;
  for (let i = 0; i < Math.min(highlights.length, maxHighlights); i++) {
    const hlLines = wrapText(`* ${sanitizeText(highlights[i])}`, contentWidth - 10, fontRegular, 8);
    for (const line of hlLines) {
      if (currentY < 60) break;
      page1.drawText(line, {
        x: margin + 6,
        y: currentY,
        size: 8,
        font: fontRegular,
        color: colors.slate,
      });
      currentY -= 11;
    }
  }

  // Page 1 Footer
  page1.drawRectangle({
    x: margin,
    y: 35,
    width: contentWidth,
    height: 0.5,
    color: colors.border,
  });

  page1.drawText("JPS Real Estates · Verified Real Estate Catalogue Dossier · Page 1 of 2", {
    x: margin,
    y: 22,
    size: 7,
    font: fontRegular,
    color: colors.muted,
  });

  page1.drawText("Proprietor: Jitendra Pratap Singh (+91 73552 23299)", {
    x: pageWidth - margin - 200,
    y: 22,
    size: 7,
    font: fontBold,
    color: colors.muted,
  });

  // ═════════════════════════════════════════════════════════════════════════
  // PAGE 2: AMENITIES, CONNECTIVITY & CONSULTATION CONTACT
  // ═════════════════════════════════════════════════════════════════════════
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);

  // Page 2 Compact Header
  page2.drawRectangle({
    x: 0,
    y: pageHeight - 45,
    width: pageWidth,
    height: 45,
    color: colors.navy,
  });

  page2.drawRectangle({
    x: 0,
    y: pageHeight - 48,
    width: pageWidth,
    height: 3,
    color: colors.gold,
  });

  page2.drawText(`JPS REAL ESTATES · ${sanitizeText(project.name).toUpperCase()} DOSSIER`, {
    x: margin,
    y: pageHeight - 28,
    size: 10,
    font: fontBold,
    color: colors.white,
  });

  let p2Y = pageHeight - 75;

  // Curated Amenities Section
  page2.drawText("CURATED AMENITIES & FACILITIES", {
    x: margin,
    y: p2Y,
    size: 11,
    font: fontBold,
    color: colors.navy,
  });
  p2Y -= 16;

  const amenities = project.amenities || [];
  const colAmenityWidth = (contentWidth - 20) / 2;
  const maxAmenities = 16;
  const displayAmenities = amenities.slice(0, maxAmenities);

  for (let i = 0; i < displayAmenities.length; i += 2) {
    const leftAmenity = displayAmenities[i];
    const rightAmenity = displayAmenities[i + 1];

    if (leftAmenity) {
      page2.drawText(`*  ${sanitizeText(leftAmenity)}`, {
        x: margin + 8,
        y: p2Y,
        size: 8,
        font: fontRegular,
        color: colors.slate,
      });
    }

    if (rightAmenity) {
      page2.drawText(`*  ${sanitizeText(rightAmenity)}`, {
        x: margin + colAmenityWidth + 18,
        y: p2Y,
        size: 8,
        font: fontRegular,
        color: colors.slate,
      });
    }

    p2Y -= 13;
  }

  p2Y -= 16;

  // Strategic Connectivity (if available)
  if (project.connectivity && project.connectivity.length > 0) {
    page2.drawText("STRATEGIC CONNECTIVITY & LANDMARKS", {
      x: margin,
      y: p2Y,
      size: 11,
      font: fontBold,
      color: colors.navy,
    });
    p2Y -= 16;

    for (const item of project.connectivity.slice(0, 6)) {
      page2.drawText(`>  ${sanitizeText(item.landmark)}`, {
        x: margin + 8,
        y: p2Y,
        size: 8,
        font: fontBold,
        color: colors.slate,
      });
      page2.drawText(sanitizeText(item.distanceOrTime), {
        x: margin + 260,
        y: p2Y,
        size: 8,
        font: fontRegular,
        color: colors.muted,
      });
      p2Y -= 13;
    }
    p2Y -= 16;
  }

  // Developer Profile & Address Card
  page2.drawRectangle({
    x: margin,
    y: p2Y - 55,
    width: contentWidth,
    height: 55,
    color: colors.cardBg,
    borderColor: colors.border,
    borderWidth: 1,
  });

  page2.drawText("DEVELOPER & SITE LOCATION", {
    x: margin + 12,
    y: p2Y - 14,
    size: 7.5,
    font: fontBold,
    color: colors.muted,
  });

  page2.drawText(`${sanitizeText(project.developer)} · ${sanitizeText(project.location)}`, {
    x: margin + 12,
    y: p2Y - 26,
    size: 9,
    font: fontBold,
    color: colors.navy,
  });

  const addressLines = wrapText(
    sanitizeText(project.address || project.location),
    contentWidth - 24,
    fontRegular,
    7.5,
  );
  if (addressLines[0]) {
    page2.drawText(addressLines[0], {
      x: margin + 12,
      y: p2Y - 38,
      size: 7.5,
      font: fontRegular,
      color: colors.slate,
    });
  }

  p2Y -= 75;

  // JPS Consultation & Booking Box
  const contactBoxHeight = 110;
  page2.drawRectangle({
    x: margin,
    y: p2Y - contactBoxHeight,
    width: contentWidth,
    height: contactBoxHeight,
    color: colors.navy,
  });

  page2.drawRectangle({
    x: margin,
    y: p2Y - contactBoxHeight,
    width: 4,
    height: contactBoxHeight,
    color: colors.gold,
  });

  page2.drawText("NEED OFFICIAL PRICING, SITE VISITS OR FLOOR PLANS?", {
    x: margin + 16,
    y: p2Y - 20,
    size: 8,
    font: fontBold,
    color: colors.goldLight,
  });

  page2.drawText("JPS Real Estates — Personal Real Estate Advisory", {
    x: margin + 16,
    y: p2Y - 34,
    size: 13,
    font: fontBold,
    color: colors.white,
  });

  page2.drawText("Proprietor: Jitendra Pratap Singh (18+ Years Experience in Lucknow)", {
    x: margin + 16,
    y: p2Y - 48,
    size: 8.5,
    font: fontRegular,
    color: rgb(226 / 255, 232 / 255, 240 / 255),
  });

  page2.drawText("Office: 3/104 Viram Khand, Gomti Nagar, Lucknow, Uttar Pradesh", {
    x: margin + 16,
    y: p2Y - 62,
    size: 8,
    font: fontRegular,
    color: rgb(203 / 255, 213 / 255, 225 / 255),
  });

  page2.drawText("Call / WhatsApp: +91 73552 23299  |  +91 96963 32889", {
    x: margin + 16,
    y: p2Y - 78,
    size: 9.5,
    font: fontBold,
    color: colors.goldLight,
  });

  page2.drawText(
    "Consultation Hours: Monday - Sunday, 9:30 AM - 7:30 PM (Site visits by appointment)",
    {
      x: margin + 16,
      y: p2Y - 94,
      size: 7.5,
      font: fontOblique,
      color: rgb(148 / 255, 163 / 255, 184 / 255),
    },
  );

  p2Y -= contactBoxHeight + 20;

  // Verification & Disclaimer Box
  page2.drawText(
    `VERIFIED CATALOGUE RECORD · LAST VERIFIED: ${sanitizeText(project.lastVerified)}`,
    {
      x: margin,
      y: p2Y,
      size: 7,
      font: fontBold,
      color: colors.muted,
    },
  );
  p2Y -= 11;

  page2.drawText(
    "Disclaimer: All project data, UP-RERA registrations, and details are collected directly from official developer public sources.",
    {
      x: margin,
      y: p2Y,
      size: 6.5,
      font: fontRegular,
      color: colors.muted,
    },
  );
  p2Y -= 9;
  page2.drawText(
    "Prices, inventory and availability are subject to change by the respective developer. Contact JPS Real Estates for on-ground assistance.",
    {
      x: margin,
      y: p2Y,
      size: 6.5,
      font: fontRegular,
      color: colors.muted,
    },
  );

  // Page 2 Footer
  page2.drawRectangle({
    x: margin,
    y: 35,
    width: contentWidth,
    height: 0.5,
    color: colors.border,
  });

  page2.drawText("JPS Real Estates · Verified Real Estate Catalogue Dossier · Page 2 of 2", {
    x: margin,
    y: 22,
    size: 7,
    font: fontRegular,
    color: colors.muted,
  });

  page2.drawText("Official Website: jpsrealestates.in", {
    x: pageWidth - margin - 140,
    y: 22,
    size: 7,
    font: fontBold,
    color: colors.muted,
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

async function run() {
  console.log("Loading project catalogue data...");
  const { PROJECTS } = await import("../src/data/projects.ts");
  console.log(`Found ${PROJECTS.length} verified projects.`);

  for (const project of PROJECTS) {
    const filename = `${project.projectSlug}-brochure.pdf`;
    const outputPath = path.join(publicBrochuresDir, filename);

    console.log(`Generating brochure PDF for ${project.name} -> ${filename}...`);
    const pdfBytes = await buildBrochure(project);
    fs.writeFileSync(outputPath, pdfBytes);
    console.log(`✓ Successfully created ${filename} (${pdfBytes.length} bytes)`);
  }

  console.log("All brochure PDFs generated successfully in public/brochures!");
}

run().catch((err) => {
  console.error("Failed to generate brochures:", err);
  process.exit(1);
});
