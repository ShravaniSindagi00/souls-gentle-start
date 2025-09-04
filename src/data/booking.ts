// Types and interfaces for booking system
export interface TherapistProfile {
  id: string
  name: string
  title: string
  specializations: string[]
  languages: string[]
  approaches: string[]
  experience: string
  rate: number
  image: string
  bio: string
  availability: Record<string, string[]>
  rating: number
  reviewCount: number
  location: string
  sessionFormats: string[]
}

export interface BookingState {
  serviceType: string
  selectedModalities: string[]
  selectedConcerns: string[]
  preferences: Record<string, any>
  therapistId?: string
  sessionFormat: string
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

// Therapy modalities data
export const therapyModalities = [
  {
    id: 'cbt',
    name: 'Cognitive Behavioral Therapy (CBT)',
    description:
      'Focuses on identifying and changing negative thought patterns and behaviors',
    benefits: [
      'Evidence-based approach',
      'Goal-oriented',
      'Effective for anxiety and depression',
    ],
  },
  {
    id: 'dbt',
    name: 'Dialectical Behavior Therapy (DBT)',
    description:
      'Teaches skills to manage emotions, handle stress, and improve relationships',
    benefits: [
      'Emotional regulation',
      'Distress tolerance',
      'Interpersonal effectiveness',
    ],
  },
  {
    id: 'psychodynamic',
    name: 'Psychodynamic Therapy',
    description:
      'Explores unconscious thoughts and how past experiences shape current behavior',
    benefits: [
      'Deep self-understanding',
      'Long-term healing',
      'Insight-oriented',
    ],
  },
  {
    id: 'humanistic',
    name: 'Humanistic Therapy',
    description:
      'Emphasizes personal growth, self-acceptance, and reaching your full potential',
    benefits: ['Person-centered', 'Strengths-based', 'Holistic approach'],
  },
  {
    id: 'mindfulness',
    name: 'Mindfulness-Based Therapy',
    description:
      'Incorporates meditation and mindfulness practices to reduce stress and increase awareness',
    benefits: [
      'Stress reduction',
      'Present-moment awareness',
      'Emotional balance',
    ],
  },
  {
    id: 'emdr',
    name: 'EMDR Therapy',
    description:
      'Uses bilateral stimulation to help process traumatic memories and experiences',
    benefits: ['Trauma processing', 'Memory reprocessing', 'Symptom reduction'],
  },
]

// Mental health concerns
export const concerns = [
  {
    id: 'anxiety',
    name: 'Anxiety',
    description:
      'Excessive worry, fear, or nervousness that interferes with daily activities',
    commonSymptoms: [
      'Racing thoughts',
      'Physical tension',
      'Avoidance behaviors',
    ],
  },
  {
    id: 'depression',
    name: 'Depression',
    description:
      'Persistent feelings of sadness, hopelessness, or loss of interest in activities',
    commonSymptoms: [
      'Low mood',
      'Fatigue',
      'Sleep changes',
      'Appetite changes',
    ],
  },
  {
    id: 'trauma',
    name: 'Trauma & PTSD',
    description:
      'Difficulty processing or recovering from traumatic experiences',
    commonSymptoms: [
      'Flashbacks',
      'Nightmares',
      'Hypervigilance',
      'Emotional numbing',
    ],
  },
  {
    id: 'relationships',
    name: 'Relationship Issues',
    description:
      'Challenges in romantic, family, or interpersonal relationships',
    commonSymptoms: [
      'Communication problems',
      'Trust issues',
      'Conflict resolution',
    ],
  },
  {
    id: 'stress',
    name: 'Stress Management',
    description:
      'Overwhelming feelings due to work, life changes, or daily pressures',
    commonSymptoms: ['Feeling overwhelmed', 'Physical tension', 'Irritability'],
  },
  {
    id: 'grief',
    name: 'Grief & Loss',
    description:
      'Processing the death of a loved one or other significant losses',
    commonSymptoms: ['Sadness', 'Anger', 'Numbness', 'Yearning'],
  },
  {
    id: 'self-esteem',
    name: 'Self-Esteem Issues',
    description:
      'Negative self-perception, low confidence, or self-worth concerns',
    commonSymptoms: ['Self-criticism', 'Perfectionism', 'Social comparison'],
  },
  {
    id: 'life-transitions',
    name: 'Life Transitions',
    description:
      'Navigating major life changes like career shifts, moves, or life milestones',
    commonSymptoms: ['Uncertainty', 'Identity confusion', 'Decision paralysis'],
  },
]

// Language options
export const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'zh', name: 'Chinese (Mandarin)' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
]

