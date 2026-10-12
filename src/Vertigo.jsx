import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  CaretUp,
  Check,
  DownloadSimple,
  Gauge,
  Headset,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  Sparkle,
  Star,
  Target,
  X,
} from "@phosphor-icons/react";
import { HomeFooter, HomeNavigation } from "./Home.jsx";
import { initializeAnalytics, trackEvent } from "./analytics.js";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const PRODUCT_URL = "https://www.1laser.com/products/vertigo-vertical-laser-engraver?variant=44483820224546";
const SALES_CALL_URL = "https://www.1laser.com/products/sales-consultation-call";
const SUPPORT_URL = "https://www.1laser.com/pages/contact-us";
const COMMUNITY_URL = "https://www.facebook.com/groups/onelaservertigo";
const BROCHURE_URL = `${import.meta.env.BASE_URL}downloads/onelaser-product-brochure-vertigo-en-v1.pdf`;

const gallery = [
  ["vertigo-hero-01.png", "OneLaser VertiGo front product view"],
  ["vertigo-lifestyle.jpg", "VertiGo in a drinkware personalization studio"],
  ["vertigo-hero-02.png", "VertiGo vertical laser engraver on white"],
  ["vertigo-hero-03.jpg", "VertiGo product view with integrated vertical rotary"],
  ["vertigo-hero-04.png", "VertiGo side profile in gray"],
  ["vertigo-hero-05.jpg", "VertiGo front product view"],
].map(([src, alt]) => ({ src: asset(src), alt }));

const opportunityGroups = [
  {
    id: "drinkware",
    label: "Drinkware",
    title: "Build a focused drinkware catalog.",
    copy: "Move from one-off tumblers to repeatable collections across coated bottles, travel mugs and handled drinkware.",
    cards: [
      ["home-project-vertigo-mountain-rambler.webp", "Outdoor tumblers", "Repeatable personalization for clubs, teams and gifting."],
      ["home-project-vertigo-wildflower-handled-tumbler.webp", "Handled tumblers", "Keep handled drinkware upright while the integrated rotary supports positioning."],
      ["home-project-vertigo-coastal-wide-mouth-bottle.webp", "Bottles", "Add names, logos and artwork to laser-compatible coated bottles."],
    ],
  },
  {
    id: "events",
    label: "Events",
    title: "Personalize where the customer is.",
    copy: "The compact, air-cooled system is designed for retail counters, markets and live customization workflows.",
    cards: [
      ["home-project-vertigo-event-tumbler-batch.webp", "Live event batches", "Create a consistent visual system for event merchandise."],
      ["home-project-vertigo-corporate-tumbler-batch.webp", "Corporate orders", "Produce coordinated branded drinkware without a separate rotary setup."],
      ["vertigo-lifestyle.jpg", "Countertop service", "Let customers see the product and finished result in the same space."],
    ],
  },
  {
    id: "gifting",
    label: "Gifting",
    title: "Turn practical objects into keepsakes.",
    copy: "Use fine RF detail for names, monograms and artwork on compatible coatings and cylindrical gift formats.",
    cards: [
      ["home-project-vertigo-celestial-flip-sip-bottle.webp", "Personalized bottles", "Build name-led designs and small themed collections."],
      ["product-rocks-glass.webp", "Glassware", "Expand into compatible cylindrical glass gifts with tested settings."],
      ["product-wine-bottle.webp", "Bottle gifting", "Add presentation value to laser-compatible coated bottles."],
    ],
  },
  {
    id: "batch",
    label: "Batch Work",
    title: "Repeat the setup, not the alignment work.",
    copy: "The factory-integrated rotary and autofocus are designed to reduce repeated mechanical setup between compatible products.",
    cards: [
      ["home-project-vertigo-corporate-tumbler-batch.webp", "Logo programs", "Keep recurring corporate orders visually consistent."],
      ["home-project-vertigo-event-tumbler-batch.webp", "Short runs", "Move from design to a small coordinated batch."],
      ["vertigo-machine-products.jpg", "Product range", "Support cups, bottles, bowls and other compatible upright cylindrical items."],
    ],
  },
];

