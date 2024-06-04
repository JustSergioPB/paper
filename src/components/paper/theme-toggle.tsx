"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <ToggleGroup
      type="single"
      className="border border-solid border-slate-200 dark:border-slate-700 p-2 rounded-full"
      onValueChange={(value) => setTheme(value)}
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
