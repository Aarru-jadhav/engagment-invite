
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import background from "../assets/Image/1.png";

export default function Date() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const lineRef = useRef(null);
  const messageRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      gsap.set(
        [
          eyebrowRef.current,
          titleRef.current,
          dateRef.current,
          messageRef.current,
          detailsRef.current,
        ],
        { opacity: 0, y: 30 }
      );

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center",
      });

      timeline
        .to(eyebrowRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
        })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.35"
        )
        .fromTo(
          dateRef.current,
          { scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          lineRef.current,
          { scaleX: 1, duration: 0.8 },
          "-=0.35"
        )
        .to(
          messageRef.current,
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.2"
        )
        .to(
          detailsRef.current,
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.15"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-8 sm:py-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#fff9ed]/65" />

      {/* Soft light effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl" />

      {/* Main content without golden outer borders */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center justify-center px-2 py-8 text-center sm:px-12 sm:py-12">
        <p
          ref={eyebrowRef}
          className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#97743b] sm:text-xs sm:tracking-[0.4em]"
        >
          A Special Day to Remember
        </p>

        <h1
          ref={titleRef}
          className="font-serif text-4xl font-normal italic leading-tight text-[#76552c] sm:text-6xl"
        >
          The Celebration
        </h1>

        {/* Small gold divider */}
        <div className="my-6 flex items-center gap-3 text-[#b18a48]">
          <span className="h-px w-10 bg-[#b18a48]/70 sm:w-16" />
          <span className="text-sm">✦</span>
          <span className="h-px w-10 bg-[#b18a48]/70 sm:w-16" />
        </div>

        {/* Date */}
        <div ref={dateRef} className="mb-5">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#8e754f]">
            Join us to celebrate
          </p>

          <p className="font-serif text-4xl tracking-wide text-[#805b2b] sm:text-6xl">
            17 <span className="text-[#bd984e]">·</span> 02{" "}
            <span className="text-[#bd984e]">·</span> 2027
          </p>

          <p className="mt-3 font-serif text-base italic text-[#8b704b] sm:text-lg">
            A beautiful beginning to a lifetime of love
          </p>
        </div>

        <div
          ref={lineRef}
          className="my-5 h-px w-28 bg-[#b9975b] sm:w-40"
        />

        <p
          ref={messageRef}
          className="mb-6 max-w-md font-serif text-base leading-7 text-[#705a3e] sm:text-lg"
        >
          Your presence will make this special day even more memorable.
        </p>

        {/* Venue and time without the outer box */}
        <div
          ref={detailsRef}
          className="w-full max-w-lg bg-[#fffaf0]/40 p-4 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-6">
            {/* Venue */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full text-[#98733a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#a08049]">
                The Venue
              </p>

              <h2 className="font-serif text-xl text-[#76552c]">
                Your Venue Name
              </h2>

              <p className="mt-1 text-sm text-[#806b50]">
                City, Location
              </p>
            </div>

            {/* Time */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-11 w-11 items-center justify-center text-[#98733a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>

              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#a08049]">
                The Time
              </p>

              <h2 className="font-serif text-xl text-[#76552c]">
                7:00 PM onwards
              </h2>

              <p className="mt-1 text-sm text-[#806b50]">
                Evening Celebration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
