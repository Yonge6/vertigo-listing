# VertiGo XRF Structure Alignment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the VertiGo listing on the verified XRF/Hydra component tree so layout, purchase anatomy, section sequence, spacing, interaction and responsive behavior match the XRF reference while all product facts and assets remain VertiGo-specific.

**Architecture:** Replace the custom `Vertigo.jsx`/`vertigo.css` implementation with the Hydra adaptation of the canonical XRF template, then reduce its product data to the single VertiGo 38W configuration. Reuse the existing shared navigation, XRF listing styles, carousel behavior, collapsible specifications, journey navigation, decision paths, support, FAQ and sticky purchase bar. Missing VertiGo media stays an explicit neutral placeholder; unrelated XRF/Hydra product imagery and claims are not reused.

**Tech Stack:** React 19, Vite 6, CSS, Phosphor icons, GitHub Actions and GitHub Pages.

---

### Task 1: Freeze visual evidence and component delta

**Files:**
- Evidence: `qa/audit-xrf-desktop-top.png`
- Evidence: `qa/audit-vertigo-desktop-top.png`
- Modify: `design-qa.md`

1. Capture both live pages at 1440 × 1100.
2. Record structural deltas for announcement/header, hero gallery, purchase panel, journey navigation and sticky purchase bar.
3. Treat the XRF screenshot and current XRF source as the visual/component source of truth.

### Task 2: Adopt the canonical listing component tree

**Files:**
- Modify: `src/Vertigo.jsx`
- Modify: `src/styles.css`
- Modify: `src/vertigo.css`
- Restore: `src/components/CommercialCapabilities.jsx`
- Restore: `src/components/CommercialCapabilities.css`
- Restore: `src/hooks/useAutoplayCarousel.js`

1. Copy the verified Hydra/XRF template implementation into the VertiGo repository.
2. Keep the exact template class names and interaction architecture.
3. Rename only product-specific component and analytics identifiers.
4. Run `npm run verify`; expected result: build succeeds before content refinement.

### Task 3: Replace Hydra/XRF product data with VertiGo facts

**Files:**
- Modify: `src/Vertigo.jsx`
- Modify: `src/data/commercialCapabilities.js`
- Modify: `docs/vertigo-content-sources.md`

1. Use one 38W RF configuration at $5,599 with $5,999 MSRP and variant `44483820224546`.
2. Preserve the canonical price/MSRP/financing/package/quantity/action hierarchy.
3. Replace specifications with workbook-backed VertiGo values.
4. Replace RF, motion, workflow, safety, materials, support and FAQ copy with source-backed VertiGo content.
5. Remove Hydra/XRF customer claims, reviews, performance numbers and accessories that cannot be verified for VertiGo.

### Task 4: Map VertiGo media into canonical slots

**Files:**
- Modify: `src/Vertigo.jsx`
- Modify: `src/vertigo.css`
- Add/modify: `public/assets/vertigo-*`

1. Use official product gallery images in the square hero carousel.
2. Use the supplied lifestyle and vertical-versus-horizontal images in the XRF feature-overview and comparison slots.
3. Use PDF crops for RF, workflow, MakerBoost and support proof.
4. Render missing media as subdued neutral placeholders without borrowing another machine.

### Task 5: Verify exact responsive behavior

**Files:**
- Modify: `design-qa.md`
- Evidence: `qa/aligned-vertigo-desktop.png`
- Evidence: `qa/aligned-vertigo-mobile.png`
- Evidence: `qa/aligned-xrf-vertigo-comparison.png`

1. Run `npm run verify`; expected: success and no diff errors.
2. Compare XRF and VertiGo at 1440 × 1100 in the same visual input.
3. Check VertiGo at 390 × 844 for overflow, sticky stacking, text floor, image dimensions and console errors.
4. Test gallery, journey navigation, feature tabs, materials, specifications, FAQ, lightbox and sticky purchase action.
5. Set `design-qa.md` final result to `passed` only after visible deltas are resolved.

### Task 6: Release and validate GitHub Pages

**Files:**
- Modify: `CURRENT.md`

1. Commit only the VertiGo repository changes.
2. Push `main` to `Yonge6/vertigo-listing`.
3. Wait for the Pages workflow to complete successfully.
4. Validate the cache-busted live page and key asset/PDF routes.
5. Report local build, deployment and live-browser proof separately.
