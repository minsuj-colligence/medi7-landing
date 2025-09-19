import { Feature } from '@/types';

const features: Feature[] = [
  {
    id: 'hospital-network',
    title: '프리미엄 병원 네트워크',
    description:
      '성형외과, 피부과, 재활의학과 등 한국의 우수한 의료기관들과 파트너십을 통해 최고 품질의 의료서비스를 제공합니다.',
    icon: 'chart',
  },
  {
    id: 'global-partners',
    title: '글로벌 파트너사 연계',
    description:
      '해외환자유치업 법인, 각국 여행사, 의료관광 협회와의 네트워크를 통해 안전하고 합법적인 환자 모집을 지원합니다.',
    icon: 'video',
  },
  {
    id: 'one-stop-service',
    title: '원스톱 백오피스 솔루션',
    description:
      '결제, 계약관리, 법적 리스크 관리, CRM, 통역/코디네이터, 보험 연계까지 모든 백오피스 업무를 지원합니다.',
    icon: 'analytics',
  },
  {
    id: 'legal-compliance',
    title: '완전한 법적 컴플라이언스',
    description:
      '의료법, 관광진흥법 등 모든 관련 법규를 준수하며, 정부 인가를 받은 파트너사와만 협력합니다.',
    icon: 'shield',
  },
  {
    id: 'payment-system',
    title: '안전한 결제 시스템',
    description:
      '다국가 결제 지원, 환율 보장, 분할결제 옵션 등 환자와 병원 모두를 위한 안전한 결제 인프라를 제공합니다.',
    icon: 'integration',
  },
  {
    id: 'coordinator-service',
    title: '전문 코디네이터 서비스',
    description:
      '다국어 지원, 의료 통역, 여행 코디네이팅, 24/7 응급상황 대응까지 전문 팀이 환자를 케어합니다.',
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
            글로벌 의료관광 플랫폼의 핵심 서비스
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            병원, 해외 파트너사, 환자를 연결하는 Medi7만의 차별화된
            의료관광 솔루션을 경험해보세요.
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
              Medi7과 함께 글로벌 의료관광을 시작하세요
            </h3>
            <p className="text-gray-600 mb-6">
              병원 · 해외 파트너사 · 환자 모두가 만족하는
              안전하고 투명한 의료관광 플랫폼입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                파트너십 신청
              </a>
              <a href="#about" className="btn-secondary">
                플랫폼 소개서
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}