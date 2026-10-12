# VertiGo listing design QA

## Source and implementation

- Primary source: `/var/folders/vd/kws8fm5509l6b9hnywhd8yfr0000gn/T/codex-clipboard-4a0ba3d0-a4a3-401c-8f5b-36117e8abf3a.png` (1700 × 2444)
- Workflow source: `/var/folders/vd/kws8fm5509l6b9hnywhd8yfr0000gn/T/codex-clipboard-872d0c55-2330-4c80-9c5f-b3446db7e2a6.png` (1710 × 2418)
- PDF source: `/Users/yongyuan/Downloads/web/OneLaser_Product_Brochure_VertiGo_EN_v1.pdf`
- Desktop implementation: `qa/vertigo-desktop-full.png` (1440 × 11860)
- Mobile implementation: `qa/vertigo-mobile-full.png` (390 × 15443)
- Same-canvas comparison: `qa/vertigo-reference-comparison.png` (1440 × 1000)
- Focused workflow evidence: `qa/vertigo-desktop-comparison-section.png` (1440 × 1100)

## Visual comparison

- Brand fidelity: passed. OneLaser white/black/red system, Certia hierarchy, restrained red accents, white and `#F5F5F7` surfaces match the approved system.
- Product fidelity: passed. The isolated official VertiGo render anchors the purchase hero; the supplied lifestyle image appears in the gallery and story sequence without altering the XRF/Hydra listing anatomy.
- Information hierarchy: passed. Product title, preorder state, current price, configuration, decision proof and checkout action remain readable in the first desktop view.
- Workflow story: passed. The supplied vertical-versus-horizontal artwork is used as the central comparison proof with a source-backed table beneath it.
- Responsive behavior: passed. Desktop 1440 × 1100 and mobile 390 × 844 show no horizontal overflow, no broken images, a 32 px H1 and a 12 px minimum visible text size.
- Placeholder treatment: passed by brief. Missing motion, safety, software and wood-cylinder media use quiet neutral color blocks and do not borrow unrelated XRF or Hydra imagery.

## Interaction and accessibility evidence

- Gallery next control changed `01 / 06` to `02 / 06`.
- Opportunity, material and feature tabs changed their associated content.
- FAQ disclosure toggled `aria-expanded` from `false` to `true`.
- Product lightbox opened and closed successfully.
- Browser console returned no warnings or errors.
- Images completed with non-zero natural dimensions; broken image count was zero.

## Findings

- P0: none.
- P1: none.
- P2: none.
- P3: neutral media placeholders remain intentionally visible until approved VertiGo assets are supplied.

## Final result

passed
