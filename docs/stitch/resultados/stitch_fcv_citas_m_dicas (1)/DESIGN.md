---
name: FCV Citas Clinical System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#43474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777e'
  outline-variant: '#c3c6ce'
  surface-tint: '#49607c'
  primary: '#001428'
  on-primary: '#ffffff'
  primary-container: '#0f2942'
  on-primary-container: '#7991af'
  inverse-primary: '#b0c9e8'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#220e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#401f00'
  on-tertiary-container: '#d77503'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#b0c9e8'
  on-primary-fixed: '#011d35'
  on-primary-fixed-variant: '#314863'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
  data-mono:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system is engineered specifically for clinical reliability, patient tranquility, and administrative rigor within the Colombian healthcare ecosystem. The visual thesis rejects consumer SaaS tropes—such as aggressive drop shadows, vibrant gradient buttons, decorative illustrations, and hyper-saturated accents—in favor of an authoritative, calm, and institutional environment.

The emotional core is defined by:
- **Clinical Serenity:** Muted, purposeful tones that lower cognitive load and reduce anxiety for patients booking medical consultations.
- **Operational Precision:** High-density data tables, unambiguous schedule blocks, and structured validation states for doctors and administrative staff managing high-throughput clinical queues.
- **Institutional Weight:** Grounded deep maritime navies juxtaposed with clinical teals and surgical neutrals, projecting the credibility of a leading hospital and healthcare network.

The aesthetic philosophy fuses **Modern Clinical Functionalism** with **Tonal Structuralism**. Visual hierarchy is governed by strict layout rhythm, precise typographic scales, hairline boundaries, and restrained color coding rather than decorative elevation.

## Colors

The palette enforces strict role clarity, prioritizing accessibility and WCAG AAA compliance across all clinical displays and administrative monitors.

### Functional Tiers & Application
- **Primary (`#0F2942` - Deep Navy):** Used for authoritative typography (titles, table headers), primary navigation surfaces (sidebar), active states in primary navigation, and high-impact actions (confirm booking, admit patient).
- **Secondary / Action Accent (`#0D9488` - Clinical Teal):** Represents verified clinical status, secondary positive actions, selected time slots, and active step indicators.
- **Status Amber (`#D97706` / Tint `#FEF3C7`):** Exclusively reserved for appointments pending verification (`SOLICITADA`) and triage warnings.
- **Status Danger (`#BE123C` / Tint `#FFE4E6`):** Dedicated to critical actions, rejected appointments (`RECHAZADA`), cancellations (`CANCELADA`), and contraindications.
- **Status Slate / Neutral (`#64748B` / Tint `#F1F5F9`):** Represents historical or inactive states (`COMPLETADA`, `NO ASISTIÓ`).
- **Base Surfaces:** Canvas sits on `#F8FAFC`, while actionable work areas, data tables, and forms sit on crisp `#FFFFFF` bounded by structural `#E2E8F0` dividers.

## Typography

The system utilizes **Plus Jakarta Sans** across all roles. Its geometric foundation provides legibility in compact clinical grids, while its humanist apertures introduce an approachable, reassuring tone essential for patient interfaces.

### Typographic Governance
- **Headlines:** Set in semi-bold (600) and bold (700) weights with tight line heights to maintain visual compactness in clinical headers and module titles.
- **Body:** Standard text sits at 14px (`body-md`) with a 20px line-height, optimizing scanning velocity in patient charts and medical summaries.
- **Labels and Status Indicators:** Set in `label-sm` (11px) and `label-md` (12px), capitalized with slight letter spacing (+0.03em) to ensure immediate legibility at reduced scales.
- **Numerical Data:** Patient document numbers (CC/TI), medical record identifiers, and time slots use tabular figures (`font-variant-numeric: tabular-nums`) to align vertically without horizontal drift.

## Layout & Spacing

The layout model is governed by an 8pt architectural rhythm tailored to responsive clinical workflows.

### Structure & Grids
- **Desktop (1280px and above):** Dual-zone layout featuring a permanent vertical sidebar navigation (fixed 260px width) and an expansive fluid operational canvas divided into a 12-column grid with 1rem gutters and 2rem outer margins.
- **Tablet (768px - 1279px):** Collapsible icon-driven rail navigation (fixed 72px) with an 8-column workspace, prioritizing tabular scheduling views and appointment slot allocators.
- **Mobile (below 768px):** Single-column stack with an off-canvas drawer navigation, sticky bottom-sheet actions for critical booking flows, and a dense 4-column sub-grid with 0.75rem gutters.

Component padding and gaps adhere strictly to the `space-*` scale:
- `space-xs` (4px): Badge internal padding, icon-to-label inline gaps.
- `space-sm` (8px): Form input inner vertical padding, slot-selector gaps.
- `space-md` (16px): Card internal padding, table cell vertical spacing.
- `space-lg` (24px): Inter-card gaps, summary section dividers.
- `space-xl` (32px): Major page section breaks and modular panels.

## Elevation & Depth

To avoid visual noise and ensure consistency across low-spec hospital monitors, elevation relies on **Crisp Structural Boundaries and Tonal Depth** rather than heavy blurred shadows.

- **Level 0 (Base Canvas):** Background canvas rendered in `#F8FAFC`. Zero elevation.
- **Level 1 (Clinical Cards & Tables):** Rendered in `#FFFFFF` with a 1px solid border in `#E2E8F0`. No shadow is used; structural separation is achieved solely via tonal contrast against the `#F8FAFC` background.
- **Level 2 (Interactive Flyouts & Datepickers):** Subtle boundary defined by `#E2E8F0` coupled with an ambient clinical shadow: `0px 4px 12px rgba(15, 41, 66, 0.06)`.
- **Level 3 (Modal Confirmation Dialogs & Drawers):** Framed by `#CBD5E1` with a deep, authoritative drop shadow: `0px 12px 32px rgba(15, 41, 66, 0.14)`. Backdrop is tinted with deep navy at 40% opacity (`rgba(15, 41, 66, 0.40)`) with a light 2px blur.

## Shapes

The design system adopts a **Soft Architectural Shape Profile** (`roundedness: 1`). Surfaces, inputs, and containment cards utilize a 4px (`0.25rem`) border radius, while nested modules and larger panels scale to 8px (`0.5rem`). 

This subdued corner radius conveys clinical order, hygiene, and stability, avoiding the overly playful feel of heavily rounded or pill-shaped consumer products. Fully rounded geometry (9999px) is reserved exclusively for small numerical badges and avatar indicators.

## Components

### 1. Navigation Shell & Top Bar
- **Sidebar Navigation:** Institutional navy background (`#0F2942`) with high-contrast, muted white links (`#94A3B8`). Active items feature a crisp `#0D9488` left accent strip (3px) and an elevated tint (`rgba(255, 255, 255, 0.08)`).
- **Clinical Header Bar:** White background (`#FFFFFF`) with a bottom border (`1px solid #E2E8F0`). Houses the current branch/facility selector dropdown (e.g., *Campus Bucaramanga - Floridablanca*), quick doctor/patient switchers, and user credential summaries.

### 2. Appointment Status Badges
Status chips must follow a paired semantic scheme (pastel tint background + high-contrast deep text) and maintain uniform padding (`2px 8px` with radius `4px`):
- **SOLICITADA (Requested):** Background `#FEF3C7`, Text `#92400E`, Border `#FDE68A`.
- **APROBADA (Approved):** Background `#CCFBF1`, Text `#0F766E`, Border `#99F6E4`.
- **RECHAZADA (Rejected):** Background `#FFE4E6`, Text `#9F1239`, Border `#FECDD3`.
- **CANCELADA (Canceled):** Background `#FEE2E2`, Text `#991B1B`, Border `#FECACA`.
- **COMPLETADA (Completed):** Background `#F1F5F9`, Text `#334155`, Border `#E2E8F0`.
- **NO ASISTIÓ (No Show):** Background `#F3F4F6`, Text `#6B7280`, Border `#D1D5DB`.

### 3. Date & Time Slot Selectors
- **Calendar Matrix:** Clean month/week view with weekday headers in navy. Days with available clinical quotas show an unobtrusive teal dot below the date number.
- **Time Slots (30 & 60 Min Blocks):** Rectangular tiles with 1px `#CBD5E1` borders and `#FFFFFF` fill.
  - **Available:** Text `#0F2942`, background `#FFFFFF`. Hover state: `#F0FDFA` with border `#0D9488`.
  - **Selected:** Background `#0D9488`, text `#FFFFFF`, border `#0D9488`.
  - **Occupied / Locked:** Background `#F1F5F9`, text `#94A3B8`, border `#E2E8F0`, cursor `not-allowed`.

### 4. Form Inputs & Selectors
- Text fields and drop-downs feature a clean `#FFFFFF` background, 1px `#CBD5E1` border, and 8px/12px inner padding.
- Focused states transition the border to `#0D9488` with a 2px outer outline at 20% opacity (`rgba(13, 148, 136, 0.2)`).
- Colombian identification dropdowns (CC, TI, CE, Pasaporte) are integrated directly into the document input field as a prefix group to minimize form sprawl.

### 5. Buttons
- **Primary:** Background `#0F2942`, text `#FFFFFF`, hover `#1E3A5F`. Focused on final confirmations and primary submissions.
- **Secondary / Action:** Background `#0D9488`, text `#FFFFFF`, hover `#047857`. Focused on scheduling steps and slot selections.
- **Outline / Neutral:** Border 1px `#CBD5E1`, text `#0F2942`, background `#FFFFFF`, hover `#F8FAFC`.
- **Destructive:** Background `#BE123C`, text `#FFFFFF`, hover `#9F1239`.

### 6. Clinical Summary Cards
Structured panels displaying appointment context (Specialty, Professional, Room, Preparation instructions). Features an off-white header banner (`#F8FAFC`) with subtle metadata labels, followed by a crisp white details zone separated by a 1px `#E2E8F0` divider.

### 7. Confirmation Modals
Centered dialogs with explicit, non-ambiguous action buttons. Destructive actions (e.g., canceling a medical procedure) require explicit acknowledgment and state the institutional cancellation policy clearly before enabling the confirm button.