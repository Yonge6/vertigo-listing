# OneLaser XRF Gen2 Listing UI Specification

## Design direction

Premium international product UI: Apple and DJI restraint, xTool purchase clarity, Insta360 product storytelling, and Tesla-level visual reduction. Use supplied XRF renders and Certia brand typography throughout.

The page follows one consistent evidence ladder: finished result → product capability → technical proof → practical customer outcome. Internal P0/P1/P2/P3 priorities control visual weight but never appear in customer-facing text.

## Color

- Primary text: `#000000`
- Secondary text: `#6B6B70`
- Tertiary text: `#8E8E93`
- Primary surface: `#FFFFFF`
- Secondary surface: `#F5F5F7`
- Default border: `#D2D2D7`
- Soft border: `#E5E5EA`
- Divider: `#ECECEF`
- OneLaser brand red: `#E7310E`
- OneLaser action and price: `#D92D0D`
- Action pressed: `#BF260B`
- Structural black panels and gradients are not permitted.

## Typography

- Product H1: 32 px / 34 px line height / Certia ExtraBold 800 on desktop and mobile.
- Display: responsive 72–96 px desktop and 44–52 px mobile / Certia ExtraBold 800.
- Editorial section H2: 48 px desktop and 32 px mobile / Certia ExtraBold 800.
- Card H3: responsive 28–34 px desktop and 23–26 px mobile / Certia ExtraBold 800.
- Body large: 18–20 px / Certia Regular 400.
- Body: 16 px / Certia Regular 400.
- UI label: 13 px / 18 px / Certia SemiBold 600–700.
- Eyebrow and caption: 12 px / 16 px / Certia ExtraBold 800 / uppercase / 0.10–0.13 em tracking.
- Prices: 22–30 px / Certia ExtraBold 800 / OneLaser red.
- Minimum customer-facing type size: 12 px at every viewport. Never use 11 px or smaller text.

## Spacing and layout

- Base spacing unit: 4 px.
- Standard steps: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160 px.
- Desktop content maximum: 1280 px; purchase hero may use 1440 px to preserve the approved 660 px gallery.
- Main section vertical padding: 96 px desktop; 64 px mobile. Sticky storytelling may use more scroll range where the interaction requires it.
- Section-heading internal rhythm: 8 px from eyebrow to title and 12 px from title to supporting copy.
- Wide narrative modules use the centered 1280 px editorial axis; full-width color bands center their inner content on that axis. Every clickable P0 media stage uses a centered 72 px translucent-black play control (58 px mobile).
- Related controls: 8–12 px gap. Card groups: 12–16 px gap. Major content tracks: 48–72 px gap.

## Components

