import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Shield,
  Clock,
  MessageCircle,
  Users,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import heroImage from '@/assets/hero-image.jpg'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
                  Your Feelings Matter,{' '}
                  <span className="text-accent-light">You're Not Alone</span>
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
                  Welcome to OurSoulss – Your 24/7 Wellness and Mental Health
                  Support. Connect with psychiatrists, psychologists,
                  therapists, or empathetic peers. We're here to help you
                  through tough times, anytime.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/therapists">
                  <Button
                    variant="outline"
                    size="xl"
                    className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    Find Therapist
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-4 text-primary-foreground/80">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-accent border-2 border-white/20 flex items-center justify-center text-xs font-bold text-accent-foreground"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold">Trusted by 50+ people</p>
                  <p className="text-xs opacity-80">around the globe</p>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Mental health support - peaceful person in meditation"
                  className="w-full h-auto rounded-2xl shadow-hero"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At OurSoulss, we offer 24/7 emotional support with expert
              professionals, secure communication, and flexible, personalized
              interactions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: '24/7 Support',
                description:
                  'Our dedicated team is available around the clock to provide immediate emotional support and consolation.',
                color: 'trust',
              },
              {
                icon: Shield,
                title: 'Secure and Confidential',
                description:
                  'All conversations are confidential, ensuring a safe and private environment for your peace of mind.',
                color: 'wellness',
              },
              {
                icon: MessageCircle,
                title: 'Flexible Communication',
                description:
                  "Connect with us through calls, texts or online chats. Choose the medium that you're most comfortable with.",
                color: 'accent',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-card transition-all duration-300 animate-slide-up border-0 shadow-soft"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-lg bg-gradient-${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-display">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button variant="outline" size="lg">
                Know More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mental health support tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Professional Therapy',
                description: 'Licensed therapists and psychologists',
                link: '/therapists',
                icon: Users,
              },
              {
                title: 'AI Therapy Chat',
                description: '24/7 AI-powered emotional support',
                link: '/ai-therapy',
                icon: MessageCircle,
              },
              {
                title: 'Wellness Programs',
                description: 'Personalized growth recommendations',
                link: '/wellness',
                icon: Heart,
              },
              {
                title: 'Corporate Solutions',
                description: 'Mental health support for businesses',
                link: '/b2b',
                icon: Star,
              },
            ].map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <Card className="h-full hover:shadow-floating transition-all duration-300 border-0 shadow-soft">
                  <CardHeader className="text-center pb-2">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-hero flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-display">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-center text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how our compassionate online counseling has made a
              difference in the lives of our clients. Their journeys inspire us
              every day!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote:
                  'Your services are pretty good, easily accessible which is great and my experience with your company has been amazing. you guys are the bestt 💖',
                name: 'Sneha Kurodi',
                role: 'College Student',
              },
              {
                quote:
                  "I've never felt so understood. The psychologists at OurSoulss are not only highly skilled but also incredibly empathetic. Their friendly demeanor makes every session feel safe and welcoming.",
                name: 'Sachin SK',
                role: 'Data Analyst in Bangalore',
              },
              {
                quote:
                  'I was hesitant about online therapy, but OurSoulss changed my mind. The expertise of the psychologists is evident, and I trust them completely with my mental health journey.',
                name: 'Khushi Hiremath',
                role: 'College Student from Hubballi',
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="shadow-card border-0 bg-white relative group hover:shadow-floating transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-4xl text-primary mb-4 opacity-20 font-serif">
                    "
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {testimonial.quote}
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/reviews">
              <Button variant="outline" size="lg" className="px-8">
                View All Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg opacity-90">
              Take the first step towards better mental health. Our
              professionals are here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button variant="hero" size="xl">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/ai-therapy">
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Try AI Chat
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              {[
                { label: 'Professional Therapists', value: '50+' },
                { label: 'Happy Clients', value: '1000+' },
                { label: 'Success Rate', value: '95%' },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-accent-light">
                    {stat.value}
                  </div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
