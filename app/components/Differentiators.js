'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { useBreakpoint } from '../hooks/useBreakpoint'

const dimensions = [
  {
    id: 'operativo',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <path d="M3 18 L7 13 L11 15.5 L16 8 L19 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
    label: 'Conocimiento operativo',
    freelance:     { short: 'Sin experiencia en el negocio real.',           long: 'Han trabajado siempre en entornos técnicos. No conocen el mundo real de una PYME, ni cómo se toman las decisiones en operaciones, compras o logística.' },
    nodly:         { short: 'Del campo a los datos.',                        long: 'Hemos trabajado en PYMEs, multinacionales, educación universitaria de supply chain y data, y proyectos de transformación operativa. Sabemos dónde duele porque estuvimos ahí.' },
    consultora:    { short: 'Teoría sin terreno.',                           long: 'Conocen industrias en teoría. Sus consultores rara vez tienen experiencia operativa real — y el que sabe de tu sector casi nunca es el que termina en tu proyecto.' },
  },
  {
    id: 'tecnico',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M7 10 L10 13 L15 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Amplitud técnica',
    freelance:     { short: 'Profundo en uno, limitado en el resto.',        long: 'Muy profundo en una especialidad. Si necesitás datos, visualización, ML e IA al mismo tiempo, estás fuera de su zona — y te lo cobran igual.' },
    nodly:         { short: 'Todo el espectro, sin gaps.',                   long: 'Cubrimos todo el espectro horizontal: ingeniería de datos, analytics, visualización, ML e IA. Sin gaps, sin subcontratar, sin que te quedes a medias.' },
    consultora:    { short: 'Demasiado generalista para lo que importa.',    long: 'Generalistas por naturaleza. Raramente se involucran donde están los verdaderos puntos de dolor — y cuando lo hacen, el costo ya no tiene sentido para una PYME.' },
  },
  {
    id: 'precio',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M11 6 V8 M11 14 V16 M8 9.5 C8 8.1 9.3 7.5 11 7.5 C12.7 7.5 14 8.4 14 9.8 C14 12 11 12.5 11 14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Precio y accesibilidad',
    freelance:     { short: 'Por hora, sin sistema, sin certeza.',           long: 'Razonable por hora, pero sin sistema ni continuidad. El costo total termina siendo impredecible y sin garantía de resultado.' },
    nodly:         { short: 'Claro, predecible, para PYMEs.',                long: 'Diseñado para PYMEs operativas. Setup claro y seguimiento mensual con precio definido desde el día uno. Sin sorpresas, sin letra chica.' },
    consultora:    { short: 'Presupuestos pensados para grandes empresas.',  long: 'Presupuestos que arrancan en seis cifras. Pensado para empresas con equipos de finanzas y procurement, no para quien toma decisiones solo.' },
  },
  {
    id: 'transferencia',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="8" r="3" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="15" cy="8" r="3" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M2 19 C2 15.7 4.2 13 7 13 M20 19 C20 15.7 17.8 13 15 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M11 13 C13.2 13 15 15.3 15 18 M9 18 C9 15.3 10.8 13 13 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Transferencia de conocimiento',
    freelance:     { short: 'Te quedás con una caja negra.',                 long: 'El sistema lo entiende él. Cuando se va, tu equipo queda con algo que nadie sabe mantener ni evolucionar.' },
    nodly:         { short: 'Tu equipo lo entiende. Siempre.',               long: 'Enseñamos analytics a nivel universitario. No dejamos cajas negras — cada sistema que construimos lo entiende tu equipo, porque si no lo entiende, no lo va a usar.' },
    consultora:    { short: 'Documentación que nadie lee.',                  long: 'Entregan documentación que nadie lee. El objetivo implícito es que vuelvas a contratarlos cada vez que algo cambia.' },
  },
  {
    id: 'soporte',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <path d="M11 3 C6.6 3 3 6.6 3 11 C3 15.4 6.6 19 11 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M14 14.5 C14 14.5 15.5 17 17.5 17 C19.5 17 19 13.5 19 13.5 C19 13.5 19.5 10 17.5 10 C15.5 10 14 12.5 14 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M11 7.5 V11 L13 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Soporte continuo',
    freelance:     { short: 'Entrega y desaparece.',                         long: 'Entrega el proyecto y desaparece. Si algo falla o el negocio cambia, hay que volver a contratar desde cero — si es que lo encontrás disponible.' },
    nodly:         { short: 'Contigo cada mes, sin excepción.',              long: 'Seguimiento mensual incluido. Analizamos qué pasó, recomendamos qué hacer y evolucionamos el sistema a medida que crece tu negocio.' },
    consultora:    { short: 'Soporte caro, lento y burocrático.',            long: 'Soporte caro y burocrático. Un cambio simple puede tardar semanas y siempre viene con un costo adicional que nadie te avisó.' },
  },
]

const columns = [
  { key: 'freelance', label: 'Freelance técnico', accent: '#94A3B8', soft: '#F8FAFC' },
  { key: 'nodly',     label: 'Nodly',             accent: '#4338CA', soft: '#F5F3FF', featured: true },
  { key: 'consultora',label: 'Gran consultora',   accent: '#94A3B8', soft: '#F8FAFC' },
]

