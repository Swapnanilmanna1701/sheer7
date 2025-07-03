import {
  Bold,
  
  ChevronDown,
  Eye,
  EyeOff,
  HelpCircle,
  Italic,
  Link,
  List,
  ListOrdered,
  Upload,
} from "lucide-react";
import React, { useState } from "react";

const PersonalInfoForm: React.FC = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showTimezoneTooltip, setShowTimezoneTooltip] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Clara",
    lastName: "Smith",
    email: "clara@bizclues.com",
    oldPassword: "",
    newPassword: "",
    role: "Admin",
    country: "Australia",
    mobile: "+1 (555) 000-0000",
    timezone: "Pacific Standard Time (PST) UTC-08:00",
    bio: "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const countries = [
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "DE", name: "Germany", flag: "🇩🇪" },
    { code: "FR", name: "France", flag: "🇫🇷" },
    { code: "JP", name: "Japan", flag: "🇯🇵" },
    { code: "IN", name: "India", flag: "🇮🇳" },
  ];

  const selectedCountry =
    countries.find((c) => c.name === formData.country) || countries[0];

  return (
    <div className="w-full p-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 px-6 pt-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            Personal info
          </h2>
          <p className="text-sm text-gray-600">
            Update your photo and personal details here.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
            Cancel
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            Save
          </button>
        </div>
      </div>

      <div className="space-y-8 px-6">
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-green-500">*</span>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="First name"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <label className="block text-sm font-medium text-gray-700 mb-2 md:opacity-0">
              Last Name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 w-full -mx-6" />

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email address <span className="text-green-500">*</span>
          </label>
          <div className="flex space-x-3">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Verify
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 w-full -mx-6" />

        {/* Photo Upload */}
        <div className="flex gap-6 items-start">
          {/* Left side - Text section */}
          <div className="flex-shrink-0 w-48">
            <div className="flex items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Your photo *
              </label>
              <HelpCircle className="w-4 h-4 text-gray-400 ml-2" />
            </div>
            <p className="text-xs text-gray-500">
              This will be displayed on your profile.
            </p>
          </div>

          {/* Right side - Photo and upload zone */}
          <div className="flex items-center gap-4 flex-1">
            {/* Circular dummy photo */}
            <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>

            {/* Upload drop zone */}
            <div className="flex-1 border-2 border-green-500 border-solid rounded-lg p-6 text-center bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center mb-3">
                  <Upload className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-green-600">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800×400px)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 w-full -mx-6" />

        {/* Change Password */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Change Password
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Your new password must be different to previously used passwords.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Old Password
              </label>
              <div className="relative">
                <input
                  type={showOldPassword ? "text" : "password"}
                  value={formData.oldPassword}
                  onChange={(e) =>
                    handleInputChange("oldPassword", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showOldPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-green-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-green-500" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={(e) =>
                    handleInputChange("newPassword", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-green-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-green-500" />
                  )}
                </button>
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2"></div>
                  Must be at least 8 characters
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2"></div>
                  Must contain one special character
                </div>
              </div>
            </div>

            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Reset password
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 w-full -mx-6" />

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Role
          </label>
          <input
            type="text"
            value={formData.role}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
          />
          <p className="text-sm text-gray-600 mt-1">
            Please note the role can be changed through{" "}
            <strong>Settings→Team→Edit Roles</strong>,{" "}
            <button className="text-gray-800 hover:text-green-800">
              click here
            </button>{" "}
            to change the role.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 w-full -mx-6" />

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country <span className="text-green-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 w-full -mx-6" />

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number <span className="text-green-500">*</span>
          </label>
          <div className="flex space-x-3">
            <div className="flex-1 flex">
              <select className="px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white">
                <option value="US">{selectedCountry.flag}</option>
                <option value="AU">🇦🇺</option>
                <option value="GB">🇬🇧</option>
                <option value="CA">🇨🇦</option>
              </select>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                className="flex-1 px-3 py-2 border-t border-r border-b border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Verify
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 w-full -mx-6" />

        {/* Timezone */}
        <div>
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Timezone <span className="text-green-500">*</span>
            </label>
            <div className="relative ml-2">
              <button
                onMouseEnter={() => setShowTimezoneTooltip(true)}
                onMouseLeave={() => setShowTimezoneTooltip(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
              {showTimezoneTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                  <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                    Please enter your current timezone
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <select
              value={formData.timezone}
              onChange={(e) => handleInputChange("timezone", e.target.value)}
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="Pacific Standard Time (PST) UTC-08:00">
                Pacific Standard Time (PST) UTC-08:00
              </option>
              <option value="Mountain Standard Time (MST) UTC-07:00">
                Mountain Standard Time (MST) UTC-07:00
              </option>
              <option value="Central Standard Time (CST) UTC-06:00">
                Central Standard Time (CST) UTC-06:00
              </option>
              <option value="Eastern Standard Time (EST) UTC-05:00">
                Eastern Standard Time (EST) UTC-05:00
              </option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 w-full -mx-6" />

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio <span className="text-green-500">*</span>
          </label>
          <p className="text-sm text-gray-600 mb-3">
            Write a short introduction.
          </p>

          {/* Toolbar */}
          <div className="flex items-center space-x-4 mb-3">
            <div className="relative">
              <select className="text-sm border border-gray-300 rounded px-3 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none pr-8">
                <option>Regular</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800">
                <Bold className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800">
                <Italic className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800">
                <Link className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800">
                <List className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800">
                <ListOrdered className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Textarea */}
          <div className="border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">
            <textarea
              value={formData.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              className="w-full px-3 py-3 focus:outline-none resize-none rounded-lg"
              rows={6}
              placeholder="Write your bio here..."
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">275 characters left</p>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 -mx-6 px-6">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
            Cancel
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
