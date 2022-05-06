import "../Auth.css";
import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useStateValue } from "../StateProvider";

const steps = ["", "", ""];

const SectionThree = () => {
  const [state, dispatch] = useStateValue();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [value, setValue] = useState("Buyers");
  const handleChange = (e, newValue) => setValue(newValue);
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 3) {
      dispatch({ type: "CHANGE_INDEX", payload: 1 });
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
            <h1>Where are you currently living?</h1>
            <label htmlFor="">Address</label>
            <input type="text" name="" />

            <label htmlFor="">City</label>
            <input type="text" name="" />
            <label htmlFor="">State</label>
            <input type="text" name="" />
            <div>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="formers">
            <h1>What is your current employment status?</h1>
            <label htmlFor="">Employer</label>
            <input type="text" name="" />
            <label htmlFor="">Title</label>
            <input type="text" name="" />

            <label htmlFor="">Address</label>
            <input type="text" name="" />
            <div>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="formersSpec">
            <h1>Do you have any dependents?</h1>
            <ToggleButtonGroup
              value={value}
              onChange={handleChange}
              exclusive
              color="primary"
              className="toggleButtonGroup"
            >
              <ToggleButton value="nope" className="toggleButton">
                <span>Nope</span>
              </ToggleButton>
              <ToggleButton value="1" className="toggleButton">
                <span>1</span>
              </ToggleButton>
              <ToggleButton value="2" className="toggleButton">
                <span>2</span>
              </ToggleButton>
              <ToggleButton value="3" className="toggleButton">
                <span>3</span>
              </ToggleButton>
              <ToggleButton value="4" className="toggleButton">
                <span>4+</span>
              </ToggleButton>
            </ToggleButtonGroup>

            <div>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};
export default SectionThree;