const materials = [
  { id: "coated-metal", label: "Coated Metal", title: "Crisp detail on compatible coatings.", copy: "Use the 38W RF source for fine artwork on powder-coated, anodized or otherwise laser-compatible metal surfaces.", image: "home-project-vertigo-mountain-rambler.webp", note: "Tumblers · bottles · handled drinkware" },
  { id: "glass", label: "Glass", title: "Personalized glassware, kept upright.", copy: "Test settings and coatings for the specific glass product, then use vertical positioning for cylindrical forms.", image: "product-rocks-glass.webp", note: "Mugs · steins · bottles" },
  { id: "ceramic", label: "Ceramic", title: "A direct path to gift-ready mugs.", copy: "Build monograms and artwork for compatible ceramic mugs without adding a separate rotary attachment.", image: "vertigo-lifestyle.jpg", note: "Mugs · drinkware · small vessels" },
  { id: "wood", label: "Wood Cylinders", title: "More than drinkware.", copy: "Use tested settings for compatible cylindrical wood products such as rolling pins and presentation pieces.", placeholder: "WOOD CYLINDER MEDIA PENDING", note: "Rolling pins · cylindrical gifts" },
];

const workflowComparison = [
  ["Product position", "Upright and gravity-assisted", "Horizontal rotary inside a flat-bed machine"],
  ["Rotary", "Integrated and factory-aligned", "Separate setup and alignment"],
  ["Focus", "Automatic for 89-230 mm diameter", "Depends on machine and rotary workflow"],
  ["Footprint", "630 × 550 mm machine base", "Flat-bed laser plus rotary clearance"],
  ["Primary job", "Cylindrical products", "Mixed flat and cylindrical work"],
];

const chapters = [
  { id: "vertical-architecture", label: "Vertical Architecture", title: "Built around the cylinder.", copy: "VertiGo changes the working orientation: the product stands upright, the rotary is integrated, and the motion system is engineered for vertical engraving.", image: "vertigo-vertical-vs-horizontal.jpg", alt: "VertiGo vertical engraving compared with a traditional horizontal rotary setup", metrics: [["Integrated", "Grip2 rotary"], ["Upright", "Product position"], ["Factory", "Aligned"]] },
  { id: "rf-precision", label: "RF Precision", title: "38W RF detail, without a water chiller.", copy: "The air-cooled CO2 RF metal tube supports stable, fine engraving with up to 1,000 DPI scanning precision and positioning accuracy of ≤0.01 mm.", image: "vertigo-rf-proof.jpg", alt: "Air-cooled RF metal laser source used by VertiGo", metrics: [["38W", "CO2 RF"], ["1,000", "DPI"], ["≤0.01 mm", "Positioning"]] },
  { id: "speed-motion", label: "Speed & Motion", title: "Production motion in a compact footprint.", copy: "Published performance reaches up to 800 mm/s with maximum 3G acceleration. Actual throughput depends on artwork, coating, settings and object geometry.", placeholder: "MOTION MEDIA PENDING", metrics: [["800 mm/s", "Max speed"], ["3G", "Max acceleration"], ["64 kg", "Machine weight"]] },
  { id: "smart-workflow", label: "Smart Workflow", title: "Load. Focus. Start.", copy: "Automatic focus, red-light positioning, touchscreen controls and USB, Ethernet or Wi-Fi connectivity support a shorter path from design to engraving.", image: "vertigo-smart-workflow.jpg", alt: "Operator using the VertiGo touchscreen during a cylindrical engraving setup", metrics: [["Auto", "Focus"], ["Touch", "Control"], ["3 ways", "To connect"]] },
  { id: "reliability-safety", label: "Reliability & Safety", title: "Enclosed for customer-facing production.", copy: "The published platform combines an enclosed Class 1 design, lid protection, isolated electronics, built-in smoke extraction and air-cooled RF operation.", placeholder: "SAFETY MEDIA PENDING", metrics: [["Class 1", "Enclosure"], ["Built-in", "Extraction"], ["Air", "Cooling"]] },
];

