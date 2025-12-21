import { type Metadata } from "next";
import { generateBreadcrumbSchema, generateFAQSchema } from "~/lib/seo-config";

export const metadata: Metadata = {
    title: "Rooms & Suites - King Rooms, Double Rooms & Family Suites",
    description: "Comfortable rooms at Saco River Motor Lodge: King rooms, double rooms & 2-3 bedroom suites with full kitchens. Cable TV, A/C, WiFi. Pet-friendly in Conway NH.",
    keywords: ["Saco River Motor Lodge rooms", "Conway NH hotel rooms", "North Conway suites", "Mt Washington Valley accommodations", "pet friendly hotel rooms NH", "family suites Conway", "motel rooms White Mountains"],
    openGraph: {
        title: "Rooms & Suites at Saco River Motor Lodge | Conway NH Accommodations",
        description: "Comfortable King rooms, double rooms & spacious family suites with full kitchens. Pet-friendly. Perfect for your Mt Washington Valley getaway.",
    },
};

const breadcrumbSchema = generateBreadcrumbSchema("/RoomsandSuites/");
const faqSchema = generateFAQSchema("/RoomsandSuites/");

export default function RoomsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            {children}
        </>
    );
}
