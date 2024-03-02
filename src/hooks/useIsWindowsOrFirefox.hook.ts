import { useState, useEffect } from "react";

const useIsWindowsOrFirefox = () => {
  const [isWindowsOrFirefox, setIsWindowsOrFirefox] = useState(false);

  useEffect(() => {
    // Note: navigator.platform is deprecated, but fallback to isWindows=false is ok
    const isWindows =
      typeof navigator !== "undefined" &&
      navigator.platform.toLowerCase().includes("win");

    const isFirefox =
      typeof window !== "undefined" && navigator.userAgent.includes("Firefox");

    setIsWindowsOrFirefox(isWindows || isFirefox);
  }, []);

  return isWindowsOrFirefox;
};

export default useIsWindowsOrFirefox;
