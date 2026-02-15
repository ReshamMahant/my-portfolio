# Portfolio Website Development Plan - Resham Mahant

## Project Overview
Build a modern, minimal portfolio website following Google's Material Design 3 (Material You) principles. The site will showcase Resham Mahant's work as an AI/ML professional with a clean, professional aesthetic matching Google's official website design language.

---

## Design System Specifications

### Typography
- **Primary Font**: Google Sans (Google's proprietary font family)
  - Use via Google Fonts: `Google Sans`, fallback to `Product Sans` or `Roboto`
  - Headings: Google Sans Display (Medium/Bold, 400-700 weight)
  - Body: Google Sans Text (Regular, 400 weight)
  - Code/Technical: Roboto Mono

- **Type Scale** (Material Design 3):
  - Display Large: 57px / 64px line height
  - Headline Large: 32px / 40px line height
  - Headline Medium: 28px / 36px line height
  - Title Large: 22px / 28px line height
  - Body Large: 16px / 24px line height
  - Body Medium: 14px / 20px line height
  - Label Large: 14px / 20px line height

### Color Palette (Material Design 3 - Google's Scheme)
Follow Material You dynamic color system:

**Light Theme:**
- Primary: `#1A73E8` (Google Blue)
- On Primary: `#FFFFFF`
- Primary Container: `#D3E3FD`
- On Primary Container: `#001C38`
- Secondary: `#5F6368` (Google Grey)
- On Secondary: `#FFFFFF`
- Surface: `#FFFFFF`
- On Surface: `#1F1F1F`
- Surface Variant: `#F8F9FA`
- On Surface Variant: `#5F6368`
- Outline: `#DADCE0`
- Background: `#FEFEFE`
- Error: `#D93025` (Google Red)

**Dark Theme (Optional):**
- Primary: `#8AB4F8` (Light Google Blue)
- On Primary: `#003258`
- Surface: `#1F1F1F`
- On Surface: `#E3E3E3`
- Background: `#121212`

**Accent Colors:**
- Google Green: `#34A853`
- Google Yellow: `#FBBC04`
- Google Red: `#EA4335`

### Spacing System (8px base unit)
- XXS: 4px (0.25rem)
- XS: 8px (0.5rem)
- SM: 12px (0.75rem)
- MD: 16px (1rem)
- LG: 24px (1.5rem)
- XL: 32px (2rem)
- 2XL: 48px (3rem)
- 3XL: 64px (4rem)
- 4XL: 96px (6rem)

### Border Radius (Material Design 3)
- None: 0px
- Extra Small: 4px
- Small: 8px
- Medium: 12px
- Large: 16px
- Extra Large: 28px
- Full: 9999px (for pills/circular elements)

### Elevation & Shadows (Material Design 3)
```css
/* Level 1 */
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);

/* Level 2 */
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);

/* Level 3 */
box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);

/* Level 4 */
box-shadow: 0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3);

/* Level 5 */
box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);
```

---

## Site Structure

### Pages/Sections
1. **Hero Section** - Landing/Introduction
2. **About** - Brief bio and skills overview
3. **Education** - Academic background
4. **Experience** - Internships and work history
5. **Projects** - Portfolio of projects with details
6. **Skills** - Technical skills categorized
7. **Certifications** - Professional certifications
8. **Contact** - Contact information and social links

---

## Component Specifications

### 1. Navigation Bar
**Type:** Fixed top navigation with Material Design elevation

**Features:**
- Logo/Name on the left
- Navigation links on the right (smooth scroll to sections)
- Mobile: Hamburger menu with slide-out drawer
- Elevation: Level 2 shadow
- Background: Surface color with backdrop blur
- Height: 64px desktop, 56px mobile

**Implementation:**
```html
<nav class="md-top-app-bar">
  <div class="nav-content">
    <h1 class="logo">Resham Mahant</h1>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <button class="menu-icon" aria-label="Menu">☰</button>
  </div>
</nav>
```

**Styling:**
- Use Material Design 3 state layers for hover/active states
- Ripple effect on click (use Material Web Components or custom CSS)
- Smooth color transitions

---

### 2. Hero Section
**Design:** Full viewport height with centered content

**Content:**
- Name (Display Large typography)
- Title/Role: "AI & Machine Learning Engineer"
- Location: Nagpur, Maharashtra
- Tagline/Brief intro
- CTA buttons: "View Projects" (Filled button) + "Download Resume" (Outlined button)
- Optional: Subtle animated background (gradient mesh or geometric shapes)

**Layout:**
```
[Centered Container]
  - Animated entrance for name (fade + slide up)
  - Subtitle with typing effect or fade-in
  - Button group with stagger animation
  - Scroll indicator at bottom
```

**Styling:**
- Background: Subtle gradient (light) or solid color
- Use Material Motion (easing curves): `cubic-bezier(0.4, 0.0, 0.2, 1)`
- Buttons: Material Design 3 filled and outlined variants

---

### 3. About Section
**Layout:** Two-column layout (desktop), single column (mobile)

**Content:**
- Left: Professional photo/avatar (optional, can use Material Design icon or illustration)
- Right: Bio paragraph, key highlights, contact info

**Design Elements:**
- Material Design 3 card component with Level 1 elevation
- Icon buttons for social links (GitHub, LinkedIn, Email)
- Use Surface Container color for card background

---

### 4. Education Section
**Design:** Timeline or card layout

**Content:**
- Institution: G.H. Raisoni Institute of Engineering and Technology
- Degree: B.Tech in Artificial Intelligence
- Duration: 2021 - 2025
- CGPA: 6.50
- Location: Nagpur, India

**Implementation:**
```html
<div class="education-card md-card">
  <div class="card-header">
    <h3>Bachelor of Technology in Artificial Intelligence</h3>
    <span class="duration">2021 - 2025</span>
  </div>
  <p class="institution">G.H. Raisoni Institute of Engineering and Technology</p>
  <div class="details">
    <span class="cgpa">CGPA: 6.50</span>
    <span class="location">Nagpur, India</span>
  </div>
</div>
```

**Styling:**
- Use Material Design card with rounded corners (12px)
- Hover effect: Subtle elevation increase (Level 1 → Level 2)

---

### 5. Experience Section
**Layout:** Timeline design with alternating cards (desktop), vertical stack (mobile)

**Each Experience Card Contains:**
- Company name and logo (if available)
- Role/Position
- Duration
- Location
- Key responsibilities (bullet points)

**Experiences to include:**
1. **Unisoft Technologies** - Data Analysis (June 2025 - Present)
2. **HARLogic** - ML Intern (Dec 2024 - May 2025)
3. **1stop.ai** - ML Intern (July 2024 - Aug 2024)

**Design:**
- Material Design list items with dividers
- Or Material Design cards with Level 1 elevation
- Icon or avatar for each company
- Use Primary Container color for current role badge

---

### 6. Projects Section
**Layout:** Grid layout (3 columns desktop, 2 tablet, 1 mobile)

**Each Project Card:**
- Project name (Title Large)
- Technology tags (Material Design chips)
- Brief description (2-3 lines)
- Optional: Project image/thumbnail
- "Learn More" button (text button or outlined)

**Projects:**
1. **EmoGuard** (2024)
   - Tags: DeepFace, Flutter, Firebase, AI
   - Description: AI-powered mental health detection system

2. **Oral Healthcare Detection** (2023)
   - Tags: Python, OpenCV, scikit-learn, ML
   - Description: Oral cancer detection using ML

3. **Smart Claim Management System** (2022)
   - Tags: Python, ML, Regression
   - Description: Fraud detection for insurance claims

**Styling:**
- Material Design cards with medium border radius (12px)
- Hover: Elevation Level 2, subtle scale transform
- Tags: Material Design filter chips
- Image: Aspect ratio 16:9, object-fit: cover

---

### 7. Skills Section
**Layout:** Categorized skill groups with visual indicators

**Categories:**
1. **Languages:** Python, Java, C, HTML, CSS, SQL, JavaScript
2. **Developer Tools:** VS Code, IntelliJ IDEA, Jupyter Notebook, Google Colab
3. **Technologies/Frameworks:** GitHub, Git, CNN, Figma
4. **Coursework:** DSA, ML, DBMS, AI, OOPS

**Design Options:**
- **Option A:** Chip groups (Material Design filter chips)
- **Option B:** Progress bars with proficiency levels
- **Option C:** Icon grid with labels

**Recommended:** Material Design chips organized by category with section headers

```html
<div class="skills-section">
  <div class="skill-category">
    <h3 class="category-title">Languages</h3>
    <div class="chip-group">
      <span class="md-chip">Python</span>
      <span class="md-chip">Java</span>
      <span class="md-chip">C</span>
      <!-- etc -->
    </div>
  </div>
</div>
```

---

### 8. Certifications Section
**Layout:** Grid or list with certification cards

**Certifications:**
- Python
- Application of AI Predictive Maintenance - NVIDIA
- Building Transformer-Based NLP Applications - NVIDIA
- Fundamentals of Accelerated Computing with CUDA Python - NVIDIA
- Fundamentals of Deep Learning - NVIDIA
- Microsoft Introduction to Generative AI
- Automation 360

**Design:**
- Material Design list items with leading icons/badges
- Provider logos (NVIDIA, Microsoft, etc.)
- Compact cards with Level 1 elevation
- Option to expand for certificate details/verification

---

### 9. Contact Section
**Layout:** Centered content with contact cards

**Content:**
- Email: reshu.mahant.2103@gmail.com
- Phone: +91-9766365640
- LinkedIn, GitHub, Portfolio links
- Optional: Contact form (if needed)

**Design:**
- Material Design icon buttons for social links
- Large, tappable contact cards
- Primary color accents for CTAs
- Optional: Embedded map or location indicator

**Social Links:**
- LinkedIn: [Profile URL from resume]
- GitHub: [Profile URL from resume]
- Portfolio: [If applicable]

---

## Technical Implementation

### Framework Choice
**Recommended:** Pure HTML, CSS, JavaScript (for simplicity and performance)
**Alternative:** React with Material-UI (MUI) v5 (if interactivity needed)

### File Structure
```
portfolio/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css (Design tokens)
│   ├── typography.css
│   ├── components.css
│   ├── layout.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   └── animations.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── resume.pdf
└── README.md
```

### CSS Variables Setup
```css
:root {
  /* Colors */
  --md-sys-color-primary: #1A73E8;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-primary-container: #D3E3FD;
  --md-sys-color-surface: #FFFFFF;
  --md-sys-color-on-surface: #1F1F1F;
  --md-sys-color-surface-variant: #F8F9FA;
  --md-sys-color-outline: #DADCE0;
  
  /* Typography */
  --md-sys-typescale-display-large-size: 57px;
  --md-sys-typescale-headline-large-size: 32px;
  --md-sys-typescale-body-large-size: 16px;
  
  /* Spacing */
  --md-sys-spacing-xs: 8px;
  --md-sys-spacing-md: 16px;
  --md-sys-spacing-lg: 24px;
  --md-sys-spacing-xl: 32px;
  
  /* Border Radius */
  --md-sys-shape-corner-small: 8px;
  --md-sys-shape-corner-medium: 12px;
  --md-sys-shape-corner-large: 16px;
  
  /* Elevation */
  --md-sys-elevation-level1: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  --md-sys-elevation-level2: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
}
```

---

## Material Design Components to Implement

### 1. Buttons
**Variants:**
- **Filled:** Primary CTA (solid background)
- **Outlined:** Secondary action (border only)
- **Text:** Tertiary action (no border/background)

**Implementation:**
```css
.md-button-filled {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  padding: 10px 24px;
  border-radius: var(--md-sys-shape-corner-full);
  border: none;
  font: var(--md-sys-typescale-label-large);
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.md-button-filled:hover {
  box-shadow: var(--md-sys-elevation-level1);
  transform: translateY(-1px);
}
```

### 2. Cards
**Standard Material Card:**
```css
.md-card {
  background: var(--md-sys-color-surface);
  border-radius: var(--md-sys-shape-corner-medium);
  padding: 16px;
  box-shadow: var(--md-sys-elevation-level1);
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.md-card:hover {
  box-shadow: var(--md-sys-elevation-level2);
  transform: translateY(-2px);
}
```

### 3. Chips
**Filter/Input Chips:**
```css
.md-chip {
  display: inline-block;
  background: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-on-surface-variant);
  padding: 6px 12px;
  border-radius: var(--md-sys-shape-corner-small);
  font-size: 14px;
  margin: 4px;
  transition: background 0.2s;
}

.md-chip:hover {
  background: var(--md-sys-color-primary-container);
}
```

---

## Animation & Interactions

### Material Motion Principles
**Easing Curves:**
- Standard: `cubic-bezier(0.4, 0.0, 0.2, 1)` - 300ms
- Decelerate: `cubic-bezier(0.0, 0.0, 0.2, 1)` - 250ms
- Accelerate: `cubic-bezier(0.4, 0.0, 1, 1)` - 200ms

### Key Animations
1. **Page Load:**
   - Stagger fade-in for sections (100ms delay between each)
   - Hero content: fade + slide up

2. **Scroll Animations:**
   - Fade in on scroll for each section
   - Use Intersection Observer API

3. **Hover States:**
   - Cards: Elevation increase + subtle translate
   - Buttons: Shadow + slight scale
   - Links: Underline animation

4. **Navigation:**
   - Smooth scroll to sections
   - Active section indicator in nav

**Example Scroll Animation:**
```javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

---

## Responsive Design

### Breakpoints (Material Design)
```css
/* Mobile First */
@media (min-width: 600px) { /* Tablet */ }
@media (min-width: 905px) { /* Desktop Small */ }
@media (min-width: 1240px) { /* Desktop Large */ }
@media (min-width: 1440px) { /* Desktop XL */ }
```

### Layout Guidelines
**Mobile (<600px):**
- Single column layout
- Hamburger menu
- Stacked sections
- Full-width cards
- 16px side padding

**Tablet (600px - 904px):**
- Two-column grid where applicable
- Expanded navigation (if space permits)
- 24px side padding

**Desktop (≥905px):**
- Multi-column layouts
- Horizontal navigation
- Max content width: 1200px
- Centered container with auto margins
- 48px side padding

---

## Performance Optimization

### Best Practices
1. **Images:**
   - Use WebP format with fallbacks
   - Lazy loading for below-fold images
   - Responsive images with srcset

2. **Fonts:**
   - Load Google Fonts with `font-display: swap`
   - Subset fonts to needed characters
   - Preconnect to fonts.googleapis.com

3. **CSS:**
   - Minimize and combine CSS files
   - Use CSS containment for sections
   - Avoid expensive properties (box-shadow in animations)

4. **JavaScript:**
   - Defer non-critical scripts
   - Use passive event listeners for scroll
   - Debounce scroll events

5. **General:**
   - Enable compression (gzip/brotli)
   - Minify HTML/CSS/JS
   - Optimize critical rendering path

---

## Accessibility (a11y)

### WCAG 2.1 AA Compliance
1. **Color Contrast:**
   - Text on background: 4.5:1 minimum
   - Large text: 3:1 minimum
   - Use Material Design color system (built-in contrast)

2. **Keyboard Navigation:**
   - All interactive elements focusable
   - Visible focus indicators
   - Skip to content link

3. **Semantic HTML:**
   - Proper heading hierarchy (h1 → h6)
   - ARIA labels where needed
   - Alt text for images

4. **Screen Reader Support:**
   - Descriptive link text (avoid "click here")
   - Form labels
   - ARIA landmarks (nav, main, footer)

5. **Motion:**
   - Respect `prefers-reduced-motion`
   - Disable animations for users who prefer reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Content Strategy

### Writing Tone
- Professional but approachable
- Clear and concise
- Action-oriented (use active voice)
- Technical but accessible

### Key Messages
1. **Hero:** "AI & Machine Learning Engineer specializing in intelligent solutions"
2. **About:** Highlight passion for AI/ML, problem-solving approach
3. **Projects:** Emphasize real-world impact and technical skills
4. **Experience:** Focus on achievements and technologies mastered

### Call-to-Actions
- "View My Projects"
- "Download Resume"
- "Get In Touch"
- "See My Work"
- "Let's Connect"

---

## Additional Features (Optional Enhancements)

### 1. Dark Mode Toggle
- Use CSS custom properties for theme switching
- Store preference in localStorage
- Material Design dark theme colors

### 2. Project Modals/Detail Pages
- Expandable project cards
- Full project descriptions
- Screenshots/demos
- GitHub links

### 3. Contact Form
- Material Design text fields
- Client-side validation
- Form submission (integrate with Formspree or similar)

### 4. Blog Section (Future)
- Technical articles
- Project case studies
- Learning resources

### 5. Testimonials/Recommendations
- If available from internships
- Material Design quote cards

---

## Implementation Checklist

### Phase 1: Setup & Structure
- [ ] Create project folder structure
- [ ] Set up HTML skeleton with semantic sections
- [ ] Link Google Fonts (Google Sans, Roboto)
- [ ] Create CSS variables file with Material Design tokens
- [ ] Set up responsive meta tags and viewport

### Phase 2: Core Components
- [ ] Implement navigation bar (with mobile menu)
- [ ] Build hero section with animations
- [ ] Create reusable Material Design components (buttons, cards, chips)
- [ ] Implement typography system

### Phase 3: Content Sections
- [ ] About section
- [ ] Education section
- [ ] Experience timeline/cards
- [ ] Projects grid
- [ ] Skills section with chips
- [ ] Certifications list
- [ ] Contact section

### Phase 4: Interactivity
- [ ] Smooth scroll navigation
- [ ] Scroll animations (Intersection Observer)
- [ ] Hover states and transitions
- [ ] Mobile menu toggle
- [ ] Form validation (if contact form included)

### Phase 5: Polish & Optimization
- [ ] Test responsive layouts on all breakpoints
- [ ] Optimize images and assets
- [ ] Implement lazy loading
- [ ] Add accessibility features (ARIA, keyboard nav)
- [ ] Cross-browser testing
- [ ] Performance audit (Lighthouse)

### Phase 6: Deployment
- [ ] Choose hosting platform (GitHub Pages, Netlify, Vercel)
- [ ] Set up custom domain (optional)
- [ ] Configure SEO meta tags
- [ ] Add analytics (optional)
- [ ] Test live site on multiple devices

---

## Resources & References

### Official Material Design 3 Resources
- **Design Guidelines:** https://m3.material.io/
- **Color System:** https://m3.material.io/styles/color/overview
- **Typography:** https://m3.material.io/styles/typography/overview
- **Components:** https://m3.material.io/components
- **Material Symbols:** https://fonts.google.com/icons

### Google Fonts
- **Google Sans:** https://fonts.google.com/specimen/Google+Sans (Use Product Sans as alternative)
- **Roboto:** https://fonts.google.com/specimen/Roboto
- **Roboto Mono:** https://fonts.google.com/specimen/Roboto+Mono

### Development Tools
- **Material Theme Builder:** https://material-foundation.github.io/material-theme-builder/
- **Material Color Tool:** https://material.io/resources/color/
- **Figma Material Design 3 Kit:** For design mockups

### Code Libraries (Optional)
- **Material Web Components:** https://github.com/material-components/material-web
- **Material-UI (React):** https://mui.com/
- **Animate On Scroll:** https://michalsnik.github.io/aos/

---

## Success Metrics

### User Experience Goals
1. **Fast Load Time:** < 2 seconds on 3G
2. **Lighthouse Score:** > 90 for all metrics
3. **Mobile Friendly:** Pass Google Mobile-Friendly Test
4. **Accessibility:** WCAG 2.1 AA compliant

### Visual Quality Goals
1. Consistent Material Design 3 aesthetic throughout
2. Smooth, performant animations (60fps)
3. Perfect responsive behavior across all devices
4. Professional, modern appearance comparable to Google's official sites

---

## Example Code Snippets

### HTML Structure Skeleton
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resham Mahant - AI & ML Engineer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/typography.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/animations.css">
</head>
<body>
  <!-- Navigation -->
  <nav class="md-top-app-bar">...</nav>
  
  <!-- Hero Section -->
  <section id="hero" class="hero-section">...</section>
  
  <!-- About Section -->
  <section id="about" class="about-section">...</section>
  
  <!-- Education Section -->
  <section id="education" class="education-section">...</section>
  
  <!-- Experience Section -->
  <section id="experience" class="experience-section">...</section>
  
  <!-- Projects Section -->
  <section id="projects" class="projects-section">...</section>
  
  <!-- Skills Section -->
  <section id="skills" class="skills-section">...</section>
  
  <!-- Certifications Section -->
  <section id="certifications" class="certifications-section">...</section>
  
  <!-- Contact Section -->
  <section id="contact" class="contact-section">...</section>
  
  <!-- Footer -->
  <footer class="site-footer">...</footer>
  
  <script src="js/main.js"></script>
</body>
</html>
```

### CSS Reset & Base Styles
```css
/* reset.css */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--md-sys-color-background);
  color: var(--md-sys-color-on-background);
  line-height: 1.5;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--md-sys-color-primary);
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}
```

---

## Final Notes

This plan provides a comprehensive blueprint for building a Material Design 3 portfolio website. The coding agent should:

1. **Start with structure first:** HTML semantic markup
2. **Implement design system:** CSS variables and typography
3. **Build components incrementally:** One section at a time
4. **Test responsiveness continuously:** Check at each breakpoint
5. **Add interactions last:** After static layout is solid
6. **Optimize before deployment:** Performance and accessibility

**Key Principles to Maintain:**
- ✅ Material Design 3 specifications (colors, typography, spacing)
- ✅ Google's visual language (minimal, clean, functional)
- ✅ Responsive and accessible
- ✅ Performant and fast-loading
- ✅ Professional presentation of Resham's work

**Output:** A production-ready portfolio website that showcases Resham Mahant's AI/ML expertise with Google's world-class design standards.