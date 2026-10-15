# Tayel DS — v1.0

Transcribed from the Figma file "Tayel DS" — first from 19 page captures, then
completed against the full 30-page PDF export (`docs/Tayel-DS.pdf`, supplied
2026-10-16). Everything here was read off those pages. Where a value was not
printed anywhere it is marked **unknown** rather than guessed — ask Figma for it
before using it.

The PDF is 2 pages of front matter + 28 content pages. It does **not** close the
navigation gap: its page 20 is titled "Navigation Bar" and shows the Tooltip
frame again, the same mis-export as the screenshot. Auth Screens and Dashboard,
listed in the capture README, are not in the PDF at all.

Scope note: the cover page is labelled "Startup DS v1.0", so this started from a
generic startup kit. The palette and type below are what the file actually
specifies; the Tayel identity decision (white / indigo) sits on top of it.

---

## 1. Token architecture — 3 layers

| Layer | What it holds | Rule |
|---|---|---|
| 1. Primitives | 72 raw colours: 7 palettes × 10 shades + white + black | **Never referenced by a component.** |
| 2. Semantics | Meaning-based aliases — BG / Text / Border / Interactive. Light + dark built in. | Components read these. |
| 3. Components | Component-scoped tokens aliasing layer 2 — Button, Input, Badge, Card, Alert, Nav, Table… | One component, one set. |

Counts claimed by the file: 300+ variables, 45 text styles, 9 effect styles,
96 Lucide icons across 11 categories, 2 languages. The cover claims 338
primitives / 70 semantic colours / 34 components — the two pages disagree on
component count (20+ vs 34). Not important, but don't quote either as fact.

---

## 2. Colour — primitives

### Primary — Deep Indigo
| | | | | |
|---|---|---|---|---|
| 50 `#EEECF9` | 100 `#D6D3F1` | 200 `#ADA8E3` | 300 `#837CD5` | 400 `#5A52C7` |
| 500 `#1E1B4E` | 600 `#18163F` | 700 `#131130` | 800 `#0D0B21` | 900 `#080612` |

The ramp deliberately breaks between 400 and 500: 400 is a bright violet-indigo,
500 drops to the near-navy brand colour. **`#1E1B4E` is the brand.** It is also
what the live site already uses as `--brand-glow`, and it is the navy behind
every header in the Figma file.

### Secondary — Blue
| | | | | |
|---|---|---|---|---|
| 50 `#EBF0F9` | 100 `#C7D8F0` | 200 `#8FB1E1` | 300 `#578AD2` | 400 `#2F68BB` |
| 500 `#2456A7` | 600 `#1C4386` | 700 `#153265` | 800 `#0E2244` | 900 `#071123` |

### Accent — Purple
| | | | | |
|---|---|---|---|---|
| 50 `#F5F3FF` | 100 `#EDE9FE` | 200 `#DDD6FE` | 300 `#C4B5FD` | 400 `#A78BFA` |
| 500 `#8B5CF6` | 600 `#7C3AED` | 700 `#6D28D9` | 800 `#5B21B6` | 900 `#4C1D95` |

### Neutral — Gray
| | | | | |
|---|---|---|---|---|
| 50 `#F9FAFB` | 100 `#F3F4F6` | 200 `#E5E7EB` | 300 `#D1D5DB` | 400 `#9CA3AF` |
| 500 `#6B7280` | 600 `#4B5563` | 700 `#374151` | 800 `#1F2937` | 900 `#111827` |

### Success — Green
| | | | | |
|---|---|---|---|---|
| 50 `#F0FDF4` | 100 `#DCFCE7` | 200 `#BBF7D0` | 300 `#86EFAC` | 400 `#4ADE80` |
| 500 `#22C55E` | 600 `#16A34A` | 700 `#15803D` | 800 `#166534` | 900 `#14532D` |

