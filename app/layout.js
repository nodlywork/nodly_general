import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Nodly · Datos e IA para PYMEs operativas",
  description: "Ayudamos a distribuidoras, retailers y operadores logísticos a tomar mejores decisiones con los datos que ya tienen. Sin contratar un equipo tech ni depender de consultoras gigantes.",
  keywords: "consultoría datos, inteligencia artificial PYMEs, analytics supply chain, Power BI, data engineering España Argentina",
  openGraph: {
    title: "Nodly · Datos e IA para PYMEs operativas",
    description: "Transformamos los datos que ya tenés en visibilidad, comprensión y acción.",
    url: "https://nodly.io",
    siteName: "Nodly",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
