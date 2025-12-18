"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

type RoomCardProps = {
    name: string
    image: StaticImageData
    description?: string
    link?: string
}

export const RoomCard: React.FC<RoomCardProps> = ({
    name,
    image,
    description,
    link
}) => {
    const CardContent = () => (
        <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg card-hover">
            {/* Image with Zoom */}
            <div className="img-zoom absolute inset-0">
                <Image
                    src={image}
                    alt={`${name} at Saco River Motor Lodge - comfortable accommodations in Conway NH`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-transparent transition-all duration-500 group-hover:from-ocean-deep/95" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {name}
                </h3>
                {description && (
                    <p className="text-white/80 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {description}
                    </p>
                )}
                <div className="mt-4 flex items-center gap-2 text-red-500 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-sm font-medium">View Details</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    )

    if (link) {
        return (
            <Link href={link} className="block">
                <CardContent />
            </Link>
        )
    }

    return <CardContent />
}
