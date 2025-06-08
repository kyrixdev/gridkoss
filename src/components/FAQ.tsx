import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const faqs = [
  {
    question: 'What is Gridkoss AI and how can it help my business?',
    answer: 'Gridkoss AI is a comprehensive artificial intelligence solution that helps businesses automate processes, gain insights from data, and improve decision-making through advanced analytics and machine learning technologies.'
  },
  {
    question: 'How secure is your AI platform?',
    answer: 'Our platform implements bank-grade encryption and security measures, including data encryption at rest and in transit, regular security audits, and compliance with industry standards to ensure your data remains protected.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 technical support, dedicated account managers, comprehensive documentation, and regular training sessions to ensure you get the most out of our AI solutions.'
  },
  {
    question: 'Can your AI solutions integrate with existing systems?',
    answer: 'Yes, our AI solutions are designed to seamlessly integrate with most existing business systems and can be customized to meet your specific integration requirements.'
  },
  {
    question: 'How long does implementation typically take?',
    answer: 'Implementation time varies depending on the complexity of your needs, but typically ranges from 2-8 weeks. We work closely with your team to ensure a smooth and efficient deployment process.'
  },
  {
    question: 'What makes Gridkoss different from other AI providers?',
    answer: 'Gridkoss stands out through our combination of cutting-edge AI technology, industry expertise, customizable solutions, and dedicated support, ensuring you get the most value from your AI implementation.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="bg-[#000] py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-black/10 backdrop-blur-md text-white opacity-70 text-sm font-medium shadow-md border border-white/20">
          FAQs
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white ">
          We’re here to help
        </h2>
        <p className="text-center text-gray-300 mb-12">
          FAQs designed to provide the information you need.
        </p>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] pr-12"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-[#1A1A1A] rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#8A2BE2]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#8A2BE2]" />
                )}
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-4' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}