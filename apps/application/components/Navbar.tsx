"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, ModeToggle } from "ui";
import { usePathname } from "next/navigation";
import { cn } from "ui";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Data Structures", href: "/data-structures" },
    { name: "Algorithms", href: "/algorithms" },
    { name: "About", href: "/about" },
  ];

  // <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm shadow-sm border-b border-border">
  // </header>
  return (
    <nav className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">
                DSA
                <span className="text-blue-600 dark:text-blue-400">Prep</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground border-b-2 border-blue-500"
                    : "text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-blue-300",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <ModeToggle />
            <Button variant="default" size="sm">
              Sign In
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <ModeToggle />
            <button
              type="button"
              className="ml-4 inline-flex items-center justify-center rounded-md p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "text-muted-foreground hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button variant="default" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
