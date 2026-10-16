# VertiGo detail comparison and page audit

Date: 2026-10-16, Asia/Shanghai. Scope: the published VertiGo page, with the live XRF Gen2 page as the visual reference. Source pages were captured in the same 1595 × 1083 desktop viewport; responsive checks use 390 × 844. Screenshots are local ignored evidence under `references/incoming/detail-audit-20261016/`.

## 1. Smart Workflow — corrected and checked

- The reference has a 16:9 primary stage, story copy and metric pills, two equal 3:2 support cards, a four-column proof rail and the additional-details line. Preserve that anatomy with VertiGo-specific features rather than copying XRF camera/registration claims.
- Corrected mobile primary media from a tall stacked layout to a true 16:9 responsive composition. Text remains at least 12 px. The main stage is 1245.5 × 700.59 px desktop and 354 × 199.125 px mobile.
- The two supporting cards measure 612.75 px wide with identical 408.5 px media heights at desktop. The proof rail now separates autofocus and touchscreen control; an autofocus icon no longer suggests that VertiGo has an XRF vision camera.
- Fixed chapter jumps hiding the eyebrow under sticky navigation. A desktop jump positions the chapter at 148 px, below the 128 px navigation; mobile positions it at 180 px, below the 159 px rails.
- Replaced threshold-only chapter observation with requestAnimationFrame-batched scroll/resize tracking. Reading within the workflow cards keeps Smart Workflow active instead of jumping to another chapter.
- Evidence: `01-xrf-workflow.png`, `03-xrf-workflow-cards.png`, `09-xrf-workflow-mobile.png`, `14-workflow-mobile-final.png`, `21-workflow-desktop-final.png`.

## 2. Reliability & Safety — corrected and checked

- Retain the reference's 16:9 main-stage/story, three compact cards, four proof cells and detail line. Mobile cards remain image-left/copy-right.
- Replaced the small machine in an over-padded source frame with a crop of the supplied real front product render. `vertigo-enclosure-detail.webp` is a 560 × 620, 14,984-byte WebP cropped from `vertigo-hero-04.png` at x320/y90, width560/height620. No machine features were generated or altered; the enclosure, display, handle and emergency stop remain visible.
- Keep RF cooling, routine care and exhaust planning distinct. The airflow icon is labelled as an illustration, not a component photograph. Do not imply air extraction is filtration, or copy XRF thermal suppression or Smart Air Assist claims.
- Evidence: `05-xrf-safety.png`, `07-xrf-safety-cards.png`, `12-safety-mobile-after.png`, `13-safety-cards-mobile-after.png`, `22-safety-desktop-final.png`.

## 3. Rest of page — layout and content consistency checked

- Found and fixed forced single-line overflow in the software description and specifications introduction.
- Four material tabs remain equal-width: 319.5 px each on desktop; equal 156 px items in the horizontal mobile rail.
- No broken completed images, nonexistent internal anchor targets, unnamed buttons or residual XRF/Hydra/70W/1,200 mm/s/3.5G/2,000 DPI copy were found in the inspected VertiGo main text.
- At 1595 px and 390 px, no document overflow or overflowing main headings/paragraphs remains. The mobile DOM check found no displayed text below 12 px. Browser page warnings/errors were empty in the local regression check.
- Expanded Laser & Performance displays the consistent 38W RF / air cooling / 800 mm/s / 3G / <=0.01 mm specification set. Official brochure returned HTTP 200 with application/pdf.
- Main purchase/consultation/policy URLs point to the official OneLaser domain; the community points to the VertiGo Facebook group. No checkout transaction or form submission was performed.
- The official product page's retrieved text still showed $5,599 / $5,999, sold-out UI and official support links. The direct product JSON endpoint returned 429, so do not claim a fresh inventory/API verification. Existing commercial copy and checkout delegation remain unchanged.
- Evidence: `17-specs-expanded-mobile.png`, `18-support-mobile.png`.

## 4. Interactions and limits

- The workflow tutorial opens the correct lazy `bEAKhA2Wjj4` YouTube embed; Escape removes the iframe. No iframe is present before interaction.
- Chapter selection, in-content scrolling, material dimensions and the specifications accordion were checked. No external form was sent and no order placed.
- This is a scoped visual/DOM regression audit, not a full WCAG assessment or a material-performance/certification test. Full playback in every region, every third-party destination, email delivery and inventory timing are not certified by these checks.
- Build, deployment and public readback are separate release gates; record their result in the delivery message.
