import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, syncTouch: false });
    let animationFrame = 0;

    const update = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(update);
    };

    const connectScrollTrigger = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      lenis.on("scroll", ScrollTrigger.update);
      ScrollTrigger.refresh();
    };

    animationFrame = requestAnimationFrame(update);
    void connectScrollTrigger();

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return children;
}