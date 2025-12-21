/**
 * SEO Configuration and Utilities
 * Centralized SEO data for breadcrumbs, FAQs, and keyword mapping
 */

export interface BreadcrumbItem {
    name: string;
    url: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

// Breadcrumb definitions for all pages
export const breadcrumbs: Record<string, BreadcrumbItem[]> = {
    "/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" }
    ],
    "/Amenities/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Amenities", url: "https://sacorivermotorlodge.com/Amenities/" }
    ],
    "/RoomsandSuites/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Rooms & Suites", url: "https://sacorivermotorlodge.com/RoomsandSuites/" }
    ],
    "/AreaActivities/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" }
    ],
    "/AreaActivities/MtWashington/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Mt Washington", url: "https://sacorivermotorlodge.com/AreaActivities/MtWashington/" }
    ],
    "/AreaActivities/Hiking/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Hiking", url: "https://sacorivermotorlodge.com/AreaActivities/Hiking/" }
    ],
    "/AreaActivities/SettlersGreen/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Settlers Green", url: "https://sacorivermotorlodge.com/AreaActivities/SettlersGreen/" }
    ],
    "/AreaActivities/Dining/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Dining", url: "https://sacorivermotorlodge.com/AreaActivities/Dining/" }
    ],
    "/AreaActivities/Foliage/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Fall Foliage", url: "https://sacorivermotorlodge.com/AreaActivities/Foliage/" }
    ],
    "/AreaActivities/Fair/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Fryeburg Fair", url: "https://sacorivermotorlodge.com/AreaActivities/Fair/" }
    ],
    "/AreaActivities/Train/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Conway Scenic Railroad", url: "https://sacorivermotorlodge.com/AreaActivities/Train/" }
    ],
    "/AreaActivities/Kayak/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Kayaking & River Fun", url: "https://sacorivermotorlodge.com/AreaActivities/Kayak/" }
    ],
    "/AreaActivities/Storyland/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Storyland", url: "https://sacorivermotorlodge.com/AreaActivities/Storyland/" }
    ],
    "/AreaActivities/Cranmore/": [
        { name: "Home", url: "https://sacorivermotorlodge.com/" },
        { name: "Area Activities", url: "https://sacorivermotorlodge.com/AreaActivities/" },
        { name: "Cranmore Mountain", url: "https://sacorivermotorlodge.com/AreaActivities/Cranmore/" }
    ],
};

// FAQ data for schema markup
export const faqs: Record<string, FAQItem[]> = {
    "/Amenities/": [
        {
            question: "Does Saco River Motor Lodge have a pool?",
            answer: "Yes! We have one of the largest pools in the Mt Washington Valley, perfect for families to enjoy during their stay."
        },
        {
            question: "Are pets allowed at Saco River Motor Lodge?",
            answer: "Yes, we are pet-friendly! We allow up to 2 dogs per room/suite. There is a cleaning fee of $25/night for rooms and $50/night for suites. Dogs must be on leash at all times and are not allowed in the pool area."
        },
        {
            question: "What amenities are available for families?",
            answer: "We offer a large outdoor pool, playground for children, soccer field, BBQ grills, fire pits for roasting marshmallows, picnic tables, and direct access to the Saco River for swimming, kayaking, and tubing."
        },
        {
            question: "Is WiFi available?",
            answer: "Yes, we provide free high-speed wireless internet access throughout the property."
        }
    ],
    "/RoomsandSuites/": [
        {
            question: "What types of rooms are available?",
            answer: "We offer King rooms with 1 king bed, Double rooms with 2 queen beds, and spacious Suites with 2-3 bedrooms, full kitchens, and private decks."
        },
        {
            question: "What amenities are included in the rooms?",
            answer: "All rooms include flat screen TV with cable, air conditioning, coffee maker, mini-fridge, microwave, free WiFi, and bathroom with large shower."
        },
        {
            question: "What is the check-in and check-out time?",
            answer: "Check-in is from 4 PM to 9 PM. Check-out is 10 AM for rooms and 10:30 AM for suites."
        },
        {
            question: "What is the cancellation policy?",
            answer: "Cancellations must be made by phone to a staff member. No cancellation is allowed after 48 hours for rooms and 7 days for suites. No cancellations are allowed during Fryeburg Fair week."
        },
        {
            question: "Are the rooms non-smoking?",
            answer: "Yes, all rooms and suites are non-smoking."
        }
    ],
    "/AreaActivities/": [
        {
            question: "What activities are available near Saco River Motor Lodge?",
            answer: "The Mt Washington Valley offers skiing at 5 major resorts, hiking trails, tax-free outlet shopping at Settler's Green, Storyland theme park, Conway Scenic Railroad, Saco River kayaking and tubing, the Fryeburg Fair, and over 60 restaurants."
        },
        {
            question: "How far is the lodge from North Conway?",
            answer: "We are located just minutes from North Conway, making it easy to access shopping, dining, and attractions."
        },
        {
            question: "What ski resorts are nearby?",
            answer: "We are close to Attitash, Wildcat, Cranmore, Black Mountain, and Shawnee Peak. We offer ski packages - call for details!"
        },
        {
            question: "Can I go kayaking or tubing on the Saco River?",
            answer: "Yes! The Saco River is right next to our property. We have canoe and kayak rentals available for guests, and there are also rental companies nearby like Saco Bound."
        }
    ]
};

// Primary keyword mapping for each page
export const keywordMap: Record<string, string> = {
    "/": "Conway NH Hotels",
    "/Amenities/": "Conway NH Hotel Pool",
    "/RoomsandSuites/": "Conway NH Hotel Rooms",
    "/AreaActivities/": "Mt Washington Valley Activities",
    "/AreaActivities/MtWashington/": "Mt Washington Lodging",
    "/AreaActivities/Hiking/": "White Mountains Hiking",
    "/AreaActivities/SettlersGreen/": "Settlers Green Shopping",
    "/AreaActivities/Dining/": "North Conway Restaurants",
    "/AreaActivities/Foliage/": "Fall Foliage New Hampshire",
    "/AreaActivities/Fair/": "Fryeburg Fair Lodging",
    "/AreaActivities/Train/": "Conway Scenic Railroad",
    "/AreaActivities/Kayak/": "Saco River Kayaking",
    "/AreaActivities/Storyland/": "Storyland Hotel",
    "/AreaActivities/Cranmore/": "Cranmore Mountain Lodging",
};

/**
 * Generate Breadcrumb Schema JSON-LD
 */
export function generateBreadcrumbSchema(path: string) {
    const items = breadcrumbs[path] ?? breadcrumbs["/"];

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": (items ?? []).map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

/**
 * Generate FAQ Schema JSON-LD
 */
export function generateFAQSchema(path: string) {
    const faqItems = faqs[path];

    if (!faqItems || faqItems.length === 0) {
        return null;
    }

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}
