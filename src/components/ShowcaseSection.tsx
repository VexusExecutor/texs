import { useState } from 'react';
import { Play, Code, Info, X } from 'lucide-react';

const showcaseItems = [
  {
    title: "Script Execution Engine",
    description: "Run any Lua script with our powerful execution engine. Handles complex scripts with ease.",
    image: "code-preview",
    category: "feature"
  },
  {
    title: "Built-in Script Library",
    description: "Access hundreds of pre-made scripts for popular games directly from our interface.",
    image: "library-preview",
    category: "feature"
  },
  {
    title: "Game Enhancement",
    description: "Enhance your gameplay experience with custom UI, features, and quality-of-life improvements.",
    image: "game-preview",
    category: "usage"
  },
  {
    title: "Advanced API Integration",
    description: "For developers: integrate with our API to create custom tools and extensions.",
    image: "api-preview",
    category: "development"
  }
];

const ShowcaseSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredItems = filter 
    ? showcaseItems.filter(item => item.category === filter)
    : showcaseItems;

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section id="showcase" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-blue-900/10 to-slate-900/0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['Orbitron']">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              See Vexus in Action
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how Vexus can transform your Roblox experience with these demonstrations.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === null
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === 'feature'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
            onClick={() => setFilter('feature')}
          >
            Features
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === 'usage'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
            onClick={() => setFilter('usage')}
          >
            Usage Examples
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === 'development'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
            onClick={() => setFilter('development')}
          >
            Development
          </button>
        </div>
        
        {/* Showcase grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-800/90 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/10 hover:border-blue-600/30"
            >
              <div 
                className="h-64 bg-slate-900 flex items-center justify-center relative cursor-pointer"
                onClick={() => setActiveVideo(index)}
              >
                {/* Placeholder for video/screenshot */}
                <div className="text-center p-6">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center">
                    {item.category === 'feature' && <Code size={28} className="text-blue-400" />}
                    {item.category === 'usage' && <Play size={28} className="text-green-400" />}
                    {item.category === 'development' && <Info size={28} className="text-purple-400" />}
                  </div>
                  <p className="text-blue-400">{item.image}</p>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-blue-600 rounded-full p-3 transform transition-transform hover:scale-110">
                      <Play size={32} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {item.category === 'feature' && 'Core Feature'}
                    {item.category === 'usage' && 'Usage Example'}
                    {item.category === 'development' && 'Developer Tool'}
                  </span>
                  <button
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    onClick={() => setActiveVideo(index)}
                  >
                    <span className="mr-1">Watch Demo</span>
                    <Play size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video modal */}
        {activeVideo !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-900/80 backdrop-blur-sm p-4">
            <div className="bg-slate-800 rounded-lg max-w-4xl w-full relative">
              <button
                className="absolute top-4 right-4 bg-slate-700 rounded-full p-2 text-white hover:bg-slate-600 transition-colors z-10"
                onClick={closeVideo}
              >
                <X size={20} />
              </button>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {showcaseItems[activeVideo].title}
                </h3>
                <p className="text-gray-300 mb-4">{showcaseItems[activeVideo].description}</p>
              </div>
              
              <div className="aspect-video bg-slate-900 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-blue-900/40 flex items-center justify-center">
                    <Play size={36} className="text-blue-400" />
                  </div>
                  <p className="text-blue-400">{showcaseItems[activeVideo].image}</p>
                  <p className="text-gray-400 text-sm mt-2">Video content would appear here</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowcaseSection;