'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function CTA() {
  const [form, setForm] = useState({ nombre: '', email: '', sector: '', mensaje: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const { isMobile } = useBreakpoint()

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.nombre || !form.email || !form.sector || !form.mensaje) {
      setErrorMsg('Por favor completa todos los campos.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          // Metadata automática
          userAgent: navigator.userAgent,
          idioma: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          referrer: document.referrer || 'Directo',
          utmSource: new URLSearchParams(window.location.search).get('utm_source') || '',
          utmMedium: new URLSearchParams(window.location.search).get('utm_medium') || '',
          utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ nombre: '', email: '', sector: '', mensaje: '' })
      } else {
        setErrorMsg(data.error || 'Algo salió mal. Intenta de nuevo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Error de conexión. Intenta de nuevo.')
      setStatus('error')
    }
  }
  const inputStyle = isMobile 
    ? {
        background: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '14px', padding: '16px 40px',
        fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
        fontSize: '0.9rem', color: 'white', outline: 'none',
        width: '100%', boxSizing: 'border-box',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }
    : {
        background: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '16px', padding: '18px 60px',
        fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
        fontSize: '1rem', color: 'white', outline: 'none',
        width: '100%', boxSizing: 'border-box',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }

  return (
    <div id="contacto" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 56px 96px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #312E81, #4C1D95)',
        borderRadius: '24px',
        padding: isMobile ? 'clamp(32px, 8vw, 48px) clamp(24px, 6vw, 40px)' : '72px 64px',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 'clamp(32px, 8vw, 48px)' : '54px',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles - mobile bottom */}
        <div style={{
          position: 'absolute', right: isMobile ? '-10%' : '20px', bottom: isMobile ? '-15%' : 'auto', top: isMobile ? 'auto' : '-80px',
          width: isMobile ? 'clamp(140px, 45vw, 220px)' : '320px', 
          height: isMobile ? 'clamp(140px, 45vw, 220px)' : '320px', 
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', left: isMobile ? '10%' : '20px', bottom: isMobile ? '-8%' : '-80px', right: isMobile ? 'auto' : 'auto', top: isMobile ? 'auto' : 'auto',
          width: isMobile ? 'clamp(100px, 30vw, 160px)' : '200px', 
          height: isMobile ? 'clamp(100px, 30vw, 160px)' : '200px', 
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)', pointerEvents: 'none'
        }} />

        {/* Left */}
        <div style={{ flex: '0 0 60%', position: 'relative', zIndex: 1 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
              fontWeight: 700, color: 'white',
              letterSpacing: '-1px', lineHeight: 1.15,
              marginBottom: '16px'
            }}
          >
            Sabemos lo que es tener un problema de datos y no saber por dónde empezar.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1rem', lineHeight: 1.65,
              textAlign: 'justify',
            }}
          >
            Por eso el diagnóstico es gratuito y sin apuro — queremos entender tu operación de verdad antes de proponer nada.
          </motion.p>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {[
              'Sin compromiso ni presión de ningún tipo',
              'Respuesta en breve',
              'Si no podemos ayudarte, te lo decimos en la primera llamada',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: 'rgba(167,139,250,0.2)',
                  border: '1px solid rgba(167,139,250,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5 L4 7 L8 3" stroke="#A78BFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Form */}
        <div style={{ flex: '0 0 40%', position: 'relative', zIndex: 1 }}>
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(167,139,250,0.3)',
                  borderRadius: '16px', padding: '40px 32px',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: 'rgba(167,139,250,0.2)',
                  border: '1px solid rgba(167,139,250,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12 L9 17 L20 6" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'Georgia, serif', fontSize: '1.4rem',
                  fontWeight: 700, color: 'white', marginBottom: '10px',
                }}>
                  ¡Mensaje recibido!
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                  Te contactamos en menos de 24 horas para entender tu operación y ver cómo podemos ayudarte.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
              >
                <input
                  type="text" name="nombre"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <input
                  type="email" name="email"
                  placeholder="Tu email"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <input
                  type="text" name="sector"
                  placeholder="Sector o industria"
                  value={form.sector}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <textarea
                  name="mensaje"
                  placeholder="¿Cuál es el principal problema que querés resolver?"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={3}
                  style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
                />

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        fontSize: '0.82rem', color: '#FCA5A5',
                        padding: '8px 12px', background: 'rgba(252,165,165,0.1)',
                        borderRadius: '8px', border: '1px solid rgba(252,165,165,0.2)',
                      }}
                    >
                      {errorMsg}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  whileHover={status !== 'loading' ? { scale: 1.02, translateY: -1 } : {}}
                  whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                  style={{
                    background: status === 'loading' ? 'rgba(255,255,255,0.7)' : 'white',
                    color: '#4338CA', border: 'none',
                    padding: '15px', borderRadius: '10px',
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '1rem', fontWeight: 700,
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    marginTop: '4px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: '8px',
                    transition: 'background 0.2s',
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        style={{
                          width: '16px', height: '16px', borderRadius: '50%',
                          border: '2px solid #4338CA',
                          borderTopColor: 'transparent',
                        }}
                      />
                      Enviando...
                    </>
                  ) : (
                    'Quiero el diagnóstico gratuito →'
                  )}
                </motion.button>

                <div style={{
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.3)',
                  textAlign: 'center', marginTop: '4px'
                }}>
                  Sin compromiso · Respuesta en breve
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}