"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TermsModal from "@/components/ui/terms-modal";

export default function AccountApplications() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const handleApplyClick = (formType: string) => {
    setSelectedForm(formType);
    setIsModalOpen(true);
  };

  const handleAcceptTerms = () => {
    if (selectedForm === 'cash-credit') {
      router.push('/resources/account-applications/cash-credit');
    } else if (selectedForm === 'pay-as-you-go') {
      router.push('/resources/account-applications/pay-as-you-go');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Account Applications</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Account Types Overview</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Cash Account */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cash Account</h3>
            <p className="mb-4">Perfect for short-term or one-off rentals with upfront payment. Minimal setup required.</p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-sm">
              <li>Immediate account setup</li>
              <li>Pay-as-you-go flexibility</li>
              <li>Simple deposit policy</li>
              <li>Ideal for short-term projects</li>
            </ul>
            <button 
              onClick={() => handleApplyClick('cash-credit')}
              className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Credit Account */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Credit Account</h3>
            <p className="mb-4">Tailored for businesses requiring regular rentals with flexible payment terms.</p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-sm">
              <li>30-day payment terms</li>
              <li>Dedicated account manager</li>
              <li>Priority service</li>
              <li>Volume discounts available</li>
            </ul>
            <button 
              onClick={() => handleApplyClick('cash-credit')}
              className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Pay As You Go Account */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Pay As You Go</h3>
            <p className="mb-4">Ideal for occasional users who prefer flexibility with per-use billing.</p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-sm">
              <li>No minimum commitment</li>
              <li>Simple billing process</li>
              <li>Online payment options</li>
              <li>Perfect for individuals</li>
            </ul>
            <button 
              onClick={() => handleApplyClick('pay-as-you-go')}
              className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <TermsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAccept={handleAcceptTerms}
      />
    </div>
  );
}
