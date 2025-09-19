import { Feature } from '@/types';

const features: Feature[] = [
  {
    id: 'ehr',
    title: 'Electronic Health Records',
    description:
      'Comprehensive and secure digital patient records with real-time access across your entire healthcare network.',
    icon: 'chart',
  },
  {
    id: 'telemedicine',
    title: 'Telemedicine Platform',
    description:
      'Connect with patients remotely through our HIPAA-compliant video consultation platform.',
    icon: 'video',
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description:
      'Powerful insights and reporting tools to optimize patient care and operational efficiency.',
    icon: 'analytics',
  },
  {
    id: 'integration',
    title: 'Seamless Integration',
    description:
      'Easy integration with existing healthcare systems and third-party medical devices.',
    icon: 'integration',
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description:
      'Bank-level encryption and compliance with HIPAA, GDPR, and other healthcare regulations.',
    icon: 'shield',
  },
  {
    id: 'support',
    title: '24/7 Support',
    description:
      'Round-the-clock technical support from our team of healthcare technology experts.',
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

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Medi7's innovative platform transforms healthcare
            delivery with cutting-edge technology and seamless user experiences.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-medical"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {getIcon(feature.icon)}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of healthcare providers who trust Medi7 for their
              digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Start Free Trial
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}