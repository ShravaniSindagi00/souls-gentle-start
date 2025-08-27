import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Star, Clock, MapPin, Filter, Heart, Users } from "lucide-react";

const Therapists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");

  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Licensed Clinical Psychologist",
      specialties: ["Anxiety", "Depression", "PTSD"],
      rating: 4.9,
      reviews: 127,
      experience: "8+ years",
      availability: "Available Today",
      location: "Online & New York",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Specializing in cognitive behavioral therapy and trauma-informed care.",
      price: "$120/session"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Psychiatrist & Therapist",
      specialties: ["Bipolar", "ADHD", "Medication Management"],
      rating: 4.8,
      reviews: 89,
      experience: "12+ years",
      availability: "Next Available: Tomorrow",
      location: "Online & California",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      bio: "Dual approach combining therapy and psychiatric medication management.",
      price: "$150/session"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Marriage & Family Therapist",
      specialties: ["Couples Therapy", "Family Counseling", "Communication"],
      rating: 4.9,
      reviews: 203,
      experience: "10+ years",
      availability: "Available Today",
      location: "Online & Texas",
      image: "https://images.unsplash.com/photo-1594824804732-ca8fbf0945c8?w=400&h=400&fit=crop&crop=face",
      bio: "Helping couples and families build stronger, healthier relationships.",
      price: "$110/session"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Addiction Specialist",
      specialties: ["Substance Abuse", "Addiction Recovery", "Trauma"],
      rating: 4.7,
      reviews: 156,
      experience: "15+ years",
      availability: "Next Available: Today 3PM",
      location: "Online & Florida",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      bio: "Comprehensive addiction treatment with a focus on long-term recovery.",
      price: "$135/session"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      title: "Child & Adolescent Psychologist",
      specialties: ["Child Psychology", "Teen Counseling", "Behavioral Issues"],
      rating: 4.8,
      reviews: 174,
      experience: "9+ years",
      availability: "Available Today",
      location: "Online & Illinois",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
      bio: "Specialized care for children and teenagers facing emotional challenges.",
      price: "$125/session"
    },
    {
      id: 6,
      name: "Dr. Robert Kumar",
      title: "Trauma Specialist",
      specialties: ["PTSD", "Complex Trauma", "EMDR Therapy"],
      rating: 4.9,
      reviews: 145,
      experience: "11+ years",
      availability: "Next Available: Tomorrow",
      location: "Online & Washington",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in trauma recovery using evidence-based therapeutic approaches.",
      price: "$140/session"
    }
  ];

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         therapist.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSpecialty = !selectedSpecialty || 
                            therapist.specialties.includes(selectedSpecialty);
    const matchesAvailability = !selectedAvailability ||
                               (selectedAvailability === "today" && therapist.availability.includes("Today")) ||
                               (selectedAvailability === "tomorrow" && therapist.availability.includes("Tomorrow"));
    
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Find Your Perfect Therapist
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Connect with licensed mental health professionals who understand your needs. 
            All sessions are conducted in a safe, confidential environment.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Specialties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Specialties</SelectItem>
                  <SelectItem value="Anxiety">Anxiety</SelectItem>
                  <SelectItem value="Depression">Depression</SelectItem>
                  <SelectItem value="PTSD">PTSD</SelectItem>
                  <SelectItem value="Couples Therapy">Couples Therapy</SelectItem>
                  <SelectItem value="ADHD">ADHD</SelectItem>
                  <SelectItem value="Addiction Recovery">Addiction Recovery</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Availability</SelectItem>
                  <SelectItem value="today">Available Today</SelectItem>
                  <SelectItem value="tomorrow">Available Tomorrow</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display font-semibold text-foreground">
              {filteredTherapists.length} Therapists Available
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Sorted by Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTherapists.map((therapist) => (
              <Card key={therapist.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-soft">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg font-display group-hover:text-primary transition-colors">
                        {therapist.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {therapist.title}
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="text-sm font-medium">{therapist.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({therapist.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {therapist.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-wellness font-medium">{therapist.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{therapist.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{therapist.experience} experience</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {therapist.bio}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-lg font-semibold text-primary">
                      {therapist.price}
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/therapist/${therapist.id}`}>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </Link>
                      <Link to={`/book?therapist=${therapist.id}`}>
                        <Button variant="default" size="sm">
                          Book Session
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTherapists.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Heart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">No therapists found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or browse all available therapists.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSpecialty("");
                  setSelectedAvailability("");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Therapists;