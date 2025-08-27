import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send, 
  Bot, 
  User, 
  Heart, 
  Shield, 
  Clock, 
  Lightbulb,
  MessageCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const AITherapy = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI therapy companion. I'm here to provide emotional support and guidance whenever you need it. How are you feeling today?",
      timestamp: new Date(),
      suggestions: [
        "I'm feeling anxious",
        "I had a difficult day",
        "I'm looking for coping strategies",
        "I want to talk about my goals"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    anxious: "I understand you're feeling anxious. That's a completely normal emotion. Let's try a quick breathing exercise: Take a deep breath in for 4 counts, hold for 4, then exhale for 6. Anxiety often passes when we ground ourselves in the present moment. What specific situation is making you feel anxious?",
    difficult: "I'm sorry to hear you've had a difficult day. It takes strength to reach out when things are tough. Remember that difficult days don't last, but resilient people do. Would you like to talk about what made today challenging, or would you prefer some strategies to help you feel better?",
    coping: "Coping strategies are essential tools for mental wellness. Here are some evidence-based techniques: 1) Deep breathing exercises 2) Progressive muscle relaxation 3) Mindfulness meditation 4) Journaling your thoughts 5) Physical activity like walking. Which of these resonates with you, or would you like me to explain any of them in detail?",
    goals: "Setting and working toward goals is wonderful for mental health! Goals give us purpose and direction. What kind of goals are you thinking about? They could be related to self-care, relationships, career, or personal growth. I'd love to help you explore what matters most to you right now."
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('anxious') || message.includes('anxiety') || message.includes('worried')) {
      return predefinedResponses.anxious;
    }
    if (message.includes('difficult') || message.includes('hard') || message.includes('tough') || message.includes('bad day')) {
      return predefinedResponses.difficult;
    }
    if (message.includes('coping') || message.includes('strategy') || message.includes('help') || message.includes('technique')) {
      return predefinedResponses.coping;
    }
    if (message.includes('goal') || message.includes('future') || message.includes('plan') || message.includes('achieve')) {
      return predefinedResponses.goals;
    }
    if (message.includes('thank') || message.includes('appreciate')) {
      return "You're so welcome! It means a lot that you're taking care of your mental health. Remember, seeking support shows strength, not weakness. I'm here whenever you need to talk. Is there anything else on your mind today?";
    }
    if (message.includes('depression') || message.includes('sad') || message.includes('down')) {
      return "I hear that you're going through a tough time emotionally. Depression can feel overwhelming, but you're not alone in this. Small steps matter - even reaching out here today shows your resilience. Have you been able to do any activities that usually bring you comfort? Professional support can also be incredibly helpful for depression.";
    }
    if (message.includes('stress') || message.includes('overwhelmed') || message.includes('pressure')) {
      return "Stress can feel all-consuming, but there are ways to manage it. Try breaking down overwhelming tasks into smaller, manageable steps. The 5-4-3-2-1 grounding technique can also help: notice 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. What's been your biggest source of stress lately?";
    }
    
    return "Thank you for sharing that with me. Your feelings are valid, and it's important to acknowledge them. I'm here to listen and support you. Can you tell me a bit more about what you're experiencing? Sometimes talking through our thoughts can help us understand them better.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
    
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: generateBotResponse(inputMessage),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-full">
              <Bot className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              AI Therapy Chat
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Your 24/7 AI companion for emotional support, coping strategies, and mental wellness guidance.
            Available anytime you need someone to listen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="shadow-card border-0 h-[600px] flex flex-col">
              <CardHeader className="border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-hero rounded-full">
                    <Bot className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AI Therapy Assistant</CardTitle>
                    <CardDescription>Always here to listen and support</CardDescription>
                  </div>
                  <div className="ml-auto">
                    <Badge variant="secondary" className="bg-wellness-light text-wellness">
                      <div className="w-2 h-2 bg-wellness rounded-full mr-2 animate-pulse" />
                      Online
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full">
                  <div className="p-4 space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`p-2 rounded-full ${message.type === 'user' ? 'bg-primary' : 'bg-accent'}`}>
                            {message.type === 'user' ? (
                              <User className="h-4 w-4 text-primary-foreground" />
                            ) : (
                              <Bot className="h-4 w-4 text-accent-foreground" />
                            )}
                          </div>
                          <div className={`rounded-lg p-3 ${
                            message.type === 'user' 
                              ? 'bg-primary text-primary-foreground ml-auto' 
                              : 'bg-muted text-foreground'
                          }`}>
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <div className="text-xs opacity-70 mt-2">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Show suggestions for the latest bot message */}
                    {messages[messages.length - 1]?.type === 'bot' && messages[messages.length - 1]?.suggestions && (
                      <div className="flex gap-2 flex-wrap pl-11">
                        {messages[messages.length - 1].suggestions!.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}

                    {isTyping && (
                      <div className="flex gap-3">
                        <div className="p-2 bg-accent rounded-full">
                          <Bot className="h-4 w-4 text-accent-foreground" />
                        </div>
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Message Input */}
              <div className="border-t border-border p-4">
                <div className="flex gap-3">
                  <Input
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputMessage.trim() || isTyping}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Remember: This AI provides support but isn't a replacement for professional therapy in crisis situations.
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Features */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  AI Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-trust mt-1" />
                  <div>
                    <div className="font-medium text-sm">24/7 Availability</div>
                    <div className="text-xs text-muted-foreground">Always here when you need support</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-4 w-4 text-wellness mt-1" />
                  <div>
                    <div className="font-medium text-sm">Private & Secure</div>
                    <div className="text-xs text-muted-foreground">Your conversations are confidential</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-4 w-4 text-accent mt-1" />
                  <div>
                    <div className="font-medium text-sm">Evidence-Based</div>
                    <div className="text-xs text-muted-foreground">Responses based on therapeutic principles</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-lg">Need More Support?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/therapists">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Find a Therapist
                  </Button>
                </Link>
                <Link to="/wellness">
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Wellness Resources
                  </Button>
                </Link>
                <Link to="/book">
                  <Button variant="default" className="w-full">
                    Book Professional Session
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Crisis Support */}
            <Card className="shadow-soft border-0 bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-lg text-destructive">Crisis Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  If you're in immediate danger or having thoughts of self-harm:
                </p>
                <div className="space-y-2 text-sm">
                  <div>• Call 988 (Suicide & Crisis Lifeline)</div>
                  <div>• Text HOME to 741741 (Crisis Text Line)</div>
                  <div>• Go to your nearest emergency room</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITherapy;