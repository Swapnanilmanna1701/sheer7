import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SettingsHeader from './components/SettingsHeader';
import PersonalInfoForm from './components/PersonalInfoForm';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        <SettingsHeader onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          <PersonalInfoForm />
        </div>
      </div>
    </div>
  );
}

export default App;