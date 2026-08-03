# Build w/AI — AI Builders Weekend Landing Page

> "Turn your ideas into working prototypes in just 48 hours."

A responsive marketing and registration site for **Build w/AI**, a two-day, in-person bootcamp that teaches non-programmers how to use AI tools to design, build, and ship a real software prototype. Built from scratch with vanilla HTML, CSS, and JavaScript as part of [CodePath's WEB101](https://www.codepath.org/) course.

**[Live Demo →](#)** *(coming soon — deploying via GitHub Pages)*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-teal)

---

## About the Project

Build w/AI runs intensive weekend bootcamps for domain experts — people with strong ideas and real-world expertise but no traditional coding background — and teaches them to turn those ideas into a shipped, working MVP in two days using AI-assisted development.

This site is the front door to that community: it explains the event, walks visitors through a full two-day curriculum, and converts interest into signups through a live RSVP form. It was designed and built end-to-end — content strategy, visual design, and front-end implementation — as a solo project.

**The user:** domain experts who are tech-savvy but have never shipped code — people who've had an idea for years and just needed the right tools and a weekend to build it.

**The goal:** take a visitor from "I have an idea" to "I'm registered" in under two minutes, with a clean, professional, and accessible design.

## Features

- **Responsive navigation bar** with anchor links to every section, plus a mailto contact link
- **Dark mode toggle**, powered by a CSS custom-property theme system with dedicated palettes for light and dark mode
- **Hero header** with logo, tagline, and calls to action
- **About section** outlining the event's value proposition and what attendees walk away with
- **Two-day, sprint-by-sprint schedule** rendered in a two-column responsive layout, with a scannable image + timeline for each day
- **Live RSVP form** with:
  - Client-side validation (required fields, minimum length, email format) with visual error states
  - Dynamic DOM updates — new signups are appended to the "who's building with us" list and the live attendee counter increments in real time, with zero page reload
- **Resource library** linking out to every tool used during the bootcamp (Claude, GitHub, Supabase, Vercel) and supporting reading material
- **Embedded video** and social-proof section for visitors who aren't convinced yet
- **Sticky footer** with contact and legal links

## Tech Stack

| Layer | Details |
|---|---|
| Markup | Semantic HTML5 |
| Styling | CSS3 — custom properties (design tokens), Flexbox layouts, `:hover`/`:focus` states, dark-mode theming via class toggling |
| Behavior | Vanilla JavaScript (ES6) — DOM manipulation, event listeners, form validation, no frameworks or build step |

No dependencies, no bundler — open `index.html` in a browser and it runs.

## Getting Started

```bash
git clone https://github.com/cnhsk/cp_web101_project.git
cd cp_web101_project
open index.html   # or just double-click the file / use a Live Server extension
```

## Project Structure

```
cp_web101_project/
├── index.html       # Page structure & content
├── styles.css        # Design tokens, layout, dark mode, component styles
├── index.js          # Dark mode toggle, RSVP form logic & validation
├── img/               # Logo, favicon, schedule graphics, social-proof image
├── LICENSE
└── README.md
```

> **Note:** the `img/` assets (logo, favicon, and schedule graphics) referenced in `index.html` are being finalized and will be added to the repo shortly.

## Design System

A light and dark theme were designed around a teal/slate palette to feel professional and "tech-forward" while staying warm and approachable:

| Token | Light Mode | Dark Mode |
|---|---|---|
| Primary Accent (Teal) | `#008080` | `#20B2AA` |
| Text / Secondary | `#708090` | `#E2E8F0` |
| Background | `#F8F9FA` | `#121212` |
| Surface / Cards | `#FFFFFF` | `#1E1E1E` |

Hover states darken the accent color in light mode and lighten it in dark mode, so interactive elements always read as "alive" against their background.

## What I Learned

This was my first end-to-end web project, and the RSVP form was both the highlight and the biggest challenge. Getting the DOM updates to feel instant and building real client-side form validation (required fields, minimum lengths, email format, and visible error states) pushed me to actually understand JavaScript fundamentals rather than pattern-match my way through — a genuinely humbling process that made me a noticeably stronger developer by the end of it.

## Roadmap

A few features are intentionally scaffolded but not yet complete, tracked directly in the code comments:

- [ ] Scroll-triggered reveal animations as sections enter the viewport
- [ ] Success modal on RSVP submission
- [ ] Add remaining image assets (`img/`)

**Longer-term vision:** open-source this project as a reusable template so any 2-person team, anywhere in the world, can clone the repo, localize the content, and run their own "Build w/AI" event in their own city — starting with mine.

## Course Context

Built as coursework for **CodePath WEB101**, progressing feature-by-feature across the course's project milestones (layout & styling → responsive navigation → dark mode → interactive forms → validation). Thanks to the CodePath WEB101 team for the structure and support, and to the Code With AI community for the inspiration behind this project's premise.

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.

## Author

**Can** — built as part of my journey learning to code with AI.
[GitHub](https://github.com/cnhsk)
