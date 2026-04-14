'use client'

import AnimatedSection from './AnimatedSection'

const metrics = [
  {
    val: '15', suffix: '+',
    title: 'Años en el terreno',
    desc: 'PYMEs, multinacionales, docencia universitaria y proyectos de transformación operativa real.',
  },
  {
    val: '1', suffix: '',
    title: 'Sola fuente de verdad',
    desc: 'Todos tus datos consolidados, documentados y con una sola respuesta para cada pregunta del negocio.',
  },
  {
    val: '0', suffix: '',
    title: 'Letra chica',
    desc: 'Cada sistema que construimos lo entiende tu equipo. Sin tecnicismos, sin dependencias, sin sorpresas.',
  },
]

export default function MetricsStrip() {
  return (
    <div className="metrics-strip">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div
                className="metric-item"
                style={{
                  paddingLeft: i === 0 ? 0 : undefined,
                  paddingRight: i === metrics.length - 1 ? 0 : undefined,
                  borderRight: i < metrics.length - 1 ? undefined : 'none',
                }}
              >
                <div className="metric-number">
                  {m.val}<span style={{ color: '#818CF8' }}>{m.suffix}</span>
                </div>
                <div className="metric-title">{m.title}</div>
                <div className="metric-desc">{m.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}