import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StatusBadgeProps {
  children: React.ReactNode;
  variant: 'high' | 'new' | 'critical' | 'in-progress' | 'medium' | 'scheduled' | 'overdue';
}

const StatusBadge = ({ children, variant }: StatusBadgeProps) => {
  const variants = {
    high: 'bg-orange-100 text-orange-800',
    new: 'bg-blue-100 text-blue-800',
    critical: 'bg-red-100 text-red-800',
    'in-progress': 'bg-orange-100 text-orange-800',
    medium: 'bg-yellow-100 text-yellow-800',
    scheduled: 'bg-yellow-100 text-yellow-800',
    overdue: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full px-2.5 py-0.5 text-xs ${variants[variant]}`}>
      {children}
    </span>
  );
};

interface RequestItemProps {
  title: string;
  equipment: string;
  date: string;
  technician?: string;
  badges: Array<{ label: string; variant: StatusBadgeProps['variant'] }>;
  overdueBadge?: boolean;
}

const RequestItem = ({ title, equipment, date, technician, badges, overdueBadge }: RequestItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <p className="font-medium text-gray-900 text-sm">{title}</p>
          {overdueBadge && <StatusBadge variant="overdue">Overdue</StatusBadge>}
        </div>
        <p className="text-xs text-gray-600">{equipment}</p>
        <div className="flex items-center space-x-2 mt-2">
          {badges.map((badge, idx) => (
            <StatusBadge key={idx} variant={badge.variant}>
              {badge.label}
            </StatusBadge>
          ))}
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-500">{date}</p>
        {technician && <p className="text-xs text-gray-600 mt-1">{technician}</p>}
      </div>
    </div>
  );
};

const RecentRequests = () => {
  const requests: RequestItemProps[] = [
    {
      title: 'Hard Drive Replacement',
      equipment: 'Server HP ProLiant',
      date: '1/16/2024',
      badges: [
        { label: 'High', variant: 'high' },
        { label: 'New', variant: 'new' },
      ],
    },
    {
      title: 'Oil Leak in Hydraulic System',
      equipment: 'CNC Machine Alpha',
      date: '1/15/2024',
      badges: [
        { label: 'High', variant: 'high' },
        { label: 'New', variant: 'new' },
      ],
    },
    {
      title: 'Network Connectivity Issues',
      equipment: 'Server HP ProLiant',
      date: '1/14/2024',
      technician: 'Alex Chen',
      badges: [
        { label: 'Critical', variant: 'critical' },
        { label: 'In Progress', variant: 'in-progress' },
      ],
    },
    {
      title: 'Routine Monthly Inspection',
      equipment: 'Forklift Toyota 8FG25',
      date: '1/10/2024',
      technician: 'Mike Johnson',
      badges: [
        { label: 'Medium', variant: 'medium' },
        { label: 'Scheduled', variant: 'scheduled' },
      ],
    },
    {
      title: 'Overdue Calibration',
      equipment: '3D Printer Ultimaker',
      date: '1/8/2024',
      overdueBadge: true,
      badges: [
        { label: 'Medium', variant: 'medium' },
        { label: 'New', variant: 'new' },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900" style={{ letterSpacing: '-0.025em' }}>
          Recent Requests
        </h3>
        <button className="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100 focus:ring-teal-500 px-3 py-1.5 text-sm">
          View All
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {requests.map((request, index) => (
          <RequestItem key={index} {...request} />
        ))}
      </div>
    </div>
  );
};

export default RecentRequests;
