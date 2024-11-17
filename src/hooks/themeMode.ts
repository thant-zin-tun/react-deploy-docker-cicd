import { useContext } from "react";
import { ThemeModeContext } from "../layouts/Layout";

export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);
    if (!context) {
      throw new Error("useThemeMode must be used within a ThemeProvider");
    }
    return context;
  };