import { useState } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { motion } from "motion/react";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    checkBox: undefined,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const FORMSPREE_URL = "https://formspree.io/f/mldjvrlw";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.checkBox) {
      // Om checkboxen är ibockad => troligen en bot, ignorera
      setErrors("Bot detected.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrors("Please fill in all fields.");
      return;
    }

    setErrors(null);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setErrors(data?.error || "Something went wrong.");
      }
    } catch (error) {
      setErrors("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="py-24 p-4 container mx-auto text-center flex flex-col gap-8 sm:w-4/5 lg:w-1/2 lg:mb-48">
      {submitted ? (
        <>
          <Confetti
            className="w-full"
            confettiSource={{ x: window.innerWidth / 2, y: 350, w: 1, h: 1 }}
            numberOfPieces={100}
            recycle={false}
            tweenDuration={100}
          />
          <div className="flex flex-col items-center gap-12 min-h-screen">
            <h2 className="text-4xl text-accent font-bold sm:text-3xl">
              Thank you, I will try to answer you as soon as I can!
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="#FFA2B6"
              className="size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
              />
            </svg>
            <Link to="/">
              <button className="btn">Go back home</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <motion.h2
            className="text-4xl text-accent font-bold sm:text-3xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Better together
          </motion.h2>
          <motion.p
            className="text-lg sm:text-sm lg:mb-0"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.25 }}
          >
            I enjoy working with dedicated creatives from every corner. Let's
            talk!
          </motion.p>
          {errors && (
            <div className="text-error text-sm font-medium">{errors}</div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 justify-center items-end"
          >
            <motion.input
              type="text"
              name="name"
              placeholder="What's your name?"
              className="input input-bordered bg-primary border-primary w-full"
              value={formData.name}
              onChange={handleChange}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.input
              type="text"
              name="email"
              placeholder="What email can I reach you on?"
              className="input input-bordered bg-primary border-primary w-full"
              value={formData.email}
              onChange={handleChange}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            <motion.textarea
              name="message"
              placeholder="What do you want to discuss?"
              className="textarea bg-primary border-primary w-full text-base h-32"
              value={formData.message}
              onChange={handleChange}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            />
            <motion.input
              type="checkbox"
              name="checkBox"
              className="checkbox botCheck"
              checked={formData.checkBox}
              onChange={handleChange}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            />
            <motion.button
              type="submit"
              className="btn bg-secondary border-secondary text-white w-fit sm:btn-sm sm:text-xs hover:bg-accent sm:w-fit"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              Send
            </motion.button>
          </form>
        </>
      )}
    </div>
  );
};

export default Connect;
