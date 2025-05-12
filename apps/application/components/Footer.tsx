import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">
                DSA
                <span className="text-blue-600 dark:text-blue-400">Prep</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              An interactive platform to learn and practice data structures and
              algorithms through visual learning and hands-on coding exercises.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/data-structures"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Data Structures
                </Link>
              </li>
              <li>
                <Link
                  href="/algorithms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Algorithms
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Practice Challenges
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DSAPrep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
