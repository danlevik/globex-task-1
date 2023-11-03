import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux/storeProvider";

export const metadata: Metadata = {
  title: "Тестовое задание",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
