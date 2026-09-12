# AuraVox (Text-to-Speech Application) — Design System

## 1. Design Philosophy

The application uses a **professional, minimal, modern light-theme glassmorphism design**.

The visual language should communicate:

* Simplicity
* Reliability
* Accessibility
* Modern SaaS quality
* Calmness
* Technical professionalism

The design must keep the TTS workflow as the visual priority without adding unnecessary decorative elements.

Core principle:

> **Minimal interface + subtle glass depth + strong typography + restrained color usage.**

The design should look premium without becoming visually heavy.

---

## 2. Theme

### Primary Theme

**Light only**

The application uses a clean light background with translucent white surfaces and very subtle ambient gradients.

### Overall Mood

```text
Clean
Airy
Soft
Professional
Modern
Focused
```

Avoid a colorful or playful appearance.

---

## 3. Color Palette

### Base Colors

```text
Background Primary:    #F7F9FC
Background Secondary:  #EEF2F7

Surface:               #FFFFFF
Surface Glass:         rgba(255,255,255,0.70)
Surface Glass Strong:  rgba(255,255,255,0.82)

Border:                rgba(148,163,184,0.22)
Border Strong:         rgba(148,163,184,0.35)
Glass Border:          rgba(255,255,255,0.65)
```

### Text Colors

```text
Text Primary:          #111827
Text Secondary:        #374151
Text Muted:            #6B7280
Text Placeholder:      #9CA3AF
Text Disabled:         #CBD5E1
```

### Brand / Accent

Use one primary accent throughout the application.

```text
Primary:               #4F46E5
Primary Hover:         #4338CA
Primary Active:        #3730A3
Primary Soft:          #EEF2FF
Primary Light:         #E0E7FF
```

The primary color should mainly be used for:

* Primary actions
* Active states
* Focus states
* Selected controls
* Important links
* Progress indicators

---

## 4. Status Colors

Use status colors only for meaningful system feedback.

```text
Success:
#16A34A
Background: #F0FDF4

Warning:
#D97706
Background: #FFFBEB

Error:
#DC2626
Background: #FEF2F2

Info:
#2563EB
Background: #EFF6FF
```

Status colors should never dominate the interface.

---

## 5. Background Treatment

The main background should be mostly neutral.

Use very subtle ambient gradients:

```css
background:
  radial-gradient(
    circle at 10% 10%,
    rgba(79,70,229,0.07),
    transparent 32%
  ),
  radial-gradient(
    circle at 90% 90%,
    rgba(14,165,233,0.05),
    transparent 30%
  ),
  #F7F9FC;
```

Rules:

* Gradients must remain subtle.
* Never use saturated gradients.
* Never use gradient text.
* Never cover the entire UI with colorful effects.

The background should remain visually quiet.

---

# 6. Glassmorphism

Glassmorphism is a supporting design technique, not the entire design.

## Standard Glass

```css
background: rgba(255,255,255,0.70);
backdrop-filter: blur(18px);
-webkit-backdrop-filter: blur(18px);
border: 1px solid rgba(255,255,255,0.65);
box-shadow:
  0 8px 30px rgba(15,23,42,0.06);
```

## Strong Glass

```css
background: rgba(255,255,255,0.82);
backdrop-filter: blur(22px);
-webkit-backdrop-filter: blur(22px);
border: 1px solid rgba(255,255,255,0.75);
box-shadow:
  0 16px 40px rgba(15,23,42,0.08);
```

## Glass Rules

Use glass for:

* Major surfaces
* Navigation surfaces
* Main content containers
* Result containers
* Secondary cards
* Overlays
* Dropdowns

Do not use glass for every individual element.

Avoid stacking multiple translucent glass layers.

---

# 7. Shadows

Use soft, low-contrast shadows.

### Small

```text
0 2px 8px rgba(15,23,42,0.04)
```

### Medium

```text
0 8px 24px rgba(15,23,42,0.06)
```

### Large

```text
0 16px 40px rgba(15,23,42,0.08)
```

