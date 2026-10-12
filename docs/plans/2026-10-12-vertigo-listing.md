# VertiGo Listing Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish an independent VertiGo product listing that preserves the approved XRF/Hydra Gen2 page structure while replacing all product claims, purchase data, imagery, and conversion paths with VertiGo-specific content.

**Architecture:** Reuse the independent Hydra Gen2 listing repository as the structural baseline because it already matches the retained XRF listing anatomy. The active page is a single React component backed by explicit local data objects, the shared OneLaser navigation/footer, the existing CSS system, and local static assets. Missing media remains a neutral, branded placeholder rather than borrowing unrelated product imagery.

**Tech Stack:** React 19, Vite 6, Phosphor Icons, GitHub Actions Pages deployment.

---

### Task 1: Establish the independent listing shell

**Files:**
- Modify: `package.json`
- Modify: `vite.config.mjs`
- Modify: `.github/workflows/deploy-pages.yml`
- Modify: `src/App.jsx`
- Create: `src/Vertigo.jsx`

**Steps:**
1. Rename the active Hydra page to VertiGo and update the repository base path.
2. Keep the existing XRF-derived navigation, section order, accessibility helpers, lazy media modal, sticky purchase bar, and analytics hooks.
3. Run `npm run build` and confirm the root route renders the VertiGo page.

### Task 2: Build the source-backed content model

**Files:**
- Modify: `src/Vertigo.jsx`
- Create: `docs/vertigo-content-sources.md`

**Steps:**
1. Map official price, MSRP, variant, preorder state, gallery media, FAQs, and checkout URL from the live OneLaser product page.
2. Map dimensions, weight, performance, focus ranges, power requirements, software, connections, optics, and included items from the workbook.
3. Use brochure language only where it does not conflict with the official page or workbook.
4. Remove unsupported revenue guarantees, review counts, financing rates, shipping dates, and performance comparisons.

### Task 3: Prepare approved VertiGo media

**Files:**
- Create: `public/assets/vertigo-*.webp`

**Steps:**
1. Download the five current official product-gallery images and convert them to efficient WebP files without changing composition.
2. Crop only the supplied lifestyle and product imagery needed by the fixed page slots.
3. Reuse the already supplied VertiGo finished-product images for opportunity cards.
4. Create uniform neutral placeholder raster assets for missing chapter media.
5. Verify dimensions and file size before wiring assets into the page.

### Task 4: Replace every product module without changing page order

**Files:**
- Modify: `src/Vertigo.jsx`
- Modify: `src/styles.css`

**Steps:**
1. Replace the Hero with the single 38W RF configuration, official price/MSRP, preorder disclosure, and official checkout.
2. Reframe Product Opportunities and Materials around drinkware and cylindrical products.
3. Replace the RF/power/generation sequence with 38W RF proof, integrated rotary workflow, and vertical-versus-horizontal workflow comparison.
4. Replace selling-point chapters with Vertical Architecture, RF Precision, Speed & Motion, Smart Workflow, and Reliability & Safety.
5. Keep MakerBoost, Software, Specifications, decision paths, support, FAQ, footer, sticky navigation, and sticky purchase behavior in their existing positions.

### Task 5: Verify and publish

**Files:**
- Modify: `design-qa.md`
- Modify: `CURRENT.md`

**Steps:**
1. Run `npm run verify` and inspect the focused diff.
2. Run the local preview and test desktop plus 390 px mobile for overflow, image completion, text floor, interactions, and console errors.
3. Compare the rendered page against the supplied visual references and fix every P0/P1/P2 issue.
4. Commit only this independent repository, create/push `Yonge6/vertigo-listing`, enable GitHub Pages, wait for deployment, and verify the cache-busted public URL.
