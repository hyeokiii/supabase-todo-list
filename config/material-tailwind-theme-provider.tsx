"use client";

import { ThemeProvider } from "@material-tailwind/react";

export default function MaterialTailwindThemeProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
