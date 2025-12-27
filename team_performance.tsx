import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

interface TeamPerformanceData {
  id: string;
  name: string;
  members: number;
  active: number;
  completed: number;
}

const teams: TeamPerformanceData[] = [
  {
    id: '1',
    name: 'Mechanics',
    members: 5,
    active: 2,
    completed: 1,
  },
  {
    id: '2',
    name: 'Electricians',
    members: 4,
    active: 1,
    completed: 0,
  },
  {
    id: '3',
    name: 'IT Support',
    members: 3,
    active: 2,
    completed: 0,
  },
  {
    id: '4',
    name: 'HVAC Specialists',
    members: 3,
    active: 0,
    completed: 0,
  },
  {
    id: '5',
    name: 'Safety & Quality',
    members: 2,
    active: 0,
    completed: 0,
  },
];

const TeamPerformance = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Team Performance</h3>
        <button 
          className="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100 focus:ring-teal-500 px-3 py-1.5 text-sm"
        >
          View Details
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{team.name}</h4>
                <p className="text-xs text-gray-500">{team.members} members</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Active</span>
                <span className="text-sm font-medium text-gray-900">{team.active}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Completed</span>
                <span className="text-sm font-medium text-gray-900">{team.completed}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPerformance;
