import { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
import { algorithmOptions } from "./utilities.ts";

export const metadata: Metadata = {
  title: "Algorithms - DSA Prep",
  description:
    "Learn essential algorithms with interactive visualizations and coding exercises",
};

export default function AlgorithmsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold gradient-heading leading-normal tracking-tight">
              Algorithms
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Algorithms are step-by-step procedures for solving computational
              problems. Master these techniques to become a more efficient
              programmer.
            </p>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {algorithmOptions.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
