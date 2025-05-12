import Link from "next/link";
import Image from "next/image";
import { Button } from "ui";
import { CourseCard } from "@/components/CourseCard";
import { Course, CourseDifficulty } from "types";

export default function Home() {
  // Example content for featured courses
  const featuredDataStructures: Course[] = [
    {
      id: "arrays",
      title: "Arrays",
      description:
        "Learn about the most fundamental data structure in programming.",
      icon: "array",
      difficulty: CourseDifficulty.Beginner,
    },
    {
      id: "linked-lists",
      title: "Linked Lists",
      description: "Understand how linked lists work and when to use them.",
      icon: "linked-list",
      difficulty: CourseDifficulty.Intermediate,
    },
    {
      id: "binary-trees",
      title: "Binary Trees",
      description: "Explore tree structures and their applications.",
      icon: "tree",
      difficulty: CourseDifficulty.Intermediate,
    },
  ];

  const featuredAlgorithms: Course[] = [
    {
      id: "sorting",
      title: "Sorting Algorithms",
      description: "Compare different ways to sort data efficiently.",
      icon: "sort",
      difficulty: CourseDifficulty.Beginner,
    },
    {
      id: "searching",
      title: "Searching Algorithms",
      description: "Learn how to find elements in different data structures.",
      icon: "search",
      difficulty: CourseDifficulty.Beginner,
    },
    {
      id: "graph-traversal",
      title: "Graph Traversal",
      description: "Discover methods to visit all nodes in a graph.",
      icon: "graph",
      difficulty: CourseDifficulty.Advanced,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal tracking-tight gradient-heading">
              Master Data Structures & Algorithms
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Learn through visual explanations and interactive coding
              exercises. Build your skills step-by-step with our guided courses.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform breaks down complex concepts into simple, digestible
              lessons with visual aids and practical exercises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Learn Concepts</h3>
              <p className="mt-2 text-muted-foreground">
                Understand how each data structure and algorithm works with
                clear explanations and visualizations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Build It Yourself</h3>
              <p className="mt-2 text-muted-foreground">
                Apply what you've learned by implementing algorithms and data
                structures in guided, interactive exercises.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">See It in Action</h3>
              <p className="mt-2 text-muted-foreground">
                Watch your code come to life through dynamic visualizations that
                demonstrate your implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Data Structures */}
      <section className="py-16 bg-secondary/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">Data Structures</h2>
              <p className="mt-2 text-muted-foreground">
                The building blocks for efficient data organization
              </p>
            </div>
            <Link
              href="/data-structures"
              className="mt-4 md:mt-0 text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
            >
              View all data structures
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDataStructures.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Algorithms */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">Algorithms</h2>
              <p className="mt-2 text-muted-foreground">
                Step-by-step procedures for solving computational problems
              </p>
            </div>
            <Link
              href="/algorithms"
              className="mt-4 md:mt-0 text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
            >
              View all algorithms
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAlgorithms.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to master DSA?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Join thousands of learners who have improved their coding skills
              and interview readiness with our interactive platform.
            </p>
            <div className="mt-10">
              <Button size="lg" className="text-base px-8">
                Start Learning Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
