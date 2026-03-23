# Component library
**Customer service software — internal agent tool**
Draft v0.1

---

## Status

| Component | Figma | Variables | Text styles | Variants |
|---|---|---|---|---|
| Badge / Status | ✅ | ✅ | ✅ | Success, Warning, Danger, Info |
| Button | 🔲 | 🔲 | 🔲 | — |
| Form inputs | 🔲 | 🔲 | 🔲 | — |
| Avatar + agent info | 🔲 | 🔲 | 🔲 | — |
| Ticket card | 🔲 | 🔲 | 🔲 | — |
| Navigation / sidebar | 🔲 | 🔲 | 🔲 | — |

---

## 01 — Badge / Status

A small inline label used to communicate ticket or conversation status at a glance.

### Variants

| Variant | Background token | Text token | Usage |
|---|---|---|---|
| Success | `semantic-success-background` | `semantic-success-text` | Resolved tickets |
| Warning | `semantic-warning-background` | `semantic-warning-text` | Pending, SLA risk |
| Danger | `semantic-danger-background` | `semantic-danger-text` | Overdue, errors |
| Info | `semantic-info-background` | `semantic-info-text` | Open, neutral state |

### Sizes

| Size | Padding | Font style | Dot |
|---|---|---|---|
| Default | 4px 10px | `Label/12 medium` | 6×6px filled circle |
| Small | 3px 8px | `Label/12 medium` | None |

### Specs
- Corner radius: `border-radius-sm` (4px)
- No border, no shadow
- Dot colour matches text colour
- Auto layout — horizontal, gap 5px

### Rules
- Use sentence case for all labels
- Never use badges decoratively — only for system status
- Maximum label length: 2 words

---

## 02 — Button

*Coming next*

---

## 03 — Form inputs

*Coming next*

---

## 04 — Avatar + agent info

*Coming next*

---

## 05 — Ticket card

*Coming next*

---

## 06 — Navigation / sidebar

*Coming next*

---

*Last updated: Stage 2 — Badge component complete. Next: Button component.*
