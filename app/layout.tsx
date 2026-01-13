import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | JJ Safety",
    default: "JJ Safety - Contractor Compliance Services",
  },
  description:
    "Expert contractor compliance services for ISNetworld, Veriforce, and Avetta. Get certified fast with our 100% guarantee.",
  keywords: [
    "ISNetworld certification",
    "Veriforce compliance",
    "Avetta certification",
    "contractor compliance",
    "safety compliance services",
    "contractor safety programs",
  ],
  authors: [{ name: "JJ Safety" }],
  creator: "JJ Safety",
  publisher: "JJ Safety",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JJ Safety",
    title: "JJ Safety - Contractor Compliance Services",
    description:
      "Expert contractor compliance services for ISNetworld, Veriforce, and Avetta. Get certified fast with our 100% guarantee.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JJ Safety - Contractor Compliance Services",
    description:
      "Expert contractor compliance services for ISNetworld, Veriforce, and Avetta. Get certified fast with our 100% guarantee.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
