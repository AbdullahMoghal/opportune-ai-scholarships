import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Calendar, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
import CalendarButton from "@/components/CalendarButton";
import { downloadICSFile, openGoogleCalendar } from "@/lib/calendarHelpers";

interface ScholarshipCardProps {
  scholarship: {
    title: string;
    amount: string;
    deadline: string;
    eligibility: string;
    description?: string;
    link: string;
  };
  onApply?: () => void;
  className?: string;
}

/**
 * Complete Scholarship Card Component with Calendar Integration
 * 
 * This component demonstrates the full implementation of the "Add to Calendar" feature
 * for scholarship search results. It includes:
 * 
 * - Scholarship information display
 * - Apply Now button
 * - Add to Calendar dropdown with ICS download and Google Calendar options
 * - Proper TypeScript typing
 * - Internationalization support
 */
const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ 
  scholarship, 
  onApply,
  className = "" 
}) => {
  const { t } = useTranslation();

  const handleApply = () => {
    if (onApply) {
      onApply();
    } else {
      // Default behavior: open scholarship link
      window.open(scholarship.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className={`shadow-md hover:shadow-lg transition-shadow ${className}`}>
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
            onClick={handleApply}
          >
            {t("applyNow")}
            <ExternalLink className="ml-2 h-4 w-4" />
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
  );
};

export default ScholarshipCard;

/**
 * Example usage:
 * 
 * ```tsx
 * import ScholarshipCard from './ScholarshipCard';
 * 
 * const scholarship = {
 *   title: "Merit Scholarship Program",
 *   amount: "$5,000",
 *   deadline: "March 15, 2024",
 *   eligibility: "Must be enrolled full-time with GPA of 3.5 or higher",
 *   description: "Awarded to outstanding students demonstrating academic excellence",
 *   link: "https://example.com/scholarship"
 * };
 * 
 * <ScholarshipCard 
 *   scholarship={scholarship}
 *   onApply={() => console.log('Applied!')}
 * />
 * ```
 */
