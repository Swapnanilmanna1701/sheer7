import React from 'react';
import { Search, Menu } from 'lucide-react';

interface SettingsHeaderProps {
  onMobileMenuOpen: () => void;
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({ onMobileMenuOpen }) => {
  const tabs = [
    'My details',
    'Company Profile', 
    'Appearance',
    'Team',
    'Billing and Plan',
    'Notifications',
    'Integrations'
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button 
            onClick={onMobileMenuOpen}
            className="lg:hidden p-2 -ml-2 rounded-md hover:bg-green-50 mr-2"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-64 pl-10 pr-10 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
            ⌘K
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`
                flex-shrink-0 py-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
                ${index === 0 
                  ? 'border-green-500 text-green-600' 
                  : 'border-transparent text-gray-500 hover:text-green-600 hover:border-green-300'
                }
              `}
            >
              {tab}
              {tab === 'Notifications' && (
                <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green-500 rounded-full">
                  2
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsHeader;