import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Medi7 - Revolutionizing Healthcare Technology</title>
        <meta
          name="description"
          content="Transform your healthcare practice with Medi7's innovative platform. Streamline operations, enhance patient outcomes, and modernize your medical practice with our cutting-edge solutions."
        />
        <meta
          name="keywords"
          content="healthcare technology, medical software, EHR, telemedicine, healthcare platform, medical records, patient management"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Medi7 - Revolutionizing Healthcare Technology" />
        <meta
          property="og:description"
          content="Transform your healthcare practice with Medi7's innovative platform. Streamline operations, enhance patient outcomes, and modernize your medical practice."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medi7.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medi7 - Revolutionizing Healthcare Technology" />
        <meta
          name="twitter:description"
          content="Transform your healthcare practice with Medi7's innovative platform."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://medi7.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Medi7',
              description: 'Healthcare technology platform',
              url: 'https://medi7.com',
              logo: 'https://medi7.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'customer service',
                email: 'hello@medi7.com',
              },
              sameAs: [
                'https://twitter.com/medi7',
                'https://linkedin.com/company/medi7',
              ],
            }),
          }}
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}