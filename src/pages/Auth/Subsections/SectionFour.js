import "../Auth.css";
import React, { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

const steps = [""];

const SectionFour = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useStateValue();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 1) {
      navigate("/");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section>
      <Stepper
        className="stepper"
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step
              key={label}
              {...stepProps}
              className="stepper"
              sx={{ display: "none" }}
            >
              <StepLabel {...labelProps} sx={{ display: "none" }}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <article className="authSideTwo">
        {activeStep === 0 && (
          <div className="formers">
            <h1>We need to perform credit verification</h1>
            <p className="redText">
              We will use this information to check your credit profile and help
              estimate your income
            </p>
            <label htmlFor="">BVN</label>
            <input type="text" name="" />
            <label htmlFor="">NIN</label>
            <input type="text" name="" />

            <label htmlFor="">Date of Birth</label>
            <input type="text" name="" />
            <div>
              <button onClick={handleBack}>Back</button>
              {/* <button onClick={handleNext}>Next</button> */}
            </div>
            <div className="agreement">
              <p className="redText">Secure by Mono</p>
              <p>By clicking Next, you agree to Mono End User Agreement</p>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};
export default SectionFour;
