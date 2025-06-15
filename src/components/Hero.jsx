import tm7Hero from '../assets/images/WhatsApp Image 2025-06-06 at 16.14.55.jpeg'

const Hero = () => {
  return (
    <section id="home" className="relative">
      {/* Hero with TM7 background image */}
      <div 
        className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${tm7Hero}')` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl mb-4 animate-fade-in">
            Success Guaranteed with the All-New
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-delay">
            <span className="text-primary-green">Thermomix® TM7</span>
          </h1>
          <p className="text-lg md:text-xl mb-2 animate-fade-in-delay-2">
            Experience the future of cooking with Paula Wöbcke.
          </p>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-delay-2">
            Your Independent Thermomix® Diamond Team Leader
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold hover:bg-dark-green hover:-translate-y-1 transition-all duration-200"
            >
              Book Your Demo
            </a>
            <a 
              href="#about" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-text-dark transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero