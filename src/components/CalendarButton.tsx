import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, Download, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { downloadICSFile, openGoogleCalendar } from "@/lib/calendarHelpers";

interface CalendarButtonProps {
  title: string;
  description: string;
  deadline: string;
  className?: string;
}

const CalendarButton = ({ title, description, deadline, className }: CalendarButtonProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadICS = () => {
    try {
      downloadICSFile(title, description, deadline);
      setIsOpen(false);
    } catch (error) {
      console.error('Error downloading ICS file:', error);
    }
  };

  const handleOpenGoogleCalendar = () => {
    try {
      openGoogleCalendar(title, description, deadline);
      setIsOpen(false);
    } catch (error) {
      console.error('Error opening Google Calendar:', error);
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`gap-2 ${className}`}
        >
          <Calendar className="h-4 w-4" />
          {t("addToCalendar")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={handleDownloadICS} className="cursor-pointer">
          <Download className="mr-2 h-4 w-4" />
          {t("downloadICS")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleOpenGoogleCalendar} className="cursor-pointer">
          <ExternalLink className="mr-2 h-4 w-4" />
          {t("openInGoogleCalendar")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CalendarButton;
