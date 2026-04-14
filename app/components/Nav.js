'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile, isTablet } = useBreakpoint()

  const scrollTo = (id) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 24px' : '0 56px',
        height: '64px',
        background: 'rgba(247,248,252,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}>
        {/* Logo */}
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: '#0D0F1A' }}>
          Nodly<span style={{ color: '#4338CA' }}>.</span>
        </div>

        {/* Desktop / Wide — links normales */}
        {!isMobile && !isTablet && (
          <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            <a href="#" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#5A6075', textDecoration: 'none' }}>Servicios</a>
            <a href="#" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#5A6075', textDecoration: 'none' }}>Metodología</a>
            
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollTo('contacto') }}
              style={{
                background: 'linear-gradient(135deg, #4338CA, #6D28D9)',
                color: 'white', padding: '9px 22px',
                borderRadius: '8px', fontSize: '0.875rem',
                fontWeight: 500, textDecoration: 'none'
              }}
            >
              Diagnóstico gratuito →
            </a>
          </div>
        )}

        {/* Tablet — solo botón CTA + hamburguesa */}
        {isTablet && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollTo('contacto') }}
              style={{
                background: 'linear-gradient(135deg, #4338CA, #6D28D9)',
                color: 'white', padding: '8px 18px',
                borderRadius: '8px', fontSize: '0.82rem',
                fontWeight: 500, textDecoration: 'none'
              }}
            >
              Diagnóstico gratuito →
            </a>
            <HamburgerButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        )}

        {/* Mobile — solo hamburguesa */}
        {isMobile && (
          <HamburgerButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        )}
      </nav>

      {/* Mobile / Tablet menu overlay */}
      <AnimatePresence>
        {menuOpen && (isMobile || isTablet) && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 98,
                background: 'rgba(0,0,0,0.3)',
                backdropFilter: 'blur(4px)',
              }}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{
                position: 'fixed',
                top: '72px',
                left: isMobile ? '16px' : '24px',
                right: isMobile ? '16px' : '24px',
                zIndex: 99,
                background: 'white',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                overflow: 'hidden',
              }}
            >
              {/* Links */}
              {[
                { label: 'Servicios', id: null },
                { label: 'Metodología', id: 'layers' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  onClick={(e) => { e.preventDefault(); item.id ? scrollTo(item.id) : setMenuOpen(false) }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  style={{
                    display: 'block', padding: '18px 24px',
                    fontSize: '1rem', fontWeight: 500, color: '#374151',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    transition: 'background 0.15s',
                  }}
                  whileHover={{ backgroundColor: '#F7F8FC' }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* CTA en mobile */}
              <div style={{ padding: '16px' }}>
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); scrollTo('contacto') }}
                  style={{
                    display: 'block', textAlign: 'center',
                    background: 'linear-gradient(135deg, #4338CA, #6D28D9)',
                    color: 'white', padding: '14px',
                    borderRadius: '10px', fontSize: '0.95rem',
                    fontWeight: 600, textDecoration: 'none',
                  }}
                >
                  Diagnóstico gratuito →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function HamburgerButton({ open, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.92 }}
      style={{
        width: '40px', height: '40px',
        borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)',
        background: open ? '#EEF2FF' : 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', flexShrink: 0,
        transition: 'background 0.2s',
      }}
    >
      <div style={{ width: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <motion.span
          animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ display: 'block', height: '2px', background: open ? '#4338CA' : '#374151', borderRadius: '2px' }}
        />
        <motion.span
          animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'block', height: '2px', background: '#374151', borderRadius: '2px' }}
        />
        <motion.span
          animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ display: 'block', height: '2px', background: open ? '#4338CA' : '#374151', borderRadius: '2px' }}
        />
      </div>
    </motion.button>
  )
}
