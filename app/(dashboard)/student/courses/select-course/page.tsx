"use client";
import { courses } from "@/constants/courses";
import { cn } from "@/lib/utils";
import { Course } from "@/types/courses";
import { useState } from "react";

const SelectCoursePage = () => {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const maxSelectionLimit = 5; // Limit the number of courses a student can select

  const handleSelectCourse = (course: Course) => {
    const isSelected = selectedCourses.some((c) => c.id === course.id);

    // If course is already selected, deselect it
    if (isSelected) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    }
    // If course is not selected and limit has not been reached, select it
    else if (selectedCourses.length < maxSelectionLimit) {
      setSelectedCourses([...selectedCourses, course]);
    } else {
      // Optionally, show a message if the limit is exceeded
      alert(`You can select up to ${maxSelectionLimit} courses.`);
    }
  };

  const handleConfirmSelection = () => {
    // Handle form submission or confirmation logic (e.g., saving to the database)
    alert("Your selected courses have been confirmed!");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="mb-4 text-2xl font-bold text-foreground">
        Choose Your Courses
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course: Course) => (
          <div
            key={course.id}
            className={cn(
              "cursor-pointer rounded-lg p-4 shadow-lg",
              course.color,
              selectedCourses.some((c) => c.id === course.id)
                ? "border-4 border-blue-500" // Highlight selected courses with a border
                : "",
            )}
            onClick={() => handleSelectCourse(course)}
          >
            <h2 className="text-lg font-semibold text-foreground">
              {course.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              {course.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-foreground">
          Selected Courses
        </h2>
        <ul className="list-disc pl-6">
          {selectedCourses.map((course) => (
            <li key={course.id} className="text-lg text-foreground">
              {course.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <button
          onClick={handleConfirmSelection}
          className="mt-4 rounded-lg bg-green-500 px-4 py-2 text-white"
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

export default SelectCoursePage;
