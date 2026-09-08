import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fit & Flex Fitness Club | Forge Your Strongest Self",
  description:
    "Join Fit & Flex: High-performance training, Olympic Eleiko lifting, Velocity HIIT, Boxing arena, and luxury recovery with sauna and cold plunge. Claim your 7-Day Free Trial pass today.",
  keywords: [
    "gym",
    "fitness club",
    "Fit & Flex",
    "personal training",
    "HIIT workout",
    "Olympic lifting",
    "boxing gym",
    "recovery sauna cold plunge",
  ],
  openGraph: {
    title: "Fit & Flex Fitness Club | Forge Your Strongest Self",
    description:
      "Transform your strength and conditioning at Fit & Flex. 350+ machines, master coaches, and 24/7 access.",
    url: "https://fitandflexgym.com",
    siteName: "Fit & Flex",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
