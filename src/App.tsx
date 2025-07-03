import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import SettingsHeader from "./components/SettingsHeader";
import Sidebar from "./components/Sidebar";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-0">
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
