import { GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="w-full border-t border-border/40 bg-muted/30">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">OpportuneAI</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footerDescription")}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-sm">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="/get-started" className="hover:text-primary transition-colors">
                  {t("search")}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-sm">{t("about")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("aboutDescription")}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OpportuneAI. {t("allRightsReserved")}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
