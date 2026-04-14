'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { useBreakpoint } from '../hooks/useBreakpoint'

const layers = [
  {
    verb: 'Ver',
    name: 'Visibilidad',
    tagline: 'Saber qué está pasando en tu operación',
    accentColor: '#3B82F6',
    softBg: '#EFF6FF',
    borderColor: 'rgba(59,130,246,0.2)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="20" width="7" height="10" rx="2.5" fill="#3B82F6" opacity="0.35"/>
        <rect x="12" y="13" width="7" height="17" rx="2.5" fill="#3B82F6" opacity="0.6"/>
        <rect x="22" y="5" width="7" height="25" rx="2.5" fill="#3B82F6"/>
        <path d="M5 17 L15 10 L25 3" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2.5 2" strokeLinecap="round"/>
      </svg>
    ),
            desc: 'Conectamos todas tus fuentes de datos y construimos un panel que se actualiza diariamente de forma automática. Tienes claridad sobre ventas, stock y operaciones — sin tener que estar horas actualizando excels.',
    extras: [
      'Auditoría de todas tus fuentes de datos',
      'Flujo de actualización de datos automatizado',
      '5–8 indicadores clave de tu negocio',
      'Panel visual accesible para todo tu equipo',
    ],
    support: 'Monitoreo continuo, ajustes de métricas y reunión mensual de revisión con recomendaciones.',
    before: [
      { label: 'Reportes manuales', before: '6 hrs/semana', after: '0 hrs' },
      { label: 'Datos actualizados', before: 'Nunca', after: 'Cada día' },
      { label: 'Fuentes consolidadas', before: 'Dispersas', after: 'Un solo lugar' },
      { label: 'Decisiones con datos', before: '30%', after: '80%+' },
    ],
  },
  {
    verb: 'Entender',
    name: 'Inteligencia',
    tagline: 'Descubrir por qué pasan las cosas',
    accentColor: '#4338CA',
    softBg: '#EEF2FF',
    borderColor: 'rgba(67,56,202,0.2)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#4338CA" strokeWidth="1.5" opacity="0.25"/>
        <circle cx="16" cy="16" r="7.5" stroke="#4338CA" strokeWidth="1.5" opacity="0.55"/>
        <circle cx="16" cy="16" r="3.5" fill="#4338CA"/>
        <path d="M16 4 V8 M16 24 V28 M4 16 H8 M24 16 H28" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8.5 8.5 L11.2 11.2 M20.8 20.8 L23.5 23.5 M8.5 23.5 L11.2 20.8 M20.8 11.2 L23.5 8.5" stroke="#4338CA" strokeWidth="1" strokeLinecap="round" opacity="0.45"/>
      </svg>
    ),
    desc: 'Analizamos el historial completo de tu negocio para encontrar qué impulsa tus resultados. Incorporamos algoritmos predictivos para anticipar tendencias y alertas automáticas cuando algo se desvía.',
    extras: [
      'Análisis profundo de tu historial de datos',
      'Segmentación de clientes, productos y proveedores',
      'Algoritmos predictivos para detectar tendencias',
      'Alertas automáticas ante desvíos relevantes',
    ],
    support: 'Informe mensual con narrativa (qué pasó, por qué, qué se recomienda) y nuevas preguntas analíticas.',
    before: [
      { label: 'Causa raíz de problemas', before: 'Método habitual', after: 'Evidencia' },
      { label: 'Alertas ante desvíos', before: 'Ninguna', after: 'Automáticas' },
      { label: 'Tendencias detectadas', before: 'A destiempo', after: 'Con anticipación' },
      { label: 'Reuniones', before: 'Subjetivas', after: 'Con Datos' },
    ],
  },
  {
    verb: 'Anticipar',
    name: 'Predicción e IA',
    tagline: 'Actuar antes de que los problemas lleguen',
    accentColor: '#7C3AED',
    softBg: '#F5F3FF',
    borderColor: 'rgba(124,58,237,0.2)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="7" width="15" height="11" rx="3" fill="#7C3AED" opacity="0.15" stroke="#7C3AED" strokeWidth="1.5"/>
        <path d="M7 12 H14 M7 15 H11" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="13" y="16" width="15" height="11" rx="3" fill="#7C3AED" opacity="0.3" stroke="#7C3AED" strokeWidth="1.5"/>
        <path d="M17 20 H24 M17 23 H21" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="9" r="5" fill="#7C3AED"/>
        <path d="M22 9 L23.2 10.2 L26 7.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: 'Sistemas de IA que sugieren acciones concretas: cuánto reponer, qué va a pasar con tu demanda y qué tareas repetitivas pueden eliminarse. Incluye un chatbot conectado a tus datos para consultar en lenguaje natural.',
    extras: [
'Sugerencias de reposición basadas en IA y Machine Learning (ML)',
      'Algoritmos predictivos para múltiples escenarios',
      'Chatbot para consultar tus datos en lenguaje natural',
      'Eliminación de tareas repetitivas con IA',
    ],
    support: 'Ajuste continuo de modelos, incorporación de nuevos casos de uso y sesión estratégica mensual.',
    before: [
      { label: 'Decisiones de reposición', before: 'Manuales', after: 'Sugeridas por IA' },
      { label: 'Consultas a los datos', before: 'Solo técnicos', after: 'Todo el equipo' },
      { label: 'Escenarios futuros', before: 'Sin visibilidad', after: 'Modelados' },
      { label: 'Tareas repetitivas', before: 'Manuales', after: 'Automatizadas' },
    ],
  },
]

