"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useTheme } from "next-themes";
import { useEffect } from "react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setTheme(localStorage.getItem("theme") as Theme);
  }, []);

  function changeTheme(theme: Theme) {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }

  return (
    <ToggleGroup
      type="single"
      className="border border-solid border-slate-200 dark:border-slate-700 p-2 rounded-full"
      value={localStorage.getItem("theme") ?? theme}
      onValueChange={(value) => changeTheme(value as Theme)}
    >
      <ToggleGroupItem
        className="rounded-full"
        value="light"
        aria-label="toggle light theme"
      >
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="rounded-full"
        value="system"
        aria-label="toggle system theme"
      >
        <Monitor className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="rounded-full"
        value="dark"
        aria-label="toggle dark theme"
      >
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
