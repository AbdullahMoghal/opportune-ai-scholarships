import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Target, Calendar, Shield, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(193_95%_25%)_0%,hsl(270_75%_60%)_100%)] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
              <Sparkles className="h-4 w-4" />
              {t("poweredByAI")}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t("discoverScholarships")}
              </span>
              <br />
              {t("thatMatchYou")}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
              {t("heroDescription")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <Link to="/get-started">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg h-14 px-8">
                  {t("getStartedFree")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  {t("learnMore")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-subtle">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t("whyChoose")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">OpportuneAI</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("whyChooseDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("perfectMatches")}</CardTitle>
                <CardDescription>
                  {t("perfectMatchesDescription")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{t("smartDeadlineTracking")}</CardTitle>
                <CardDescription>
                  {t("smartDeadlineTrackingDescription")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("alwaysUpToDate")}</CardTitle>
                <CardDescription>
                  {t("alwaysUpToDateDescription")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-2xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                {t("readyToFind")}
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                {t("ctaDescription")}
              </p>
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="text-lg h-14 px-8 mt-4">
                  {t("startFinding")}
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
