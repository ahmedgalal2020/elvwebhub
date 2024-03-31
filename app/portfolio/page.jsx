"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-custom-p2 to-blue-300",
    title: "Showare eCommerce",
    desc: "Developed a state-of-the-art e-commerce platform for Argon Dental, utilizing Shopware 6, PHP, and Symfony. Our solution features a custom product catalog, personalized shopping experiences, and advanced security measures, all within a responsive design for optimal usability across devices. This project showcases our technical prowess in delivering scalable, user-centric online retail solutions in the highly specialized dental industry sector.",
    img: "/images/shopware.png",
    link: "https://shop.argon-dental.de/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React Js iPhone 15 Blog",
    desc: "The iPhone 15 Blog is an immersive web experience showcasing the iPhone 15 through React JS, integrating Three.js for 3D visualizations and GSAP for smooth animations. It features an interactive 3D model of the iPhone 15, allowing users to explore the device's design and innovations in detail. This project combines informative content with engaging, responsive animations, ensuring a captivating exploration of the iPhone 15's cutting-edge technology and features, accessible across all devices.",
    img: "/images/Appel.png",
    link: "https://elvwebhub.com/iphone/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Portfolio Web",
    desc: "professional portfolio website designed to showcase the skills and work of Ahmed Hassan, a web developer proficient in HTML, CSS, JavaScript, Bootstrap, and PHP. This website serves as a digital representation of Ahmed's expertise in developing responsive and user-friendly websites and applications.",
    img: "/images/portfolio.png",
    link: "https://ah.elvwebhub.com",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Tailwind Blog",
    desc: "is a sleek blogging platform built with Tailwind CSS, offering a responsive, customizable design with interactive elements. It combines aesthetics with SEO optimization for bloggers to effectively share their content ",
    img: "/images/tw.png",
    link: "https://elvwebhub.com/TailwindED/",
  },
];

const Portfoliopage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Our Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-custom-p3 to-custom-p2 p-20" />
            {items.map((item) => (
              <div
                className={` p-20 h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" className="flex justify-end">
                    <button className="p-3 rounded-lg bg-custom-p1 text-white inline-block">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-5 items-center justify-center text-center mt-40">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developeing and UI Design
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Us
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfoliopage;
