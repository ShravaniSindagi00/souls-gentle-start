// Mock data for booking flow

export interface TherapyModality {
  id: string
  name: string
  description: string
  tags: string[]
}

export interface Concern {
  id: string
  name: string
  description: string
}

export interface TherapistProfile {
  id: string
  name: string
  title: string
  avatar: string
  credentials: string
  rating: number
  experienceYears: number
  modalities: string[]
  concerns: string[]
  approachStyle: string
  languages: string[]
  gender: 'male' | 'female' | 'non-binary'
  price: {
    empathicListener: number
    professionalTherapy: number
  }
  availability: {
    [date: string]: string[] // available time slots
  }
  bio: string
}

export interface BookingState {
  serviceType: 'empathic-listener' | 'professional-therapy' | ''
  selectedModalities: string[]
  selectedConcerns: string[]
  preferences: {
    language?: string
    gender?: string
    style?: string
  }
  therapistId?: string
  sessionFormat: 'video' | 'audio' | 'in-person' | ''
  date: string
  time: string
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    sessionReason: string
    emergencyContact: string
  }
  paymentMethod: string
  agreeToTerms: boolean
}

// Therapy modalities
export const therapyModalities: TherapyModality[] = [
  {
    id: 'cbt',
    name: 'Cognitive Behavioral Therapy (CBT)',
    description: 'Focus on changing negative thought patterns and behaviors',
    tags: ['structured', 'evidence-based', 'short-term'],
  },
  {
    id: 'dbt',
    name: 'Dialectical Behavior Therapy (DBT)',
    description:
      'Skills-based approach for emotional regulation and relationships',
    tags: ['skills-based', 'mindfulness', 'emotion-regulation'],
  },
  {
    id: 'psychodynamic',
    name: 'Psychodynamic Therapy',
    description: 'Explore unconscious thoughts and past experiences',
    tags: ['insight-oriented', 'long-term', 'depth'],
  },
  {
    id: 'mindfulness',
    name: 'Mindfulness-Based Therapy',
    description: 'Incorporate meditation and present-moment awareness',
    tags: ['mindfulness', 'stress-reduction', 'holistic'],
  },
  {
    id: 'solution-focused',
    name: 'Solution-Focused Therapy',
    description:
      'Goal-oriented approach focusing on solutions rather than problems',
    tags: ['brief', 'goal-oriented', 'strengths-based'],
  },
  {
    id: 'trauma-focused',
    name: 'Trauma-Focused Therapy',
    description: 'Specialized treatment for trauma and PTSD',
    tags: ['trauma-informed', 'specialized', 'healing'],
  },
  {
    id: 'couples',
    name: 'Couples Therapy',
    description: 'Relationship counseling for couples and partners',
    tags: ['relationships', 'communication', 'couples'],
  },
  {
    id: 'supportive',
    name: 'Supportive Therapy',
    description: 'Emotional support and guidance through difficult times',
    tags: ['supportive', 'empathetic', 'nurturing'],
  },
]

// Core concerns
export const concerns: Concern[] = [
  {
    id: 'anxiety',
    name: 'Anxiety',
    description: 'Persistent worry, fear, or nervousness',
  },
  {
    id: 'depression',
    name: 'Depression',
    description: 'Persistent sadness or loss of interest',
  },
  {
    id: 'stress',
    name: 'Stress Management',
    description: 'Work, life, or situational stress',
  },
  {
    id: 'relationships',
    name: 'Relationship Issues',
    description: 'Dating, marriage, or family relationship challenges',
  },
  {
    id: 'career',
    name: 'Career & Work',
    description: 'Professional challenges and career transitions',
  },
  {
    id: 'grief',
    name: 'Grief & Loss',
    description: 'Coping with loss or major life changes',
  },
  {
    id: 'addiction',
    name: 'Addiction & Recovery',
    description: 'Substance abuse or behavioral addictions',
  },
  {
    id: 'self-esteem',
    name: 'Self-Esteem',
    description: 'Building confidence and self-worth',
  },
  {
    id: 'trauma',
    name: 'Trauma & PTSD',
    description: 'Processing traumatic experiences',
  },
  {
    id: 'life-transitions',
    name: 'Life Transitions',
    description: 'Major life changes and adjustments',
  },
]

