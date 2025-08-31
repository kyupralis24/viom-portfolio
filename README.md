# Viom Kapur Portfolio

A modern, interactive personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. Features a faulty terminal background, 3D elements, parallax scrolling, and professional presentation of AI/ML, finance, and engineering projects.

## 🚀 Live Demo

[Portfolio Link](https://viom-portfolio.vercel.app)

## 🎯 Project Overview

This portfolio showcases Viom Kapur's expertise as an AI Engineer and Finance student, featuring:
- **Interactive Terminal Background**: WebGL-based faulty terminal effect from React Bits
- **Professional Experience Timeline**: Company logos, detailed achievements, and interactive cards
- **Skills Visualization**: Interactive grid with category filtering and animated backgrounds
- **Project Showcase**: Detailed case studies with AI tools integration
- **Responsive Design**: Mobile-first approach with glass morphism effects

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15.4.6** - React framework with App Router and Turbopack
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS v4** - Utility-first CSS framework with PostCSS plugin
- **Framer Motion** - Animation library for React

### 3D & Graphics
- **OGL** - WebGL library for faulty terminal shader effects
- **Three.js** - 3D graphics library (for future enhancements)

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Vercel** - Deployment platform

## 📁 Project Structure

```
viom-portfolio/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route groups
│   │   ├── experience/           # Experience pages
│   │   │   └── [slug]/          # Dynamic experience routes
│   │   └── projects/            # Project pages
│   │       └── [slug]/          # Dynamic project routes
│   ├── api/                     # API routes
│   │   └── contact/             # Contact form endpoint
│   ├── experience/              # Experience detail pages
│   │   └── [slug]/              # Dynamic experience routes
│   ├── globals.css              # Global styles and Tailwind v4 config
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── badge.tsx           # Badge component
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   └── dialog.tsx          # Dialog component
│   ├── animated-loader.tsx      # Intro loading animation
│   ├── experience-timeline.tsx  # Experience timeline component
│   ├── FaultyTerminal.tsx       # WebGL terminal background
│   ├── hero-terminal.tsx        # Hero section with terminal
│   ├── nav.tsx                  # Navigation component
│   ├── ProfessionalMetrics.tsx  # Professional metrics dashboard
│   ├── project-grid.tsx         # Project grid with filtering
│   ├── ProjectDetail.tsx        # Individual project detail page
│   ├── ExperienceDetail.tsx     # Individual experience detail page
│   ├── SkillsInteractive.tsx    # Interactive skills section
│   └── three/                   # 3D components
│       ├── Laptop.tsx          # 3D laptop model
│       └── SceneTicker.tsx     # 3D scene component
├── lib/                         # Utility libraries
│   ├── data.ts                 # Project data and interfaces
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
│   ├── bdo_logo.png           # BDO company logo
│   ├── pragmana_logo.png      # Pragmana company logo
│   ├── itc_logo.png           # ITC company logo
│   ├── deloitte_logo.png      # Deloitte company logo
│   ├── Viom_Kapur_Resume.pdf  # Resume PDF
│   └── ...                    # Other static assets
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design System

### Color Palette
- **Primary Brand**: Custom brand color with glass morphism effects
- **Background**: Dark theme with gradient overlays
- **Text**: White with muted variants for hierarchy
- **Accents**: Company-specific colors for experience cards

### Typography
- **Headings**: Bold, large-scale typography for impact
- **Body**: Clean, readable text with proper line spacing
- **Code**: Monospace fonts for technical content

### Components
- **Glass Morphism**: Translucent cards with backdrop blur
- **Animated Borders**: Gradient borders with hover effects
- **Interactive Elements**: Hover states and micro-animations
- **3D Effects**: Subtle perspective and rotation transforms

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/viom-portfolio.git
   cd viom-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📝 Configuration

### Tailwind CSS v4 Setup
The project uses Tailwind CSS v4 with PostCSS plugin configuration:

```javascript
// postcss.config.mjs
export default {
  plugins: ["@tailwindcss/postcss"],
}
```

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --bg: #0a0a0a;
  --panel: #1a1a1a;
  --text: #ffffff;
  --muted: #a0a0a0;
  --brand: #3b82f6;
  --shadow-glass: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

### Next.js Configuration
```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
```

## 🎭 Key Components

### FaultyTerminal.tsx
WebGL-based interactive terminal background using OGL library:

```typescript
// Features
- Mouse interaction with ripple effects
- Real-time shader animations
- Configurable parameters (scale, grid, colors)
- Responsive canvas sizing
```

### ExperienceTimeline.tsx
Interactive timeline showcasing professional experience:

```typescript
// Features
- Company logos with fallback to initials
- Hover animations and 3D transforms
- Category-based filtering
- Parallax scrolling effects
```

### SkillsInteractive.tsx
Interactive skills visualization with category filtering:

```typescript
// Features
- Category-based filtering (AI/ML, Finance, Tech)
- Animated skill bars
- Hover effects with color-coded borders
- Expertise summary with averages
```

### ProjectGrid.tsx
Project showcase with search and filtering:

```typescript
// Features
- Search functionality
- Category filtering
- AI tools integration
- Responsive grid layout
```

## 📊 Data Structure

### Experience Interface
```typescript
interface Experience {
  id: string
  slug: string
  company: string
  role: string
  duration: string
  location: string
  description: string
  achievements: string[]
  skills: string[]
  color: string
  logo?: string
}
```

### Project Interface
```typescript
interface Project {
  id: string
  slug: string
  title: string
  description: string
  category: 'ai' | 'finance' | 'strategy' | 'product' | 'coding'
  image: string
  tags: string[]
  overview: string
  tech: string
  results: string
  lessons: string
  link?: string
  caseStudy?: string
  codePreview?: string
}
```

## 🎨 Custom Animations

### CSS Keyframes
```css
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Framer Motion Variants
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Use functional components with hooks
- Implement proper error boundaries

### Component Structure
```typescript
// Component template
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ComponentProps {
  // Define props interface
}

export default function ComponentName({ props }: ComponentProps) {
  // Component logic
  return (
    // JSX structure
  )
}
```

### State Management
- Use React hooks for local state
- Implement proper loading states
- Handle error states gracefully
- Use context for global state if needed

### Performance Optimization
- Use Next.js Image component for images
- Implement proper loading strategies
- Use dynamic imports for heavy components
- Optimize bundle size with code splitting

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Start with mobile layouts
- Use Tailwind responsive prefixes
- Test on various devices
- Optimize touch interactions

## 🔍 SEO & Performance

### Meta Tags
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Viom Kapur - AI Engineer & Finance Student',
  description: 'Portfolio showcasing AI/ML, finance, and engineering projects',
  keywords: ['AI', 'Machine Learning', 'Finance', 'Engineering'],
  openGraph: {
    title: 'Viom Kapur Portfolio',
    description: 'AI Engineer & Finance Student Portfolio',
    images: ['/og-image.png'],
  },
}
```

### Performance Metrics
- Lighthouse Score: 90+
- Core Web Vitals: Optimized
- Bundle Size: < 500KB
- First Contentful Paint: < 1.5s

## 🧪 Testing

### Testing Strategy
- Unit tests for utility functions
- Component testing with React Testing Library
- E2E testing with Playwright
- Performance testing with Lighthouse

### Running Tests
```bash
npm run test          # Run unit tests
npm run test:e2e      # Run E2E tests
npm run test:coverage # Run tests with coverage
```

## 🔧 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **TypeScript Errors**
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

3. **Tailwind CSS Issues**
   ```bash
   # Regenerate Tailwind classes
   npx tailwindcss --watch
   ```

### Performance Issues
- Check bundle analyzer: `npm run analyze`
- Optimize images and assets
- Implement proper caching strategies
- Monitor Core Web Vitals

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Review Process
- All changes require review
- Ensure tests pass
- Follow coding standards
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Bits** - Faulty terminal shader implementation
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js Team** - React framework
- **OGL** - WebGL library

## 📞 Contact

- **Email**: viomkapur@egmail.com
- **LinkedIn**: [Viom Kapur](https://www.linkedin.com/in/viom-kapur-93434621b/)
- **GitHub**: [@viomkapur](https://github.com/kyupralis24)

---

**Note**: This portfolio is actively maintained and updated with new projects and experiences. For the latest version, always check the main branch.
