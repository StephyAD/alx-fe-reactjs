import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 items-start justify-center">
        <RegistrationForm />
        <FormikForm />
      </div>
    </div>
  );
}

export default App;