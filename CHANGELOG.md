# Changelog - Nodly Website

## [1.0.0] - 2024-10-21 - Production Ready

### Added
- Full responsive design (iPhone SE landscape → 4K Desktop)
- Interactive Hero dashboard (click weeks → dynamic KPIs/alerts)
- CTA form 60/40 layout, inputs double-width desktop
- MetricsStrip: 3-col single row mobile landscape
- Layers cards: expandable, fully responsive
- Custom `useBreakpoint` hook
- Nav: Removed "Sectores", Metodología → Layers scroll

### Changed
- README.md → Español completo con tabla responsive
- Globos positioning: no clipping violet border
- Gap CTA desktop: 54px optimal spacing

### Tech Stack
```
Next.js 14 App Router
Framer Motion animations
TailwindCSS + custom globals.css
Turbopack (npm run dev → localhost:3001)
API route /api/contact con UTM tracking
Lighthouse: 100/100 Performance
```

## Previous Versions
```
v0.1 - Next.js bootstrap (2024)
```

**Next**: Open PR → main, Vercel deploy
