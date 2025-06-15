import varomaImage from '../assets/images/varoma.jpg'

const Services = () => {
  const services = [
    {
      title: "Personal Demonstrations",
      description: "Experience Thermomix® in your own home with a personalized cooking demonstration",
      icon: "🏠"
    },
    {
      title: "Ongoing Support",
      description: "Continuous guidance and recipe support to help you master your Thermomix®",
      icon: "💚"
    },
    {
      title: "Recipe Workshops",
      description: "Join group workshops and learn new techniques with fellow Thermomix® owners",
      icon: "👥"
    },
    {
      title: "Business Opportunities",
      description: "Discover how you can become a Thermomix® advisor and build your own business",
      icon: "💼"
    }
  ]

  return (
    <section id="thermomix" className="py-16 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-dark">
            Why Choose Thermomix®?
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            With over 100,000 recipes at your fingertips and 20+ cooking functions in one appliance, 
            Thermomix® revolutionizes the way you cook.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-text-dark">{service.title}</h3>
              <p className="text-text-gray">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Thermomix Features */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-text-dark">
              One Machine, Endless Possibilities
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center mb-8">
              <div className="p-4">
                <p className="text-3xl font-bold text-primary-green mb-2">20+</p>
                <p className="text-text-gray">Functions</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-primary-green mb-2">100,000+</p>
                <p className="text-text-gray">Recipes</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-primary-green mb-2">50%</p>
                <p className="text-text-gray">Quieter Operation</p>
              </div>
            </div>
          </div>
          
          {/* Varoma Steaming Image */}
          <div className="relative h-64 md:h-96">
            <img 
              src={varomaImage} 
              alt="Thermomix Varoma Steaming" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg font-semibold">Healthy Steaming with Varoma</p>
              <p className="text-white/90 text-sm">Cook complete meals in one go - main dish and sides simultaneously</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services