### Warning — Amber
| | | | | |
|---|---|---|---|---|
| 50 `#FFFBEB` | 100 `#FEF3C7` | 200 `#FDE68A` | 300 `#FCD34D` | 400 `#FBBF24` |
| 500 `#F59E0B` | 600 `#D97706` | 700 `#B45309` | 800 `#92400E` | 900 `#78350F` |

### Error — Red
| | | | | |
|---|---|---|---|---|
| 50 `#FEF2F2` | 100 `#FEE2E2` | 200 `#FECACA` | 300 `#FCA5A5` | 400 `#F87171` |
| 500 `#EF4444` | 600 `#DC2626` | 700 `#B91C1C` | 800 `#991B1B` | 900 `#7F1D1D` |

### Base
White `#FFFFFF` · Black `#000000`

Accent, Neutral, Success, Warning and Error are Tailwind's violet / gray / green
/ amber / red ramps unchanged. Only **Primary** and **Secondary** are custom —
those two carry the brand, the rest are infrastructure.

### Semantic layer
The capture of the colours page does not show the semantic token list. Layer 2
names (BG / Text / Border / Interactive, light + dark) are **unknown** and must
come from the Figma Color Collection before the site is wired up.

---

## 3. Typography

| Family | Role | Weights in use |
|---|---|---|
| **Space Grotesk** | EN headings + display | Bold · Medium · Regular |
| **Poppins** | EN body + all UI | SemiBold · Medium · Regular |
| **Cairo** | All Arabic (headings, body, UI) | Bold · SemiBold · Regular |
| **Roboto Mono** | Code | Regular |

### Display — Space Grotesk
| Style | Size | Line height | Weight |
|---|---|---|---|
| Display/2xl | 72px | 110% | Bold |
| Display/xl | 60px | 110% | Bold |
| Display/lg | 48px | 115% | Bold |

### Headings — Space Grotesk
| Style | Size | Line height | Weight |
|---|---|---|---|
| H1 | 40px | 120% | Bold |
| H2 | 32px | 120% | Bold |
| H3 | 28px | 125% | Medium |
| H4 | 24px | 130% | Medium |
| H5 | 20px | 130% | Medium |
| H6 | 18px | 140% | Medium |

H1 and H2 are Bold; H3 down are Medium. That switch is the file's own rule, not
a capture artefact — don't "fix" it to a smooth weight ramp.

### Body — Poppins
| Style | Size | Line height | Weight |
|---|---|---|---|
| Body/xl | 18px | 160% | Regular |
| Body/lg | 16px | 160% | Regular |
| Body/md | 14px | 160% | Regular |
| Body/sm | 12px | 150% | Regular |
| Body/lg-medium | 16px | 160% | Medium |

### UI labels — Poppins
| Style | Size | Line height | Weight | Use |
|---|---|---|---|---|
| Label/lg | 16px | 140% | SemiBold | Button · Navigation · Form |
| Label/md | 14px | 140% | SemiBold | Button · Navigation · Form · Badge |
| Label/sm | 12px | 140% | SemiBold | Badge · Tag · Status pill · Caption |
| Overline/md | 12px | 130% | SemiBold | Section header · Category · Metadata (uppercase, tracked) |
| Code/md | 14px | 160% | Regular | Roboto Mono |

### Arabic (RTL) — Cairo
| Style | Size | Line height | Weight |
|---|---|---|---|
| AR/Display | 60px | 130% | Bold |
| AR/H1 | 40px | 140% | Bold |
| AR/H3 | 28px | 145% | SemiBold |
| AR/Body/lg | 16px | 180% | Regular |
| AR/Label/md | 14px | 150% | SemiBold |

**Arabic line heights are 10–20 points taller than their Latin twins** at the
same size (AR/Body/lg 180% vs Body/lg 160%). This is correct for Arabic — the
script needs the room. Carry it through; never reuse a Latin line height for
Arabic text.

The AR scale is partial in the capture: AR/H2, H4–H6 and the other body sizes
are **unknown**.

