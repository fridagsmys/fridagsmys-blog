import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [active, setActive] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
              10
            );
            setActive(index);
          }
        });
      },
      {
        root: carouselRef.current,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );

    const items = carouselRef.current?.querySelectorAll(".carousel-item");
    if (items) {
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToItem = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden py-12 gap-y-8 lg:w-4/5 lg:mx-auto">
      <h2 className="text-accent font-bold text-4xl">Testimonials</h2>
      <div className="flex flex-col sm:w-full">
        <div
          ref={carouselRef}
          className="carousel carousel-center max-w-md space-x-4 py-4 px-8 overflow-x-auto scroll-smooth sm:max-w-full"
        >
          <div
            data-index="0"
            id="item1"
            className="carousel-item flex flex-col justify-center w-4/5 bg-primary gap-4 p-8 lg:w-1/2"
          >
            <h3 className="text-black sm:text-sm">
              "Working with Frida was an absolute pleasure. Her attention to
              detail and commitment to excellence is unparalleled."
            </h3>
            <i className="text-black text-end sm:text-sm">- John Doe</i>
          </div>
          <div
            data-index="1"
            id="item2"
            className="carousel-item flex flex-col justify-center w-4/5 bg-primary gap-4 p-8 lg:w-1/2"
          >
            <h3 className="text-black sm:text-sm">
              "Frida has an incredible ability to solve complex problems while
              maintaining a focus on user experience."
            </h3>
            <i className="text-black text-end sm:text-sm">- Jane Smith</i>
          </div>
          <div
            data-index="2"
            id="item3"
            className="carousel-item flex flex-col justify-center w-4/5 bg-primary gap-4 p-8 lg:w-1/2"
          >
            <h3 className="text-black sm:text-sm">
              "Frida's designs and solutions are innovative and truly
              user-friendly."
            </h3>
            <i className="text-black text-end sm:text-sm">- Alex Johnson</i>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <button
            onClick={() => scrollToItem("item1")}
            className={`radio btn h-2 min-h-2 w-8 ${
              active === 0 ? "btn-active bg-accent border-accent" : "border-primary"
            }`}
          ></button>
          <button
            onClick={() => scrollToItem("item2")}
            className={`radio btn h-2 min-h-2 w-8 ${
              active === 1 ? "btn-active bg-accent border-accent" : "border-primary"
            }`}
          ></button>
          <button
            onClick={() => scrollToItem("item3")}
            className={`radio btn h-2 min-h-2 w-8 ${
              active === 2 ? "btn-active bg-accent border-accent" : "border-primary"
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
}
