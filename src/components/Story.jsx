import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef("null");
  const handleMouseLeave = () => {
    gsap.to(frameRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const elemet = frameRef.current;

    if (!elemet) return;
    const rect = elemet.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * -10;
    const rotateY = ((centerX - x) / centerX) * 10;

    gsap.to(elemet, {
      rotationY: rotateY,
      rotationX: rotateX,
      duration: 0.5,
      ease: "power1.inOut",
      transformPerspective: 100,
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50 ">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title={"The st<b>o</b>ry of<br> a Hidden Real<b>m</b>"}
            sectionId={"story"}
            containerClass={
              "mt-5 pointer-events-none mix-blend-difference relative z-10"
            }
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              possibilities.
            </p>
            <Button
              id={"realm-buttom"}
              title={"discover prologue"}
              containerClass="mt-5 text-white hover:bg-blue-50 hover:text-black border-2 border-blue-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Story;
