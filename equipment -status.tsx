import React from 'react';
import { MoveRight } from 'lucide-react';

const EquipmentStatus = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
          Equipment Status
        </h3>
        <button className="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100 focus:ring-teal-500 px-3 py-1.5 text-sm">
          View All
          <MoveRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Status Indicators */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Operational</span>
          </div>
          <span className="text-sm font-medium text-gray-900">2</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Needs Attention</span>
          </div>
          <span className="text-sm font-medium text-gray-900">3</span>
        </div>

        {/* Department Breakdown */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
            Equipment by Department
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Production</span>
              <span className="text-sm font-medium text-gray-900">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">IT</span>
              <span className="text-sm font-medium text-gray-900">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Warehouse</span>
              <span className="text-sm font-medium text-gray-900">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">R&D</span>
              <span className="text-sm font-medium text-gray-900">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentStatus;
