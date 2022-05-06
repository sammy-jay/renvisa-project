import "./Auth.css";
import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import SectionOne from "./Subsections/SectionOne";
import SectionTwo from "./Subsections/SectionTwo";
import SectionThree from "./Subsections/SectionThree";
import SectionFour from "./Subsections/SectionFour";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";
import { StateProvider, useStateValue } from "./StateProvider";

const steps = ["Step 0", "Step 1", "Step 2", "Step 3"];

const Auth = () => {
  const { state, dispatch } = useStateValue();
  console.log(state);

  const [isVertical, setIsVertical] = useState(true);
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
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
            activeStep={state?.globalIndex}
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
            activeStep={state?.globalIndex}
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
        {state?.globalIndex === 0 && <SectionOne />}
        {state?.globalIndex === 1 && <SectionTwo />}
        {state?.globalIndex === 2 && <SectionThree />}
        {state?.globalIndex === 3 && <SectionFour />}

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
