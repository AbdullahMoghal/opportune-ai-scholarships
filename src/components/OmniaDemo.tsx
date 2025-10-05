import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, Sparkles, Calendar, Target, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Omnia Demo Component
 * 
 * This component demonstrates the Omnia AI assistant features
 * and can be used for presentations or documentation.
 */
const OmniaDemo: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: MessageCircle,
      title: t("omniaDemoFeature1Title"),
      description: t("omniaDemoFeature1Desc"),
      color: "text-blue-500"
    },
    {
      icon: Target,
      title: t("omniaDemoFeature2Title"),
      description: t("omniaDemoFeature2Desc"),
      color: "text-green-500"
    },
    {
      icon: Calendar,
      title: t("omniaDemoFeature3Title"),
      description: t("omniaDemoFeature3Desc"),
      color: "text-purple-500"
    },
    {
      icon: BookOpen,
      title: t("omniaDemoFeature4Title"),
      description: t("omniaDemoFeature4Desc"),
      color: "text-orange-500"
    }
  ];

  const guidedOptions = [
    {
      option: t("omniaLearnWebsiteLabel"),
      response: t("omniaLearnWebsite"),
      icon: BookOpen
    },
    {
      option: t("omniaFindScholarshipsLabel"),
      response: t("omniaFindScholarships"),
      icon: Target
    },
    {
      option: t("omniaUnderstandDeadlinesLabel"),
      response: t("omniaUnderstandDeadlines"),
      icon: Calendar
    },
    {
      option: t("omniaEssayTipsLabel"),
      response: t("omniaEssayTips"),
      icon: Sparkles
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Omnia AI Assistant
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("omniaDemoDescription")}
        </p>
        <Badge variant="secondary" className="text-sm">
          {t("omniaDemoBadge")}
        </Badge>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Demo Conversation */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            {t("omniaDemoConversationTitle")}
          </CardTitle>
          <CardDescription>
            {t("omniaDemoConversationDesc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Welcome Message */}
          <div className="flex justify-start">
            <div className="max-w-[80%] bg-muted rounded-lg px-4 py-3">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Omnia</span>
              </div>
              <p className="text-sm">{t("omniaWelcome")}</p>
            </div>
          </div>

          {/* Guided Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {guidedOptions.map((item, index) => (
              <div key={index} className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start h-auto p-3 text-left"
                  disabled
                >
                  <div className="flex items-center gap-2 w-full">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item.option}</span>
                  </div>
                </Button>
                <div className="bg-primary/5 border border-primary/20 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Bot className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">Omnia</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.response}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Integration Info */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            {t("omniaIntegrationTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            {t("omniaIntegrationDesc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">{t("omniaCurrentFeatures")}:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {t("omniaFeature1")}</li>
                <li>• {t("omniaFeature2")}</li>
                <li>• {t("omniaFeature3")}</li>
                <li>• {t("omniaFeature4")}</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">{t("omniaFutureFeatures")}:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {t("omniaFuture1")}</li>
                <li>• {t("omniaFuture2")}</li>
                <li>• {t("omniaFuture3")}</li>
                <li>• {t("omniaFuture4")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OmniaDemo;
