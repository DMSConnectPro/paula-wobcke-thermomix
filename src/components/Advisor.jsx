import { useState } from 'react'

const Advisor = () => {
  const [demos, setDemos] = useState(8)
  const [salesPerDemo, setSalesPerDemo] = useState(1.5)
  
  // Calculate earnings - £150 commission per sale after first 6 sales
  const commissionPerSale = 150 // £150 per sale from sale 7 onwards
  const monthlyUnits = demos * salesPerDemo
  const monthlyBonus = Math.floor(monthlyUnits / 4) * 400 // £400 bonus per 4 sales
  const baseCommission = monthlyUnits * commissionPerSale
  const monthlyEarnings = baseCommission + monthlyBonus
  const yearlyEarnings = monthlyEarnings * 12
  const hoursPerDemo = 2.5 // Including prep and travel
  const hourlyRate = monthlyEarnings / (demos * hoursPerDemo)

  const benefits = [
    {
      title: "Flexible Income",
      description: "Earn £150 commission per sale plus £400 bonus for every 4 sales",
      icon: "💰"
    },
    {
      title: "Work-Life Balance",
      description: "Set your own schedule around family and commitments",
      icon: "⚖️"
    },
    {
      title: "Personal Growth",
      description: "Develop valuable skills with support and mentoring",
      icon: "📈"
    },
    {
      title: "Work From Home",
      description: "Run your business from your kitchen",
      icon: "🏠"
    },
    {
      title: "Premium Product",
      description: "Represent the world's most advanced kitchen appliance",
      icon: "⭐"
    },
    {
      title: "Amazing Community",
      description: "Join a supportive network of advisors",
      icon: "👥"
    }
  ]

  const steps = [
    {
      number: "1",
      title: "Apply Today",
      description: "Complete our simple application form for a friendly chat"
    },
    {
      number: "2",
      title: "Personal Training",
      description: "Receive one-on-one training from experienced advisors"
    },
    {
      number: "3",
      title: "Start Demonstrating",
      description: "Begin with friends and family, then expand your network"
    },
    {
      number: "4",
      title: "Grow Your Business",
      description: "Build your customer base, earn rewards, and mentor others"
    }
  ]

  return (
    <section id="become-advisor" className="py-16">
      {/* Hero Section */}
      <div className="bg-text-dark text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transform Your Career as a Thermomix® Advisor
            </h1>
            <p className="text-xl mb-8">
              Join Paula's team and build a rewarding business sharing the joy of cooking
            </p>
            <a href="#calculator" className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold hover:bg-dark-green transition-colors inline-block">
              Calculate Your Earnings
            </a>
          </div>
        </div>
        {/* Stars effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Earn Your Thermomix Section */}
      <div className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-dark">
              Earn Your Thermomix® TM7
            </h2>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-bold text-primary-green mb-2">Start</p>
                <p className="text-2xl font-bold text-text-dark">£350</p>
                <p className="text-sm text-text-gray">Initial investment</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-bold text-primary-green mb-2">Each Sale</p>
                <p className="text-2xl font-bold text-text-dark">-£199</p>
                <p className="text-sm text-text-gray">Reduces your balance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-bold text-primary-green mb-2">Sale 6</p>
                <p className="text-2xl font-bold text-text-dark">FREE TM7</p>
                <p className="text-sm text-text-gray">£350 deposit refunded</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-bold text-primary-green mb-2">Sale 7+</p>
                <p className="text-2xl font-bold text-text-dark">£150/sale</p>
                <p className="text-sm text-text-gray">Pure commission</p>
              </div>
            </div>
            <p className="text-text-gray max-w-2xl mx-auto">
              Start with just £350 and watch your investment disappear with each sale. 
              After just 6 sales, your TM7 is completely FREE and you start earning £150 commission per sale!
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-dark">
              Why Become a Thermomix® Advisor?
            </h2>
            <p className="text-text-gray max-w-2xl mx-auto">
              Create your own success story with flexibility, support, and unlimited earning potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-bg-light p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-text-dark">{benefit.title}</h3>
                <p className="text-text-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div id="calculator" className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-text-dark">
              Calculate Your Potential Earnings
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Demonstrations per Month: {demos}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={demos}
                    onChange={(e) => setDemos(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Average Sales per Demo: {salesPerDemo}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.5"
                    value={salesPerDemo}
                    onChange={(e) => setSalesPerDemo(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
                  />
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 text-center mb-6">
                  <div>
                    <p className="text-3xl font-bold text-primary-green">£{monthlyEarnings.toLocaleString()}</p>
                    <p className="text-text-gray">Estimated Monthly Earnings</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-green">£{yearlyEarnings.toLocaleString()}</p>
                    <p className="text-text-gray">Estimated Yearly Earnings</p>
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-gray">Base Commission ({monthlyUnits.toFixed(1)} × £150):</span>
                    <span className="font-semibold text-text-dark">£{baseCommission.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-gray">Monthly Bonus (£400 per 4 sales):</span>
                    <span className="font-semibold text-text-dark">£{monthlyBonus.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-text-gray mt-4 text-center">
                *Earnings calculated after first 6 sales. First 6 sales reduce your TM7 balance. Additional bonuses available for team building.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
            Your Journey to Success
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text-dark">{step.title}</h3>
                <p className="text-text-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-text-dark text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Join Paula's successful team of Thermomix® advisors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold hover:bg-dark-green transition-colors"
              >
                Apply Now
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-text-dark transition-all"
              >
                Book a Chat
              </a>
            </div>
          </div>
        </div>
        {/* Stars effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advisor