- Small radius: 12–16 px. Product/media cards: 24–32 px. Large panels/modals: 32 px.
- Primary button: 52–56 px height, pill radius, OneLaser action red, white text, 800 weight.
- Secondary button: 46–48 px height, pill radius, white surface, 1 px `#000000` border.
- Selected card: OneLaser-red 2 px visual border and `#FFF7F4` surface. Do not add `SELECTED`, checkmark, or other redundant text inside an already-selected card.
- Cards use borders and surface contrast; no decorative shadows unless functional separation requires it.
- Prices are always red. Optional accessories always show `OPTIONAL` before the name.
- Product gallery: 660 × 660 px desktop stage; 70 × 70 px thumbnails; explicit previous/next controls and dedicated video slot.
- Video proof follows the buying journey rather than a single gallery: media endorsement, performance test, customer success, independent reviews, competitor comparison and production/support trust each sit beside the decision they resolve.
- National media coverage such as the FOX & Friends Weekend feature uses a standalone early-page `As Seen on TV` module and does not share the creator-review carousel. Do not imply an award or endorsement beyond the fact of being featured.
- Review cards use lazy 16:9 covers in a three-card desktop carousel with partial swipe behavior on mobile. All reviews live in the same arrow-controlled rail; all playback reuses one accessible modal and no iframe exists before the user clicks.
- Video modules use 48 px / 800 headings on desktop and 32 px / 800 on mobile. Their centered play controls are black at 20% opacity with a white glyph, and the clickable cover replaces any separate text play action.
- The at-a-glance overview uses the supplied long-form desktop artwork on a near-full-width `#141414` band with 24 px desktop / 12 px mobile gutters; it sits immediately before FOX proof and has no internal interaction. All P0/video media remain fixed horizontal 16:9 stages using `contain`. Project-result media stays fixed 4:3 with centered cover behavior.
- P0 uses a six-chapter non-duplicative sticky 16:9 story system. P1 uses large split layouts. P2 uses compact image-led cards in a four-column desktop grid. P3 uses concise one-line proof cards or specification rows.
- Power proof: one large image-led stage controlled by a 38W / 70W segmented switch on a full-width `#F5F5F7` band. This is a display-only editorial control and never changes the hero purchase state, cart or sticky total. Safety: one 16:9 image with a four-card proof grid.
- Power-proof detail H3: 36 px / 800 desktop and 28 px / 800 mobile. Desktop sticky-story copy aligns to the top of the active media stage instead of vertically centering in the viewport.
- Project proof: image and copy form one clipped carousel with a shared 32 px desktop / 24 px mobile radius; switching content never changes stage height or control position.
- Materials tabs: every tab pairs a distinct Phosphor line icon with its label; the active state is communicated only by the red underline.
- Micro features: all eight tiles use distinct Phosphor line icons in OneLaser red, with titles carrying the primary hierarchy.
- Materials gallery: one fixed proof stage with finished-product photography, an editorial copy panel and five keyboard-accessible tabs. Desktop stage height is stable; below 1000 px the 16:9 image stacks above copy and the tabs become a horizontal swipe rail.
- AI-generated proof assets ship as compressed WebP at up to 1600 px wide. They may visualize finished products and restrained functional overlays, but must not invent customer-facing specifications or replace an approved machine render when product geometry is the evidence.
- Desktop hero purchase panel order: H1 → source-backed rating → five concise proof bullets → Final Price/MSRP/Save → financing → 38W/70W selector → package cards → optional add-ons → quantity/CTA → assurance.
- Package and add-on cards use 1 px dividers, 10–12 px radii, no elevation, a red price, and a black 2 px-equivalent selected state (border plus inset ring).
- Hero gallery is sticky on desktop while the longer purchase panel scrolls; it becomes static when the layout stacks below 1180 px.
- Sticky purchase bar always reflects the selected power, package, optional-item count, quantity and calculated total.
- On mobile, hero purchase power choices may stack, while the independent editorial power-proof switch remains a compact two-option segmented control.
- Published customer-facing performance labels are `1,300 mm/s` and `True 3.5G` everywhere.

## Motion

- Section reveal: 400–700 ms fade with slight vertical translation.
- Image/detail zoom: 300–500 ms and restrained to approximately 1.03–1.06 scale.
- Tabs and switchers: 180–240 ms.
- Use sticky storytelling, chapter progress, number/metric reveals and product-detail zoom for P0/P1 content.
- Do not use multi-element fly-ins, forced page-level horizontal scrolling, red flashing, autoplay audio, blocking animations or exaggerated parallax.
- Respect `prefers-reduced-motion` and keep all content understandable with motion removed.

## Responsive behavior

- Desktop: two-column product gallery and purchase panel.
- Below 1180 px: product gallery and purchase panel stack.
- Below 900 px: configurator and explanatory media split layouts stack.
- Below 640 px: single-column cards, 18 px page gutters, 36 px product H1, full-width CTAs and no horizontal page overflow.
- On mobile, power choices stack, add-on cards collapse to three visual columns, and the sticky bar preserves the live total plus the primary CTA.
- The hero purchase panel remains the single configuration source of truth; do not add a duplicate long-form configurator later in the page.
- The hero begins close to the header, without an eyebrow/kicker row, and uses compact top spacing. Wide comparison grids remain fluid up to the 1280 px content maximum instead of shrinking as the viewport grows.
- Hero proof bullets use 12 px type. MSRP uses secondary gray; financing links use blue. The optional SHOP purchase action uses `#5532EB` with white text.
- Narrative section descriptions sit directly beneath their left-aligned heading. Do not use split heading/copy columns.
- Keep short workflow headings and reliability support copy on one line where the desktop grid has room; allow natural wrapping below 1180 px.
- Do not place a second power-comparison link inside the hero and do not repeat the hero specifications in a proof rail immediately below it.
- Power selectors contain no price. Final price uses 900 weight. Remove the hero trust strip and commercial-source footnote beneath the purchase buttons.
