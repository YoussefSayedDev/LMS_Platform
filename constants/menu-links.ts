import { UserType } from "@/types/user-type";
import {
  BarChart,
  BookOpenCheck,
  ChartSpline,
  FileText,
  Home,
  LifeBuoy,
  LogOut,
  LucideIcon,
  MessageSquareWarning,
  Settings,
  User,
  UserPen,
  Users,
} from "lucide-react";
interface LinksItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subLinks?: LinksItem[];
}

interface Item {
  group: string;
  links: LinksItem[];
}

// Common link definitions
const commonLinks = [{ title: "Dashboard", url: "/dashboard", icon: Home }];

const helpLinks: LinksItem[] = [
  { title: "Support", url: "/support", icon: LifeBuoy },
  { title: "Feedback", url: "/feedback", icon: MessageSquareWarning },
];

const otherLinks: LinksItem[] = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Logout", url: "/logout", icon: LogOut },
];

// User-specific link generation function
const getUserLinks = (userType: UserType): LinksItem[] => {
  switch (userType) {
    case "STUDENT":
      return [
        ...commonLinks,
        { title: "Assignments", url: "/assignments", icon: FileText },
        {
          title: "Grades",
          url: "/grades",
          icon: ChartSpline,
          subLinks: [{ title: "Math", url: "/math", icon: BookOpenCheck }],
        },
        {
          title: "Courses",
          url: "/courses",
          icon: BookOpenCheck,
          subLinks: [{ title: "My Courses", url: "/my-courses" }],
        },
        { title: "Teacher", url: "/teacher", icon: UserPen },
        { title: "Profile", url: "/profile", icon: User },
      ];
    case "TEACHER":
      return [
        ...commonLinks,
        { title: "Dashboard", url: "/dashboard", icon: BarChart },
        { title: "Manage Classes", url: "/manage-classes", icon: Users },
        { title: "Assignments", url: "/assignments", icon: FileText },
        { title: "Profile", url: "/profile", icon: User },
      ];
    case "PARENT":
      return [
        ...commonLinks,
        { title: "Child's Progress", url: "/child-progress", icon: BarChart },
        { title: "Messages", url: "/messages", icon: Users },
        { title: "Profile", url: "/profile", icon: User },
      ];
    default:
      return commonLinks; // Default to student links
  }
};

// Main function to get menu links
export const getMenuLinks = (userType: UserType): Item[] => {
  // Generate the user-specific links
  const userLinks = {
    group: "application",
    links: getUserLinks(userType),
  };

  // Return the combined menu
  return [
    userLinks,
    { group: "help", links: helpLinks },
    { group: "other", links: otherLinks },
  ];
};
