export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Mesa Commercial Real Estate',
    description:
      'Commercial real estate leasing, tenant representation, and investment sales across Brownwood, Abilene, San Angelo, and DFW Texas.',
    url: 'https://mesa-cre.com',
    telephone: '+12145771520',
    email: 'bharris@mesa-cre.com',
    areaServed: [
      { '@type': 'City', name: 'Brownwood', containedInPlace: { '@type': 'State', name: 'Texas' } },
      { '@type': 'City', name: 'Abilene', containedInPlace: { '@type': 'State', name: 'Texas' } },
      { '@type': 'City', name: 'San Angelo', containedInPlace: { '@type': 'State', name: 'Texas' } },
      { '@type': 'MetroArea', name: 'Dallas-Fort Worth Metroplex', containedInPlace: { '@type': 'State', name: 'Texas' } },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial Real Estate Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Leasing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tenant Representation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Investment Sales' } },
      ],
    },
    employee: {
      '@type': 'Person',
      name: 'Brandon Harris',
      jobTitle: 'Principal Broker',
      email: 'bharris@mesa-cre.com',
      telephone: '+12145771520',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
