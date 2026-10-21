# Supplied scene replacements and front-desk footprint artwork

## Approved sources

- Smart Workflow primary: `/Users/yongyuan/Downloads/温馨手作店里的激光雕刻展示.png`, 3000 × 1688. Encoded quality-95 WebP without crop/resize as `vertigo-workflow-supplied-20261021.webp`. The directly approved illuminated scene supersedes the previous source-composited empty-chamber artwork for this image only.
- Mobile & Compact right support: `/Users/yongyuan/Downloads/vertigo-setup-clamped-user-20261021.webp`, 1536 × 1024. Copied byte-for-byte as `vertigo-setup-supplied-20261021.webp`; SHA-256 `37b206ec155365af8023a2a6487c91235a115da9012378c47b3ffd774c122d61`. Includes the supplied screen UI and green tumbler between the red posts.
- Market primary was already published in `ffca026` from the approved `露天市集里的创意雕刻摊位.png`; it remains unchanged in this follow-up.

## New footprint image

Generated with ChatGPT High through Ego after the user completed browser verification. Conversation: https://chatgpt.com/c/6ad88bb3-8c08-83e8-af0a-ada6f0f4cb01

Reference: `/Users/yongyuan/Downloads/VertiGo/VertiGo5.png`. Final prompt requests a photorealistic 3:2 cup-customization shop front desk, sturdy pale wood counter, complete VertiGo5 machine with original proportions, exterior features and internal structure preserved; empty unlit chamber and no rear hose. A normal 14-inch laptop with botanical leaf line art and a mug provide scale. Shelves display engraved drinkware; natural daylight, no people, watermarks or headline. Thin engineering dimension lines outside the product label the front width `630 mm`, right-side depth `550 mm` and vertical height `710 mm`.

Native output: 1536 × 1024. Visually inspected for product reference match, original-style dark chamber, no cup/light/hose, dimension values and directions, laptop/mug reference and full composition. Quality-95 WebP without crop/resize: `vertigo-footprint-frontdesk-20261021.webp`. This is generated reference-based artwork, not a claim of byte-identical source compositing or a real installation photograph.

Original and QA screenshots remain ignored under `references/incoming/footprint-frontdesk-20261021/` and `references/incoming/supplied-workflow-setup-20261021/`. Retired assets are preserved. Copy, specifications, purchase flow and responsive anatomy are unchanged.

## Verification

`npm run verify` passed. Local desktop 1546 × 1115 and mobile 390 × 844 show all three new assets loaded at native dimensions, with zero horizontal document overflow. Both support images remain native 3:2 in the existing cover frames; Workflow retains its complete near-16:9 composition. Focused screenshots visually checked; no site runtime exceptions observed. Deployment and public readback are separate release gates.
