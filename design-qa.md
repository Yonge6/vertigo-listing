# VertiGo listing design QA

## Reference and structure

- Canonical UI reference: `https://yonge6.github.io/xrf-gen2-listing/`
- Canonical implementation source: the current XRF listing component tree plus the verified Hydra Gen2 adaptation.
- VertiGo product sources: official product page, `(VertiGo)卖点参数发布汇总.xlsx`, supplied brochure and supplied screenshots.
- XRF desktop reference: `qa/audit-xrf-desktop-top.png` (1440 × 1100).
- Previous VertiGo desktop: `qa/audit-vertigo-desktop-top.png` (1440 × 1100).
- Aligned VertiGo desktop: `qa/aligned-vertigo-desktop.png` (1440 × 1100).
- Aligned VertiGo mobile: `qa/aligned-vertigo-mobile.png` (390 × 844).

## Structural comparison

- Passed: current XRF announcement strip and click-activated global header are reused.
- Passed: Hero uses the XRF 660 × 660 media stage, counter, subdued arrows, independent thumbnail rail, video slot and 2 × 2 assurance cards.
- Passed: purchase panel follows the same title, rating, proof bullets, price/MSRP, financing, source, package, configuration total, quantity and action hierarchy.
- Passed: journey navigation, RF tabs, platform guide, scroll-linked feature chapters, MakerBoost, Software, Product Opportunities, Materials, Specifications, comparison, proof rail, decision paths, support, FAQ, footer and sticky purchase bar use the canonical component tree.
- Passed: VertiGo remains a single 38W RF package; Hydra/XRF variants, accessories, videos and reviews are not carried over.

## Responsive and interaction evidence

- 1440 px: `innerWidth=1440`, `scrollWidth=1440`, no broken images and no warning/error console entries.
- 390 px: `innerWidth=390`, `scrollWidth=390`, minimum visible text size 12 px, no broken images and no warning/error console entries.
- Integrated Rotary tab changed to `aria-selected=true`.
- Laser & Performance specification group changed to `aria-expanded=true`.
- Water-chiller FAQ changed to `aria-expanded=true`.
- Gallery, sticky purchase action, package state and mobile menu retain the XRF behavior.

## Content boundaries

- Published specification uses 1,000 DPI; the supplied screenshot's conflicting 2,000 DPI label is not used as a specification.
- Product film, official setup/control tutorials and creator proof use verified VertiGo-specific YouTube videos; unrelated machine footage is not substituted.
- High-mode ChatGPT imagery fills only two workbook-led gaps: the product-range studio scene and the RF engraving-detail proof. Real supplied images remain in every section that depicts VertiGo internals, controls or installation details.
- Commercial examples remain labelled illustrative with a no-guarantee disclaimer.
- Bare metal is not presented as direct CO₂ RF deep engraving.

## Findings

- P0: none.
- P1: none.
- P2: none.
- P3: add more named VertiGo owner feedback only when independently verifiable; the current rail clearly labels review, owner unboxing and application demo.

## Final result

passed
