import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pay As You Go Account Application | CMS Toilet Hire",
  description: "Apply for a Pay As You Go account with CMS Toilet Hire. Complete our application form to get started.",
};

const inputClasses = "w-full px-3 py-2 border-2 border-gray-500 rounded-md bg-gray-100 focus:border-primary focus:ring-1 focus:ring-primary text-gray-900";
const fileInputClasses = "w-full px-3 py-2 border-2 border-gray-500 rounded-md bg-gray-100 focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90";
const checkboxClasses = "rounded border-2 border-gray-500 text-primary focus:ring-primary";
const labelClasses = "block text-sm font-medium mb-2 dark:text-primary";
const sectionTitleClasses = "text-lg font-medium mb-4 dark:text-primary";

export default function PayAsYouGoApplication() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link 
          href="/resources/account-applications"
          className="text-primary hover:text-primary/90 transition-colors"
        >
          ← Back to Account Types
        </Link>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Pay As You Go Account Application</h1>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>Full Name *</label>
              <input type="text" className={inputClasses} required />
            </div>
            <div>
              <label className={labelClasses}>Email *</label>
              <input type="email" className={inputClasses} required />
            </div>
            <div>
              <label className={labelClasses}>Mobile Number *</label>
              <input type="tel" className={inputClasses} required />
            </div>
            <div>
              <label className={labelClasses}>TradePoint Number (if applicable)</label>
              <input type="text" className={inputClasses} />
            </div>
          </div>

          <div>
            <h3 className={sectionTitleClasses}>Address</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Address Line 1 *</label>
                <input type="text" className={inputClasses} required />
              </div>
              <div>
                <label className={labelClasses}>Address Line 2</label>
                <input type="text" className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>City *</label>
                <input type="text" className={inputClasses} required />
              </div>
              <div>
                <label className={labelClasses}>Postcode *</label>
                <input type="text" className={inputClasses} required />
              </div>
            </div>
          </div>

          <div>
            <h3 className={sectionTitleClasses}>Identification</h3>
            <div className="space-y-4">
              <div>
                <label className={labelClasses}>Primary ID (Driver's License or Passport) *</label>
                <input type="file" className={fileInputClasses} required />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Please provide a clear photo or scan</p>
              </div>
              <div>
                <label className={labelClasses}>Secondary ID (Recent Utility Bill) *</label>
                <input type="file" className={fileInputClasses} required />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Must be dated within the last 3 months</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className={checkboxClasses} required />
                <span className="dark:text-primary">I confirm that all provided information is accurate</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className={checkboxClasses} required />
                <span className="dark:text-primary">I agree to the terms and conditions</span>
              </label>
            </div>
          </div>

          <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
