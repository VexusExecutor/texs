import { useState, useEffect } from 'react';
import { Download, Shield, ChevronRight, Heart } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse-slow opacity-70"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl animate-pulse-slow opacity-50"></div>
      
      <div className="max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/50 backdrop-blur-sm text-blue-300 mb-6 border border-blue-800">
              <Shield size={14} className="mr-2" />
              <span className="text-sm font-medium">Advanced Executor Technology</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="block">The Ultimate</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Roblox Executor
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Unlock your gaming potential with Vexus - the most advanced, secure, and feature-rich Roblox executor. Run any script with maximum performance and zero bans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#main-download"
                className="group bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center"
              >
                <Download size={18} className="mr-2" />
                Download Now
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight size={16} />
                </span>
              </a>
              
              <a
                href="#features"
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center border border-slate-700"
              >
                Explore Features
              </a>
            </div>
            
            <div className="mt-8 flex items-center text-gray-400 text-sm">
              <Heart size={14} className="mr-2 text-red-400" />
              <span>Trusted by over 250,000 users worldwide</span>
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-lg transform rotate-6 scale-105"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
                <div className="h-8 bg-slate-800 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-slate-800 rounded-md p-4 font-mono text-sm text-blue-400">
                    <div className="mb-2">
                      <span className="text-gray-400">-- Vexus Executor API</span>
                    </div>
                    <div>
                      <span className="text-pink-400">local</span> <span className="text-blue-300">Vexus</span> <span className="text-white">=</span> <span className="text-orange-400">require</span>(<span className="text-green-400">"VexusAPI"</span>)
                    </div>
                    <div className="mt-1">
                      <span className="text-blue-300">Vexus</span>:<span className="text-yellow-400">Initialize</span>()
                    </div>
                    <div className="mt-3">
                      <span className="text-pink-400">local</span> <span className="text-blue-300">script</span> <span className="text-white">=</span> <span className="text-green-400">"print('Hello from Vexus!')"</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-blue-300">Vexus</span>:<span className="text-yellow-400">Execute</span>(<span className="text-blue-300">script</span>)
                    </div>
                    <div className="mt-3 flex items-center">
                      <span className="text-green-400 mr-2">-- Executing script...</span>
                      <div className="w-4 h-4 border-2 border-t-transparent border-blue-400 rounded-full animate-spin"></div>
                    </div>
                    <div className="mt-3 text-green-400">
                      -- Success! Script executed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;