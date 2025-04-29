import React, { useState } from "react";
import FormField from "./FormField";

interface FormSectionProps {
  section: {
    title: string;
    description: string;
    fields: any[];
  };
  onValidate: (isValid: boolean) => void;
}

const FormSection = ({ section, onValidate }: FormSectionProps) => {
  const [isSectionValid, setIsSectionValid] = useState(true);

  const validateSection = () => {
    // For simplicity, we assume the validation is done per field
    const isValid = section.fields.every((field) => field.isValid);
    setIsSectionValid(isValid);
    onValidate(isValid);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold">{section.title}</h3>
      <p className="text-gray-600 mb-4">{section.description}</p>
      {section.fields.map((field) => (
        <FormField key={field.fieldId} field={field} />
      ))}
      <button
        onClick={validateSection}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Validate Section
      </button>
    </div>
  );
};

export default FormSection;
