# RestoreHope61 Website

A modern React + Vite + Tailwind CSS v4 website for RestoreHope61, a 501(c)(3) nonprofit ministry serving Huntsville, Alabama.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
restorehope61-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/           # Static assets (images, etc.)
│   ├── components/       # React components
│   │   ├── Button.jsx
│   │   ├── Contact.jsx
│   │   ├── FloatingHelpButton.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Mission.jsx
│   │   ├── Navigation.jsx
│   │   ├── Process.jsx
│   │   ├── ResourceCard.jsx
│   │   ├── Resources.jsx
│   │   └── index.js
│   ├── hooks/            # Custom React hooks
│   ├── lib/
│   │   ├── data.js       # Resource data and content
│   │   └── utils.js      # Utility functions
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles & Tailwind
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Colors
- **Primary (Deep Navy):** `#1e3a5f` - Trust, stability
- **Secondary (Warm Gold):** `#c9a227` - Hope, warmth
- **Accent (Soft Teal):** `#3d8b8b` - Calm, healing
- **Neutrals:** Warm gray scale

### Typography
- **Display:** Source Serif 4 (elegant, trustworthy)
- **Body:** Plus Jakarta Sans (modern, clean)

### Spacing
- 8px base grid system
- Consistent padding scale: 8/12/16/24/32

### Border Radius
- Small: 6px
- Medium: 12px
- Large: 16px
- XL: 24px

## 🧩 Components

### Button
```jsx
import { Button, ButtonLink } from './components'

<Button variant="primary" size="md">Click Me</Button>
<ButtonLink href="#contact" variant="secondary" size="lg">Get Help</ButtonLink>
```

Variants: `primary`, `secondary`, `ghost`, `white-ghost`
Sizes: `sm`, `md`, `lg`

### Resources Tabs
The Resources section uses tabbed navigation to display 9 categories of community resources. Data is stored in `src/lib/data.js`.

### Contact Form
Submits to FormSubmit.co with client-side validation. Includes:
- Name, phone, email fields
- Age range dropdown
- Multi-select checkboxes for needs
- Message textarea

## ♿ Accessibility

- Skip link for keyboard navigation
- Proper semantic HTML structure
- ARIA labels and roles
- Focus-visible states
- Color contrast meets WCAG AA
- Keyboard-navigable tabs and forms

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Minimum viewport: 360px
- Touch-friendly tap targets (44px minimum)

## 🖼️ Adding the Watermark

To add the hero watermark image:

1. Place your image in `src/assets/hero-watermark.png`
2. In `src/App.jsx`, uncomment the import and watermarkUrl prop:

```jsx
import watermarkUrl from './assets/hero-watermark.png'

// In the component:
<Hero watermarkUrl={watermarkUrl} />
```

## 📝 Customizing Content

All resource data and content is stored in `src/lib/data.js`:

- `resourceCategories` - All 9 resource categories with their listings
- `missionCards` - The 4 mission area cards
- `processSteps` - The 3-step process
- `needsOptions` - Contact form checkbox options
- `ageRanges` - Age range dropdown options

## 🚀 Deployment

Build the production version:

```bash
npm run build
```

The `dist/` folder contains static files ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

## 📄 License

© 2025 RestoreHope61 Ministry. All rights reserved.
