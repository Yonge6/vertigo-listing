# Unique opportunity photography

User requested replacement of repeated Product Opportunities artwork, with Ego-driven ChatGPT generation and high-end commercial photography.

## Scope and decision

The data audit found two shared image pairs: event-batch / short-run and corporate-batch / logo-program. Preserve the recently generated corporate-batch image, and produce three independent replacements for event-batch, logo-program and short-run. This removes all cross-card image reuse across the 12 opportunity cards without replacing unrelated imagery, layouts, economics or claims.

## Prompt direction

Three separate landscape 16:9 commercial photographs, never a collage. Physically plausible coated stainless drinkware, fine silver laser-revealed engraving, natural materials, controlled soft lighting, refined 85 mm product/lifestyle photography, 15% safe margins, no lettering, watermarks, machines, sparks or fabricated performance evidence.

1. Live Event Batches: luxury weekend design-market gift stall; four mist-blue, cream and sage tumblers being packed into kraft gift bags; natural hands tying fine cotton cord; linen canopy and soft crowd bokeh. Differentiate from old pastel ten-cup flower-wall artwork and the existing single-cup handoff image.
2. Recurring Logo Programs: recurring-order quality-control/packing bench; three navy coated water bottles with matching small silver abstract geometric emblems; one bottle inside an open pale-gray gift box, two standing beside it; 45-degree elevated view, paper and linen details. No mountain motif or black-tumbler pyramid.
3. Short-Run Collections: designer seasonal editorial still-life; four short handleless coated stainless cups in terracotta, olive, cream and mist-blue, coordinated but distinct botanical engraving; low matte cream plinths and folded cotton tissue, diagonal arrangement. Not a regular batch grid.

## Generation and acceptance

Use the existing ChatGPT photography conversation through Ego. Download separate generated originals to ignored `references/incoming/unique-opportunities-20261019/`, inspect each, then encode approved outputs as WebP without altering content. Confirm 12 unique card asset paths and distinct file hashes, build, desktop/mobile QA, deploy and public readback.

Completed generation: three independent 1672 × 941 PNG originals from ChatGPT conversation `https://chatgpt.com/c/6ad5d4c3-2df0-83e8-97a8-ea7d5c882aca`, visually inspected. Production copies are `public/assets/vertigo-{event-batch,logo-program,short-run}-editorial-v4.webp`, quality 90 without resizing or content edits. Original assets remain preserved. No economics, copy, layout or breakpoint changes.

Local validation: `npm run verify` passed. Data audit found 12 cards, 12 unique image paths and 12 distinct SHA-256 hashes. Desktop 1573 px and mobile 390 px have no document overflow; all three new images load with real 1672 × 941 natural dimensions. Desktop Events/Batch and mobile Batch screenshots are saved beside the originals.
