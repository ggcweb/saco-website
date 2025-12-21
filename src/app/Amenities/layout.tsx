import { type Metadata } from "next";
import { generateBreadcrumbSchema, generateFAQSchema } from "~/lib/seo-config";

export const metadata: Metadata = {
    title: "Amenities - Pool, Playground & BBQ Area",
    description: "Family-friendly amenities at Saco River Motor Lodge: largest pool in Mt Washington Valley, playground, BBQ grills, picnic area & fire pits in Conway NH.",
    keywords: ["Saco River Motor Lodge amenities", "Conway NH hotel pool", "family hotel playground", "Mt Washington Valley lodging amenities", "BBQ area motel", "New Hampshire hotel with pool"],
    openGraph: {
        title: "Amenities at Saco River Motor Lodge | Pool, Playground & More",
        description: "Discover our family-friendly amenities: large pool, playground, BBQ grills, picnic area, and fire pits in the beautiful Mt Washington Valley.",
    },
};

const breadcrumbSchema = generateBreadcrumbSchema("/Amenities/");
const faqSchema = generateFAQSchema("/Amenities/");

export default function AmenitiesLayout({
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
