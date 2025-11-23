import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

export default function SEO({
  title = 'LifeBiotech | Leading Pharmaceutical & Healthcare Solutions in India',
  description = 'LifeBiotech manufactures premium pharmaceutical products, medicines, and healthcare solutions trusted by healthcare professionals across India. Quality healthcare at affordable prices.',
  keywords = 'lifebiotech, life biotech, pharmaceutical products, medicines, healthcare solutions, pharmacy, drugs, medical supplies, healthcare India, pharmaceutical company, quality medicines, affordable healthcare, biotech, biotechnology, laboratory, research, medical equipment',
  image = 'https://lifebiotech.in/logo.png',
  url = 'https://lifebiotech.in',
  type = 'website',
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes('LifeBiotech') ? title : `${title} | LifeBiotech`;
  const fullUrl = url.startsWith('http') ? url : `https://lifebiotech.in${url}`;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LifeBiotech',
    url: 'https://lifebiotech.in',
    logo: 'https://lifebiotech.in/logo.png',
    description: 'LifeBiotech manufactures premium pharmaceutical products, medicines, and healthcare solutions trusted by healthcare professionals across India.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-9198476276',
      email: 'lifebiotech.org@gmail.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kurshi Road, Near Puja Narshing Home, Jankipuram Sector H',
      addressLocality: 'Lucknow',
      addressCountry: 'IN',
    },
    sameAs: [],
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Life Biotech" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      <meta name="geo.position" content="26.8467;80.9462" />
      <meta name="ICBM" content="26.8467, 80.9462" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="LifeBiotech" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
}

