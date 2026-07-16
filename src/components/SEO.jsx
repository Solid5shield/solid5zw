
import { Helmet } from 'react-helmet-async'

export default function SEO({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
}) {
  const siteName = 'Solid5 Agency' 
  const domain = 'https://solid5.co.zw' 
  const fullTitle = `${title} | ${siteName}`
  const url = `${domain}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${domain}${image}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_ZW" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${domain}${image}`} />
      <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Your Company Name',
      description: 'Company registration, web development, mobile app development, and UI/UX design.',
      url: 'https://solid5.co.zw',
      areaServed: 'ZW',
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CIPZ Company Registration' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI / UX Design' } },
      ],
    })}
  </script>
    </Helmet>
  )
}