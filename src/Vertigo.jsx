import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowClockwise,
  Camera,
  CaretLeft,
  CaretRight,
  CaretUp,
  Check,
  CubeFocus,
  CubeTransparent,
  DownloadSimple,
  EnvelopeSimple,
  Fire,
  Handbag,
  Headset,
  LockKey,
  MapPin,
  MagnifyingGlassPlus,
  Minus,
  Phone,
  Play,
  Plus,
  ShieldCheck,
  Star,
  Tag,
  Target,
  Thermometer,
  Trash,
  Tree,
  WifiHigh,
  Wine,
  X,
} from "@phosphor-icons/react";
import { CommercialCapabilities } from "./components/CommercialCapabilities.jsx";
import { HomeFooter, HomeNavigation, HomePage } from "./Home.jsx";
import { initializeAnalytics, trackEvent } from "./analytics.js";
import { useAutoplayCarousel } from "./hooks/useAutoplayCarousel.js";

const assetMap = {
  "feature-overview-hero.webp": "vertigo-lifestyle.jpg",
  "feature-overview-hydra-gen2-v2.webp": "vertigo-drinkware-collection-ai-v2.webp",
  "hydra-gen2-feature-overview-v1.webp": "vertigo-machine-products.jpg",
  "software-makerboost.webp": "xrf-shared-makerboost.webp",
  "software-compatibility.webp": "xrf-shared-software-compatibility.webp",
  "material-acrylic.webp": "xrf-shared-custom-tumbler.webp",
  "material-glass-stone.webp": "product-rocks-glass.webp",
  "material-coated-metal.webp": "home-project-vertigo-corporate-tumbler-batch.webp",
};
const asset = (name) => `${import.meta.env.BASE_URL}assets/${assetMap[name] || name}`;
const MATERIAL_AUTOPLAY_DELAY = 6000;
const SALES_CALL_URL = "https://www.1laser.com/products/sales-consultation-call";
const PRODUCT_URL = "https://www.1laser.com/products/vertigo-vertical-laser-engraver?variant=44483820224546";
const COMMUNITY_URL = "https://www.facebook.com/groups/onelaservertigo";
const BROCHURE_URL = `${import.meta.env.BASE_URL}downloads/onelaser-product-brochure-vertigo-en-v1.pdf`;
const SUPPORT_URL = "https://www.1laser.com/pages/contact-us";
const WARRANTY_URL = "https://www.1laser.com/pages/warranty-policy";
const RETURNS_URL = "https://www.1laser.com/pages/refund-policy";

const baseHeroMedia = [
  ["vertigo-hero-01.png", "OneLaser VertiGo front product view"],
  ["vertigo-lifestyle.jpg", "VertiGo in a drinkware personalization studio"],
  ["vertigo-hero-02.png", "VertiGo vertical laser engraver on white"],
  ["vertigo-hero-03.jpg", "VertiGo product view with integrated vertical rotary"],
  ["vertigo-hero-04.png", "VertiGo side profile in gray"],
  ["vertigo-hero-05.jpg", "VertiGo front product view"],
].map(([name, alt], index) => ({ src: asset(name), alt, label: `Product ${index + 1}` }));

const packageHeroMedia = {
  vertigo: [
    ["vertigo-machine-products.jpg", "VertiGo with compatible cylindrical products"],
    ["vertigo-support.jpg", "OneLaser support for VertiGo owners"],
  ],
};

const officialFilm = {
  youtubeId: "Yhfbj7ujNXQ",
  title: "Meet VertiGo in motion.",
  channel: "LensDigital",
  tag: "VERTIGO PRODUCT FILM",
};

const materialCategories = [
  {
    id: "coated-metal", label: "Coated Metal", title: "Crisp detail on compatible coatings.",
    copy: "Create personalized tumblers, bottles and handled drinkware on powder-coated, anodized or otherwise laser-compatible surfaces.",
    proof: "Tumblers · bottles · handled drinkware", image: "material-coated-metal.webp", icon: Tag,
  },
  {
    id: "glass", label: "Glass", title: "Personalized glassware, kept upright.",
    copy: "Test settings for the specific glass product, then use vertical positioning for compatible cylindrical forms.",
    proof: "Mugs · steins · bottles", image: "material-glass-stone.webp", icon: Wine,
  },
  {
    id: "mugs", label: "Coated Mugs", title: "A direct path to gift-ready mugs.",
    copy: "Personalize laser-compatible coated mugs with names and artwork. Confirm the coating, handle clearance and marking method with a sample first.",
    proof: "Compatible coatings · Tested blanks", image: "vertigo-coated-mugs-ai-v2.webp", illustrative: true, icon: CubeTransparent,
  },
  {
    id: "wood", label: "Wood Cylinders", title: "More than drinkware.",
    copy: "Explore compatible cylindrical wood gifts with tested settings. Confirm diameter, length, finish and secure clamping before production.",
    proof: "Rolling pins · cylindrical gifts", image: "vertigo-wood-cylinder-ai.webp", illustrative: true, icon: Tree,
  },
];

const powerProofs = [
  {
    id: "38W", tab: "38W RF Precision", eyebrow: "AIR-COOLED RF",
    title: "Fine detail for cylindrical products.",
    copy: "The 38W CO₂ RF metal tube supports stable, detailed engraving with air-cooled operation and no external water chiller.",
    proof: "38W RF · Air cooled · 1,000 DPI", image: "vertigo-rf-source-brochure.webp", alt: "RF source illustration from the supplied OneLaser VertiGo brochure",
  },
  {
    id: "rotary", tab: "Integrated Rotary", eyebrow: "VERTICAL ARCHITECTURE",
    title: "Built around the cylinder.",
    copy: "The integrated Grip2 rotary keeps compatible products upright and removes the separate rotary setup used by traditional flat-bed workflows.",
    proof: "Factory aligned · Upright positioning", image: "vertigo-architecture-brochure.webp", alt: "Vertical motion and integrated rotary architecture illustration from the supplied VertiGo brochure",
  }
];

const generationComparisons = [
  {
    feature: "Product position", gen2: "Upright and gravity-assisted", gen1: "Horizontal rotary inside a flat-bed machine",
  },
  {
    feature: "Rotary", gen2: "Integrated and factory-aligned", gen1: "Separate setup and alignment",
  },
  {
    feature: "Focus", gen2: "Automatic for 89–230 mm diameter", gen1: "Depends on the machine and rotary workflow",
  },
  {
    feature: "Footprint", gen2: "630 × 550 mm machine base", gen1: "Flat-bed laser plus rotary clearance",
  },
  {
    feature: "Primary job", gen2: "Cylindrical products", gen1: "Mixed flat and cylindrical work",
  }
];

const rfAdvantages = [
  {
    "id": "detail",
    "tab": "Cleaner Detail",
    "eyebrow": "CLEANER DETAIL",
    "title": "Fine artwork, made personal.",
    copy: "A responsive 38W RF source supports fine artwork with up to 1,000 DPI scanning precision and ≤0.01 mm positioning accuracy.",
    proof: "1,000 DPI · ≤0.01 mm positioning", image: "vertigo-rf-detail-ai.webp", illustrative: true, alt: "Illustrative botanical artwork on a powder-coated tumbler",
    "icon": Target
  },
  {
    "id": "speed",
    "tab": "Production Motion",
    "eyebrow": "PRODUCTION MOTION",
    title: "Production motion in a compact footprint.",
    copy: "Published motion performance reaches up to 800 mm/s with maximum 3G acceleration. Actual throughput depends on the artwork, coating and object geometry.",
    proof: "Up to 800 mm/s · 3G", image: "vertigo-machine-products.jpg", alt: "Supplied VertiGo product photograph with cylindrical products",
    "icon": ArrowClockwise
  },
  {
    id: "workflow", tab: "Simpler Workflow", eyebrow: "INTEGRATED SYSTEM",
    title: "Load. Focus. Start.",
    copy: "Automatic focus, red-light positioning, touchscreen controls and an integrated rotary shorten the path from product setup to engraving.",
    proof: "Autofocus · Integrated rotary · Touch control", image: "vertigo-rotary-official.webp", alt: "Real VertiGo rotary and cylindrical positioning hardware",
    "icon": ShieldCheck
  }
];

const decisionVideos = {};
const authorityVideos = [
  { id: "qAn4HhGjRDs", title: "Getting Started with VertiGo: Complete Setup Guide", channel: "OneLaser", tag: "OFFICIAL SETUP GUIDE" },
  { id: "qomhIor8-Ww", title: "OneLaser | VertiGo First Setup", channel: "OneLaser", tag: "OFFICIAL FIRST SETUP" },
  { id: "bEAKhA2Wjj4", title: "VertiGo Step-by-Step Panel Tutorial", channel: "OneLaser", tag: "OFFICIAL PANEL GUIDE" },
  { id: "4HJYrNMQaj4", title: "Inverting Artwork for Dark Drinkware", channel: "LensDigital", tag: "ARTWORK PREPARATION" },
  { id: "nsh8RTnQBGA", title: "Halloween Bottle Engraving on VertiGo", channel: "LensDigital", tag: "BOTTLE APPLICATION DEMO" },
];
const customerStoryVideos = [
  { id: "G9fXsZAbUXs", title: "If You Sell Tumblers, Buy This Laser", channel: "Make or Break Shop", tag: "CREATOR REVIEW" },
  { id: "1WOh36-VBWs", title: "Unboxing the VertiGo", channel: "Maker Studio", tag: "OWNER UNBOXING" },
  { id: "tyvjqkY0ZF8", title: "Perfect Full-Wrap Engraving on Tapered Tumblers", channel: "LensDigital", tag: "APPLICATION DEMO" },
  { id: "wlpuuP4DtHU", title: "20 Tumblers: The APA Show Production Challenge", channel: "LensDigital", tag: "BATCH ENGRAVING DEMO" },
  { id: "j4eXCvOsSkg", title: "Glass Engraving on VertiGo", channel: "LensDigital", tag: "GLASS APPLICATION DEMO" },
  { id: "PUctcoaOtiA", title: "3 Things a Vertical Laser Can Do", channel: "LensDigital", tag: "APPLICATION WALKTHROUGH" },
];

