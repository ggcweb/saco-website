import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { Navbar } from "~/app/_components/navbar";
import { Footer } from "~/app/_components/footer";

const siteUrl = "https://sacorivermotorlodge.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saco River Motor Lodge & Suites | Family-Friendly Lodging in Conway NH | Mt Washington Valley",
    template: "%s | Saco River Motor Lodge"
  },
  description: "Experience family-friendly lodging at Saco River Motor Lodge & Suites in Conway, NH. Located on the scenic Saco River with pool, playground, fire pits, and direct river access. Minutes from North Conway shopping, skiing at Attitash, Wildcat & Cranmore, hiking, and Mt Washington Valley attractions.",
  keywords: [
    "Saco River Motor Lodge",
    "Conway NH hotels",
    "Conway NH lodging",
    "North Conway motels",
    "Mt Washington Valley hotels",
    "Mt Washington Valley lodging",
    "family lodging New Hampshire",
    "Saco River accommodations",
    "White Mountains hotels",
    "North Conway NH accommodations",
    "ski lodging New Hampshire",
    "Fryeburg Fair lodging",
    "pet friendly hotels Conway NH",
    "Attitash lodging",
    "Cranmore Mountain lodging",
    "New Hampshire vacation rentals",
    "riverfront motel New Hampshire"
  ],
  authors: [{ name: "Saco River Motor Lodge" }],
  creator: "Saco River Motor Lodge",
  publisher: "Saco River Motor Lodge",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Saco River Motor Lodge & Suites",
    title: "Saco River Motor Lodge & Suites | Family-Friendly Lodging in Conway NH",
    description: "Experience the beauty of the White Mountains! Family-friendly lodging with pool, playground, fire pits, and direct Saco River access. Minutes from North Conway, ski resorts, and Mt Washington Valley attractions.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Saco River Motor Lodge & Suites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saco River Motor Lodge & Suites | Conway NH Lodging",
    description: "Family-friendly lodging on the Saco River with pool, playground & ski packages. Minutes from North Conway & Mt Washington Valley!",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "travel",
};

// JSON-LD Structured Data for LocalBusiness/Hotel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LodgingBusiness"],
  name: "Saco River Motor Lodge & Suites",
  description: "Family-friendly motor lodge on the scenic Saco River with pool, playground, fire pits, grills, and direct river access. Pet-friendly rooms and suites available.",
  url: siteUrl,
  telephone: "+1-603-447-3720",
  email: "sacorivermotorlodge@yahoo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2626 E Main St",
    addressLocality: "Center Conway",
    addressRegion: "NH",
    postalCode: "03813",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.99799,
    longitude: -71.02629
  },
  image: `${siteUrl}/logo.png`,
  priceRange: "$$",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Outdoor Pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Playground", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fire Pits", value: true },
    { "@type": "LocationFeatureSpecification", name: "BBQ Grills", value: true },
    { "@type": "LocationFeatureSpecification", name: "River Access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cable TV", value: true },
    { "@type": "LocationFeatureSpecification", name: "Microwave", value: true },
    { "@type": "LocationFeatureSpecification", name: "Mini Fridge", value: true }
  ],
  petsAllowed: true,
  checkinTime: "16:00",
  checkoutTime: "10:00",
  starRating: {
    "@type": "Rating",
    ratingValue: "3"
  },
  sameAs: [
    "https://www.facebook.com/SacoRiverLodgeAndSuites",
    "https://www.tripadvisor.co.uk/Hotel_Review-g46054-d1210880-Reviews-Saco_River_Lodge_Suites-Conway_New_Hampshire.html"
  ]
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
          name="google-site-verification"
          content="6COctIBYaux4nJ8qSrtNZM2KbD9znr75zS16waXVt2Q"
        />
        <meta name="msvalidate.01" content="D1DB0885AC0BFD9DC68A55C757730E1B" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
