import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Get EmailJS configuration
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_96vaqcl'
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_l738wmq'
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'EOx611ifodh1iMCJg'

      // Debug: Log the configuration (remove in production)
      console.log('EmailJS Config:', {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY: PUBLIC_KEY.substring(0, 5) + '...' // Only show first 5 chars for security
      })

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'paula.wobcke@outlook.com'
      }

      console.log('Sending email with params:', templateParams)

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      console.log('EmailJS Response:', response)

      if (response.status === 200) {
        // Show thank you message
        setShowThankYou(true)
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        
        // Hide thank you message after 5 seconds
        setTimeout(() => {
          setShowThankYou(false)
        }, 5000)
      } else {
        throw new Error('Failed to send email')
      }
      
    } catch (error) {
      console.error('Error sending form:', error)
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status
      })
      alert('Sorry, there was an error sending your message. Please contact me directly at paula.wobcke@outlook.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-dark">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-text-gray mb-8">
            Book your free Thermomix® demonstration today and discover how this amazing appliance 
            can revolutionize your kitchen experience.
          </p>

          <div className="bg-bg-light rounded-lg p-8">
            {showThankYou ? (
              <div className="py-12 px-4">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-primary-green mb-4">
                  Thank You for Your Interest!
                </h3>
                <p className="text-text-gray">
                  We've received your request and will get back to you as soon as possible 
                  to assist you with your personal demo of the Thermomix® TM7.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:outline-none"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your cooking needs and preferred demo time"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-full font-semibold transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-primary-green text-white hover:bg-dark-green'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Book Your Free Demo'}
                </button>
              </form>
            )}
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="text-xl font-semibold text-text-dark">Or Contact Me Directly</h3>
            <div className="space-y-2 text-text-gray">
              <p>Email: paula.wobcke@outlook.com</p>
              <p>Phone: +44 7771 780250</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <a 
                  href="https://wa.me/447771780250" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp: +44 7771 780250
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact