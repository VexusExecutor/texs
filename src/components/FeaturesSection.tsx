import { useState } from 'react';
import { 
  Zap, 
  Shield, 
  Code, 
  Layout, 
  Layers, 
  Cpu, 
  RefreshCw, 
  FileCode, 
  Repeat
} from 'lucide-react';

const features = [
  {
    icon: <Zap size={32} className="text-yellow-400" />,
    title: "Lightning Fast Execution",
    description: "Execute complex scripts with minimal latency and maximum performance."
  },
  {
    icon: <Shield size={32} className="text-green-400" />,
    title: "Advanced Protection",
    description: "Our proprietary anti-detection technology keeps your account safe."
  },
  {
    icon: <Code size={32} className="text-blue-400" />,
    title: "Full Lua Support",
    description: "Run any Lua script with complete functionality and syntax support."
  },
  {
    icon: <Layout size={32} className="text-purple-400" />,
    title: "Intuitive Interface",
    description: "Clean, modern UI designed for both beginners and advanced users."
  },
  {
    icon: <Layers size={32} className="text-pink-400" />,
    title: "Script Library",
    description: "Access a vast collection of pre-made scripts for popular games."
  },
  {
    icon: <Cpu size={32} className="text-orange-400" />,
    title: "Low Resource Usage",
    description: "Optimized to use minimal system resources while maintaining performance."
  },
  {
    icon: <RefreshCw size={32} className="text-teal-400" />,
    title: "Auto-Updates",
    description: "Always stay up-to-date with our automatic update system."
  },
  {
    icon: <FileCode size={32} className="text-indigo-400" />,
    title: "Script Editor",
    description: "Built-in script editor with syntax highlighting and auto-completion."
  }
];

const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="features\" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['Orbitron']">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Vexus combines cutting-edge technology with user-friendly design to deliver the ultimate Roblox scripting experience.
          </p>
          
          {/* Animated icon */}
          <div className="mt-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-ping"></div>
              <div className="relative bg-slate-800 p-4 rounded-full border border-blue-600/50 shadow-lg shadow-blue-600/20">
                <Repeat size={32} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/10 hover:border-blue-600/50"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="mb-4 p-3 bg-slate-900 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional feature highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl p-8 border border-blue-800/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">External Mode</h3>
              <p className="text-gray-300 mb-6">
                Take your scripting to the next level with our External Mode. Run scripts outside the Roblox process for enhanced performance and security.
              </p>
              <ul className="space-y-3">
                {[
                  "Bypass Roblox's internal script detection",
                  "Execute more complex scripts with higher success rates",
                  "Better performance and lower detection risk",
                  "Perfect for advanced users and developers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
              <div className="aspect-video rounded-md overflow-hidden bg-slate-800 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-900/50 flex items-center justify-center">
                    <Cpu size={28} className="text-blue-400" />
                  </div>
                  <p className="text-blue-400 text-sm">External Mode Technology</p>
                  <p className="text-gray-400 text-xs mt-2">Preview image displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;