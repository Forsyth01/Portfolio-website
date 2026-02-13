import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Forsyth Okoeguale | Full Stack Web Developer",
  description = "Forsyth Okoeguale is a Full Stack Web Developer based in Lagos, Nigeria, specializing in React, Next.js, TailwindCSS, and Node.js. Building modern, responsive, and high-performance web applications for clients in the USA, UK, and globally.",
  keywords = "Forsyth Okoeguale, Web Developer, Full Stack Developer, React Developer, Next.js Developer, Frontend Developer, Lagos Nigeria Developer, Freelance Web Developer, JavaScript Developer, TailwindCSS, Node.js, Portfolio",
  canonicalUrl = "https://forsythokoeguale.bio",
  ogImage = "https://forsythokoeguale.bio/forsythlink.jpeg",
  ogType = "website",
  twitterHandle = "@Forsyth_X_",
  author = "Forsyth Okoeguale",
  structuredData = null,
  noindex = false
}) => {
  const siteUrl = "https://forsythokoeguale.bio";

  // Default structured data for the website
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Forsyth Okoeguale Portfolio",
        "description": "Professional portfolio of Forsyth Okoeguale, Full Stack Web Developer",
        "publisher": {
          "@id": `${siteUrl}/#person`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteUrl}/?s={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Forsyth Okoeguale",
        "url": siteUrl,
        "image": {
          "@type": "ImageObject",
          "url": `${siteUrl}/profilepic4.jpg`,
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://github.com/Forsyth01",
          "https://www.linkedin.com/in/forsyth-okoeguale",
          "https://x.com/Forsyth_X_"
        ],
        "jobTitle": "Full Stack Web Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "Nigeria"
        },
        "email": "forsyth01.dev@gmail.com",
        "knowsAbout": [
          "Web Development",
          "React",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "TailwindCSS",
          "Node.js",
          "Firebase",
          "MongoDB",
          "Responsive Design",
          "UI/UX Design"
        ],
        "alumniOf": {
          "@type": "Organization",
          "name": "Self-taught Developer"
        }
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />

      {/* Geographic Tags */}
      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos, Nigeria" />
      <meta name="geo.position" content="6.5244;3.3792" />
      <meta name="ICBM" content="6.5244, 3.3792" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${author} - Full Stack Web Developer Portfolio`} />
      <meta property="og:site_name" content="Forsyth Okoeguale Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${author} - Full Stack Web Developer Portfolio`} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="msapplication-TileColor" content="#1a1a1a" />
      <meta name="application-name" content="Forsyth Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Forsyth Portfolio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Verification Tags (add your own verification codes) */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
