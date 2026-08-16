# 🎂 Happy 18th Birthday Manahil! 💖

A magical, emotional, and interactive birthday surprise website built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies — just love, creativity, and lots of confetti! ✨

---

## 💫 Live Preview

Open `index.html` in any modern browser to experience the full magic. Works perfectly on mobile, tablet, and desktop.

---

## 🌟 Features

| Feature | Description |
|---------|-------------|
| 🎭 **Intro Scene** | "I made something for you" with a cute CSS cat character and animated torn paper |
| 💙 **Heart Toggle** | Interactive YES/NO hearts — NO button runs away, YES unlocks the next step |
| 🔐 **Password Lock** | 4-digit passcode (2008 — her birth year!) to unlock the surprise |
| 🎉 **Birthday Page** | Bouncing colorful text, animated camera frame with cake, and confetti explosion |
| 📋 **Menu Grid** | 6 beautiful cards — Certificate, Love Letter, Wish Jar, Reasons, Gift, Final Words |
| 📜 **Certificate** | Downloadable certificate of recognition with elegant vintage design |
| 💌 **Love Letter** | Handwritten-style emotional letter with polaroid photos |
| 🫙 **Wish Jar** | Click the jar to open, then open 6 mini letters one by one to read wishes |
| 💕 **10 Reasons** | Animated cards listing why she's the best sister ever |
| 🎁 **Surprise Gift** | Tap to unwrap a gift box, touch the beating heart to reveal a typewriter message |
| 🐶 **Final Words** | Cute CSS puppy with a heart button that triggers a final love popup |
| 🎊 **Confetti & Hearts** | Floating particles, confetti explosions, and heart animations throughout |
| 📱 **Fully Responsive** | Perfectly adapts from small phones to large desktop screens |

---

## 📁 File Structure

```
📦 birthday-surprise/
├── 📄 index.html      # Main HTML file (all pages + structure)
├── 🎨 style.css       # Complete styling (pink theme, animations, responsive)
├── ⚡ script.js        # All interactivity (password, jar, gift, confetti, etc.)
└── 📖 README.md       # This file
```

> **No external dependencies required!** (Except Google Fonts loaded via CDN and html2canvas for certificate download)

---

## 🚀 How to Use

### Option 1: Direct Open
1. Save all 3 files (`index.html`, `style.css`, `script.js`) in the **same folder**
2. Double-click `index.html` to open in browser
3. Enjoy the magic! ✨

### Option 2: Host Online (Free)
1. Upload these 3 files to **GitHub Pages**, **Netlify**, or **Vercel**
2. Share the link with Manahil!
3. She can open it on any device — phone, tablet, or laptop

---

## 🎨 Pages Overview

### Page 1 — "I made something for you"
- Cute CSS-only cat character with blinking eyes and wagging tail
- Floating blue flowers and stars in background
- Click **"WHAT??"** to proceed

### Page 2 — "Will you see it??"
- Two beautiful CSS heart toggles: **NO...** and **YES!!!**
- Clicking NO makes it shake, show sad messages, and run away
- Clicking YES triggers confetti and unlocks the password page

### Page 3 — Password Lock
- Hint: "It's your birthday year (2008)"
- Animated numpad with fill effects
- Auto-checks when 4 digits entered
- Wrong code = red shake error | Right code = green unlock + confetti

### Page 4 — Happy Birthday
- Bouncing rainbow "Happy Birthday" text
- Animated camera frame with flickering candle flame
- Name display: **Manahil ❤️**
- Button to enter the surprise menu

### Page 5 — Main Menu
- 6 beautiful cards in a responsive grid
- **Mobile:** 2 columns | **Tablet:** 3 columns | **Desktop:** 6 columns (horizontal, no scroll!)
- Hover effects with floating sparkles

### Page 6 — Certificate
- Elegant vintage certificate design
- Download as PNG image using html2canvas
- Signature line, seal, and date

### Page 7 — Love Letter
- 3 polaroid photos with hover zoom
- Handwritten-style emotional letter
- Wax seal stamp at bottom

### Page 8 — Wish Jar ⭐ NEW!
- **Closed:** Big glass jar with "Click to open the jar!" text
- **Opened:** Jar lid pops off, 6 mini envelopes appear
- Click each envelope to read a wish in a beautiful modal
- Progress tracker: "Opened: X / 6"
- Opening all 6 triggers a grand confetti celebration!

### Page 9 — 10 Reasons
- 10 animated cards that fade in one by one
- Hover to slide and highlight
- Footer: "I could write a thousand more..."

### Page 10 — Surprise Gift
- Shaking gift box with golden ribbon
- Tap to open → reveals a glowing heart
- Touch the heart → typewriter effect reveals a deep emotional message
- Continuous floating hearts in background

### Page 11 — Final Words
- Cute CSS puppy with blushing cheeks and tongue out
- Heartfelt final birthday wish
- Tap the heart button for one last surprise popup

---

## 🎯 Customization Guide

### Change the Name
Find and replace all instances of `Manahil` with your loved one's name in `index.html`.

### Change the Password
In `script.js`, find this line:
```javascript
const correctPasscode = "2008";
```
Change `"2008"` to any 4-digit code you want.

### Change the Theme Color
In `style.css`, replace these color values:
- `#ff4081` → Your primary color (buttons, titles)
- `#ff6b9d` → Your secondary color (borders, highlights)
- `#ffe4ec` → Background stripe color 1
- `#fff0f5` → Background stripe color 2

### Change Wishes in the Jar
In `script.js`, find the `wishTexts` array and edit the 6 messages:
```javascript
const wishTexts = [
    "🌟 Your first wish here...",
    "😊 Your second wish here...",
    // ...etc
];
```

### Change the Magic Message
In `script.js`, find `magicMessageText` and edit the typewriter message.

### Change Age
In `index.html`, find `18th Birthday` and replace with the correct age.

---

## 📱 Responsive Breakpoints

| Screen | Layout |
|--------|--------|
| **< 360px** | Compact mobile (small buttons, stacked grid) |
| **360px - 767px** | Standard mobile (2-column menu, medium cards) |
| **768px - 1023px** | Tablet (3-column menu, larger text) |
| **≥ 1024px** | Desktop (6-column horizontal menu, no scrollbar!) |

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure
- **CSS3** — Grid, Flexbox, Animations, Keyframes, Gradients, Backdrop-filter
- **Vanilla JavaScript** — DOM manipulation, event listeners, timers
- **html2canvas** — Certificate image generation (CDN)
- **Google Fonts** — Pacifico, Dancing Script, Fredoka One, Caveat, Quicksand

---

## 💝 Credits

Made with endless love for **Manahil** by her sister.  
Every line of code is a heartbeat. Every animation is a hug. Every page is a memory. 💕

> *"Nothing beats a digital birthday wish"* — and nothing beats a sister's love.

---

## 📜 License

This project is a personal gift. Feel free to fork and customize for your own loved ones, but please keep the love authentic. 💗

---

**Happy Birthday, Manahil! 🎂✨🎉**
