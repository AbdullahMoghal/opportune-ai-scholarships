import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, DollarSign, Target, Lightbulb, TrendingUp, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: DollarSign,
      value: "$100B+",
      label: t("annualFunding"),
      description: t("annualFundingDesc")
    },
    {
      icon: Users,
      value: "1.7M+",
      label: t("scholarshipsAvailable"),
      description: t("scholarshipsAvailableDesc")
    },
    {
      icon: Target,
      value: "11-12%",
      label: t("studentsReceiveAid"),
      description: t("studentsReceiveAidDesc")
    },
    {
      icon: TrendingUp,
      value: "$1.7T",
      label: t("totalStudentDebt"),
      description: t("totalStudentDebtDesc")
    }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: t("aiPoweredMatching"),
      description: t("aiPoweredMatchingDesc")
    },
    {
      icon: Target,
      title: t("personalizedResults"),
      description: t("personalizedResultsDesc")
    },
    {
      icon: Calendar,
      title: t("smartDeadlineTracking"),
      description: t("smartDeadlineTrackingDescription")
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(193_95%_25%)_0%,hsl(270_75%_60%)_100%)] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
              <Target className="h-4 w-4" />
              {t("aboutUs")}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t("aboutTitle")}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200 leading-relaxed">
              {t("aboutSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Founders' Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mx-auto bg-primary/10 text-primary border border-primary/20">
              Our Story
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built by students, for students
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Why we started Opportune AI
            </p>
            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Have you ever tried searching for scholarships online? You start hopeful, thinking you’ll find a few that fit you, but ten tabs later, you’re stuck with irrelevant links, outdated deadlines, and endless forms.
              </p>
              <p>
                <strong>We’ve been there too.</strong>
              </p>
              <p>
                That same confusion and burnout led us to create Opportune AI, a platform built by students for students, designed to make finding scholarships simple, relevant, and worth your time.
              </p>
              <p className="font-semibold text-foreground">
                We didn’t just notice the problem. We lived it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("scholarshipLandscape")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("scholarshipLandscapeDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-background to-muted/20">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="font-semibold text-lg">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section removed per request */}

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("ourSolution")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("ourSolutionDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 group ${index === 2 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section removed per request */}

      {/* Sources Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {t("sources")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("sourcesDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
