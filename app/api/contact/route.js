import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const {
      nombre, email, sector, mensaje,
      // Metadata automática
      userAgent, idioma, timezone, referrer, utmSource, utmMedium, utmCampaign
    } = await request.json()

    if (!nombre || !email || !sector || !mensaje) {
      return Response.json({ error: 'Todos los campos son obligatorios' }, { status: 400 })
    }

    const now = new Date()
    const timestamp = now.toISOString()
    const fechaLegible = now.toLocaleDateString('es-ES', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    })
    const horaLegible = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })

    // Inferir dispositivo
    const ua = userAgent || ''
    const dispositivo = /mobile/i.test(ua) ? 'Mobile' : /tablet/i.test(ua) ? 'Tablet' : 'Desktop'
    const navegador = /chrome/i.test(ua) ? 'Chrome' : /safari/i.test(ua) ? 'Safari' : /firefox/i.test(ua) ? 'Firefox' : /edge/i.test(ua) ? 'Edge' : 'Otro'

    // Inferir mercado desde timezone
    const mercado = timezone?.includes('America/Argentina') || timezone?.includes('America/Buenos_Aires')
      ? '🇦🇷 Argentina'
      : timezone?.includes('Europe/Madrid') || timezone?.includes('Europe/')
      ? '🇪🇸 España / Europa'
      : timezone || 'Desconocido'

    // Fuente de tráfico
    const fuente = utmSource
      ? `${utmSource}${utmMedium ? ` / ${utmMedium}` : ''}${utmCampaign ? ` / ${utmCampaign}` : ''}`
      : referrer
      ? referrer.includes('google') ? 'Google'
        : referrer.includes('linkedin') ? 'LinkedIn'
        : referrer.includes('instagram') ? 'Instagram'
        : referrer
      : 'Directo'

    const field = (label, value, color = '#F7F8FC', borderColor = 'rgba(0,0,0,0.06)', textColor = '#0D0F1A') => `
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
        <tr>
          <td style="background:${color}; border:1px solid ${borderColor}; border-radius:8px; padding:12px 16px;">
            <p style="margin:0 0 3px; font-size:10px; font-weight:700; color:#9CA3AF; text-transform:uppercase; letter-spacing:0.08em;">${label}</p>
            <p style="margin:0; font-size:14px; color:${textColor}; font-weight:500;">${value || '—'}</p>
          </td>
        </tr>
      </table>`

    await resend.emails.send({
      from: 'Nodly Web <onboarding@resend.dev>',
      to: 'federicocastell@gmail.com',
      subject: `Nuevo lead — ${nombre} · ${sector} · ${mercado}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0; padding:0; background:#F7F8FC; font-family: 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F8FC; padding:48px 24px;">
            <tr><td align="center">
              <table width="620" cellpadding="0" cellspacing="0" style="background:white; border-radius:16px; border:1px solid rgba(0,0,0,0.07); overflow:hidden;">

                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#312E81,#4C1D95); padding:28px 40px;">
                    <p style="margin:0 0 6px; font-size:10px; font-weight:700; color:rgba(255,255,255,0.4); letter-spacing:0.1em; text-transform:uppercase;">Nodly · Nuevo diagnóstico solicitado</p>
                    <h1 style="margin:0; font-size:22px; font-weight:700; color:white; letter-spacing:-0.5px;">${nombre}</h1>
                    <p style="margin:4px 0 0; font-size:13px; color:rgba(255,255,255,0.55);">${email} · ${sector}</p>
                  </td>
                </tr>

                <!-- BLOQUE BBDD — campos estructurados para exportar -->
                <tr>
                  <td style="padding:24px 40px 16px; border-bottom:2px dashed rgba(67,56,202,0.15);">
                    <p style="margin:0 0 14px; font-size:10px; font-weight:700; color:#4338CA; text-transform:uppercase; letter-spacing:0.1em;">
                      📋 Datos estructurados · Para BBDD
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding-right:6px;">
                          ${field('Nombre', nombre)}
                          ${field('Email', `<a href="mailto:${email}" style="color:#4338CA;text-decoration:none;">${email}</a>`, '#EEF2FF', 'rgba(67,56,202,0.12)', '#4338CA')}
                          ${field('Sector', sector)}
                          ${field('Timestamp', timestamp)}
                        </td>
                        <td width="50%" style="padding-left:6px;">
                          ${field('Mercado', mercado)}
                          ${field('Fuente', fuente)}
                          ${field('Dispositivo', `${dispositivo} · ${navegador}`)}
                          ${field('Idioma', idioma || '—')}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- BLOQUE LECTURA -->
                <tr>
                  <td style="padding:24px 40px 32px;">
                    <p style="margin:0 0 14px; font-size:10px; font-weight:700; color:#9CA3AF; text-transform:uppercase; letter-spacing:0.1em;">
                      💬 Mensaje del lead
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                      <tr>
                        <td style="background:#EEF2FF; border:1px solid rgba(67,56,202,0.15); border-radius:12px; padding:20px 24px;">
                          <p style="margin:0; font-size:16px; color:#374151; line-height:1.7;">${mensaje}</p>
                        </td>
                      </tr>
                    </table>

                    <p style="margin:0 0 6px; font-size:11px; color:#9CA3AF;">
                      Recibido el ${fechaLegible} a las ${horaLegible} · ${dispositivo} · ${mercado}
                    </p>

                    <!-- CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${email}?subject=Re: Tu diagnóstico con Nodly&body=Hola ${nombre},%0A%0AGracias por contactarte con Nodly..."
                            style="display:inline-block; background:linear-gradient(135deg,#4338CA,#6D28D9); color:white; padding:14px 32px; border-radius:10px; text-decoration:none; font-size:15px; font-weight:700;">
                            Responder a ${nombre} →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:16px 40px; border-top:1px solid rgba(0,0,0,0.06); background:#FAFAFA;">
                    <p style="margin:0; font-size:11px; color:#9CA3AF; text-align:center;">
                      Nodly · nodly.io · Generado automáticamente desde el formulario de contacto
                    </p>
                  </td>
                </tr>

              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error enviando email:', error)
    return Response.json({ error: 'Error al enviar el mensaje' }, { status: 500 })
  }
}