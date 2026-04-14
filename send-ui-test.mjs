const url = 'http://localhost:3000/api/contact'

async function main() {
  const payload = {
    nombre: 'Prueba UI',
    email: 'nodly.work@gmail.com',
    sector: 'Testing',
    mensaje: 'Mensaje de prueba enviado desde script que simula la UI',
    userAgent: 'node-fetch/1.0',
    idioma: 'es-ES',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    referrer: 'http://localhost:3000',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    console.log('HTTP', res.status)
    console.log(data)
  } catch (err) {
    console.error('Fetch error:', err)
    process.exit(1)
  }
}

main()
