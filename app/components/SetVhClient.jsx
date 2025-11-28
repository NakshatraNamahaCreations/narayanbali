"use client";

import { useEffect } from "react";

export default function SetVhClient() {
  useEffect(() => {
    function setVh() {
      // 1vh = 1% of the viewport height -> multiply by 0.01 then reuse
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    // set initially
    setVh();

    // update on resize & orientationchange (debounce optional)
    let resizeTimer;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setVh, 120);
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", setVh);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", setVh);
      clearTimeout(resizeTimer);
    };
  }, []);

  return null;
}
    