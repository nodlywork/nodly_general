'use client'

import { useState, useEffect } from 'react'

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('desktop')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setBreakpoint('mobile')
      else if (w < 1024) setBreakpoint('tablet')
      else if (w > 1440) setBreakpoint('wide')
      else setBreakpoint('desktop')
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return {
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
    isWide: breakpoint === 'wide',
    isMobileOrTablet: breakpoint === 'mobile' || breakpoint === 'tablet',
  }
}
