import React from "react";

const useAnimateAnchorLink = () => {
  const [currentHoverLink, setCurrentHoverLink] = React.useState("");

  const onMouseLeave = (event) => {
    // Get custom data attribute
    const currentNavLink = event.target.getAttribute("data-nav");

    setCurrentHoverLink(currentNavLink);

    // Set back to default
    setTimeout(() => {
      setCurrentHoverLink("");
    }, 300);
  };

  return {
    onMouseLeave,
    currentHoverLink,
  };
};

export default useAnimateAnchorLink;
