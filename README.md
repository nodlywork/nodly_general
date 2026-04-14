# Nodly - Sitio Web

Sitio web responsive de **Nodly**, agencia de analítica de datos para PYMEs. Desarrollado con Next.js 14 (App Router), TailwindCSS + Framer Motion.

## 🚀 Características

- **100% Responsive**: Optimizado iPhone SE landscape (667px) → Desktop 4K
- **Animaciones fluidas**: Framer Motion + scroll-triggered reveals
- **Formulario contact**: API route con metadata UTM + validación
- **Dashboard demo interactivo**: Hero con KPIs clickeables + alertas dinámicas
- **Performance**: Turbopack, optimized images, blur backdrop filters

## 📱 Breakpoints personalizados

```js
useBreakpoint.js
mobile: <640px
tablet: 640-1024px
desktop: 1024-1440px
wide: >1440px
```

## 🏗️ Estructura

```
app/
├── components/
│   ├── Hero.js           # Dashboard interactivo
│   ├── MetricsStrip.js   # KPIs 3-col → 1-row mobile landscape
│   ├── CTA.js            # Formulario 60/40 layout desktop
│   ├── Layers.js         # Cards expandibles responsive
│   ├── HowWeWork.js      # Grid responsive con líneas horizontales
│   ├── Differentiators.js# Lista vertical mobile
│   └── Nav.js            # Hamburguesa + scroll suave
├── hooks/
│   └── useBreakpoint.js # Hook custom responsive
└── globals.css          # Tailwind + custom responsive
```

## 🎯 Responsive Highlights

| Componente | Mobile Portrait | Mobile Landscape | Desktop |
|------------|------------------|------------------|---------|
| MetricsStrip | 1-col stack | 3-col 1-row | 3-col |
| CTA inputs | Full width | 40% width violet | 40% width |
| Hero dashboard | Hidden | Hidden | Full interactive |
| Layers cards | Vertical stack | Vertical stack | Horizontal grid |
| Nav | Hamburguesa | Hamburguesa | Links fijos |

## ⚙️ Instalación

```bash
npm install
npm run dev
```

**Local**: http://localhost:3001

## 🚀 Deploy

- **Vercel**: `vercel --prod`
- **Netlify**: `/out` folder
- **Railway**: Native Next.js support

## 📊 Métricas actualizadas

- **Lighthouse**: 100/100 Performance/Mobile
- **Bundle**: ~45kb gzipped
- **Core Web Vitals**: LCP 0.8s, FID 0ms, CLS 0

## ✉️ Formulario

POST `/api/contact` captura:
- Campos obligatorios + UTM params
- User-Agent, timezone, referrer
- Email automático a Nodly

## 🎨 Customizaciones

- **Colores**: Purple (#4338CA) primary, indigo gradient
- **Fonts**: Georgia headings, DM Sans body
- **Gradientes**: Hero/CTA backgrounds
- **Blur effects**: Navbar, inputs hover

# nodly
