import "../Auth.css";
import React, { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["", "", ""];

const SectionOne = ({ setGlobalIndex, register }) => {
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
    if (activeStep === 2) {
      console.log(setGlobalIndex);
      setGlobalIndex(1);
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
              key={index}
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
            <h1>Where can we reach you?</h1>
            <label htmlFor="phoneNum">Input phone number</label>
            <input type="text" name="phoneNum" {...register("phoneNum")} />
            <div>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="formers">
            <h1>What's your name?</h1>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" {...register("firstName")} />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" {...register("lastName")} />
            <div>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
        {activeStep === 2 && (
          <div className="formers">
            <h1>Where are you looking to live?</h1>
            <label htmlFor="state">State</label>
            <input type="text" name="state" {...register("state")} />

            <label htmlFor="cities">Cities (optional)</label>
            <input type="text" name="cities" {...register("cities")} />
            <div>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};
export default SectionOne;
