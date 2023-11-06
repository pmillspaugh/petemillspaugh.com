import { useState, useEffect, useMemo } from "react";
import { LocalStorageKey } from "@/constants";

const useLightMode = (): {
  lightMode: boolean;
  setLightMode: (isLightMode: boolean) => void;
} => {
  const [lightMode, setLightModeState] = useState(false);

  useEffect(() => {
    const storedThemePreference = JSON.parse(
      localStorage.getItem(LocalStorageKey.PreferredTheme)
    );

    if (storedThemePreference !== null) {
      setLightModeState(storedThemePreference === "light" ? true : false);
      return;
    }

    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setLightModeState(!userPrefersDark);
  }, []);

  const setLightMode = (isLightMode: boolean) => {
    setLightModeState(isLightMode);
    localStorage.setItem(
      LocalStorageKey.PreferredTheme,
      JSON.stringify(`${isLightMode ? "light" : "dark"}`)
    );
  };

  return useMemo(() => ({ lightMode, setLightMode }), [lightMode]);
};

export default useLightMode;
