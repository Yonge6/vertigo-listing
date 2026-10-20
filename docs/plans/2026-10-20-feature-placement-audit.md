# VertiGo feature placement audit

Source: `/Users/yongyuan/Downloads/(VertiGo)卖点参数发布汇总.xlsx`, read-only inspection of all 36 Selling Points rows and the Specs sheet on 2026-10-20. Workbook worksheet dimensions incorrectly report A1 only; resetting read-only dimensions exposes the complete cells. No workbook edits.

## Feature ownership and checked evidence

| Module | Primary message / evidence | Source |
| --- | --- | --- |
| RF Precision / Why RF | 38W CO₂ RF, 1,000 DPI, ≤0.01 mm; 3× expander, 2.5 in lens, 20 mm lens and 25 mm mirrors | Specs C10:C16, C30:C33; Selling Points D6:D7, D35 |
| Vertical Design | Upright architecture, controlled vertical motion, integrated rotary; maximum 800 mm/s, 3G, 300 mm travel | Selling Points D2:D5; Specs C3, C13:C14 |
| Smart Workflow | Autofocus, red-light positioning, touchscreen movement/test parameters/status/alarms, USB/Ethernet/Wi-Fi | Selling Points D8:D9, D13, D18; Specs C20:C21, C26:C28 |
| Product Range | Compatible cylindrical/irregular work, diameter ranges, footprint and machine weight | Selling Points D15, D31/F31; Specs C4:C6, C17:C18 |
| Reliability & Safety | Class 1 enclosure design, lid protection, isolated electronics, smoke extraction; maintenance and cooling guidance | Selling Points D14, D17, D22, D26, D28, D36; Specs C11, C22:C23 |
| Software | MakerBoost vertical coordinates and motion controls; LightBurn/RDWorks compatibility | Selling Points D10:D11; Specs C27 |

## Changes

- Product Range no longer repeats Class 1 or smoke extraction; its third/fourth proof cells now show 16–230 mm manual-focus and 89–230 mm autofocus diameters, not maximum workpiece size.
- Vertical Design uses the shared large-stage/two-support-card layout. Supplied architecture illustration remains intact; supporting images are the user's real laser-head reference and existing rotary photograph.
- Vertical motion metrics live in Vertical Design. Workflow replaces its travel cell with red-light positioning and its secondary list with touchscreen status/alarms, LED chamber and test controls. Software compatibility remains in Software rather than repeated in this detail list.
- Safety's former large machine image, enclosure explanation and pills are removed completely, preserving three compact cards and its safety proof rail. Isolated electronics replaces the duplicate RF-cooling proof cell; cooling remains explained in its maintenance card.
- Product Range uses the exact user-approved wording from Selling Points F31. Height, clamping, handle clearance and material compatibility remain qualified below.

## Limits and conflicting source copy

- Use technical Specs values over promotional contradictions: 230 mm focus diameter, not Selling Points D21's 293 mm workpiece claim; 300 mm is travel, not a blanket object-height guarantee.
- Do not introduce “world's first,” zero setup, flawless results, doubled output/revenue, guaranteed profitability, military-grade, universally tool-free lenses or remote operation from anywhere. The technical lens-care text explicitly mentions tools.
- No quantified VertiGo 30,000-hour evidence appears in the supplied workbook. The user-approved RF comparison artwork still contains that number; its visible qualification remains. It is not a confirmed VertiGo specification or lifespan warranty.
- 70 dB, power-failure resume, material libraries and 15-minute setup appear in the selling-point list but are not newly promoted as measured guarantees in this scoped revision.
- Electrical configuration remains factory-selected 115V/220V per Specs C38, not automatic universal switching. Warranty retains the user's newer explicit 3-2-1 confirmation, not the older workbook's one-year entry.
- No new claims about Class 1 certification, unfiltered exhaust being safe, arbitrary bare-metal engraving or universal ceramic compatibility.

## QA

- Build: `npm run verify`.
- Desktop 1445 px and mobile 390 px: large stage + two loaded supporting images; mobile stacks cards; no protection-story wrapper or removed text; range proof labels and copy correct; no horizontal overflow or observed runtime errors.
- Evidence: ignored `references/incoming/chapter-layout-20261020/`. Release must pass GitHub Pages and public readback separately.