export default function Differentiators() {
  const [activeDimension, setActiveDimension] = useState(null)
  const timerRef = useRef(null)

  const { isMobile } = useBreakpoint()

  const handleEnter = useCallback((id) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setActiveDimension(id), 180)
  }, [])

  const handleLeave = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setActiveDimension(null), 120)
  }, [])

  return (
    <div style={{ background: '#F7F8FC' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 56px' }}>

        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.92rem)', fontWeight: 500, color: '#4338CA', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Por qué Nodly
            </div>
            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.6rem, 4vw, 3.6rem)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-1.5px', color: '#0D0F1A',
            }}>
              Lo mejor de dos mundos.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#4338CA' }}>Sin los problemas de ninguno.</em>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div style={{
            background: 'white', borderRadius: '24px',
            border: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}>
            {isMobile ? (
              // Mobile: Simple vertical list with short texts
              dimensions.map((dim, i) => (
                <div key={dim.id} style={{
                  padding: '28px 32px',
                  borderBottom: i < dimensions.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px',
                  }}>
                    <div style={{ color: '#4338CA', width: '24px', height: '24px', flexShrink: 0 }}>
                      {dim.icon}
                    </div>
                    <h3 style={{
                      fontFamily: 'Georgia, serif', fontSize: '1.2rem', fontWeight: 700,
                      color: '#0D0F1A', margin: 0, letterSpacing: '-0.3px',
                    }}>
                      {dim.label}
                    </h3>
                  </div>

                  {/* Only Nodly virtues */}
                  <div style={{ padding: '8px 0' }}>
                    <div style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                    }}>
                      <div style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: '#4338CA',
                        flexShrink: 0, marginTop: '4px',
                      }}/>
                      <div style={{
                        fontSize: '0.98rem', lineHeight: 1.6,
                        color: '#374151', fontWeight: 500,
                      }}>
                        {dim.nodly.short}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Desktop: Original table
              <>
                {/* Column headers */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px' }}>
                  {columns.map((col) => (
                    <div key={col.key} style={{
                      padding: 'clamp(20px, 4vw, 32px) clamp(20px, 4vw, 32px) clamp(16px, 3vw, 28px)',
                      background: col.featured ? col.soft : 'white',
                      borderRight: col.key !== 'consultora' ? '1px solid rgba(0,0,0,0.07)' : 'none',
                      borderBottom: col.featured ? `3px solid ${col.accent}` : '3px solid rgba(0,0,0,0.06)',
                    }}>
                      <div style={{
                        fontFamily: 'Georgia, serif', fontSize: 'clamp(1.1rem, 3vw, 1.35rem)', fontWeight: 700,
                        color: col.featured ? col.accent : '#374151',
                      }}>
                        {col.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {dimensions.map((dim, i) => {
                  const isActive = activeDimension === dim.id
                  const isLast = i === dimensions.length - 1

                  return (
                    <div
                      key={dim.id}
                      onMouseEnter={() => handleEnter(dim.id)}
                      onMouseLeave={handleLeave}
                      style={{ borderBottom: !isLast ? '1px solid rgba(0,0,0,0.05)' : 'none' }}
                    >
                      {/* Label separator */}
                      <motion.div
                        animate={{ background: isActive ? '#EEF2FF' : '#FAFAFA' }}
                        transition={{ duration: 0.2 }}
                        style={{
                          padding: '13px 32px',
                          display: 'flex', alignItems: 'center', gap: '10px',
                          borderBottom: '1px solid rgba(0,0,0,0.04)',
                        }}
                      >
                        <motion.div
                          animate={{ color: isActive ? '#4338CA' : '#9CA3AF' }}
                          transition={{ duration: 0.2 }}
                        >
                          {dim.icon}
                        </motion.div>
                        <motion.span
                          animate={{ color: isActive ? '#4338CA' : '#6B7280' }}
                          transition={{ duration: 0.2 }}
                          style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.2px' }}
                        >
                          {dim.label}
                        </motion.span>
                      </motion.div>

                      {/* Three columns */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                        {columns.map((col) => (
                          <motion.div
                            key={col.key}
                            animate={{
                              background: isActive
                                ? col.featured ? '#F5F3FF' : '#FAFAFA'
                                : col.featured ? '#FDFCFF' : 'white',
                            }}
                            transition={{ duration: 0.2 }}
                            style={{
                              borderRight: col.key !== 'consultora' ? '1px solid rgba(0,0,0,0.05)' : 'none',
                              overflow: 'hidden',
                              padding: '16px 32px 20px',
                            }}
                          >
                            <AnimatePresence mode="wait">
                              {isActive ? (
                                <motion.p
                                  key="long"
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -4 }}
                                  transition={{ duration: 0.22 }}
                                  style={{
                                    fontSize: '1rem',
                                    color: col.featured ? '#374151' : '#6B7280',
                                    lineHeight: 1.72, margin: 0,
                                    fontWeight: col.featured ? 500 : 400,
                                    textAlign: 'justify',
                                  }}
                                >
                                  {dim[col.key].long}
                                </motion.p>
                              ) : (
                                <motion.p
                                  key="short"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.18 }}
                                  style={{
                                    fontSize: '0.92rem',
                                    color: col.featured ? '#7C6FF7' : '#94A3B8',
                                    lineHeight: 1.5, margin: 0,
                                    fontWeight: col.featured ? 600 : 400,
                                    fontStyle: 'italic',
                                  }}
                                >
                                  {dim[col.key].short}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </>
            )}
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}