# Evan Dwi - Premium Portfolio Website

A modern, premium portfolio website inspired by 21st.dev with cutting-edge technologies and stunning animations.

## 🚀 Features

- **Modern Design System** - Dark mode with glassmorphism and gradient effects
- **Smooth Animations** - Framer Motion powered interactions and transitions
- **Responsive Layout** - Mobile-first design with perfect scaling
- **Performance Optimized** - Lighthouse 95+ score targeting
- **Interactive Components** - Hover effects, parallax, and advanced animations
- **SEO Ready** - Meta tags, Open Graph, and structured data
- **Accessibility** - WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **UI Components**: Custom + shadcn/ui inspired
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Carousel**: Embla Carousel

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
├── components/
│   ├── ui/                 # Base UI components (Button, Card, Badge, etc.)
│   ├── sections/           # Page sections (Navbar, Hero, About, etc.)
│   ├── animations/         # Custom animation components
│   └── shared/             # Shared utilities
├── lib/                    # Utilities and helpers
├── hooks/                  # Custom React hooks
├── styles/                 # Global CSS
└── data/                   # Static data & constants
```

## 🎨 Color Palette

```
Background: #050816
Foreground: #ffffff
Primary: #8b5cf6 (Purple)
Secondary: #06b6d4 (Cyan)
Accent: #ec4899 (Pink)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Run development server**
```bash
npm run dev
```

3. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🎯 Sections

1. **Navbar** - Sticky navigation with mobile menu
2. **Hero** - Landing section with CTA and social links
3. **About** - Bento grid layout with bio and facts
4. **Skills** - Tech stack with marquee animation
5. **Projects** - Portfolio grid with hover effects
6. **Experience** - Timeline with achievements
7. **Testimonials** - Carousel with quotes
8. **Contact** - Contact form and info
9. **Footer** - Links and social

## ✨ Customization

### Update Portfolio Data
Edit `src/data/portfolio.ts` to customize:
- Personal information
- Projects
- Experience
- Skills
- Testimonials

### Modify Colors
Update `tailwind.config.ts` to customize:
- Color palette
- Gradients
- Animations
- Typography

### Add New Sections
Create new components in `src/components/sections/` and add to `src/app/page.tsx`

## 📱 Responsive Design

- Mobile: 1 column layout
- Tablet: 2 column layout  
- Desktop: 3 column layout
- All components adapt seamlessly

## ⚡ Performance

- Image optimization with Next.js Image
- Code splitting and lazy loading
- CSS-in-JS optimization
- GPU-accelerated animations
- Smooth 60fps interactions

## 📝 License

MIT License - feel free to use for your own portfolio

## 👨‍💻 Author

Evan Dwi - Full Stack Developer & Designer

---

Built with ❤️ using Next.js 15 and modern web technologies