const speedMotionMaterials = [
  {
    id: "tumblers", label: "Tumblers", title: "Repeat detail around the cylinder.", copy: "Keep compatible tumblers upright while the integrated rotary supports repeatable positioning.", image: "home-project-vertigo-mountain-rambler.webp", icon: Tag,
  },
  {
    id: "bottles", label: "Bottles", title: "Move from one name to a coordinated batch.", copy: "Produce consistent artwork on compatible coated bottles with the same upright workflow.", image: "home-project-vertigo-coastal-wide-mouth-bottle.webp", icon: Wine,
  },
  {
    id: "glass", label: "Glass", title: "Keep cylindrical glassware upright.", copy: "Test the exact glass and settings first, then repeat the vertical setup across compatible products.", image: "product-rocks-glass.webp", icon: Target,
  },
  {
    id: "mugs", label: "Mugs", title: "A focused path to gift-ready mugs.", copy: "Personalize compatible coated mugs after checking the surface and handle clearance. Application shown is illustrative; test the exact blank and settings.", image: "vertigo-coated-mugs-ai-v2.webp", icon: CubeTransparent,
  }
];

const capabilityChapters = [
  {
    id: "precision", nav: "RF Precision", title: "Sharper detail. More valuable work.",
    summary: "A responsive 38W RF source supports fine artwork with up to 1,000 DPI scanning precision and ≤0.01 mm positioning accuracy.",
    spotlights: [{ title: "Fine artwork for compatible coatings.", copy: "A responsive RF source supports detailed designs; test the artwork, surface and settings before a batch run.", image: "vertigo-rf-detail-ai.webp", metrics: ["38W CO₂ RF", "1,000 DPI", "≤0.01 mm"], hideCopy: false }],
    support: [],
    proofs: [
      { value: "Air-cooled", label: "RF source cooling", icon: Thermometer },
      { value: "≤ 0.01 mm", label: "Positioning accuracy", icon: Target },
      { value: "2.5 in", label: "Focal lens", icon: CubeFocus },
      { value: "38W", label: "CO₂ RF source", icon: Fire },
    ],
    details: ["3× beam expander", "20 mm lens", "25 mm mirrors"],
  },
  {
    id: "motion", nav: "Speed & Motion", title: "Production motion in a compact footprint.",
    summary: "Published performance reaches up to 800 mm/s with maximum 3G acceleration while maintaining repeatable positioning.",
    speedProof: true, spotlights: [], support: [], proofs: [], details: [],
  },
  {
    id: "workflow", nav: "Smart Workflow", title: "Load. Focus. Start.",
    summary: "Automatic focus, red-light positioning, touchscreen controls and the integrated Grip2 rotary shorten the path from product setup to engraving.",
    spotlights: [{ title: "Built around cylindrical production.", copy: "VertiGo keeps compatible products upright and integrates the rotary into the machine architecture. This architecture view shows the vertical motion and rotary layout.", image: "vertigo-architecture-brochure.webp", metrics: ["Integrated rotary", "Upright position", "Factory aligned"], hideCopy: false }],
    support: [
      { title: "Automatic focus", copy: "Repeatable focal setup across the 89–230 mm autofocus diameter range. Confirm the focal setup for each new product.", image: "vertigo-rotary-official.webp" },
      { title: "Direct machine control", copy: "Watch OneLaser’s real panel tutorial, then use USB, Ethernet or Wi-Fi for your software workflow.", youtube: { id: "bEAKhA2Wjj4", title: "VertiGo Step-by-Step Panel Tutorial", channel: "OneLaser" } },
    ],
    proofs: [
      { value: "Auto", label: "Focus", icon: Camera },
      { value: "89–230 mm", label: "Autofocus diameter", icon: Target },
      { value: "3 ways", label: "USB / Ethernet / Wi-Fi", icon: WifiHigh },
      { value: "300 mm", label: "Vertical travel", icon: ArrowClockwise },
    ],
    details: ["Red-light positioning", "MakerBoost", "LightBurn", "RDWorks"],
  },
  {
    id: "expansion", nav: "Product Range", title: "One vertical workflow. More cylindrical products.",
    summary: "Build focused collections across compatible tumblers, bottles, mugs, glassware and cylindrical gifts.",
    spotlights: [{ title: "From one-off personalization to coordinated batches.", copy: "Reuse a familiar upright setup across products that fit the diameter range. Confirm height, handles and clamping before production.", image: "vertigo-drinkware-collection-ai-v2.webp", metrics: ["16–230 mm manual", "89–230 mm auto", "Integrated Grip2"], hideCopy: false }],
    support: [
      { title: "A clear view of the work", copy: "A large viewing door and LED-lit chamber make the engraving workflow visible in studios, shops and live personalization setups.", image: "vertigo-lifestyle.jpg" },
      { title: "Focused footprint", copy: "The machine base measures 630 × 550 mm, with a published overall height of 710 mm.", image: "vertigo-hero-04.png" },
    ],
    proofs: [
      { value: "630 × 550", label: "Machine footprint (mm)", icon: CubeTransparent },
      { value: "64 kg", label: "Machine weight", icon: Target },
      { value: "Class 1", label: "Enclosed design", icon: ShieldCheck },
      { value: "Built-in", label: "Smoke extraction", icon: ArrowClockwise },
    ],
    details: ["Tumblers", "Bottles", "Mugs", "Rotary gifts"],
  },
  {
    id: "protection", nav: "Reliability & Safety", title: "Enclosed for daily production.",
    summary: "An enclosed Class 1 design, lid protection, isolated electronics, built-in smoke extraction and air-cooled RF operation support a cleaner workflow.",
    spotlights: [],
    feature: { title: "Air-cooled RF operation", copy: "No external water chiller is required for the 38W RF source. Keep cooling airflow and ventilation unobstructed.", image: "vertigo-rf-source-brochure.webp" },
    support: [
      { title: "Enclosed workflow", copy: "A Class 1 enclosure design and lid protection support the workflow. Follow the operating manual and never bypass interlocks.", image: "vertigo-hero-01.png" },
      { title: "Plan the exhaust path", copy: "Built-in extraction is not air filtration. Plan suitable exhaust or a compatible filtration solution for the material and workspace.", icon: ArrowClockwise },
    ],
    proofs: [
      { value: "Class 1", label: "Enclosure", icon: ShieldCheck },
      { value: "Lid", label: "Protection", icon: LockKey },
      { value: "Air", label: "RF cooling", icon: Thermometer },
      { value: "Built-in", label: "Smoke extraction", icon: Target },
    ],
    details: ["Isolated electronics", "Emergency stop", "Level indicator", "Quick-release lens for cleaning"],
  },
];

const purchasePackages = [{
  id: "vertigo",
  name: "OneLaser VertiGo",
  price: 5599,
  msrp: 5999,
  badge: "CHECK AVAILABILITY",
  detail: "38W RF · Integrated Grip2 rotary",
  hybrid: 44483820224546,
  pro: null,
  powerDelta: 0,
  area: "Vertical cylindrical production",
}];

const officialAccessories = [];

const formatMoney = (value) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
}).format(value);

const specs = [
  { title: "Machine", rows: [["Machine size", "24.8 × 21.65 × 27.95 in", "630 × 550 × 710 mm"], ["Machine weight", "141.1 lb", "64 kg"], ["Vertical travel", "300 mm", "X-axis travel"]] },
  { title: "Laser & Performance", rows: [["Laser source", "38W CO₂ RF metal tube"], ["Cooling", "Air cooling"], ["Maximum speed", "800 mm/s"], ["Maximum acceleration", "3G"], ["Positioning accuracy", "≤0.01 mm"], ["Maximum scanning precision", "1,000 DPI"]] },
  { title: "Object Range", rows: [["Autofocus diameter", "89–230 mm", "3.5–9.05 in"], ["Manual-focus diameter", "16–230 mm", "0.62–9.05 in"]] },
  { title: "Control & Optics", rows: [["Software", "LightBurn / RDWorks / MakerBoost"], ["Connections", "USB / Ethernet / Wi-Fi"], ["Beam expander", "3×"], ["Focal lens", "2.5 in"], ["Lens / mirror diameter", "20 mm / 25 mm"]] },
  { title: "Electrical & Support", rows: [["Electrical input", "Factory-configured 115V or 220V, 50/60Hz", "Single phase; confirm the supplied version and outlet requirements with OneLaser"], ["Power consumption", "706.2W at 115V / 660.5W at 220V"], ["Limited warranty", "1 year: mechanics and electronics", "6 months: optical power source; 1 month: lenses and mirrors. Official terms and exclusions apply."], ["Support", "OneLaser knowledge base and U.S. support"]] },
  { title: "Included Items", rows: [["Cables", "Power cable / USB cable"], ["Exhaust", "4-inch exhaust hose"], ["Tools", "2.5 mm and 4 mm hex keys"], ["Rotary jaws", "Short and extended chuck jaws"], ["Other", "USB drive / labels / stickers", "Confirm final bundle contents at checkout"]] },
];

const faqs = [
  { q: "Do I need a separate rotary attachment?", a: "No. VertiGo's Grip2 rotary is integrated and factory-aligned for compatible cylindrical products." },
  { q: "What object diameters can VertiGo focus on?", a: "Autofocus covers 89–230 mm; manual focus covers 16–230 mm. Confirm object height, unusual shapes, clamping and handle clearance with OneLaser before ordering." },
  { q: "Does VertiGo need a water chiller?", a: "No. The 38W RF metal tube uses air cooling." },
  { q: "Which software and connections are supported?", a: "The published specification lists LightBurn, RDWorks and MakerBoost, with USB, Ethernet and Wi-Fi connectivity." },
  { q: "Can it engrave bare metal directly?", a: "VertiGo is a CO₂ RF system. Use powder-coated, anodized, coated or otherwise laser-compatible surfaces; confirm the material and marking method before production." },
  { q: "Is VertiGo available now?", a: "Availability and preorder options are handled on OneLaser’s official product page. Confirm the current ordering status, freight and delivery estimate with sales before payment; delivery estimates are not guarantees." },
  { q: "What comes in the box?", a: "The listed bundle includes a power cable, USB cable, 4-inch exhaust hose, 2.5 mm and 4 mm hex keys, short and extended chuck jaws, USB drive, labels and stickers. Confirm final contents with OneLaser before ordering." },
  { q: "What should I prepare before installation?", a: "Confirm the factory-configured 115V or 220V version and suitable single-phase outlet with OneLaser. Plan ventilation, a stable support surface, delivery access and safe handling for the 64 kg machine. Follow the installation and operating instructions." },
  { q: "Which materials should I test first?", a: "Test the exact coating, glass composition or wood finish and confirm dimensions and clamping. Ceramic glazes and marking methods vary: ask OneLaser to confirm suitable blanks rather than assuming every glazed mug is compatible." },
];

