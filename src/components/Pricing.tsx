import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 499,
    description: 'Perfect for small businesses starting with AI',
    features: [
      'Basic AI Consulting',
      'Single ML Model',
      'Data Analysis',
      'Email Support',
      '5 Team Members'
    ]
  },
  {
    name: 'Professional',
    price: 999,
    description: 'Ideal for growing companies',
    features: [
      'Advanced AI Consulting',
      'Multiple ML Models',
      'Real-time Analytics',
      'Priority Support',
      '15 Team Members',
      'Custom Integration'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 1999,
    description: 'For large organizations with complex needs',
    features: [
      'Full AI Strategy',
      'Unlimited ML Models',
      'Advanced Analytics',
      '24/7 Support',
      'Unlimited Team Members',
      'Custom Integration',
      'Dedicated Manager'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="bg-[#000] py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-black/10 backdrop-blur-md text-white opacity-70 text-sm font-medium shadow-md border border-white/20">
          Plans
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white ">
          Pricing Plans
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Transparent pricing designed to fit your requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-2 border-[#1e3a8a]' : 'border border-white/10'
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-[#1e3a8a] text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-[#1e3a8a] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                    ? 'bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] text-white hover:shadow-lg hover:shadow-blue-500/25'
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}