import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Rooms & Suites - King Rooms, Double Rooms & Family Suites",
    description: "Browse our comfortable accommodations at Saco River Motor Lodge: King rooms, double rooms, and spacious 2-3 bedroom suites with full kitchens. All rooms feature cable TV, A/C, microwave, and mini-fridge. Pet-friendly options available.",
    keywords: ["Saco River Motor Lodge rooms", "Conway NH hotel rooms", "North Conway suites", "Mt Washington Valley accommodations", "pet friendly hotel rooms NH", "family suites Conway", "motel rooms White Mountains"],
    openGraph: {
        title: "Rooms & Suites at Saco River Motor Lodge | Conway NH Accommodations",
        description: "Comfortable King rooms, double rooms & spacious family suites with full kitchens. Pet-friendly. Perfect for your Mt Washington Valley getaway.",
    },
};

export default function RoomsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