const journeySections = [
  { id: "why-vertigo", label: "Why VertiGo" },
  { id: "features", label: "Features" },
  { id: "roi-materials", label: "ROI & Materials" },
  { id: "specs", label: "Specs" },
  { id: "compare", label: "Compare" },
  { id: "reviews", label: "Reviews" },
  { id: "faq-support", label: "FAQ & Support" },
];

const consultationFeedback = [
  { name: "Integrated rotary", role: "Published product architecture", quote: "The Grip2 rotary is built into the vertical system rather than added as a separate accessory." },
  { name: "38W RF", role: "Published laser source", quote: "Air-cooled RF operation supports fine detail without an external water chiller." },
  { name: "Autofocus", role: "Published object range", quote: "Automatic focus covers compatible objects from 89 to 230 mm in diameter." },
];

function SpecGroup({ group }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`spec-group ${open ? "is-open" : ""}`}>
      <button type="button" className="spec-group__trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{group.title}</span>
        <span aria-hidden="true">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
      </button>
      {open && (
        <div className="spec-group__rows">
          {group.rows.map(([label, value, context]) => (
            <div className="spec-row" key={label}>
              <span>{label}</span>
              <div><strong>{value}</strong>{context && <small>{context}</small>}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function YouTubeCover({ video, onPlay, className = "" }) {
  return (
    <button type="button" className={`youtube-cover ${className}`.trim()} onClick={() => onPlay(video)} aria-label={`Play ${video.title} by ${video.channel}`}>
      <img src={video.cover ? asset(video.cover) : `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
      <span className="youtube-cover__play"><Play size={26} weight="fill" /></span>
      <i>{video.tag}</i>
    </button>
  );
}

function ReviewVideoCard({ video, onPlay, index, total }) {
  if (video.placeholder) {
    return (
      <article className="review-video-card review-video-card--placeholder">
        <span className="review-video-card__media"><img src={asset(video.cover)} alt="" loading="lazy" />{index !== undefined && <i>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</i>}</span>
        <span className="review-video-card__copy"><small>{video.tag}</small><strong>{video.title}</strong><span>{video.channel}</span></span>
      </article>
    );
  }
  return (
    <button type="button" className="review-video-card" onClick={() => onPlay(video)} aria-label={`Play ${video.title} by ${video.channel}`}>
      <span className="review-video-card__media">
        <img src={video.cover ? asset(video.cover) : `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
        <span><Play size={22} weight="fill" /></span>
        {index !== undefined && <i>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</i>}
      </span>
      <span className="review-video-card__copy"><small>{video.tag}</small><strong>{video.title}</strong><span>{video.channel}</span></span>
    </button>
  );
}

function GenerationComparison() {
  return (
    <section className="generation-comparison" id="compare" aria-labelledby="generation-comparison-title" data-reveal>
      <span className="commercial-capabilities__anchor" id="generation-comparison" aria-hidden="true" />
      <div className="generation-comparison__inner">
        <header className="generation-comparison__header">
          <span className="eyebrow">WORKFLOW COMPARISON</span>
          <h2 id="generation-comparison-title">Vertical by design, not by accessory.</h2>
          <p><strong>Compare a purpose-built vertical system with a traditional horizontal rotary setup.</strong></p>
        </header>

        <div className="generation-comparison__table-wrap">
          <table className="generation-comparison__table">
            <caption className="sr-only">VertiGo vertical workflow and traditional horizontal setup comparison</caption>
            <colgroup>
              <col className="generation-comparison__feature-column" />
              <col className="generation-comparison__gen2-column" />
              <col className="generation-comparison__gen1-column" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">Feature</span></th>
                <th scope="col" className="generation-comparison__gen2-heading">VertiGo vertical workflow</th>
                <th scope="col" className="generation-comparison__gen1-heading">Traditional horizontal setup</th>
              </tr>
            </thead>
            <tbody>
              {generationComparisons.map((item) => (
                <tr key={item.feature}>
                  <th scope="row">{item.feature}</th>
                  <td className="generation-comparison__gen2" data-label="VertiGo vertical workflow">{item.gen2}</td>
                  <td className="generation-comparison__gen1" data-label="Traditional horizontal setup">{item.gen1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="generation-comparison__statement">Choose VertiGo when repeatable cylindrical production is the primary job.</p>
      </div>
    </section>
  );
}

function SpeedMotionProof() {
  const {
    activeIndex: activeMaterial,
    selectIndex: selectMaterial,
    interactionProps: carouselProps,
  } = useAutoplayCarousel(speedMotionMaterials.length);
  const materialTabRefs = useRef([]);
  const selectedMaterial = speedMotionMaterials[activeMaterial];

  function handleMaterialKeyDown(event, index) {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!navigationKeys.includes(event.key)) return;
    event.preventDefault();
    const lastIndex = speedMotionMaterials.length - 1;
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? lastIndex
        : event.key === "ArrowLeft"
          ? (index - 1 + speedMotionMaterials.length) % speedMotionMaterials.length
          : (index + 1) % speedMotionMaterials.length;
    selectMaterial(nextIndex);
    materialTabRefs.current[nextIndex]?.focus();
  }

  return (
    <article className="speed-motion-proof" {...carouselProps}>
      <div className="speed-motion-proof__controls">
        <div
          className="speed-motion-proof__materials"
          role="tablist"
          aria-label="Explore VertiGo speed and motion by product"
        >
          {speedMotionMaterials.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={activeMaterial === index}
                aria-controls="speed-motion-panel"
                className={activeMaterial === index ? "is-active" : ""}
                key={item.id}
                ref={(node) => { materialTabRefs.current[index] = node; }}
                onClick={() => selectMaterial(index)}
                onKeyDown={(event) => handleMaterialKeyDown(event, index)}
              >
                <Icon size={20} weight={activeMaterial === index ? "bold" : "regular"} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      <div
        className="speed-motion-proof__stage"
        id="speed-motion-panel"
        role="tabpanel"
        aria-live="polite"
      >
        <div className="speed-motion-proof__media">
          <img
            key={selectedMaterial.id}
            src={asset(selectedMaterial.image)}
            alt={`${selectedMaterial.label} cylindrical product example for OneLaser VertiGo`}
          />
        </div>

        <div className="speed-motion-proof__copy">
          <span className="speed-motion-proof__profile">VertiGo motion · Vertical production</span>
          <h4>{selectedMaterial.title}</h4>
          <p>{selectedMaterial.copy}</p>
          <div className="speed-motion-proof__metrics" aria-label="Confirmed VertiGo motion performance">
            <div><strong>800</strong><span>mm/s maximum speed</span></div>
            <div><strong>3G</strong><span>Maximum acceleration</span></div>
          </div>
        </div>
      </div>
    </article>
  );
}

function RfAdvantages({ activeIndex, onChange, carouselProps }) {
  return (
    <section className="rf-advantages" id="rf-advantages" data-chapter-index="0" {...carouselProps}>
      <div className="rf-advantages__inner">
        <header className="rf-advantages__header">
          <span className="eyebrow">WHY RF TUBE</span>
          <h2>Why makers choose RF tube.</h2>
          <p>Fine RF detail, production motion and a simpler integrated workflow—built around cylindrical products.</p>
        </header>
        <div className="rf-advantages__tabs" role="tablist" aria-label="Explore the advantages of RF laser technology">
          {rfAdvantages.map((item, index) => {
            return (
              <button
                type="button"
                role="tab"
                id={`rf-tab-${item.id}`}
                aria-selected={activeIndex === index}
                aria-controls="rf-advantage-panel"
                tabIndex={activeIndex === index ? 0 : -1}
                className={activeIndex === index ? "is-active" : ""}
                key={item.id}
                onClick={() => onChange(index)}
                onKeyDown={(event) => {
                  const navigationKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
                  if (!navigationKeys.includes(event.key)) return;
                  event.preventDefault();
                  const lastIndex = rfAdvantages.length - 1;
                  const nextIndex = event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? lastIndex
                      : event.key === "ArrowLeft" || event.key === "ArrowUp"
                        ? (index - 1 + rfAdvantages.length) % rfAdvantages.length
                        : (index + 1) % rfAdvantages.length;
                  onChange(nextIndex);
                  event.currentTarget.parentElement
                    ?.querySelectorAll('[role="tab"]')
                    [nextIndex]?.focus();
                }}
              >
                <span>{item.tab}</span>
              </button>
            );
          })}
        </div>
        <div
          className="rf-advantages__stage"
          id="rf-advantage-panel"
          role="tabpanel"
          aria-labelledby={`rf-tab-${rfAdvantages[activeIndex].id}`}
          aria-live="polite"
        >
          <div className="rf-advantages__media">
            <img
              key={rfAdvantages[activeIndex].id}
              className={`rf-advantages__image rf-advantages__image--${rfAdvantages[activeIndex].id}`}
              src={asset(rfAdvantages[activeIndex].image)}
              alt={rfAdvantages[activeIndex].alt}
            />
          </div>
          <div className="rf-advantages__copy">
            <h3>{rfAdvantages[activeIndex].title}</h3>
            <p>{rfAdvantages[activeIndex].copy}</p>
            {rfAdvantages[activeIndex].illustrative && <p className="application-caption">Illustrative application, not a precision test.</p>}
            <strong>{rfAdvantages[activeIndex].proof}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityBrowser({ onPlay, onVideoPlay, children }) {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapterRefs = useRef([]);
  const navRef = useRef(null);

  function jumpToNode(node, offset) {
    if (!node) return;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: window.scrollY + node.getBoundingClientRect().top - offset, behavior: "auto" });
    requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
  }

  useEffect(() => {
    const chapters = [
      document.getElementById("rf-advantages"),
      document.getElementById("power-guide"),
      ...chapterRefs.current,
      document.getElementById("makerboost"),
    ].filter(Boolean);
    const observer = new IntersectionObserver(() => {
      const visible = chapters
        .map((target) => ({ target, rect: target.getBoundingClientRect() }))
        .filter(({ rect }) => rect.bottom > 96 && rect.top < window.innerHeight * .32)
        .sort((a, b) => Math.abs(a.rect.top - 150) - Math.abs(b.rect.top - 150));
      if (visible[0]) setActiveChapter(Number(visible[0].target.dataset.chapterIndex));
    }, { rootMargin: "-96px 0px -68% 0px", threshold: 0 });

    chapters.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const activeButton = nav?.querySelector(`[data-chapter-nav="${activeChapter}"]`);
    if (!nav || !activeButton || window.innerWidth > 760) return;
    nav.scrollTo({
      left: activeButton.offsetLeft - ((nav.clientWidth - activeButton.clientWidth) / 2),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [activeChapter]);

  useEffect(() => {
    if (!["#features", "#capability-system"].includes(window.location.hash)) return;
    const alignToCapabilities = () => jumpToNode(document.getElementById("features"), 64);
    const timeout = window.setTimeout(alignToCapabilities, 350);
    window.addEventListener("load", alignToCapabilities, { once: true });
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("load", alignToCapabilities);
    };
  }, []);

  function selectChapter(index) {
    setActiveChapter(index);
    jumpToNode(
      index === 0 ? document.getElementById("rf-advantages") : chapterRefs.current[index],
      window.innerWidth <= 760 ? 180 : 100,
    );
  }

  return (
    <section className="capability-scroll" id="features">
      <span className="commercial-capabilities__anchor" id="capability-system" aria-hidden="true" />
      <div className="journey-opening-artwork">
        <img src={asset("hydra-gen2-feature-overview-v1.webp")} style={{height:"auto",aspectRatio:"auto",objectFit:"contain"}} alt="Supplied VertiGo machine photograph with cylindrical product examples" />
      </div>
      <nav
          className="capability-scroll__nav"
          aria-label="Explore VertiGo advantages"
          ref={navRef}
          style={{
            "--active-chapter": activeChapter,
            "--chapter-count": capabilityChapters.length + 1,
          }}
        >
          {capabilityChapters.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={activeChapter === index ? "is-active" : ""}
              onClick={() => selectChapter(index)}
              aria-current={activeChapter === index ? "step" : undefined}
              data-chapter-nav={index}
            >
              <strong>{item.nav}</strong>
            </button>
          ))}
          <button
            type="button"
            className={activeChapter === capabilityChapters.length ? "is-active" : ""}
            onClick={() => {
              setActiveChapter(capabilityChapters.length);
              jumpToNode(document.getElementById("makerboost"), window.innerWidth <= 760 ? 136 : 100);
            }}
            aria-current={activeChapter === capabilityChapters.length ? "step" : undefined}
            data-chapter-nav={capabilityChapters.length}
          >
            <strong>Software</strong>
          </button>
      </nav>
      {children}
      <div className="capability-scroll__layout">

        <div className="capability-scroll__chapters">
          {capabilityChapters.map((chapter, chapterIndex) => (
            <section
              className="capability-scroll__chapter"
              id={`capability-${chapter.id}`}
              data-chapter-index={chapterIndex}
              ref={(node) => { chapterRefs.current[chapterIndex] = node; }}
              aria-labelledby={`capability-${chapter.id}-title`}
              key={chapter.id}
            >
              {chapter.fullWidthImage && (
                <figure className="capability-scroll__full-width-image capability-scroll__full-width-image--opening">
                  <img src={asset(chapter.fullWidthImage)} alt="VertiGo all-material engraving collection across wood, leather, glass, stone and coated metal" />
                </figure>
              )}

              <header className="capability-scroll__chapter-heading">
                <small>{chapter.nav}</small>
                <h3 id={`capability-${chapter.id}-title`}>{chapter.title}</h3>
                <p>{chapter.summary}</p>
              </header>

              <div className="capability-scroll__stories">
                {chapter.speedProof && <SpeedMotionProof />}
                {chapter.spotlights.map((spotlight) => (
                  <article className="capability-scroll__story" key={spotlight.title}>
                    <div className="capability-scroll__media capability-scroll__media--static">
                      {spotlight.video ? (
                        <video controls muted playsInline preload="metadata" poster={spotlight.poster} aria-label={`${spotlight.title} VertiGo video`} style={{ display: "block", width: "100%", height: "100%", objectFit: "contain", background: "#000" }}>
                          <source src={spotlight.video} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={asset(spotlight.image)} alt={`${spotlight.title} ${spotlight.image.includes("-ai") ? "illustrative application" : spotlight.image.includes("-brochure") ? "supplied technical illustration" : "VertiGo product photograph"}`} />
                      )}
                    </div>
                    {!spotlight.hideCopy && (
                      <div className="capability-scroll__story-copy">
                        <h4>{spotlight.title}</h4>
                        <p>{spotlight.copy}</p>
                        {spotlight.image.includes("-ai") && <p className="application-caption">Illustrative application · Results depend on material and settings.</p>}
                        <div>{spotlight.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {(chapter.feature || chapter.support.length > 0) && (
                <div className={chapter.id === "protection" ? "capability-scroll__media-showcase capability-scroll__media-showcase--compact" : "capability-scroll__media-showcase"}>
                {chapter.feature && (
                  <article className="capability-scroll__feature capability-scroll__story">
                    {chapter.id === "protection" ? (
                      <div className="capability-scroll__media capability-scroll__media--static">
                        <img src={asset(chapter.feature.image)} alt={`${chapter.feature.title} VertiGo proof`} />
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="capability-scroll__media"
                        onClick={() => onPlay(chapter.feature.title, asset(chapter.feature.image))}
                        aria-label={`Open ${chapter.feature.title} full-size media preview`}
                      >
                        <img src={asset(chapter.feature.image)} alt={`${chapter.feature.title} VertiGo proof`} />
                        <span className="capability-scroll__play" aria-hidden="true"><Play size={25} weight="fill" /></span>
                      </button>
                    )}
                    <div className="capability-scroll__story-copy">
                      <h4>{chapter.feature.title}</h4>
                      <p>{chapter.feature.copy}</p>
                      {chapter.feature.metrics?.length > 0 && (
                        <div>{chapter.feature.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
                      )}
                    </div>
                  </article>
                )}

                <div className={chapter.support.every((item) => item.icon) ? "capability-scroll__support capability-scroll__support--icons" : "capability-scroll__support"}>
                  {chapter.support.map((item) => (
                    <article key={item.title ?? item.compareTitles?.join("-")}>
                      {item.icon ? (
                        <span className="capability-scroll__support-icon" aria-hidden="true"><item.icon size={28} weight="regular" /></span>
                      ) : item.youtube ? (
                        <YouTubeCover video={item.youtube} onPlay={onVideoPlay} />
                      ) : item.video ? (
                        <video className="capability-scroll__support-media" controls muted playsInline preload="metadata" poster={item.poster} aria-label={`${item.title} video`}>
                          <source src={item.video} type="video/mp4" />
                        </video>
                      ) : item.compareImages ? (
                        <div className="capability-scroll__comparison-media">
                          {item.compareImages.map((image, imageIndex) => (
                            <figure key={image}>
                              <img src={image} alt="" />
                              <figcaption>
                                <strong>{item.compareTitles[imageIndex]}</strong>
                                <span>{item.compareCopies[imageIndex]}</span>
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      ) : (
                        <img src={asset(item.image)} alt="" />
                      )}
                      {!item.compareImages && (
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.copy}</p>
                          {item.metrics?.length > 0 && (
                            <div className="capability-scroll__support-tags">
                              {item.metrics.map((metric) => <span key={metric}>{metric}</span>)}
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
                </div>
              )}

              {chapter.proofs.length > 0 && (
                <div className="capability-scroll__proofs">
                  {chapter.proofs.map(({ value, label, icon: Icon }) => (
                    <article key={`${value}-${label}`}>
                      <Icon size={24} weight="regular" aria-hidden="true" />
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </article>
                  ))}
                </div>
              )}

              {chapter.details.length > 0 && (
                <div className="capability-scroll__details" aria-label={`${chapter.nav} additional details`}>
                  <span>More built in</span>
                  <div>{chapter.details.map((detail) => <span key={detail}>{detail}</span>)}</div>
                </div>
              )}

            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VertigoPage() {
  useEffect(() => {
    document.title = "OneLaser VertiGo Vertical Laser Engraver | OneLaser";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = "Explore OneLaser VertiGo, a 38W RF vertical laser engraver with an integrated rotary for cylindrical products.";
  }, []);
  const [activeMedia, setActiveMedia] = useState(0);
  const [heroLightboxOpen, setHeroLightboxOpen] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [materialPaused, setMaterialPaused] = useState(false);
  const [materialTimerEpoch, setMaterialTimerEpoch] = useState(0);
  const [materialReducedMotion, setMaterialReducedMotion] = useState(() => (
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  ));
  const {
    activeIndex: activeRfAdvantage,
    selectIndex: setActiveRfAdvantage,
    interactionProps: rfCarouselProps,
  } = useAutoplayCarousel(rfAdvantages.length);
  const {
    activeIndex: activePowerProof,
    selectIndex: setActivePowerProof,
    interactionProps: powerCarouselProps,
  } = useAutoplayCarousel(powerProofs.length);
  const [openFaq, setOpenFaq] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedPackageId, setSelectedPackageId] = useState("vertigo");
  const media = useMemo(() => (
    [...baseHeroMedia, ...packageHeroMedia[selectedPackageId].map(([name, alt], index) => ({
      src: asset(name),
      alt,
      label: `VertiGo product view ${index + 1}`,
    }))]
  ), [selectedPackageId]);
  const [purchasePower, setPurchasePower] = useState("38W");
  const [selectedPurchaseAccessories, setSelectedPurchaseAccessories] = useState([]);
  const [activeJourneySection, setActiveJourneySection] = useState("why-vertigo");
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [videoModal, setVideoModal] = useState(null);
  const [youtubeVideo, setYoutubeVideo] = useState(null);
  const thumbnailRailRef = useRef(null);
  const heroMediaTouchStartX = useRef(null);
  const authorityVideoRailRef = useRef(null);
  const horizontalRailDragRef = useRef({ rail: null, pointerId: null, startX: 0, startScrollLeft: 0, dragged: false });
  const reviewVideoRailRef = useRef(null);
  const consultationFeedbackRailRef = useRef(null);
  const materialTabRefs = useRef([]);
  const materialTouchStartX = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [topButtonState, setTopButtonState] = useState("hidden");
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    initializeAnalytics();
    trackEvent("view_content", {
      content_name: "OneLaser VertiGo",
      content_category: "Laser engraver",
      value: 5599,
      currency: "USD",
    });
  }, []);

  useEffect(() => {
    materialCategories.forEach(({ image }) => {
      const preload = new Image();
      preload.src = asset(image);
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setMaterialReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (materialReducedMotion || materialPaused) return undefined;
    const timeout = window.setTimeout(() => {
      setActiveMaterial((current) => (current + 1) % materialCategories.length);
    }, MATERIAL_AUTOPLAY_DELAY);
    return () => window.clearTimeout(timeout);
  }, [activeMaterial, materialPaused, materialReducedMotion, materialTimerEpoch]);

  useEffect(() => {
    const revealNodes = [...document.querySelectorAll("[data-reveal]")];
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    revealNodes.forEach((node) => revealObserver.observe(node));

    const updateProgress = () => {
      const currentScrollY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (currentScrollY / max) * 100) : 0);
      const readingLine = currentScrollY + 156;
      const currentSection = journeySections.reduce((active, section) => {
        const node = document.getElementById(section.id);
        const absoluteTop = node ? node.getBoundingClientRect().top + currentScrollY : Number.POSITIVE_INFINITY;
        return absoluteTop <= readingLine ? section.id : active;
      }, "why-vertigo");
      setActiveJourneySection(currentSection);
      if (currentScrollY < 480) {
        setTopButtonState("hidden");
      } else if (currentScrollY < lastScrollYRef.current - 4) {
        setTopButtonState("visible");
      } else if (currentScrollY > lastScrollYRef.current + 4) {
        setTopButtonState("muted");
      }
      const journeyStart = document.getElementById("why-vertigo");
      setJourneyVisible(Boolean(journeyStart && journeyStart.getBoundingClientRect().bottom <= window.innerHeight));
      lastScrollYRef.current = currentScrollY;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const placeholderPalettes = [
      ["#e7ded5", "#d8c9bc", "#f3ece5"],
      ["#dfe5df", "#cbd8cf", "#edf2ed"],
      ["#dde4e8", "#c7d4db", "#edf2f4"],
      ["#e8dfdf", "#d9c8ca", "#f4ebeb"],
      ["#e5e0e9", "#d3cadb", "#f1edf4"],
      ["#e1e6e3", "#cbd7d2", "#eff3f1"],
      ["#e8e2d7", "#d8cdbb", "#f4efe6"],
    ];
    const assignPlaceholderPalette = (image) => {
      const seed = `${image.getAttribute("src") || ""}|${image.alt || ""}`;
      const hash = [...seed].reduce((value, character) => (
        ((value << 5) - value + character.charCodeAt(0)) | 0
      ), 0);
      const [base, low, high] = placeholderPalettes[Math.abs(hash) % placeholderPalettes.length];
      image.style.setProperty("--image-placeholder-base", base);
      image.style.setProperty("--image-placeholder-low", low);
      image.style.setProperty("--image-placeholder-high", high);
    };
    const prepareImage = (image) => {
      if (!(image instanceof HTMLImageElement)) return;
      assignPlaceholderPalette(image);
      image.classList.toggle("is-image-ready", image.complete && image.naturalWidth > 0);
      image.classList.toggle("is-image-error", image.complete && image.naturalWidth === 0);
    };
    const markReady = (event) => {
      if (!(event.target instanceof HTMLImageElement)) return;
      event.target.classList.add("is-image-ready");
      event.target.classList.remove("is-image-error");
    };
    const markError = (event) => {
      if (!(event.target instanceof HTMLImageElement)) return;
      event.target.classList.add("is-image-error");
      event.target.classList.remove("is-image-ready");
    };
    const imageObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === "attributes") prepareImage(record.target);
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) prepareImage(node);
          if (node instanceof Element) node.querySelectorAll("img").forEach(prepareImage);
        });
      });
    });

    document.querySelectorAll("img").forEach(prepareImage);
    document.addEventListener("load", markReady, true);
    document.addEventListener("error", markError, true);
    imageObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["src", "srcset"],
      childList: true,
      subtree: true,
    });
    return () => {
      document.removeEventListener("load", markReady, true);
      document.removeEventListener("error", markError, true);
      imageObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!youtubeVideo && !videoModal && !heroLightboxOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setYoutubeVideo(null);
        setVideoModal(null);
        setHeroLightboxOpen(false);
      }
      if (heroLightboxOpen && event.key === "ArrowLeft") stepMedia(-1);
      if (heroLightboxOpen && event.key === "ArrowRight") stepMedia(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [youtubeVideo, videoModal, heroLightboxOpen, media.length]);

  const selectedPurchasePackage = useMemo(() => {
    const selected = purchasePackages.find((item) => item.id === selectedPackageId) ?? purchasePackages[0];
    return selected;
  }, [selectedPackageId, purchasePower]);

  const purchaseAccessoryTotal = useMemo(
    () => officialAccessories
      .filter((item) => selectedPurchaseAccessories.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0),
    [selectedPurchaseAccessories],
  );

  const purchaseAccessoryMsrpTotal = useMemo(
    () => officialAccessories
      .filter((item) => selectedPurchaseAccessories.includes(item.id))
      .reduce((sum, item) => sum + item.msrp, 0),
    [selectedPurchaseAccessories],
  );

  const purchaseTotal = (selectedPurchasePackage.price + purchaseAccessoryTotal) * quantity;
  const purchaseMsrpTotal = (selectedPurchasePackage.msrp + purchaseAccessoryMsrpTotal) * quantity;
  const selectedVariant = selectedPurchasePackage.hybrid;
  const MORE_PAYMENT_OPTIONS_URL = PRODUCT_URL;
  const financingCopy = "Financing available";

  function handleJourneyNavigation(section) {
    trackEvent("navigate_section", { section_id: section.id, section_name: section.label });
    const target = document.getElementById(section.id);
    if (!target) return;
    const chromeBottom = Math.max(
      document.querySelector(".home-header")?.getBoundingClientRect().bottom || 0,
      document.querySelector(".journey-nav")?.getBoundingClientRect().bottom || 0,
    );
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - chromeBottom - 16,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  function getPurchaseEventParameters() {
    return {
      content_name: "OneLaser VertiGo 38W RF",
      content_ids: ["44483820224546"],
      content_type: "product",
      value: purchaseTotal,
      currency: "USD",
      quantity,
      accessory_count: selectedPurchaseAccessories.length,
    };
  }

  function handleAddToCart() {
    trackEvent("purchase_intent", getPurchaseEventParameters());
    window.open(PRODUCT_URL, "_blank", "noopener,noreferrer");
  }

  function trackLead(destination, leadType) {
    trackEvent("generate_lead", {
      content_name: "OneLaser VertiGo",
      lead_type: leadType,
      destination,
    });
  }

  function selectMedia(index) {
    setActiveMedia(index);
  }

  function playOfficialFilm() {
    if (!officialFilm.youtubeId) return;
    setYoutubeVideo({
      id: officialFilm.youtubeId,
      title: officialFilm.title,
      channel: officialFilm.channel,
      tag: officialFilm.tag,
    });
  }

  function stepMedia(direction) {
    setActiveMedia((current) => (current + direction + media.length) % media.length);
  }

  function handleHeroMediaTouchStart(event) {
    heroMediaTouchStartX.current = event.changedTouches[0]?.clientX ?? null;
  }

  function handleHeroMediaTouchEnd(event) {
    const startX = heroMediaTouchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    heroMediaTouchStartX.current = null;

    if (startX == null || endX == null || Math.abs(endX - startX) < 44) return;
    stepMedia(endX < startX ? 1 : -1);
  }

  function scrollThumbnails(direction) {
    thumbnailRailRef.current?.scrollBy({ left: direction * 330, behavior: "smooth" });
  }

  function scrollReviewVideos(direction) {
    reviewVideoRailRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  function scrollAuthorityVideos(direction) {
    authorityVideoRailRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  function startHorizontalRailDrag(event) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const rail = event.currentTarget;
    horizontalRailDragRef.current = {
      rail,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: rail.scrollLeft,
      dragged: false,
    };
  }

  function moveHorizontalRailDrag(event) {
    const drag = horizontalRailDragRef.current;
    const rail = drag.rail;
    if (!rail || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 4 && !drag.dragged) {
      drag.dragged = true;
      rail.setPointerCapture?.(event.pointerId);
      rail.classList.add("is-dragging");
    }
    if (!drag.dragged) return;
    event.preventDefault();
    rail.scrollLeft = drag.startScrollLeft - distance;
  }

  function endHorizontalRailDrag(event) {
    const drag = horizontalRailDragRef.current;
    const rail = drag.rail;
    if (!rail || drag.pointerId !== event.pointerId) return;
    if (rail.hasPointerCapture?.(event.pointerId)) rail.releasePointerCapture(event.pointerId);
    rail.classList.remove("is-dragging");
    drag.rail = null;
    drag.pointerId = null;
    if (drag.dragged) window.setTimeout(() => { drag.dragged = false; }, 0);
  }

  function suppressHorizontalRailClickAfterDrag(event) {
    if (!horizontalRailDragRef.current.dragged) return;
    event.preventDefault();
    event.stopPropagation();
    horizontalRailDragRef.current.dragged = false;
  }

  function scrollConsultationFeedback(direction) {
    const rail = consultationFeedbackRailRef.current;
    if (!rail) return;
    const firstCard = rail.querySelector("blockquote");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 360;
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap || getComputedStyle(rail).gap) || 12;
    rail.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
  }

  function selectMaterial(index, { focus = false } = {}) {
    const nextIndex = (index + materialCategories.length) % materialCategories.length;
    setActiveMaterial(nextIndex);
    setMaterialTimerEpoch((current) => current + 1);
    if (focus) materialTabRefs.current[nextIndex]?.focus();
  }

  function resumeMaterialAutoplay() {
    setMaterialPaused(false);
    setMaterialTimerEpoch((current) => current + 1);
  }

  function handleMaterialKeyDown(event, index) {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!navigationKeys.includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? materialCategories.length - 1
        : event.key === "ArrowLeft"
          ? index - 1
          : index + 1;
    selectMaterial(nextIndex, { focus: true });
  }

  function openStory(title, image) {
    if (typeof title === "object" && title?.id) {
      setYoutubeVideo(title);
      return;
    }
    setVideoModal({ title, image });
  }

  function togglePurchaseAccessory(accessoryId) {
    setSelectedPurchaseAccessories((current) => {
      const selected = !current.includes(accessoryId);
      trackEvent("select_accessory", { accessory_id: accessoryId, selected });
      return selected ? [...current, accessoryId] : current.filter((id) => id !== accessoryId);
    });
  }

  return (
    <div className="site-shell home-global-chrome">
      <div className="page-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
      <a className="skip-link" href="#main">Skip to content</a>
      <HomeNavigation megaMenuActivation="click" />

      <nav className={journeyVisible ? "journey-nav is-visible" : "journey-nav"} aria-label="Explore VertiGo page sections">
        <div className="journey-nav__inner">
          <div className="journey-nav__rail">
            {journeySections.map((section, index) => (
              <button
                type="button"
                className={activeJourneySection === section.id ? "is-active" : ""}
                aria-current={activeJourneySection === section.id ? "location" : undefined}
                onClick={() => handleJourneyNavigation(section)}
                key={section.id}
              >
                <span>{section.label}</span>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </button>
            ))}
          </div>
          <span className="journey-nav__count">
            {String(Math.max(1, journeySections.findIndex(({ id }) => id === activeJourneySection) + 1)).padStart(2, "0")}
            <i>/</i>{String(journeySections.length).padStart(2, "0")}
          </span>
        </div>
      </nav>

      <main id="main">
        <section className="hero section" id="top">
          <div className="hero-media">
            <div
              className="media-stage"
              aria-label="VertiGo product gallery"
              aria-roledescription="carousel"
              onTouchStart={handleHeroMediaTouchStart}
              onTouchEnd={handleHeroMediaTouchEnd}
              onTouchCancel={() => { heroMediaTouchStartX.current = null; }}
            >
              <img src={media[activeMedia].src} alt={media[activeMedia].alt} draggable="false" />
              <button
                type="button"
                className="media-stage__open"
                aria-label={`View larger: ${media[activeMedia].alt}`}
                onClick={() => setHeroLightboxOpen(true)}
              >
                <span aria-hidden="true"><MagnifyingGlassPlus size={20} /></span>
              </button>
              <span className="media-count">{String(activeMedia + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}</span>
              <button type="button" className="media-arrow media-arrow--previous" aria-label="Previous product view" onClick={() => stepMedia(-1)}><CaretLeft size={25} /></button>
              <button type="button" className="media-arrow media-arrow--next" aria-label="Next product view" onClick={() => stepMedia(1)}><CaretRight size={25} /></button>
            </div>
            <div className="thumbnail-controls">
              <button type="button" className="thumb-arrow" aria-label="Scroll product views left" onClick={() => scrollThumbnails(-1)}><CaretLeft size={20} /></button>
              <div className="thumbnail-row" ref={thumbnailRailRef} aria-label="Product views">
                {media.map((item, index) => (
                  <button
                    type="button"
                    key={`${item.src}-${index}`}
                    className={activeMedia === index ? "thumbnail is-active" : "thumbnail"}
                    onClick={() => selectMedia(index)}
                    aria-label={`Show product view ${String(index + 1).padStart(2, "0")}`}
                  >
                    <img src={item.src} alt="" />
                  </button>
                ))}
              </div>
              <button type="button" className="thumb-arrow" aria-label="Scroll product views right" onClick={() => scrollThumbnails(1)}><CaretRight size={20} /></button>
              <span className="thumbnail-divider" aria-hidden="true" />
              <button type="button" className="video-thumbnail" onClick={playOfficialFilm} aria-label="Watch the VertiGo product film">
                <img src={`https://i.ytimg.com/vi/${officialFilm.youtubeId}/hqdefault.jpg`} alt="" />
                <span><Play size={16} weight="fill" /><small>WATCH</small></span>
              </button>
            </div>
            <div className="hero-assurance-grid" aria-label="VertiGo information, consultation, and support benefits">
              <a className="hero-assurance-card hero-assurance-card--link" href={SALES_CALL_URL} target="_blank" rel="noreferrer" onClick={() => trackLead("sales-consultation-call", "book_free_call")}>
                <Phone size={28} weight="light" aria-hidden="true" />
                <strong>Book A Free Call</strong>
                <ArrowUpRight className="hero-assurance-card__arrow" size={15} aria-hidden="true" />
              </a>
              <a className="hero-assurance-card hero-assurance-card--link" href={BROCHURE_URL} target="_blank" rel="noreferrer" onClick={() => trackLead("vertigo-brochure", "download_brochure")}>
                <DownloadSimple size={28} weight="light" aria-hidden="true" />
                <strong>Download Brochure</strong>
                <ArrowUpRight className="hero-assurance-card__arrow" size={15} aria-hidden="true" />
              </a>
              <a className="hero-assurance-card hero-assurance-card--link" href={SUPPORT_URL} target="_blank" rel="noreferrer" onClick={() => trackLead("onelaser-support", "hero_assurance_support")}>
                <Headset size={28} weight="light" aria-hidden="true" />
                <strong>100% U.S.-based Engineers with Lifetime Support</strong>
                <ArrowUpRight className="hero-assurance-card__arrow" size={15} aria-hidden="true" />
              </a>
              <div className="hero-assurance-card">
                <ShieldCheck size={28} weight="light" aria-hidden="true" />
                <strong>Component-Specific Limited Warranty</strong>
              </div>
            </div>
          </div>

          <div className="purchase-panel">
            <h1>OneLaser VertiGo™ Performance Rotary Laser for Drinkware (38W RF)</h1>

            <div className="rating-row" aria-label="Explore VertiGo creator videos">
              <Play size={18} weight="fill" aria-hidden="true" />
              <a href="#reviews">See creator reviews &amp; application demos</a>
            </div>

            <ul className="hero-highlights">
              <li><strong>38W CO₂ RF source:</strong> stable, air-cooled operation.</li>
              <li><strong>Production motion:</strong> up to 800 mm/s · 3G acceleration.</li>
              <li><strong>Professional detail:</strong> 1,000 DPI · ≤0.01 mm positioning accuracy.</li>
              <li><strong>Integrated workflow:</strong> Grip2 rotary · autofocus for 89–230 mm diameters.</li>
            </ul>

            <div className="official-price">
              <div className="official-price__main">
                <span>Final price</span>
                <strong>{formatMoney(selectedPurchasePackage.price)} <small>USD</small></strong>
                <em>Save {formatMoney(selectedPurchasePackage.msrp - selectedPurchasePackage.price)}</em>
              </div>
              <div className="official-price__msrp">
                <span>MSRP</span>
                <strong><span>{formatMoney(selectedPurchasePackage.msrp)}</span> <small>USD</small></strong>
              </div>
            </div>
            <div className="financing-line">
              <strong><span>{financingCopy}</span> with Affirm</strong>
              <a href="https://www.1laser.com/pages/financing" target="_blank" rel="noreferrer">See if you qualify <CaretRight size={15} /></a>
            </div>
            <div className="financing-more">
              <span>Subject to eligibility and terms</span>
              <a href="https://www.1laser.com/pages/financing" target="_blank" rel="noreferrer">Click here <ArrowUpRight size={14} /></a>
            </div>

            <div className="purchase-options" id="purchase-options">
              <div className="purchase-section-heading">
                <div><span>Laser configuration</span><small>Purpose-built for cylindrical personalization.</small></div>
              </div>
              <div className="purchase-power-options">
                {[{ id: "38W", title: "38W CO₂ RF", copy: "Air-cooled detail with an integrated Grip2 rotary" }].map((item) => {
                  const selected = purchasePower === item.id;
                  return (
                    <button
                      type="button"
                      className={selected ? "purchase-power is-selected" : "purchase-power"}
                      key={item.id}
                      onClick={() => {
                        setPurchasePower(item.id);
                        trackEvent("select_power", { power: item.id, value: 5599, currency: "USD" });
                      }}
                      aria-pressed={selected}
                    >
                      <span><strong>{item.title}</strong>{item.badge && <small>{item.badge}</small>}</span>
                      <p>{item.copy}</p>
                    </button>
                  );
                })}
              </div>

              <div className="purchase-section-heading">
                <div><span>Package</span><small>One integrated vertical production system.</small></div>
              </div>
              <div className="official-packages">
                {purchasePackages.map((item) => {
                  const selected = selectedPackageId === item.id;
                  const packagePrice = item.price;
                  const packageMsrp = item.msrp;
                  return (
                    <button
                      type="button"
                      className={selected ? "official-package is-selected" : "official-package"}
                      key={item.id}
                      onClick={() => {
                        setSelectedPackageId(item.id);
                        trackEvent("select_package", { package_id: item.id, power: purchasePower });
                      }}
                      aria-pressed={selected}
                    >
                      <div className="official-package__top">
                        <span><small>{item.badge}</small><strong>{item.name}</strong></span>
                        <span>
                          <strong>{formatMoney(packagePrice)}</strong>
                          <span className="official-package__monthly">Financing subject to approval</span>
                          <em>Save {formatMoney(packageMsrp - packagePrice)}</em>
                        </span>
                      </div>
                      <div className="official-package__detail"><Check size={17} weight="bold" /><span>{item.detail}</span></div>
                    </button>
                  );
                })}
              </div>

              {officialAccessories.length > 0 && <><div className="purchase-section-heading purchase-section-heading--accessories">
                <div><span>Frequently bought together</span><small>Official accessory pricing from OneLaser.</small></div>
              </div><div className="purchase-accessories">
                {officialAccessories.map((item) => {
                  const selected = selectedPurchaseAccessories.includes(item.id);
                  return (
                    <label className={selected ? "purchase-accessory is-selected" : "purchase-accessory"} key={item.id}>
                      <input type="checkbox" checked={selected} onChange={() => togglePurchaseAccessory(item.id)} />
                      <span
                        className="purchase-accessory__media"
                        style={{ "--accessory-image-scale": item.imageScale }}
                      >
                        <img src={asset(item.image)} alt={item.name} />
                      </span>
                      <span><strong>{item.name}</strong><small>OPTIONAL</small><p>{item.description}</p></span>
                      <span className="purchase-accessory__price"><strong>{formatMoney(item.price)}</strong><del>{formatMoney(item.msrp)}</del></span>
                    </label>
                  );
                })}
              </div></>}

              <div className="purchase-total">
                <span><small>Your configuration</small><strong>38W RF · Integrated Grip2 rotary</strong></span>
                <strong>{formatMoney(purchaseTotal)}</strong>
              </div>
              <div className="purchase-actions purchase-actions--hero">
                <div className="quantity-control" aria-label="Purchase quantity">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}><Minus size={15} /></button>
                  <strong>{quantity}</strong>
                  <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}><Plus size={15} /></button>
                </div>
                <button type="button" className="primary-cta" onClick={handleAddToCart}>Order on OneLaser</button>
                <p className="application-caption">Confirm availability, quantity and delivery timing on OneLaser’s official product page before payment.</p>
              </div>
              <a className="more-payment-options" href={MORE_PAYMENT_OPTIONS_URL} target="_blank" rel="noreferrer" onClick={() => trackEvent("begin_checkout", { ...getPurchaseEventParameters(), checkout_type: "more_payment_options" })}>More payment options <ArrowUpRight size={14} /></a>
            </div>

          </div>
        </section>

        <section className="feature-overview" id="why-vertigo" data-reveal>
          <img src={asset("feature-overview-hydra-gen2-v2.webp")} style={{height:"auto",aspectRatio:"1672 / 941",objectFit:"contain"}} alt="Illustrative collection of personalized powder-coated tumblers, bottles and a handled mug" />
          <p className="application-caption media-provenance">AI-generated application concept · Not a material or performance test.</p>
        </section>

        <section className="official-film" aria-labelledby="official-film-title" data-reveal>
          <header className="official-film__header">
            <span className="eyebrow">VERTIGO PRODUCT FILM</span>
            <h2 id="official-film-title">{officialFilm.title}</h2>
            <p>See the vertical rotary concept, upright product handling and cylindrical production workflow in one focused introduction.</p>
          </header>
          <button type="button" className="official-film__placeholder" onClick={playOfficialFilm} aria-label="Watch the VertiGo product film">
            <img className="official-film__cover" src={`https://i.ytimg.com/vi/${officialFilm.youtubeId}/hqdefault.jpg`} alt="" />
            <div className="official-film__placeholder-copy">
              <span>{officialFilm.channel} · PRODUCT FILM</span>
              <strong>VertiGo</strong>
              <span className="official-film__play" aria-hidden="true">
                <Play size={28} weight="fill" />
              </span>
              <small>PLAY ON YOUTUBE</small>
            </div>
          </button>
        </section>

        <section className="review-proof authority-proof" aria-labelledby="authority-proof-title" data-reveal>
          <div className="review-proof__header">
            <div className="section-heading section-heading--stack">
              <span className="eyebrow">SETUP &amp; APPLICATION VIDEOS</span>
              <h2 id="authority-proof-title">Learn the VertiGo workflow.</h2>
              <p>Start with OneLaser’s official setup and touchscreen guides, then explore artwork preparation and bottle engraving with LensDigital.</p>
            </div>
            <div className="review-proof__controls" aria-label="Browse VertiGo reviews and demonstrations">
              <button type="button" onClick={() => scrollAuthorityVideos(-1)} aria-label="Show previous VertiGo video"><CaretLeft size={22} /></button>
              <button type="button" onClick={() => scrollAuthorityVideos(1)} aria-label="Show more VertiGo videos"><CaretRight size={22} /></button>
            </div>
          </div>
          <div
            className="review-proof__rail is-mouse-draggable"
            ref={authorityVideoRailRef}
            aria-label="VertiGo machine reviews and demonstrations"
            onPointerDown={startHorizontalRailDrag}
            onPointerMove={moveHorizontalRailDrag}
            onPointerUp={endHorizontalRailDrag}
            onPointerCancel={endHorizontalRailDrag}
            onClickCapture={suppressHorizontalRailClickAfterDrag}
            onDragStart={(event) => event.preventDefault()}
          >
            {authorityVideos.map((video, index) => <ReviewVideoCard video={video} onPlay={setYoutubeVideo} index={index} total={authorityVideos.length} key={video.id} />)}
          </div>
        </section>

        <CapabilityBrowser onPlay={openStory} onVideoPlay={setYoutubeVideo}>
          <RfAdvantages activeIndex={activeRfAdvantage} onChange={setActiveRfAdvantage} carouselProps={rfCarouselProps} />
          <section className="power-guide" id="power-guide" data-chapter-index="0" data-reveal {...powerCarouselProps}>
            <div className="power-guide__inner">
              <div className="section-heading section-heading--left">
                <span className="eyebrow">ONE PURPOSE-BUILT VERTICAL PLATFORM</span>
                <h2>The laser, rotary and focus system work as one.</h2>
                <p>Explore the 38W RF source and integrated rotary as two parts of the same cylindrical production workflow.</p>
              </div>
              <div className="power-switch" role="tablist" aria-label="Explore VertiGo platform proof">
                {powerProofs.map((item, index) => (
                  <button
                    type="button"
                    role="tab"
                    id={`power-tab-${item.id}`}
                    aria-controls="power-proof-panel"
                    aria-selected={activePowerProof === index}
                    tabIndex={activePowerProof === index ? 0 : -1}
                    className={activePowerProof === index ? "is-active" : ""}
                    key={item.id}
                    onClick={() => setActivePowerProof(index)}
                    onKeyDown={(event) => {
                      const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
                      if (!navigationKeys.includes(event.key)) return;
                      event.preventDefault();
                      const nextIndex = event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? powerProofs.length - 1
                          : event.key === "ArrowLeft"
                            ? (index - 1 + powerProofs.length) % powerProofs.length
                            : (index + 1) % powerProofs.length;
                      setActivePowerProof(nextIndex);
                      event.currentTarget.parentElement
                        ?.querySelectorAll('[role="tab"]')
                        [nextIndex]?.focus();
                    }}
                  >
                    {item.tab}
                  </button>
                ))}
              </div>
              <div
                className="power-proof-stage"
                id="power-proof-panel"
                role="tabpanel"
                aria-labelledby={`power-tab-${powerProofs[activePowerProof].id}`}
                aria-live="polite"
              >
                <div className="power-proof-stage__media">
                  <img key={powerProofs[activePowerProof].id} src={asset(powerProofs[activePowerProof].image)} alt={powerProofs[activePowerProof].alt} />
                </div>
                <div className="power-proof-stage__copy">
                  <span className="eyebrow">{powerProofs[activePowerProof].eyebrow}</span>
                  <h3>{powerProofs[activePowerProof].title}</h3>
                  <p>{powerProofs[activePowerProof].copy}</p>
                  <strong>{powerProofs[activePowerProof].proof}</strong>
                </div>
              </div>
            </div>
          </section>
        </CapabilityBrowser>

        <section className="makerboost-proof" id="makerboost" data-chapter-index={capabilityChapters.length} data-reveal>
          <div className="makerboost-proof__inner">
            <div className="makerboost-proof__intro">
              <header className="makerboost-proof__header">
                <span className="eyebrow">MAKERBOOST AI SOFTWARE</span>
                <h2>Out of the box, into creation.</h2>
              </header>
              <div className="makerboost-proof__copy">
                <p className="makerboost-proof__body">MakerBoost adapts the design view to VertiGo’s vertical coordinate system and brings machine-motion controls into the software, helping you prepare and position cylindrical work in one workflow.</p>
              </div>
            </div>
            <div className="makerboost-proof__media">
              <img src={asset("software-makerboost.webp")} alt="MakerBoost AI software identity artwork" />
            </div>
          </div>
        </section>

        <section className="software-compatibility" id="software" data-reveal>
          <div className="software-compatibility__inner">
            <header className="software-compatibility__header">
              <span className="eyebrow">SOFTWARE</span>
              <h2>Your software. Your way.</h2>
            </header>
            <article className="software-compatibility__stage">
              <div className="software-compatibility__copy">
                <p className="software-compatibility__body">Works with LightBurn, RDWorks and MakerBoost. Choose the workflow you know; supported file formats and available controls depend on the software and version you use.</p>
              </div>
              <div className="software-compatibility__media">
                <img src={asset("software-compatibility.webp")} alt="LightBurn and RDWorks software compatibility shown on a laptop" />
              </div>
            </article>
          </div>
        </section>

        <CommercialCapabilities asset={asset} equipmentInvestment={purchaseTotal} />

        <section className="section materials" id="materials" data-reveal>
          <div className="section-heading section-heading--stack">
            <span className="eyebrow">MATERIALS THAT BECOME BUSINESSES</span>
            <h2>From material choice to sellable work.</h2>
            <p>Compatible cylindrical products. Repeatable batches. Fine RF detail.</p>
          </div>
          <div
            className="material-gallery"
            role="region"
            aria-roledescription="carousel"
            aria-label="VertiGo finished-product material gallery"
            onMouseEnter={() => setMaterialPaused(true)}
            onMouseLeave={resumeMaterialAutoplay}
            onFocusCapture={() => setMaterialPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) resumeMaterialAutoplay();
            }}
            onTouchStart={(event) => {
              materialTouchStartX.current = event.changedTouches[0]?.clientX ?? null;
              setMaterialPaused(true);
            }}
            onTouchEnd={(event) => {
              const endX = event.changedTouches[0]?.clientX;
              if (materialTouchStartX.current !== null && endX !== undefined) {
                const distance = endX - materialTouchStartX.current;
                if (Math.abs(distance) > 48) selectMaterial(activeMaterial + (distance > 0 ? -1 : 1));
              }
              materialTouchStartX.current = null;
              resumeMaterialAutoplay();
            }}
            onTouchCancel={() => {
              materialTouchStartX.current = null;
              resumeMaterialAutoplay();
            }}
          >
            <div id="material-gallery-stage" className="material-gallery__stage" aria-live={materialPaused ? "polite" : "off"}>
              <img key={materialCategories[activeMaterial].id} src={asset(materialCategories[activeMaterial].image)} alt={`${materialCategories[activeMaterial].label} cylindrical engraving application`} />
              <div className="material-gallery__copy">
                <span>{materialCategories[activeMaterial].label}</span>
                <h3>{materialCategories[activeMaterial].title}</h3>
                <p>{materialCategories[activeMaterial].copy}</p>
                {materialCategories[activeMaterial].illustrative && <p className="application-caption">Illustrative application · Test material and settings first.</p>}
                <strong>{materialCategories[activeMaterial].proof}</strong>
              </div>
            </div>
            <div className="material-tabs" role="tablist" aria-label="Explore VertiGo material categories">
              {materialCategories.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeMaterial === index}
                    aria-controls="material-gallery-stage"
                    className={activeMaterial === index ? "is-active" : ""}
                    key={item.id}
                    ref={(node) => { materialTabRefs.current[index] = node; }}
                    onClick={() => selectMaterial(index)}
                    onKeyDown={(event) => handleMaterialKeyDown(event, index)}
                  >
                    <span className="material-tab__label"><Icon size={23} weight="regular" aria-hidden="true" /><span>{item.label}</span></span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </button>
                );
              })}
            </div>
            <div className="material-progress" aria-hidden="true">
              <span
                key={`${activeMaterial}-${materialTimerEpoch}`}
                className={materialPaused ? "is-paused" : ""}
                style={{ "--material-progress-duration": `${MATERIAL_AUTOPLAY_DELAY}ms` }}
              />
            </div>
          </div>
        </section>

        <section className="section specs" id="specs" data-reveal>
          <div className="section-heading section-heading--stack">
            <span className="eyebrow">COMPLETE DETAILS</span><h2>Specifications.</h2>
            <p>Core published specifications for the VertiGo platform. Final bundle content and electrical requirements should be confirmed at checkout.</p>
            <a className="specs-brochure" href={BROCHURE_URL} target="_blank" rel="noreferrer" onClick={() => trackLead("vertigo-brochure", "download_brochure")}>Download Brochure <ArrowUpRight size={16} /></a>
          </div>
          <div className="spec-list">
            {specs.map((group) => <SpecGroup group={group} key={group.title} />)}
          </div>
        </section>

        <GenerationComparison />

        <section className="review-proof" id="reviews" aria-labelledby="review-proof-title" data-reveal>
          <div className="review-proof__header">
            <div className="section-heading section-heading--stack">
              <span className="eyebrow">REVIEWS &amp; REAL-WORLD APPLICATIONS</span>
              <h2 id="review-proof-title">See VertiGo in creators' hands.</h2>
              <p>Explore creator reviews, owner unboxing, full-wrap artwork, glass engraving and a 20-tumbler production challenge. Each video identifies its creator and purpose.</p>
            </div>
            <div className="review-proof__controls" aria-label="Browse customer stories">
              <button type="button" onClick={() => scrollReviewVideos(-1)} aria-label="Show previous customer story"><CaretLeft size={22} /></button>
              <button type="button" onClick={() => scrollReviewVideos(1)} aria-label="Show more customer stories"><CaretRight size={22} /></button>
            </div>
          </div>
          <div
            className="review-proof__rail is-mouse-draggable"
            ref={reviewVideoRailRef}
            aria-label="Customer story videos"
            onPointerDown={startHorizontalRailDrag}
            onPointerMove={moveHorizontalRailDrag}
            onPointerUp={endHorizontalRailDrag}
            onPointerCancel={endHorizontalRailDrag}
            onClickCapture={suppressHorizontalRailClickAfterDrag}
            onDragStart={(event) => event.preventDefault()}
          >
            {customerStoryVideos.map((video, index) => <ReviewVideoCard video={video} onPlay={setYoutubeVideo} index={index} total={customerStoryVideos.length} key={video.id} />)}
          </div>

        </section>

        <section className="decision-paths" id="next-step" aria-labelledby="decision-paths-title" data-reveal>
          <div className="decision-paths__heading">
            <span className="eyebrow">NOT READY TO CHECK OUT?</span>
            <h2 id="decision-paths-title">Choose the next step that helps you decide.</h2>
            <p>Join the product community, speak with an engineer, or request the information you need to evaluate VertiGo on your own time.</p>
          </div>
          <div className="decision-paths__grid">
            <a
              className="decision-path"
              href={COMMUNITY_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLead("vertigo-community", "community")}
            >
              <span><Play size={22} weight="fill" /></span>
              <strong>Join the VertiGo community</strong>
              <p>Follow owner conversations, application ideas and product updates.</p>
              <i>Open the community <ArrowUpRight size={15} /></i>
            </a>
            <a
              className="decision-path"
              href={SALES_CALL_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLead("sales-consultation", "talk_to_engineer")}
            >
              <span><Phone size={22} weight="bold" /></span>
              <strong>Talk to an engineer</strong>
              <p>Get a free 30-minute consultation focused on your products, workflow and setup.</p>
              <i>Schedule a consultation <ArrowUpRight size={15} /></i>
            </a>
            <form
              className="decision-path decision-path--capture"
              action="https://www.1laser.com/contact#ContactForm"
              method="post"
              target="_blank"
              onSubmit={() => trackLead("shopify-contact", "email_capture")}
            >
              <input type="hidden" name="form_type" value="contact" />
              <input type="hidden" name="utf8" value="✓" />
              <input type="hidden" name="contact[subject]" value="VertiGo website lead" />
              <span><EnvelopeSimple size={22} weight="bold" /></span>
              <strong>Get VertiGo information</strong>
              <p>Choose the complete specifications, an itemized quote or help evaluating your materials.</p>
              <label>
                <span className="sr-only">Choose what you want to receive</span>
                <select name="contact[body]" defaultValue="Send me the complete VertiGo specification sheet">
                  <option>Send me the complete VertiGo specification sheet</option>
                  <option>I want an itemized VertiGo quotation</option>
                  <option>I want to discuss my materials with an engineer</option>
                </select>
              </label>
              <label className="decision-path__email">
                <span className="sr-only">Email address</span>
                <input type="email" name="contact[email]" placeholder="Work email" required />
                <button type="submit" aria-label="Send my VertiGo request"><ArrowUpRight size={17} /></button>
              </label>
            </form>
          </div>
        </section>

        <section className="trade-up-banner" aria-labelledby="trade-up-title" data-reveal>
          <div>
            <span className="eyebrow">TRADE UP TO VertiGo</span>
            <h2 id="trade-up-title">Have an old laser? Explore a VertiGo upgrade.</h2>
            <p>Tell OneLaser what you own today and confirm current eligibility and offers for your chosen VertiGo configuration.</p>
          </div>
          <a
            href="https://www.1laser.com/pages/trade-up?utm_source=vertigo-listing&utm_medium=product-page&utm_campaign=vertigo-trade-up"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackLead("trade-up", "trade_up")}
          >
            Check my trade-up value <ArrowUpRight size={16} />
          </a>
        </section>

        <section className="ownership-support" id="faq-support" data-reveal>
          <span className="commercial-capabilities__anchor" id="support" aria-hidden="true" />
          <div className="ownership-support__inner">
            <div className="ownership-support__grid">
              <article className="ownership-support__card">
                <div className="ownership-support__card-top"><Check size={26} weight="bold" aria-hidden="true" /><span>01</span></div>
                <div className="ownership-support__lead"><h3>Clear terms. Confident decisions.</h3></div>
                <div className="ownership-support__details">
                  <p>Non-defect returns carry a 25% restocking fee; original and return freight are non-refundable. Leased or financed equipment is excluded from returns and refunds. <a href={RETURNS_URL} target="_blank" rel="noreferrer">Read the official return terms.</a></p>
                </div>
              </article>
              <article className="ownership-support__card">
                <div className="ownership-support__card-top"><ShieldCheck size={26} weight="regular" aria-hidden="true" /><span>02</span></div>
                <div className="ownership-support__lead"><h3>Know what is covered.</h3></div>
                <div className="ownership-support__details">
                  <p>VertiGo’s limited warranty covers mechanics and electronics for 1 year, optical power sources for 6 months, and lenses and mirrors for 1 month. <a href={WARRANTY_URL} target="_blank" rel="noreferrer">Coverage and exclusions.</a></p>
                </div>
              </article>
              <article className="ownership-support__card ownership-support__card--wide">
                <div className="ownership-support__card-top"><Star size={26} weight="regular" aria-hidden="true" /><span>03</span></div>
                <div className="ownership-support__lead"><h3>One Support. Real engineers. Real experience.</h3></div>
                <div className="ownership-support__details">
                  <p>Work directly with OneLaser’s U.S.-based engineering team for lifetime support, 1-on-1 training and setup guidance. Plan delivery access, electrical requirements, ventilation and cooling before your machine arrives.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq" data-reveal>
          <div className="section-heading section-heading--stack faq-heading"><span className="eyebrow">BUYING QUESTIONS</span><h2>Good answers before you commit.</h2></div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className="faq-item" key={item.q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{item.q}</span><span aria-hidden="true">{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</span>
                </button>
                {openFaq === index && <p>{item.a}</p>}
              </div>
            ))}
          </div>
        </section>

      </main>

      <HomeFooter />

      <button
        type="button"
        className={`back-to-top back-to-top--${topButtonState}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        })}
      >
        <CaretUp size={17} weight="bold" aria-hidden="true" />
        <span>TOP</span>
      </button>

      <div className="sticky-buy" aria-label="Sticky purchase bar">
        <div>
          <strong>{selectedPurchasePackage.name}</strong>
          <span>38W RF · Integrated rotary</span>
          <small>U.S.-based support · Confirm current delivery timing</small>
        </div>
        <div className="sticky-buy__price">
          <div className="sticky-buy__amounts">
            <span><strong>{formatMoney(purchaseTotal)}</strong><del>{formatMoney(purchaseMsrpTotal)}</del></span>
            <small>Financing available with Affirm</small>
          </div>
          <button type="button" onClick={handleAddToCart}>Order on OneLaser</button>
        </div>
      </div>

      {heroLightboxOpen && (
        <div
          className="hero-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="VertiGo enlarged product gallery"
          onClick={() => setHeroLightboxOpen(false)}
        >
          <div
            className="hero-lightbox__dialog"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleHeroMediaTouchStart}
            onTouchEnd={handleHeroMediaTouchEnd}
            onTouchCancel={() => { heroMediaTouchStartX.current = null; }}
          >
            <img src={media[activeMedia].src} alt={media[activeMedia].alt} draggable="false" />
            <span className="hero-lightbox__count">{String(activeMedia + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}</span>
            <button type="button" className="hero-lightbox__close" aria-label="Close enlarged product gallery" onClick={() => setHeroLightboxOpen(false)}><X size={24} /></button>
            <button type="button" className="hero-lightbox__arrow hero-lightbox__arrow--previous" aria-label="Previous enlarged product view" onClick={() => stepMedia(-1)}><CaretLeft size={30} /></button>
            <button type="button" className="hero-lightbox__arrow hero-lightbox__arrow--next" aria-label="Next enlarged product view" onClick={() => stepMedia(1)}><CaretRight size={30} /></button>
          </div>
        </div>
      )}

      {videoModal && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${videoModal.title} media preview`} onClick={() => setVideoModal(null)}>
          <div className="video-modal__dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="video-modal__close" aria-label="Close media preview" onClick={() => setVideoModal(null)}><X size={22} /></button>
            <div className="video-modal__media">
              <img src={videoModal.image} alt="" />
              <span><Play size={26} weight="fill" /></span>
            </div>
            <div className="video-modal__copy">
              <h2>{videoModal.title}</h2>
              <p>VertiGo product media. Application images are illustrative concepts; actual results depend on material and settings.</p>
            </div>
          </div>
        </div>
      )}

      {youtubeVideo && (
        <div className="youtube-modal" role="dialog" aria-modal="true" aria-label={`${youtubeVideo.title} YouTube video`} onClick={() => setYoutubeVideo(null)}>
          <div className="youtube-modal__dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="youtube-modal__close" aria-label="Close YouTube video" onClick={() => setYoutubeVideo(null)}><X size={23} /></button>
            <div className="youtube-modal__player">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={youtubeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="youtube-modal__copy"><span className="eyebrow">{youtubeVideo.tag}</span><h2>{youtubeVideo.title}</h2><p>{youtubeVideo.channel} · YouTube</p></div>
          </div>
        </div>
      )}
    </div>
  );
}
