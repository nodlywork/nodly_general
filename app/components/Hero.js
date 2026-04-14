'use client'

import { useState, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'

function getCurrentWeekInfo() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 1)
  const week = Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7)   
  return { week, year: now.getFullYear() }
}

const weeklyData = [
  { week: 'S1', ventas: 210, margen: 25.1, pedidos: 38, rotacion: 18, disponibilidad: 94, fillRate: 91, cobertura: 22, alerts: [
    { icon: '⚠️', bg: '#FEE2E2', title: 'Stock bajo: Producto A-182', sub: 'Queddan 2 unidades. Reposición sugerida: 40 unid.' },
    { icon: '📈', bg: '#D1FAE5', title: 'Margen en alza', sub: 'Categoría Ferretería +18% este mes' },
    { icon: '🚚', bg: 'FEF3C7', title: 'Entrega demorada', sub: 'Proveedor Ferraz — 1 día de retraso' }
  ] },
  { week: 'S2', ventas: 245, margen: 26.3, pedidos: 42, rotacion: 16, disponibilidad: 95, fillRate: 93, cobertura: 20, alerts: [
    { icon: '✅', bg: '#D1FAE5', title: 'Todo al día', sub: 'Stock, entregas y producción OK' },
    { icon: '📈', bg: '#D1FAE5', title: 'Ventas en alza', sub: 'S2 vs S1: +16.7%' },
    { icon: '💰', bg: '#D1FAE5', title: 'Margen estable', sub: '+1.2 puntos vs semana pasada' }
  ] },
  { week: 'S3', ventas: 198, margen: 24.8, pedidos: 35, rotacion: 21, disponibilidad: 91, fillRate: 89, cobertura: 25, alerts: [
    { icon: '⚠️', bg: '#FEE2E2', title: 'Fill rate bajo', sub: '89% esta semana.. Revisar retrasos proveedores' },
    { icon: '🚨', bg: '#FEE2E2', title: 'Rotación alta', sub: '21 días — riesgo de obsolescencia' },
    { icon: '📉', bg: '#FEE2E2', title: 'Ventas -19%', sub: 'Vs S2 — investigar demanda' }
  ] },
  { week: 'S4', ventas: 289, margen: 27.2, pedidos: 51, rotacion: 14, disponibilidad: 96, fillRate: 95, cobertura: 18, alerts: [
    { icon: '🎉', bg: '#D1FAE5', title: 'Record de pedidos', sub: '51 pedidos — +46% vs S3' },
    { icon: '📈', bg: '#D1FAE5', title: 'Fill rate excelente', sub: '95% — clientes satisfechos' },
    { icon: '💰', bg: '#D1FAE5', title: 'Margen récord', sub: '+2.4 puntos vs promedio' }
  ] },
  { week: 'S5', ventas: 267, margen: 26.8, pedidos: 47, rotacion: 15, disponibilidad: 94, fillRate: 92, cobertura: 19, alerts: [
    { icon: '⚠️', bg: '#FEE2E2', title: 'Cobertura ajustada', sub: '19 días — pllanificar próximos 30' },
    { icon: '📉', bg: '#FEE2E2', title: 'Ventas -8%', sub: 'Vs S4 — revisar promociones' },
    { icon: '🚚', bg: 'FEF3C7', title: '2 entregas pendientes', sub: 'Llegan mañana — monitorizar' }
  ] },
  { week: 'S6', ventas: 312, margen: 28.1, pedidos: 53, rotacion: 13, disponibilidad: 97, fillRate: 96, cobertura: 17, alerts: [
    { icon: '🎯', bg: '#D1FAE5', title: 'Semana perfecta', sub: 'Todos KPIs en verde' },
    { icon: '💎', bg: '#D1FAE5', title: 'Fill rate 96%', sub: 'Mejor semana del mes' },
    { icon: '📈', bg: '#D1FAE5', title: 'Rotación óptima', sub: '13 días — inventario eficiente' }
  ] },
  { week: 'S7', ventas: 334, margen: 28.4, pedidos: 58, rotacion: 12, disponibilidad: 96, fillRate: 94, cobertura: 16, alerts: [
    { icon: '🚨', bg: '#FEE2E2', title: '58 pedidos', sub: 'Sistema al límite — optimizar capacidad' },
    { icon: '📈', bg: '#D1FAE5', title: 'Ventas récord', sub: '+7% vs S6' },    
    { icon: '💰', bg: '#D1FAE5', title: 'Margen 28.4%', sub: '+1.3 puntos consecutivos' }
  ] },
  { week: 'S8', ventas: 342, margen: 28.4, pedidos: 47, rotacion: 12, disponibilidad: 97, fillRate: 95, cobertura: 15, alerts: [
    { icon: '👑', bg: '#D1FAE5', title: 'Semana TOP', sub: 'Ventas récord del trimestre' },
    { icon: '⚡', bg: '#D1FAE5', title: 'Disponibilidad 97%', sub: 'Inventario perfectamente balanceado' },
    { icon: '📊', bg: '#D1FAE5', title: 'Tendencia positiva', sub: '8 semanas al alza' }
  ] },
]

