import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Hero() {
  const { t } = useTranslation('common');
  return (
    <section id="home" className="pt-16 section-padding bg-gradient-to-br from-medical-light to-white">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left">
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight">
                {t('hero.title.part1')}{' '}
                <span className="text-medical">{t('hero.title.highlight')}</span>
                {t('hero.title.part2') && (
                  <span> {t('hero.title.part2')}</span>
                )}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#contact" className="btn-primary">
                  {t('hero.partnershipBtn')}
                </Link>
                <Link href="#features" className="btn-secondary">
                  {t('hero.platformBtn')}
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-medical">100+</div>
                  <div className="text-sm text-gray-600">{t('hero.stats.hospitals')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-medical">50+</div>
                  <div className="text-sm text-gray-600">{t('hero.stats.partners')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-medical">15</div>
                  <div className="text-sm text-gray-600">{t('hero.stats.countries')}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-8 lg:col-span-6">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-medical/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>

              <div className="relative grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical to-medical-dark rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{t('hero.cards.patientCare.title')}</h3>
                  <p className="text-sm text-gray-600 text-center">{t('hero.cards.patientCare.description')}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{t('hero.cards.safety.title')}</h3>
                  <p className="text-sm text-gray-600 text-center">{t('hero.cards.safety.description')}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{t('hero.cards.globalNetwork.title')}</h3>
                  <p className="text-sm text-gray-600 text-center">{t('hero.cards.globalNetwork.description')}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 h-40 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{t('hero.cards.affordableCost.title')}</h3>
                  <p className="text-sm text-gray-600 text-center">{t('hero.cards.affordableCost.description')}</p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-medical/5 to-blue-500/5 rounded-2xl p-6 border border-medical/10">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{t('hero.excellence.title')}</div>
                    <div className="text-sm text-gray-600">{t('hero.excellence.subtitle')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}