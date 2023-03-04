import React from "react";

const useAnimateHeaderTilt = () => {
  const onMoveImages = (event) => {
    const { clientX, clientY, target } = event;
    const { clientWidth, clientHeight } = target;

    console.log(clientX, clientY, clientWidth, clientHeight)
  };

  return {
    onMoveImages,
  };
};

export default useAnimateHeaderTilt;
