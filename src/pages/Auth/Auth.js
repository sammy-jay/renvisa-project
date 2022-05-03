import "./Auth.css";
import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const steps = [
  "Step 0",
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
  "Step 7",
  "Step 8",
  "Step 9",
];

const Auth = () => {
  const [isVertical, setIsVertical] = useState(true);
  const [value, setValue] = useState("Buyers");
  const handleChange = (e, newValue) => setValue(newValue);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleWidth = () => {};
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setIsVertical(false);
      } else {
        setIsVertical(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 700) {
          setIsVertical(false);
        } else {
          setIsVertical(true);
        }
      });
    };
  }, [isVertical]);

  return (
    <section className="auth">
      <article className="authSideOne">
        <h1>Quick & Easy Setup</h1>
        {isVertical && (
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
                  sx={{
                    "& .MuiStepLabel-root .Mui-completed": { color: "#fff" },
                    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                      { color: "grey.500" },
                    "& .MuiStepLabel-root .Mui-active": { color: "#fff" },
                    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                      fill: "black",
                    },
                  }}
                >
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        )}
        {!isVertical && (
          <Stepper
            className="stepper"
            activeStep={activeStep}
            orientation="horizontal"
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step
                  key={label}
                  {...stepProps}
                  className="stepper"
                  sx={{
                    "& .MuiStepLabel-root .Mui-completed": { color: "#fff" },
                    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                      { color: "grey.500" },
                    "& .MuiStepLabel-root .Mui-active": { color: "#fff" },
                    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                      fill: "black",
                    },
                  }}
                >
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        )}
      </article>
      <article className="authSideTwo">
        {activeStep === 0 && (
          <div className="formers">
            <h1>Where can we reach you?</h1>
            <label htmlFor="phoneNum">Input phone number</label>
            <input type="text" name="phoneNum" />
            <div>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="formers">
            <h1>What's your name?</h1>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" />
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
            <input type="text" name="state" />

            <label htmlFor="cities">Cities (optional)</label>
            <input type="text" name="cities" />
            <div>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
        {activeStep === 3 && (
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
        {activeStep === 4 && (
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

        {activeStep === 5 && (
          <div className="formers">
            <h1>Are you applying with another person?</h1>
            <label htmlFor="">Co-Buyer's Name</label>
            <input type="text" name="" />

            <label htmlFor="">Co-Buyer's Email</label>
            <input type="text" name="" />
            <div>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
        {activeStep === 6 && (
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
        {activeStep === 7 && (
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

        {activeStep === 8 && (
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

        {activeStep === 9 && (
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
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 80,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#f8f8f8",
              },
              links: {
                color: "#f8f8f8",
                distance: 120,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        ></Particles>
      </article>
    </section>
  );
};
export default Auth;

//  style={{
//     margin: "10px 0px 20px",
//     padding: "5px",
//     backgroundColor: "#fff",
//     width: "max-content",
//     color: "#000",
//     fontWeight: "600",
//     textTransform: "capitalise",
//     }}

// style={{
//     backgroundColor: value === "Sellers" ? "#fff" : "transparent",
//     border: "none",
//     color: "#000",
//     borderRadius: "5px",
//     padding: "7px 20px",
// }}
