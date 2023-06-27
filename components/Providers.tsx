"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from "react-query";
type ProvidersProps = { children: ReactNode }

const client = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={client}>
    <SessionProvider>
      <ThemeProvider attribute={"class"} enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </SessionProvider>
    </QueryClientProvider>
    
    
  );
};
