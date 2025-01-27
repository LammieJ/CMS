'use client';

export default function NewsletterForm() {
  return (
    <div className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8" itemScope itemType="https://schema.org/NewsletterService">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 dark:text-gray-200 mb-6">
        Get the latest insights, tips, and industry updates delivered directly to your inbox.
      </p>
      <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
