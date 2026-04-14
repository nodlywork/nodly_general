'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { useBreakpoint } from '../hooks/useBreakpoint'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico gratuito',
    desc: 'Entendemos tu operación, tus fuentes de datos y los puntos donde más duele. Sin vender nada todavía.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7.5 11 L10 13.5 L14.5 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Punto de partida',
    accentColor: '#4338CA',
    softBg: '#EEF2FF',
  },
  {
    num: '02',
    title: 'Propuesta a medida',
    desc: 'Diseñamos el recorrido según tu situación actual y tus objetivos concretos. Sin plantillas genéricas ni promesas vacías.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="4" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 9 H15 M7 13 H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'A tu ritmo',
    accentColor: '#5B21B6',
    softBg: '#EDE9FE',
  },
  {
    num: '03',
    title: 'Construcción y puesta en marcha',
    desc: 'Integramos tus datos, construimos el sistema y formamos a tu equipo para que lo entienda desde el día uno.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <path d="M3 17 L8 12 L12 15.5 L17 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    tag: 'Manos a la obra',
    accentColor: '#6D28D9',
    softBg: '#F5F3FF',
  },
  {
    num: '04',
    title: 'Acompañamiento continuo',
    desc: 'Seguimiento mensual, análisis con recomendaciones concretas y evolución del sistema a medida que crece tu negocio.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <path d="M11 3 C6.58 3 3 6.58 3 11 C3 15.42 6.58 19 11 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M15 12.5 C15 12.5 16.8 15 18.5 15 C20.2 15 19.5 11 19.5 11 C19.5 11 20.2 7 18.5 7 C16.8 7 15 9.5 15 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M11 7 V11 L13.5 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Para siempre',
    accentColor: '#7C3AED',
    softBg: '#F5F3FF',
  },
]