const specGroups = [
  ["Machine", [["Machine size", "24.8 × 21.65 × 27.95 in (630 × 550 × 710 mm)"], ["Machine weight", "141.1 lb (64 kg)"], ["Vertical travel", "300 mm X-axis travel"]]],
  ["Laser & Performance", [["Laser source", "38W CO2 RF metal tube"], ["Cooling", "Air cooling"], ["Maximum speed", "800 mm/s"], ["Maximum acceleration", "3G"], ["Positioning accuracy", "≤0.01 mm"], ["Maximum scanning precision", "1,000 DPI"]]],
  ["Object Range", [["Autofocus diameter", "89-230 mm (3.5-9.05 in)"], ["Manual-focus diameter", "16-230 mm (0.62-9.05 in)"]]],
  ["Control & Optics", [["Software", "LightBurn, RDWorks, MakerBoost"], ["Connections", "USB, Ethernet, Wi-Fi"], ["Beam expander", "3×"], ["Focal lens", "2.5 in"], ["Lens diameter", "20 mm"], ["Mirror diameter", "25 mm"]]],
  ["Power & Support", [["Electrical input", "100-240V AC, 50/60Hz, single phase; factory voltage configuration applies"], ["Power consumption", "706.2W at 115V; 660.5W at 220V"], ["Warranty", "Limited 1 year"], ["Support", "OneLaser knowledge base and U.S. support"]]],
];

const faqs = [
  ["Do I need a separate rotary attachment?", "No. VertiGo's Grip2 rotary is integrated and factory-aligned for compatible cylindrical products."],
  ["What object diameters can VertiGo focus on?", "The workbook lists 89-230 mm for autofocus and 16-230 mm for manual focus. Confirm unusual shapes and handle clearance with OneLaser before ordering."],
  ["Does VertiGo need a water chiller?", "No. The 38W RF metal tube uses air cooling."],
  ["Which software and connections are supported?", "The published specification lists LightBurn, RDWorks and MakerBoost, with USB, Ethernet and Wi-Fi connectivity."],
  ["Can it engrave bare metal directly?", "VertiGo is a CO2 RF system. Use powder-coated, anodized, coated or otherwise laser-compatible surfaces; confirm the material and marking method before production."],
  ["Is VertiGo available now?", "The official product page currently labels the configuration as Preorder. Confirm current processing, freight and delivery timing at checkout or with OneLaser sales."],
  ["What comes in the box?", "The workbook lists a power cable, USB cable, 4-inch exhaust hose, 2.5 mm and 4 mm hex keys, short and extended chuck jaws, USB drive, labels and stickers. Confirm final bundle contents at checkout."],
];

const journey = [["opportunities", "What to Make"], ["materials", "Materials"], ["why-rf", "Why RF"], ["features", "Features"], ["specifications", "Specifications"], ["support", "Support"]];

