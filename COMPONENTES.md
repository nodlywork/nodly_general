# Mapa de Componentes

```
Layout Root
├── Nav (fixed responsive)
├── Hero (dashboard interactivo)
├── MetricsStrip (3 KPIs responsive)
├── CTA (formulario 60/40)
├── Layers (3 cards expandibles)
├── HowWeWork (grid responsive)
├── Differentiators (lista/tablet)
├── Footer (logos responsive)
└── API /contact (POST tracking)
```

## Flujo Responsivo Desktop → Mobile

```
Desktop (1440px+)
├── 3-col Metrics | Dashboard full Hero
├── CTA: text 60% | form 40% wide inputs
└── Layers horizontal

Tablet (640px)
├── 2-col Metrics | Dashboard hidden
├── CTA stacked vertical
└── Layers vertical

Mobile Landscape (667px iPhone SE)
├── Metrics 3-col 1-row ✓
├── Nav hamburguesa
└── Hero text-only

Mobile Portrait (<640px)
├── Metrics 1-col stack
├── All stacked vertical
└── Inputs full-width
```

**Hooks**: `useBreakpoint()` powers all responsive logic