Shadows should create depth, not obvious floating effects.

---

# 8. Typography

## Font

Preferred:

```text
Inter
```

Fallback:

```text
ui-sans-serif,
system-ui,
sans-serif
```

## Font Weights

```text
400 — Regular
500 — Medium
600 — Semibold
700 — Bold
```

Avoid unnecessary use of 800/900 weights.

## Scale

```text
XS:      12px
SM:      13px
Base:    15px
LG:      16px
XL:      18px
2XL:     22px
3XL:     28px
4XL:     36px
```

The interface should primarily use:

```text
13px
15px
16px
18px
22px
28px
```

Use 36px only for major application-level headings.

---

# 9. Typography Rules

Headings:

```text
font-weight: 700
color: #111827
```

Body:

```text
font-weight: 400
color: #374151
```

Secondary information:

```text
font-weight: 400/500
color: #6B7280
```

Labels:

```text
font-weight: 500/600
color: #374151
```

Do not use all-caps headings throughout the application.

---

# 10. Spacing System

Use an 8px spacing system.

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
```

Recommended usage:

```text
4px  — icon/text micro spacing
8px  — compact spacing
12px — control spacing
16px — normal spacing
24px — component spacing
32px — section spacing
48px — major section spacing
64px — page-level spacing
```

Avoid arbitrary spacing values unless necessary.

---

# 11. Border Radius

Use consistent rounding.

```text
Small Controls:       10px
Inputs:               12px
Buttons:              12px
Cards:                16px
Large Containers:     20px
Primary Glass Panels: 24px
Modal / Overlay:      20px
```

Do not make every element pill-shaped.

Pill shapes should be reserved for:

* Status badges
* Compact tags
* Small metadata indicators

---

# 12. Inputs

Inputs should appear clean and slightly elevated from the glass surface.

### Default

```text
Background:
rgba(255,255,255,0.75)

Border:
1px solid rgba(148,163,184,0.25)

Radius:
12px
```

### Focus

```text
Border:
#4F46E5

Focus Ring:
0 0 0 4px rgba(79,70,229,0.10)
```

### Disabled

Reduce contrast and interaction visibility.

### Placeholder

```text
#9CA3AF
```

Inputs must never rely exclusively on placeholder text for labels.

---

# 13. Textarea

The textarea is a major input control and should feel spacious.

Characteristics:

```text
Comfortable padding
Generous vertical space
Clear focus state
Minimal border
Soft background
```

The textarea should visually communicate that large text can be entered without becoming visually dominant.

---

# 14. Buttons

## Primary Button

Used for the main application action.

```text
Background: #4F46E5
Text: #FFFFFF
Radius: 12px
Height: 44–48px
Font Weight: 600
```

Hover:

```text
#4338CA
```

Active:

```text
#3730A3
```

Add a subtle shadow on hover.

---

## Secondary Button

```text
Background: rgba(255,255,255,0.75)
Border: 1px solid rgba(148,163,184,0.28)
Text: #374151
```

Used for secondary operations.

---

## Ghost Button

```text
Background: transparent
Text: #4F46E5
```

Used for low-emphasis actions.

---

## Danger Button

Only for destructive actions.

```text
Text: #DC2626
```

Do not make destructive actions visually stronger than primary application actions.

---

# 15. Button States

Every interactive button must support:

```text
Default
Hover
Active
Focus
Disabled
Loading
```

Loading state should use:

```text
Spinner + descriptive text
```

Example:

```text
Generating...
```

Never leave the user wondering whether an action was triggered.

---

# 16. Select / Dropdown

Dropdowns should visually match input components.

Characteristics:

```text
Rounded
White/glass surface
Soft shadow
Clear selected state
Subtle hover state
Visible chevron
```

Selected option:

```text
background: #EEF2FF
text: #3730A3
```

Do not make dropdowns excessively large.

---

# 17. Cards

Cards should be lightweight.

### Standard Card

```text
Background:
rgba(255,255,255,0.70)

