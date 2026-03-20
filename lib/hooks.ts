"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useCounter() {
  const triggered = useRef(false);

  useEffect(() => {
    function animateCount(el: Element, target: number, isFloat: boolean) {
      const duration = 1800;
      let startTime: number | null = null;

      function step(ts: number) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = ease * target;
        el.textContent = isFloat ? val.toFixed(1) : Math.round(val).toString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = isFloat ? target.toFixed(1) : target.toString();
      }
      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true;
            document.querySelectorAll("[data-count]").forEach((el) => {
              const target = parseFloat(el.getAttribute("data-count") ?? "0");
              const isFloat = el.getAttribute("data-float") === "true";
              animateCount(el, target, isFloat);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const band = document.querySelector("#numbers-band");
    if (band) observer.observe(band);
    return () => observer.disconnect();
  }, []);
}