---

## 4. Spacing

Base 4px.

| Token | px | Token | px | Token | px |
|---|---|---|---|---|---|
| spacing/0 | 0 | spacing/5 | 20 | spacing/14 | 56 |
| spacing/1 | 4 | spacing/6 | 24 | spacing/16 | 64 |
| spacing/2 | 8 | spacing/8 | 32 | spacing/20 | 80 |
| spacing/3 | 12 | spacing/10 | 40 | spacing/24 | 96 |
| spacing/4 | 16 | spacing/12 | 48 | | |

Note the gaps: there is no 7, 9, 11, 13, 15, 17–19, 21–23. The scale steps by 1
to 6, then by 2, then by 4. Applies to gap, padding, width and height alike.

## 5. Radius

| Token | px | Token | px |
|---|---|---|---|
| none | 0 | xl | 16 |
| xs | 2 | 2xl | 24 |
| sm | 4 | full | 9999 |
| md | 8 | | |
| lg | 12 | | |

## 6. Elevation

Eight levels, each with a stated job:

| Token | Used for |
|---|---|
| Elevation/None | Flat — no shadow |
| Elevation/xs | Subtle lift — labels, chips |
| Elevation/sm | Card — default elevation |
| Elevation/md | Dropdown · popover |
| Elevation/lg | Modal · sheet |
| Elevation/xl | Dialog · overlay |
| Elevation/2xl | Full-screen overlay |
| Elevation/Brand/sm | Brand cards · CTA buttons (indigo-tinted, not neutral) |

**No pixel values are printed on the elevation page.** All eight offsets, blurs
and colours are **unknown** — pull them from the 9 Figma effect styles. Do not
substitute Tailwind's defaults; `Elevation/Brand/sm` in particular is a tinted
shadow that has no Tailwind equivalent.

## 7. Grid & breakpoints

| | Mobile | Tablet | Desktop |
|---|---|---|---|
| Frame | 375px | 768px | 1440px |
| Columns | 4 | 8 | 12 |
| Margin | 16px | 24px | 80px |
| Gutter | 16px | 16px | 24px |
| Col width *(as printed)* | 56px | 72px | 104px |

**The printed column widths do not survive arithmetic.** Desktop: 1440 − 160
margin = 1280 content; 12 × 104 + 11 × 24 = 1512, which does not fit. The
correct width is (1280 − 264) / 12 ≈ **84.7px**. Mobile is worse: 4 × 56 + 3 ×
16 = 272 against 343 available. Treat the frames, column counts, margins and
gutters as authoritative and **derive** column width — ignore the printed
number. The page's own comparison strip calls desktop "1280px", i.e. the content
width, which supports reading 1440 as the frame.

---

## 8. Components

19 of the file's components are captured. For each, the variant matrix is from
the Getting Started index; the visual reading is from the component page.

### Button — 45 variants (5 types × 3 sizes × 3 states)
Types: **Primary** (indigo `#1E1B4E` fill, white label) · **Secondary** (blue
`#2456A7` fill, white label) · **Ghost** (no fill, indigo label) · **Outline**
(white fill, 1px border, indigo label) · **Danger** (red `#EF4444` fill, white
label).
States: Default · Hover (one step darker) · Disabled (grey fill, grey label).
Every button has a leading **and** trailing icon slot; both are optional.
Radius grows with size (roughly md → lg). Exact per-size height, padding and
radius are **unknown**.

### Input — 15 variants (3 sizes × 5 states) + label/helper
Anatomy: label above, field, helper text below. States: Default · Hover · Focus
· Filled · Error · Disabled. **Focus is a violet ring** (accent, not primary).
Error turns the border and the helper text red. A **Text Area** variant exists
with the same states.

