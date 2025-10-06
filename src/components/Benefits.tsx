import { Zap, Shield, Rocket, BarChart } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience rapid AI processing and real-time insights for your business needs.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security measures to protect your valuable data.'
  },
  {
    icon: Rocket,
    title: 'Scalable Solutions',
    description: 'Grow your AI capabilities alongside your business without limitations.'
  },
  {
    icon: BarChart,
    title: 'Data-Driven Results',
    description: 'Make informed decisions with advanced analytics and predictive modeling.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#000] py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-black/10 backdrop-blur-md text-white opacity-70 text-sm font-medium shadow-md border border-white/20">
          Why Choose CommandoAI
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12 w-1/2 mx-auto">
          We are GridKoos, we help founders like you to automate their day to day business operations with the help of AI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:w-3/4 mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-[#1A1A1A] p-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#1e3a8a]/10 hover:to-transparent hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#1d4ed8] p-2.5 transition-transform group-hover:scale-110">
                <benefit.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}