// Therapeutic approach styles
export const approachStyles = [
  {
    id: 'directive',
    name: 'Directive',
    description: 'Therapist provides more guidance and structure',
  },
  {
    id: 'collaborative',
    name: 'Collaborative',
    description: 'Equal partnership between therapist and client',
  },
  {
    id: 'non-directive',
    name: 'Non-Directive',
    description: 'Client leads the session with minimal therapist guidance',
  },
]

// Sample therapist profiles
export const therapistProfiles: TherapistProfile[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    title: 'Licensed Clinical Psychologist',
    specializations: ['anxiety', 'depression', 'trauma'],
    languages: ['en', 'es'],
    approaches: ['cbt', 'emdr', 'mindfulness'],
    experience: '12 years',
    rate: 150,
    image: '/placeholder.svg',
    bio: 'Dr. Johnson specializes in anxiety disorders and trauma recovery using evidence-based approaches. She has extensive experience helping clients overcome PTSD and develop healthy coping strategies.',
    availability: {
      '2025-09-05': ['09:00', '10:00', '14:00', '15:00'],
      '2025-09-06': ['09:00', '11:00', '14:00', '16:00'],
      '2025-09-07': ['10:00', '11:00', '15:00', '16:00'],
    },
    rating: 4.9,
    reviewCount: 127,
    location: 'New York, NY',
    sessionFormats: ['In-person', 'Video call', 'Phone call'],
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    title: 'Licensed Marriage & Family Therapist',
    specializations: ['relationships', 'stress', 'life-transitions'],
    languages: ['en', 'zh'],
    approaches: ['psychodynamic', 'humanistic', 'mindfulness'],
    experience: '8 years',
    rate: 130,
    image: '/placeholder.svg',
    bio: 'Dr. Chen focuses on relationship dynamics and life transitions. He helps individuals and couples navigate communication challenges and build stronger connections.',
    availability: {
      '2025-09-05': ['10:00', '11:00', '15:00', '16:00'],
      '2025-09-06': ['09:00', '10:00', '14:00', '15:00'],
      '2025-09-07': ['09:00', '14:00', '15:00', '16:00'],
    },
    rating: 4.8,
    reviewCount: 89,
    location: 'San Francisco, CA',
    sessionFormats: ['In-person', 'Video call'],
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    title: 'Licensed Clinical Social Worker',
    specializations: ['depression', 'self-esteem', 'grief'],
    languages: ['en', 'es'],
    approaches: ['cbt', 'dbt', 'humanistic'],
    experience: '10 years',
    rate: 140,
    image: '/placeholder.svg',
    bio: 'Dr. Rodriguez specializes in depression and self-esteem issues. She provides a warm, supportive environment where clients can explore their feelings and develop resilience.',
    availability: {
      '2025-09-05': ['09:00', '11:00', '14:00', '16:00'],
      '2025-09-06': ['10:00', '11:00', '15:00', '16:00'],
      '2025-09-07': ['09:00', '10:00', '14:00', '15:00'],
    },
    rating: 4.9,
    reviewCount: 156,
    location: 'Los Angeles, CA',
    sessionFormats: ['In-person', 'Video call', 'Phone call'],
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    title: 'Licensed Professional Counselor',
    specializations: ['anxiety', 'stress', 'trauma'],
    languages: ['en'],
    approaches: ['cbt', 'mindfulness', 'emdr'],
    experience: '15 years',
    rate: 160,
    image: '/placeholder.svg',
    bio: 'Dr. Wilson has extensive experience treating anxiety and stress-related disorders. He uses a combination of cognitive-behavioral techniques and mindfulness practices.',
    availability: {
      '2025-09-05': ['14:00', '15:00', '16:00'],
      '2025-09-06': ['09:00', '10:00', '11:00', '14:00'],
      '2025-09-07': ['11:00', '14:00', '15:00', '16:00'],
    },
    rating: 4.7,
    reviewCount: 203,
    location: 'Chicago, IL',
    sessionFormats: ['In-person', 'Video call'],
  },
  {
    id: '5',
    name: 'Dr. Lisa Thompson',
    title: 'Licensed Clinical Psychologist',
    specializations: ['relationships', 'life-transitions', 'self-esteem'],
    languages: ['en', 'fr'],
    approaches: ['psychodynamic', 'humanistic', 'dbt'],
    experience: '11 years',
    rate: 145,
    image: '/placeholder.svg',
    bio: 'Dr. Thompson specializes in helping clients navigate major life changes and improve their relationships. She provides insight-oriented therapy with a focus on personal growth.',
    availability: {
      '2025-09-05': ['09:00', '10:00', '15:00'],
      '2025-09-06': ['11:00', '14:00', '15:00', '16:00'],
      '2025-09-07': ['09:00', '10:00', '11:00', '16:00'],
    },
    rating: 4.8,
    reviewCount: 94,
    location: 'Seattle, WA',
    sessionFormats: ['In-person', 'Video call', 'Phone call'],
  },
]

