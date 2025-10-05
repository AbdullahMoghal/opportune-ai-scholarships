import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, DollarSign, Target, Lightbulb, TrendingUp } from "lucide-react";
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
      icon: Users,
      title: t("comprehensiveDatabase"),
      description: t("comprehensiveDatabaseDesc")
    },
    {
      icon: TrendingUp,
      title: t("realTimeUpdates"),
      description: t("realTimeUpdatesDesc")
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

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-destructive">
                {t("theProblem")}
              </h2>
            </div>
            <Card className="border-destructive/30 bg-gradient-to-br from-destructive/5 to-destructive/10 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-destructive/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle className="text-2xl text-destructive">
                  {t("theProblem")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("problemPoint1")}
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("problemPoint2")}
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("problemPoint3")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 group">
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

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/30 shadow-2xl">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t("ourMission")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  {t("missionStatement")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link to="/get-started">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg h-14 px-8 shadow-lg">
                      {t("getStarted")}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button variant="outline" size="lg" className="text-lg h-14 px-8 border-primary/30 hover:bg-primary/5">
                      {t("learnMore")}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
