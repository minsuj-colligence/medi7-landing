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
              Empowering Healthcare Professionals Since 2018
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Medi7, we believe that technology should enhance, not complicate,
              the practice of medicine. Our platform was born from the real-world
              challenges faced by healthcare providers every day.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded by a team of medical professionals and technology experts,
              we've built a comprehensive solution that addresses the unique needs
              of modern healthcare delivery. From small clinics to large hospital
              systems, our platform scales to meet your organization's
              requirements.
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
                  HIPAA compliant and SOC 2 certified
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
                  Trusted by over 10,000 healthcare providers
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
                  99.9% uptime with 24/7 monitoring
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Start Your Journey
              </a>
              <a href="#features" className="btn-secondary">
                Explore Features
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To revolutionize healthcare delivery by providing innovative,
            user-friendly technology solutions that improve patient outcomes,
            enhance provider efficiency, and reduce administrative burden. We're
            committed to making healthcare more accessible, affordable, and
            effective for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}