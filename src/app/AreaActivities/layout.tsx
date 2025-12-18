import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Area Activities - Skiing, Hiking, Shopping & Attractions",
    description: "Discover Mt Washington Valley activities near Saco River Motor Lodge: skiing at Attitash, Wildcat & Cranmore, hiking trails, Settler's Green outlets, Storyland, Fryeburg Fair, Saco River kayaking, and scenic train rides.",
    keywords: ["Mt Washington Valley activities", "North Conway attractions", "Conway NH things to do", "Fryeburg Fair lodging", "Attitash ski lodge", "Storyland hotel", "White Mountains hiking", "Settler's Green shopping", "Saco River kayaking"],
    openGraph: {
        title: "Area Activities Near Saco River Motor Lodge | Mt Washington Valley",
        description: "Explore skiing, hiking, shopping, theme parks & more! We're minutes from Attitash, Cranmore, Storyland, Settler's Green, and the scenic Saco River.",
    },
};

export default function ActivitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