// Mock therapist profiles
export const therapistProfiles: TherapistProfile[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    title: 'Licensed Clinical Psychologist',
    avatar: '/placeholder.svg',
    credentials: 'PhD, LMFT',
    rating: 4.9,
    experienceYears: 12,
    modalities: ['cbt', 'dbt', 'mindfulness'],
    concerns: ['anxiety', 'depression', 'stress', 'trauma'],
    approachStyle: 'warm',
    languages: ['English', 'Spanish'],
    gender: 'female',
    price: {
      empathicListener: 349,
      professionalTherapy: 669,
    },
    availability: {
      '2025-09-01': ['09:00', '10:00', '14:00', '15:00'],
      '2025-09-02': ['11:00', '16:00'],
      '2025-09-03': ['09:00', '14:00', '15:00', '16:00'],
    },
    bio: 'Specializing in anxiety and trauma with over 12 years of experience helping clients find healing and growth.',
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    title: 'Licensed Therapist',
    avatar: '/placeholder.svg',
    credentials: 'LCSW, MSW',
    rating: 4.8,
    experienceYears: 8,
    modalities: ['cbt', 'solution-focused', 'supportive'],
    concerns: ['depression', 'career', 'relationships', 'self-esteem'],
    approachStyle: 'directive',
    languages: ['English', 'Mandarin'],
    gender: 'male',
    price: {
      empathicListener: 349,
      professionalTherapy: 669,
    },
    availability: {
      '2025-09-01': ['10:00', '11:00', '15:00'],
      '2025-09-02': ['09:00', '14:00', '16:00'],
      '2025-09-03': ['10:00', '11:00', '15:00'],
    },
    bio: 'Focused on helping professionals navigate career challenges and build stronger relationships.',
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    title: 'Clinical Social Worker',
    avatar: '/placeholder.svg',
    credentials: 'LCSW, MA',
    rating: 4.9,
    experienceYears: 10,
    modalities: ['psychodynamic', 'trauma-focused', 'mindfulness'],
    concerns: ['trauma', 'grief', 'anxiety', 'life-transitions'],
    approachStyle: 'insightful',
    languages: ['English', 'Spanish', 'French'],
    gender: 'female',
    price: {
      empathicListener: 349,
      professionalTherapy: 669,
    },
    availability: {
      '2025-09-01': ['09:00', '14:00', '16:00'],
      '2025-09-02': ['10:00', '11:00', '15:00'],
      '2025-09-03': ['09:00', '10:00', '14:00'],
    },
    bio: 'Specializing in trauma recovery and helping clients navigate major life transitions with compassion.',
  },
  {
    id: '4',
    name: 'Dr. James Thompson',
    title: 'Licensed Marriage & Family Therapist',
    avatar: '/placeholder.svg',
    credentials: 'LMFT, PhD',
    rating: 4.7,
    experienceYears: 15,
    modalities: ['couples', 'solution-focused', 'supportive'],
    concerns: ['relationships', 'marriage', 'family', 'communication'],
    approachStyle: 'structured',
    languages: ['English'],
    gender: 'male',
    price: {
      empathicListener: 349,
      professionalTherapy: 669,
    },
    availability: {
      '2025-09-01': ['11:00', '15:00', '16:00'],
      '2025-09-02': ['09:00', '10:00', '14:00'],
      '2025-09-03': ['11:00', '16:00'],
    },
    bio: 'Dedicated to helping couples and families build stronger, healthier relationships through evidence-based approaches.',
  },
  {
    id: '5',
    name: 'Dr. Priya Patel',
    title: 'Licensed Clinical Psychologist',
    avatar: '/placeholder.svg',
    credentials: 'PsyD, LMHC',
    rating: 4.8,
    experienceYears: 9,
    modalities: ['cbt', 'dbt', 'mindfulness', 'trauma-focused'],
    concerns: ['anxiety', 'depression', 'trauma', 'stress', 'self-esteem'],
    approachStyle: 'warm',
    languages: ['English', 'Hindi', 'Gujarati'],
    gender: 'female',
    price: {
      empathicListener: 349,
      professionalTherapy: 669,
    },
    availability: {
      '2025-09-01': ['10:00', '11:00', '14:00'],
      '2025-09-02': ['09:00', '15:00', '16:00'],
      '2025-09-03': ['10:00', '14:00', '15:00'],
    },
    bio: 'Combining evidence-based therapies with cultural sensitivity to support clients from diverse backgrounds.',
  },
  {
    id: '6',
    name: 'Dr. Alex Kim',
    title: 'Licensed Professional Counselor',
    avatar: '/placeholder.svg',
    credentials: 'LPC, MA',
    rating: 4.6,
    experienceYears: 6,
    modalities: ['solution-focused', 'supportive', 'mindfulness'],
    concerns: ['career', 'stress', 'life-transitions', 'self-esteem'],
    approachStyle: 'supportive',
    languages: ['English', 'Korean'],
    gender: 'non-binary',
    price: {
      empathicListener: 349,
      professionalTherapy: 669,
    },
    availability: {
      '2025-09-01': ['09:00', '15:00'],
      '2025-09-02': ['11:00', '14:00', '16:00'],
      '2025-09-03': ['09:00', '11:00', '16:00'],
    },
    bio: 'Supporting young professionals and individuals navigating career transitions and personal growth.',
  },
]

