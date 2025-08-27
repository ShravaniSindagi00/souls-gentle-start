import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MessageCircle, 
  Heart, 
  TrendingUp, 
  User, 
  BookOpen,
  Settings,
  Bell,
  Plus,
  Video,
  FileText,
  Star,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const upcomingSessions = [
    {
      id: 1,
      therapist: "Dr. Sarah Johnson",
      date: "2024-01-15",
      time: "2:00 PM",
      type: "Video Session",
      status: "confirmed",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      therapist: "Dr. Michael Chen", 
      date: "2024-01-18",
      time: "10:00 AM",
      type: "Audio Session",
      status: "pending",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const pastSessions = [
    {
      id: 1,
      therapist: "Dr. Sarah Johnson",
      date: "2024-01-08",
      time: "2:00 PM",
      type: "Video Session",
      rating: 5,
      notes: "Great session focusing on coping strategies",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      therapist: "Dr. Emily Rodriguez",
      date: "2024-01-01",
      time: "3:00 PM", 
      type: "Video Session",
      rating: 5,
      notes: "Worked on communication techniques",
      image: "https://images.unsplash.com/photo-1594824804732-ca8fbf0945c8?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const wellnessRecommendations = [
    {
      title: "Daily Mindfulness Practice",
      description: "5-minute guided meditation for anxiety management",
      category: "Mindfulness",
      duration: "5 min",
      completed: false
    },
    {
      title: "Gratitude Journaling",
      description: "Write three things you're grateful for today",
      category: "Journaling",
      duration: "10 min",
      completed: true
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Release tension and promote relaxation",
      category: "Relaxation",
      duration: "15 min",
      completed: false
    }
  ];

  const moodData = [
    { date: "Mon", mood: 7 },
    { date: "Tue", mood: 6 },
    { date: "Wed", mood: 8 },
    { date: "Thu", mood: 7 },
    { date: "Fri", mood: 9 },
    { date: "Sat", mood: 8 },
    { date: "Sun", mood: 7 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
                Welcome back, Sarah!
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Your wellness journey continues. Here's what's happening today.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Link to="/book">
                <Button variant="hero" size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Book Session
                </Button>
              </Link>
              <Link to="/ai-therapy">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  AI Chat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-hero rounded-lg">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">12</div>
                  <div className="text-sm text-muted-foreground">Total Sessions</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-wellness rounded-lg">
                  <TrendingUp className="h-6 w-6 text-wellness-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">7.5</div>
                  <div className="text-sm text-muted-foreground">Avg Mood Score</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-accent rounded-lg">
                  <CheckCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">85%</div>
                  <div className="text-sm text-muted-foreground">Goals Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-trust rounded-lg">
                  <Heart className="h-6 w-6 text-trust-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">21</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="sessions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="sessions" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Sessions */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Sessions
                  </CardTitle>
                  <CardDescription>
                    Your scheduled appointments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                      <img
                        src={session.image}
                        alt={session.therapist}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{session.therapist}</div>
                        <div className="text-sm text-muted-foreground">
                          {session.date} at {session.time}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={session.type === "Video Session" ? "default" : "secondary"} className="text-xs">
                            {session.type}
                          </Badge>
                          <Badge variant={session.status === "confirmed" ? "secondary" : "outline"} className="text-xs">
                            {session.status}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  
                  <Link to="/book">
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Schedule New Session
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Recent Sessions */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-wellness" />
                    Recent Sessions
                  </CardTitle>
                  <CardDescription>
                    Your therapy session history
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pastSessions.map((session) => (
                    <div key={session.id} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                      <img
                        src={session.image}
                        alt={session.therapist}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{session.therapist}</div>
                        <div className="text-sm text-muted-foreground">
                          {session.date} at {session.time}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-3 w-3 ${star <= session.rating ? 'fill-accent text-accent' : 'text-muted'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{session.notes}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wellness" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-wellness" />
                      Daily Wellness Recommendations
                    </CardTitle>
                    <CardDescription>
                      Personalized activities to support your mental health
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {wellnessRecommendations.map((rec, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                        <div className={`w-2 h-2 rounded-full ${rec.completed ? 'bg-wellness' : 'bg-muted-foreground'}`} />
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{rec.title}</div>
                          <div className="text-sm text-muted-foreground">{rec.description}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{rec.category}</Badge>
                            <span className="text-xs text-muted-foreground">{rec.duration}</span>
                          </div>
                        </div>
                        <Button size="sm" variant={rec.completed ? "secondary" : "default"}>
                          {rec.completed ? <CheckCircle className="h-4 w-4" /> : "Start"}
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-trust" />
                    Mood Tracker
                  </CardTitle>
                  <CardDescription>
                    This week's mood pattern
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {moodData.map((day) => (
                      <div key={day.date} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{day.date}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div 
                              className="h-2 bg-gradient-wellness rounded-full" 
                              style={{ width: `${(day.mood / 10) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-6">{day.mood}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Log Today's Mood
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Therapy Goals Progress</CardTitle>
                  <CardDescription>Track your personal development milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Anxiety Management</span>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="w-[85%] h-2 bg-gradient-wellness rounded-full" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Communication Skills</span>
                        <span className="text-sm text-muted-foreground">70%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="w-[70%] h-2 bg-gradient-trust rounded-full" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Self-Confidence</span>
                        <span className="text-sm text-muted-foreground">60%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="w-[60%] h-2 bg-gradient-accent rounded-full" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Wellness Insights</CardTitle>
                  <CardDescription>Key patterns and achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-wellness-light rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-wellness" />
                        <span className="font-medium text-wellness">Positive Trend</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your mood scores have improved by 15% over the past month.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-accent-lighter rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-accent-foreground" />
                        <span className="font-medium text-accent-foreground">Achievement Unlocked</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You've completed 21 consecutive days of wellness activities!
                      </p>
                    </div>

                    <div className="p-4 bg-trust/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-trust" />
                        <span className="font-medium text-trust">Recommendation</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Consider exploring mindfulness-based stress reduction techniques.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Profile Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Notification Preferences
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Privacy Settings
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-wellness" />
                    Wellness Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Customize Recommendations
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Set Reminder Schedule
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Goal Tracking Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;