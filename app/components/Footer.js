'use client'

import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Footer() {
  const { isMobile } = useBreakpoint()
  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: 'clamp(24px, 6vw, 40px) clamp(20px, 5vw, 56px)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap', gap: 'clamp(12px, 3vw, 20px)'
      }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', fontWeight: 600, color: '#0D0F1A' }}>
          Nodly<span style={{ color: '#4338CA' }}>.</span>
        </div>
        <div style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>
          © 2026 Nodly · España · Argentina
        </div>
        <div style={{ display: 'flex', gap: '28px' }}>
          {['LinkedIn', 'Privacidad', 'contacto@nodly.io'].map(link => (
            <a key={link} href="#" style={{ fontSize: '0.78rem', color: '#9CA3AF', textDecoration: 'none' }}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}