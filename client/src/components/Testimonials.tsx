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

  const scrollToItem = (id: string, index: number) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActive(index)
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
              "Alright, alright, alright."
            </h3>
            <i className="text-black text-end sm:text-sm">
              - Matthew McConaughey
            </i>
          </div>
          <div
            data-index="1"
            id="item2"
            className="carousel-item flex flex-col justify-center w-4/5 bg-primary gap-4 p-8 lg:w-1/2"
          >
            <h3 className="text-black sm:text-sm">
              "Junior developers can be molded. Seniors can have
              baggage.Juniors, fresh, will be very open to following best
              practices and standards you set up. A senior may have
              philosophical difference on implementation and standards. It is
              easy to tell a junior dev, we follow API standards using REST
              principles that are only nouns for URI endpoints. Where as a
              senior may want to use multiple verbs which is anti-pattern for
              us."
            </h3>
            <i className="text-black text-end sm:text-sm">
              - Magnus, collegue at previous internship
            </i>
          </div>
          <div
            data-index="2"
            id="item3"
            className="carousel-item flex flex-col justify-center w-4/5 bg-primary gap-4 p-8 lg:w-1/2"
          >
            <h3 className="text-black sm:text-sm">
              "Oh wow, you made a website? Can you fix my wi-fi?"
            </h3>
            <i className="text-black text-end sm:text-sm">- My Dad</i>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <button
            onClick={() => scrollToItem("item1", 0)}
            className={`radio btn h-2 min-h-2 w-8 ${
              active === 0
                ? "btn-active bg-accent border-accent"
                : "border-primary"
            }`}
          ></button>
          <button
            onClick={() => scrollToItem("item2", 1)}
            className={`radio btn h-2 min-h-2 w-8 ${
              active === 1
                ? "btn-active bg-accent border-accent"
                : "border-primary"
            }`}
          ></button>
          <button
            onClick={() => scrollToItem("item3", 2)}
            className={`radio btn h-2 min-h-2 w-8 ${
              active === 2
                ? "btn-active bg-accent border-accent"
                : "border-primary"
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
}
