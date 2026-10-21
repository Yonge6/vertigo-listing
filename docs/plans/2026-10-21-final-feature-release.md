# VertiGo feature completion — 2026-10-21

## Approved scope

Complete and publish the three previously unfinished chapters; preserve supplied copy as far as supported. Also remove the full-width opportunities artwork caption, make the two Vertical Design animations cover their existing 3:2 frames, and add two anonymous comparison columns to the RF speed artwork. No new responsive breakpoints or unrelated purchase changes.

## Image generation and provenance

All images were generated in the user's requested ChatGPT through Ego, downloaded with the native image viewer and visually inspected. Originals are preserved under ignored `references/incoming/complete-20261021/`. Support images are 1536 × 1024 quality-93 WebP, without resize/crop. Speed artwork is quality 95 at the same dimensions.

- Speed conversation: https://chatgpt.com/c/6ad8632d-3b04-83e8-81a3-1181a9f4059f
- Workflow/setup conversation: https://chatgpt.com/c/6ad863b6-b800-83e8-b82e-646ade9c7445
- Safety conversation: https://chatgpt.com/c/6ad86484-04f0-83e8-a862-a1a5e90977d5
- Two earlier hero images and their conversations: `2026-10-20-workflow-mobile-safety-redesign.md`.

Final prompt constraints (full sent prompts remain in those conversations): use supplied VertiGo2 machine and actual laser-head references; preserve narrow portrait screen, white enclosure/red trim, side-facing red head and upright rotary workpiece. Photoreal commercial studio/market imagery, no sparks/exposed beam, fake certification or open-door processing. Workflow: red-light point on coated cup, focus setup, then an attended compact workstation with upright cup. Safety: exterior enclosure detail without invented internal cutaway, actual-head maintenance with hex key/cloth, attended closed-door workstation with rear duct. Regenerate the setup photograph with upright cup; reject the horizontal-cup draft.

Speed prompt: follow supplied XRF black/red metallic layout, retain actual VertiGo white upright tumbler and moving vertical head, large Up to 800 mm/s / 3G Acceleration / Faster Response. Three-column table: ONELASER VERTIGO, Other CO₂ Laser, Other Diode Laser. Rows: 800 / 600 / 400 mm/s (bitmap); 38W CO₂ RF / 55W CO₂ Glass / 10W/20W Diode; Built-in Grip2 / Add-on rotary / Add-on rotary. No competitor brand, model or accessory name. Embedded notes: comparison examples, specifications vary by machine; published maximum speeds, not equal-job completion times. Do not invent comparative acceleration or response latency.

| Production asset | Role |
| --- | --- |
| vertigo-rf-speed-comparison-20261021.webp | Final anonymous speed comparison |
| vertigo-workflow-positioning-20261021.webp | Red-light setup support |
| vertigo-workflow-autofocus-20261021.webp | Focus setup support |
| vertigo-setup-workstation-20261021.webp | Upright cup / attended compact workstation |
| vertigo-safety-enclosure-20261021.webp | Electronics isolation exterior context |
| vertigo-lens-maintenance-20261021.webp | Maintenance context, not tool-free claim |
| vertigo-safety-operation-20261021.webp | Closed-door attended operation |

## Comparison evidence

The anonymous columns are specific published examples, not claims about every competing machine. Internal evidence names models only to document provenance; public artwork follows the user's no-naming instruction.

- https://support.xtool.com/article/86 — P2 FAQ, 55W CO₂ glass source and 600 mm/s maximum.
- https://support.xtool.com/article/1584 — M1 Ultra FAQ, 10W/20W diode and 400 mm/s bitmap.
- https://support.xtool.com/article/1504 — M1 Ultra add-on rotary setup.
- https://www.xtool.com/products/xtool-p2-55w-co2-laser-cutter — P2 add-on rotary support.
- VertiGo 38W RF / 800 mm/s / 3G / integrated Grip2 come from supplied workbook and existing verified page facts.

## Validation

`npm run verify` passed (Vite production build plus staged/unstaged whitespace checks). Local browser checks at 1526 px desktop and 390 px mobile: all revised chapter images load with real natural dimensions; no horizontal overflow; existing compact Safety mobile layout retained. Vertical Design animations use scoped centered cover, with visible top/bottom bars removed. Pause switches to a still poster; reduced-motion defaults to posters. Full-width artwork caption is absent. RF comparison loads at native dimensions and remains fully contained on desktop/mobile. No site Runtime exceptions observed; extension-origin warnings are excluded. Evidence screenshots remain ignored in the originals directory. Build and public release are separate gates; deployment must be confirmed with fresh live readback, not merely a push.
