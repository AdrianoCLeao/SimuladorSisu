import React from 'react';

interface FilterProps {
  filters: string[];
  onFilterSelect: (filter: string) => void;
}

const FilterBar: React.FC<FilterProps> = ({ filters, onFilterSelect }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex space-x-4 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterSelect(filter)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
