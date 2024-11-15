import { Separator } from "@/components/ui/separator";
import { courses } from "@/constants/courses";
import { CourseCard } from "../components/CourseCard";

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-background p-5 pt-1">
      <h1 className="mb-4 text-2xl font-bold text-foreground">
        Courses Your Analysis
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Separator className="my-5" />
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        Recommendation Courses
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
    </div>
  );
};

export default CoursePage;
