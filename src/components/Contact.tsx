'use client';

import { useState } from 'react';
import { ContactInfo } from '@/types';

const contactInfo: ContactInfo = {
  email: 'partnership@colligence.io',
  phone: '+82-2-1234-5678',
  address: '서울특별시 강남구 테헤란로 427, 위워크 타워',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            콜리전스 파트너십 문의
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            병원, 해외 파트너사, 의료관광 사업자 등 글로벌 의료관광 플랫폼에
            참여하고 싶으시다면 지금 문의해주세요.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-12 lg:mb-0">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                파트너십 문의하기
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    담당자 성명
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical focus:border-transparent transition-colors duration-200"
                    placeholder="담당자 성함을 입력해주세요"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    이메일 주소
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical focus:border-transparent transition-colors duration-200"
                    placeholder="담당자 이메일을 입력해주세요"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    기관/회사명
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical focus:border-transparent transition-colors duration-200"
                    placeholder="병원명 또는 회사명을 입력해주세요"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical focus:border-transparent transition-colors duration-200"
                    placeholder="파트너십 관련 문의사항을 자세히 적어주세요 (사업 분야, 규모, 제공 가능한 서비스 등)"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  문의하기
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                연락처 정보
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-medical"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">이메일</h4>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-medical"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">전화번호</h4>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-medical"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">주소</h4>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-medical text-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">
                플랫폼 소개 미팅
              </h3>
              <p className="mb-6 text-medical-light">
                콜리전스 의료관광 플랫폼에 대한 상세한 설명과
                귀하의 사업에 맞는 맞춤형 솔루션을 제안해드립니다.
              </p>
              <a
                href="mailto:partnership@colligence.io"
                className="inline-flex items-center bg-white text-medical px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                미팅 예약하기
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}