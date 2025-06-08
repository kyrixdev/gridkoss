import { useEffect, useRef, useState } from 'react';
import { Brain, Code, BarChart3, Search, Bot, Cog, TrendingUp, Database, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    description: 'Strategic AI implementation roadmaps tailored to your business objectives',
    animation: 'strategy'
  },
  {
    icon: Code,
    title: 'AI Development & Integration',
    description: 'Custom AI solutions seamlessly integrated into your existing systems',
    animation: 'development'
  },
  {
    icon: Cog,
    title: 'Data Engineering',
    description: 'Robust data pipelines and infrastructure for AI-ready data systems',
    animation: 'dataEngineering'
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'AI-powered SEO strategies to boost your digital presence',
    animation: 'seo'
  },
  {
    icon: BarChart3,
    title: 'Machine Learning Model Development',
    description: 'Custom ML models for predictive analytics and intelligent automation',
    animation: 'terminal'
  },
  {
    icon: Bot,
    title: 'AI Agents Development',
    description: 'Intelligent autonomous agents for customer service and business automation',
    animation: 'agents'
  }
];

// Terminal Animation Component
function TerminalAnimation() {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    '$ python train_model.py',
    'Loading dataset...',
    'Training neural network...',
    'Epoch 1/100 - Loss: 0.45',
    'Epoch 50/100 - Loss: 0.12',
    'Model saved successfully!',
    '$ python predict.py'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" rounded-lg p-4 font-mono text-sm h-32 overflow-hidden text-left">
      <div className="text-green-400 mb-2">~/ml-project</div>
      {lines.slice(0, currentLine + 1).map((line, index) => (
        <div
          key={index}
          className={`${
            line.startsWith('$') ? 'text-blue-400' : 'text-gray-300'
          } ${index === currentLine ? 'animate-pulse' : ''}`}
        >
          {line}
        </div>
      ))}
      <div className="text-green-400 animate-pulse">█</div>
    </div>
  );
}

