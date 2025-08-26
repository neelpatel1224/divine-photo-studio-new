import { useState } from "react";

export default function FilterNav({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4 py-4 sm:py-6 lg:py-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-medium rounded-full transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-[#1A3455] text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-[#1A3455] hover:bg-gray-50 hover:shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