### Checkbox — 12 variants · Radio — 8 · Toggle — 6
Checkbox: unchecked / checked / indeterminate, each × default · hover · focus ·
disabled. Checked fill is indigo `#1E1B4E` with a white mark; indeterminate is a
dash. Radio is the same system, circular, checked = indigo ring + filled dot.
Toggle: off = grey track, on = indigo track, white knob, `radius/full`.
Focus is the same violet ring across all three — it is the system-wide focus
treatment.

### Select — 15 variants (3 sizes × 5 states) + dropdown list
Leading search icon, trailing chevron that flips when open. The list is a white
panel at Elevation/md; the active row is tinted accent-50/100 with a check mark
at the end.

### Badge — 18 variants (6 colours × 3 sizes)
Tonal, never solid: a `50` background with `600`/`700` text. Colours: Neutral ·
Primary · Success · Warning · Error · Accent.

### Avatar — 15 variants (3 types × 5 sizes)
Types: initials · user glyph · image placeholder. Circular, accent-50/100
ground, indigo initials. Two optional attachments: a count badge top-right
(error red) and a status dot bottom-right (success green). Both scale with the
avatar.

### Card — 5 variants (Default / Elevated / Outlined / Flat + Hover)
Anatomy top to bottom: media block flush to the card edge → overline category +
date → title → description → hairline → avatar + author. Radius lg/xl.

### Modal — 3 variants (SM / MD / LG)
Header (title + close icon button) · hairline · body · footer with Cancel
(outline) and Confirm (primary) right-aligned.

### Alert — 4 variants (Info / Success / Warning / Error)
Tinted `50` ground with a **1px border in the same hue** (≈ the 300/400 step),
leading outline icon, bold title, body beneath. Radius xl. Info is indigo, not
blue — the Secondary palette is not used here.

### Tooltip — 4 variants (Top / Bottom / Left / Right)
Near-black `#111827` bubble, white Label text, a solid arrow on the stated side,
radius lg, optional close ×.

### Tabs — 14 variants (Line / Pill / Boxed × sizes × alignment)
**Line**: underline under the active item only. **Pill**: active item gets a
filled indigo pill. **Boxed**: active item is a white card with a border, the
rest flat. Three sizes and left/centre/right alignment, shown at 4, 5 and 6
items.

### Navigation — 10 components (Sidebar ×2 / TopNav ×4 / Mobile ×4)
**Still not captured.** Both the screenshot and the PDF put the Tooltip frame
under the "Navigation Bar" heading. The top nav is the first thing any page
needs, so this is the one gap that actually blocks work.

### Breadcrumb — 12 variants (3 separators × 3 sizes × with/without home icon)
Separators: `/`, `>`, `·`. Links are Secondary blue, the current (last) crumb is
neutral ink and not a link. Optional leading home icon. Three sizes track
Body/sm, Body/md, Body/lg.

### Pagination — 8 variants (Default / Simple × sizes)
**Default**: prev chevron, numbered squares with `…` truncation, next chevron.
The active page is a filled indigo square with white text; the rest are white
with a hairline. Disabled chevrons go grey at the first and last page. Shown
truncating at the start, middle and end of a 10-page range, and un-truncated at
5 pages.
**Simple**: prev chevron · "Page 5 of 10" · next chevron.

### Table — 6 variants (Striped / Bordered / Compact / Checkbox)
Four independent booleans, shown in combination. Anatomy: header row with a
sort glyph on every sortable column, then rows of avatar + name, email, role, a
status Badge, and an actions cell (edit / delete icon buttons). The checkbox
variant adds a select column with a header select-all.

### Progress Bar — 9 variants (4 sizes × 4 colours + value states)
Track is neutral, fill is a `radius/full` bar. Colours: Primary, Success,
Warning, Error. Label sits left, percentage right, both Label/md. Shown at 0,
25, 50, 75 and 100% — at 0% the fill collapses to a dot rather than vanishing.

