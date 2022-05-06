import "../Auth.css";
import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["", "", ""];

const SectionTwo = ({ setGlobalIndex, register }) => {
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

    if (activeStep === 2) {
      setGlobalIndex(2);
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
          <div className="formersSpec">
            <h1>When will you be ready to move in?</h1>
            <ToggleButtonGroup
              value={value}
              onChange={handleChange}
              exclusive
              color="primary"
              className="toggleButtonGroup"
            >
              <ToggleButton value="ASAP" className="toggleButton">
                <span>ASAP</span>
              </ToggleButton>
              <ToggleButton value="1-2" className="toggleButton">
                <span>1-2</span>
                <span>Months</span>
              </ToggleButton>
              <ToggleButton value="2-4" className="toggleButton">
                <span>2-4</span>
                <span>Months</span>
              </ToggleButton>
              <ToggleButton value="4-6" className="toggleButton">
                <span>4-6</span>
                <span>Months</span>
              </ToggleButton>
              <ToggleButton value="6+" className="toggleButton">
                <span>6+</span>
                <span>Months</span>
              </ToggleButton>
            </ToggleButtonGroup>
            <div>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="formersSpec">
            <h1>Were you referred by an agent?</h1>
            <ToggleButtonGroup
              value={value}
              onChange={handleChange}
              exclusive
              color="primary"
              className="toggleButtonGroup"
            >
              <ToggleButton value="yes" className="toggleButton">
                <span>Yes</span>
              </ToggleButton>
              <ToggleButton value="no" className="toggleButton">
                <span>No</span>
              </ToggleButton>
            </ToggleButtonGroup>

            <label htmlFor="agentCode">Renvisa Agent Code</label>
            <input type="text" name="agentCode" />
            <div>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="formers">
            <h1>Are you applying with another person?</h1>
            <label htmlFor="">Co-Buyer's Name</label>
            <input type="text" name="" {...register("co-name")} />

            <label htmlFor="">Co-Buyer's Email</label>
            <input type="text" name="" {...register("co-email")} />
            <div>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};
export default SectionTwo;