Border:
1px solid rgba(255,255,255,0.65)

Radius:
16px

Shadow:
0 8px 30px rgba(15,23,42,0.05)
```

Cards should group related information rather than being used around every small component.

---

# 18. Navigation

Navigation should be visually subtle.

Recommended characteristics:

```text
Sticky
Light glass surface
Soft bottom border
Moderate blur
Minimal controls
```

Navigation should never compete with the primary application content.

---

# 19. Icons

Use one consistent icon library.

Recommended:

```text
Lucide React
```

Icon characteristics:

```text
16px — compact controls
18px — normal controls
20px — primary controls
24px — larger visual elements
```

Use stroke-based icons consistently.

Avoid mixing outlined, filled and 3D icon styles.

---

# 20. Icon Usage

Recommended icon language:

```text
Play
Pause
Volume
Download
Trash
History
User
Log out
Chevron
Check
Alert
Info
Loader
```

Icons should support meaning, not replace important text.

---

# 21. Audio Visual Language

Generated audio should visually feel like the successful result of the primary workflow.

The audio component should use:

* Clean controls
* Clear play/pause state
* Simple progress indicator
* Volume control
* Download action
* Minimal waveform decoration if used

Avoid exaggerated waveform animations.

Audio animation should be subtle and purposeful.

---

# 22. Loading States

Use skeletons or compact spinners depending on context.

For short operations:

```text
Spinner
```

For larger sections:

```text
Skeleton
```

Loading states must preserve layout dimensions to avoid UI jumping.

---

# 23. Error States

Errors should be clear, calm and actionable.

Use:

```text
Icon
Short title/message
Optional recovery action
```

Example design hierarchy:

```text
[ Error Icon ]

Something went wrong

We couldn't generate the speech.
Please try again.

[ Try Again ]
```

Avoid:

```text
Stack traces
Raw API errors
Technical exception messages
Unnecessary error codes
```

Technical details may be logged by the backend but should not dominate the UI.

---

# 24. Success States

Successful operations should use subtle positive feedback.

Example:

```text
✓ Speech generated successfully
```

Do not use large celebratory animations.

Success feedback should quickly return attention to the generated audio.

---

# 25. Empty States

Empty states should be minimal.

Structure:

```text
Small icon/illustration
Short heading
One-line explanation
Optional primary action
```

Avoid oversized illustrations.

---

# 26. Modals and Dialogs

Use only when necessary.

Style:

```text
Background: rgba(255,255,255,0.90)
Backdrop blur: 20px
Radius: 20px
Shadow: large soft shadow
```

Backdrop:

```text
rgba(15,23,42,0.20)
```

Dialogs should have:

```text
Clear heading
Short description
Primary action
Secondary/cancel action
```

---

# 27. Badges

Use badges only for compact metadata.

Example:

```text
English
Female
Generated
```

Badge style:

```text
background: #EEF2FF
color: #4338CA
border-radius: 9999px
padding: 4px 10px
font-size: 12px
font-weight: 500
```

Avoid excessive badge usage.

---

# 28. Dividers

Prefer spacing over visible dividers.

When a divider is needed:

```text
border-color:
rgba(148,163,184,0.18)
```

Dividers should remain subtle.

---

# 29. Responsive Principles

The design must work seamlessly across:

```text
Mobile
Tablet
Desktop
Large Desktop
```

### Mobile

Prioritize:

```text
Readable typography
Large touch targets
Single-column controls
Reduced spacing
Minimal navigation
```

### Desktop

Use:

```text
More whitespace
Larger content area
Comfortable panel widths
Balanced horizontal spacing
```

Do not simply scale the desktop UI down for mobile.

---

# 30. Accessibility

All components must maintain:

* Visible keyboard focus
* Proper contrast
* Semantic HTML
* Accessible labels
* Accessible button names
* Keyboard navigation
* Screen-reader-friendly state changes

Minimum interactive target:

```text
44px
```

Focus indicators must never be removed.

---

# 31. Motion

Motion should be subtle and short.

Recommended duration:

```text
150ms
200ms
250ms
```

Recommended easing:

```text
ease-out
```

Use animation for:

```text
Hover
Focus
Modal entry
Dropdown entry
Loading
State transition
```

Avoid:

```text
Bouncing
Large scaling
Continuous floating
Excessive parallax
Aggressive gradients
```

---

# 32. Glassmorphism Restrictions

Never combine:

```text
Heavy blur
Heavy shadow
Strong gradient
Strong border
```

on the same component.

Glass surfaces should normally use:

```text
1 subtle background
+
1 subtle border
+
1 soft shadow
```

This keeps the UI premium rather than noisy.

---

# 33. Visual Hierarchy

The application should always follow this hierarchy:

```text
Primary action
        ↓
