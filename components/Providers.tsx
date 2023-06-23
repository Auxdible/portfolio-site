"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react"
type ProvidersProps = { children: ReactNode }
export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider attribute={"class"} enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </SessionProvider>
    
  );
};
