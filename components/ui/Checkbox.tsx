import React from 'react';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      {label && (
        <label htmlFor={id} className="text-[#5a7894]">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;