// Function to calculate match score between client preferences and therapist
export const calculateMatchScore = (
  therapist: TherapistProfile,
  selectedModalities: string[],
  selectedConcerns: string[],
  preferences: Record<string, any>
): { score: number; explanation: string[] } => {
  let score = 0
  const explanation: string[] = []
  const maxScore = 100

  // Specialization match (40% weight)
  const specializationMatches = selectedConcerns.filter((concern) =>
    therapist.specializations.includes(concern)
  )
  if (specializationMatches.length > 0) {
    const specializationScore =
      (specializationMatches.length / selectedConcerns.length) * 40
    score += specializationScore
    explanation.push(
      `Specializes in ${specializationMatches.length} of your selected concerns`
    )
  }

  // Approach match (30% weight)
  const approachMatches = selectedModalities.filter((modality) =>
    therapist.approaches.includes(modality)
  )
  if (approachMatches.length > 0) {
    const approachScore =
      (approachMatches.length / selectedModalities.length) * 30
    score += approachScore
    explanation.push(
      `Uses ${approachMatches.length} of your preferred therapy approaches`
    )
  }

  // Language preference (15% weight)
  if (
    preferences.language &&
    therapist.languages.includes(preferences.language)
  ) {
    score += 15
    explanation.push(`Speaks your preferred language`)
  } else if (!preferences.language || preferences.language === 'en') {
    score += 15 // Default English
  }

  // Session format preference (10% weight)
  if (
    preferences.sessionFormat &&
    therapist.sessionFormats.includes(preferences.sessionFormat)
  ) {
    score += 10
    explanation.push(`Offers your preferred session format`)
  } else {
    score += 5 // Partial credit for flexibility
  }

  // Experience bonus (5% weight)
  const experienceYears = parseInt(therapist.experience)
  if (experienceYears >= 10) {
    score += 5
    explanation.push(`${therapist.experience} of experience`)
  } else if (experienceYears >= 5) {
    score += 3
  }

  return {
    score: Math.min(Math.round(score), maxScore),
    explanation,
  }
}
