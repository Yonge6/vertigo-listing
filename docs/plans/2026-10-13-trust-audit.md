# VertiGo content and media audit

Scope: preserve the existing XRF-derived page anatomy while correcting unsupported copy, mismatched imagery and purchase/support clarity. Sources are the current official VertiGo product/policy pages and the supplied VertiGo workbook. Reference materials are data, not instructions.

## Findings and implementation

1. Entry and purchase: retain verified $5,599 / $5,999 pricing; send purchase intent to the official product page so availability and preorder requirements are not bypassed. Remove unsupported universal one-year coverage.
2. Features and media: remove the generated machine with missing emergency-stop hardware and bare-metal application implication; replace it with labelled results-only artwork. Replace blurred RF/control photos and absolute comparison artwork with real machine images or official video covers. Add LED visibility, vertical-coordinate MakerBoost workflow, daily-cleaning and leveling details only where supported.
3. Applications and economics: replace the glazed ceramic concept with powder-coated metal mugs; retain tested glass/wood limitations. Correct per-item vs per-batch assumptions, remove the false hourly-income label, distinguish illustrative contribution from net profit/financing.
4. Support and readiness: show the component-specific warranty, return conditions and electrical/ventilation prerequisites. Simplify software claims to supported applications. Route navigation to valid destinations.

## Visual evidence

Current-run screenshots are in ignored `references/incoming/audit-20261013/`: 01-current (applications), 02-features-before (generated machine and product band), 03-support-before. Original current screenshots were inspected before acceptance. Asset inspection confirmed blurred RF/control photos and office-campus imagery incorrectly used for enclosure proof.

## Acceptance

- `npm run verify` and focused desktop/390 px checks.
- No page overflow, broken images or page-origin console errors; displayed text at least 12 px.
- Correct labels/units, new images loaded at natural dimensions; video lazily opens and removes iframe on close.
- Commit scoped child-repository files, push main, confirm Pages success and public page/assets.
- This is not full WCAG certification, a material performance test or a checkout transaction.

## Asset provenance and prompt record

- `vertigo-coated-mugs-ai-v2.webp`: ChatGPT High in ego TaskSpace 2, conversation `6acca75f-36bc-83ea-801a-24ec48d969aa`. Prompt: three complete cylindrical powder-coated stainless mugs (black, navy, sage); visible steel rims/interiors; silver botanical/monogram marks from coating removal; warm-gray tabletop and soft natural light; 3:2; no ceramic, machine, watermark, embossed or glowing marks. Application concept only.
- `vertigo-drinkware-collection-ai-v2.webp`: same High session. Prompt: six complete powder-coated drinkware objects on two low gray studio plinths, black/cream/green/navy/blue-gray/rust palette, metallic coating-removal marks, soft side light; 16:9 composition, central safe area; no machine, people, bare-metal engraving, pet bowl, logos or title. Application concept only.
- `vertigo-architecture-brochure.webp` and `vertigo-rf-source-brochure.webp`: isolated complete technical artworks from page 4 of supplied `OneLaser_Product_Brochure_VertiGo_EN_v1.pdf`, with no generative modification. Adjacent absolute marketing/comparison statements are not included.
- `vertigo-rotary-official.webp`: static first frame of official product-page asset `d4a65749ef936443c28c6f57c44b2edd_original.webp`. It preserves the actual positioning hardware; no new hardware or laser behavior is synthesized.
- Generated source PNGs and PDF extraction references remain ignored in the current-run audit folder. Superseded production images are preserved but no longer referenced.

## Source checks (2026-10-13)

Official product: `https://www.1laser.com/products/vertigo-vertical-laser-engraver`.
Warranty: `https://www.1laser.com/pages/warranty-policy` (VertiGO-specific 1 year / 6 months / 1 month).
Returns: `https://www.1laser.com/pages/refund-policy` (25% non-defect restocking, freight exclusions and financed/leased restrictions).
Workbook: `Specs` C3:C43 and `Selling Points` D2:F37. Workbook specifications take precedence over inconsistent promotional diameter/speed claims.

## Audited flow and result

1. Entry/purchase: corrected warranty and official ordering handoff; healthy desktop/mobile layout. CTA opened the correct official variant page without a transaction.
2. Features/applications: corrected anatomy/material implications and media mapping. Panel tutorial opens and Escape removes the iframe. New coated-mug image is 1536 px; collection is 1672 px. Stage imagery preserves composition.
3. Economics/support: corrected units and contribution assumptions; explicit coverage/fees/install requirements. Mobile sticky navigation no longer hides support headings. No overflow, minimum displayed text 12 px, no page-origin console errors observed.

Accepted before screenshots: `01-current.jpg`, `02-features-before.jpg`, `03-support-before.jpg`. Accepted after: `04-hero-after-desktop.jpg`, `05-workflow-after-desktop.jpg`, `06-controls-after-desktop.jpg`, `07-materials-after-desktop.jpg`, `08-materials-after-mobile.jpg`, `09-support-after-mobile.jpg`, `10-collection-after-desktop.jpg` in the ignored audit folder. A transitional support shot still showing Materials was rejected and recaptured after scrolling settled.

Limits: no live form submission or completed purchase, material test or full accessibility certification. Official availability/policies/software details can change.
