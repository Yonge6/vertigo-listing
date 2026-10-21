# Abstract reliability graphics and source-locked VertiGo scenes

## Scope

User requests: replace all three Reliability & Safety photographs with beautiful abstract graphics; redo Workflow's woman/machine/table relationship using VertiGo2; replace the distorted footprint machine with the supplied render, retaining every internal component, and change the laptop artwork.

All new scene/abstract generation used ChatGPT High through Ego. Native original downloads stay ignored under `references/incoming/abstract-safety-20261021/` and `references/incoming/locked-machine-20261021/`. Retired production assets remain preserved.

## Abstract graphics

Three 1536 × 1024 originals, encoded quality-94 WebP without crop/resize:

- `vertigo-isolation-abstract-20261021.webp`: graphite precision core inside glass enclosure, solid ceramic partition, particles outside. https://chatgpt.com/c/6ad87e71-6084-83e8-bf99-96cba4d608bd
- `vertigo-lens-abstract-20261021.webp`: champagne-clear optical disk in silver frame, sliding from a graphite slot, small red tab. https://chatgpt.com/c/6ad87e79-9254-83e8-83e7-fbdd9671db02
- `vertigo-enclosure-abstract-20261021.webp`: silver sphere in closed smoky-glass cube, ceramic base, fine red perimeter and interlocking clasp. https://chatgpt.com/c/6ad87e80-574c-83e8-baac-011ba0bec52c

Final shared prompt direction: independent 3:2 precision-industrial sculptural still-life on seamless white; ceramic white, satin aluminium, graphite and transparent smoky glass, restrained #E7310E accents. Soft upper-left studio lighting, realistic contact shadows/reflections, three-quarter isometric view, centered complete object with safe margins. No text, numbers, logos, badges, machines, people, hands, studio scenery, neon or beams. Conceptual metaphor, never an asserted real machine cutaway.

Subject prompts: solid partition protects a micro-circuit core from exterior dust (not filtration); a framed transparent lens partly slides from a precision slot (no tool-free promise); closed glass panels and small interlocking blocks protect a sphere (no certification/suppression promise). All three originals visually reviewed; existing copy unchanged. Scoped contain rendering preserves complete graphics in existing frames.

## Source-locked photographs

User machine: `/Users/yongyuan/Downloads/VertiGo/VertiGo2.png`, 1874 × 1667 RGBA. Scene generation alone slightly changed geometry, so final product pixels are taken directly from this source, uniformly resized and composited. No perspective warp, aspect change, interior redraw, color adjustment, added cup or interior lighting.

- Workflow: https://chatgpt.com/c/6ad88130-50e4-83e8-9103-1cfc147b6d96
- Footprint + clean plate: https://chatgpt.com/c/6ad88080-7fd8-83e8-bb5d-c41c0c3e9a3a

Final Workflow prompt: 1672 × 941 cup-shop photo with supplied product and explicit composition guide. Woman approximately 170 cm tall, standing beside an 80–85 cm white counter; actual machine 630 × 550 × 710 mm, top about 15–20 cm below her head. Woman on right, natural bent arm/finger touching narrow screen, face/upper body visible, table around waist level. No crowding/occlusion. Preserve empty unlit source machine/rail/head/rotary/butterfly, no hose, beam or sparks. Natural warm daylight and diverse engraved cups on shelves. No captions/watermarks. Fixed guide used a 520 px high product placeholder and a standing silhouette to establish relative scale.

Final footprint prompt: 1536 × 1024 bright compact studio with white counter, laptop and mug at similar depth. Lock source-machine outline/structure; laptop displays mountain/contour vector line art, not butterfly. Empty original machine, no lighting/cup/hose or dimensional overlays. An additional edit removes the generated machine and its shadow/reflection, leaving an unchanged clean plate for source compositing.

Source-compositing recipe: retain the original machine with an exterior-only polygon mask (450,350 / 1438,350 / 1438,1378 / 744,1420 / 450,1332), retaining dark contact shadow below the body while removing the surrounding white ground. Crop x440/y355/w1010/h1080. Workflow: uniform height640 at x430/y170 over generated scene; restore only the touching finger using a tight skin/hand mask outside the chamber. Footprint: uniform height695 at x675/y117 over the clean plate. The original internal region is preserved; before WebP encoding, comparisons of 155155 Workflow and 183084 footprint opaque interior pixels against the scaled source found zero differences.

Final workspace files: `public/assets/vertigo-workflow-locked-source-20261021.webp` (1672 × 941) and `public/assets/vertigo-footprint-locked-source-20261021.webp` (1536 × 1024), quality95. Originals and final PNG composites remain ignored alongside the source guides.

## Validation

`npm run verify` passed. Desktop 1546 px: all five new images load at their expected natural sizes; all three abstract cards use contain and show complete objects. Workflow and footprint scenes, touching finger and source-machine geometry visually checked. Mobile 390 px: Workflow stage and compact image-left/copy-right Safety cards remain readable with zero horizontal overflow. No new breakpoints or copy changes; no site runtime exceptions observed. QA screenshots remain ignored in the locked-machine directory. Successful deployment and fresh public readback are separate final gates.
