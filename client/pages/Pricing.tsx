import { Check, X, Menu } from "lucide-react";
import { useState } from "react";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { connected } = useWallet();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (connected) {
      navigate('/dashboard');
    } else {
      const walletButton = document.querySelector('.wallet-adapter-button') as HTMLButtonElement;
      if (walletButton) {
        walletButton.click();
      }
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individual users getting started with Web3 security",
      features: [
        "Basic threat detection",
        "Phishing protection",
        "Community support",
        "Up to 10 transactions/day",
        "Basic analytics"
      ],
      limitations: [
        "No advanced AI features",
        "Limited transaction volume",
        "No priority support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Advanced protection for power users and professionals",
      features: [
        "Advanced AI threat detection",
        "Real-time anomaly detection",
        "Priority support",
        "Unlimited transactions",
        "Advanced analytics dashboard",
        "Custom security rules",
        "API access",
        "Smart contract auditing"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive security solution for organizations and large-scale operations",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment",
        "Advanced compliance tools",
        "Multi-user management",
        "Custom AI model training",
        "24/7 phone support",
        "SLA guarantees"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen main-gradient relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full z-[1] opacity-30">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c825e8e63e3c0adb94bef5f03f13e3ea4131deac?width=3842"
          alt="Line pattern background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl h-auto z-50 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto px-4 py-4 rounded-3xl md:rounded-full border border-white/10 bg-white/10 backdrop-blur-sm gap-4 md:gap-0">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 md:hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3249d81bd5a0516fe5c613581be785b53ef9877e?width=130"
              alt="SentrySol Logo"
              className="w-8 h-8"
            />
            <span className="text-white font-poppins text-xl font-bold leading-none">
              SENTRYSOL
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto gap-4 md:gap-0">
            {/* Desktop Logo and Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3249d81bd5a0516fe5c613581be785b53ef9877e?width=130"
                  alt="SentrySol Logo"
                  className="w-10 h-10"
                />
                <span className="text-white font-poppins text-2xl lg:text-3xl font-bold leading-none">
                  SENTRYSOL
                </span>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center gap-6 lg:gap-8">
                <a
                  href="/"
                  className="text-white font-poppins text-lg font-normal leading-none hover:text-white/80 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white font-poppins text-lg font-normal leading-none hover:text-white/80 transition-colors"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-white font-poppins text-lg font-normal leading-none hover:text-white/80 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-white font-poppins text-lg font-normal leading-none hover:text-white/80 transition-colors"
                >
                  Docs
                </a>
                <a
                  href="/pricing"
                  className="text-sentry-sage font-poppins text-lg font-normal leading-none hover:text-sentry-sage/80 transition-colors"
                >
                  Pricing
                </a>
                <WalletMultiButton className="!bg-white !text-black !font-poppins !text-lg !font-normal !leading-none !px-4 !py-2 !rounded-full hover:!bg-white/90 !transition-colors !border-none" />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
              {isMobileMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex flex-col gap-4 min-w-[200px]">
                  <a
                    href="/"
                    className="text-white font-poppins hover:text-white/80 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white font-poppins hover:text-white/80 transition-colors"
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="text-white font-poppins hover:text-white/80 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-white font-poppins hover:text-white/80 transition-colors"
                  >
                    Docs
                  </a>
                  <a
                    href="/pricing"
                    className="text-sentry-sage font-poppins hover:text-sentry-sage/80 transition-colors"
                  >
                    Pricing
                  </a>
                  <WalletMultiButton className="!bg-white !text-black !font-poppins !text-sm !font-normal !leading-none !px-4 !py-2 !rounded-full hover:!bg-white/90 !transition-colors !border-none" />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-[2] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-poppins text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight uppercase gradient-text mb-8">
            Pricing
          </h1>
          <p className="text-white font-poppins text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-16">
            Choose the perfect plan for your Web3 security needs. Start with our free tier or unlock advanced AI-powered protection.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="relative z-[2] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative h-auto ${plan.popular ? 'lg:-mt-8' : ''}`}
              >
                <div className={`relative w-full h-full rounded-3xl border-2 ${plan.popular ? 'border-sentry-sage' : 'border-white/30'} bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-8 flex flex-col`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sentry-sage text-black px-4 py-2 rounded-full text-sm font-poppins font-bold">
                      Most Popular
                    </div>
                  )}
                  
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-white font-poppins text-2xl font-bold mb-4">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-white font-poppins text-4xl font-bold">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-white/70 font-poppins text-lg">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-white/80 font-poppins text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <h4 className="text-white font-poppins text-lg font-semibold mb-4">
                      Features included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-sentry-sage mt-0.5 flex-shrink-0" />
                          <span className="text-white/90 font-poppins text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-white/70 font-poppins text-sm font-semibold mb-3">
                          Limitations:
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <X className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                              <span className="text-white/60 font-poppins text-xs">
                                {limitation}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={plan.cta === "Get Started" ? handleGetStarted : undefined}
                    className={`w-full font-poppins text-lg font-normal leading-none px-6 py-4 rounded-full transition-colors ${
                      plan.popular
                        ? 'bg-sentry-sage text-black hover:bg-sentry-sage/90'
                        : 'bg-sentry-accent/20 text-white hover:bg-sentry-accent/30 border border-white/24'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-[2] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-poppins text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-wide gradient-section-text mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-poppins text-xl font-semibold mb-4">
                Is the free plan really free forever?
              </h3>
              <p className="text-white/80 font-poppins text-base leading-relaxed">
                Yes! Our Starter plan is completely free and includes basic security features. Perfect for getting started with Web3 security.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-poppins text-xl font-semibold mb-4">
                Can I upgrade or downgrade my plan anytime?
              </h3>
              <p className="text-white/80 font-poppins text-base leading-relaxed">
                Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-poppins text-xl font-semibold mb-4">
                Do you offer enterprise-level support?
              </h3>
              <p className="text-white/80 font-poppins text-base leading-relaxed">
                Yes, our Enterprise plan includes dedicated account management, 24/7 phone support, and SLA guarantees for mission-critical applications.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-poppins text-xl font-semibold mb-4">
                How does the AI threat detection work?
              </h3>
              <p className="text-white/80 font-poppins text-base leading-relaxed">
                Our AI models run locally on your device, analyzing behavioral patterns and transaction data to detect anomalies and potential threats in real-time, without compromising your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-[2] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-white font-poppins text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Ready to Secure Your Web3 Journey?
          </h2>
          <p className="text-white/80 font-poppins text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Join thousands of users protecting their digital assets with SentrySol's advanced AI security.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-sentry-sage text-black font-poppins text-lg font-normal leading-none px-8 py-4 rounded-full hover:bg-sentry-sage/90 transition-colors"
          >
            {connected ? 'Go to Dashboard' : 'Get Started Today'}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-[2] bg-sentry-footer">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7a2765d9790496907d7a42bab916df1a729b35e2?width=78"
                  alt="SentrySol Logo"
                  className="w-10 h-10"
                />
                <span className="text-white font-poppins text-xl font-bold leading-none">
                  SENTRYSOL
                </span>
              </div>

              <p className="text-white/70 font-poppins text-base font-normal leading-relaxed max-w-md">
                SentrySol is an AI-native, on-device behavioral security
                framework built specifically for Web3 mobile environments,
                initially focusing on Solana Mobile Seeker.
              </p>
            </div>

            {/* Explore */}
            <div className="space-y-6">
              <h3 className="text-white font-poppins text-lg font-bold leading-tight">
                Explore
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-white/70 font-poppins text-base font-normal leading-relaxed hover:text-white transition-colors"
                >
                  Press & Media
                </a>
                <a
                  href="#"
                  className="block text-white/70 font-poppins text-base font-normal leading-relaxed hover:text-white transition-colors"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="block text-white/70 font-poppins text-base font-normal leading-relaxed hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-white font-poppins text-lg font-bold leading-tight">
                Resources
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-white/70 font-poppins text-base font-normal leading-relaxed hover:text-white transition-colors"
                >
                  Whitepaper
                </a>
                <a
                  href="#"
                  className="block text-white/70 font-poppins text-base font-normal leading-relaxed hover:text-white transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-white/70 font-poppins text-base font-normal leading-relaxed hover:text-white transition-colors"
                >
                  Integration
                </a>
                <a
                  href="#"
                  className="block text-white/70 font-poppins text-base font-normal leading-relaxed hover:text-white transition-colors"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 pt-8 border-t border-white/15">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white font-poppins text-xl font-bold leading-tight mb-4">
                  Join our Newsletter
                </h3>
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-1 h-12 bg-white/2 rounded-xl px-4 text-white placeholder-white/60 border border-white/10 focus:outline-none focus:border-white/30"
                  />
                  <button className="bg-gradient-to-b from-white/12 to-transparent border border-transparent text-white font-poppins text-base font-normal leading-none px-6 py-3 rounded-xl hover:from-white/20 transition-all">
                    Submit
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-white/70 font-poppins text-base font-normal">
                  SentrySol, 2025
                </span>
                <a
                  href="#"
                  className="text-white/70 font-poppins text-base font-normal hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
