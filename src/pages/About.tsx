import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Heart, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import aboutHeroWoman from "@/assets/about-hero-woman.jpg";
import therapistClientSession from "@/assets/therapist-client-session.jpg";
import supportiveInteractions from "@/assets/supportive-interactions.jpg";
import professionalWomanOffice from "@/assets/professional-woman-office.jpg";
import videoCallTherapy from "@/assets/video-call-therapy.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-secondary/30 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Breadcrumbs */}
              <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground font-medium">ABOUT US</span>
              </nav>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  About OurSoulss
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover our mission to provide compassionate, accessible mental health support for everyone.
                </p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 group">
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-20 transform rotate-6"></div>
              <img 
                src={aboutHeroWoman} 
                alt="Smiling woman representing OurSoulss support"
                className="relative rounded-3xl shadow-hero w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Vision for Accessible Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={therapistClientSession} 
              alt="Therapist in conversation with client"
              className="rounded-3xl shadow-card w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              A Vision for Accessible Support
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              At Oursoulss, we believe mental health support should be available to everyone, regardless of where they are in life. We started with a clear vision: to create a space where people can find comfort, guidance, and clarity through meaningful conversations. Whether you're seeking professional counseling or just need someone to listen, Oursoulss is here for you.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why We Started</h3>
              <p className="text-muted-foreground leading-relaxed">
                Life can be tough, and talking to someone who truly understands can make all the difference. We know how important it is to have a safe, supportive space to share your thoughts without judgment. That's why Oursoulss was created—to offer personalized support through professional therapists or empathetic listeners.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What We Offer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our platform offers flexibility and choice. With audio and video sessions, you can connect with professionals or peers on your terms. You decide who to talk to, ensuring you feel comfortable and in control of your mental health journey. We aim to make it easier for anyone to reach out and get the help they need, whenever they need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Mission: Support for Every Journey
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              At Oursoulss, our mission is to make mental health support accessible, relatable, and empowering for everyone. We understand that everyone's journey is unique, which is why we offer both professional and non-professional counseling options. Whether you need clinical advice from a psychologist or just a listening ear, Oursoulss is here to support you in the way that feels right.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              We're more than a counseling platform—we're a community. Our blog and research library offer resources to help you navigate life's challenges. From mental health tips to personal growth strategies, we're here to inspire and guide you.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Where Every Conversation Matters</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Oursoulss, we believe everyone deserves to be heard and understood. Whether you're here for professional counseling or just someone to listen, we're ready to walk with you on this journey. Together, we're creating a world where mental health is prioritized and supported. Welcome to Oursoulss—where every conversation counts.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src={supportiveInteractions} 
                alt="Supportive interactions between counselors and clients"
                className="rounded-3xl shadow-card w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-card opacity-10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <img 
            src={professionalWomanOffice} 
            alt="Professional woman in office setting"
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-hero"
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-secondary/40 rounded-3xl p-8 lg:p-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-primary">50+</div>
              <p className="text-muted-foreground leading-relaxed">
                Transforming lives through compassionate support and guidance, empowering individuals to overcome their challenges.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-primary">120+</div>
              <p className="text-muted-foreground leading-relaxed">
                Providing countless sessions, ensuring accessible mental health support tailored to individual needs.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-primary">6K+</div>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated hours of professional counseling, fostering growth, healing, and personal development for our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support for Life's Challenges Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Support for Life's Challenges
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Relationship Troubles?</strong> Get an outside perspective on improving communication or find the strength to say goodbye with grace.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Career Setbacks?</strong> Recently fired or facing job instability? We help you pick up the pieces and keep moving forward.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Mental and Emotional Health Struggles?</strong> Understand what's happening and build the strength to lead a happy, healthy life.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <ArrowRight className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Life Decisions?</strong> Unsure of your next step? We guide you in clarifying your interests, goals, and future direction.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Feeling Stuck in Life?</strong> Let us ask the tough questions that help you unpack your passions and priorities.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Social Distancing and Isolation?</strong> Whether it's distancing from friends or feeling stuck at home, take the first step toward change today.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-wellness rounded-3xl opacity-20 transform -rotate-6"></div>
            <img 
              src={videoCallTherapy} 
              alt="Person on video call with therapist"
              className="relative rounded-3xl shadow-card w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-3xl p-8 lg:p-16 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join OurSoulss today and embark on your journey to mental well-being. Our compassionate counselors are here for you.
          </p>
          <Link to="/book">
            <Button variant="secondary" size="lg" className="bg-card text-primary hover:bg-card/90 group">
              BOOK APPOINTMENT
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;