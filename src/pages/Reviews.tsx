import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, ArrowLeft, Heart, Users, TrendingUp } from 'lucide-react'

const Reviews = () => {
  const allTestimonials = [
    {
      id: 1,
      quote:
        'Your services are pretty good, easily accessible which is great and my experience with your company has been amazing. you guys are the bestt 💖',
      name: 'Sneha Kurodi',
      role: 'College Student',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
    },
    {
      id: 2,
      quote:
        "I've never felt so understood. The psychologists at OurSoulss are not only highly skilled but also incredibly empathetic. Their friendly demeanor makes every session feel safe and welcoming.",
      name: 'Sachin SK',
      role: 'Data Analyst in Bangalore',
      rating: 5,
      date: '1 month ago',
      verified: true,
    },
    {
      id: 3,
      quote:
        'I was hesitant about online therapy, but OurSoulss changed my mind. The expertise of the psychologists is evident, and I trust them completely with my mental health journey.',
      name: 'Khushi Hiremath',
      role: 'College Student from Hubballi',
      rating: 5,
      date: '3 weeks ago',
      verified: true,
    },
    {
      id: 4,
      quote:
        'The 24/7 support has been a lifesaver during my anxiety episodes. Having someone available whenever I need them gives me so much peace of mind.',
      name: 'Priya Sharma',
      role: 'Software Engineer',
      rating: 5,
      date: '2 months ago',
      verified: true,
    },
    {
      id: 5,
      quote:
        'Dr. Sarah Johnson helped me work through my depression with such compassion. The personalized approach and genuine care made all the difference in my recovery.',
      name: 'Rahul Patel',
      role: 'Marketing Manager',
      rating: 5,
      date: '1 month ago',
      verified: true,
    },
    {
      id: 6,
      quote:
        "The AI therapy chat is surprisingly helpful for those moments when I need immediate support. It's like having a caring friend available 24/7.",
      name: 'Anita Desai',
      role: 'Teacher',
      rating: 4,
      date: '3 weeks ago',
      verified: true,
    },
    {
      id: 7,
      quote:
        "The booking process is seamless and the therapists are incredibly professional. I've seen significant improvement in my stress management since starting sessions.",
      name: 'Vikram Singh',
      role: 'Business Analyst',
      rating: 5,
      date: '1 week ago',
      verified: true,
    },
    {
      id: 8,
      quote:
        'As someone who struggled with social anxiety, the online format was perfect for me. The therapist made me feel comfortable from the very first session.',
      name: 'Meera Krishnan',
      role: 'Graphic Designer',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
    },
    {
      id: 9,
      quote:
        'The wellness programs and daily recommendations have become an integral part of my self-care routine. Thank you for making mental health accessible.',
      name: 'Arjun Reddy',
      role: 'Student',
      rating: 4,
      date: '1 month ago',
      verified: true,
    },
  ]

  const stats = [
    { label: 'Total Reviews', value: '1,247', icon: Users },
    { label: 'Average Rating', value: '4.9', icon: Star },
    { label: 'Satisfaction Rate', value: '96%', icon: Heart },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              What Our Users Say
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Discover how our compassionate online counseling has made a
              difference in the lives of our clients. Their journeys inspire us
              every day!
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-hero rounded-lg">
                    <stat.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="shadow-card border-0 bg-white relative group hover:shadow-floating transition-all duration-300"
              >
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= testimonial.rating
                            ? 'fill-accent text-accent'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                    {testimonial.verified && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>

                  {/* Quote */}
                  <div className="text-4xl text-primary mb-4 opacity-20 font-serif">
                    "
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-foreground text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


 
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied clients who have transformed their
              mental health with OurSoulss. Your wellness journey starts with a
              single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button variant="default" size="lg">
                  Book Your First Session
                </Button>
              </Link>
              <Link to="/therapists">
                <Button variant="outline" size="lg">
                  Find a Therapist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reviews
