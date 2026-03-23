# Design system
**Customer service software — internal agent tool**

This repository is the single source of truth for the brand, design tokens, and component library. It is intended to be referenced by AI coding tools to generate on-brand, token-consistent UI components.

---

## How to use this system

When generating UI components or screens using this design system, always:

1. Reference `tokens-studio.json` for all colour, spacing, radius, and typography values
2. Reference `brand-guidelines.md` for personality, voice, and usage rules
3. Reference `component-library.md` for existing component specs and variants
4. Never hardcode hex values — always use the named token

---

## Token quick reference

### Primary colours
| Token | Value | Usage |
|---|---|---|
| `brand-primary` | `#639922` | Primary actions, buttons, active states |
| `brand-primary-light` | `#EAF3DE` | Backgrounds, hover states, tags |
| `brand-primary-dark` | `#3B6D11` | Hover/pressed states |

### Semantic colours
| Token | Value | Usage |
|---|---|---|
| `semantic-success-text` | `#3B6D11` | Resolved, confirmed |
| `semantic-success-background` | `#EAF3DE` | Success backgrounds |
| `semantic-warning-text` | `#854F0B` | Pending, at risk |
| `semantic-warning-background` | `#FAEEDA` | Warning backgrounds |
| `semantic-danger-text` | `#A32D2D` | Errors, destructive |
| `semantic-danger-background` | `#FCEBEB` | Danger backgrounds |
| `semantic-info-text` | `#185FA5` | Neutral, informational |
| `semantic-info-background` | `#E6F1FB` | Info backgrounds |

### Neutrals
| Token | Value | Usage |
|---|---|---|
| `surface-page` | `#F1EFE8` | Page background |
| `surface-card` | `#FFFFFF` | Card backgrounds |
| `border-default` | `#D3D1C7` | Borders, dividers |
| `text-primary` | `#2C2C2A` | Primary text |
| `text-secondary` | `#888780` | Secondary, muted text |

### Spacing (4px base grid)
| Token | Value |
|---|---|
| `spacing-1` | 4px |
| `spacing-2` | 8px |
| `spacing-3` | 12px |
| `spacing-4` | 16px |
| `spacing-6` | 24px |
| `spacing-8` | 32px |

### Border radius
| Token | Value | Usage |
|---|---|---|
| `border-radius-sm` | 4px | Badges, tags |
| `border-radius-md` | 8px | Buttons, inputs |
| `border-radius-lg` | 12px | Cards, panels |
| `border-radius-full` | 9999px | Avatars, pills |

---

## Typography

**Typeface:** Plus Jakarta Sans (Google Fonts)
**Weights:** 400 regular, 500 medium only — never 600 or 700

| Level | Size | Weight | Usage |
|---|---|---|---|
| H1 | 22px | 500 | Page titles |
| H2 | 18px | 500 | Section headings |
| H3 | 15px | 500 | Card headings |
| Body | 14px | 400 | Default UI text |
| Label | 12px | 400 | Captions, timestamps |

---

## Iconography

**Library:** Lucide Icons
- Outlined style only
- Stroke weight 1.5px
- Sizes: 16px / 20px / 24px only

---

## Brand rules for AI generation

When generating any UI using this system, follow these rules without exception:

- **Sentence case** everywhere — buttons, headings, labels, nav items
- **No shadows** — use borders to define depth, never box-shadow
- **No gradients** — flat fills only
- **Borders not shadows** — cards use `0.5px solid #D3D1C7`, no elevation
- **Green for actions only** — never use brand-primary decoratively
- **Semantic colours for status only** — never use success/warning/danger/info for decoration
- **Max 3 words on any button label**
- **Auto layout / flexbox** on all components — no fixed positioning
- **WCAG AA contrast** on all text — minimum 4.5:1 ratio
- **Warm neutral backgrounds** — use `#F1EFE8` for page bg, never pure white or cold gray

---

## Components built

| Component | Status | Variants |
|---|---|---|
| Badge / Status | ✅ Complete | Success, Warning, Danger, Info |
| Button | 🔲 In progress | Primary |
| Form inputs | 🔲 Planned | — |
| Avatar + agent info | 🔲 Planned | — |
| Ticket card | 🔲 Planned | — |
| Navigation / sidebar | 🔲 Planned | — |

---

## Example prompt for AI tools

Use this as a starting template when generating new components: 

```
Using the design system at https://github.com/lakane/design-system, generate a [component name] component.
Use Tailwind CSS with the token values defined in tokens-studio.json.
Follow all brand rules in brand-guidelines.md.
Use Plus Jakarta Sans, sentence case, no shadows, flat fills only.
Reference the existing Badge component in component-library.md for consistency.
```

---

*Design system version 0.1 — actively being built*
