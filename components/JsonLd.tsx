/**
 * JsonLd — injects Person schema for Google rich results.
 * This tells Google: who Christiana is, her title, her image, and her website.
 * Google may show this in Knowledge Panel & search snippets.
 */
export default function JsonLd({ siteUrl }: { siteUrl: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Christiana Akua Feyie Yeboaa Okyere',
    alternateName: 'Akua Feyie',
    url: siteUrl,
    image:
      'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777771615/2_oxwowz.jpg',
    jobTitle: 'Founder & CEO',
    worksFor: {
      '@type': 'Organization',
      name: 'SMIC360 Limited',
      url: siteUrl,
    },
    description:
      'Ghanaian entrepreneur and CEO with over 20 years of experience across Advertising, Business Management, Shipping, Real Estate, and Hospitality.',
    nationality: {
      '@type': 'Country',
      name: 'Ghana',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Ghana Institute of Public Administration',
        description: 'Executive MBA',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Kwame Nkrumah University of Science and Technology',
        description: 'BFA in Communication Studies',
      },
    ],
    sameAs: [
      'https://wa.me/233244783099',
    ],
    knowsAbout: [
      'Entrepreneurship',
      'Business Management',
      'Advertising & Marketing',
      'Shipping & Freight',
      'Real Estate',
      'Hospitality',
      'Leadership',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
