# Brand Guidelines
**Customer service software — internal agent tool**
Draft v0.1

---

## 01 — Product context

| | |
|---|---|
| **Primary users** | Support agents (internal staff) |
| **Target company size** | Small businesses — e-commerce, local services |
| **UI mode** | Light mode (dark mode planned for later) |

---

## 02 — Brand personality

| Trait | Description |
|---|---|
| **Warm** | Feels like a helpful colleague, not a cold enterprise tool |
| **Resolved** | Every interaction points toward a clear, positive outcome |
| **Clear** | No jargon, no ambiguity — agents always know what to do next |
| **Grounded** | Modern but never trendy — stable and dependable day after day |

**Design reference:** Intercom — warm, rounded, modern

---

## 03 — Voice and tone

### Do
- Use plain, conversational language
- Confirm actions with brief, positive messages (e.g. "Ticket resolved")
- Use sentence case everywhere — headings, labels, buttons
- Write in active voice ("We sent the email" not "The email was sent")

### Don't
- Use passive voice or corporate filler ("Your request has been processed")
- Use exclamation marks except in onboarding flows
- Use ALL CAPS for emphasis — use weight or color instead
- Use more than 3 words on a button label

---

## 04 — Color palette

### Primary

| Name | Hex | Usage |
|---|---|---|
| Primary | `#639922` | Primary actions, active states, key highlights |
| Primary light | `#EAF3DE` | Backgrounds, tags, hover states |
| Primary dark | `#3B6D11` | Pressed states, text on light green bg |

### Neutrals

| Name | Hex | Usage |
|---|---|---|
| Surface | `#F1EFE8` | Page background, sidebar fills |
| Border | `#D3D1C7` | Dividers, input borders, card edges |
| Muted text | `#888780` | Secondary labels, placeholders, captions |
| Body text | `#2C2C2A` | Primary text, headings |

### Semantic colors

| Name | Hex | Background | Usage |
|---|---|---|---|
| Success | `#3B6D11` | `#EAF3DE` | Resolved tickets, confirmations |
| Warning | `#854F0B` | `#FAEEDA` | SLA warnings, pending states |
| Danger | `#A32D2D` | `#FCEBEB` | Errors, destructive actions |
| Info | `#185FA5` | `#E6F1FB` | Neutral notifications, tooltips |

### Color rules
- Never use more than 2 brand colors in a single UI surface
- Semantic colors are for system feedback only — not decoration
- All interactive elements must have a visible focus state using the primary color
- Maintain WCAG AA contrast minimum (4.5:1) for all text

---

## 05 — Typography

**Typeface:** Plus Jakarta Sans (free on Google Fonts)

Chosen for its slightly rounded terminals, excellent readability at small sizes, and warm character — reinforcing the friendly, approachable brand tone.

### Type scale

| Level | Size | Weight | Line height | Usage |
|---|---|---|---|---|
| H1 | 22px | 500 | 1.3 | Page titles |
| H2 | 18px | 500 | 1.4 | Section headings |
| H3 | 15px | 500 | 1.5 | Card headings, subsections |
| Body | 14px | 400 | 1.6 | Default UI text |
| Label / Caption | 12px | 400 | 1.5 | Secondary info, timestamps, hints |

### Typography rules
- Sentence case always — never Title Case or ALL CAPS in UI
- Two weights only: 400 (regular) and 500 (medium). Never use 600 or 700
- No italics in the UI — use secondary color or weight for de-emphasis
- Minimum font size: 12px

---

## 06 — Spacing

**Base unit:** 4px

All spacing, padding, and gaps must be multiples of 4.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Tight internal gaps (icon + label) |
| `space-2` | 8px | Default internal padding |
| `space-3` | 12px | Component gaps |
| `space-4` | 16px | Section padding |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Layout gaps |
| `space-12` | 48px | Section gaps |
| `space-16` | 64px | Page-level margins |

---

## 07 — Border radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 4px | Badges, chips, small tags |
| `radius-md` | 8px | Buttons, inputs, small cards |
| `radius-lg` | 12px | Cards, panels, modals |
| `radius-full` | 9999px | Avatars, toggle switches, pills |

---

## 08 — Iconography

**Library:** Lucide Icons (free, open source)

| Rule | Value |
|---|---|
| Style | Outlined only — no filled or solid icons |
| Stroke weight | 1.5px |
| Sizes | 16px / 20px / 24px only |
| Color | Inherits from parent text color |

**Links:**
- Figma plugin: search "Lucide" in Figma Community
- Web / React: [lucide.dev](https://lucide.dev)

---

## 09 — Elevation and borders

This product uses **borders, not shadows**, to define depth. This keeps the UI flat, clean, and easy to read in a busy work context.

| Level | Treatment |
|---|---|
| Page background | `#F1EFE8` surface fill |
| Cards | White `#FFFFFF` + `0.5px` border `#D3D1C7` |
| Modals / overlays | White `#FFFFFF` + `1px` border + `rgba(0,0,0,0.08)` backdrop |
| Focused inputs | `2px` outline in `#639922` |

---

## 10 — Do / don't summary

| Do | Don't |
|---|---|
| Use green for actions and positive outcomes | Use green decoratively |
| Keep layouts spacious and scannable | Pack too much into one screen |
| Use sentence case everywhere | Use title case or ALL CAPS |
| Round all corners | Use sharp 0px radius on interactive elements |
| Use Lucide outlined icons at 16/20/24px | Mix icon styles or sizes |
| Test all text at WCAG AA contrast | Place muted text on colored backgrounds |

---

*Last updated: Stage 1 — Brand Guidelines. Next: Design tokens and Figma component library.*
