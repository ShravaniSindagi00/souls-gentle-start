import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import heroImage from '@/assets/hero-image.jpg'
import supportiveInteractions from '@/assets/supportive-interactions.jpg'
import therapistClientSession from '@/assets/therapist-client-session.jpg'
import videoCallTherapy from '@/assets/video-call-therapy.jpg'
import aboutHeroWoman from '@/assets/about-hero-woman.jpg'
import professionalWomanOffice from '@/assets/professional-woman-office.jpg'

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const blogPosts = [
    {
      id: 'anxiety',
      title: 'Understanding Anxiety: Breaking Free from the Grip of Fear',
      summary:
        'Learn effective techniques to manage anxiety and regain control over your thoughts and emotions. This comprehensive guide covers cognitive behavioral strategies, breathing techniques, and lifestyle changes that can help you overcome anxiety.',
      image: heroImage,
      category: 'ANXIETY',
      date: 'NOVEMBER 19, 2024',
      author: 'Dr. Sarah Johnson',
      readTime: '8 min read',
      slug: 'understanding-anxiety-breaking-free-fear',
    },
    {
      id: 'stress',
      title: 'Mastering Stress: Your Ultimate Guide to Finding Balance',
      summary:
        'Discover practical strategies to reduce stress and create a more balanced, peaceful life. From time management techniques to mindfulness practices, this guide provides actionable steps for stress management.',
      image: supportiveInteractions,
      category: 'STRESS',
      date: 'NOVEMBER 19, 2024',
      author: 'Dr. Michael Chen',
      readTime: '10 min read',
      slug: 'mastering-stress-ultimate-guide-balance',
    },
    {
      id: 'depression',
      title: 'Unmasking Depression: The Silent Storm Within',
      summary:
        'Understanding depression and finding hope through proven therapeutic approaches and support. Learn about the signs, symptoms, and evidence-based treatments that can help you or your loved ones.',
      image: therapistClientSession,
      category: 'DEPRESSION',
      date: 'NOVEMBER 19, 2024',
      author: 'Dr. Emily Rodriguez',
      readTime: '12 min read',
      slug: 'unmasking-depression-silent-storm',
    },
    {
      id: 'community',
      title: 'Building Stronger Communities: Mental Health Awareness Workshop',
      summary:
        'Highlights from our community workshop on breaking stigma and promoting mental wellness. Learn how communities can come together to support mental health initiatives and create safe spaces.',
      image: videoCallTherapy,
      category: 'COMMUNITY',
      date: 'NOVEMBER 15, 2024',
      author: 'OurSoulss Team',
      readTime: '6 min read',
      slug: 'building-stronger-communities-workshop',
    },
    {
      id: 'relationships',
      title: 'Healthy Relationships: Building Connections That Heal',
      summary:
        'Explore the connection between relationships and mental health, and learn how to build supportive, nurturing connections with others.',
      image: aboutHeroWoman,
      category: 'RELATIONSHIPS',
      date: 'NOVEMBER 10, 2024',
      author: 'Dr. Lisa Thompson',
      readTime: '9 min read',
      slug: 'healthy-relationships-building-connections',
    },
    {
      id: 'workplace',
      title: 'Mental Health in the Workplace: Creating Supportive Environments',
      summary:
        'A comprehensive look at workplace mental health, including strategies for employers and employees to create healthier work environments.',
      image: professionalWomanOffice,
      category: 'WORKPLACE',
      date: 'NOVEMBER 5, 2024',
      author: 'Dr. Robert Kumar',
      readTime: '11 min read',
      slug: 'mental-health-workplace-supportive-environments',
    },
  ]

  const categories = [
    'ANXIETY',
    'STRESS',
    'DEPRESSION',
    'COMMUNITY',
    'RELATIONSHIPS',
    'WORKPLACE',
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === 'all' ||
      post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Mental Health Blog
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Expert insights, practical tips, and inspiring stories to support
            your mental health journey
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display font-semibold text-foreground">
              {filteredPosts.length} Articles Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <Card className="h-full shadow-card border-0 group-hover:shadow-floating transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-primary font-medium"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.summary}
                    </CardDescription>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or browse all available
                articles.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
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
  )
}

export default Blog
