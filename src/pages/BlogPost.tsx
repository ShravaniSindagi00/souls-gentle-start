import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Heart,
  CheckCircle,
  Lightbulb,
  Brain,
  Users,
} from 'lucide-react'
import heroImage from '@/assets/hero-image.jpg'
import supportiveInteractions from '@/assets/supportive-interactions.jpg'
import therapistClientSession from '@/assets/therapist-client-session.jpg'
import videoCallTherapy from '@/assets/video-call-therapy.jpg'
import aboutHeroWoman from '@/assets/about-hero-woman.jpg'
import professionalWomanOffice from '@/assets/professional-woman-office.jpg'

const BlogPost = () => {
  const { slug } = useParams()

  const blogPosts = {
    'understanding-anxiety-breaking-free-fear': {
      title: 'Understanding Anxiety: Breaking Free from the Grip of Fear',
      summary:
        'Learn effective techniques to manage anxiety and regain control over your thoughts and emotions.',
      image: heroImage,
      category: 'ANXIETY',
      date: 'NOVEMBER 19, 2024',
      author: 'Dr. Sarah Johnson',
      readTime: '8 min read',
      content: {
        introduction:
          "Anxiety is one of the most common mental health challenges, affecting millions of people worldwide. While it's normal to feel anxious occasionally, persistent anxiety can significantly impact your daily life, relationships, and overall well-being.",
        sections: [
          {
            heading: 'What is Anxiety?',
            content:
              "Anxiety is your body's natural response to stress or perceived threats. It's characterized by feelings of worry, nervousness, or fear about future events or situations. While some anxiety can be helpful—motivating you to prepare for important events—excessive anxiety can become overwhelming and debilitating.",
            tips: [
              'Recognize that anxiety is a normal human emotion',
              'Understand the difference between normal worry and anxiety disorders',
              'Learn to identify your personal anxiety triggers',
            ],
          },
          {
            heading: 'Common Symptoms of Anxiety',
            content:
              'Anxiety manifests differently for everyone, but common symptoms include physical sensations like rapid heartbeat, sweating, and trembling, as well as mental symptoms like racing thoughts and difficulty concentrating.',
            tips: [
              'Physical symptoms: rapid heartbeat, sweating, trembling, shortness of breath',
              'Mental symptoms: racing thoughts, difficulty concentrating, excessive worry',
              'Behavioral symptoms: avoidance, restlessness, difficulty sleeping',
            ],
          },
          {
            heading: 'Effective Coping Strategies',
            content:
              'There are numerous evidence-based techniques that can help you manage anxiety effectively. These strategies range from breathing exercises to cognitive behavioral techniques.',
            tips: [
              'Practice deep breathing exercises (4-7-8 technique)',
              'Use progressive muscle relaxation',
              'Challenge negative thought patterns',
              'Engage in regular physical exercise',
              'Maintain a consistent sleep schedule',
              'Limit caffeine and alcohol consumption',
            ],
          },
          {
            heading: 'When to Seek Professional Help',
            content:
              "While self-help strategies can be effective, sometimes professional support is necessary. Don't hesitate to reach out to a mental health professional if your anxiety is interfering with your daily life.",
            tips: [
              'Anxiety interferes with work, school, or relationships',
              'You experience panic attacks',
              'You avoid activities due to anxiety',
              'Physical symptoms persist',
              'You have thoughts of self-harm',
            ],
          },
        ],
        conclusion:
          "Remember, overcoming anxiety is a journey, not a destination. Be patient with yourself as you learn and practice these techniques. With time, consistency, and the right support, you can break free from anxiety's grip and reclaim control over your life.",
      },
    },
    'mastering-stress-ultimate-guide-balance': {
      title: 'Mastering Stress: Your Ultimate Guide to Finding Balance',
      summary:
        'Discover practical strategies to reduce stress and create a more balanced, peaceful life.',
      image: supportiveInteractions,
      category: 'STRESS',
      date: 'NOVEMBER 19, 2024',
      author: 'Dr. Michael Chen',
      readTime: '10 min read',
      content: {
        introduction:
          "In today's fast-paced world, stress has become an inevitable part of life. However, chronic stress can take a significant toll on your physical and mental health. Learning to manage stress effectively is crucial for maintaining overall well-being and finding balance in your life.",
        sections: [
          {
            heading: 'Understanding Stress and Its Impact',
            content:
              "Stress is your body's response to any demand or challenge. While short-term stress can be motivating, chronic stress can lead to serious health problems including anxiety, depression, heart disease, and weakened immune function.",
            tips: [
              'Recognize the difference between acute and chronic stress',
              'Understand how stress affects your body and mind',
              'Identify your personal stress triggers and patterns',
            ],
          },
          {
            heading: 'Time Management Strategies',
            content:
              'Poor time management is a major source of stress. By organizing your time effectively, you can reduce feelings of overwhelm and create more space for relaxation and self-care.',
            tips: [
              'Use the Eisenhower Matrix to prioritize tasks',
              'Break large projects into smaller, manageable steps',
              "Learn to say 'no' to non-essential commitments",
              'Schedule regular breaks throughout your day',
              'Use time-blocking techniques for better focus',
            ],
          },
          {
            heading: 'Mindfulness and Relaxation Techniques',
            content:
              'Mindfulness practices can significantly reduce stress by helping you stay present and avoid getting caught up in worrying about the future or dwelling on the past.',
            tips: [
              'Practice daily meditation (even 5-10 minutes helps)',
              'Try mindful breathing exercises',
              'Use progressive muscle relaxation',
              'Engage in mindful walking or eating',
              'Practice gratitude journaling',
            ],
          },
          {
            heading: 'Lifestyle Changes for Stress Reduction',
            content:
              'Simple lifestyle modifications can have a profound impact on your stress levels and overall quality of life.',
            tips: [
              'Maintain a regular exercise routine',
              'Ensure adequate sleep (7-9 hours per night)',
              'Eat a balanced, nutritious diet',
              'Limit caffeine and alcohol consumption',
              'Stay connected with supportive friends and family',
              'Engage in hobbies and activities you enjoy',
            ],
          },
        ],
        conclusion:
          "Managing stress is an ongoing process that requires patience and practice. By implementing these strategies consistently, you can develop resilience and create a more balanced, fulfilling life. Remember, it's okay to seek professional help if stress becomes overwhelming.",
      },
    },
    'unmasking-depression-silent-storm': {
      title: 'Unmasking Depression: The Silent Storm Within',
      summary:
        'Understanding depression and finding hope through proven therapeutic approaches and support.',
      image: therapistClientSession,
      category: 'DEPRESSION',
      date: 'NOVEMBER 19, 2024',
      author: 'Dr. Emily Rodriguez',
      readTime: '12 min read',
      content: {
        introduction:
          "Depression is often called the 'silent storm' because it can be invisible to others while causing tremendous internal turmoil. Understanding depression, its symptoms, and available treatments is the first step toward healing and recovery.",
        sections: [
          {
            heading: 'What is Depression?',
            content:
              "Depression is more than just feeling sad or having a bad day. It's a serious mental health condition that affects how you think, feel, and handle daily activities. Depression can impact anyone, regardless of age, gender, or background.",
            tips: [
              'Depression is a medical condition, not a character flaw',
              'It affects thoughts, feelings, and physical functioning',
              'Depression is treatable with proper support and care',
              'Recovery is possible with the right treatment approach',
            ],
          },
          {
            heading: 'Recognizing the Signs',
            content:
              'Depression symptoms can vary from person to person, but commonly include persistent sadness, loss of interest in activities, changes in appetite or sleep patterns, and feelings of hopelessness.',
            tips: [
              'Persistent sad, anxious, or empty mood',
              'Loss of interest in activities once enjoyed',
              'Significant changes in appetite or weight',
              'Sleep disturbances (insomnia or oversleeping)',
              'Fatigue and decreased energy',
              'Feelings of worthlessness or guilt',
              'Difficulty concentrating or making decisions',
            ],
          },
          {
            heading: 'Treatment Options and Hope',
            content:
              'Depression is highly treatable, and there are many effective approaches available. Treatment often involves a combination of therapy, medication, lifestyle changes, and support from loved ones.',
            tips: [
              'Psychotherapy (talk therapy) is highly effective',
              'Cognitive Behavioral Therapy (CBT) helps change negative thought patterns',
              'Medication can help balance brain chemistry',
              'Lifestyle changes support overall mental health',
              'Support groups provide connection and understanding',
            ],
          },
          {
            heading: 'Supporting Your Recovery',
            content:
              'Recovery from depression is a journey that requires patience, self-compassion, and often professional support. There are many things you can do to support your healing process.',
            tips: [
              'Establish a daily routine and stick to it',
              'Engage in regular physical activity',
              "Maintain social connections, even when it's difficult",
              'Practice self-care and stress management',
              'Set realistic goals and celebrate small victories',
              'Consider joining a support group',
            ],
          },
        ],
        conclusion:
          'Remember, depression is treatable, and recovery is possible. You are not alone in this journey, and seeking help is a sign of strength, not weakness. With proper treatment and support, you can overcome depression and reclaim your life.',
      },
    },
    'building-stronger-communities-workshop': {
      title: 'Building Stronger Communities: Mental Health Awareness Workshop',
      summary:
        'Highlights from our community workshop on breaking stigma and promoting mental wellness.',
      image: videoCallTherapy,
      category: 'COMMUNITY',
      date: 'NOVEMBER 15, 2024',
      author: 'OurSoulss Team',
      readTime: '6 min read',
      content: {
        introduction:
          'Last month, we hosted a groundbreaking Mental Health Awareness Workshop that brought together community leaders, healthcare professionals, and residents to discuss breaking stigma and promoting mental wellness in our communities.',
        sections: [
          {
            heading: 'Workshop Highlights',
            content:
              'The workshop featured interactive sessions, panel discussions, and practical workshops designed to educate participants about mental health and provide them with tools to support their communities.',
            tips: [
              'Over 150 community members participated',
              'Panel of mental health experts shared insights',
              'Interactive workshops on stress management',
              'Resource fair with local mental health organizations',
              'Networking opportunities for ongoing collaboration',
            ],
          },
          {
            heading: 'Breaking Mental Health Stigma',
            content:
              'One of the key focuses of the workshop was addressing the stigma surrounding mental health. Participants learned about the importance of open dialogue and creating safe spaces for mental health conversations.',
            tips: [
              'Language matters: use person-first language',
              'Share stories and experiences to normalize mental health struggles',
              'Educate others about mental health facts vs. myths',
              'Create inclusive environments where people feel safe to seek help',
              'Advocate for mental health resources in your community',
            ],
          },
          {
            heading: 'Community Action Plans',
            content:
              'Participants worked together to develop concrete action plans for promoting mental health awareness and support in their respective communities.',
            tips: [
              'Establish peer support groups',
              'Organize regular mental health awareness events',
              'Partner with local organizations and schools',
              'Create resource directories for mental health services',
              'Implement workplace mental health programs',
            ],
          },
          {
            heading: 'Moving Forward Together',
            content:
              'The workshop concluded with commitments from participants to continue the conversation and implement changes in their communities. Follow-up sessions are planned to track progress and provide ongoing support.',
            tips: [
              'Monthly follow-up meetings scheduled',
              'Online resource sharing platform created',
              'Mentorship program for new community advocates',
              'Quarterly community mental health fairs planned',
              'Collaboration with local government initiatives',
            ],
          },
        ],
        conclusion:
          "Building stronger, more mentally healthy communities requires ongoing effort and collaboration. We're excited to continue working with our community partners to create environments where mental health is prioritized and supported.",
      },
    },
    'healthy-relationships-building-connections': {
      title: 'Healthy Relationships: Building Connections That Heal',
      summary:
        'Explore the connection between relationships and mental health, and learn how to build supportive, nurturing connections with others.',
      image: aboutHeroWoman,
      category: 'RELATIONSHIPS',
      date: 'NOVEMBER 10, 2024',
      author: 'Dr. Lisa Thompson',
      readTime: '9 min read',
      content: {
        introduction:
          'Human beings are inherently social creatures, and our relationships play a crucial role in our mental health and overall well-being. Healthy relationships can be a source of support, joy, and personal growth, while unhealthy relationships can contribute to stress, anxiety, and depression.',
        sections: [
          {
            heading: 'The Mental Health Benefits of Healthy Relationships',
            content:
              "Research consistently shows that people with strong, supportive relationships have better mental health outcomes, including lower rates of depression and anxiety, and greater resilience in facing life's challenges.",
            tips: [
              'Emotional support reduces stress and anxiety',
              'Social connections boost self-esteem and confidence',
              'Healthy relationships provide a sense of belonging',
              'Support networks help during difficult times',
              'Positive relationships encourage personal growth',
            ],
          },
          {
            heading: 'Characteristics of Healthy Relationships',
            content:
              'Healthy relationships are built on mutual respect, trust, and communication. They involve two people who support each other while maintaining their individual identities and autonomy.',
            tips: [
              'Open and honest communication',
              'Mutual respect and trust',
              'Support for individual goals and growth',
              'Healthy boundaries and respect for personal space',
              'Conflict resolution skills',
              'Shared values and compatible life goals',
            ],
          },
          {
            heading: 'Building Better Communication Skills',
            content:
              'Effective communication is the foundation of all healthy relationships. It involves not just speaking clearly, but also listening actively and empathetically.',
            tips: [
              'Practice active listening without interrupting',
              "Use 'I' statements to express feelings",
              'Ask clarifying questions to ensure understanding',
              "Validate the other person's emotions",
              'Choose appropriate times for important conversations',
              "Be willing to apologize when you're wrong",
            ],
          },
          {
            heading: 'Setting Healthy Boundaries',
            content:
              'Boundaries are essential for maintaining healthy relationships. They help protect your mental health while allowing relationships to flourish within appropriate limits.',
            tips: [
              'Identify your personal values and limits',
              'Communicate boundaries clearly and kindly',
              'Be consistent in maintaining your boundaries',
              "Respect others' boundaries",
              'Recognize when boundaries are being violated',
              'Seek support if you struggle with boundary-setting',
            ],
          },
        ],
        conclusion:
          'Building and maintaining healthy relationships is an ongoing process that requires effort, patience, and commitment. By focusing on communication, respect, and mutual support, you can create connections that not only enrich your life but also contribute to your mental health and well-being.',
      },
    },
    'mental-health-workplace-supportive-environments': {
      title: 'Mental Health in the Workplace: Creating Supportive Environments',
      summary:
        'A comprehensive look at workplace mental health, including strategies for employers and employees to create healthier work environments.',
      image: professionalWomanOffice,
      category: 'WORKPLACE',
      date: 'NOVEMBER 5, 2024',
      author: 'Dr. Robert Kumar',
      readTime: '11 min read',
      content: {
        introduction:
          'With most adults spending a significant portion of their lives at work, the workplace environment has a profound impact on mental health. Creating supportive work environments benefits not only employees but also organizations through increased productivity, reduced absenteeism, and improved retention.',
        sections: [
          {
            heading: 'The Impact of Work on Mental Health',
            content:
              'Work-related stress, poor work-life balance, and unsupportive work environments can contribute to mental health issues including anxiety, depression, and burnout. Conversely, positive work environments can promote mental wellness and resilience.',
            tips: [
              'Work stress can trigger or worsen mental health conditions',
              'Poor work-life balance affects overall well-being',
              'Workplace relationships impact mental health',
              'Job insecurity and unrealistic demands increase stress',
              'Positive work cultures promote mental wellness',
            ],
          },
          {
            heading: 'Creating a Mentally Healthy Workplace Culture',
            content:
              'Organizations play a crucial role in promoting mental health by creating cultures that prioritize employee well-being, reduce stigma, and provide appropriate support and resources.',
            tips: [
              'Promote open communication about mental health',
              'Provide mental health resources and support',
              'Train managers to recognize signs of mental health struggles',
              'Implement flexible work arrangements when possible',
              'Create policies that support work-life balance',
              'Address workplace bullying and harassment',
            ],
          },
          {
            heading: 'Strategies for Employees',
            content:
              'While organizations have a responsibility to create supportive environments, employees can also take steps to protect and promote their own mental health at work.',
            tips: [
              'Set boundaries between work and personal life',
              'Take regular breaks throughout the day',
              'Use available mental health resources',
              'Practice stress management techniques',
              'Build positive relationships with colleagues',
              'Communicate with supervisors about workload concerns',
              'Seek help when needed',
            ],
          },
          {
            heading: 'Supporting Colleagues',
            content:
              'Creating a mentally healthy workplace is a collective effort. Colleagues can support each other by being understanding, offering help when appropriate, and creating inclusive environments.',
            tips: [
              'Be aware of signs that a colleague may be struggling',
              'Offer support without being intrusive',
              'Include colleagues in team activities',
              'Be understanding of different working styles and needs',
              'Speak up against discrimination or bullying',
              'Know how to refer colleagues to appropriate resources',
            ],
          },
        ],
        conclusion:
          'Creating mentally healthy workplaces requires commitment from all levels of an organization. By working together to promote mental wellness, reduce stigma, and provide support, we can create work environments where everyone can thrive both professionally and personally.',
      },
    },
  }

  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 mb-4"
              >
                {post.category}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl">
              {post.summary}
            </p>

            <div className="flex items-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-hero"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="text-lg text-muted-foreground leading-relaxed mb-8 p-6 bg-muted/30 rounded-lg border-l-4 border-primary">
                  {post.content.introduction}
                </div>

                {/* Sections */}
                {post.content.sections.map((section, index) => (
                  <div key={index} className="mb-12">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                        {index === 0 && (
                          <Brain className="h-4 w-4 text-accent-foreground" />
                        )}
                        {index === 1 && (
                          <CheckCircle className="h-4 w-4 text-accent-foreground" />
                        )}
                        {index === 2 && (
                          <Lightbulb className="h-4 w-4 text-accent-foreground" />
                        )}
                        {index === 3 && (
                          <Heart className="h-4 w-4 text-accent-foreground" />
                        )}
                      </div>
                      {section.heading}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {section.content}
                    </p>

                    <Card className="shadow-soft border-0 bg-gradient-card">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-wellness" />
                          Key Points:
                        </h4>
                        <ul className="space-y-2">
                          {section.tips.map((tip, tipIndex) => (
                            <li
                              key={tipIndex}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-wellness rounded-full mt-2 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}

                {/* Conclusion */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Final Thoughts
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.content.conclusion}
                  </p>
                </div>

                {/* Share Section */}
                <div className="border-t border-border pt-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share this article
                  </h4>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Author Info */}
                <Card className="shadow-soft border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {post.author}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Mental Health Professional & Writer
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="shadow-soft border-0">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">
                      Need Support?
                    </h4>
                    <div className="space-y-3">
                      <Link to="/therapists">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                        >
                          <Users className="h-4 w-4 mr-2" />
                          Find a Therapist
                        </Button>
                      </Link>
                      <Link to="/ai-therapy">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                        >
                          <Brain className="h-4 w-4 mr-2" />
                          AI Support Chat
                        </Button>
                      </Link>
                      <Link to="/book">
                        <Button variant="default" size="sm" className="w-full">
                          Book Appointment
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Topics */}
                <Card className="shadow-soft border-0">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">
                      Related Topics
                    </h4>
                    <div className="space-y-2">
                      <Badge variant="outline" className="mr-2 mb-2">
                        Mental Health
                      </Badge>
                      <Badge variant="outline" className="mr-2 mb-2">
                        Therapy
                      </Badge>
                      <Badge variant="outline" className="mr-2 mb-2">
                        Wellness
                      </Badge>
                      <Badge variant="outline" className="mr-2 mb-2">
                        Self-Care
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
