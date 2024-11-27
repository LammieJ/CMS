import type { Metadata } from "next";
import Link from "next/link";
import { FileIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides & Resources | CMS Toilet Hire",
  description: "Access our comprehensive guides and resources for construction compliance and event planning.",
};

export default function Guides() {
  const guides = [
    {
      title: "Construction Site Compliance Guide",
      description: "Essential information about toilet facilities requirements for construction sites, including regulations and best practices.",
      path: "/guides/construction-compliance.pdf",
      icon: FileIcon,
    },
    {
      title: "Event Planning Checklist",
      description: "Complete checklist for planning event sanitation, including calculating facility requirements and positioning guidelines.",
      path: "/guides/event-planning-checklist.pdf",
      icon: FileIcon,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Guides & Resources</h1>
      
      <div className="grid gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.title}
            href={guide.path}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <guide.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">{guide.title}</h2>
                <p className="dark:text-primary">{guide.description}</p>
                <span className="inline-block mt-4 text-primary font-medium">
                  Download PDF →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Need Additional Help?</h2>
        <p className="dark:text-primary mb-4">
          Our team is available to provide expert guidance on toilet hire requirements for your specific needs.
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
