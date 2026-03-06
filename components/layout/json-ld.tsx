export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ervandra Halim",
    url: "https://ervandra.dev",
    image: "https://ervandra.dev/images/ervan.png",
    jobTitle: "Chief Product & Technology Officer",
    worksFor: {
      "@type": "Organization",
      name: "Syntax Solution",
      url: "https://syntax.id",
    },
    description:
      "Strategic Tech Partner with 15+ years experience helping SMEs build AI-powered businesses.",
    sameAs: [
      "https://www.linkedin.com/in/ervandra",
      "https://www.github.com/ervandra",
      "https://www.youtube.com/c/ervandra",
    ],
    knowsAbout: [
      "AI Automation",
      "Digital Transformation",
      "Software Architecture",
      "Product Strategy",
      "Team Leadership",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bina Nusantara University",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ervandra Halim",
    url: "https://ervandra.dev",
    description:
      "Strategic Tech Partner helping SMEs and professionals build AI-powered businesses.",
  };

  // Static JSON-LD schemas - no user input, safe to serialize directly
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
