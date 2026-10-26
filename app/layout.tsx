import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// "template" arma el título de la pestaña: una página con title "Clientes"
// se ve como "Clientes · Procesadora de Pagos".
export const metadata: Metadata = {
  title: {
    default: "Procesadora de Pagos",
    template: "%s · Procesadora de Pagos",
  },
  description: "Gestión de clientes, comisiones y transacciones",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-zinc-50 md:flex-row dark:bg-black">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10">{children}</main>
      </body>
    </html>
  );
}
