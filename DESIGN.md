# Design System: OpenBusiness Feature Pages
**Project ID:** 7965057123801997928

## 1. Visual Theme & Atmosphere
The design aesthetic is "Premium SaaS Dark Mode." It feels sophisticated, high-tech, and futuristic yet professional. It uses deep blacks and navy blues as a base, with vibrant purple and indigo accents. The density is medium, with generous whitespace (padding/margins) to allow content to breathe.

## 2. Color Palette & Roles
* **Deep Space Base (#0a0a0f):** The primary background color for the entire page.
* **Vibrant Indigo-Purple (#745bf1):** This is the primary accent color. Used for primary buttons, active states, and focus areas.
* **Muted Midnight Blue (#161625):** Used for cards and secondary section backgrounds to create subtle layering.
* **Cool Gray Foreground (#94a3b8):** Used for primary text to ensure readability with high contrast against the dark background.
* **Subtle Slate Accent (#475569):** Used for secondary text and decorative elements.

## 3. Typography Rules
* **Font Family:** Plus Jakarta Sans for a modern, geometric feel.
* **Headers:** Large, bold, and authoritative. Often uses a subtle gradient from pure white (#ffffff) to a slight silver (#e2e8f0).
* **Body:** Clean and legible with 1.6x line height.
* **Emphasis:** Small uppercase tracking for badges and labels to create a "Dashboard" aesthetic.

## 4. Component Stylings
* **Buttons:** 
    * **Primary:** Generous padding, rounded-lg (approx 12px), background Indigo-Purple, with a soft outer glow.
    * **Secondary:** Transparent background with a fine slate border or semi-transparent white background.
* **Cards/Containers:** 
    * **Glassmorphism:** Subtly rounded corners (12px to 16px).
    * **Border:** Extremely thin 1px border in white/5 or slate/10.
    * **Shadow:** Whisper-soft diffused shadows that blend into the dark background.
* **Icons:** Linear, thin stroke icons (Lucide-style) in Indigo or White.

## 5. Layout Principles
* **Max Width:** Content is usually constrained to a 1280px container.
* **Section Spacing:** Generous vertical padding (py-24 or py-32) between major sections.
* **Grid:** Standard 12-column grid system, often using 3 or 4 column layouts for feature lists.
* **Alignment:** Centered headers with left-aligned or grid-based body content.

---

## 6. Design System Notes for Stitch Generation
When generating new screens, always adhere to the "Premium SaaS Dark Mode" aesthetic.
- **Background:** Strictly `#0a0a0f`.
- **Primary Accent:** `#745bf1`.
- **Rounding:** `ROUND_EIGHT` or `ROUND_TWELVE`.
- **Typography:** `PLUS_JAKARTA_SANS`.
- **Components:** Use glass-cards with thin borders and shadow-2xl.
- **Visuals:** Use Lucide icons and subtle grit/grain or grid patterns in the background for depth.
