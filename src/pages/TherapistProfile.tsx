import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Clock, Users, Award, BookOpen, Heart, ArrowLeft, Calendar, MessageCircle } from "lucide-react";

const TherapistProfile = () => {
  const { id } = useParams();

  // Mock data - in real app this would be fetched based on ID
  const therapist = {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Licensed Clinical Psychologist",
    specialties: ["Anxiety", "Depression", "PTSD", "Cognitive Behavioral Therapy"],
    rating: 4.9,
    reviews: 127,
    experience: "8+ years",
    availability: "Available Today",
    location: "Online & New York",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face",
    bio: "Dr. Sarah Johnson is a compassionate and experienced clinical psychologist specializing in anxiety, depression, and trauma recovery. With over 8 years of practice, she has helped hundreds of clients overcome their challenges and build resilience. Dr. Johnson uses evidence-based approaches including Cognitive Behavioral Therapy (CBT) and mindfulness techniques to provide personalized care for each client.",
    price: "$120/session",
    education: [
      "Ph.D. in Clinical Psychology - Columbia University",
      "M.A. in Psychology - New York University", 
      "B.A. in Psychology - Harvard University"
    ],
    certifications: [
      "Licensed Clinical Psychologist (NY)",
      "Certified CBT Practitioner",
      "Trauma-Informed Care Specialist",
      "EMDR Certified Therapist"
    ],
    approaches: [
      "Cognitive Behavioral Therapy (CBT)",
      "Dialectical Behavior Therapy (DBT)",
      "Mindfulness-Based Stress Reduction",
      "Trauma-Informed Care",
      "Solution-Focused Brief Therapy"
    ],
    languages: ["English", "Spanish"],
    sessionTypes: ["Individual Therapy", "Couples Counseling", "Group Sessions"],
    availableSlots: [
      "Today 2:00 PM",
      "Today 4:00 PM", 
      "Tomorrow 10:00 AM",
      "Tomorrow 2:00 PM",
      "Friday 9:00 AM"
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Anonymous Client",
      rating: 5,
      date: "2 weeks ago",
      comment: "Dr. Johnson has been incredibly helpful in my journey with anxiety. Her approach is both professional and caring, making me feel comfortable to open up about my struggles."
    },
    {
      id: 2,
      name: "M.K.",
      rating: 5,
      date: "1 month ago", 
      comment: "Amazing therapist! She helped me work through trauma with patience and expertise. I highly recommend her to anyone looking for genuine support."
    },
    {
      id: 3,
      name: "Alex T.",
      rating: 4,
      date: "2 months ago",
      comment: "Very knowledgeable and creates a safe space for healing. The CBT techniques she taught me have been life-changing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <Link to="/therapists" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Therapists
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover shadow-hero"
            />
            
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-2">
                  {therapist.name}
                </h1>
                <p className="text-xl text-primary-foreground/90 mb-4">
                  {therapist.title}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {therapist.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="bg-white/20 text-white border-white/30">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 text-primary-foreground/90">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-medium">{therapist.rating}</span>
                    <span className="text-sm">({therapist.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="text-sm">{therapist.experience} experience</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 border-white/20 text-primary-foreground min-w-80">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">{therapist.price}</CardTitle>
                  <div className="text-right">
                    <div className="text-sm opacity-80">Next Available</div>
                    <div className="font-medium text-accent-light">{therapist.availability}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to={`/book?therapist=${therapist.id}`}>
                  <Button variant="hero" size="lg" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Session
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-wellness" />
                  About Dr. Johnson
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {therapist.bio}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Treatment Approaches
                    </h4>
                    <ul className="space-y-2">
                      {therapist.approaches.map((approach) => (
                        <li key={approach} className="text-sm text-muted-foreground">
                          • {approach}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Session Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{therapist.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>50-minute sessions</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Languages:</strong> {therapist.languages.join(", ")}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Session Types:</strong> {therapist.sessionTypes.join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="background" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-trust" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {therapist.education.map((degree) => (
                      <li key={degree} className="text-sm text-muted-foreground border-l-2 border-primary/20 pl-4">
                        {degree}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-wellness" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {therapist.certifications.map((cert) => (
                      <li key={cert} className="text-sm text-muted-foreground border-l-2 border-wellness/20 pl-4">
                        {cert}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="shadow-card border-0">
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-foreground">{therapist.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardDescription>Based on {therapist.reviews} reviews</CardDescription>
                </CardHeader>
              </Card>

              <div className="lg:col-span-2 space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="shadow-soft border-0">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-medium text-foreground">{review.name}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= review.rating ? 'fill-accent text-accent' : 'text-muted'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {review.comment}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="availability" className="space-y-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Available Time Slots</CardTitle>
                <CardDescription>
                  Select a time that works for you. All times are in your local timezone.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {therapist.availableSlots.map((slot, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-soft transition-all duration-200 border border-border hover:border-primary/20">
                      <CardContent className="p-4 text-center">
                        <div className="font-medium text-foreground">{slot}</div>
                        <div className="text-sm text-muted-foreground">50 minutes</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-accent-lighter rounded-lg">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent-foreground mt-0.5" />
                    <div>
                      <h4 className="font-medium text-accent-foreground mb-1">
                        Need a different time?
                      </h4>
                      <p className="text-sm text-accent-foreground/80">
                        Contact Dr. Johnson directly to discuss alternative scheduling options.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TherapistProfile;