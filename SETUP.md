# Installation & Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The portfolio will be available at `http://localhost:3000`

## Project Configuration

### Environment Variables
Create `.env.local` file (if needed for API calls):
```env
# Example - add as needed
NEXT_PUBLIC_SITE_URL=https://evandwi.com
```

### Customize Your Portfolio

#### 1. Update Personal Information
Edit `src/data/portfolio.ts`:
- Name, role, and bio
- Social media links
- Email and location
- Skills and expertise
- Projects showcase
- Experience timeline
- Testimonials

#### 2. Modify Colors & Theme
Edit `tailwind.config.ts`:
- Primary color (default: `#8b5cf6`)
- Secondary color (default: `#06b6d4`)
- Accent color (default: `#ec4899`)
- Font families
- Custom animations

#### 3. Update Typography
Edit `src/app/layout.tsx`:
- Change font families (Inter, Space Grotesk)
- Adjust sizing and spacing

## Building for Production

### 1. Build
```bash
npm run build
```

### 2. Test Production Build
```bash
npm start
```

### 3. Deploy
The project is ready to deploy to:
- **Vercel** (recommended)
- **Netlify**
- **AWS**
- **Docker**
- **Any Node.js hosting**

#### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Performance Optimization

### Image Optimization
- Use Next.js Image component
- Images are automatically optimized
- WebP format used when supported

### Code Splitting
- Components are automatically code-split
- Lazy loading for images and components

### Caching
- Static assets cached for 1 year
- Dynamic content cached intelligently

## SEO Configuration

### Update Metadata
Edit `src/app/layout.tsx`:
- Page title
- Meta description
- Open Graph image
- Twitter card data

### Update Sitemap
Edit `public/sitemap.xml` with actual domain

### Update Robots.txt
Edit `public/robots.txt` if needed

## Customization Guide

### Adding New Sections

1. Create new component in `src/components/sections/`:
```tsx
'use client'

import { motion } from 'framer-motion'

export const NewSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. Add to `src/components/sections/index.ts`
3. Import and add to `src/app/page.tsx`

### Creating Custom Components

Use existing patterns in `src/components/`:
- Import utilities from `src/lib/utils.ts`
- Use Framer Motion for animations
- Follow TypeScript conventions
- Export from index files

### Adding Custom Animations

Edit `tailwind.config.ts` to add new animations:
```ts
animation: {
  'your-animation': 'yourAnimation 1s ease-in-out',
}

keyframes: {
  yourAnimation: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
}
```

## Troubleshooting

### Port Already in Use
```bash
# Change port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Try building again
npm run build
```

### TypeScript Errors
```bash
# Type checking
npx tsc --noEmit
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## Performance Targets

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Green
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support

For issues or questions:
1. Check the documentation
2. Review existing code examples
3. Check Next.js GitHub issues
4. Consult component libraries documentation

---

Happy building! 🚀
