import React from 'react';
import { Search, Settings, HelpCircle, BarChart3, Package, Users, TrendingUp, FileText } from 'lucide-react';
import { ChevronsUpDown } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: false },
    { icon: Package, label: 'Product', active: false },
    { icon: Users, label: 'Customer', active: false },
    { icon: TrendingUp, label: 'Marketing', active: false },
    { icon: FileText, label: 'Reporting', active: false },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo/Avatar */}
      <div className="p-4">
        <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-12 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded font-mono">⌘K</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-3">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <item.icon className="mr-3 w-4 h-4" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="p-4 space-y-4">
        {/* Settings and Support */}
        <div className="space-y-1">
          <div className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">
            <Settings className="mr-3 w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </div>
          <div className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">
            <HelpCircle className="mr-3 w-4 h-4" />
            <span className="text-sm font-medium">Support</span>
            <div className="ml-auto flex items-center border border-gray-300 rounded-md px-1 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-xs text-gray-500 ">Online</span>
            </div>
          </div>
        </div>

        {/* Storage Usage */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-900">Used space</span>
            <button className="text-xs text-gray-400 hover:text-gray-600">×</button>
          </div>
          <div className="text-xs text-gray-600 mb-3 leading-relaxed">
            Your team has used 80% of your available space. Need more?
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <div className="flex items-center justify-between">
            <button className="text-xs text-gray-500 hover:text-gray-700">Dismiss</button>
            <button className="text-xs text-green-600 hover:text-blue-700 font-medium">Upgrade plan</button>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
          <div className="relative mr-3">
            <div className="w-9 h-9 bg-white rounded-full border border-gray-300  flex items-center justify-center text-white text-xs font-semibold">
              CS
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">Clara Smith</div>
            <div className="text-xs text-gray-500 truncate">clara@bizclues.com</div>
          </div>
          <div className="items-center bg-gray-100 justify-center border border-gray-100 rounded-md px-1 py-1">
            <ChevronsUpDown className="w-4 h-4 text-gray-400" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;