export default function Layers() {
  const [open, setOpen] = useState(null)
  const { isMobile, isTablet } = useBreakpoint()

  const containerPadding = isMobile ? '60px 16px' : isTablet ? '80px 28px' : '96px 56px'
  const cardPadding = isMobile ? '20px 24px' : isTablet ? '24px 28px' : '28px 36px'
  const iconSize = isMobile ? '52px' : isTablet ? '56px' : '64px'
  const verbSize = isMobile ? '1.5rem' : isTablet ? '1.65rem' : '1.8rem'

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: containerPadding }}> 

      {/* Header */}
      <AnimatedSection>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            fontSize: 'clamp(1.2rem, 3.5vw, 1.92rem)', fontWeight: 500, color: '#4338CA',
            letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px'

          }}>
            Capas de Madurez Analítica
          </div>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.6rem, 4vw, 3.6rem)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-1px', color: '#0D0F1A',
            marginBottom: '20px'
          }}>
            Ver. Entender. Anticipar.
          </h2>
          <p style={{
            fontSize: '1.26rem', color: '#5A6075',
            lineHeight: 1.7, maxWidth: '560px', margin: '0 auto'
          }}>
            Tres niveles de madurez analítica. Cada uno genera valor desde el primer mes y construye sobre el anterior.
          </p>
        </div>
      </AnimatedSection>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {layers.map((layer, i) => {
          const isOpen = open === i

          return (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                layout
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  border: '1.5px solid',
                  borderColor: isOpen ? layer.accentColor + '55' : 'rgba(0,0,0,0.07)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? `0 8px 40px ${layer.accentColor}18` : '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
              >
                {/* Card header */}
                <div
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '12px' : '16px',
                    padding: cardPadding,
                    cursor: 'pointer',
                    background: isOpen ? layer.softBg : 'white',
                    transition: 'background 0.3s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '20px' }}>
                    {/* Icon */}
                    <div style={{
                      width: iconSize, height: iconSize, borderRadius: '16px',
                      background: isOpen ? 'white' : layer.softBg,
                      border: `1px solid ${layer.borderColor}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isOpen ? `0 4px 16px ${layer.accentColor}20` : 'none',
                      transition: 'all 0.3s',
                    }}>
                      {layer.icon}
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                        <span style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: verbSize, fontWeight: 700,
                          color: isOpen ? layer.accentColor : '#0D0F1A',
                          letterSpacing: '-0.5px',
                          transition: 'color 0.3s',
                        }}>
                          {layer.verb}
                        </span>
                        <span style={{
                          fontSize: '0.86rem', fontWeight: 600,
                          color: layer.accentColor,
                          background: layer.softBg,
                          border: `1px solid ${layer.borderColor}`,
                          padding: '3px 12px', borderRadius: '100px',
                        }}>
                          {layer.name}
                        </span>
                      </div>
                      <p style={{
                        fontSize: '1.1rem', color: '#5A6075',
                        margin: 0, lineHeight: 1.5
                      }}>
                        {layer.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA expandir — centrado y llamativo */}
                <motion.div
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '8px', cursor: 'pointer',
                    padding: '10px 0',
                    background: isOpen ? layer.softBg : '#FAFAFA',
                    borderTop: `1px solid ${isOpen ? layer.borderColor : 'rgba(0,0,0,0.05)'}`,
                    transition: 'background 0.3s',
                  }}
                  whileHover={{ backgroundColor: layer.softBg }}
                >
                  <span style={{
                    fontSize: '0.82rem', fontWeight: 600,
                    color: isOpen ? layer.accentColor : '#9CA3AF',
                    letterSpacing: '0.04em',
                    transition: 'color 0.3s',
                  }}>
                    {isOpen ? 'Cerrar detalle' : 'Ver qué incluye →'}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0, y: isOpen ? 0 : [0, 3, 0] }}
                    transition={{
                      rotate: { duration: 0.3 },
                      y: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 5.5 L8 10.5 L13 5.5"
                        stroke={isOpen ? layer.accentColor : '#9CA3AF'}
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <div style={{
                        display: isMobile ? 'block' : 'grid', 
                        gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
                        borderTop: `1px solid ${layer.borderColor}`,
                      }}>
                        {/* Left */}
                        <div style={{ padding: isMobile ? '24px' : '40px', borderRight: isMobile ? 'none' : `1px solid ${layer.borderColor}`, marginBottom: isMobile ? '16px' : 0 }}>
                          <p style={{
                            fontSize: isMobile ? '1rem' : '1.08rem', color: '#374151',
                            lineHeight: 1.75, marginBottom: isMobile ? '20px' : '28px',
                            textAlign: 'justify',
                          }}>
                            {layer.desc}
                          </p>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                            {layer.extras.map((e, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: j * 0.06 }}
                                style={{
                                  display: 'flex', alignItems: 'center', gap: '10px',
                                  fontSize: '1rem', color: '#0D0F1A', fontWeight: 500,
                                }}
                              >
                                <div style={{
                                  width: '22px', height: '22px', borderRadius: '7px',
                                  background: layer.softBg,
                                  border: `1px solid ${layer.borderColor}`,
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  flexShrink: 0,
                                }}>
                                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <path d="M2 5.5 L4.5 8 L9 3" stroke={layer.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                {e}
                              </motion.div>
                            ))}
                          </div>

                          <div style={{
                            padding: '16px 20px',
                            background: layer.softBg,
                            border: `1px solid ${layer.borderColor}`,
                            borderRadius: '12px',
                            fontSize: '0.94rem', color: '#5A6075', lineHeight: 1.65,
                          }}>
                            <span style={{ fontWeight: 700, color: layer.accentColor }}>Soporte continuo: </span>
                            {layer.support}
                          </div>
                        </div>

                        {/* Right — before/after */}
                        <div style={{ padding: isMobile ? '24px' : '40px', background: layer.softBg }}>
                          <div style={{
                            fontSize: isMobile ? '0.8rem' : '0.86rem', fontWeight: 700,
                            color: layer.accentColor, letterSpacing: '0.08em',
                            textTransform: 'uppercase', marginBottom: '20px',
                            textAlign: 'center',
                          }}>
                            Diagnóstico · Antes versus Después
                          </div>

                          <div style={{
                            display: isMobile ? 'block' : 'grid', 
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                            gap: isMobile ? '4px' : '8px', marginBottom: isMobile ? '8px' : '10px',
                            paddingBottom: '10px',
                            borderBottom: `1px solid ${layer.borderColor}`,
                          }}>
                            <div/>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#EF4444', textAlign: 'center' }}>SIN NODLY</div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: layer.accentColor, textAlign: 'center' }}>CON NODLY</div>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {layer.before.map((row, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: j * 0.07 }}
                                style={{
                                  display: isMobile ? 'block' : 'grid', 
                                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                                  gap: isMobile ? '6px' : '8px', alignItems: 'center',
                                  padding: isMobile ? '10px 12px' : '12px 14px', borderRadius: '10px',
                                  background: j % 2 === 0 ? 'white' : 'transparent',
                                  border: j % 2 === 0 ? `1px solid ${layer.borderColor}` : 'none',
                                }}
                              >
                                <div style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.3, fontWeight: 500 }}>
                                  {row.label}
                                </div>
                                <div style={{
                                  fontSize: '0.92rem', fontWeight: 600,
                                  color: '#EF4444', textAlign: 'center',
                                  textDecoration: 'line-through', opacity: 0.65,
                                }}>
                                  {row.before}
                                </div>
                                <div style={{
                                  fontSize: '0.92rem', fontWeight: 700,
                                  color: layer.accentColor, textAlign: 'center',
                                  display: 'flex', alignItems: 'center',
                                  justifyContent: 'center', gap: '4px',
                                }}>
                                  <span style={{
                                    width: '5px', height: '5px', borderRadius: '50%',
                                    background: layer.accentColor, flexShrink: 0,
                                    display: 'inline-block',
                                  }}/>
                                  {row.after}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          )
        })}
      </div>
    </div>
  )
}