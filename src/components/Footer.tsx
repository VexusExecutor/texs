import { Github, Twitter, Youtube, Disc as Discord, Mail, Shield, ChevronRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-slate-900 -translate-y-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding and social */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600">
                <Shield size={24} className="text-white" />
              </div>
              <span className="ml-2 text-2xl font-bold text-white font-['Orbitron']">
                <span className="text-blue-500">V</span>
                <span className="text-blue-400">e</span>
                <span className="text-blue-300">x</span>
                <span className="text-blue-400">u</span>
                <span className="text-blue-500">s</span>
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Elevate your Roblox experience with the most advanced executor technology available.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Discord size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "#" },
                { name: "Features", link: "#features" },
                { name: "Downloads", link: "#downloads" },
                { name: "Showcase", link: "#showcase" },
                { name: "Documentation", link: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Products</h3>
            <ul className="space-y-2">
              {[
                { name: "Vexus Executor", link: "#downloads" },
                { name: "Vexus API", link: "#downloads" },
                { name: "Vexus External", link: "#downloads" },
                { name: "Script Library", link: "#" },
                { name: "Developer Tools", link: "#" },
              ].map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.link} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-4">
              Have questions or need support? Reach out to our team.
            </p>
            
            <a 
              href="mailto:support@vexusexecutor.com" 
              className="text-gray-400 hover:text-blue-400 transition-colors flex items-center mb-4"
            >
              <Mail size={16} className="mr-2" />
              support@vexusexecutor.com
            </a>
            
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
            >
              <Discord size={18} className="mr-2" />
              Join Our Discord
            </a>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Vexus. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Legal
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-xs flex items-center justify-center">
              Made with <Heart size={12} className="mx-1 text-red-500" /> for the Roblox community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;