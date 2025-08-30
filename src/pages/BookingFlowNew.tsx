import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Calendar,
  Clock,
  User,
  CreditCard,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  Star,
  Info,
  Video,
  Phone,
  MapPin,
  Edit,
} from 'lucide-react'
import {
  BookingState,
  therapyModalities,
  concerns,
  therapistProfiles,
  calculateMatchScore,
  languageOptions,
  approachStyles,
  TherapistProfile,
} from '@/data/booking'

const BookingFlow = () => {
  const [searchParams] = useSearchParams()
  const therapistId = searchParams.get('therapist')
  const [currentStep, setCurrentStep] = useState(1)
  const [showAllTherapists, setShowAllTherapists] = useState(false)

  const [bookingData, setBookingData] = useState<BookingState>({
    serviceType: '',
    selectedModalities: [],
    selectedConcerns: [],
    preferences: {},
    therapistId: therapistId || undefined,
    sessionFormat: '',
    date: '',
    time: '',
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      sessionReason: '',
      emergencyContact: '',
    },
    paymentMethod: '',
    agreeToTerms: false,
  })

  const steps = [
    { id: 1, title: 'Choose Service', icon: Heart },
    { id: 2, title: 'Therapy Type & Needs', icon: User },
    { id: 3, title: 'Recommended Therapists', icon: Users },
    { id: 4, title: 'Session Format', icon: Video },
    { id: 5, title: 'Date & Time', icon: Calendar },
    { id: 6, title: 'Personal Info', icon: User },
    { id: 7, title: 'Payment', icon: CreditCard },
    { id: 8, title: 'Confirmation', icon: CheckCircle },
  ]

  const selectedTherapist = therapistProfiles.find(
    (t) => t.id === bookingData.therapistId
  )

  // Calculate recommended therapists
  const getRecommendedTherapists = () => {
    if (
      bookingData.selectedModalities.length === 0 &&
      bookingData.selectedConcerns.length === 0 &&
      Object.keys(bookingData.preferences).length === 0
    ) {
      return therapistProfiles.map((therapist) => ({
        ...therapist,
        matchScore: 0,
        explanation: [],
      }))
    }

    const scoredTherapists = therapistProfiles.map((therapist) => {
      const { score, explanation } = calculateMatchScore(therapist, {
        modalities: bookingData.selectedModalities,
        concerns: bookingData.selectedConcerns,
        preferences: bookingData.preferences,
        serviceType: bookingData.serviceType,
      })

      return {
        ...therapist,
        matchScore: score,
        explanation,
      }
    })

    return scoredTherapists.sort((a, b) => b.matchScore - a.matchScore)
  }

  const handleNext = () => {
    // Skip therapy type step for empathic listener
    if (currentStep === 1 && bookingData.serviceType === 'empathic-listener') {
      setCurrentStep(3)
    } else if (currentStep < 8) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    // Skip therapy type step when going back for empathic listener
    if (currentStep === 3 && bookingData.serviceType === 'empathic-listener') {
      setCurrentStep(1)
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateBookingData = (updates: Partial<BookingState>) => {
    setBookingData((prev) => ({ ...prev, ...updates }))
  }

  const updatePersonalInfo = (
    key: keyof BookingState['personalInfo'],
    value: string
  ) => {
    setBookingData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [key]: value },
    }))
  }

  const toggleSelection = (
    array: string[],
    item: string,
    maxSelections?: number
  ) => {
    if (array.includes(item)) {
      return array.filter((i) => i !== item)
    } else {
      if (maxSelections && array.length >= maxSelections) {
        return array
      }
      return [...array, item]
    }
  }

  // Get available time slots based on selected therapist and date
  const getAvailableTimeSlots = () => {
    if (selectedTherapist && bookingData.date) {
      return selectedTherapist.availability[bookingData.date] || []
    }
    // Return generic time slots if no therapist selected
    return ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
  }

  const TherapistCard = ({
    therapist,
    isSelected,
    onSelect,
  }: {
    therapist: TherapistProfile & { matchScore: number; explanation: string[] }
    isSelected: boolean
    onSelect: () => void
  }) => (
    <Card
      className={`cursor-pointer transition-all duration-200 ${
        isSelected ? 'ring-2 ring-primary bg-primary/5' : 'hover:shadow-md'
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={therapist.avatar} alt={therapist.name} />
            <AvatarFallback>
              {therapist.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">{therapist.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {therapist.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {therapist.credentials}
                </p>
              </div>

              {therapist.matchScore > 0 && (
                <div className="text-center">
                  <div
                    className={`text-lg font-bold ${
                      therapist.matchScore >= 80
                        ? 'text-green-600'
                        : therapist.matchScore >= 50
                        ? 'text-amber-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {therapist.matchScore}%
                  </div>
                  <div className="text-xs text-muted-foreground">Match</div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm">{therapist.rating}</span>
                <span className="text-xs text-muted-foreground">
                  • {therapist.experienceYears} years experience
                </span>
              </div>

              <div className="flex flex-wrap gap-1">
                {therapist.explanation.slice(0, 2).map((exp, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {exp}
                  </Badge>
                ))}
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {therapist.bio}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Languages:</span>
                <span>{therapist.languages.slice(0, 2).join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <Link
            to="/therapists"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 group"
          >
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
          <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4">
            {steps.map((step, index) => {
              // Skip therapy type step for empathic listener in display
              if (
                step.id === 2 &&
                bookingData.serviceType === 'empathic-listener'
              ) {
                return null
              }

              return (
                <div key={step.id} className="flex items-center flex-shrink-0">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                      currentStep >= step.id
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'border-border text-muted-foreground'
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`ml-3 ${
                      currentStep >= step.id
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <div className="text-sm font-medium whitespace-nowrap">
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 &&
                    !(
                      step.id === 2 &&
                      bookingData.serviceType === 'empathic-listener'
                    ) && (
                      <div
                        className={`w-12 h-px mx-6 ${
                          currentStep > step.id ? 'bg-primary' : 'bg-border'
                        }`}
                      />
                    )}
                </div>
              )
            })}
          </div>

          {/* Step Content */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              {/* Step 1: Choose Service */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-display font-semibold mb-2">
                      Choose Your Service
                    </h2>
                    <p className="text-muted-foreground">
                      Select the type of support that best fits your needs
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card
                      className={`cursor-pointer transition-all duration-200 ${
                        bookingData.serviceType === 'empathic-listener'
                          ? 'ring-2 ring-primary bg-primary/5'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() =>
                        updateBookingData({ serviceType: 'empathic-listener' })
                      }
                    >
                      <CardContent className="p-6 text-center">
                        <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                          Empathic Listener
                        </h3>
                        <p className="text-2xl font-bold text-primary mb-2">
                          ₹349
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          per session
                        </p>
                        <p className="text-sm leading-relaxed">
                          Supportive listening and guidance to help you process
                          thoughts and feelings in a safe, non-judgmental space.
                        </p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all duration-200 ${
                        bookingData.serviceType === 'professional-therapy'
                          ? 'ring-2 ring-primary bg-primary/5'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() =>
                        updateBookingData({
                          serviceType: 'professional-therapy',
                        })
                      }
                    >
                      <CardContent className="p-6 text-center">
                        <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                          Professional Therapy
                        </h3>
                        <p className="text-2xl font-bold text-primary mb-2">
                          ₹669
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          per session
                        </p>
                        <p className="text-sm leading-relaxed">
                          Evidence-based therapeutic approaches with licensed
                          professionals to address specific mental health
                          concerns.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Step 2: Therapy Type & Needs (Only for Professional Therapy) */}
              {currentStep === 2 &&
                bookingData.serviceType === 'professional-therapy' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-display font-semibold mb-2">
                        Therapy Type & Needs
                      </h2>
                      <p className="text-muted-foreground">
                        Help us understand what you're looking for to recommend
                        the best therapists
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column: Therapy Modalities */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold">
                            Therapy Approaches
                          </h3>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Select up to 3 approaches that interest you (optional)
                        </p>

                        <div className="space-y-3">
                          {therapyModalities.map((modality) => (
                            <Card
                              key={modality.id}
                              className={`cursor-pointer transition-all duration-200 ${
                                bookingData.selectedModalities.includes(
                                  modality.id
                                )
                                  ? 'ring-2 ring-primary bg-primary/5'
                                  : 'hover:shadow-sm hover:bg-muted/50'
                              }`}
                              onClick={() =>
                                updateBookingData({
                                  selectedModalities: toggleSelection(
                                    bookingData.selectedModalities,
                                    modality.id,
                                    3
                                  ),
                                })
                              }
                            >
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-medium mb-1">
                                      {modality.name}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mb-2">
                                      {modality.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                      {modality.tags.map((tag) => (
                                        <Badge
                                          key={tag}
                                          variant="secondary"
                                          className="text-xs"
                                        >
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                  {bookingData.selectedModalities.includes(
                                    modality.id
                                  ) && (
                                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: Concerns & Preferences */}
                      <div className="space-y-6">
                        {/* Core Concerns */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">
                            What would you like to work on?
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Select up to 5 areas you'd like to focus on
                          </p>

                          <div className="grid grid-cols-2 gap-2">
                            {concerns.map((concern) => (
                              <Button
                                key={concern.id}
                                variant={
                                  bookingData.selectedConcerns.includes(
                                    concern.id
                                  )
                                    ? 'default'
                                    : 'outline'
                                }
                                size="sm"
                                className="h-auto p-3 text-left justify-start"
                                onClick={() =>
                                  updateBookingData({
                                    selectedConcerns: toggleSelection(
                                      bookingData.selectedConcerns,
                                      concern.id,
                                      5
                                    ),
                                  })
                                }
                              >
                                <span className="text-sm">{concern.name}</span>
                              </Button>
                            ))}
                          </div>
                        </div>

                        {/* Preferences */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">
                            Preferences (Optional)
                          </h3>

                          <div className="space-y-4">
                            {/* Language Preference */}
                            <div className="space-y-2">
                              <Label>Preferred Language</Label>
                              <Select
                                value={bookingData.preferences.language || ''}
                                onValueChange={(value) =>
                                  updateBookingData({
                                    preferences: {
                                      ...bookingData.preferences,
                                      language: value,
                                    },
                                  })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                  {languageOptions.map((language) => (
                                    <SelectItem key={language} value={language}>
                                      {language}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            {/* Gender Preference */}
                            <div className="space-y-2">
                              <Label>Therapist Gender Preference</Label>
                              <RadioGroup
                                value={bookingData.preferences.gender || ''}
                                onValueChange={(value) =>
                                  updateBookingData({
                                    preferences: {
                                      ...bookingData.preferences,
                                      gender: value,
                                    },
                                  })
                                }
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="" id="no-preference" />
                                  <Label htmlFor="no-preference">
                                    No preference
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="female" id="female" />
                                  <Label htmlFor="female">Female</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="male" id="male" />
                                  <Label htmlFor="male">Male</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="non-binary"
                                    id="non-binary"
                                  />
                                  <Label htmlFor="non-binary">Non-binary</Label>
                                </div>
                              </RadioGroup>
                            </div>

                            {/* Approach Style */}
                            <div className="space-y-2">
                              <Label>Therapy Style Preference</Label>
                              <Select
                                value={bookingData.preferences.style || ''}
                                onValueChange={(value) =>
                                  updateBookingData({
                                    preferences: {
                                      ...bookingData.preferences,
                                      style: value,
                                    },
                                  })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select style" />
                                </SelectTrigger>
                                <SelectContent>
                                  {approachStyles.map((style) => (
                                    <SelectItem key={style.id} value={style.id}>
                                      <div>
                                        <div className="font-medium">
                                          {style.name}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          {style.description}
                                        </div>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground text-center">
                        <Info className="h-4 w-4 inline mr-1" />
                        Not sure about your preferences? You can skip these
                        selections and we'll still show suitable therapists.
                      </p>
                    </div>
                  </div>
                )}

              {/* Step 3: Recommended Therapists */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-display font-semibold mb-2">
                        {bookingData.serviceType === 'empathic-listener'
                          ? 'Choose Your Listener'
                          : 'Recommended Therapists'}
                      </h2>
                      <p className="text-muted-foreground">
                        {bookingData.serviceType === 'empathic-listener'
                          ? 'Select an empathic listener to support you'
                          : 'Based on your preferences, here are the best matches'}
                      </p>
                    </div>

                    {bookingData.serviceType === 'professional-therapy' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentStep(2)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit Preferences
                      </Button>
                    )}
                  </div>

                  {/* Filter Summary */}
                  {bookingData.serviceType === 'professional-therapy' &&
                    (bookingData.selectedModalities.length > 0 ||
                      bookingData.selectedConcerns.length > 0 ||
                      Object.keys(bookingData.preferences).length > 0) && (
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm">
                          <span className="font-medium">Filtering by: </span>
                          {bookingData.selectedModalities.length > 0 && (
                            <span>
                              Modalities:{' '}
                              {bookingData.selectedModalities
                                .map(
                                  (m) =>
                                    therapyModalities.find(
                                      (mod) => mod.id === m
                                    )?.name
                                )
                                .join(', ')}{' '}
                              •
                            </span>
                          )}
                          {bookingData.selectedConcerns.length > 0 && (
                            <span>
                              Concerns:{' '}
                              {bookingData.selectedConcerns
                                .map(
                                  (c) =>
                                    concerns.find((con) => con.id === c)?.name
                                )
                                .join(', ')}{' '}
                              •
                            </span>
                          )}
                          {bookingData.preferences.language && (
                            <span>
                              Language: {bookingData.preferences.language} •{' '}
                            </span>
                          )}
                          {bookingData.preferences.gender && (
                            <span>
                              Gender: {bookingData.preferences.gender} •{' '}
                            </span>
                          )}
                          {bookingData.preferences.style && (
                            <span>
                              Style:{' '}
                              {
                                approachStyles.find(
                                  (s) => s.id === bookingData.preferences.style
                                )?.name
                              }
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                  <Tabs
                    value={showAllTherapists ? 'all' : 'recommended'}
                    onValueChange={(value) =>
                      setShowAllTherapists(value === 'all')
                    }
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="recommended">Recommended</TabsTrigger>
                      <TabsTrigger value="all">All Therapists</TabsTrigger>
                    </TabsList>

                    <TabsContent value="recommended" className="mt-6">
                      <div className="space-y-4">
                        {getRecommendedTherapists().map((therapist) => (
                          <TherapistCard
                            key={therapist.id}
                            therapist={therapist}
                            isSelected={
                              bookingData.therapistId === therapist.id
                            }
                            onSelect={() =>
                              updateBookingData({ therapistId: therapist.id })
                            }
                          />
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="all" className="mt-6">
                      <div className="space-y-4">
                        {therapistProfiles.map((therapist) => (
                          <TherapistCard
                            key={therapist.id}
                            therapist={{
                              ...therapist,
                              matchScore: 0,
                              explanation: [],
                            }}
                            isSelected={
                              bookingData.therapistId === therapist.id
                            }
                            onSelect={() =>
                              updateBookingData({ therapistId: therapist.id })
                            }
                          />
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground text-center">
                      <Info className="h-4 w-4 inline mr-1" />
                      You can proceed without selecting a therapist and choose
                      one later in the process.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Session Format */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-semibold mb-2">
                      Session Format
                    </h2>
                    <p className="text-muted-foreground">
                      Choose how you'd like to connect with your{' '}
                      {bookingData.serviceType === 'empathic-listener'
                        ? 'listener'
                        : 'therapist'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card
                      className={`cursor-pointer transition-all duration-200 ${
                        bookingData.sessionFormat === 'video'
                          ? 'ring-2 ring-primary bg-primary/5'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() =>
                        updateBookingData({ sessionFormat: 'video' })
                      }
                    >
                      <CardContent className="p-6 text-center">
                        <Video className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Video Call</h3>
                        <p className="text-sm text-muted-foreground">
                          Face-to-face online session
                        </p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all duration-200 ${
                        bookingData.sessionFormat === 'audio'
                          ? 'ring-2 ring-primary bg-primary/5'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() =>
                        updateBookingData({ sessionFormat: 'audio' })
                      }
                    >
                      <CardContent className="p-6 text-center">
                        <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Audio Call</h3>
                        <p className="text-sm text-muted-foreground">
                          Voice-only session
                        </p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all duration-200 ${
                        bookingData.sessionFormat === 'in-person'
                          ? 'ring-2 ring-primary bg-primary/5'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() =>
                        updateBookingData({ sessionFormat: 'in-person' })
                      }
                    >
                      <CardContent className="p-6 text-center">
                        <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">In-Person</h3>
                        <p className="text-sm text-muted-foreground">
                          Meet at our office
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Step 5: Date & Time */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-semibold mb-2">
                      Select Date & Time
                    </h2>
                    <p className="text-muted-foreground">
                      Choose your preferred appointment slot
                      {selectedTherapist && ` with ${selectedTherapist.name}`}
                    </p>
                  </div>

                  {selectedTherapist && (
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage
                              src={selectedTherapist.avatar}
                              alt={selectedTherapist.name}
                            />
                            <AvatarFallback>
                              {selectedTherapist.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">
                              {selectedTherapist.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {selectedTherapist.title}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentStep(3)}
                            className="ml-auto"
                          >
                            Change
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Select Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={bookingData.date}
                        onChange={(e) =>
                          updateBookingData({ date: e.target.value })
                        }
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Available Times</Label>
                      <Select
                        value={bookingData.time}
                        onValueChange={(value) =>
                          updateBookingData({ time: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {getAvailableTimeSlots().map((time) => (
                            <SelectItem key={time} value={time}>
                              {new Date(
                                `2000-01-01T${time}`
                              ).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true,
                              })}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {bookingData.date && bookingData.time && (
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-medium">
                            Appointment scheduled for{' '}
                            {new Date(bookingData.date).toLocaleDateString()} at{' '}
                            {new Date(
                              `2000-01-01T${bookingData.time}`
                            ).toLocaleTimeString('en-US', {
                              hour: 'numeric',
                              minute: '2-digit',
                              hour12: true,
                            })}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {/* Step 6: Personal Information */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-semibold mb-2">
                      Personal Information
                    </h2>
                    <p className="text-muted-foreground">
                      Help us provide you with personalized care
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={bookingData.personalInfo.firstName}
                        onChange={(e) =>
                          updatePersonalInfo('firstName', e.target.value)
                        }
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={bookingData.personalInfo.lastName}
                        onChange={(e) =>
                          updatePersonalInfo('lastName', e.target.value)
                        }
                        placeholder="Enter your last name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingData.personalInfo.email}
                        onChange={(e) =>
                          updatePersonalInfo('email', e.target.value)
                        }
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={bookingData.personalInfo.phone}
                        onChange={(e) =>
                          updatePersonalInfo('phone', e.target.value)
                        }
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sessionReason">
                      What brings you here today? (Optional)
                    </Label>
                    <Textarea
                      id="sessionReason"
                      placeholder="Share what you'd like to work on..."
                      value={bookingData.personalInfo.sessionReason}
                      onChange={(e) =>
                        updatePersonalInfo('sessionReason', e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">
                      Emergency Contact (Optional)
                    </Label>
                    <Input
                      id="emergencyContact"
                      value={bookingData.personalInfo.emergencyContact}
                      onChange={(e) =>
                        updatePersonalInfo('emergencyContact', e.target.value)
                      }
                      placeholder="Name and phone number"
                    />
                  </div>
                </div>
              )}

              {/* Step 7: Payment */}
              {currentStep === 7 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-semibold mb-2">
                      Payment Information
                    </h2>
                    <p className="text-muted-foreground">
                      Secure payment processing for your session
                    </p>
                  </div>

                  <Card className="bg-accent-lighter border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Booking Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span className="font-medium">
                            {bookingData.serviceType === 'empathic-listener'
                              ? 'Empathic Listener'
                              : 'Professional Therapy'}
                          </span>
                        </div>
                        {selectedTherapist && (
                          <div className="flex justify-between">
                            <span>Therapist:</span>
                            <span className="font-medium">
                              {selectedTherapist.name}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Date & Time:</span>
                          <span className="font-medium">
                            {bookingData.date &&
                              new Date(
                                bookingData.date
                              ).toLocaleDateString()}{' '}
                            at{' '}
                            {bookingData.time &&
                              new Date(
                                `2000-01-01T${bookingData.time}`
                              ).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true,
                              })}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Session Format:</span>
                          <span className="font-medium capitalize">
                            {bookingData.sessionFormat}
                          </span>
                        </div>
                        <div className="flex justify-between border-t pt-2 font-semibold">
                          <span>Total:</span>
                          <span>
                            ₹
                            {bookingData.serviceType === 'empathic-listener'
                              ? '349'
                              : '669'}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <Label>Payment Method</Label>
                    <RadioGroup
                      value={bookingData.paymentMethod}
                      onValueChange={(value) =>
                        updateBookingData({ paymentMethod: value })
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi">UPI</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking">Net Banking</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      🔒 Your payment information is encrypted and secure. You
                      will not be charged until your appointment is confirmed.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={bookingData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        updateBookingData({ agreeToTerms: !!checked })
                      }
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </div>
              )}

              {/* Step 8: Confirmation */}
              {currentStep === 8 && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-semibold mb-2">
                      Booking Confirmed!
                    </h2>
                    <p className="text-muted-foreground">
                      Your session has been successfully scheduled. You'll
                      receive a confirmation email shortly.
                    </p>
                  </div>

                  <Card className="max-w-md mx-auto">
                    <CardHeader>
                      <CardTitle className="text-lg">Session Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-left">
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span className="font-medium">
                            {bookingData.serviceType === 'empathic-listener'
                              ? 'Empathic Listener'
                              : 'Professional Therapy'}
                          </span>
                        </div>
                        {selectedTherapist && (
                          <div className="flex justify-between">
                            <span>Therapist:</span>
                            <span className="font-medium">
                              {selectedTherapist.name}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Date & Time:</span>
                          <span className="font-medium">
                            {bookingData.date &&
                              new Date(
                                bookingData.date
                              ).toLocaleDateString()}{' '}
                            at{' '}
                            {bookingData.time &&
                              new Date(
                                `2000-01-01T${bookingData.time}`
                              ).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true,
                              })}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Session ID:</span>
                          <span className="font-medium">
                            #BS{Date.now().toString().slice(-6)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/dashboard">
                      <Button variant="default">Go to Dashboard</Button>
                    </Link>
                    <Link to="/therapists">
                      <Button variant="outline">Book Another Session</Button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 8 && (
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
                    disabled={
                      (currentStep === 1 && !bookingData.serviceType) ||
                      (currentStep === 7 && !bookingData.agreeToTerms)
                    }
                  >
                    {currentStep === 7 ? 'Complete Booking' : 'Continue'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default BookingFlow