Primary content
        ↓
Supporting controls
        ↓
Secondary information
        ↓
Metadata
```

Primary elements should have:

```text
stronger contrast
larger visual weight
higher accessibility priority
```

Secondary elements should remain visually quiet.

---

# 34. Design Tokens

Centralize all visual values.

Recommended token groups:

```text
colors
typography
spacing
radius
shadow
blur
transition
breakpoints
```

Do not scatter arbitrary values throughout components.

Example:

```css
:root {
  --color-background: #F7F9FC;
  --color-surface: rgba(255,255,255,0.70);
  --color-primary: #4F46E5;
  --color-text-primary: #111827;
  --color-text-secondary: #374151;
  --color-text-muted: #6B7280;

  --radius-sm: 10px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  --shadow-sm: 0 2px 8px rgba(15,23,42,0.04);
  --shadow-md: 0 8px 24px rgba(15,23,42,0.06);
  --shadow-lg: 0 16px 40px rgba(15,23,42,0.08);

  --transition-fast: 150ms ease-out;
  --transition-normal: 200ms ease-out;
}
```

---

# 35. Tailwind Usage Rules

Prefer reusable Tailwind patterns.

Use:

```text
rounded-xl
rounded-2xl
border
shadow-sm
shadow-md
backdrop-blur
transition
duration-200
```

Avoid excessive arbitrary values such as:

```text
mt-[13px]
rounded-[17px]
shadow-[...]
```

unless the value has a deliberate design reason.

Create reusable component classes/components for frequently repeated UI patterns.

---

# 36. Component Consistency

Components sharing the same purpose must look identical.

Examples:

```text
All inputs → same height/radius/focus style
All primary buttons → same visual treatment
All secondary buttons → same treatment
All cards → same base surface
All dropdowns → same structure
All errors → same visual language
```

Do not redesign individual components independently.

---

# 37. Visual Density

Target density:

```text
Medium-light
```

The UI should have enough whitespace to breathe.

Avoid:

```text
Too much empty space
Too many controls
Dense dashboard layouts
Multiple nested containers
```

Each visible element must serve a purpose.

---

# 38. Decorative Elements

Permitted:

```text
Very subtle gradient blobs
Soft ambient glow
Minimal audio-wave motifs
Small geometric accents
```

Not permitted as the primary visual identity:

```text
3D illustrations
Large floating objects
Heavy neon glow
Complex background patterns
Animated particles
```

Decoration should disappear into the background rather than becoming the focus.

---

# 39. Design Quality Standard

Before considering a component complete, verify:

```text
✓ Clear hierarchy
✓ Consistent spacing
✓ Consistent typography
✓ Correct glass treatment
✓ Strong focus state
✓ Responsive behavior
✓ Loading state
✓ Disabled state
✓ Error state
✓ Accessible labels
✓ No unnecessary decoration
```

---

# 40. Final Design Identity

The final visual identity should be:

```text
LIGHT
+
GLASS
+
MINIMAL
+
PROFESSIONAL
+
MODERN
+
ACCESSIBLE
```

The interface should feel like a polished SaaS productivity tool rather than a generic student project.

The most important rule is:

> **Glassmorphism should create depth, not distraction.**
