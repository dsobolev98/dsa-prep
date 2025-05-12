// import Link from "next/link";
// import { HeroIcon } from "@/components/ui/HeroIcon";
// import { cn } from "ui";
// import { Course } from "@/interface";

// interface CourseCardProps {
//   course: Course;
//   type: "data-structure" | "algorithm";
// }

// export function CourseCard({ course, type }: CourseCardProps) {
//   const { id, title, description, icon, difficulty } = course;

//   const difficultyColor = {
//     Beginner:
//       "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
//     Intermediate:
//       "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
//     Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
//   }[difficulty];

//   const href =
//     type === "data-structure" ? `/data-structures/${id}` : `/algorithms/${id}`;

//   return (
//     <Link href={href} className="block group">
//       <div className="relative rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//         <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-blue-100 dark:bg-blue-900/20 rounded-full"></div>

//         <div className="relative">
//           <HeroIcon
//             name={icon}
//             className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4"
//           />

//           <span
//             className={cn(
//               "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
//               difficultyColor,
//             )}
//           >
//             {difficulty}
//           </span>

//           <h3 className="mt-2 text-xl font-semibold text-foreground">
//             {title}
//           </h3>

//           <p className="mt-2 text-sm text-muted-foreground">{description}</p>

//           <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
//             Start learning
//             <svg
//               className="ml-1 w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

import { cn, Icon, IconName } from "ui";
import { Button } from "ui";
import { Course } from "types";

interface CourseProps extends Course {
  label?: string;
}

interface CourseCardProps {
  course: CourseProps;
  type?: "default" | "featured";
}

export function CourseCard({ course, type = "default" }: CourseCardProps) {
  const isFeatured = type === "featured";

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-lg border p-5 transition-all hover:shadow-md",
        isFeatured ? "border-primary/50 bg-primary/5" : "border-border",
      )}
    >
      {/* Card Header */}
      <div className="mb-3 flex items-start justify-between">
        {course.icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
            <Icon name={course.icon} className="h-6 w-6 text-primary" />
          </div>
        )}

        {course.label && (
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
            {course.label}
          </span>
        )}
      </div>

      {/* Card Content - Set to grow to take available space */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {course.description}
        </p>
      </div>

      {/* Card Footer - Always at the bottom of the card */}
      <div className="mt-4 pt-3">
        <Button variant={isFeatured ? "default" : "outline"} className="w-full">
          Start Learning
          {/* <Icon name="arrow-right" className="ml-2 h-4 w-4" /> */}
        </Button>
      </div>
    </div>
  );
}
