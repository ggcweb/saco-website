"use client"

import * as React from "react"
import { type LucideIcon } from "lucide-react"

type FeatureCardProps = {
    icon: LucideIcon
    title: string
    description: string
    delay?: number
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    icon: Icon,
    title,
    description,
    delay = 0
}) => {
    return (
        <div
            className="group flex flex-col items-center p-8 rounded-2xl bg-white shadow-lg card-hover text-center"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Icon Container with Gradient Background */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-ocean-deep to-ocean-light text-white transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-ocean-deep/30">
                <Icon className="h-8 w-8" />
            </div>

            {/* Title */}
            <h3 className="font-display text-xl font-semibold text-ocean-deep mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
            </p>
        </div>
    )
}
