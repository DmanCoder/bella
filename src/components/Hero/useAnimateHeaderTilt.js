import React from "react";

import { gsap } from "../../gsapInit";

// Utils
import utils from "../../utils";

const useAnimateHeaderTilt = () => {
  const leftFigureRefs = React.useRef([]);
  const rightFigureRefs = React.useRef([]);
  const circleRefs = React.useRef(null);

  const onMoveImages = (event) => {
    const { clientX, clientY, target } = event;
    const { clientWidth, clientHeight } = target;

    const xPos = clientX / clientWidth - 0.5;
    const yPos = clientY / clientHeight - 0.5;

    leftFigureRefs.current.forEach((image, index) => {
      gsap.to(image, {
        duration: 1.2,
        x: xPos * 20 * modifier({ index }),
        y: yPos * 30 * modifier({ index }),
        rotationY: xPos * 40,
        rotationX: yPos * 10,
        ease: "power3.out",
      });
    });

    rightFigureRefs.current.forEach((image, index) => {
      gsap.to(image, {
        duration: 1.2,
        x: xPos * 30 * modifier({ index }),
        y: -yPos * 20 * modifier({ index }),
        rotationY: xPos * 40,
        rotationX: yPos * 10,
        ease: "power3.out",
      });
    });

    gsap.to(circleRefs.current, {
      duration: 1.2,
      x: xPos * 30,
      y: yPos * 20,
      rotationY: xPos * 40,
      rotationX: yPos * 10,
      ease: "power3.out",
    });
  };

  const addLeftFigureImagesToRefs = (element) => {
    if (!utils.isEmpty(element)) leftFigureRefs.current.push(element);
  };

  const addRightFigureImagesToRefs = (element) => {
    if (!utils.isEmpty(element)) rightFigureRefs.current.push(element);
  };

  const modifier = ({ index }) => index * 0.2 + 0.5;

  return {
    circleRefs,
    onMoveImages,
    addLeftFigureImagesToRefs,
    addRightFigureImagesToRefs,
  };
};

export default useAnimateHeaderTilt;
