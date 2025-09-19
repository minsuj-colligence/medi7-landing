export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-medical/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

              <div className="relative grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical to-medical-dark rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-medical mb-2">100+</div>
                  <div className="text-sm text-gray-600 font-medium">병원 네트워크</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">15개국</div>
                  <div className="text-sm text-gray-600 font-medium">글로벌 파트너</div>
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600 font-medium">환자 만족도</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">30-60%</div>
                  <div className="text-sm text-gray-600 font-medium">비용 절감</div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">JCI 인증 병원</div>
                  <div className="text-sm text-gray-600">국제 의료기관 평가위원회 인증</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Medi7: 글로벌 의료관광의 새로운 표준
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Medi7은 한국의 우수한 의료진과 시설을 전 세계에 알리고,
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
            Medi7의 비전
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