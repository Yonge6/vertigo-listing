# RF section boundary fix

## Approved scope and design

The user approved correcting the diagnosed overlap between the Features opening artwork and Why RF. Do not alter images, copy, animation or purchase flow; keep the existing visual system and rail behavior.

The desktop rail now contains five entries after Speed & Motion was hidden. Its actual height is 216 px, but the inherited fixed -260 px bottom margin pulled the next section upward by 44 px. A fixed replacement would solve only today's count; extra section padding would mask the cause. Instead, derive the negative margin from the existing rendered `--chapter-count`, row height and gaps. Scope the change to VertiGo and vertical rails only; mobile's horizontal sticky rail remains unchanged.

- Desktop: 40 px rows with 4 px gaps, so 5 entries cancel 216 px.
- Tablet: 46 px rows without gaps, so 5 entries cancel 230 px.
- The artwork bottom and RF section top must meet without overlap on vertical-rail layouts. Preserve the RF section's existing padding and mobile horizontal-rail flow.

## Added request: Vertical Design chapter

During implementation the user requested a module immediately below RF Precision, supplying three technical benefits: pioneering vertical design, engineered vertical motion and an integrated rotary. Add an independent Vertical Design rail entry and chapter before Smart Workflow. The original Speed & Motion comparison chapter stays hidden.

Use the supplied brochure's actual architecture illustration without generating or inventing machine anatomy. Present three icon-led explanations beside the illustration, stacked on mobile, using the existing white/pale-gray/Certia visual system. Describe upright handling, motion that manages gravity, and reduced add-on alignment work; do not repeat absolute claims of immunity to gravity, flawless output, zero setup or worldwide priority. Existing compatible-blank/focus/clearance guidance stays explicit. No new commercial or performance claims.

The new entry makes six visible rail entries, so the same count-derived fix now cancels 260 px on desktop and 276 px on tablet. Test both the current six-entry rail and a temporary five-entry regression state so adding a chapter cannot simply conceal the original fixed-margin defect.

## Verification

- `npm run verify` passed. Final CSS polish is verified again before commit.
- Ego 1445 px desktop: six-entry rail 260 px / margin -260 px; five-entry regression rail 216 px / margin -216 px. Both have exactly 0 px artwork/RF overlap and 48 px artwork-to-header separation.
- Ego 1000 px tablet: six-entry rail 276 px / margin -276 px; five-entry regression rail 230 px / margin -230 px. Both have exactly 0 px overlap and 48 px header separation. Each regression removes one DOM entry and updates the existing count variable only for local QA, then reloads; no test mutation ships.
- Ego 390 × 844: horizontal sticky rail retains normal flow (53 px), the RF header remains below it; no document overflow. Vertical Design stacks its full 670 × 825 supplied illustration over all three readable benefit blocks. Desktop and mobile screenshots visually inspected. Vertical Design and Smart Workflow rail jumps select the correct chapter below the sticky chrome (148 px desktop / 180 px mobile).
- Speed & Motion remains absent. No captured Runtime exceptions or error-level browser log entries. Source images, animation, commercial/policy content and existing QA files remain unchanged. Evidence stays ignored under `references/incoming/rf-boundary-20261020/`.
