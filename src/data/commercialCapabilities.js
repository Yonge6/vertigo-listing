export const capabilitySlides = [];

const product = (id, name, image, material, description, tags, setupNote) => ({
  id, name, image, material, description, tags, setupNote,
  process: "Vertical rotary engraving",
  imageAlt: `${name} made for a VertiGo cylindrical workflow`,
  economicsId: id,
});

export const products = {
  "outdoor-tumbler": product("outdoor-tumbler", "Outdoor Tumblers", "home-project-vertigo-mountain-rambler.webp", "Powder-coated metal", "Personalized outdoor drinkware for clubs, teams, gifting and retail collections.", ["Repeat orders", "Gift ready", "Batch friendly"], "Validate the coating, diameter and settings before production."),
  "handled-tumbler": product("handled-tumbler", "Handled Tumblers", "home-project-vertigo-wildflower-handled-tumbler.webp", "Compatible coated metal", "Keep handled drinkware upright while the integrated Grip2 rotary supports positioning.", ["Handled formats", "Premium gifting", "Retail ready"], "Confirm handle clearance and product diameter before production."),
  "coated-bottle": product("coated-bottle", "Coated Bottles", "home-project-vertigo-coastal-wide-mouth-bottle.webp", "Laser-compatible coating", "Add names, logos and artwork to compatible coated bottles.", ["Names and logos", "Event gifting", "Small batches"], "Confirm coating compatibility and object geometry with a sample run."),
  "event-batch": product("event-batch", "Live Event Batches", "vertigo-event-batch-editorial-v4.webp", "Compatible drinkware", "Create a consistent visual system for markets, pop-ups and live personalization.", ["Live service", "Short runs", "Customer facing"], "Pre-test blanks and designs; plan ventilation and safe operator space."),
  "corporate-batch": product("corporate-batch", "Corporate Drinkware", "vertigo-corporate-batch-editorial-v3.webp", "Compatible coated drinkware", "Produce coordinated branded drinkware without a separate rotary attachment.", ["Logo programs", "Repeat orders", "Team gifting"], "Keep a verified blank, artwork and settings record for repeat orders."),
  "studio-service": product("studio-service", "Countertop Personalization", "vertigo-studio-service-editorial-v3.webp", "Compatible cylindrical products", "Let customers see the product and finished result in the same retail or studio space.", ["Compact setup", "Live preview", "Local retail"], "Plan ventilation, customer separation and operator training."),
  "personalized-bottle": product("personalized-bottle", "Personalized Bottles", "vertigo-gifting-personalized-bottle-v5.webp", "Compatible coated bottle", "Build name-led designs and small themed collections for gifting and events.", ["Name driven", "Small collections", "Gift ready"], "Confirm the bottle surface and geometry before production."),
  glassware: product("glassware", "Engraved Glassware", "vertigo-gifting-glassware-v5.webp", "Laser-compatible glass", "Expand into compatible cylindrical glass gifts with tested settings.", ["Gift sets", "Hospitality", "Custom names"], "Test the exact glass first; composition and geometry affect results."),
  "bottle-gifting": product("bottle-gifting", "Bottle Gifting", "vertigo-gifting-bottle-gifting-v5.webp", "Coated or laser-compatible bottle", "Add presentation value to compatible bottles for events and limited releases.", ["Event gifts", "Limited runs", "Presentation ready"], "Confirm the surface and diameter are compatible."),
  "logo-program": product("logo-program", "Recurring Logo Programs", "vertigo-logo-program-editorial-v4.webp", "Compatible coated drinkware", "Keep recurring corporate and team orders visually consistent.", ["Repeat business", "Standard artwork", "Batch friendly"], "Store a verified sample and settings record for each program."),
  "short-run": product("short-run", "Short-Run Collections", "vertigo-short-run-editorial-v4.webp", "Compatible cylindrical blanks", "Move from a tested design to a small coordinated product batch.", ["Small batches", "Seasonal drops", "Fast iteration"], "Run a sample for each new blank, coating and artwork combination."),
  "mixed-range": product("mixed-range", "Mixed Cylindrical Range", "vertigo-mixed-range-editorial-v3.webp", "Compatible cups, bottles and vessels", "Support cups, bottles, bowls and other compatible upright cylindrical items.", ["Multiple formats", "Focused catalog", "Diameter flexibility"], "Confirm diameter, height, handle clearance and focal method."),
};

const economics = (unitPrice, sellingPrice, margin, monthlySales, orderValue) => ({ unitPrice, sellingPrice, margin, monthlySales, orderValue });
export const economicsExamples = {
  "outdoor-tumbler": economics(35, "$35", "45%", 60, "$35/item"), "handled-tumbler": economics(55, "$55", "45%", 48, "$55/item"), "coated-bottle": economics(40, "$40", "45%", 60, "$40/item"),
  "event-batch": economics(300, "$300/10", "40%", 8, "$300/batch"), "corporate-batch": economics(450, "$450/15", "40%", 8, "$450/batch"), "studio-service": economics(30, "$30", "45%", 80, "$30/item"),
  "personalized-bottle": economics(38, "$38", "45%", 60, "$38/item"), glassware: economics(30, "$30", "40%", 90, "$30/item"), "bottle-gifting": economics(60, "$60", "40%", 48, "$60/item"),
  "logo-program": economics(600, "$600/20", "40%", 6, "$600/batch"), "short-run": economics(360, "$360/12", "40%", 8, "$360/batch"), "mixed-range": economics(45, "$45", "40%", 60, "$45/item"),
};

export const economicsAssumptions = { monthlySales: 60, targetPaybackMonths: 6 };

// Goal-seek the visible order target, not the calculated payback or a demand forecast.
export function getEconomicsScenario(example, equipmentInvestment) {
  const contributionPerOrder = example.unitPrice * Number.parseInt(example.margin, 10) / 100;
  const minimumMonthlySales = Math.ceil(equipmentInvestment / (economicsAssumptions.targetPaybackMonths * contributionPerOrder));
  const monthlySales = Math.max(example.monthlySales ?? economicsAssumptions.monthlySales, minimumMonthlySales);
  const monthlyProfit = contributionPerOrder * monthlySales;
  return { monthlySales, monthlyProfit, paybackMonths: equipmentInvestment / monthlyProfit, monthlyPayment: equipmentInvestment / 24 };
}
export const productCategories = [
  { id: "drinkware", label: "Drinkware", description: "Build a focused catalog across compatible coated tumblers and bottles.", productIds: ["outdoor-tumbler", "handled-tumbler", "coated-bottle"] },
  { id: "events", label: "Events & Retail", description: "Personalize where the customer is with pre-tested products and a compact vertical workflow.", productIds: ["event-batch", "corporate-batch", "studio-service"] },
  { id: "gifting", label: "Gifting", description: "Turn compatible cylindrical objects into name-led gifts and presentation-ready collections.", productIds: ["personalized-bottle", "glassware", "bottle-gifting"] },
  { id: "batch", label: "Batch Work", description: "Repeat the verified setup across logo programs, short runs and a focused product range.", productIds: ["logo-program", "short-run", "mixed-range"] },
];
export const workflowCapabilities = [];
export const economicsDisclaimer = "Illustrative targets, not guaranteed income. Before overhead, tax and financing; results vary with costs, sales and demand. *Price ÷ 24 at 0% APR, excluding tax/fees; actual terms require approval.";
