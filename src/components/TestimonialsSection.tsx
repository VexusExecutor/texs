import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex M.",
    avatar: "A",
    role: "Game Developer",
    content: "Vexus has completely transformed my development workflow. The API is intuitive and the execution speed is unmatched. I can prototype and test scripts faster than ever before.",
    rating: 5
  },
  {
    name: "Sarah K.",
    avatar: "S",
    role: "Content Creator",
    content: "As a Roblox content creator, I needed a reliable executor that wouldn't get my accounts banned. Vexus delivers on all fronts - it's secure, fast, and the script library saves me tons of time.",
    rating: 5
  },
  {
    name: "Jason T.",
    avatar: "J",
    role: "Professional Gamer",
    content: "I've tried many executors over the years, but Vexus stands out for its stability and features. The external mode gives me confidence that my main accounts are safe while I test custom scripts.",
    rating: 4
  },
  {
    name: "Michael R.",
    avatar: "M",
    role: "Casual Player",
    content: "Even as someone who's not super technical, I found Vexus easy to use. The interface is intuitive, and the pre-made scripts work perfectly. Customer support was also excellent when I needed help.",
    rating: 5
  },
  {
    name: "Tanya B.",
    avatar: "T",
    role: "Script Developer",
    content: "The Vexus API has become an essential part of my toolset. The documentation is clear, and the execution environment is consistent. It's made my script development process much more efficient.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-900/50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['Orbitron']">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              User Testimonials
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our users have to say about Vexus.
          </p>
        </div>
        
        {/* Featured testimonial */}
        <div className="mb-16 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-8 border border-blue-800/30 relative">
          <div className="absolute -top-5 -left-5">
            <div className="bg-blue-600 rounded-full p-3">
              <Quote size={24} className="text-white" />
            </div>
          </div>
          
          <div className="md:flex items-start">
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white">
                {testimonials[0].avatar}
              </div>
            </div>
            
            <div>
              <div className="flex mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonials[0].rating ? "text-yellow-400" : "text-gray-600"}
                    fill={i < testimonials[0].rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              
              <p className="text-xl text-gray-300 italic mb-6">
                "{testimonials[0].content}"
              </p>
              
              <div>
                <h4 className="text-lg font-bold text-white">{testimonials[0].name}</h4>
                <p className="text-blue-400">{testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial carousel */}
        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white">More Testimonials</h3>
            
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-6 border border-slate-700 transition-all duration-500 hover:border-blue-600/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-lg font-bold text-white mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-blue-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full mx-1 transition-all ${
                  index === currentIndex ? 'bg-blue-500 w-6' : 'bg-slate-600 hover:bg-slate-500'
                }`}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;