export default function HowWeWork() {
  const [hovered, setHovered] = useState(null)
  const { isMobile, isTablet } = useBreakpoint()

  const gridCols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'
  const linePadding = isMobile ? '16px' : isTablet ? '24px' : '56px'
  const containerPadding = isMobile ? 'clamp(40px, 8vw, 60px) clamp(16px, 4vw, 28px)' : '96px 56px'
  const noHover = isMobile
  const gap = isMobile ? '20px' : '24px'
  const iconSize = isMobile ? '64px' : '80px'
  const nodeMarginBottom = isMobile ? '20px' : '28px'

  return (
    <div style={{ background: 'white' }}>
      <div id="como-trabajamos" style={{ background: 'white' }}></div>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: containerPadding }}>
        {/* Header */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: isTablet ? '64px' : '88px' }}>
            <div style={{ 
              fontSize: 'clamp(1.2rem, 3.5vw, 1.92rem)', 
              fontWeight: 500, color: '#4338CA', 
              letterSpacing: '0.06em', textTransform: 'uppercase', 
              marginBottom: '20px' 

            }}>
              Cómo trabajamos
            </div>
            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.3rem, 5vw, 3.6rem)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-1.5px', color: '#0D0F1A', marginBottom: '24px',
            }}>
              Sin humo.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#4338CA' }}>Con método.</em>
            </h2>
            <p style={{ 
              fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', 
              color: '#5A6075', 
              lineHeight: 1.75, 
              maxWidth: '600px', margin: '0 auto', 
              textAlign: 'justify' 
            }}>
              No somos técnicos que aprendieron de negocios en libros. Venimos de operar supply chain en multinacionales de retail y logística, y enseñamos analytics avanzado a nivel universitario.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>

          {/* Base line - Desktop only */}
          {!isMobile && !isTablet && (
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '7%', right: '7%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #DDD6FE 15%, #C4B5FD 50%, #DDD6FE 85%, transparent)',
              zIndex: 0,
            }} />
          )}

          {/* Animated progress line - Desktop only */}
          {!isMobile && !isTablet && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.3, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: '40px',
                left: '7%', right: '7%',
                height: '2px',
                background: 'linear-gradient(90deg, #4338CA, #5B21B6, #6D28D9, #7C3AED)',
                zIndex: 1,
                transformOrigin: 'left',
                borderRadius: '2px',
              }}
            />
          )}

          {/* Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: gridCols,
            gap,
            position: 'relative',
            zIndex: 2,
            alignItems: 'start',
          }}>
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div
                  onMouseEnter={!noHover ? () => setHovered(i) : undefined}
                  onMouseLeave={!noHover ? () => setHovered(null) : undefined}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  {/* Node */}
                  <motion.div
                    animate={{
                      scale: !noHover && hovered === i ? 1.12 : 1,
                      boxShadow: !noHover && hovered === i
                        ? `0 0 0 7px ${step.softBg}, 0 0 0 9px ${step.accentColor}28, 0 10px 28px ${step.accentColor}28`
                        : `0 0 0 4px ${step.softBg}, 0 2px 8px rgba(0,0,0,0.08)`,
                    }}
                    transition={{ duration: 0.25 }}
                    style={{
                      width: iconSize, height: iconSize,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${step.softBg}, white)`,
                      border: `2px solid ${step.accentColor}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: step.accentColor,
                      marginBottom: nodeMarginBottom,
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                    <div style={{
                      position: 'absolute',
                      top: '-5px', right: '-5px',
                      width: '24px', height: '24px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}cc)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.65rem', fontWeight: 800,
                      color: 'white',
                      border: '2px solid white',
                    }}>
                      {i + 1}
                    </div>
                  </motion.div>

                  {/* Tag */}
                  <motion.div
                    animate={{ color: !noHover && hovered === i ? step.accentColor : '#9CA3AF' }}
                    style={{
                      fontSize: 'clamp(0.75rem, 2vw, 0.82rem)', fontWeight: 600,
                      letterSpacing: '0.07em', textTransform: 'uppercase',
                      marginBottom: '12px',
                      display: 'flex', alignItems: 'center', gap: '6px',
                      height: '20px',
                    }}
                  >
                    <motion.div
                      animate={{ width: !noHover && hovered === i ? '18px' : '7px' }}
                      transition={{ duration: 0.25 }}
                      style={{
                        height: '2px',
                        background: !noHover && hovered === i ? step.accentColor : '#E5E7EB',
                        borderRadius: '2px',
                        flexShrink: 0,
                      }}
                    />
                    {step.tag}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    animate={{ color: !noHover && hovered === i ? step.accentColor : '#0D0F1A' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(1.2rem, 3.5vw, 1.35rem)', fontWeight: 700,
                      letterSpacing: '-0.4px', lineHeight: 1.25,
                      marginBottom: '14px', textAlign: 'center',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Desc */}
                  <p style={{
                    fontSize: 'clamp(0.95rem, 2.8vw, 1.05rem)', color: '#5A6075',
                    lineHeight: 1.72, textAlign: 'justify',
                    margin: 0, width: '100%',
                  }}>
                    {step.desc}
                  </p>

                  {/* Bottom accent bar */}
                  <motion.div
                    animate={{ scaleX: !noHover && hovered === i ? 1 : 0, opacity: !noHover && hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginTop: '22px',
                      height: '3px', width: '44px',
                      borderRadius: '2px',
                      background: `linear-gradient(90deg, ${step.accentColor}, ${step.accentColor}55)`,
                      transformOrigin: 'center',
                    }}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <AnimatedSection delay={0.5}>
          <div style={{
            marginTop: isTablet ? '60px' : '80px',
            padding: isMobile ? '24px 20px' : '32px 44px',
            background: 'linear-gradient(135deg, #EEF2FF, #EDE9FE)',
            border: '1px solid rgba(109,40,217,0.12)',
            borderRadius: '18px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: isMobile ? '24px' : '32px', flexWrap: 'wrap',
          }}>
            <p style={{ 
              fontSize: 'clamp(1.05rem, 3vw, 1.18rem)', 
              color: '#374151', lineHeight: 1.7, margin: 0, 
              maxWidth: '560px', textAlign: 'justify',
              flex: isMobile ? 1 : undefined 
            }}>
              <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, color: '#4338CA' }}>
                Sabemos lo que es tener un problema de datos y no saber por dónde empezar.
              </span> 
              Por eso el diagnóstico es gratuito y sin apuro — queremos entender tu operación de verdad antes de proponer nada.
            </p> 
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(109,40,217,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg, #4338CA, #7C3AED)',
                color: 'white', padding: '16px 32px',
                borderRadius: '12px', textDecoration: 'none',
                fontSize: 'clamp(1rem, 2.5vw, 1.08rem)', fontWeight: 600,
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(109,40,217,0.25)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            >
              Empezar diagnóstico gratuito →
            </motion.a>
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}
