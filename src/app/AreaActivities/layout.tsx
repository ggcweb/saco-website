import { type Metadata } from "next";
import { generateBreadcrumbSchema, generateFAQSchema } from "~/lib/seo-config";

export const metadata: Metadata = {
    title: "Area Activities - Skiing, Hiking, Shopping & Attractions",
    description: "Mt Washington Valley activities: skiing at Attitash, Wildcat & Cranmore, hiking, Settler's Green outlets, Storyland, Fryeburg Fair & Saco River kayaking.",
    keywords: ["Mt Washington Valley activities", "North Conway attractions", "Conway NH things to do", "Fryeburg Fair lodging", "Attitash ski lodge", "Storyland hotel", "White Mountains hiking", "Settler's Green shopping", "Saco River kayaking"],
    openGraph: {
        title: "Area Activities Near Saco River Motor Lodge | Mt Washington Valley",
        description: "Explore skiing, hiking, shopping, theme parks & more! We're minutes from Attitash, Cranmore, Storyland, Settler's Green, and the scenic Saco River.",
    },
};

const breadcrumbSchema = generateBreadcrumbSchema("/AreaActivities/");
const faqSchema = generateFAQSchema("/AreaActivities/");

export default function ActivitiesLayout({
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
