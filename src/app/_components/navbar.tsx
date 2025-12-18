"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "/RoomsandSuites", label: "Rooms & Suites" },
    { href: "/Amenities", label: "Amenities" },
    { href: "/AreaActivities", label: "Area Activities" },
    { href: "#footer", label: "Contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass shadow-lg py-2'
          : 'bg-transparent py-4'
          }`}
      >
        <nav className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/logo.png"
              alt="Saco River Motor Lodge Logo"
              width={800}
              height={600}
              className={`transition-all duration-300 ${isScrolled ? 'h-12 w-auto' : 'h-16 w-auto'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${isScrolled
                    ? 'text-ocean-deep hover:bg-ocean-deep/10'
                    : 'text-white hover:bg-white/20'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Rules Dialog */}
            <li>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${isScrolled
                      ? 'text-ocean-deep hover:bg-ocean-deep/10'
                      : 'text-white hover:bg-white/20'
                      }`}
                  >
                    Policies
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-display text-ocean-deep text-center">
                      Rules & Policies
                    </DialogTitle>
                  </DialogHeader>
                  <Tabs defaultValue="gen" className="mt-4">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="gen">General Policies</TabsTrigger>
                      <TabsTrigger value="dogs">Pet Policies</TabsTrigger>
                    </TabsList>
                    <TabsContent value="gen" className="mt-4">
                      <DialogDescription asChild>
                        <ul className="space-y-3 text-sm text-foreground">
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            ALL RESERVATIONS MUST BE MADE WITH A CREDIT CARD.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            CANCELLATIONS MUST BE MADE BY PHONE TO A MEMBER OF STAFF AT THE LODGE (NO EMAIL OR VOICE MAIL MESSAGES ACCEPTED).
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            THERE IS NO CANCELLATION AFTER 48 HOURS FOR ROOMS AND 7 DAYS FOR THE SUITES, IF THE RESERVATION IS CANCELLED AFTER 48 HOURS FOR ROOMS AND 7 DAYS FOR SUITES THE FULL AMOUNT OF THE STAY WILL BE CHARGED.
                          </li>
                          <li className="flex gap-2 font-semibold text-ocean-deep">
                            <span className="text-red-500">•</span>
                            No cancellation allowed during Fryeburg Fair week
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            CHECK IN IS ANYTIME AFTER 4 P.M. TO 9 P.M. CHECK OUT IS 10 A.M. (ROOMS) 10:30 A.M. (SUITES)
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            ALL ROOMS ARE NON-SMOKING. SHOULD GUESTS WISH TO SMOKE, SEATING IS PROVIDED OUTSIDE.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            IN THE EVENT OF A LATE ARRIVAL PLEASE NOTIFY THE FRONT DESK AND WE WILL MAKE NECESSARY ARRANGEMENTS
                          </li>
                          <li className="text-xs text-muted-foreground mt-4">
                            Saco River Motor Lodge will not be held liable for any injury, damage or loss involving the Canoeing, kayaking, and tubing activities.
                          </li>
                        </ul>
                      </DialogDescription>
                    </TabsContent>
                    <TabsContent value="dogs" className="mt-4">
                      <DialogDescription asChild>
                        <ul className="space-y-3 text-sm text-foreground">
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            MAXIMUM OF 2 DOGS PER ROOM AND SUITE
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            WE ACCEPT DOGS IN SOME MOTEL ROOMS AND SUITES. YOU MUST LET US KNOW WHEN MAKING A RESERVATION THAT YOU INTEND TO BRING YOUR DOG WITH YOU. THE ONLY CHARGE IS AN ADDITIONAL CLEANING FEE OF <strong>$25/night</strong> FOR THE ROOMS AND <strong>$50/night</strong> FOR THE SUITES NO MATTER HOW LONG YOU STAY.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            DOGS MUST BE KEPT ON A LEASH AT ALL TIMES
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            DOGS SHOULD BE WALKED ON THE FIELD AT THE SIDE OF THE MOTEL, AND GUESTS MUST CLEAN UP AFTER THEIR DOGS.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            PLEASE KEEP YOUR DOGS OFF THE BEDS.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            PLEASE DO NOT USE OUR ROOM TOWELS ON YOUR DOG
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            DOGS ARE NOT ALLOWED IN THE POOL AREA.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-red-500">•</span>
                            DOGS SHOULD NOT, UNDER ANY CIRCUMSTANCES, BE LEFT UNATTENDED IN A ROOM, NOT EVEN IN A CRATE, AS EXCESSIVE BARKING CAN DISTURB OTHER GUESTS.
                          </li>
                        </ul>
                      </DialogDescription>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </li>
          </ul>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Phone (Desktop) */}
            <a
              href="tel:603-447-3720"
              className={`hidden lg:flex items-center gap-2 font-medium transition-colors ${isScrolled ? 'text-ocean-deep' : 'text-white'
                }`}
            >
              <Phone className="w-4 h-4" />
              603-447-3720
            </a>

            {/* Book Button */}
            <Link
              href="https://reservation.asiwebres.com/v4/RoomAvailability.aspx?id=00e22842fd1a4b53bf3d6654ca2f1b9f&lang=en&Curr=1"
              className="hidden md:block btn-red text-sm py-3 px-6"
            >
              Book Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-ocean-deep' : 'text-white'
                }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 glass shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-ocean-deep font-medium hover:bg-ocean-deep/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://reservation.asiwebres.com/v4/RoomAvailability.aspx?id=00e22842fd1a4b53bf3d6654ca2f1b9f&lang=en&Curr=1"
                  onClick={() => setIsMenuOpen(false)}
                  className="block btn-red text-center mt-4"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-0" />
    </>
  )
}

