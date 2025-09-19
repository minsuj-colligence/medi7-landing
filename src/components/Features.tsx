import { Feature } from '@/types';
import { useTranslation } from 'next-i18next';

export default function Features() {
  const { t } = useTranslation('common');

  const features: Feature[] = [
    {
      id: 'hospital-network',
      title: t('features.hospitalNetwork.title'),
      description: t('features.hospitalNetwork.description'),
      icon: 'chart',
    },
    {
      id: 'global-partners',
      title: t('features.globalPartners.title'),
      description: t('features.globalPartners.description'),
      icon: 'video',
    },
    {
      id: 'one-stop-service',
      title: t('features.oneStopService.title'),
      description: t('features.oneStopService.description'),
      icon: 'analytics',
    },
    {
      id: 'legal-compliance',
      title: t('features.legalCompliance.title'),
      description: t('features.legalCompliance.description'),
      icon: 'shield',
    },
    {
      id: 'payment-system',
      title: t('features.paymentSystem.title'),
      description: t('features.paymentSystem.description'),
      icon: 'integration',
    },
    {
      id: 'coordinator-service',
      title: t('features.coordinatorService.title'),
      description: t('features.coordinatorService.description'),
      icon: 'support',
    },
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      chart: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      video: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      ),
      analytics: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      ),
      integration: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
      shield: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      support: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
        />
      ),
    };
    return icons[iconName as keyof typeof icons] || icons.chart;
  };

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-medical/20 transform hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-medical to-medical-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {getIcon(feature.icon)}
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-medical transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('features.cta.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('features.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                {t('features.cta.partnershipBtn')}
              </a>
              <a href="#about" className="btn-secondary">
                {t('features.cta.platformBtn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}