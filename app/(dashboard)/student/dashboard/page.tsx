import { StudentGradeChart } from "@/components/charts/StudentGradeChart";
import { StudentPieChart } from "@/components/charts/StudentPieChart";
import Messages from "../components/Messages";
import MultipleCalendar from "../components/MultipleCalendar";
import StudentOverviewCard from "../components/StudentOverviewCard";
// import { StudentScheduleChart } from "@/components/charts/StudentScheduleChart";

const StudentHomePage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 pt-0 lg:flex-row">
      {/* LEFT */}
      <div className="flex w-full flex-col gap-4 lg:w-3/5">
        <div className="flex gap-4">
          <StudentOverviewCard />
          <StudentPieChart />
        </div>
        <StudentGradeChart />
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-4 lg:w-2/5">
        <MultipleCalendar />
        <Messages />
      </div>
    </div>
  );
};

export default StudentHomePage;
