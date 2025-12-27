import React from "react";
import { ArrowRight } from "lucide-react";

interface RequestItemProps {
  title: string;
  equipment: string;
  priority: "High" | "Critical" | "Medium";
  status: "New" | "In Progress" | "Scheduled";
  date: string;
  assignedTo?: string;
  isOverdue?: boolean;
}

const PriorityBadge = ({ priority }: { priority: RequestItemProps["priority"] }) => {
  const styles = {
    High: "bg-orange-100 text-orange-800",
    Critical: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full px-2.5 py-0.5 text-xs ${styles[priority]}`}>
      {priority}
    </span>
  );
};

const StatusBadge = ({ status }: { status: RequestItemProps["status"] }) => {
  const styles = {
    New: "bg-blue-100 text-blue-800",
    "In Progress": "bg-orange-100 text-orange-800",
    Scheduled: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full px-2.5 py-0.5 text-xs ${styles[status]}`}>
      {status}
    </span>
  );
};

const RecentRequestItem = ({
  title,
  equipment,
  priority,
  status,
  date,
  assignedTo,
  isOverdue,
}: RequestItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <p className="font-medium text-gray-900 text-sm">{title}</p>
          {isOverdue && (
            <span className="inline-flex items-center font-medium rounded-full bg-red-100 text-red-800 px-2.5 py-0.5 text-xs">
              Overdue
            </span>
          )}
        </div>
        <p className="text-xs text-gray-600">{equipment}</p>
        <div className="flex items-center space-x-2 mt-2">
          <PriorityBadge priority={priority} />
          <StatusBadge status={status} />
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-500">{date}</p>
        {assignedTo && <p className="text-xs text-gray-600 mt-1">{assignedTo}</p>}
      </div>
    </div>
  );
};

const RecentRequests = () => {
  const requests: RequestItemProps[] = [
    {
      title: "Hard Drive Replacement",
      equipment: "Server HP ProLiant",
      priority: "High",
      status: "New",
      date: "1/16/2024",
    },
    {
      title: "Oil Leak in Hydraulic System",
      equipment: "CNC Machine Alpha",
      priority: "High",
      status: "New",
      date: "1/15/2024",
    },
    {
      title: "Network Connectivity Issues",
      equipment: "Server HP ProLiant",
      priority: "Critical",
      status: "In Progress",
      date: "1/14/2024",
      assignedTo: "Alex Chen",
    },
    {
      title: "Routine Monthly Inspection",
      equipment: "Forklift Toyota 8FG25",
      priority: "Medium",
      status: "Scheduled",
      date: "1/10/2024",
      assignedTo: "Mike Johnson",
    },
    {
      title: "Overdue Calibration",
      equipment: "3D Printer Ultimaker",
      priority: "Medium",
      status: "New",
      date: "1/8/2024",
      isOverdue: true,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 leading-7">Recent Requests</h3>
        <button className="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100 focus:ring-teal-500 px-3 py-1.5 text-sm">
          View All
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
      <div className="space-y-4">
        {requests.map((request, index) => (
          <RecentRequestItem key={index} {...request} />
        ))}
      </div>
    </div>
  );
};

export default RecentRequests;
