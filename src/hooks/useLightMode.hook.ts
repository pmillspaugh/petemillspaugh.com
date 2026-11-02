import { useState, useEffect } from "react";
import { LocalStorageKey } from "@/constants";

const useLightMode = (): {
  lightMode: boolean;
  setLightMode: (isLightMode: boolean) => void;
} => {
  const [lightMode, setLightModeState] = useState(true);

  useEffect(() => {
    setLightModeState(document.documentElement.dataset.theme !== "dark");
  }, []);

  const setLightMode = (isLightMode: boolean) => {
    document.documentElement.dataset.theme = isLightMode ? "light" : "dark";
    setLightModeState(isLightMode);
    try {
      localStorage.setItem(
        LocalStorageKey.PreferredTheme,
        JSON.stringify(isLightMode ? "light" : "dark"),
      );
    } catch {}
  };

  return { lightMode, setLightMode };
};

export default useLightMode;
