import React, { useState } from "react";

const FormField = ({ field }: { field: any }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateField = () => {
    if (field.required && !value) {
      setError(`${field.label} is required`);
    } else {
      setError("");
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">{field.label}</label>
      {field.type === "text" && (
        <input
          type="text"
          placeholder={field.placeholder || ""}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={validateField}
          className="mt-2 p-2 w-full border border-gray-300 rounded"
        />
      )}
      {/* Add other input types like radio, select, etc., here */}
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default FormField;
