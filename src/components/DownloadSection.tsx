import { useState, useEffect } from 'react';
import { 
  Download, 
  Code, 
  ExternalLink, 
  Shield, 
  Cpu, 
  CheckCircle, 
  AlertTriangle,
  Terminal
} from 'lucide-react';

const downloadOptions = [
  {
    id: "executor",
    title: "Vexus Executor",
    description: "The complete Vexus executor with all features. Recommended for most users.",
    icon: <Shield size={24} className="text-blue-400" />,
    size: "24.3 MB",
    version: "v3.2.1",
    primary: true,
    features: [
      "Full Script Execution",
      "Script Library Access",
      "Regular Updates",
      "Basic Protection"
    ]
  },
  {
    id: "api",
    title: "Vexus API",
    description: "Developer tools and API for creating custom solutions and integrations.",
    icon: <Code size={24} className="text-purple-400" />,
    size: "12.7 MB",
    version: "v3.0.5",
    primary: false,
    features: [
      "Full API Access",
      "Developer Documentation",
      "Example Projects",
      "Premium Support"
    ]
  },
  {
    id: "external",
    title: "Vexus External",
    description: "Advanced external mode with enhanced security and bypasses.",
    icon: <Cpu size={24} className="text-green-400" />,
    size: "31.8 MB",
    version: "v2.9.0",
    primary: false,
    features: [
      "External Execution",
      "Advanced Protection",
      "Higher Success Rate",
      "Lower Detection Risk"
    ]
  }
];

const DownloadSection = () => {
  const [selectedOption, setSelectedOption] = useState(downloadOptions[0].id);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [downloadComplete, setDownloadComplete] = useState<string | null>(null);

  const handleDownload = (id: string) => {
    setDownloading(id);
    
    // Simulate download progress
    setTimeout(() => {
      setDownloading(null);
      setDownloadComplete(id);
      
      // Reset complete status after a delay
      setTimeout(() => {
        setDownloadComplete(null);
      }, 3000);
    }, 2500);
  };

  const selected = downloadOptions.find(opt => opt.id === selectedOption) || downloadOptions[0];

  return (
    <section id="downloads" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 transform -skew-x-12"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['Orbitron']" id="main-download">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Download Options
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Choose the version that fits your needs. All downloads include free updates and basic support.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Download options cards */}
          {downloadOptions.map((option) => (
            <div 
              key={option.id}
              className={`bg-slate-800/90 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 border ${
                selectedOption === option.id
                  ? 'border-blue-500 shadow-lg shadow-blue-500/20 transform scale-[1.02]'
                  : 'border-slate-700 hover:border-blue-500/50'
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className={`py-6 px-6 ${option.primary ? 'bg-blue-900/30' : 'bg-slate-900/50'}`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {option.icon}
                    <h3 className="text-xl font-bold ml-3 text-white">{option.title}</h3>
                  </div>
                  {option.primary && (
                    <span className="bg-blue-900 text-blue-300 text-xs py-1 px-2 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">{option.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>Size: {option.size}</span>
                  <span>Version: {option.version}</span>
                </div>
                
                <ul className="mb-6 space-y-2">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle size={16} className="text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(option.id);
                  }}
                  className={`w-full py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center ${
                    option.primary
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                  disabled={downloading !== null}
                >
                  {downloading === option.id ? (
                    <>
                      <div className="mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                      Downloading...
                    </>
                  ) : downloadComplete === option.id ? (
                    <>
                      <CheckCircle size={18} className="mr-2" />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <Download size={18} className="mr-2" />
                      Download Now
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Selected download details */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                {selected.title} Details
              </h3>
              <p className="text-gray-300 mb-6">
                {selected.id === "executor" && (
                  "The Vexus Executor is our flagship product, offering a seamless scripting experience with a focus on stability and user-friendliness. It includes our core execution engine, script library, and basic protection features."
                )}
                {selected.id === "api" && (
                  "The Vexus API provides developers with the tools they need to create custom solutions. This package includes comprehensive documentation, example projects, and direct access to our execution engine through a simple, well-documented API."
                )}
                {selected.id === "external" && (
                  "Vexus External represents our most advanced technology, running outside the Roblox process for enhanced security and capability. This version is recommended for experienced users who require the highest level of protection and execution success."
                )}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-white mb-3">System Requirements</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { label: "OS", value: "Windows 10/11 (64-bit)" },
                    { label: "CPU", value: "Intel/AMD dual-core or better" },
                    { label: "RAM", value: "4GB minimum (8GB recommended)" },
                    { label: "Storage", value: `${selected.size} of free space` },
                    { label: "DirectX", value: "DirectX 11" },
                    { label: ".NET", value: ".NET Framework 4.8+" },
                  ].map((req, index) => (
                    <li key={index} className="flex">
                      <span className="text-gray-400 w-20 flex-shrink-0">{req.label}:</span>
                      <span className="text-gray-300">{req.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 mb-6">
                <div className="flex items-start">
                  <AlertTriangle size={20} className="text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Important Notice</h4>
                    <p className="text-gray-300 text-sm">
                      Some antivirus software may flag executor tools as malicious. This is a false positive due to the nature of these applications. Please add Vexus to your antivirus exceptions if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 flex flex-col">
              <h4 className="text-lg font-medium text-white mb-4">Quick Download</h4>
              
              <div className="space-y-4 flex-grow">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                    <Terminal size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Installation Guide</h5>
                    <p className="text-gray-400 text-sm">Simple setup process</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center mr-3">
                    <Shield size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Virus Scanned</h5>
                    <p className="text-gray-400 text-sm">Safe & secure download</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                    <ExternalLink size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Premium Support</h5>
                    <p className="text-gray-400 text-sm">Help when you need it</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleDownload(selected.id)}
                className="mt-6 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium transition-all duration-300 flex items-center justify-center"
                disabled={downloading !== null}
              >
                {downloading === selected.id ? (
                  <>
                    <div className="mr-2 h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                    Downloading...
                  </>
                ) : downloadComplete === selected.id ? (
                  <>
                    <CheckCircle size={20} className="mr-2" />
                    Downloaded!
                  </>
                ) : (
                  <>
                    <Download size={20} className="mr-2" />
                    Download {selected.title}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;