import { useTranslation } from "react-i18next";
import { portfolioData as portfolioDataVI } from "./portfolioData.vi";
import { portfolioDataEN } from "./portfolioData.en";

// Hook to get portfolio data based on current language
export function usePortfolioData() {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? portfolioDataEN : portfolioDataVI;
}

// Re-export everything for convenience
export { portfolioDataVI, portfolioDataEN };

// Default export
export default usePortfolioData;
