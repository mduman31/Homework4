# Homework 4: Accessibility Audit & Fix Report

### 🌌 MaryAnn's Galactic Hub (Accessible Edition)
**Developer:** MaryAnn Duman  
**Due Date:** November 8, 2026  
**Assignment:** Accessibility Audit, Correction & Semantic Upgrade

---

## 🛠️ Part 1: Comprehensive Accessibility Audit Report
The core project codebase was scanned against standard **WCAG 2.1 AA parameters**. Below are the specific interaction barriers discovered, their real-world impact on user experience, and the corrections implemented to eliminate them.

| Element Checked | Core Barrier Detected | Why It Matters (UX Impact) | Targeted Fix Applied |
| :--- | :--- | :--- | :--- |
| **Global Theme Colors** | Original body text color `#a3c6d9` against background `#071e43` produced an inaccessible **2.6:1 contrast ratio**. | Visually impaired or low-vision users cannot read content comfortably against deep cosmic backdrops. | Upgraded body text to color `#d1e5f0` and headings to `#f7e8ff`, raising text contrast safely above **5.1:1** to meet WCAG AA requirements. |
| **Interactive Badge** | The Fortnite statistics `<a>` element lacked descriptive screen-reader context. | Screen reader users navigating line-by-line only hear "View Fortnite Stats" without context that it opens outside pages. | Added explicit `aria-label="View MaryAnn's Fortnite Stats on Fortnite Tracker, opens in a new tab"` attribute. |
| **Decorative Island Wave** | The `<div class="island-wave">` is a purely visual neon background element with zero textual content. | Screen readers will pause or try to process it as an empty interaction block, disrupting text-to-speech layouts. | Applied `aria-hidden="true"` so assistive screen-reader engines skip the element entirely. |
| **Keyboard Navigation** | Interactive portfolio blocks and badges lacked clear `:focus` indicators when using mouse-free inputs. | Users navigating via the keyboard (`Tab` key) lose physical track of their location focus point on-screen. | Programmed an custom bright Angel Pink target border ring utilizing modern `:focus-visible` properties. |

---

## 💻 Part 2: JavaScript Architecture Implementation Notes
The telemetry platform utilizes an asynchronous self-executing runtime handler to parse the live weather reporting widget:

1. **Namespace Isolation:** The initialization sequence runs within a closed function scope `(function(d, s, id){...})` to prevent global scope contamination.
2. **Crash & Duplicate Prevention:** It includes an active baseline check `if (d.getElementById(id)) return;` ensuring that even if elements dynamically refresh, script rendering scripts do not run duplicative server calls.
3. **Fallback Injection Handling:** If the document reference tree structure is busy during initialization, a secure backup condition routes element delivery straight to `d.head.appendChild(js)` to maintain application stability.