### Spinner — 38 variants (Ring / Dots / Pulse × sizes × colours)
**Ring**: an arc on a light track, 5 sizes, in indigo, blue, purple and neutral
— the arc is a gradient, not a flat stroke. **Dots**: three dots at staggered
opacity. **Pulse**: one filled circle. Same four colours across all three.

### Skeleton — 6 variants (Text / Avatar / Card / List / Table / Form)
Flat grey blocks at `radius/sm`, with the last line of any text run cut short.
No shimmer is shown in the file.

### Form — 4 variants (Single column / Two column × with/without header)
Single column is a `radius/xl` card on the page surface; two column drops the
card. Required fields carry a red asterisk after the label. Helper text sits
under the field, the character counter under the textarea, right-aligned.
Footer is Cancel (outline) + Save Changes (primary), left-aligned in the single
column and under the grid in the two column.

### Empty States
Icon in a tinted circle, title, one line of body, then one or two buttons
(primary, optionally with an outline beside it). Fifteen written cases — no
data, no results, all caught up, inbox empty, no files, no projects, connection
lost, access denied, something went wrong, empty cart, no team members, welcome
aboard. Destructive cases (connection lost, access denied, error) use the error
tint for the icon; the rest use primary. **The page includes Arabic RTL
versions of the same states**, which is the only place in the file where a
pattern is drawn in both languages.

### Icons — 96 Lucide icons across 11 categories
Files · Essential · Text · Menu · Shop · Like · Security · Messages · Arrows ·
Users · Money · Multimedia · Location · Time. Use `lucide-react`; do not mix in
a second icon set.

### Not in the file at all
**Auth screens** and **Dashboard** are listed in the capture README but appear
in neither the screenshots nor the PDF.

---

## 9. Bilingual — EN / AR

| | English | Arabic |
|---|---|---|
| Direction | LTR | RTL |
| Headings | Space Grotesk | Cairo |
| Body & UI | Poppins | Cairo |
| Line height | 110–160% | 130–180% |

Arabic uses one family for everything — there is no heading/body split on the
Arabic side. Mirror the whole layout for RTL, not just the text: icon sides,
leading/trailing slots, tooltip placements, tab alignment and the chevron on
Select all flip.

---

## 10. Gaps and defects in the source

Ranked by how much they block the build. Re-checked against the full PDF on
2026-10-16 — the first four survived it.

1. **The navigation page is still missing.** Screenshot and PDF both show the
   Tooltip frame under the "Navigation Bar" heading. Sidebar, top nav and
   mobile nav are all unseen. This is the only gap that blocks a page.
2. **No elevation values.** Eight named levels, zero numbers, in either export.
3. **No semantic colour layer.** Layer 2 is the layer components are supposed
   to read, and it is in neither export.
4. **Grid column widths are arithmetically wrong** at all three breakpoints.
5. **Auth screens and Dashboard do not exist** in the file, though the capture
   README lists them.
6. **No component dimensions anywhere** — button heights, input heights,
   paddings and per-size radii are absent.
7. No shimmer or motion spec for Skeleton or Spinner; both are drawn static.
8. The Figma page for tabs is titled "Taps".
9. Cover and Getting Started disagree on the component count (34 vs 20+).

## 11. How this meets the live site

The current tayel.net was built before this system existed and does not follow
it. The differences, so nobody tries to split the difference later:

| | Live tayel.net | Tayel DS |
|---|---|---|
| Typeface | Inter, everything | Space Grotesk + Poppins + Cairo |
| Brand colour | `#4f46e5` | `#1E1B4E` (DS primary-500) |
| H1 | 48 / 48 / 700 / −1.2px | 40 / 120% / Bold |
| Elevation | 2 shadows | 8 named levels |
| Container | 1200px, 16px padding | 1280px content, 80px desktop margin |
| Arabic | none | first-class, Cairo, RTL |

`#4f46e5` sits between DS primary-300 `#837CD5` and 400 `#5A52C7`; it is not in
the ramp. The rebuild uses the DS value.
