import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log('Newsletter subscription:', newsletterEmail)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Google Map Section */}
      <section className="w-full h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124441.90779633106!2d75.07871885820313!3d15.349851600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d36ae3e9e5e5%3A0x8d0b4e3d4c5f6e0!2sHubballi%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="OurSoulss Location - Hubballi, Karnataka"
        />
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information Card */}
            <Card className="bg-orange-50 border-0 shadow-soft h-fit">
              <CardContent className="p-8">
                {/* Call Us Today */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-800">
                        Call Us Today
                      </h3>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium text-lg ml-16">
                    +91 93538 57659
                  </p>
                </div>

                {/* Send a Message */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-800">
                        Send a message
                      </h3>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium text-lg ml-16">
                    contact@oursoulss.com
                  </p>
                </div>

                {/* Our Address */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-800">
                        Our Address
                      </h3>
                    </div>
                  </div>
                  <div className="ml-16">
                    <p className="text-slate-700 font-medium">Hubballi</p>
                    <p className="text-slate-700 font-medium">
                      Karnataka, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">
                  Get in Touch with Us
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Questions or need help? Fill out the form below, and we'll
                  respond promptly. We're here for you! Your feedback and
                  inquiries are important to us.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="johndoe@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="9789999999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-semibold py-3 px-8 rounded-lg text-lg"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Subscribe to our newsletter
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Sign up for our newsletter and receive tips, resources, and
                  updates straight to your inbox.
                </p>
              </div>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 lg:min-w-96"
              >
                <Input
                  type="email"
                  placeholder="Your email *"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 bg-white border-0 text-slate-800 placeholder:text-slate-500"
                />
                <Button
                  type="submit"
                  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-2 whitespace-nowrap"
                >
                  SUBSCRIBE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
