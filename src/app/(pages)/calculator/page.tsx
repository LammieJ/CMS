import PortableToiletCalculator from "@/components/calculator/portable-toilet-calculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portable Toilet Calculator | Chelford Mobile Services",
  description: "Calculate the number of portable toilets needed for your event based on attendance, duration, and other factors.",
};

export default function CalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-[600px] mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          <PortableToiletCalculator />
        </div>
      </div>
    </div>
  );
}
