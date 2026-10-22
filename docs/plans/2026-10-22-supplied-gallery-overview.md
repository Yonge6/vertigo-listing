# Supplied Features artwork and complete Hero gallery replacement

User requested the Features opening collage replaced with `/Users/yongyuan/Downloads/3.png`, and the complete Hero gallery replaced with `/Users/yongyuan/Downloads/OneLaser官网202607/`, deleting the former gallery images.

- Features: quality-95 `vertigo-features-overview-user-20261022.webp`, 3840 × 2004, no resizing/cropping, existing native-aspect edge-to-edge layout.
- Hero: all sixteen `OneLaser-VertiGo-01.png` through `-16.png`, retained in numerical order, each 1320 × 1320. Quality-95 `vertigo-hero-user-20261022-01.webp` through `-16.webp`, no resizing/cropping. No old package images appended. Existing stage, thumbnails, lightbox, arrows/swipe and separate product-film slot are unchanged.
- Removed only the eight old tracked Hero image files after confirming no remaining active source references: `vertigo-hero-01.png`, `vertigo-hero-02.png`, `vertigo-hero-03.jpg`, `vertigo-hero-04.png`, `vertigo-hero-05.jpg`, `vertigo-lifestyle.jpg`, `vertigo-machine-products.jpg`, `vertigo-support.jpg`. Two unused asset aliases to these files were removed. Deletions are recoverable from Git history. Supplied originals and unrelated chapter media remain untouched.
- The supplied graphics are used as approved, including their embedded text; no commercial, technical, certification or software claims are added elsewhere based on these pixels.

Source contact sheet and responsive QA remain ignored under `references/incoming/hero-replacement-20261022/`. Publication requires build, desktop/mobile gallery checks, Pages success and public readback.

Local verification: `npm run verify` passed. All 16 thumbnails load at 1320 × 1320; stage counter is `01 / 16`. Previous wraps to 16, lightbox next wraps to 1, Escape closes it, and direct thumbnail selection works. The Features replacement loads at 3840 × 2004 with contain/native-ratio rendering. Desktop and 390 px mobile screenshots checked; zero document overflow and no site runtime exceptions observed. No style or purchase-flow changes.
