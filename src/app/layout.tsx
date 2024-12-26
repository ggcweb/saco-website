import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "~/app/_components/navbar";
import { Footer } from "~/app/_components/footer";
export const metadata: Metadata = {
  title: "Mt Washington Valley Inn | Saco River Motor Lodge and Suites | lodging in Conway NH | Motels Conway NH |Motels in Fryeburg Maine",
  description: "Our Mt Washington Valley Inn, Saco River Motor Lodge and Suites provides comfortable lodging in Conway NH and is a great substitute for the motels in Fryeburg Maine.",
  keywords: "Fryeburg Fair Maine, Mt Washington Valley Inn, Saco River Motor Lodge and Suites, Mt Washington Hiking"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=iso-8859-1"
        />
        <title>
          Mt Washington Valley Inn | Saco River Motor Lodge and Suites | lodging
          in Conway NH | Motels Conway NH | Motels in Fryeburg Maine
        </title>
        <meta
          name="description"
          content="Our Mt Washington Valley Inn, Saco River Motor Lodge and Suites provides comfortable lodging in Conway NH and is a great substitute for the motels in Fryeburg Maine."
        />
        <meta
          name="keywords"
          content="Fryeburg Fair Maine, Mt Washington Valley Inn, Saco River Motor Lodge and Suites, Mt Washington Hiking"
        />
        <meta
          name="google-site-verification"
          content="6COctIBYaux4nJ8qSrtNZM2KbD9znr75zS16waXVt2Q"
        />
        <meta name="msvalidate.01" content="D1DB0885AC0BFD9DC68A55C757730E1B" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=iso-8859-1"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
