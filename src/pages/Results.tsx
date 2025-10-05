import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendarButton from "@/components/CalendarButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Calendar, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Scholarship {
  title: string;
  amount: string;
  deadline: string;
  eligibility: string;
  description?: string;
  link: string;
}

const Results = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  const profile = location.state?.profile || {};
  const scholarships: Scholarship[] = location.state?.scholarships || [];
  const totalFound = location.state?.totalFound || 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 w-full py-12 md:py-20 bg-gradient-subtle">
        <div className="container max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("yourScholarshipMatches")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("weFound")} {totalFound} {t("scholarshipsThatMatch")} {profile.name}
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {scholarships.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    {t("noScholarshipsFound")}
                  </p>
                </CardContent>
              </Card>
            ) : (
              scholarships.map((scholarship, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{scholarship.title}</CardTitle>
                      <CardDescription className="text-base">
                        {scholarship.description || t("scholarshipOpportunity")}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 md:items-end">
                      <div className="flex items-center gap-2 text-primary font-bold text-xl">
                        <DollarSign className="h-5 w-5" />
                        {scholarship.amount}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        {t("due")}: {scholarship.deadline}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">{t("eligibilityRequirements")}:</h4>
                    <p className="text-sm text-muted-foreground">
                      {scholarship.eligibility}
                    </p>
                  </div>

                  <Separator />

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                      asChild
                    >
                      <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
                        {t("applyNow")}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>

                    <CalendarButton
                      title={scholarship.title}
                      description={scholarship.link}
                      deadline={scholarship.deadline}
                      className="flex-1"
                    />
                  </div>
                </CardContent>
              </Card>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
