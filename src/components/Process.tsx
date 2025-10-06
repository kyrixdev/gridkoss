import { useState } from 'react';
import { Search, Code, Rocket, Wrench } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We dive deep into your needs, exploring ideas and defining strategies for long-term success.',
  },
  {
    icon: Code,
    title: 'Development & Test',
    description: 'We craft tailored solutions for your goals and rigorously test them for top-notch reliability.',
  },
  {
    icon: Wrench,
    title: 'Launch & Maintain',
    description: 'We deploy your solution seamlessly and ensure its continued performance with ongoing care.',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#000] py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-black/10 backdrop-blur-md text-white opacity-70 text-sm font-medium shadow-md border border-white/20">
          Process
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white ">
          Your path to excellence
        </h2>
        <p className="text-center text-gray-300 mb-12">
          A simple, effective approach to deliver excellence.
        </p>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] transform -translate-y-1/2 opacity-20 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`
                  relative bg-[#1A1A1A] p-6 rounded-2xl transition-all duration-300
                  ${activeStep === index ? 'scale-105 bg-gradient-to-br from-[#1e3a8a]/10 to-transparent' : ''}
                `}>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#1e3a8a] to-[#1d4ed8] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  
                  <div className="w-12 h-12 mb-4 rounded-lg bg-[#1A1A1A] border border-white/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#1e3a8a]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                  
                  <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] rounded-full transition-all duration-500"
                      style={{ 
                        width: activeStep >= index ? '100%' : '0%',
                        opacity: activeStep >= index ? 1 : 0.2
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
