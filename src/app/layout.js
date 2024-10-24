import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subset: ["latin"],
});

export const metadata = {
  title: "Week9 Assignment",
  description: "Social Network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
