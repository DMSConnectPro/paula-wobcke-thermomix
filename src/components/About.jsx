import paulaPhoto from '../assets/images/Paula.jpeg'

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-text-dark">
            About Paula Wöbcke
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Paula's Photo */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={paulaPhoto} 
                alt="Paula Wöbcke" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-4">
              <p className="text-text-gray leading-relaxed">
                As an Independent Diamond Team Leader with Thermomix®, I'm passionate about helping families 
                discover the joy of home cooking. With years of experience and dedication to excellence, 
                I provide personalized demonstrations and ongoing support to ensure you get the most from 
                your Thermomix® journey.
              </p>
              <p className="text-text-gray leading-relaxed">
                My mission is to make healthy, delicious cooking accessible to everyone. Whether you're a 
                busy parent, a cooking enthusiast, or someone looking to simplify meal preparation, 
                I'm here to guide you every step of the way.
              </p>
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-block bg-primary-green text-white px-6 py-3 rounded-full hover:bg-dark-green transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About