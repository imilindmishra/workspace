import React, { useState, useEffect } from "react";
import { getForm } from "../services/api";
import Login from "../components/Login";
import FormSection from "../components/FormSection";

const FormPage = () => {
  const [rollNumber, setRollNumber] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    if (rollNumber) {
      getForm(rollNumber).then((data) => setFormData(data.form));
    }
  }, [rollNumber]);

  const handleLoginSuccess = (rollNumber: string) => {
    setRollNumber(rollNumber);
  };

  const handleSectionValidation = (isValid: boolean) => {
    // Handle section validation state
  };

  return (
    <div className="p-6">
      {!rollNumber ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : formData ? (
        <>
          <h2 className="text-xl font-semibold">{formData.formTitle}</h2>
          {formData.sections.map((section: any) => (
            <FormSection
              key={section.sectionId}
              section={section}
              onValidate={handleSectionValidation}
            />
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FormPage;
