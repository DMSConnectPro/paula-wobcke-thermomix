import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Disclaimer Banner */}
      <div className="bg-disclaimer-bg text-text-dark text-xs py-2 px-4 text-center">
        <p>
          Paula Wöbcke - Independent Thermomix® Advisor | This website is operated independently. 
          It is not affiliated or endorsed by Vorwerk UK Limited.
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Name */}
            <div className="text-2xl font-bold text-text-dark">
              Paula Wöbcke
              <span className="block text-sm font-normal text-text-gray">Independent Thermomix® Diamond Team Leader</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-text-dark hover:text-primary-green hover:scale-110 transition-all duration-200">Home</a>
              <a href="#about" className="text-text-dark hover:text-primary-green hover:scale-110 transition-all duration-200">About</a>
              <a href="#thermomix" className="text-text-dark hover:text-primary-green hover:scale-110 transition-all duration-200">Thermomix®</a>
              <a href="#become-advisor" className="text-primary-green font-bold text-lg hover:scale-110 transition-all duration-200">Become an Advisor</a>
              <a href="#contact" className="bg-primary-green text-white px-6 py-3 rounded-full hover:bg-dark-green hover:-translate-y-1 transition-all duration-200">
                Book Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#home" className="block text-text-dark hover:text-primary-green">Home</a>
              <a href="#about" className="block text-text-dark hover:text-primary-green">About</a>
              <a href="#thermomix" className="block text-text-dark hover:text-primary-green">Thermomix®</a>
              <a href="#become-advisor" className="block text-primary-green font-bold">Become an Advisor</a>
              <a href="#contact" className="block bg-primary-green text-white px-6 py-3 rounded-full text-center">
                Book Demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header