import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, User, CreditCard, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

const BookingFlow = () => {
  const [searchParams] = useSearchParams();
  const therapistId = searchParams.get('therapist');
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    therapist: therapistId || '',
    sessionType: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sessionReason: '',
    concerns: '',
    previousTherapy: '',
    emergencyContact: '',
    paymentMethod: '',
    agreeToTerms: false,
  });

  const steps = [
    { id: 1, title: "Session Details", icon: Calendar },
    { id: 2, title: "Personal Information", icon: User },
    { id: 3, title: "Payment", icon: CreditCard },
    { id: 4, title: "Confirmation", icon: CheckCircle }
  ];

  const therapists = [
    { id: "1", name: "Dr. Sarah Johnson", price: "$120" },
    { id: "2", name: "Dr. Michael Chen", price: "$150" },
    { id: "3", name: "Dr. Emily Rodriguez", price: "$110" },
  ];

  const selectedTherapist = therapists.find(t => t.id === bookingData.therapist);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateBookingData = (key: string, value: any) => {
    setBookingData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <Link to="/therapists" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Therapists
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Book Your Session
          </h1>
          <p className="text-lg text-primary-foreground/90 mt-2">
            Schedule your appointment with our licensed professionals
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  currentStep >= step.id 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : 'border-border text-muted-foreground'
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <div className={`ml-3 ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                  <div className="text-sm font-medium">{step.title}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-px mx-6 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-semibold mb-2">Session Details</h2>
                    <p className="text-muted-foreground">Choose your therapist and session preferences</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="therapist">Select Therapist</Label>
                      <Select value={bookingData.therapist} onValueChange={(value) => updateBookingData('therapist', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a therapist" />
                        </SelectTrigger>
                        <SelectContent>
                          {therapists.map((therapist) => (
                            <SelectItem key={therapist.id} value={therapist.id}>
                              {therapist.name} - {therapist.price}/session
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Session Type</Label>
                      <RadioGroup value={bookingData.sessionType} onValueChange={(value) => updateBookingData('sessionType', value)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="video" id="video" />
                          <Label htmlFor="video">Video Session (Online)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="audio" id="audio" />
                          <Label htmlFor="audio">Audio Only</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="inPerson" id="inPerson" />
                          <Label htmlFor="inPerson">In-Person (if available)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => updateBookingData('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select value={bookingData.time} onValueChange={(value) => updateBookingData('time', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sessionReason">What brings you to therapy today? (Optional)</Label>
                    <Textarea
                      id="sessionReason"
                      placeholder="Share what you'd like to work on in this session..."
                      value={bookingData.sessionReason}
                      onChange={(e) => updateBookingData('sessionReason', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-semibold mb-2">Personal Information</h2>
                    <p className="text-muted-foreground">Help us provide you with personalized care</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={bookingData.firstName}
                        onChange={(e) => updateBookingData('firstName', e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={bookingData.lastName}
                        onChange={(e) => updateBookingData('lastName', e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => updateBookingData('email', e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => updateBookingData('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="concerns">Current Concerns (Optional)</Label>
                    <Textarea
                      id="concerns"
                      placeholder="Share any specific concerns or goals you have..."
                      value={bookingData.concerns}
                      onChange={(e) => updateBookingData('concerns', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousTherapy">Previous Therapy Experience (Optional)</Label>
                    <Select value={bookingData.previousTherapy} onValueChange={(value) => updateBookingData('previousTherapy', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-time">This is my first time</SelectItem>
                        <SelectItem value="some-experience">I've had some therapy before</SelectItem>
                        <SelectItem value="experienced">I'm experienced with therapy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact (Optional)</Label>
                    <Input
                      id="emergencyContact"
                      value={bookingData.emergencyContact}
                      onChange={(e) => updateBookingData('emergencyContact', e.target.value)}
                      placeholder="Name and phone number"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-semibold mb-2">Payment Information</h2>
                    <p className="text-muted-foreground">Secure payment processing for your session</p>
                  </div>

                  <Card className="bg-accent-lighter border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Session Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Therapist:</span>
                          <span className="font-medium">{selectedTherapist?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date & Time:</span>
                          <span className="font-medium">{bookingData.date} at {bookingData.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Session Type:</span>
                          <span className="font-medium capitalize">{bookingData.sessionType}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2 font-semibold">
                          <span>Total:</span>
                          <span>{selectedTherapist?.price}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <Label>Payment Method</Label>
                    <RadioGroup value={bookingData.paymentMethod} onValueChange={(value) => updateBookingData('paymentMethod', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="insurance" id="insurance" />
                        <Label htmlFor="insurance">Insurance (verify coverage)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hsa" id="hsa" />
                        <Label htmlFor="hsa">HSA/FSA</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      💳 Your payment information is encrypted and secure. You will not be charged until your appointment is confirmed.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={bookingData.agreeToTerms}
                      onCheckedChange={(checked) => updateBookingData('agreeToTerms', checked)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the <Link to="/terms" className="text-primary underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>
                    </Label>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-wellness text-wellness-foreground rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-display font-semibold mb-2">Booking Confirmed!</h2>
                    <p className="text-muted-foreground">
                      Your session has been successfully scheduled. You'll receive a confirmation email shortly.
                    </p>
                  </div>

                  <Card className="max-w-md mx-auto">
                    <CardHeader>
                      <CardTitle className="text-lg">Session Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-left">
                        <div className="flex justify-between">
                          <span>Therapist:</span>
                          <span className="font-medium">{selectedTherapist?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date & Time:</span>
                          <span className="font-medium">{bookingData.date} at {bookingData.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Session ID:</span>
                          <span className="font-medium">#12345</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/dashboard">
                      <Button variant="default">
                        Go to Dashboard
                      </Button>
                    </Link>
                    <Link to="/therapists">
                      <Button variant="outline">
                        Book Another Session
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <div className="flex justify-between pt-8 border-t border-border">
                  <Button 
                    variant="outline" 
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  <Button 
                    onClick={handleNext}
                    disabled={currentStep === 3 && !bookingData.agreeToTerms}
                  >
                    {currentStep === 3 ? 'Complete Booking' : 'Continue'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingFlow;