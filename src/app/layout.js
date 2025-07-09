import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { B612_Mono, Codystar } from 'next/font/google';

// B612 Mono only has these weights: 400 (Regular), 700 (Bold)
const b612 = B612_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], // Removed '500' as it's not available
  variable: '--font-b612',
});

const codystar = Codystar({
  subsets: ['latin'],
  weight: ['400'], // Codystar only has Regular (400) weight
  variable: '--font-codystar',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${b612.variable} ${codystar.variable}`}>
      <body className="font-b612">{children}</body>
    </html>
  );
}
