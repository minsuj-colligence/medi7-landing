interface Hospital {
  id: string;
  name: string;
  specialty: string;
  location: string;
  description: string;
  accreditation: string[];
  image: string;
  features: string[];
}

const hospitals: Hospital[] = [
  {
    id: 'samsung-medical',
    name: '삼성서울병원',
    specialty: '종합병원 · 암치료',
    location: '서울 강남구',
    description: '세계 최고 수준의 암 치료와 첨단 의료 기술을 보유한 대한민국 대표 종합병원',
    accreditation: ['JCI', 'ISO 9001', '보건복지부 인증'],
    image: '/images/samsung-hospital.jpg',
    features: ['로봇수술', '프로톤치료', '첨단 암치료', '국제진료센터']
  },
  {
    id: 'asan-medical',
    name: '서울아산병원',
    specialty: '심장외과 · 장기이식',
    location: '서울 송파구',
    description: '심장 질환과 장기 이식 분야에서 아시아 최고 수준의 의료진과 시설을 자랑',
    accreditation: ['JCI', 'HIMSS Stage 7', '글로벌 헬스케어 인증'],
    image: '/images/asan-hospital.jpg',
    features: ['심장이식', '간이식', '응급의료센터', '스마트병원']
  },
  {
    id: 'severance',
    name: '세브란스병원',
    specialty: '신경외과 · 재활의학',
    location: '서울 서대문구',
    description: '130년 전통의 대한민국 최초 서양식 병원으로 뇌신경 분야 세계적 권위',
    accreditation: ['JCI', 'AAHRPP', '국제의료기관평가'],
    image: '/images/severance-hospital.jpg',
    features: ['뇌종양 치료', '척추센터', '재활치료', '로봇재활']
  },
  {
    id: 'gangnam-plastic',
    name: '강남 성형외과',
    specialty: '성형외과 · 미용의학',
    location: '서울 강남구',
    description: '한류 성형의 중심지 강남에서 자연스럽고 안전한 미용 의료 서비스 제공',
    accreditation: ['대한성형외과학회', '국제미용외과학회', 'ISAPS'],
    image: '/images/gangnam-plastic.jpg',
    features: ['자연성형', '비수술 리프팅', '피부 관리', '맞춤 성형']
  },
  {
    id: 'seoul-national',
    name: '서울대학교병원',
    specialty: '소아과 · 산부인과',
    location: '서울 종로구',
    description: '대한민국 최고의 대학병원으로 소아 치료와 산부인과 분야 선도적 역할',
    accreditation: ['JCI', '보건복지부 상급종합병원', 'Magnet 인증'],
    image: '/images/snuh-hospital.jpg',
    features: ['소아심장수술', '고위험임신', '신생아집중치료', '유전자치료']
  },
  {
    id: 'korean-medicine',
    name: '경희대 한방병원',
    specialty: '한방의학 · 통합치료',
    location: '서울 동대문구',
    description: '전통 한의학과 현대 의학을 결합한 독창적 통합 치료 시스템',
    accreditation: ['한방의료기관인증', 'WHO 전통의학협력센터', '보건복지부 인증'],
    image: '/images/korean-medicine.jpg',
    features: ['침술치료', '한약치료', '추나요법', '통합암치료']
  }
];

export default function HospitalGallery() {
  return (
    <section id="hospitals" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            대한민국 최고의 파트너 병원들
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            JCI 인증을 받은 세계적 수준의 의료기관들과 파트너십을 통해
            최고 품질의 의료 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hospitals.map((hospital, index) => (
            <div
              key={hospital.id}
              className="group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-medical/10 to-blue-500/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-medical/20 to-blue-500/20"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-medical">#{index + 1} 파트너</span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-1">
                  {hospital.accreditation.slice(0, 1).map((cert, idx) => (
                    <div key={idx} className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {cert}
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-medical" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-medical transition-colors duration-300">
                    {hospital.name}
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-medical font-medium text-sm bg-medical/10 px-3 py-1 rounded-full">
                      {hospital.specialty}
                    </span>
                    <span className="text-gray-500 text-sm">{hospital.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {hospital.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 특성화 분야</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-emerald-600 font-medium">파트너 병원</span>
                  </div>
                  <button className="text-medical hover:text-medical-dark transition-colors duration-300">
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-medical/5 to-blue-500/5 rounded-3xl p-8 border border-medical/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-medical to-medical-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-medical mb-1">100+</div>
                <div className="text-sm text-gray-600">파트너 병원</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-1">85%</div>
                <div className="text-sm text-gray-600">JCI 인증률</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">전문 진료과</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">응급 의료</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                병원 추천 받기
              </a>
              <a href="#features" className="btn-secondary">
                전체 병원 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}