const maxVentas = Math.max(...weeklyData.map(d => d.ventas))

export default function Hero() {
  const [selected, setSelected] = useState(7)
  const [width, setWidth] = useState(360)
  const { week, year } = getCurrentWeekInfo()

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    window.addEventListener('orientationchange', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
      window.removeEventListener('orientationchange', updateWidth)
    }
  }, [])

  const d = weeklyData[selected]
  const prev = weeklyData[selected > 0 ? selected - 1 : 0]

  const ventasDiff = (((d.ventas - prev.ventas) / prev.ventas) * 100).toFixed(1)
  const margenDiff = (d.margen - prev.margen).toFixed(1)

  const extraMetrics = [
    { label: 'Rotación de stock', value: `${d.rotacion} días`, color: '#4338CA' },
    { label: 'Disponibilidad', value: `${d.disponibilidad}%`, color: '#10B981' },
    { label: 'Fill rate', value: `${d.fillRate}%`, color: '#06B6D4' },
    { label: 'Cobertura', value: `${d.cobertura} días`, color: '#8B5CF6' },     
  ]

  // derive breakpoints from measured width to keep behavior consistent
  const isMobile = width < 640
  const isTablet = width >= 640 && width < 1024
  const isWide = width > 1440

  const isStacked = width < 1024

  const showDashboard = width >= 812  // Hide on mobile landscape incl. largest future phones (~812px iPhone 16 Pro Max landscape)

  return (
    <>
      <div style={{
        position: 'fixed', top: '-100px', right: '-100px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(67,56,202,0.06) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div style={{
        width: '100%',
        maxWidth: isStacked ? '100%' : isWide ? '1800px' : '1600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isStacked ? 'column' : 'row',
        alignItems: 'center',
        gap: isStacked ? '40px' : (width < 900 ? '56px' : '300px'),
        padding: isMobile
          ? '100px 16px 48px'
          : isTablet
          ? '100px 28px 56px'
          : isWide
          ? '140px 80px 110px'
          : '130px 56px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* LEFT — texto */}
        <div style={{ flex: isStacked ? 'none' : '1', width: '100%' }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: isMobile
                ? 'clamp(1.8rem, 6.5vw, 2.4rem)'
                : isTablet
                ? 'clamp(2rem, 5vw, 3rem)'
                : isWide
                ? 'clamp(3rem, 4vw, 4.8rem)'
                : 'clamp(2.6rem, 4.5vw, 4rem)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-1.5px', color: '#0D0F1A',
              marginBottom: !isStacked ? '44px' : '24px',
              textAlign: isStacked ? 'center' : 'left',
              maxWidth: isStacked ? '92%' : '100%',
              margin: isStacked ? '0 auto 24px' : '0',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            Tus datos ya existen.<br />
            Ahora que <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#4338CA' }}>trabajen</em><br />
            para vos.
          </motion.h1>
'use client'
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              fontFamily: 'Georgia, serif',
              'use client'

              import { useState, useLayoutEffect } from 'react'
              import { motion } from 'framer-motion'

              function getCurrentWeekInfo() {
                const now = new Date()
                const start = new Date(now.getFullYear(), 0, 1)
                const week = Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7)   
                return { week, year: now.getFullYear() }
              }

              const weeklyData = [
                { week: 'S1', ventas: 210, margen: 25.1, pedidos: 38, rotacion: 18, disponibilidad: 94, fillRate: 91, cobertura: 22, alerts: [
                  { icon: '⚠️', bg: '#FEE2E2', title: 'Stock bajo: Producto A-182', sub: 'Queddan 2 unidades. Reposición sugerida: 40 unid.' },
                  { icon: '📈', bg: '#D1FAE5', title: 'Margen en alza', sub: 'Categoría Ferretería +18% este mes' },
                  { icon: '🚚', bg: 'FEF3C7', title: 'Entrega demorada', sub: 'Proveedor Ferraz — 1 día de retraso' }
                ] },
                { week: 'S2', ventas: 245, margen: 26.3, pedidos: 42, rotacion: 16, disponibilidad: 95, fillRate: 93, cobertura: 20, alerts: [
                  { icon: '✅', bg: '#D1FAE5', title: 'Todo al día', sub: 'Stock, entregas y producción OK' },
                  { icon: '📈', bg: '#D1FAE5', title: 'Ventas en alza', sub: 'S2 vs S1: +16.7%' },
                  { icon: '💰', bg: '#D1FAE5', title: 'Margen estable', sub: '+1.2 puntos vs semana pasada' }
                ] },
                { week: 'S3', ventas: 198, margen: 24.8, pedidos: 35, rotacion: 21, disponibilidad: 91, fillRate: 89, cobertura: 25, alerts: [
                  { icon: '⚠️', bg: '#FEE2E2', title: 'Fill rate bajo', sub: '89% esta semana.. Revisar retrasos proveedores' },
                  { icon: '🚨', bg: '#FEE2E2', title: 'Rotación alta', sub: '21 días — riesgo de obsolescencia' },
                  { icon: '📉', bg: '#FEE2E2', title: 'Ventas -19%', sub: 'Vs S2 — investigar demanda' }
                ] },
                { week: 'S4', ventas: 289, margen: 27.2, pedidos: 51, rotacion: 14, disponibilidad: 96, fillRate: 95, cobertura: 18, alerts: [
                  { icon: '🎉', bg: '#D1FAE5', title: 'Record de pedidos', sub: '51 pedidos — +46% vs S3' },
                  { icon: '📈', bg: '#D1FAE5', title: 'Fill rate excelente', sub: '95% — clientes satisfechos' },
                  { icon: '💰', bg: '#D1FAE5', title: 'Margen récord', sub: '+2.4 puntos vs promedio' }
                ] },
                { week: 'S5', ventas: 267, margen: 26.8, pedidos: 47, rotacion: 15, disponibilidad: 94, fillRate: 92, cobertura: 19, alerts: [
                  { icon: '⚠️', bg: '#FEE2E2', title: 'Cobertura ajustada', sub: '19 días — pllanificar próximos 30' },
                  { icon: '📉', bg: '#FEE2E2', title: 'Ventas -8%', sub: 'Vs S4 — revisar promociones' },
                  { icon: '🚚', bg: 'FEF3C7', title: '2 entregas pendientes', sub: 'Llegan mañana — monitorizar' }
                ] },
                { week: 'S6', ventas: 312, margen: 28.1, pedidos: 53, rotacion: 13, disponibilidad: 97, fillRate: 96, cobertura: 17, alerts: [
                  { icon: '🎯', bg: '#D1FAE5', title: 'Semana perfecta', sub: 'Todos KPIs en verde' },
                  { icon: '💎', bg: '#D1FAE5', title: 'Fill rate 96%', sub: 'Mejor semana del mes' },
                  { icon: '📈', bg: '#D1FAE5', title: 'Rotación óptima', sub: '13 días — inventario eficiente' }
                ] },
                { week: 'S7', ventas: 334, margen: 28.4, pedidos: 58, rotacion: 12, disponibilidad: 96, fillRate: 94, cobertura: 16, alerts: [
                  { icon: '🚨', bg: '#FEE2E2', title: '58 pedidos', sub: 'Sistema al límite — optimizar capacidad' },
                  { icon: '📈', bg: '#D1FAE5', title: 'Ventas récord', sub: '+7% vs S6' },    
                  { icon: '💰', bg: '#D1FAE5', title: 'Margen 28.4%', sub: '+1.3 puntos consecutivos' }
                ] },
                { week: 'S8', ventas: 342, margen: 28.4, pedidos: 47, rotacion: 12, disponibilidad: 97, fillRate: 95, cobertura: 15, alerts: [
                  { icon: '👑', bg: '#D1FAE5', title: 'Semana TOP', sub: 'Ventas récord del trimestre' },
                  { icon: '⚡', bg: '#D1FAE5', title: 'Disponibilidad 97%', sub: 'Inventario perfectamente balanceado' },
                  { icon: '📊', bg: '#D1FAE5', title: 'Tendencia positiva', sub: '8 semanas al alza' }
                ] },
              ]

              const maxVentas = Math.max(...weeklyData.map(d => d.ventas))

              export default function Hero() {
                const [selected, setSelected] = useState(7)
                const [width, setWidth] = useState(360)
                const { week, year } = getCurrentWeekInfo()

                useLayoutEffect(() => {
                  const updateWidth = () => setWidth(window.innerWidth)
                  updateWidth()
                  window.addEventListener('resize', updateWidth)
                  window.addEventListener('orientationchange', updateWidth)
                  return () => {
                    window.removeEventListener('resize', updateWidth)
                    window.removeEventListener('orientationchange', updateWidth)
                  }
                }, [])

                const d = weeklyData[selected]
                const prev = weeklyData[selected > 0 ? selected - 1 : 0]

                const ventasDiff = (((d.ventas - prev.ventas) / prev.ventas) * 100).toFixed(1)
                const margenDiff = (d.margen - prev.margen).toFixed(1)

                const extraMetrics = [
                  { label: 'Rotación de stock', value: `${d.rotacion} días`, color: '#4338CA' },
                  { label: 'Disponibilidad', value: `${d.disponibilidad}%`, color: '#10B981' },
                  { label: 'Fill rate', value: `${d.fillRate}%`, color: '#06B6D4' },
                  { label: 'Cobertura', value: `${d.cobertura} días`, color: '#8B5CF6' },     
                ]

                // derive breakpoints from measured width to keep behavior consistent
                const isMobile = width < 640
                const isTablet = width >= 640 && width < 1024
                const isWide = width > 1440

                const isStacked = width < 1024

                const showDashboard = width >= 812  // Hide on mobile landscape incl. largest future phones (~812px iPhone 16 Pro Max landscape)

                return (
                  <>
                    <div style={{
                      position: 'fixed', top: '-100px', right: '-100px',
                      width: '600px', height: '600px',
                      background: 'radial-gradient(circle, rgba(67,56,202,0.06) 0%, transparent 65%)',
                      pointerEvents: 'none', zIndex: 0
                    }} />

                    <div style={{
                      width: '100%',
                      maxWidth: isStacked ? '100%' : isWide ? '1800px' : '1600px',
                      margin: '0 auto',
                      display: 'flex',
                      flexDirection: isStacked ? 'column' : 'row',
                      alignItems: 'center',
                      gap: isStacked ? '40px' : (width < 900 ? '56px' : '300px'),
                      padding: isMobile
                        ? '100px 16px 48px'
                        : isTablet
                        ? '100px 28px 56px'
                        : isWide
                        ? '140px 80px 110px'
                        : '130px 56px 100px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>

                      {/* LEFT — texto */}
                      <div style={{ flex: isStacked ? 'none' : '1', width: '100%' }}>
                        <motion.h1
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                          style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: isMobile
                              ? 'clamp(1.8rem, 6.5vw, 2.4rem)'
                              : isTablet
                              ? 'clamp(2rem, 5vw, 3rem)'
                              : isWide
                              ? 'clamp(3rem, 4vw, 4.8rem)'
                              : 'clamp(2.6rem, 4.5vw, 4rem)',
                            fontWeight: 700, lineHeight: 1.1,
                            letterSpacing: '-1.5px', color: '#0D0F1A',
                            marginBottom: !isStacked ? '44px' : '24px',
                            textAlign: isStacked ? 'center' : 'left',
                            maxWidth: isStacked ? '92%' : '100%',
                            margin: isStacked ? '0 auto 24px' : '0',
                            overflowWrap: 'break-word',
                            wordBreak: 'break-word',
                          }}
                        >
                          Tus datos ya existen.<br />
                          Ahora que <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#4338CA' }}>trabajen</em><br />
                          para vos.
                        </motion.h1>
          >