// Matching weights for therapist recommendations
export const matchingWeights = {
  modalityMatch: 0.4,
  concernOverlap: 0.35,
  preferenceFilters: 0.15,
  baseline: 0.1,
}

// Helper function to calculate match score
export const calculateMatchScore = (
  therapist: TherapistProfile,
  selections: {
    modalities: string[]
    concerns: string[]
    preferences: {
      language?: string
      gender?: string
      style?: string
    }
    serviceType: string
  }
): { score: number; explanation: string[] } => {
  let totalScore = 0
  const explanations: string[] = []

  // Modality matching (only for professional therapy)
  if (
    selections.serviceType === 'professional-therapy' &&
    selections.modalities.length > 0
  ) {
    const modalityOverlap = selections.modalities.filter((m) =>
      therapist.modalities.includes(m)
    ).length
    const modalityScore =
      (modalityOverlap / selections.modalities.length) *
      matchingWeights.modalityMatch
    totalScore += modalityScore

    if (modalityOverlap > 0) {
      const matchedModalities = selections.modalities.filter((m) =>
        therapist.modalities.includes(m)
      )
      explanations.push(
        `Specializes in ${matchedModalities
          .map((m) => therapyModalities.find((mod) => mod.id === m)?.name)
          .join(', ')}`
      )
    }
  }

  // Concern matching
  if (selections.concerns.length > 0) {
    const concernOverlap = selections.concerns.filter((c) =>
      therapist.concerns.includes(c)
    ).length
    const concernScore =
      (concernOverlap / selections.concerns.length) *
      matchingWeights.concernOverlap
    totalScore += concernScore

    if (concernOverlap > 0) {
      const matchedConcerns = selections.concerns.filter((c) =>
        therapist.concerns.includes(c)
      )
      explanations.push(
        `Experienced with ${matchedConcerns
          .map((c) => concerns.find((con) => con.id === c)?.name)
          .join(', ')}`
      )
    }
  }

  // Preference matching
  let preferenceMatches = 0
  let totalPreferences = 0

  if (selections.preferences.language) {
    totalPreferences++
    if (therapist.languages.includes(selections.preferences.language)) {
      preferenceMatches++
      explanations.push(`Speaks ${selections.preferences.language}`)
    }
  }

  if (selections.preferences.gender) {
    totalPreferences++
    if (therapist.gender === selections.preferences.gender) {
      preferenceMatches++
    }
  }

  if (selections.preferences.style) {
    totalPreferences++
    if (therapist.approachStyle === selections.preferences.style) {
      preferenceMatches++
      explanations.push(`${selections.preferences.style} approach`)
    }
  }

  if (totalPreferences > 0) {
    const preferenceScore =
      (preferenceMatches / totalPreferences) * matchingWeights.preferenceFilters
    totalScore += preferenceScore
  }

  // Baseline score (rating and experience)
  const normalizedRating = therapist.rating / 5
  const normalizedExperience = Math.min(therapist.experienceYears / 15, 1)
  const baselineScore =
    ((normalizedRating + normalizedExperience) / 2) * matchingWeights.baseline
  totalScore += baselineScore

  // Convert to percentage and round
  const finalScore = Math.round(totalScore * 100)

  return {
    score: finalScore,
    explanation: explanations,
  }
}

// Language options
export const languageOptions = [
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Hindi',
  'Mandarin',
  'Korean',
  'Japanese',
  'Arabic',
  'Gujarati',
]

// Approach styles
export const approachStyles = [
  {
    id: 'warm',
    name: 'Warm & Supportive',
    description: 'Empathetic and nurturing approach',
  },
  {
    id: 'directive',
    name: 'Direct & Goal-Oriented',
    description: 'Structured and focused on solutions',
  },
  {
    id: 'insightful',
    name: 'Insight-Oriented',
    description: 'Explores deeper patterns and understanding',
  },
  {
    id: 'structured',
    name: 'Structured & Systematic',
    description: 'Organized and methodical approach',
  },
  {
    id: 'supportive',
    name: 'Gentle & Encouraging',
    description: 'Patient and encouraging guidance',
  },
]
