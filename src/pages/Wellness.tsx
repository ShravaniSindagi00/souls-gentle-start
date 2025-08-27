import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Brain, 
  Moon, 
  Activity, 
  BookOpen, 
  Users, 
  Clock,
  Play,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Smile,
  Zap
} from "lucide-react";

const Wellness = () => {
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);

  const markComplete = (activityId: string) => {
    setCompletedActivities(prev => 
      prev.includes(activityId) 
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  const mindfulnessActivities = [
    {
      id: "breathing",
      title: "Deep Breathing Exercise",
      description: "A 5-minute guided breathing session to reduce anxiety and stress",
      duration: "5 min",
      difficulty: "Beginner",
      category: "Stress Relief",
      benefits: ["Reduces anxiety", "Improves focus", "Lowers heart rate"]
    },
    {
      id: "body-scan",
      title: "Progressive Body Scan",
      description: "Release tension by systematically relaxing each part of your body",
      duration: "15 min",
      difficulty: "Intermediate",
      category: "Relaxation",
      benefits: ["Reduces muscle tension", "Improves sleep", "Increases awareness"]
    },
    {
      id: "gratitude",
      title: "Gratitude Meditation",
      description: "Cultivate appreciation and positive emotions through guided reflection",
      duration: "10 min",
      difficulty: "Beginner",
      category: "Positivity",
      benefits: ["Boosts mood", "Increases optimism", "Strengthens relationships"]
    },
    {
      id: "mindful-walking",
      title: "Mindful Walking",
      description: "Transform your walk into a moving meditation practice",
      duration: "20 min",
      difficulty: "Beginner",
      category: "Movement",
      benefits: ["Combines exercise", "Improves mood", "Connects with nature"]
    }
  ];

  const wellnessTracks = [
    {
      id: "anxiety",
      title: "Anxiety Management Program",
      description: "7-day comprehensive program for managing anxiety with CBT techniques",
      duration: "7 days",
      sessions: 14,
      level: "All Levels",
      color: "trust",
      modules: [
        "Understanding Anxiety",
        "Breathing Techniques", 
        "Cognitive Restructuring",
        "Exposure Therapy Basics",
        "Lifestyle Changes",
        "Relapse Prevention",
        "Long-term Strategies"
      ]
    },
    {
      id: "sleep",
      title: "Better Sleep Wellness Track",
      description: "Improve your sleep quality with proven techniques and habits",
      duration: "10 days",
      sessions: 10,
      level: "Beginner",
      color: "wellness",
      modules: [
        "Sleep Hygiene Basics",
        "Creating Sleep Environment",
        "Wind-Down Routines",
        "Managing Sleep Anxiety",
        "Natural Sleep Aids"
      ]
    },
    {
      id: "confidence",
      title: "Building Self-Confidence",
      description: "Develop lasting self-confidence through practical exercises",
      duration: "14 days",
      sessions: 20,
      level: "Intermediate",
      color: "accent",
      modules: [
        "Understanding Self-Worth",
        "Challenging Negative Thoughts",
        "Setting Boundaries",
        "Communication Skills",
        "Celebrating Achievements"
      ]
    }
  ];

  const dailyInsights = [
    {
      type: "tip",
      title: "Morning Mindfulness",
      content: "Start your day with 3 deep breaths and set a positive intention. This simple practice can improve your entire day's outlook.",
      icon: Brain
    },
    {
      type: "fact",
      title: "Did You Know?",
      content: "Just 10 minutes of daily meditation can reduce stress hormones by up to 23% according to recent studies.",
      icon: TrendingUp
    },
    {
      type: "motivation",
      title: "Daily Affirmation",
      content: "You are stronger than you think, braver than you feel, and more loved than you know. Your mental health journey matters.",
      icon: Heart
    }
  ];

  const wellnessResources = [
    {
      category: "Articles",
      items: [
        { title: "Understanding Anxiety: A Complete Guide", readTime: "8 min" },
        { title: "Building Resilience in Difficult Times", readTime: "6 min" },
        { title: "The Science of Happiness", readTime: "10 min" },
        { title: "Healthy Boundaries: Setting and Maintaining", readTime: "7 min" }
      ]
    },
    {
      category: "Videos",
      items: [
        { title: "Quick Stress Relief Techniques", readTime: "5 min" },
        { title: "Meditation for Beginners", readTime: "12 min" },
        { title: "Cognitive Behavioral Therapy Basics", readTime: "15 min" },
        { title: "Managing Depression Naturally", readTime: "18 min" }
      ]
    },
    {
      category: "Tools",
      items: [
        { title: "Mood Tracker", readTime: "Daily use" },
        { title: "Anxiety Assessment", readTime: "5 min" },
        { title: "Goal Setting Worksheet", readTime: "15 min" },
        { title: "Sleep Quality Tracker", readTime: "Daily use" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-wellness py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-wellness-foreground mb-4">
            Wellness & Growth Hub
          </h1>
          <p className="text-lg text-wellness-foreground/90 max-w-2xl mx-auto mb-8">
            Personalized mental health activities, guided programs, and resources 
            to support your wellness journey every step of the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Target className="h-8 w-8 text-wellness-foreground mx-auto mb-2" />
              <div className="text-2xl font-bold text-wellness-foreground">50+</div>
              <div className="text-sm text-wellness-foreground/80">Activities</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <BookOpen className="h-8 w-8 text-wellness-foreground mx-auto mb-2" />
              <div className="text-2xl font-bold text-wellness-foreground">12</div>
              <div className="text-sm text-wellness-foreground/80">Programs</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Users className="h-8 w-8 text-wellness-foreground mx-auto mb-2" />
              <div className="text-2xl font-bold text-wellness-foreground">5k+</div>
              <div className="text-sm text-wellness-foreground/80">Members</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Daily Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-semibold mb-6">Today's Wellness Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyInsights.map((insight, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-wellness rounded-lg">
                      <insight.icon className="h-6 w-6 text-wellness-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{insight.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {insight.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Tabs defaultValue="activities" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activities">Daily Activities</TabsTrigger>
            <TabsTrigger value="programs">Wellness Programs</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="progress">My Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-display font-semibold">Mindfulness Activities</h2>
              <Badge variant="secondary">
                {completedActivities.length} of {mindfulnessActivities.length} completed
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mindfulnessActivities.map((activity) => (
                <Card key={activity.id} className="shadow-card border-0 group hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {activity.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {activity.description}
                        </CardDescription>
                      </div>
                      <Button
                        variant={completedActivities.includes(activity.id) ? "secondary" : "default"}
                        size="sm"
                        onClick={() => markComplete(activity.id)}
                        className="ml-4"
                      >
                        {completedActivities.includes(activity.id) ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {activity.duration}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {activity.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {activity.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Benefits:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {activity.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-wellness rounded-full" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        disabled={completedActivities.includes(activity.id)}
                      >
                        {completedActivities.includes(activity.id) ? "Completed" : "Start Activity"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="programs" className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-semibold mb-2">Wellness Programs</h2>
              <p className="text-muted-foreground">Structured programs designed to help you achieve specific mental health goals.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {wellnessTracks.map((track) => (
                <Card key={track.id} className="shadow-card border-0">
                  <CardHeader>
                    <div className={`w-full h-32 bg-gradient-${track.color} rounded-lg flex items-center justify-center mb-4`}>
                      <BookOpen className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-lg">{track.title}</CardTitle>
                    <CardDescription>{track.description}</CardDescription>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        {track.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Activity className="h-4 w-4 text-muted-foreground" />
                        {track.sessions} sessions
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Program Modules:</h4>
                        <ul className="space-y-1">
                          {track.modules.slice(0, 3).map((module, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {module}
                            </li>
                          ))}
                          {track.modules.length > 3 && (
                            <li className="text-sm text-muted-foreground">
                              +{track.modules.length - 3} more modules...
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">4.8</span>
                        <span className="text-sm text-muted-foreground">(124 reviews)</span>
                      </div>

                      <Button className="w-full">
                        Start Program
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-semibold mb-2">Wellness Resources</h2>
              <p className="text-muted-foreground">Educational content, tools, and materials to support your mental health journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wellnessResources.map((category) => (
                <Card key={category.category} className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                          <div>
                            <div className="font-medium text-sm">{item.title}</div>
                            <div className="text-xs text-muted-foreground">{item.readTime}</div>
                          </div>
                          <Zap className="h-4 w-4 text-accent" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-semibold mb-2">Your Wellness Journey</h2>
              <p className="text-muted-foreground">Track your progress and celebrate your achievements.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Smile className="h-5 w-5 text-wellness" />
                    Mood Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-wellness mb-2">7.8</div>
                    <div className="text-sm text-muted-foreground">Average mood this week</div>
                    <div className="text-xs text-wellness mt-1">↑ 12% from last week</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-trust" />
                    Activities Completed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-trust mb-2">{completedActivities.length}</div>
                    <div className="text-sm text-muted-foreground">This month</div>
                    <div className="text-xs text-trust mt-1">Goal: 20 activities</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    Streak Days
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">14</div>
                    <div className="text-sm text-muted-foreground">Consecutive days</div>
                    <div className="text-xs text-accent mt-1">Personal best: 21 days</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Weekly Wellness Goals</CardTitle>
                <CardDescription>Track your progress toward this week's wellness objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Complete 5 mindfulness activities</span>
                      <span className="text-sm text-muted-foreground">{Math.min(completedActivities.length, 5)}/5</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-wellness rounded-full transition-all duration-300" 
                        style={{ width: `${Math.min((completedActivities.length / 5) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Log mood 7 times this week</span>
                      <span className="text-sm text-muted-foreground">6/7</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="w-[86%] h-2 bg-gradient-trust rounded-full" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Read 2 wellness articles</span>
                      <span className="text-sm text-muted-foreground">1/2</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="w-[50%] h-2 bg-gradient-accent rounded-full" />
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

export default Wellness;