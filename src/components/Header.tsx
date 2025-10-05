import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img src={logoDark} alt="OpportuneAI Logo" className="h-8 w-8 dark:hidden" />
          <img src={logoLight} alt="OpportuneAI Logo" className="h-8 w-8 hidden dark:block" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            OpportuneAI
          </span>
        </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t("about")}
              </Link>
              <Link
                to="/get-started"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/get-started") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t("search")}
              </Link>
            </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Link to="/get-started">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              {t("getStarted")}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
