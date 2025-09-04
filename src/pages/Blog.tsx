import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Anxiety: Breaking Free from the Grip of Fear',
    excerpt:
      'A comprehensive guide to understanding anxiety disorders, including GAD, Social Anxiety, Panic Disorder, Phobias, and OCD, with practical management strategies.',
    author: 'Dr. Sarah Johnson',
    date: '2025-09-04',
    readTime: '8 min read',
    category: 'Mental Health',
    slug: 'understanding-anxiety-breaking-free',
  },
  {
    id: 2,
    title: 'Mastering Stress: Your Ultimate Guide to Finding Balance',
    excerpt:
      'A practical roadmap to managing stress, covering its science, symptoms, and comprehensive management strategies including breathing exercises, movement, and mindfulness.',
    author: 'Dr. Michael Chen',
    date: '2025-09-03',
    readTime: '10 min read',
    category: 'Stress Management',
    slug: 'mastering-stress-ultimate-guide',
  },
  {
    id: 3,
    title: 'Unmasking Depression: The Silent Storm Within',
    excerpt:
      'A compassionate guide to understanding depression, its hidden signs, science, common myths, and recovery strategies with hope for healing.',
    author: 'Dr. Emily Rodriguez',
    date: '2025-09-02',
    readTime: '12 min read',
    category: 'Mental Health',
    slug: 'unmasking-depression-silent-storm',
  },
  {
    id: 4,
    title:
      "Reflecting on OurSouls' First Event – A Powerful Day of Mental Health and Wellness!",
    excerpt:
      'A summary of our inaugural event at KLE Institute of Technology, featuring keynote speeches, workshops, group activities, and free counseling sessions.',
    author: 'OurSouls Team',
    date: '2025-09-01',
    readTime: '6 min read',
    category: 'Community',
    slug: 'oursouls-first-event-reflection',
  },
]

const categories = ['All', 'Mental Health', 'Stress Management', 'Community']

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mental Health Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, practical tips, and guidance for your mental health
            journey. Written by our team of licensed therapists and mental
            health professionals.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button className="w-full mt-4" variant="outline">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No posts found in this category.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Card className="inline-block bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest mental health
                insights and tips.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Blog
