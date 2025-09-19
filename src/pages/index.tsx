import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import HospitalGallery from '@/components/HospitalGallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Medi7 - 글로벌 의료관광 플랫폼</title>
        <meta
          name="description"
          content="한국의 우수한 의료진과 해외 환자를 연결하는 Medi7 의료관광 플랫폼. 병원, 해외 파트너사, 환자 모두를 위한 안전하고 투명한 의료관광 서비스를 제공합니다."
        />
        <meta
          name="keywords"
          content="의료관광, 메디컬투어, 의료관광플랫폼, 해외환자유치, 성형외과, 피부과, 재활의학과, 한국의료, Medi7, medical tourism"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta property="og:title" content="Medi7 - 글로벌 의료관광 플랫폼" />
        <meta
          property="og:description"
          content="한국의 우수한 의료진과 해외 환자를 연결하는 의료관광 플랫폼. 안전하고 투명한 의료관광 서비스를 제공합니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medi7.io" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medi7 - 글로벌 의료관광 플랫폼" />
        <meta
          name="twitter:description"
          content="한국의 우수한 의료진과 해외 환자를 연결하는 의료관광 플랫폼"
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://medi7.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Medi7',
              description: '글로벌 의료관광 플랫폼',
              url: 'https://medi7.io',
              logo: 'https://medi7.io/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+82-2-1234-5678',
                contactType: 'customer service',
                email: 'partnership@medi7.io',
              },
              sameAs: [
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
          <HospitalGallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: { locale?: string }) {
  const currentLocale = locale || 'en';
  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
    },
  };
}