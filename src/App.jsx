
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Couple from "./Sections/Couple";
import ringImage from "./assets/Image/ring.png";
import background from "./assets/Image/1.png";
import Date from "./Sections/Date";
import Awaiting from "./Sections/Awaiting";
export default function App() {
  const ringRef = useRef(null);
  const titleRef = useRef(null);
  const hintRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(ringRef.current, {
        x: "-70vw",
        rotation: -180,
        scale: 0.7,
        opacity: 0,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(hintRef.current, {
        opacity: 0,
        y: 10,
      });

      tl.to(ringRef.current, {
        x: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 2.2,
        ease: "power3.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          hintRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.3"
        );

      gsap.to(ringRef.current, {
        y: -8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-[#fffaf2]">
      <section
  className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${background})` }}
>
        {/* Soft background glow */}
        <div className="pointer-events-none absolute left-1/2 top-[35%] -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/70 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-4 py-12 text-center">
          {/* Animated ring */}
          <div className="mb-7 flex w-full items-center justify-center">
            <img
              ref={ringRef}
              src={ringImage}
              alt="Golden engagement ring"
              className="h-48 w-48 object-contain drop-shadow-[0_18px_20px_rgba(124,83,20,0.18)] sm:h-64 sm:w-64 md:h-72 md:w-72"
            />
          </div>

          {/* Heading */}
          <div ref={titleRef} className="text-[#725020]">
            <p className="mb-3 font-sans text-[9px] tracking-[0.3em] text-[#a27b3e] sm:text-xs sm:tracking-[0.4em]">
              A BEAUTIFUL BEGINNING
            </p>

            <h1 className="text-3xl font-normal leading-tight sm:text-5xl md:text-6xl">
              Engagement Ceremony
            </h1>

            <p className="mt-4 font-sans text-[9px] tracking-[0.2em] text-[#997747] sm:text-xs sm:tracking-[0.3em]">
              TWO HEARTS · ONE PROMISE
            </p>
          </div>

          {/* Scroll hint */}
          <div
            ref={hintRef}
            className="absolute bottom-6 flex flex-col items-center gap-2 font-sans text-[9px] tracking-[0.2em] text-[#8b714c]"
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="animate-bounce text-xl">↓</span>
          </div>
        </div>
      </section>

      <Couple />
      <Date />
      <Awaiting />
    </main>
    
  );
}
