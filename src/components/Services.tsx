import { useState } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.75}
          stroke="#E43D12"
          className="size-10 md:size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      ),
      title: "Web Development",
      summary: "Creating responsive and dynamic websites.",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.75}
          stroke="#E43D12"
          className="size-10 md:size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>
      ),
      title: "UI/UX Design",
      summary: "Designing user-friendly interfaces.",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.75}
          stroke="#E43D12"
          className="size-10 md:size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      ),
      title: "Database Management",
      summary: "Efficient database solutions.",
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.75}
          stroke="#E43D12"
          className="size-10 md:size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      title: "App development",
      summary: "Building cross-platform mobile applications.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 px-4 gap-y-8 sm:w-4/5 sm:mx-auto lg:w-2/3 lg:gap-y-12">
      <h2 className="text-accent font-bold text-4xl">Services</h2>
      <div className="flex flex-wrap justify-between w-full gap-4 lg:gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-secondary p-8 w-[calc(50%-8px)] aspect-square flex flex-col items-center justify-evenly relative overflow-hidden transition-all duration-300 md:w-[calc(25%-24px)] md:p-4"
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-secondary transition-all duration-300 ${
                hoveredService === service.id
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <p className="text-center font-semibold text-lg text-accent w-4/5 md:text-base lg:text-sm xl:text-lg">
                {service.summary}
              </p>
            </div>
            <div
              className={`flex flex-col h-full justify-evenly items-center transition-opacity duration-300 ${
                hoveredService === service.id ? "opacity-0" : "opacity-100"
              }`}
            >
              {service.icon}
              <h2 className="text-center font-bold text-xl text-accent md:text-base lg:text-sm xl:text-xl">
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
