import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config({ path: '.env.local' })

const resend = new Resend(process.env.RESEND_API_KEY)

async function main() {
  try {
    const r = await resend.emails.send({
      from: 'Nodly Test <onboarding@resend.dev>',
      to: 'nodly.work@gmail.com',
      subject: 'Prueba de email desde entorno local',
      html: `<p>Prueba de envío desde entorno local a las ${new Date().toLocaleString()}.</p>`,
    })
    console.log('Respuesta Resend:', r)
  } catch (err) {
    console.error('Error enviando con Resend:', err)
    process.exit(1)
  }
}

main()
