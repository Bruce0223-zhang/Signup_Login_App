import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import button from 'react-bootstrap/Button'
import Login from "./Login";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <Login />}
    </div>
  );
};

export default Form;
