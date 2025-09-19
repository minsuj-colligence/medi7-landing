export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-medical-light to-primary-50 rounded-2xl p-8">
                <div className="w-full h-full bg-white rounded-xl p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-medical rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-medical">50%</div>
                        <div className="text-sm text-gray-600">
                          Efficiency Increase
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary-600">
                          $2M+
                        </div>
                        <div className="text-sm text-gray-600">Cost Savings</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">
                          95%
                        </div>
                        <div className="text-sm text-gray-600">
                          Patient Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              콜리전스: 글로벌 의료관광의 새로운 표준
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              콜리전스는 한국의 우수한 의료진과 시설을 전 세계에 알리고,
              해외 환자들에게는 안전하고 신뢰할 수 있는 의료서비스를
              제공하는 글로벌 의료관광 플랫폼입니다.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              의료관광 전문가와 IT 기술진이 협력하여 만든 통합 솔루션으로,
              병원의 해외환자 유치부터 환자의 전체 여행 과정까지
              원스톱으로 관리합니다. 모든 절차는 정부 규정을 준수하며
              투명하게 운영됩니다.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-medical/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-medical"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  정부 인가 해외환자유치업 파트너사 연계
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-medical/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-medical"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  100+ 국내 우수 의료기관 네트워크
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-medical/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-medical"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  15개국 50+ 해외 파트너사 연계
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                파트너십 시작하기
              </a>
              <a href="#features" className="btn-secondary">
                서비스 상세보기
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            콜리전스의 비전
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            한국의 우수한 의료 기술과 서비스를 전 세계에 알리고,
            해외 환자들에게는 안전하고 신뢰할 수 있는 의료관광 경험을 제공합니다.
            투명한 플랫폼 운영을 통해 의료관광 산업의 지속가능한 발전에 기여하며,
            글로벌 의료관광의 허브로 자리매김하는 것이 저희의 목표입니다.
          </p>
        </div>
      </div>
    </section>
  );
}