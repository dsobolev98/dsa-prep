import { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
import { dataStructureOptions } from "./utilities";

export const metadata: Metadata = {
  title: "Data Structures - DSA Prep",
  description:
    "Learn essential data structures with interactive visualizations and coding exercises",
};

export default function DataStructuresPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold gradient-heading leading-normal tracking-tight">
              Data Structures
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Data structures are specialized formats for organizing and storing
              data. Learn how to use them efficiently to optimize your
              algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataStructureOptions.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