function ProductImage({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return <span className={`vtg-image ${loaded ? "is-loaded" : ""} ${failed ? "is-failed" : ""} ${className}`}>{!failed && <img src={src} alt={alt} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}{failed && <span>MEDIA PENDING</span>}</span>;
}

function MediaPlaceholder({ label, dark = false }) {
  return <div className={`vtg-placeholder ${dark ? "vtg-placeholder--dark" : ""}`} role="img" aria-label={label}><span>{label}</span></div>;
}

function SectionHeading({ eyebrow, title, body, id }) {
  return <header className="vtg-section-heading">{eyebrow && <span>{eyebrow}</span>}<h2 id={id}>{title}</h2>{body && <p>{body}</p>}</header>;
}

export function VertigoPage() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [opportunityId, setOpportunityId] = useState("drinkware");
  const [materialId, setMaterialId] = useState("coated-metal");
  const [chapterId, setChapterId] = useState("vertical-architecture");
  const [quantity, setQuantity] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);
  const [topVisible, setTopVisible] = useState(false);
  const materialTimer = useRef(null);
  const activeOpportunity = useMemo(() => opportunityGroups.find((group) => group.id === opportunityId), [opportunityId]);
  const activeMaterial = useMemo(() => materials.find((item) => item.id === materialId), [materialId]);
  const activeChapter = useMemo(() => chapters.find((item) => item.id === chapterId), [chapterId]);

  useEffect(() => {
    document.title = "OneLaser VertiGo Vertical Laser Engraver | OneLaser";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = "Explore OneLaser VertiGo, a 38W RF vertical laser engraver with an integrated rotary for cylindrical products.";
    initializeAnalytics();
  }, []);

  useEffect(() => {
    const onScroll = () => setTopVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    materialTimer.current = window.setInterval(() => setMaterialId((current) => materials[(materials.findIndex((item) => item.id === current) + 1) % materials.length].id), 6000);
    return () => window.clearInterval(materialTimer.current);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") setGalleryIndex((index) => (index - 1 + gallery.length) % gallery.length);
      if (event.key === "ArrowRight") setGalleryIndex((index) => (index + 1) % gallery.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen]);

  const moveGallery = (delta) => setGalleryIndex((index) => (index + delta + gallery.length) % gallery.length);
  const chooseMaterial = (id) => { setMaterialId(id); window.clearInterval(materialTimer.current); };
  const addToCart = () => {
    trackEvent("purchase_intent", { content_name: "OneLaser VertiGo", content_ids: ["44483820224546"], quantity, value: 5599 * quantity, currency: "USD" });
    window.location.assign(`https://www.1laser.com/cart/44483820224546:${quantity}`);
  };

  return (
    <div className="vtg-page">
      <HomeNavigation />
      <nav className="vtg-journey" aria-label="Explore VertiGo page sections">{journey.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => trackEvent("section_navigation", { section: id })}>{label}</a>)}</nav>
      <main>
        <section className="vtg-hero" id="overview">
          <div className="vtg-hero__gallery">
            <div className="vtg-hero__main">
              <button type="button" className="vtg-hero__image-button" onClick={() => setLightboxOpen(true)} aria-label={`Open image ${galleryIndex + 1} of ${gallery.length}`}><ProductImage src={gallery[galleryIndex].src} alt={gallery[galleryIndex].alt} /></button>
              <span className="vtg-hero__counter">{String(galleryIndex + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
              <button type="button" className="vtg-gallery-arrow vtg-gallery-arrow--left" onClick={() => moveGallery(-1)} aria-label="Previous product image"><CaretLeft size={24} /></button>
              <button type="button" className="vtg-gallery-arrow vtg-gallery-arrow--right" onClick={() => moveGallery(1)} aria-label="Next product image"><CaretRight size={24} /></button>
            </div>
            <div className="vtg-thumbnails" aria-label="VertiGo product gallery">{gallery.map((item, index) => <button key={item.src} type="button" className={index === galleryIndex ? "is-active" : ""} onClick={() => setGalleryIndex(index)} aria-label={`Show product image ${index + 1}`}><img src={item.src} alt="" /></button>)}</div>
            <div className="vtg-gallery-actions"><a href={SALES_CALL_URL} target="_blank" rel="noreferrer" onClick={() => trackEvent("lead", { method: "book_call" })}>Book A Free Call <ArrowUpRight size={16} /></a><a href={BROCHURE_URL} target="_blank" rel="noreferrer" onClick={() => trackEvent("lead", { method: "download_brochure" })}>Download Brochure <DownloadSimple size={16} /></a></div>
            <div className="vtg-assurance-grid"><span><ShieldCheck size={22} /> Enclosed Class 1 design</span><span><Headset size={22} /> U.S.-based support</span><span><Package size={22} /> Integrated rotary</span><span><Gauge size={22} /> Air-cooled 38W RF</span></div>
          </div>
          <div className="vtg-purchase">
            <h1>OneLaser VertiGo™ Performance Rotary Laser for Drinkware (38W RF)</h1>
            <p className="vtg-purchase__dek">Purpose-built vertical engraving for tumblers, bottles, mugs and compatible cylindrical products.</p>
            <div className="vtg-purchase__status"><span>PREORDER</span><small>Confirm current delivery timing at checkout</small></div>
            <div className="vtg-price"><strong>$5,599</strong><span>USD</span><del>$5,999</del><em>Save $400</em></div>
            <a className="vtg-financing" href="https://www.1laser.com/pages/financing" target="_blank" rel="noreferrer">Explore current financing options <ArrowUpRight size={14} /></a>
            <div className="vtg-config-card is-selected"><div><span>LASER CONFIGURATION</span><h2>38W CO2 RF</h2><p>Fine detail, stable output and air-cooled operation for cylindrical personalization.</p></div><strong>Included</strong></div>
            <div className="vtg-key-benefits"><span><Check size={17} weight="bold" /> Integrated Grip2 rotary</span><span><Check size={17} weight="bold" /> 800 mm/s max speed</span><span><Check size={17} weight="bold" /> Automatic focus</span><span><Check size={17} weight="bold" /> 1,000 DPI max scanning precision</span></div>
            <div className="vtg-quantity-row"><span>Quantity</span><div><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus size={16} /></button><strong>{quantity}</strong><button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity"><Plus size={16} /></button></div></div>
            <button type="button" className="vtg-add-to-cart" onClick={addToCart}>Add to Cart <ArrowUpRight size={18} /></button>
            <a className="vtg-payment-link" href={PRODUCT_URL} target="_blank" rel="noreferrer">More payment options</a>
            <p className="vtg-decision-note">Integrated rotary · Limited 1-year warranty · Official OneLaser checkout</p>
          </div>
        </section>

        <section className="vtg-section vtg-opportunities" id="opportunities">
          <SectionHeading eyebrow="PRODUCT OPPORTUNITIES" title="One machine. A focused world of cylindrical products." body="Start with the category your business already knows, then expand with compatible objects and tested material settings." id="opportunities-title" />
          <div className="vtg-segmented" role="tablist" aria-label="Choose a product opportunity">{opportunityGroups.map((group) => <button key={group.id} type="button" role="tab" aria-selected={group.id === opportunityId} className={group.id === opportunityId ? "is-active" : ""} onClick={() => setOpportunityId(group.id)}>{group.label}</button>)}</div>
          <div className="vtg-opportunity-grid">{activeOpportunity.cards.map(([image, title, copy]) => <article key={title}><ProductImage src={asset(image)} alt={`${title} made for a VertiGo product workflow`} /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          <div className="vtg-opportunity-detail"><div><span>{activeOpportunity.label.toUpperCase()}</span><h3>{activeOpportunity.title}</h3></div><p>{activeOpportunity.copy}</p><small>Material, coating and settings determine final results. Run a sample before production.</small></div>
        </section>

        <section className="vtg-section vtg-materials" id="materials">
          <SectionHeading eyebrow="MATERIALS" title="Choose the surface. Keep the workflow upright." body="VertiGo is optimized for cylindrical form factors; the material still needs to be compatible with a CO2 RF laser." id="materials-title" />
          <div className="vtg-segmented" role="tablist" aria-label="Explore VertiGo materials">{materials.map((item) => <button key={item.id} type="button" role="tab" aria-selected={item.id === materialId} className={item.id === materialId ? "is-active" : ""} onClick={() => chooseMaterial(item.id)}>{item.label}</button>)}</div>
          <div className="vtg-material-stage">{activeMaterial.image ? <ProductImage src={asset(activeMaterial.image)} alt={`${activeMaterial.label} cylindrical product example`} /> : <MediaPlaceholder label={activeMaterial.placeholder} dark />}<div><span>{String(materials.findIndex((item) => item.id === materialId) + 1).padStart(2, "0")} / 04</span><h3>{activeMaterial.title}</h3><p>{activeMaterial.copy}</p><strong>{activeMaterial.note}</strong></div></div>
        </section>

        <section className="vtg-rf-band" id="why-rf"><div className="vtg-rf-band__inner"><div><span>38W RF ADVANTAGE</span><h2>Production-grade detail, packaged for drinkware.</h2><p>The air-cooled RF metal tube combines a small beam profile, stable modulation and long-life architecture with no external water chiller.</p><div className="vtg-metrics"><span><strong>1,000</strong>DPI</span><span><strong>≤0.01 mm</strong>Positioning</span><span><strong>Air</strong>Cooling</span></div></div><ProductImage src={asset("vertigo-rf-proof.jpg")} alt="Air-cooled RF laser source" /></div></section>

        <section className="vtg-section vtg-platform-guide" aria-labelledby="platform-title"><SectionHeading eyebrow="VERTIGO PLATFORM" title="The laser, rotary and focus system work as one." body="One configuration is optimized around a specific job: repeatable cylindrical engraving." id="platform-title" /><div className="vtg-platform-grid"><article><span>01</span><Sparkle size={32} /><h3>38W RF precision</h3><p>Fine linework, photo detail and stable output on compatible surfaces.</p></article><article><span>02</span><Target size={32} /><h3>Integrated Grip2 rotary</h3><p>Factory-aligned positioning without installing a separate rotary attachment.</p></article><article><span>03</span><Gauge size={32} /><h3>Automatic focus</h3><p>Repeatable focal setup across the published autofocus diameter range.</p></article></div></section>

        <section className="vtg-section vtg-comparison" aria-labelledby="comparison-title"><SectionHeading eyebrow="WORKFLOW COMPARISON" title="Vertical by design, not by accessory." body="VertiGo is built around cylindrical production rather than adapting a flat-bed workflow after the fact." id="comparison-title" /><ProductImage src={asset("vertigo-vertical-vs-horizontal.jpg")} alt="Vertical and horizontal cylindrical engraving setup comparison" className="vtg-comparison__image" /><div className="vtg-table-wrap"><table><thead><tr><th>Decision point</th><th>VertiGo vertical workflow</th><th>Traditional horizontal setup</th></tr></thead><tbody>{workflowComparison.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell} data-label={index === 0 ? "Decision point" : index === 1 ? "VertiGo" : "Traditional"}>{cell}</td>)}</tr>)}</tbody></table></div></section>

        <section className="vtg-features" id="features">
          <div className="vtg-features__intro"><ProductImage src={asset("vertigo-lifestyle.jpg")} alt="VertiGo in a customer-facing drinkware studio" /><SectionHeading eyebrow="SELLING POINTS" title="Built around cylindrical production." body="Five chapters connect the customer benefit to the feature and the published technical proof." id="features-title" /></div>
          <div className="vtg-feature-layout"><aside aria-label="VertiGo feature chapters">{chapters.map((chapter, index) => <button key={chapter.id} type="button" className={chapter.id === chapterId ? "is-active" : ""} onClick={() => { setChapterId(chapter.id); document.getElementById("feature-stage")?.scrollIntoView({ behavior: "smooth", block: "center" }); }}><span>{String(index + 1).padStart(2, "0")}</span>{chapter.label}</button>)}</aside><article className="vtg-feature-stage" id="feature-stage"><div className="vtg-feature-stage__media">{activeChapter.image ? <ProductImage src={asset(activeChapter.image)} alt={activeChapter.alt} /> : <MediaPlaceholder label={activeChapter.placeholder} dark={activeChapter.id === "reliability-safety"} />}</div><div className="vtg-feature-stage__copy"><span>{activeChapter.label.toUpperCase()}</span><h2>{activeChapter.title}</h2><p>{activeChapter.copy}</p><div className="vtg-feature-metrics">{activeChapter.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></article></div>
        </section>

        <section className="vtg-section vtg-software-pair" aria-label="VertiGo software"><article><ProductImage src={asset("vertigo-makerboost.jpg")} alt="MakerBoost design and production interface" /><div><span>MAKERBOOST</span><h2>Out of the box, into creation.</h2><p>MakerBoost supports device detection, parameter recommendations and design-to-production alignment for the VertiGo workflow.</p></div></article><article><MediaPlaceholder label="SOFTWARE MEDIA PENDING" /><div><span>SOFTWARE</span><h2>Your software. Your way.</h2><p>Use MakerBoost, LightBurn or RDWorks through USB, Ethernet or Wi-Fi according to each application's current requirements.</p></div></article></section>

        <section className="vtg-section vtg-specifications" id="specifications"><div className="vtg-specifications__heading"><SectionHeading eyebrow="SPECIFICATIONS" title="The published VertiGo platform, at a glance." body="Core specifications from the VertiGo release workbook. Confirm electrical configuration and final bundle contents before ordering." id="specifications-title" /><a href={BROCHURE_URL} target="_blank" rel="noreferrer">Download Brochure <ArrowUpRight size={16} /></a></div><div className="vtg-spec-grid">{specGroups.map(([group, rows]) => <section key={group}><h3>{group}</h3>{rows.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>)}</div></section>

        <section className="vtg-section vtg-decision-paths" aria-labelledby="decision-title"><SectionHeading eyebrow="CHOOSE YOUR NEXT STEP" title="See the machine, verify the fit, then decide." body="Keep the next action matched to where you are in the buying process." id="decision-title" /><div><a href={COMMUNITY_URL} target="_blank" rel="noreferrer"><Star size={28} /><span><strong>Join the VertiGo community</strong><small>See owner conversations and application ideas.</small></span><ArrowUpRight size={18} /></a><a href={SALES_CALL_URL} target="_blank" rel="noreferrer"><Headset size={28} /><span><strong>Talk with an engineer</strong><small>Review object sizes, coatings, power and workflow.</small></span><ArrowUpRight size={18} /></a><a href={BROCHURE_URL} target="_blank" rel="noreferrer"><DownloadSimple size={28} /><span><strong>Keep the brochure</strong><small>Share the current product overview and specifications.</small></span><ArrowUpRight size={18} /></a></div></section>

        <section className="vtg-evidence" aria-labelledby="evidence-title"><div className="vtg-evidence__image"><ProductImage src={asset("vertigo-support.jpg")} alt="OneLaser headquarters in Lake Forest, California" /></div><div><span>OFFICIAL PRODUCT EVIDENCE</span><h2 id="evidence-title">A new platform, with source-backed proof.</h2><p>The live product page, published workbook and current brochure provide the claims used here. Customer reviews are not invented or backfilled from other machines.</p><div className="vtg-evidence__links"><a href={PRODUCT_URL} target="_blank" rel="noreferrer">Official product page <ArrowUpRight size={15} /></a><a href={COMMUNITY_URL} target="_blank" rel="noreferrer">VertiGo community <ArrowUpRight size={15} /></a></div></div></section>

        <section className="vtg-support" id="support"><article><Check size={28} /><span>01</span><h3>Preorder clarity.</h3><p>VertiGo is currently labeled Preorder on the official product page. Confirm freight, processing and delivery timing before payment.</p></article><article><ShieldCheck size={28} /><span>02</span><h3>Limited 1-year warranty.</h3><p>The product workbook lists a limited one-year warranty. Review current coverage and exclusions with OneLaser.</p></article><article><Headset size={28} /><span>03</span><h3>U.S.-based support.</h3><p>Contact the OneLaser team for object-fit, software, electrical and production-workflow questions.</p><a href={SUPPORT_URL} target="_blank" rel="noreferrer">Contact support <ArrowUpRight size={14} /></a></article></section>

        <section className="vtg-section vtg-faq" id="faq"><SectionHeading eyebrow="BUYING QUESTIONS" title="Good answers before you commit." id="faq-title" /><div>{faqs.map(([question, answer], index) => <article key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span>{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</button>{openFaq === index && <p>{answer}</p>}</article>)}</div></section>
      </main>
      <HomeFooter />
      <button type="button" className={`vtg-top ${topVisible ? "is-visible" : ""}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}><CaretUp size={17} weight="bold" /><span>TOP</span></button>
      <div className="vtg-sticky-buy" aria-label="Sticky purchase bar"><div><strong>OneLaser VertiGo</strong><span>38W RF · Integrated rotary · Preorder</span></div><div><span><strong>${(5599 * quantity).toLocaleString()}</strong><small>USD</small></span><button type="button" onClick={addToCart}>Add to Cart</button></div></div>
      {lightboxOpen && <div className="vtg-lightbox" role="dialog" aria-modal="true" aria-label="VertiGo enlarged product gallery" onClick={() => setLightboxOpen(false)}><div onClick={(event) => event.stopPropagation()}><button type="button" className="vtg-lightbox__close" aria-label="Close gallery" onClick={() => setLightboxOpen(false)}><X size={23} /></button><ProductImage src={gallery[galleryIndex].src} alt={gallery[galleryIndex].alt} /><button type="button" className="vtg-lightbox__prev" aria-label="Previous image" onClick={() => moveGallery(-1)}><CaretLeft size={26} /></button><button type="button" className="vtg-lightbox__next" aria-label="Next image" onClick={() => moveGallery(1)}><CaretRight size={26} /></button><span>{galleryIndex + 1} / {gallery.length}</span></div></div>}
    </div>
  );
}
