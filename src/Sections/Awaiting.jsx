
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import background from "../assets/Image/1.png";

export default function Awaiting() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);

  const guests = [
    "Mr. Rajesh Sharma",
    "Mrs. Sunita Sharma",
    "Mr. Amit Verma",
    "Mrs. Priya Verma",
    "Mr. Rahul Mehta",
    "Ms. Ananya Patel",
    "Mr. Karan Joshi",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [headingRef.current, subtitleRef.current, ".guest-card"],
        { opacity: 0, y: 15 }
      );

      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.25"
        )
        .to(
          ".guest-card",
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.06,
          },
          "-=0.15"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-3 py-6 sm:px-8 sm:py-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#fff9ed]/75" />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[#a08049] sm:text-xs sm:tracking-[0.4em]">
          With Love and Warm Wishes
        </p>

        <h1
          ref={headingRef}
          className="font-serif text-3xl font-normal italic leading-tight text-[#76552c] sm:text-5xl md:text-6xl"
        >
          Awaiting Your Presence
        </h1>

        {/* Compact divider */}
        <div className="my-3 flex items-center justify-center gap-2 text-[#b18a48] sm:my-5 sm:gap-3">
          <span className="h-px w-8 bg-[#b18a48]/70 sm:w-16" />
          <span className="text-xs">✦</span>
          <span className="h-px w-8 bg-[#b18a48]/70 sm:w-16" />
        </div>

        <p
          ref={subtitleRef}
          className="mx-auto mb-5 max-w-md font-serif text-sm leading-5 text-[#806b50] sm:mb-8 sm:text-lg sm:leading-7"
        >
          Your presence and blessings would make our special day
          even more beautiful.
        </p>

        {/* Two columns on mobile to reduce scrolling */}
        <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-3">
          {guests.map((guest, index) => (
            <div
              key={guest}
              className={`guest-card flex min-w-0 items-center gap-2 rounded-md bg-[#fffaf0]/50 px-2 py-3 text-left sm:gap-3 sm:px-4 sm:py-4 ${
                index === guests.length - 1
                  ? "col-span-2 mx-auto w-1/2 sm:w-1/2"
                  : ""
              }`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b9975b]/10 font-serif text-[10px] text-[#98733a] sm:h-9 sm:w-9 sm:text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="break-words font-serif text-xs leading-4 text-[#76552c] sm:text-base sm:leading-5">
                {guest}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 font-serif text-sm italic text-[#8b704b] sm:mt-8 sm:text-lg">
          We look forward to celebrating with you
        </p>
      </div>
    </section>
  );
}
