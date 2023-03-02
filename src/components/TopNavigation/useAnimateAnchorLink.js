import React from "react";

const useAnimateAnchorLink = () => {
  const anchorLinks = React.useRef([]);

  React.useEffect(() => {
    console.log(anchorLinks.current);
  }, []);

  const onMouseLeave = (event) => {
    event.target.classList.add("animate-out");
    setTimeout(() => {
      event.target.classList.remove("animate-out");
    }, 300);
  };

  return {
    anchorLinks,
    onMouseLeave,
  };
};

export default useAnimateAnchorLink;
