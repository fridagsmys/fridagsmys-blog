import { useState } from "react";

const ConnectCto = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("You clicked Contact Me");
  };

  return (
    <div className="py-12 p-4 container mx-auto text-center flex flex-col gap-8 sm:w-4/5 lg:w-1/2">
      <h2 className="text-4xl text-accent font-bold sm:text-3xl">Let's Connect</h2>
      <p className="mb-8 text-lg sm:text-sm lg:mb-0">
        I'd love to hear about your project or discuss opportunities to
        collaborate. Fill out the form below, and I'll get back to you as soon
        as possible.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="input input-bordered w-full max-w-xs sm:input-sm"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <button className="btn bg-accent border-accent text-white sm:btn-sm sm:text-xs">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default ConnectCto;
