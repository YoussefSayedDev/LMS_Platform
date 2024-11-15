import { StudentGradeChart } from "@/components/charts/StudentGradeChart";
import { StudentScheduleChart } from "@/components/charts/StudentScheduleChart";

const StudentPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 pt-1 lg:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        <StudentGradeChart />
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">
        <StudentScheduleChart />
      </div>
    </div>
  );
};

export default StudentPage;
