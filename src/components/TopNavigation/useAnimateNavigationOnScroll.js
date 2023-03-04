import React from "react";

import { ScrollTrigger, gsap } from "../../gsapInit";

// Utils
import utils from "../../utils";

const useAnimateNavigationOnScroll = () => {
  const anchorLinksRef = React.useRef([]);

  React.useEffect(() => {
    ScrollTrigger.create({
      start: 100,
      end: "bottom bottom-=20",
      toggleClass: {
        targets: "body",
        className: "has-scrolled",
      },
      onEnter: anchorLinksAnimation,
      onLeaveBack: anchorLinksAnimation,
      markers: true,
    });
  }, []);

  const addAnchorLinkItemsToRefs = (element) => {
    if (!utils.isEmpty(element)) anchorLinksRef.current.push(element);
  };

  const anchorLinksAnimation = ({ direction }) => {
    const isScrollingDown = direction === 1;
    const linkRef = [...anchorLinksRef.current];
    const links = isScrollingDown ? linkRef : linkRef.reverse();

    return gsap.to(links, {
      duration: 0.3,
      stagger: 0.05,
      autoAlpha: isScrollingDown ? 0 : 1,
      y: isScrollingDown ? 20 : 0,
      ease: "power4.out",
    });
  };

  return { anchorLinksRef, addAnchorLinkItemsToRefs };
};

export default useAnimateNavigationOnScroll;
