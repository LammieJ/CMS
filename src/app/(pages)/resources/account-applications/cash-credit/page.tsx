import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cash & Credit Account Application | CMS Toilet Hire",
  description: "Apply for a Cash or Credit account with CMS Toilet Hire. Complete our application form to get started.",
};

const inputClasses = "w-full px-3 py-2 border-2 border-gray-500 rounded-md bg-gray-100 focus:border-primary focus:ring-1 focus:ring-primary text-gray-900";
const selectClasses = "w-full px-3 py-2 border-2 border-gray-500 rounded-md bg-gray-100 focus:border-primary focus:ring-1 focus:ring-primary text-gray-900";
const checkboxClasses = "rounded border-2 border-gray-500 text-primary focus:ring-primary";
const labelClasses = "block text-sm font-medium mb-2 dark:text-primary";
const sectionTitleClasses = "text-lg font-medium mb-4 dark:text-primary";

export default function CashCreditApplication() {
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
        <h1 className="text-2xl font-semibold mb-6">Cash & Credit Account Application</h1>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>Trading Name *</label>
              <input type="text" className={inputClasses} required />
            </div>
            <div>
              <label className={labelClasses}>Company Registration Number</label>
              <input type="text" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>VAT Number</label>
              <input type="text" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>Business Type *</label>
              <select className={selectClasses} required>
                <option value="">Select Business Type</option>
                <option value="limited">Limited Company</option>
                <option value="sole-trader">Sole Trader</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className={sectionTitleClasses}>Business Address</h3>
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
            <h3 className={sectionTitleClasses}>Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Contact Name *</label>
                <input type="text" className={inputClasses} required />
              </div>
              <div>
                <label className={labelClasses}>Position *</label>
                <input type="text" className={inputClasses} required />
              </div>
              <div>
                <label className={labelClasses}>Email *</label>
                <input type="email" className={inputClasses} required />
              </div>
              <div>
                <label className={labelClasses}>Phone *</label>
                <input type="tel" className={inputClasses} required />
              </div>
            </div>
          </div>

          <div>
            <h3 className={sectionTitleClasses}>Account Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className={checkboxClasses} />
                  <span className="dark:text-primary">I would like to receive email invoices</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className={checkboxClasses} />
                  <span className="dark:text-primary">Purchase order numbers are required for all orders</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className={checkboxClasses} required />
                  <span className="dark:text-primary">I agree to the terms and conditions</span>
                </label>
              </div>
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
