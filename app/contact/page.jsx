"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contactpage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "We are waiting for your message";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
    <div className="flex flex-col lg:flex-row pb-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 w-full h-full ">

        {/* TEXT CONTAINER */}
        <div className="flex-1 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-4">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}

          </div>



        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex-1 bg-red-50 rounded-xl text-xl flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center p-6 sm:p-12 md:p-20"
        >

          <span>Name:</span>
          <input
            name="user_Name"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none p-2 pl-0"
            placeholder="Name"
            required
          />
          <span>Number:</span>
          <input
            name="user_Number"
            type="tel"
            className="bg-transparent border-b-2 border-b-black outline-none p-2 pl-0"
            pattern="[+]?[0-9]{1,4}[-\s]?[(]?[0-9]{1,3}[)]?[-\s]?[0-9]{1,4}[-\s]?[0-9]{1,4}[-\s]?[0-9]{1,9}"
            placeholder="Number"
            required
          />

          <span>Email:</span>
          <input
            name="user_email"
            type="Email"
            className="bg-transparent border-b-2 border-b-black outline-none p-2 pl-0"
            placeholder="Email ..."
            required
          />

          <span> Message:</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none p-2 pl-0  "
            name="user_message"
            aria-label="User Message"
            placeholder="Type your message here..."
            required
          ></textarea>




          <button className="bg-custom-p3 rounded font-semibold text-white p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contactpage;
