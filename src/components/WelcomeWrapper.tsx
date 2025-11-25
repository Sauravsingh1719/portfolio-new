"use client";

import { useEffect, useState } from "react";
import WelcomeScreen from "./WelcomeScreen";

export default function WelcomeWrapper({ children }: { children: React.ReactNode }) {
  const [showWelcome, setShowWelcome] = useState(true);

  // Prevent scrolling when welcome screen is visible
  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showWelcome]);

  if (showWelcome) {
    return <WelcomeScreen onComplete={() => setShowWelcome(false)} />;
  }

  return <>{children}</>;
}