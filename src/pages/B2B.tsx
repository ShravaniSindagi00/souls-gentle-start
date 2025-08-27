import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Heart, 
  CheckCircle, 
  BarChart3,
  UserCheck,
  Lightbulb,
  ArrowRight,
  Star,
  Phone,
  Mail
} from "lucide-react";

const B2B = () => {
  const corporateFeatures = [
    {
      icon: Users,
      title: "Employee Assistance Program",
      description: "Comprehensive mental health support for all employees with 24/7 access to licensed therapists.",
      benefits: ["Unlimited sessions", "Crisis support", "Multiple languages", "Mobile app access"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Detailed insights into employee wellness trends and program effectiveness while maintaining privacy.",
      benefits: ["Usage analytics", "ROI tracking", "Wellness metrics", "Custom reports"]
    },
    {
      icon: Shield,
      title: "Privacy & Compliance",
      description: "HIPAA-compliant platform ensuring complete confidentiality and data protection.",
      benefits: ["HIPAA compliance", "End-to-end encryption", "Audit trails", "Data residency"]
    },
    {
      icon: Lightbulb,
      title: "Wellness Workshops",
      description: "Interactive workshops and training sessions on mental health awareness and stress management.",
      benefits: ["Live workshops", "On-demand content", "Certified trainers", "Custom topics"]
    },
    {
      icon: UserCheck,
      title: "Manager Training",
      description: "Equip managers with tools to recognize mental health challenges and support their teams effectively.",
      benefits: ["Mental health first aid", "Communication skills", "Crisis management", "Resources"]
    },
    {
      icon: Clock,
      title: "24/7 Crisis Support",
      description: "Immediate support for employees in crisis situations with trained mental health professionals.",
      benefits: ["Instant access", "Trained counselors", "Emergency protocols", "Follow-up care"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$8",
      period: "per employee/month",
      description: "Essential mental health support for small teams",
      features: [
        "Up to 50 employees",
        "Basic EAP services",
        "Monthly wellness sessions",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$15",
      period: "per employee/month",
      description: "Comprehensive wellness solution for growing companies",
      features: [
        "Up to 500 employees",
        "Full EAP services",
        "Unlimited therapy sessions",
        "Manager training",
        "Advanced analytics",
        "24/7 crisis support",
        "Custom workshops"
      ],
      popular: true
    },
    {
      name: "Enterprise", 
      price: "Custom",
      period: "pricing",
      description: "Tailored solution for large organizations",
      features: [
        "Unlimited employees",
        "Full platform access",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced reporting",
        "Priority support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      company: "TechFlow Inc.",
      industry: "Technology",
      employees: "250+",
      quote: "OurSoulss has transformed our workplace culture. Employee satisfaction scores increased by 40% and sick days decreased by 25%.",
      author: "Sarah Chen, HR Director"
    },
    {
      company: "GreenLeaf Consulting",
      industry: "Consulting",
      employees: "100+", 
      quote: "The 24/7 support has been a game-changer. Our employees feel more supported and our retention rates have improved significantly.",
      author: "Michael Rodriguez, CEO"
    },
    {
      company: "InnovateX Labs",
      industry: "Research",
      employees: "500+",
      quote: "The analytics help us understand our team's wellness trends. We can now proactively address mental health challenges.",
      author: "Dr. Lisa Thompson, Chief People Officer"
    }
  ];

  const stats = [
    { label: "Employee Satisfaction", value: "95%", description: "Report improved mental health" },
    { label: "Reduced Turnover", value: "35%", description: "Lower employee churn rate" },
    { label: "ROI", value: "4.2x", description: "Return on wellness investment" },
    { label: "Companies Served", value: "500+", description: "Across 15+ industries" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  For Business & Organizations
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
                  Invest in Your Team's{" "}
                  <span className="text-accent-light">Mental Wellness</span>
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                  Comprehensive employee mental health solutions that improve workplace culture, 
                  boost productivity, and reduce healthcare costs. Support your team's wellbeing with 
                  our enterprise-grade platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent-light">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/80 font-medium">
                      {stat.label}
                    </div>
                    <div className="text-xs text-primary-foreground/60">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="shadow-hero border-0 bg-white/10 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Building className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-xl text-white">Enterprise Dashboard</CardTitle>
                  <CardDescription className="text-white/80">
                    Real-time insights into your team's wellness
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-white">87%</div>
                      <div className="text-xs text-white/80">Engagement Rate</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-white">24/7</div>
                      <div className="text-xs text-white/80">Support Access</div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-sm text-white/80 mb-2">Wellness Score Trend</div>
                    <div className="h-2 bg-white/20 rounded-full">
                      <div className="h-2 bg-accent rounded-full w-3/4"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Complete Corporate Wellness Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your organization needs to support employee mental health and create a thriving workplace culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card border-0 group hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-gradient-hero rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-wellness" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Flexible Pricing for Every Organization
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your team size and wellness needs. All plans include our core mental health support features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`shadow-card border-0 relative ${plan.popular ? 'ring-2 ring-primary shadow-floating' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="py-4">
                    <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-wellness" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom solution? Our team can create a tailored plan for your organization.
            </p>
            <Button variant="outline" size="lg">
              <Mail className="h-4 w-4 mr-2" />
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-muted-foreground">
              See how companies are transforming their workplace culture with OurSoulss
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.company}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.industry} • {testimonial.employees} employees</div>
                    <div className="text-sm text-primary mt-1">{testimonial.author}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Ready to Transform Your Workplace?
            </h2>
            <p className="text-lg opacity-90">
              Join hundreds of companies who have already invested in their team's mental wellness. 
              See the impact of comprehensive mental health support on your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Schedule a Demo
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Download ROI Calculator
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <Heart className="h-8 w-8 text-accent-light mx-auto" />
                <div className="font-semibold">Improve Employee Wellbeing</div>
                <div className="text-sm opacity-80">Reduce stress and burnout</div>
              </div>
              <div className="space-y-2">
                <TrendingUp className="h-8 w-8 text-accent-light mx-auto" />
                <div className="font-semibold">Boost Productivity</div>
                <div className="text-sm opacity-80">Healthier teams perform better</div>
              </div>
              <div className="space-y-2">
                <Shield className="h-8 w-8 text-accent-light mx-auto" />
                <div className="font-semibold">Reduce Healthcare Costs</div>
                <div className="text-sm opacity-80">Preventive mental healthcare</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;