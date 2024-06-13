import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";

import { Toaster as SonnerToaster } from "@/components/ui/sonner";

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider";

 


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Shadcn Dashboard",
  description: "Devtalles tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
         className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            {children}    
        </ThemeProvider>
        <SonnerToaster richColors />
        <Toaster />
        
      </body>
    </html>
  );
}
