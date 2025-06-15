const Footer = () => {
  return (
    <footer className="bg-text-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Paula Wöbcke</h3>
          <p className="text-gray-300">Independent Thermomix® Diamond Team Leader</p>
          
          <div className="flex justify-center space-x-6 py-4">
            <a href="#home" className="hover:text-primary-green transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-green transition-colors">About</a>
            <a href="#thermomix" className="hover:text-primary-green transition-colors">Thermomix®</a>
            <a href="#contact" className="hover:text-primary-green transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Disclaimer */}
      <div className="bg-disclaimer-bg text-text-dark py-4 px-4">
        <div className="container mx-auto text-center text-xs">
          <p className="mb-2">
            This website is operated by Paula Wöbcke, an Independent Thermomix® Advisor. 
            It is not affiliated with or endorsed by Vorwerk UK Limited.
          </p>
          <p>
            Thermomix® is a registered trademark of Vorwerk UK Limited.
          </p>
          <p className="mt-2 text-primary-green font-semibold">
            © 2024 Paula Wöbcke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer