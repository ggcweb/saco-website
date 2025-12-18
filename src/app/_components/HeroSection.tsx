"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

type HeroSectionProps = {
    backgroundImage: StaticImageData
    title: string
    subtitle: string
    ctaText?: string
    ctaLink?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    backgroundImage,
    title,
    subtitle,
    ctaText = "Book Your Stay",
    ctaLink = "https://reservation.asiwebres.com/v4/RoomAvailability.aspx?id=00e22842fd1a4b53bf3d6654ca2f1b9f&lang=en&Curr=1"
}) => {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Saco River Motor Lodge - scenic view of the White Mountains"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/60 via-ocean-deep/40 to-ocean-deep/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                {/* Animated Title */}
                <h1 className="heading-display mb-6 max-w-4xl animate-fade-in-up text-white drop-shadow-lg">
                    {title}
                </h1>

                {/* Subtitle with delay */}
                <p className="mb-10 max-w-2xl animate-fade-in-up text-lg font-light opacity-0 delay-200 md:text-xl lg:text-2xl" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                    {subtitle}
                </p>

                {/* CTA Button */}
                <Link
                    href={ctaLink}
                    className="btn-red animate-fade-in-up animate-pulse-glow opacity-0"
                    style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
                >
                    {ctaText}
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 text-white/80">
                    <span className="text-sm font-light tracking-widest uppercase">Explore</span>
                    <svg
                        className="h-6 w-6 animate-scroll-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    )
}
