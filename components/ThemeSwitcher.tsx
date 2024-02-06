// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { FaCircleHalfStroke } from "react-icons/fa6";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="sidebar-icon group" onClick={() => toggleTheme()}>
      <FaCircleHalfStroke size="16" />
      <span className="sidebar-tooltip md:group-hover:scale-100">{theme}</span>
    </div>
  );
}
