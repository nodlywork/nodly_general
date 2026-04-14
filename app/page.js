import Nav from './components/Nav'
import Hero from './components/Hero'
import MetricsStrip from './components/MetricsStrip'
import Layers from './components/Layers'
import HowWeWork from './components/HowWeWork'
import Differentiators from './components/Differentiators'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main style={{ background: '#F7F8FC', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <MetricsStrip />
      <Layers />
      <HowWeWork />
      <Differentiators />
      <CTA />
      <Footer />
    </main>
  )
}