// Chart Animation Component
function ChartAnimation() {
  const [data, setData] = useState([20, 45, 30, 60, 80, 40, 70]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(() => Math.random() * 80 + 20));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-32 flex items-end justify-center space-x-2">
      {data.map((height, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-[#8A2BE2] to-[#9370DB] w-6 rounded-t transition-all duration-1000"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

// Strategy Network Animation
function StrategyAnimation() {
  const [activeNode, setActiveNode] = useState(0);
  const nodes = [
    { x: 50, y: 20, label: 'Vision' },
    { x: 20, y: 50, label: 'Data' },
    { x: 80, y: 50, label: 'Tech' },
    { x: 50, y: 80, label: 'ROI' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-32 w-full">
      <svg className="w-full h-full">
        {/* Connections */}
        {nodes.map((node, index) => (
          <g key={index}>
            {nodes.slice(index + 1).map((targetNode, targetIndex) => (
              <line
                key={targetIndex}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${targetNode.x}%`}
                y2={`${targetNode.y}%`}
                stroke="#8A2BE2"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}
          </g>
        ))}
        
        {/* Nodes */}
        {nodes.map((node, index) => (
          <g key={index}>
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="8"
              fill={activeNode === index ? '#8A2BE2' : '#1A1A1A'}
              stroke="#8A2BE2"
              strokeWidth="2"
              className="transition-all duration-500"
            />
            <text
              x={`${node.x}%`}
              y={`${node.y + 20}%`}
              textAnchor="middle"
              className="text-xs fill-gray-400"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Development Code Animation
function DevelopmentAnimation() {
  const [activeBlock, setActiveBlock] = useState(0);
  const codeBlocks = [
    'import tensorflow as tf',
    'model = tf.keras.Sequential()',
    'model.add(Dense(128))',
    'model.compile(optimizer="adam")',
    'model.fit(X_train, y_train)'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % codeBlocks.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0D1117] rounded-lg p-4 font-mono text-sm h-32 overflow-hidden text-left">
      {codeBlocks.map((line, index) => (
        <div
          key={index}
          className={`transition-all duration-300 ${
            index <= activeBlock ? 'text-blue-400 opacity-100' : 'text-gray-600 opacity-50'
          }`}
        >
          <span className="text-gray-500">{index + 1}</span>
          <span className="ml-2">{line}</span>
          {index === activeBlock && <span className="text-green-400 animate-pulse">█</span>}
        </div>
      ))}
    </div>
  );
}

// Data Engineering Pipeline Animation
// function DataEngineeringAnimation() {
//   const [flowStep, setFlowStep] = useState(0);
//   const steps = ['Extract', 'Transform', 'Load', 'Validate'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFlowStep((prev) => (prev + 1) % steps.length);
//     }, 1500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex items-center justify-between h-32 px-4">
//       {steps.map((step, index) => (
//         <div key={index} className="flex flex-col items-center">
//           <div
//             className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
//               index <= flowStep
//                 ? 'border-[#8A2BE2] bg-[#8A2BE2] text-white'
//                 : 'border-gray-600 text-gray-600'
//             }`}
//           >
//             {index + 1}
//           </div>
//           <span className="text-xs text-gray-400 mt-2">{step}</span>
//           {index < steps.length - 1 && (
//             <div
//               className={`absolute w-8 h-0.5 mt-6 ml-12 transition-all duration-500 ${
//                 index < flowStep ? 'bg-[#8A2BE2]' : 'bg-gray-600'
//               }`}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

function DataEngineeringAnimation() {
  const [flowStep, setFlowStep] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);
  const steps = [
    { name: 'Extract', icon: Database, color: '#10B981' },
    { name: 'Transform', icon: Cog, color: '#F59E0B' },
    { name: 'Load', icon: ArrowRight, color: '#3B82F6' },
    { name: 'Validate', icon: TrendingUp, color: '#8B5CF6' }
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setFlowStep((prev) => (prev + 1) % steps.length);
    }, 1500);

    const flowInterval = setInterval(() => {
      setDataFlow((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(stepInterval);
      clearInterval(flowInterval);
    };
  }, []);

  return (
    <div className="h-32 p-4">
      {/* Data Flow Visualization */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>Raw Data</span>
          <span>Processed Data</span>
        </div>
        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="absolute h-full bg-gradient-to-r from-[#8A2BE2] to-[#9370DB] rounded-full transition-all duration-100"
            style={{ width: `${(dataFlow % 100)}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Pipeline Steps */}
      <div className="flex items-center justify-between relative">
        {/* Connection Lines */}
        <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-600 -translate-y-1/2" />
        
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isActive = index <= flowStep;
          const isCurrent = index === flowStep;
          
          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  isActive
                    ? 'border-[#8A2BE2] bg-[#8A2BE2] text-white scale-110'
                    : 'border-gray-600 bg-[#1A1A1A] text-gray-600'
                } ${isCurrent ? ' shadow-lg shadow-purple-500/50' : ''}`}
              >
                <StepIcon className="w-4 h-4" />
              </div>
              <span className={`text-xs mt-2 transition-colors ${
                isActive ? 'text-white' : 'text-gray-500'
              }`}>
                {step.name}
              </span>
              
              {/* Data packets flowing */}
              {/* {isActive && index < steps.length - 1 && (
                <div className="absolute top-5 left-10 w-8 h-1">
                  <div className="w-20 h-1 bg-[#8A2BE2] rounded-full animate-ping" />
                </div>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// SEO Animation
function SEOAnimation() {
  const [searchPhase, setSearchPhase] = useState(0);
  const [rankings, setRankings] = useState([
    { keyword: 'AI Solutions', rank: 3, trend: 'up' },
    { keyword: 'Machine Learning', rank: 1, trend: 'stable' },
    { keyword: 'Data Analytics', rank: 2, trend: 'up' }
  ]);
  const [currentKeyword, setCurrentKeyword] = useState(0);

  const searchPhases = [
    'Analyzing keywords...',
    'Optimizing content...',
    'Building backlinks...',
    'Tracking rankings...'
  ];

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setSearchPhase((prev) => (prev + 1) % searchPhases.length);
    }, 2000);

    const keywordInterval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % rankings.length);
    }, 1500);

    const rankingInterval = setInterval(() => {
      setRankings(prev => prev.map(item => ({
        ...item,
        rank: Math.max(1, Math.min(10, item.rank + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0)))
      })));
    }, 3000);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(keywordInterval);
      clearInterval(rankingInterval);
    };
  }, []);

  return (
    <div className="h-32 p-2 space-y-3 h-auto ">
      {/* Search Console Simulation */}
      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Search className="w-3 h-3 text-[#8A2BE2]" />
            <span className="text-xs text-gray-300">SEO Console</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
            <div className="w-2 h-2 bg-red-400 rounded-full" />
          </div>
        </div>
        <div className="text-xs text-gray-400 font-mono">
          {searchPhases[searchPhase]}
          <span className="animate-pulse">|</span>
        </div>
      </div>

      {/* Live Rankings */}
      <div className="space-y-1">
        {rankings.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-1 rounded transition-all duration-300 ${
              index === currentKeyword ? 'bg-[#8A2BE2]/20 border border-[#8A2BE2]/50' : 'bg-white/5'
            }`}
          >
            <div className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded text-xs flex items-center justify-center font-bold ${
                item.rank <= 3 ? 'bg-green-500 text-white' : 
                item.rank <= 7 ? 'bg-yellow-500 text-black' : 'bg-red-500 text-white'
              }`}>
                {item.rank}
              </div>
              <span className="text-xs text-gray-300 truncate">{item.keyword}</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className={`w-3 h-3 ${
                item.trend === 'up' ? 'text-green-400' : 
                item.trend === 'down' ? 'text-red-400 rotate-180' : 'text-gray-400'
              }`} />
              <div className="w-8 h-1 bg-gray-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#8A2BE2] to-[#9370DB] rounded-full transition-all duration-1000"
                  style={{ width: `${Math.max(10, 100 - (item.rank * 10))}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// AI Agents Animation
function AgentsAnimation() {
  const [activeAgent, setActiveAgent] = useState(0);
  const agents = [
    { name: 'Customer Support', status: 'Active' },
    { name: 'Data Processor', status: 'Processing' },
    { name: 'Analytics Bot', status: 'Learning' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agents.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 h-32 flex flex-col justify-center">
      {agents.map((agent, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-2 rounded-lg transition-all duration-500 ${
            index === activeAgent ? 'bg-[#8A2BE2]/20 border border-[#8A2BE2]' : 'bg-white/5'
          }`}
        >
          <div className="flex items-center">
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                index === activeAgent ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
              }`}
            />
            <span className="text-xs text-gray-300">{agent.name}</span>
          </div>
          <span className="text-xs text-gray-400">{agent.status}</span>
        </div>
      ))}
    </div>
  );
}

function getAnimationComponent(animationType: string) {
  switch (animationType) {
    case 'terminal':
      return <TerminalAnimation />;
    case 'dataEngineering':
      return <DataEngineeringAnimation />;
    case 'strategy':
      return <StrategyAnimation />;
    case 'development':
      return <DevelopmentAnimation />;
    case 'seo':
      return <SEOAnimation />;
    case 'agents':
      return <AgentsAnimation />;
    default:
      return <ChartAnimation />;
  }
}

export default function Services() {
  return (
    <section id="services" className="bg-[#000] py-20">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-black/10 backdrop-blur-md text-white opacity-70 text-sm font-medium shadow-md border border-white/20">
          Services
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white ">
          Innovative services for growth
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Tailored solutions to streamline, innovate, and grow.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-[#8A2BE2]/10 hover:to-transparent"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8A2BE2] to-[#9370DB] p-2.5 mr-4">
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                {/* Interactive Animation Area */}
                <div className="bg-[#0A0A0A] rounded-lg p-4 mb-4 border border-white/5">
                  {getAnimationComponent(service.animation)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}