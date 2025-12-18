import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Amenities - Pool, Playground & BBQ Area",
    description: "Explore the family-friendly amenities at Saco River Motor Lodge including one of the largest pools in Mt Washington Valley, playground, BBQ grills, picnic area, and fire pits. Perfect for family vacations in Conway NH.",
    keywords: ["Saco River Motor Lodge amenities", "Conway NH hotel pool", "family hotel playground", "Mt Washington Valley lodging amenities", "BBQ area motel", "New Hampshire hotel with pool"],
    openGraph: {
        title: "Amenities at Saco River Motor Lodge | Pool, Playground & More",
        description: "Discover our family-friendly amenities: large pool, playground, BBQ grills, picnic area, and fire pits in the beautiful Mt Washington Valley.",
    },
};

export default function AmenitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
