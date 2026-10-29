
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "../assets/Image/1.png";

gsap.registerPlugin(ScrollTrigger);

export default function Couple() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const invitationRef = useRef(null);
  const tanayRef = useRef(null);
  const withRef = useRef(null);
  const selviRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.65,
        rotation: -12,
      });

      gsap.set(invitationRef.current, {
        opacity: 0,
        y: 45,
      });

      gsap.set(tanayRef.current, {
        opacity: 0,
        x: -65,
      });

      gsap.set(withRef.current, {
        opacity: 0,
        scale: 0.7,
      });

      gsap.set(selviRef.current, {
        opacity: 0,
        x: 65,
      });

      gsap.set(bottomRef.current, {
        opacity: 0,
        y: 25,
      });

      // Reveal items as the user scrolls into this section
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(logoRef.current, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
        })
        .to(
          invitationRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.35"
        )
        .to(
          tanayRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
          },
          "-=0.2"
        )
        .to(
          withRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
          },
          "-=0.3"
        )
        .to(
          selviRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
          },
          "-=0.15"
        )
        .to(
          bottomRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.25"
        );

      // Subtle floating effect on the monogram after reveal
      gsap.to(logoRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play pause resume pause",
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-12 text-center sm:px-8 sm:py-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#fffaf0]/55" />

      {/* Soft decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center">
        {/* Animated monogram */}
        <div
          ref={logoRef}
          className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#bd984e] sm:mb-9 sm:h-24 sm:w-24"
        >
          <div className="flex flex-col items-center text-[#896426]">
            <span className="font-serif text-4xl italic leading-none sm:text-5xl">
              T<span className="mx-0.5 text-2xl">&</span>S
            </span>
            <span className="mt-2 font-sans text-[7px] tracking-[0.3em]">
              FOREVER
            </span>
          </div>
        </div>

        {/* Invitation text */}
        <div ref={invitationRef} className="mb-8 sm:mb-10">
          <p className="font-serif text-lg italic leading-relaxed text-[#674b28] sm:text-2xl">
            With love, we warmly invite you
            <br />
            to the engagement celebration of
          </p>

          <div className="mx-auto mt-5 h-px w-16 bg-[#bd984e]" />
        </div>

        {/* Tanay reveal */}
        <div ref={tanayRef} className="mb-7 w-full sm:mb-8">
          <h2 className="font-serif text-4xl font-normal tracking-wide text-[#805b24] sm:text-5xl">
            Tanay
          </h2>

          <p className="mt-3 font-serif text-sm leading-7 text-[#55432e] sm:text-base sm:leading-8">
            Son of Mr. Maheshraj Nanata Jain
            <br />
            Grandson of Shri Suresh Ji &amp; Smt. Tara Devi Nabariya
          </p>
        </div>

        {/* With divider */}
        <div
          ref={withRef}
          className="mb-7 flex items-center gap-4 sm:mb-8"
        >
          <span className="h-px w-10 bg-[#bd984e]/80" />

          <span className="font-serif text-xl italic text-[#896426]">
            with
          </span>

          <span className="h-px w-10 bg-[#bd984e]/80" />
        </div>

        {/* Selvi reveal */}
        <div ref={selviRef} className="w-full">
          <h2 className="font-serif text-4xl font-normal tracking-wide text-[#805b24] sm:text-5xl">
            Selvi
          </h2>

          <p className="mt-3 font-serif text-sm leading-7 text-[#55432e] sm:text-base sm:leading-8">
            Granddaughter of Shri Uttamraj &amp; Smt. Rashmi Kataria
            <br />
            Daughter of Mr. Ashish &amp; Smt. Poonam Kataria
          </p>
        </div>

        {/* Bottom ornament */}
        <div
          ref={bottomRef}
          className="mt-9 flex items-center gap-3 text-[#bd984e] sm:mt-12"
        >
          <span className="h-px w-12 bg-[#bd984e]/70" />
          <span className="text-xl">✦</span>
          <span className="h-px w-12 bg-[#bd984e]/70" />
        </div>
      </div>
    </section>
  );
}
