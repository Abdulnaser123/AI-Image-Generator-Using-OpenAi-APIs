import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-900"
          >
            {labelName}
          </label>
          {isSurpriseMe && (
            <button
              type="button"
              onClick={handleSurpriseMe}
              className="text-xs font-semibold bg-[#ECECEf1] px-2 py-1 text-black rounded-[5px]"
            >
              surprize me
            </button>
          )}
        </div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          required
          id={name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
        />
      </div>
    </div>
  );
};

export default FormField;
