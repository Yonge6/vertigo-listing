# RF alignment and photography refresh

Direct user feedback on 2026-10-19:

- Match Why RF image dimensions and rendering to XRF Gen2. Same viewport measurement: 1573 px desktop media 876.49 × 620 px; 390 px mobile media 354 × 236 px. Shared template already owns those dimensions; remove the VertiGo-only `contain` override to inherit XRF's centered `cover` rendering.
- Product cards follow the XRF three-line economics presentation. Keep actual illustrative prices and assumed contribution margins, not the reference screenshot's $39 / 72%. User explicitly chose a nonnumeric hourly-output placeholder based on orders and labor time. Do not invent throughput or relabel contribution as measured net profit.
- Use Ego to ask ChatGPT for premium commercial photography, not another generation service. Replace four Materials images and three specifically selected Product Opportunities images: corporate batch, countertop personalization, mixed cylindrical range. Existing images stay until final generated originals are downloaded and inspected.

## Photography direction

Photorealistic luxury product still-life, warm-gray limestone surface and seamless warm-gray studio backdrop, large softbox side light plus controlled rim light, tactile matte finishes, physically plausible metal/glass/wood, 85 mm commercial lens, restrained sculptural grouping, complete products with safe margins. No text, logos, watermarks, collages, sparks or invented machines. All images are application concepts, not tested material/performance evidence.

Subjects, one independent landscape image per slot:

1. Coated Metal: graphite powder-coated tumbler plus forest-green bottle; finely revealed silver botanical line engraving.
2. Glass: two clear cylindrical drinking glasses, restrained frosted botanical engraving, convincing refraction and edge light.
3. Coated Mugs: graphite and muted clay powder-coated stainless handled camp mugs; silver line engraving; no unsupported bare-ceramic depiction.
4. Wood Cylinders: two complete natural maple rolling pins with subtle engraved botanical flourishes, authentic wood grain, no lettering.
5. Corporate batch: orderly gift-ready graphite coated tumbler collection, consistent minimalist geometric engraving, no corporate wordmarks.
6. Countertop personalization: boutique counter with a customer receiving a finished personalized coated tumbler from a craftsperson; elegant tabletop details, no machine depicted or invented hardware.
7. Mixed range: coherent assortment of coated tumbler, bottle, handled stainless mug, clear glass and maple cylinder; varied heights on warm-gray plinths.

## Status

Seven independent 1536 × 1024 PNG originals generated through Ego in ChatGPT conversation `https://chatgpt.com/c/6ad5d4c3-2df0-83e8-97a8-ea7d5c882aca`, downloaded and visually inspected. Initial account/browser-check error resolved with the page's reload action. Originals remain in ignored `references/incoming/rf-frame-alignment-20261019/`. Production WebP files use quality 90, with no resize or content edits:

- `vertigo-material-{metal,glass,mugs,wood}-editorial-v3.webp`
- `vertigo-{corporate-batch,studio-service,mixed-range}-editorial-v3.webp`

The recurring-logo card shares the corporate-batch asset, so both instances now use the same new source. No machine was generated or substituted for actual VertiGo hardware. Existing unrelated imagery is preserved.

`npm run verify` passed. Desktop 1573 px and mobile 390 px had no document overflow; all seven new assets decoded at 1536 × 1024. The existing <=1000 px stacked Materials breakpoint now preserves native 3:2 media rather than cropping the new bottle tops to 16:9. No other stage or desktop breakpoint was changed. RF rendering remains centered `cover`, matching XRF. Ignored desktop/mobile screenshots are saved beside the originals.
