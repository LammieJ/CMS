"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "../ui/logo";
import { cn } from "../../lib/utils";
import { ThemeToggle } from "../theme/theme-toggle";

const serviceSubItems = [
  { href: "/services/portable-toilet-hire", label: "Portable Toilet Hire" },
  { href: "/services/luxury-toilet-hire", label: "Luxury Toilet Hire" },
  { href: "/services/event-solutions", label: "Event Solutions" },
];

const wasteSubItems = [
  { href: "/waste/wet-waste-disposal", label: "Wet Waste Disposal" },
  { href: "/waste/portable-toilet-servicing", label: "Portable Toilet Servicing" },
  { href: "/waste/welfare-unit-servicing", label: "Welfare Unit Servicing" },
  { href: "/waste/toilet-trailer-servicing", label: "Toilet Trailer Servicing" },
];

const resourcesSubItems = [
  { href: "/resources/account-applications", label: "Account Applications" },
  { href: "/resources/guides", label: "Guides" },
];

const menuItems = [
  {
    href: "/services",
    label: "Services",
    subItems: serviceSubItems,
  },
  {
    href: "/waste",
    label: "Waste",
    subItems: wasteSubItems,
  },
  { href: "/industries", label: "Industries" },
  { href: "/locations", label: "Locations" },
  { href: "/calculator", label: "Calculator" },
  {
    href: "/resources",
    label: "Resources",
    subItems: resourcesSubItems,
  },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [showContact, setShowContact] = React.useState(true);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = React.useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "unset";
      return newState;
    });
  }, []);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = "unset";
  }, []);

  const toggleDropdown = React.useCallback((href: string) => {
    setActiveDropdown((prev) => (prev === href ? null : href));
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [closeMenu]);

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          
          <button
            onClick={toggleMenu}
            className={cn(
              "lg:hidden rounded-full p-2 text-foreground dark:text-primary transition-colors duration-200",
              "hover:bg-primary/10 hover:text-primary",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              isOpen && "bg-primary/10 text-primary"
            )}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  "absolute inset-0 h-6 w-6 transition-all duration-300 transform",
                  isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                )}
                aria-hidden={isOpen}
              />
              <X
                className={cn(
                  "absolute inset-0 h-6 w-6 transition-all duration-300 transform",
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                )}
                aria-hidden={!isOpen}
              />
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.href)}
                      className="inline-flex items-center text-sm font-medium text-foreground dark:text-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div
                      className={cn(
                        "absolute left-0 mt-2 w-56 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                        "opacity-0 scale-95 transition-all duration-200 ease-in-out transform",
                        "group-hover:opacity-100 group-hover:scale-100"
                      )}
                    >
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground dark:text-primary hover:bg-accent hover:text-primary"
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground dark:text-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {showContact ? (
                <Link
                  href="/contact"
                  onClick={() => setShowContact(false)}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
                    "hover:bg-primary/90 transition-all duration-200 transform hover:scale-105",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  )}
                >
                  Contact
                </Link>
              ) : (
                <Link
                  href="tel:07534362251"
                  onClick={() => setShowContact(true)}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
                    "hover:bg-primary/90 transition-all duration-200 transform hover:scale-105",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  )}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Link>
              )}
            </div>
          </nav>
        </div>

        <div
          ref={menuRef}
          id="mobile-menu"
          className={cn(
            "fixed inset-x-0 top-[65px] bottom-0 z-50 bg-background/95 backdrop-blur-md lg:hidden",
            "transition-all duration-300 ease-in-out transform border-t",
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          )}
        >
          <nav className="h-full overflow-y-auto px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <div key={item.href}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.href)}
                      className={cn(
                        "flex w-full items-center justify-between text-lg font-medium text-foreground dark:text-primary hover:text-primary transition-all duration-200",
                        "py-2 px-4 rounded-lg hover:bg-primary/5",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        activeDropdown === item.href && "rotate-180"
                      )} />
                    </button>
                    {activeDropdown === item.href && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-2 px-4 text-sm text-foreground dark:text-primary hover:text-primary hover:bg-primary/5 rounded-lg"
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-lg font-medium text-foreground dark:text-primary hover:text-primary transition-all duration-200",
                      "py-2 px-4 rounded-lg hover:bg-primary/5",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      "transform transition-transform hover:translate-x-2"
                    )}
                    style={{
                      transitionDelay: `${index * 50}ms`
                    }}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between px-4 pt-4">
              <ThemeToggle />
              {showContact ? (
                <Link
                  href="/contact"
                  onClick={() => {
                    setShowContact(false);
                    closeMenu();
                  }}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
                    "hover:bg-primary/90 transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  )}
                >
                  Contact
                </Link>
              ) : (
                <Link
                  href="tel:07534362251"
                  onClick={() => {
                    setShowContact(true);
                    closeMenu();
                  }}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
                    "hover:bg-primary/90 transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  )}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
