import { useEffect, useRef, useState } from "react";

const DEFAULT_DELAY = 6000;
const SWIPE_THRESHOLD = 44;

export function useAutoplayCarousel(itemCount, delay = DEFAULT_DELAY) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timerEpoch, setTimerEpoch] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() => (
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  ));
  const touchStartX = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused || itemCount < 2) return undefined;
    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % itemCount);
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [activeIndex, delay, itemCount, paused, reducedMotion, timerEpoch]);

  function selectIndex(index) {
    setActiveIndex((index + itemCount) % itemCount);
    setTimerEpoch((current) => current + 1);
  }

  function resume() {
    setPaused(false);
    setTimerEpoch((current) => current + 1);
  }

  const interactionProps = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: resume,
    onFocusCapture: () => setPaused(true),
    onBlurCapture: (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) resume();
    },
    onTouchStart: (event) => {
      setPaused(true);
      touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    },
    onTouchEnd: (event) => {
      const startX = touchStartX.current;
      const endX = event.changedTouches[0]?.clientX;
      touchStartX.current = null;
      if (startX != null && endX != null && Math.abs(endX - startX) >= SWIPE_THRESHOLD) {
        selectIndex(activeIndex + (endX < startX ? 1 : -1));
      }
      resume();
    },
    onTouchCancel: () => {
      touchStartX.current = null;
      resume();
    },
  };

  return { activeIndex, selectIndex, interactionProps };
}
