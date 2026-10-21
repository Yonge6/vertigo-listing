# Mobile & Compact image revisions — 2026-10-21

## Scope and production files

User requested three replacement photographs via Ego's ChatGPT plus natural line wrapping of the main story paragraph. Preserve existing page copy, frame ratios, responsive layout and machine specifications.

- `vertigo-market-wide-user-20261021.webp`: 1672 × 941, wider market scene, idle empty/unlit machine, no rear tube, many varied finely engraved cups. VertiGo5 is the machine reference.
- `vertigo-footprint-reference-user-20261021.webp`: 1536 × 1024, laptop and ordinary mug provide scale alongside 630 / 550 / 710 mm guides. Machine is empty and unlit, based on VertiGo2.
- `vertigo-setup-clamped-user-20261021.webp`: 1536 × 1024, the existing studio/operator composition revised with no rear hose and a larger green cup seated between the two small red rotary posts. Chamber lighting retained for clear clamping visibility.

All generated originals downloaded through ChatGPT's native image viewer, visually inspected and encoded as quality-94 WebP without resizing/cropping. Originals remain ignored in `references/incoming/market-wide-20261021/`. Retired assets remain on disk.

## Conversations and final prompts

Market and footprint: https://chatgpt.com/c/6ad874e2-26a4-83e8-b73d-c614f8d742d2

Setup: https://chatgpt.com/c/6ad87660-8c0c-83e8-9066-e06155fbfd62

Full sent prompts are preserved in these conversations. Final prompt specifications:

1. Market, 16:9: supplied VertiGo5 as sole anatomy reference. Wider natural weekend handmade market, white canopy/tree shade/neighboring stalls. Seller showing cup to customer. Complete machine about 25–30% frame width on sturdy wood/metal counter; real 630 × 550 × 710 mm proportions relative to adults. Closed dark window, empty chamber, working lights off, no luminous butterfly, dark/standby screen, no visible pipes/hoses. At least 16 varied tumblers, handled mugs, travel cups, children's bottles and sports bottles on tiered wood displays; distinct fine laser-etched botanical, constellation, terrain, ocean, mandala, animal and monogram designs rather than stickers/printing. Natural commercial photography, no added marketing copy, beams, smoke or sparks.
2. Footprint, 3:2: newly uploaded VertiGo2 as sole machine reference; preserve anatomy and proportions. Complete idle machine on a sturdy compact studio wood bench with an ordinary 14-inch laptop (about 32 cm body width) and 10 cm mug at similar depth for relatable scale. White/light-grey/wood, natural light, three-quarter left view. Empty chamber, no internal lighting/glow/cup/hose. Fine grey dimension guides labeled exactly 630 mm width, 550 mm depth, 710 mm height; no other added copy.
3. Setup, 3:2: input 1 existing workstation photograph as edit target, input 2 VertiGo2 anatomy, input 3 actual orange-cup/rotary poster as clamping reference. Retain bright studio, woman operator and complete machine. Remove rear hose completely. Enlarge green cup diameter until lower outer walls contact both small red vertical posts symmetrically; cup seated on rotary base, no gaps/floating/tilting, do not enlarge the posts or put them through the cup. Preserve 630 × 550 × 710 mm machine proportions, narrow screen and identifiers. Closed door, soft internal light allowed, side-facing head on vertical rail, no beams/sparks/smoke/text.

## Layout

The main story paragraph inherited desktop `white-space: nowrap`. Scoped override on `#capability-expansion .capability-scroll__stories .capability-scroll__story-copy > p` restores normal wrapping and overflow-wrap at existing widths. No new breakpoint or global typography change. At 1606 px preview it occupies two complete lines within the container.

## Validation

`npm run verify` passed. Local desktop 1606 px and mobile 390 px: all three replacement images have loaded natural dimensions (1672 × 941 / 1536 × 1024 / 1536 × 1024); no horizontal overflow. Main paragraph is normal wrapping, with equal client/scroll widths at both sizes (1243 px desktop, 350 px mobile). Saved market/support screenshots visually checked; no machine/subject clipping in existing frames. No site runtime exceptions observed. Deployment and fresh public readback remain separate release gates.
