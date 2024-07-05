"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from "react-query";
import { CursorProvider } from "./CursorProvider";
type ProvidersProps = { children: ReactNode }

const client = new QueryClient();
export default function Providers({ children }: ProvidersProps) { 
  return (
    <QueryClientProvider client={client}>
    <SessionProvider>
      <ThemeProvider attribute={"class"} enableSystem disableTransitionOnChange defaultTheme={"dark"}>
        <CursorProvider>
         {children}
        </CursorProvider>
      </ThemeProvider>
    </SessionProvider>
    </QueryClientProvider>
    
    
  );
};
