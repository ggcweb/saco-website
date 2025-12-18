import { type Metadata } from "next";
import settlers from "~/static/Pictures/outlet.png"
import Image from "next/image";

export const metadata: Metadata = {
  title: "Settlers Green Outlet Village - Tax-Free Shopping",
  description: "Shop at Settlers Green Outlet Village in North Conway, NH. Over 60 brands, tax-free shopping, and dining just minutes from Saco River Motor Lodge.",
};

export default function SettlersGreen() {
  return (
    <>
      <div className="flex flex-col items-center bg-input">
        <h3 className="text-sm lg:text-2xl pt-4 underline font-bold">Settlers Green Outlet Village</h3>
        <Image src={settlers} alt="" className="w-6/12 pt-4 pb-4" />
        <div className="text-center font-bold text-xl p-8">
          Settlers’ Green Outlet Village is a courtyard inspired outlet shopping center in North Conway, New Hampshire. Shop more than 60 national brand name outlet stores and specialty shops and save 30%-60% every day on fashions, accessories, jewelry, home furnishings, intimate apparel, shoes, children&#39;s fashions and more.
        </div>
      </div>
    </>
  )
}

