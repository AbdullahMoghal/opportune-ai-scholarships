import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Bot, Send, Calendar, BookOpen, Target, HelpCircle, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface OmniaAssistantProps {
  className?: string;
}

type AssistantOption = 
  | 'learn-website'
  | 'find-scholarships'
  | 'understand-deadlines'
  | 'essay-tips'
  | 'faq'
  | 'welcome';

const OmniaAssistant: React.FC<OmniaAssistantProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Static responses for each option
  const responses: Record<AssistantOption, string> = {
    'welcome': t("omniaWelcome"),
    'learn-website': t("omniaLearnWebsite"),
    'find-scholarships': "Fill out your profile on the 'Get Started' page with your major, GPA, interests, and background. Our AI will then match you with relevant scholarships.",
    'understand-deadlines': t("omniaUnderstandDeadlines"),
    'essay-tips': t("omniaEssayTips"),
    'faq': `1. What does this site do?
Opportune AI helps you find real scholarships that match your profile. Just share some basic info like your major, GPA, interests, and background, and our system will show scholarships that are currently open and a good fit for you.

2. How do I use it?
It’s simple: Fill out the short form with your student info.
Click “Find Scholarships.”
Wait a few seconds. You’ll see a list of scholarships with their deadlines, amounts, and links to apply.

3. Is this site free to use?
Yes, completely free. You don’t have to pay to search or view scholarships.

4. What kind of scholarships can I find here?
You’ll find a mix of postings that are, merit-based, need-based, major-specific, and demographic-based internships.`
  };

  // Guided options with icons
  const guidedOptions = [
    {
      id: 'learn-website' as AssistantOption,
      label: t("omniaLearnWebsiteLabel"),
      icon: BookOpen,
      description: t("omniaLearnWebsiteDesc")
    },
    {
      id: 'find-scholarships' as AssistantOption,
      label: t("omniaFindScholarshipsLabel"),
      icon: Target,
      description: t("omniaFindScholarshipsDesc")
    },
    {
      id: 'understand-deadlines' as AssistantOption,
      icon: Calendar,
      label: t("omniaUnderstandDeadlinesLabel"),
      description: t("omniaUnderstandDeadlinesDesc")
    },
    {
      id: 'essay-tips' as AssistantOption,
      icon: FileText,
      label: t("omniaEssayTipsLabel"),
      description: t("omniaEssayTipsDesc")
    },
    {
      id: 'faq' as AssistantOption,
      icon: HelpCircle,
      label: t("omniaFAQLabel"),
      description: t("omniaFAQDesc")
    }
  ];

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize with welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: `msg-${Date.now()}`,
        type: 'assistant',
        content: responses['welcome'],
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, responses]);

  const handleOptionClick = async (optionId: AssistantOption) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      type: 'user',
      content: guidedOptions.find(opt => opt.id === optionId)?.label || '',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        type: 'assistant',
        content: responses[optionId],
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Chat Window */}
      {isOpen && (
        <Card className="w-96 h-[500px] shadow-2xl border-primary/20 bg-gradient-to-br from-background to-muted/20 mb-4 animate-in slide-in-from-bottom-4 duration-300">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/40 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Omnia</h3>
                  <p className="text-xs text-muted-foreground">{t("omniaSubtitle")}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearChat}
                  className="h-8 px-3 text-xs font-medium border-primary/20 hover:bg-primary/5"
                >
                  Clear Chat
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {message.type === 'assistant' && (
                      <div className="flex items-center gap-2 mb-1">
                        <Bot className="w-3 h-3" />
                        <span className="text-xs font-medium">Omnia</span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground rounded-lg px-3 py-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Bot className="w-3 h-3" />
                      <span className="text-xs font-medium">Omnia</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Guided Options */}
            <div className="p-4 border-t border-border/40 bg-muted/20">
              <p className="text-xs text-muted-foreground mb-3 font-medium">{t("omniaChooseOption")}:</p>
              <div className="grid grid-cols-2 gap-2">
                {guidedOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    size="sm"
                    onClick={() => handleOptionClick(option.id)}
                    className="h-auto p-2 text-left justify-start hover:bg-primary/5 border-primary/20"
                    disabled={isTyping}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <option.icon className="w-3 h-3 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-medium truncate">{option.label}</p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Toggle Button */}
      <Button
        onClick={toggleAssistant}
        className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-destructive hover:bg-destructive/90' 
            : 'bg-gradient-to-r from-primary to-accent hover:opacity-90'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </Button>

      {/* Assistant Label */}
      {!isOpen && (
        <div className="absolute -top-12 right-0 bg-background border border-border/40 rounded-lg px-3 py-1 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-xs font-medium text-foreground">{t("omniaChatLabel")}</p>
          <div className="absolute bottom-[-4px] right-4 w-2 h-2 bg-background border-r border-b border-border/40 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default OmniaAssistant;
