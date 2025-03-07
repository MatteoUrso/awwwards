import gsap from "gsap";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  containerClass?: string;
};

export function AnimatedTitle({ title, containerClass }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`animated-title ${containerClass}`} ref={containerRef}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((char, i) => (
            <span
              key={i}
              className="animated-word special-font font-zentry font-black opacity-0"
              dangerouslySetInnerHTML={{ __html: char }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
