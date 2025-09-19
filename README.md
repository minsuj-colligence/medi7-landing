# Medi7 Landing Page

A modern, responsive landing page for Medi7 healthcare technology platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design optimized for healthcare industry
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive SEO setup with meta tags and structured data
- **Performance**: Built with Next.js for optimal performance and loading speeds
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # Document structure
│   └── index.tsx       # Homepage
├── styles/             # Global styles
│   └── globals.css     # Tailwind imports and global styles
└── types/              # TypeScript type definitions
    └── index.ts        # Shared types
```

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:
- Primary medical blue: `#0066cc`
- Secondary green: Tailwind green palette
- Custom medical theme colors

### Content

Update the content in each component file:
- Hero section: `src/components/Hero.tsx`
- Features: `src/components/Features.tsx`
- About: `src/components/About.tsx`
- Contact info: `src/components/Contact.tsx`

### SEO

Update SEO settings in `src/pages/index.tsx`:
- Meta tags
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the application:
```bash
npm run build
```

The `out` folder contains the production build ready for deployment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the MIT License.
