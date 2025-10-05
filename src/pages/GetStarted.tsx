import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    major: "",
    gpa: "",
    year: "",
    interests: "",
    background: "",
    firstGen: "",
    military: "",
    disability: "",
    lgbtq: "",
    ethnicity: "",
    lowIncome: "",
    athletics: "",
    gender: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      toast({
        title: t("profileSubmitted"),
        description: `${t("found")} ${data.total_found} ${t("profileDescription")}`,
      });

      navigate("/results", {
        state: {
          profile: formData,
          scholarships: data.scholarships,
          totalFound: data.total_found,
        },
      });
    } catch (error) {
      console.error("Error fetching scholarships:", error);
      toast({
        title: t("error"),
        description: t("failedToFetch"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full py-12 md:py-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("tellUsAboutYourself")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {t("shareProfileDescription")}
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>{t("studentProfile")}</CardTitle>
              <CardDescription>
                {t("fillOutDescription")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("fullName")}</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="major">{t("majorFieldOfStudy")}</Label>
                    <Input
                      id="major"
                      placeholder="Computer Science"
                      value={formData.major}
                      onChange={(e) => handleChange("major", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gpa">{t("gpa")}</Label>
                    <Input
                      id="gpa"
                      type="number"
                      step="0.01"
                      min="0"
                      max="4"
                      placeholder="3.5"
                      value={formData.gpa}
                      onChange={(e) => handleChange("gpa", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">{t("academicYear")}</Label>
                  <Select
                    value={formData.year}
                    onValueChange={(value) => handleChange("year", value)}
                    required
                  >
                    <SelectTrigger id="year">
                      <SelectValue placeholder={t("selectYourYear")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freshman">{t("freshman")}</SelectItem>
                      <SelectItem value="sophomore">{t("sophomore")}</SelectItem>
                      <SelectItem value="junior">{t("junior")}</SelectItem>
                      <SelectItem value="senior">{t("senior")}</SelectItem>
                      <SelectItem value="graduate">{t("graduateStudent")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">{t("interestsActivities")}</Label>
                  <Textarea
                    id="interests"
                    placeholder="e.g., Robotics club, volunteering, research..."
                    value={formData.interests}
                    onChange={(e) => handleChange("interests", e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="background">{t("backgroundAchievements")}</Label>
                  <Textarea
                    id="background"
                    placeholder="Tell us about your academic achievements, community service, leadership roles..."
                    value={formData.background}
                    onChange={(e) => handleChange("background", e.target.value)}
                    rows={4}
                  />
                </div>

                {/* --- NEW SCHOLARSHIP CRITERIA FIELDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First-Generation Student</Label>
                    <Select
                      value={formData.firstGen}
                      onValueChange={(value) => handleChange("firstGen", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Military Service Status</Label>
                    <Select
                      value={formData.military}
                      onValueChange={(value) => handleChange("military", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="veteran">Veteran</SelectItem>
                        <SelectItem value="active-duty">Active Duty</SelectItem>
                        <SelectItem value="reserve">Reserve/National Guard</SelectItem>
                        <SelectItem value="dependent">Military Dependent</SelectItem>
                        <SelectItem value="none">Not Applicable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Disability Status</Label>
                    <Select
                      value={formData.disability}
                      onValueChange={(value) => handleChange("disability", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, I have a disability</SelectItem>
                        <SelectItem value="no">No, I do not have a disability</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Sexual Orientation</Label>
                    <Select
                      value={formData.lgbtq}
                      onValueChange={(value) => handleChange("lgbtq", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lgbtq">LGBTQ+</SelectItem>
                        <SelectItem value="straight">Straight/Heterosexual</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Race/Ethnicity</Label>
                    <Select
                      value={formData.ethnicity}
                      onValueChange={(value) => handleChange("ethnicity", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="american-indian">American Indian or Alaska Native</SelectItem>
                        <SelectItem value="asian">Asian</SelectItem>
                        <SelectItem value="black">Black or African American</SelectItem>
                        <SelectItem value="hispanic">Hispanic or Latino</SelectItem>
                        <SelectItem value="native-hawaiian">Native Hawaiian or Other Pacific Islander</SelectItem>
                        <SelectItem value="white">White</SelectItem>
                        <SelectItem value="two-or-more">Two or More Races</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Annual Household Income</Label>
                    <Select
                      value={formData.lowIncome}
                      onValueChange={(value) => handleChange("lowIncome", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                        <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                        <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                        <SelectItem value="over-150k">Over $150,000</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Gender Identity</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => handleChange("gender", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="woman">Woman</SelectItem>
                        <SelectItem value="man">Man</SelectItem>
                        <SelectItem value="non-binary">Non-binary</SelectItem>
                        <SelectItem value="genderqueer">Genderqueer</SelectItem>
                        <SelectItem value="genderfluid">Genderfluid</SelectItem>
                        <SelectItem value="agender">Agender</SelectItem>
                        <SelectItem value="two-spirit">Two-Spirit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Student Athlete</Label>
                    <Select
                      value={formData.athletics}
                      onValueChange={(value) => handleChange("athletics", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg h-12"
                  disabled={isLoading}
                >
                      {isLoading ? (
                        <>
                          <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                          {t("findingMatches")}
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          {t("findMyScholarships")}
                        </>
                      )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
