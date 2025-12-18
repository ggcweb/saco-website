"use client"

import { Phone, Mail, MapPin, Facebook, Star } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="footer" className="bg-ocean-deep text-white">
      {/* CTA Section */}
      <div className="bg-red-600 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">
            Come experience the White Mountains and Saco River
          </h3>
          <p className="text-white/90">
            Explore all the possibilities right outside our door...
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:603-447-3720"
                  className="flex items-center gap-3 hover:text-red-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>603-447-3720</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sacorivermotorlodge@yahoo.com"
                  className="flex items-center gap-3 hover:text-red-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">sacorivermotorlodge@yahoo.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <p>Saco River Motor Lodge & Suites</p>
                    <p>2626 E Main St</p>
                    <p>Center Conway, NH 03813</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/SacoRiverLodgeAndSuites"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tripadvisor.co.uk/Hotel_Review-g46054-d1210880-Reviews-Saco_River_Lodge_Suites-Conway_New_Hampshire.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors"
                aria-label="TripAdvisor"
              >
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/RoomsandSuites" className="hover:text-red-400 transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/Amenities" className="hover:text-red-400 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/AreaActivities" className="hover:text-red-400 transition-colors">
                  Area Activities
                </Link>
              </li>
              <li>
                <a
                  href="https://reservation.asiwebres.com/v4/RoomAvailability.aspx?id=00e22842fd1a4b53bf3d6654ca2f1b9f&lang=en&Curr=1"
                  className="hover:text-red-400 transition-colors"
                >
                  Make a Reservation
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-display font-semibold mb-6">Find Us</h4>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.1322994891875!2d-71.02628952380483!3d43.99799087108794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb30804b53313e5%3A0x16fc93b01db91ab!2sSaco%20River%20Motor%20Lodge!5e0!3m2!1sen!2sus!4v1721757700878!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Saco River Motor Lodge Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Saco River Motor Lodge & Suites. All rights reserved.</p>
          <p>A Krishna Garg Production</p>
        </div>
      </div>
    </footer>
  )
}