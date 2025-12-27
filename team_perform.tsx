import React from 'react';


export default function TeamPerformance() {
  const teams = [
    {
      name: 'Mechanics',
      members: 5,
      active: 2,
      completed: 1,
    },
    {
      name: 'Electricians',
      members: 4,
      active: 1,
      completed: 0,
    },
    {
      name: 'IT Support',
      members: 3,
      active: 2,
      completed: 0,
    },
    {
      name: 'HVAC Specialists',
      members: 3,
      active: 0,
      completed: 0,
    },
    {
      name: 'Safety & Quality',
      members: 2,
      active: 0,
      completed: 0,
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-6 mb-8">
      {/* Header section with Title and Action Button */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[1.125rem] font-semibold text-[#111827] leading-[1.75rem]">
          Team Performance
        </h3>
        <button className="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap cursor-pointer text-[#4B5563] hover:bg-[#F3F4F6] focus:ring-[#0D9488] px-3 py-1.5 text-sm">
          View Details
          <svg
            className="ml-2 w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      {/* Grid of Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-[#F9FAFB] rounded-lg p-4"
          >
            {/* Team Header: Icon, Name, and Member Count */}
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-[#F0FDFA] rounded-lg flex items-center justify-center">
                {/* Team icon replacement (lucide-react style structure with manual SVG for precision) */}
                <svg
                  className="w-5 h-5 text-[#0D9488]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#111827] text-sm md:text-base">
                  {team.name}
                </h4>
                <p className="text-[0.75rem] font-medium text-[#6B7280] leading-4">
                  {team.members} members
                </p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#4B5563]">Active</span>
                <span className="text-sm font-medium text-[#111827]">
                  {team.active}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#4B5563]">Completed</span>
                <span className="text-sm font-medium text-[#111827]">
                  {team.completed}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
