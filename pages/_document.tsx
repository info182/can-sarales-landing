import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#4A5D42" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body><Main /><NextScript /></body>
    </Html>
  )
}
