
import Head from 'next/head'
import React, { useMemo, useState } from 'react'
import { Mountain, Dumbbell, Flame, Waves, Car, Phone, Mail, MapPin, ChevronRight, ArrowUpRight, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const BRAND = { primary: '#4A5D42', accent: '#B86E4B', light: '#F4F1EC', dark: '#1E1E1E' }

const IMAGES = {
  hero: '/img/can-sarales-living-chandelier-deia-3200w.webp',
  pool: '/img/can-sarales-views-tramuntana-sea-deia-2200w.webp',
  kitchen: '/img/can-sarales-kitchen-island-deia-2200w.webp',
  dining: '/img/can-sarales-dining-round-table-deia-2200w.webp',
  bedroom: '/img/can-sarales-master-bedroom-bridge-art-deia-2200w.webp',
  terrace: '/img/can-sarales-burgundy-suite-deia-1200w.webp',
  gym: '/img/can-sarales-office-desk-sofa-deia-1200w.webp',
}

const TEXT = { /* same as in the canvas version, omitted for brevity here */ }

export default function Home() {
  const [lang, setLang] = useState<'es'|'en'>('es');
  const t = ({
    es: {
      brand: 'Can Sarales', nav: { villa: 'La Villa', experiences: 'Experiencias', location: 'Ubicación', enquire: 'Consulta' },
      heroTitle: 'Deià, en privado.',
      heroSub: 'La villa más deseada del pueblo: 4 suites, piscina infinity con vistas a mar y montaña, gimnasio privado y cocina exterior con horno de piedra. Solo adultos.',
      ctaPrimary: 'Consultar disponibilidad', ctaSecondary: 'Ver galería',
      featuresTitle: 'Por qué Can Sarales',
      features: [
        { icon: Waves, label: 'Piscina infinity 10×5' },
        { icon: Dumbbell, label: 'Gimnasio privado' },
        { icon: Flame, label: 'BBQ + horno de piedra' },
        { icon: Mountain, label: 'Vistas mar & montaña' },
        { icon: Car, label: 'Parking para 3 coches' },
      ],
      galleryTitle: 'Galería',
      layoutTitle: 'Distribución ideal para 4 parejas',
      layoutBullets: [
        'Master suite con vestidor, baño doble y altillo‑oficina',
        '3 suites en planta inferior, todas con baño y vistas',
        'Salón con ventanales, mesa redonda 8–10, chimenea',
        'Cocina con isla y mesa (6 + 4 taburetes)',
        'Terraza comedor 8 pax y lounge exterior',
        'Zona piscina con kitchenette y baño',
        'Despacho adicional con sofá‑cama',
      ],
      expTitle: 'Experiencias a medida',
      expCards: [
        { title: 'Chef privado', desc: 'Cocina mallorquina, maridajes y BBQ al horno de piedra in‑villa.' },
        { title: 'Day‑charter Port de Sóller', desc: 'Salida privada desde Sóller hacia calas y puestas de sol.' },
        { title: 'Wellness & fitness', desc: 'Masajes, yoga y personal trainer en tu gimnasio privado.' },
        { title: 'Work‑ation', desc: 'Dos espacios de oficina, silencio y vistas para concentrarte.' },
      ],
      locationTitle: 'Ubicación',
      locationText: 'Deià, Serra de Tramuntana (Mallorca). Distancias: Cala Deià 8 min, Valldemossa 20 min, Port de Sóller 25 min, Palma 40 min.',
      enquireTitle: 'Consulta disponibilidad',
      form: { name: 'Nombre', email: 'Email', phone: 'Teléfono', checkin: 'Llegada', checkout: 'Salida', msg: 'Mensaje (opcional)', submit: 'Enviar consulta', alt: 'o escríbenos por WhatsApp' },
      badgeAdults: 'Solo adultos · Máx. 8 huéspedes',
      footer: { terms: 'Términos & políticas', adults: 'Adult‑only (no niños/mascotas)', eco: 'Eco‑tasa según normativa Balear', hours: 'Check‑in 16:00 · Check‑out 11:00' }
    },
    en: {
      brand: 'Can Sarales', nav: { villa: 'The Villa', experiences: 'Experiences', location: 'Location', enquire: 'Enquire' },
      heroTitle: 'Deià, in private.',
      heroSub: 'The village’s most coveted villa: 4 en‑suite bedrooms, infinity pool with sea & mountain views, private gym and outdoor stone oven. Adults‑only.',
      ctaPrimary: 'Check availability', ctaSecondary: 'View gallery',
      featuresTitle: 'Why Can Sarales',
      features: [
        { icon: Waves, label: '10×5 infinity pool' },
        { icon: Dumbbell, label: 'Private gym' },
        { icon: Flame, label: 'BBQ & stone oven' },
        { icon: Mountain, label: 'Sea & mountain views' },
        { icon: Car, label: '3‑car parking' },
      ],
      galleryTitle: 'Gallery',
      layoutTitle: 'Perfect layout for 4 couples',
      layoutBullets: [
        'Master suite with walk‑in, double vanity & mezzanine office',
        '3 en‑suite bedrooms on lower floor, all with views',
        'Living room with picture windows, round table 8–10, fireplace',
        'Island kitchen and table (6 + 4 stools)',
        'Dining terrace (8) and outdoor lounge',
        'Pool area with kitchenette & full bath',
        'Additional study with sofa‑bed',
      ],
      expTitle: 'Tailor‑made experiences',
      expCards: [
        { title: 'Private chef', desc: 'Mallorcan tasting menus and stone‑oven BBQ in‑villa.' },
        { title: 'Day‑charter from Port de Sóller', desc: 'Private boat to hidden coves and golden‑hour cruises.' },
        { title: 'Wellness & fitness', desc: 'Massages, yoga and personal trainer in your private gym.' },
        { title: 'Work‑ation', desc: 'Two dedicated workspaces, silence and views to focus.' },
      ],
      locationTitle: 'Location',
      locationText: 'Deià, Serra de Tramuntana (Mallorca). Distances: Cala Deià 8 min, Valldemossa 20 min, Port de Sóller 25 min, Palma 40 min.',
      enquireTitle: 'Check availability',
      form: { name: 'Name', email: 'Email', phone: 'Phone', checkin: 'Check‑in', checkout: 'Check‑out', msg: 'Message (optional)', submit: 'Send enquiry', alt: 'or message us on WhatsApp' },
      badgeAdults: 'Adults‑only · Max 8 guests',
      footer: { terms: 'Terms & policies', adults: 'Adults‑only (no children/pets)', eco: 'Eco‑tax per Balearic law', hours: 'Check‑in 16:00 · Check‑out 11:00' }
    }
  } as any)[lang];

  const schema = useMemo(() => ({
    '@context': 'https://schema.org','@type': 'VacationRental',
    name: 'Can Sarales – Luxury Adults‑Only Villa in Deià', description: t.heroSub,
    image: [IMAGES.hero, IMAGES.pool, IMAGES.kitchen],
    address: { '@type': 'PostalAddress', addressLocality: 'Deià', addressRegion: 'Illes Balears', addressCountry: 'ES' },
    geo: { '@type': 'GeoCoordinates', latitude: 39.75, longitude: 2.65 },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Infinity pool 10×5' },
      { '@type': 'LocationFeatureSpecification', name: 'Private gym' },
      { '@type': 'LocationFeatureSpecification', name: 'BBQ & stone oven' },
      { '@type': 'LocationFeatureSpecification', name: 'Adults‑only' },
    ],
    petsAllowed: false, maximumAttendeeCapacity: 8, checkinTime: '16:00', checkoutTime: '11:00',
    offers: { '@type': 'Offer', priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'EUR', price: '1900', unitCode: 'DAY' }, availability: 'https://schema.org/InStock', url: 'https://booking.cansaralesdeia.com/' },
    url: 'https://www.cansaralesdeia.com/', telephone: '+34 622 947 471'
  }), [lang, t.heroSub])

  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }

  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
      <Head>
        <title>Can Sarales · Luxury Adults‑Only Villa in Deià</title>
        <meta name="description" content="4 en‑suite bedrooms, infinity pool with sea & mountain views, private gym and outdoor stone oven. Adults‑only." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      {/* ... (UI identical to the canvas version) ... */}
      <main className="p-10 text-center">Landing loaded. Replace this block with the full component from the canvas if needed.</main>
    </div>
  )
}
