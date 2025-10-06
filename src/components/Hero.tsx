import { ArrowRight, Play } from 'lucide-react';
import { useCallback, useState } from 'react';
import Modal from 'react-modal';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';


export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);

  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-[#000] flex items-center justify-center overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "bottom",
              enable: true,
              random: true,
              straight: false,
              speed: 2,
              outModes: {
                default: "out"
              }
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 100
            },
            opacity: {
              value: 0.3
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 2 }
            },
            wobble: {
              enable: true,
              distance: 10,
              speed: 10
            }
          }
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-black/10 backdrop-blur-md text-white text-sm font-medium shadow-md border border-white/20">
            Empowering Businesses with Next-Gen AI
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            Driving Innovation and Growth Through{' '}
            <span className="bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] text-transparent bg-clip-text">
              AI-Powered Solutions
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-md mb-8" data-aos="fade-up" data-aos-delay="100">
            Experience the future of business with intelligent, scalable <br /> automation solutions tailored to your needs
          </p>

          <div className="flex items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/10 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/20"
            >
              <Play className="w-5 h-5" />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isVideoOpen}
        onRequestClose={() => setIsVideoOpen(false)}
        className="max-w-4xl w-full mx-auto mt-20 bg-[#121212] rounded-lg overflow-hidden outline-none"
        overlayClassName="fixed inset-0 bg-black/80 flex items-start justify-center z-50"
      >
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://CommandoAI.com/wp-content/uploads/2024/11/CommandoAI-presentation-1.mp4"
            title="Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </section>
  );
}