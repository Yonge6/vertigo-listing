# RF motion, precision and overlay cleanup — 2026-10-20

## Direct requests

1. Remove all bottom-left image-overlay provenance badges, not image content or ordinary explanatory prose.
2. Redraw Faster Response using the supplied actual VertiGo side-firing laser-head photograph and VertiGo's own 38W CO₂ RF / up to 800 mm/s / 3G specifications.
3. Replace the wood-engraving sample in the precision illustration with a coated insulated vessel and emphasize fine engraving.
4. Hide the entire Speed & Motion chapter and its navigation entry.
5. Recompose Smart Workflow as a cleaner upright-versus-add-on rotary comparison using the supplied materials.
6. Expand Product Range's main image into a richer premium commercial product collection.
7. Redraw its lower visibility and footprint cards to express their specific copy, using the user's `VertiGo2.png` reference.
8. Remove the redundant standalone illustrative-application caption; replace published overall height with overall height.

## Image production

Generated through Ego/ChatGPT in https://chatgpt.com/c/6ad5d4c3-2df0-83e8-97a8-ea7d5c882aca . User attachments were uploaded as references, not treated as instructions.

- Motion prompt: landscape 3:2 dark premium industrial visualization; actual red/black OneLaser head on vertical rails at right, horizontal beam aimed left onto the middle sidewall of an upright coated tumbler held by a vertical-axis rotary. Restrained red optical-path illustration, no downward beam, no XRF head, no competitor comparison or response-time numbers. Exact image copy: VertiGo / 38W CO₂ RF / Up to 800 mm/s / 3G acceleration. Safe margins for the existing RF crop. First generation incorrectly laid the cup horizontally and aimed at its rim; rejected. A targeted revision explicitly removed the horizontal chuck and required the cup lid above/base below and a vertical rotary axis.
- Precision prompt: landscape 16:9, preserve the supplied black-background RF exploded concept on the left; replace wood with a navy powder-coated insulated vessel, fine silver golden-retriever portrait and botanical frame; magnify the same eye/fur in a connected circular macro inset. No text, parameters, watermarks or badges. This is a technology/engraving concept, not an actual component photograph or performance test.
- Original PNGs and QA are ignored under `references/incoming/rf-speed-precision-20261020/`. Final assets are encoded as WebP without resizing; old production assets remain preserved.
- Smart Workflow: white/pale-gray two-panel 16:9 concept, upright cup/vertical rotary with horizontal side-firing head versus horizontal cup/add-on rotary with top-down head. Exact large image copy: Upright rotary / Add-on rotary / VS. No absolute comparative promises. First response did not yield downloadable pixels after reload; retried this image alone successfully as `workflow-retry-original.png` (1672 × 941).
- Range/window/footprint batch initially returned four range variants instead of three distinct scenes. Selected `batch-3.png` (1672 × 941) for the rich product collection, then generated the other scenes individually; did not pass off duplicates as requested deliverables. Range prompt emphasized full products, fine compatible engraving, warm limestone display plinths, professional soft light and no brand/name labels.
- Window: `window-original.png` (1536 × 1024), faithful supplied machine exterior on a premium studio worktop, observation door closed, transparent reflective glass, LED-lit upright cup and rotary/head visible; no exposed laser, smoke or people.
- Footprint: `footprint-original.png` (1536 × 1024), faithful full machine in a neutral premium product studio with three correctly directed guides: 630 mm front width, 550 mm side depth, 710 mm vertical height. No toy scaling or portability promise.
- All six final files use quality-93 WebP: `vertigo-rf-horizontal-motion-20261020.webp`, `vertigo-rf-precision-tumbler-20261020.webp`, `vertigo-workflow-upright-comparison-20261020.webp`, `vertigo-product-range-editorial-20261020.webp`, `vertigo-window-visibility-20261020.webp`, `vertigo-footprint-editorial-20261020.webp` under `public/assets/`.

## Implementation

- Deleted all four shared badge render sites, three obsolete RF badge strings and the badge CSS rule. Kept prose/alt-text qualifications.
- New image paths and corresponding alt/copy replace XRF attribution in Faster Response and precision only. No prices or technical specifications changed.
- Motion chapter remains recoverable in source with `hidden: true`; filtering once before render also removes desktop/mobile links and keeps scroll indices aligned. No breakpoint changes.
- Speed RF image uses contain on black in the same RF frame to preserve its complete embedded specifications at narrower desktop sizes. All other new chapter/card images fit existing 16:9 or 3:2 frames. Support cards may provide explicit descriptive alt text; no global image labels added.

## Verification

- `npm run verify` passed after all six final assets were wired.
- Desktop 1451 × 1212 and mobile 390 × 844 load every new image with real natural dimensions. Mobile RF 354 × 236, chapter stages 354 × 199, support images 352 × 234; desktop chapter stages 1174 × 660 and support images 575 × 383.
- No document overflow, zero overlay badges, no `#capability-motion` section; navigation contains RF Precision / Smart Workflow / Product Range / Reliability & Safety / Software. Mobile direct jumps land near 180 px with the correct active item for Workflow, Product Range and Software.
- Redundant Product Range application caption absent; overall-height sentence has no published qualifier. No captured Runtime exceptions/Log errors during the desktop/mobile checks. Visual screenshots are ignored under the originals directory above.
