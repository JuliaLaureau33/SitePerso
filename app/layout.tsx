import type { Metadata, Viewport } from "next";
import "./globals.css";
import DeviceDetector from "./DeviceDetector";

export const metadata: Metadata = {
  title: "Julia Laureau · Une femme. Un chemin. Une voix.",
  description: "Se retrouver soi-même est le travail d'une vie. Le silence en est le chemin. Site officiel de Julia Laureau, fondatrice de SOS Shine, auteure et coach des thérapeutes.",
  keywords: ["Julia Laureau", "SOS Shine", "déconditionnement", "développement personnel", "sonothérapie", "coaching", "auteure"],
  authors: [{ name: "Julia Laureau" }],
  openGraph: {
    title: "Julia Laureau · Une femme. Un chemin. Une voix.",
    description: "Se retrouver soi-même est le travail d'une vie. Le silence en est le chemin.",
    url: "https://julialaureau.com",
    siteName: "Julia Laureau",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/julia-portrait.jpeg",
        width: 1200,
        height: 1500,
        alt: "Julia Laureau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julia Laureau",
    description: "Se retrouver soi-même est le travail d'une vie. Le silence en est le chemin.",
    images: ["/images/julia-portrait.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0E0C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Julia Laureau" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <DeviceDetector />
        {children}
      </body>
    </html>
  );
}
