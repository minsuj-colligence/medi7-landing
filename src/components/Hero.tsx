import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-16 section-padding bg-gradient-to-br from-medical-light to-white">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                Revolutionizing{' '}
                <span className="text-gradient">Healthcare</span> with Advanced
                Medical Technology
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                Discover the future of medical care with Medi7's cutting-edge
                platform. Streamline operations, enhance patient outcomes, and
                transform your healthcare practice with our innovative solutions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#contact" className="btn-primary">
                  Get Started Today
                </Link>
                <Link href="#features" className="btn-secondary">
                  Learn More
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-medical">10K+</div>
                  <div className="text-sm text-gray-600">Healthcare Providers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-medical">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-medical">24/7</div>
                  <div className="text-sm text-gray-600">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-medical to-primary-600 rounded-2xl p-8 shadow-2xl">
                <div className="w-full h-full bg-white rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-medical rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Healthcare Excellence
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Empowering medical professionals with next-generation tools
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full opacity-20 animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-200 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}