import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable : "--font-poppins",
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})


export const montserrat = Montserrat({
  variable : "--font-montserrat",
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Dragon News",
  description: "A news website built with Next.js 13, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="">
          {children}

        </main>
      </body>
    </html>
  );
}
