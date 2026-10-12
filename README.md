# VertiGo Listing

A responsive OneLaser VertiGo product page built on the same XRF/Hydra Gen2 listing anatomy.

Live page: https://yonge6.github.io/vertigo-listing/

## Development

```sh
npm ci
npm run dev
npm run verify
```

The Vite base path follows the GitHub repository name. Push `main` to deploy through GitHub Actions / Pages.

## Source boundary

- Commercial status and gallery: current official VertiGo product page.
- Selling points and specifications: `(VertiGo)卖点参数发布汇总.xlsx`.
- Visual source: `OneLaser_Product_Brochure_VertiGo_EN_v1.pdf` and the supplied VertiGo reference screenshots.
- Unavailable media uses an explicit neutral color block. No Hydra/XRF machine imagery is substituted.
- Optional analytics use environment-provided `VITE_GA4_ID` and `VITE_META_PIXEL_ID`.
