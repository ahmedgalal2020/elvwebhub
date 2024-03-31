"use client";
import Brain from "../components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

{ /* Skills Array */ }

const skills = [
  'figma',
  'Dora',
  'Keyshot',
  '3D Models',
  'Adobe XD',
  'Adobe PS',
  'Adobe illustrator',
  'Adobe AE',
  'Adobe Premiere',
  'Html',
  'CSS',
  'Javascript',
  'Bootstrap',
  'Tailwind CSS',
  'ReactJs',
  'NextJS',
  'SQL',
  'PHP',
  'Joomla',
  'Shopware',
  'Wordpress',
];

const experiences = [
  {
    title: "IT SERVICE TECHNIKER",
    description: "Computer maintenance, troubleshooting, system optimization.",
    date: "(2008/9 – 2009/12)",
    company: "ALTAGY COMPANY",
    Land: "Egypt",
  },
  {
    title: "IT SERVICE TECHNIKER",
    description: "Technical support, troubleshooting, customer satisfaction. ",
    date: "(2010/1 – 2010/11)",
    company: "EGYPTIAN COMPANY FOR CONTRACTING",
    Land: "Egypt",
  },
  {
    title: "IT TRAINER",
    description: "Tech training design, customization, support.",
    date: "(2011/3 – 2012/4)",
    company: "EGYPTIAN DREAM SOCIETY",
    Land: "Egypt",
  },
  {
    title: "Assistant Director , IT administrator and Computer Teacher",
    description: "IT management, support, security, innovation.",
    date: "(3/2012- 6/2021)",
    company: "DAR ALHNAN SCHOOL",
    Land: "SAUDI ARABIA",
  }, 
  {
    title: "FRONTEND DEVELOPER",
    description: "UI development, collaboration, optimization",
    date: "(2014/2019) part-time",
    company: "WESAM ALTMAIUZ COMPANY",
    Land: "SAUDI ARABIA",
  },
  {
    title: "Web designer / Web developer",
    description: "Web design, CMS integration, SEO, team collaboration. ",
    date: "(2023)",
    company: "ZENTRUM FÜR GEISTIGES HEILEN",
    Land: "GERMANY",
  },
  {
    title: "Web designer / Web developer",
    description: "E-commerce development, technical optimization, team collaboration.",
    date: "(7/2023 - Till now)",
    company: "ARGON DENTAL VERTRIEBS GMBH & CO.KG",
    Land: "GERMANY",
  },
 
  // More experiences...
];




const Aboutpage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
console.log(scrollYProgress)
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div className="h-full"
      inherit={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>

      { /* Container */}
      <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}>

        { /* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0  2xl:w-1/2">
        { /* Biography Container */}
          <div className="flex flex-col justify-center gap-12">
            <h1 className="font-bold text-2xl ">Our Journey: Crafting Digital Experiences</h1>
            <p className="max-w-2xl  leading-relaxed ">From humble beginnings to becoming a beacon of innovation in web development, our story is one of passion, resilience, and a relentless pursuit of excellence. At Elv Web Hub, we don’t just build websites; we create digital experiences that empower businesses and resonate with their audiences. Join us as we delve into our journey, our values, and the dedicated team that makes it all happen.
            </p>
            <span className="italic">"The best way to predict the future is to invent it." </span>
            <div className="self-end">
              <Image
                src='/images/ahmed-hassan.svg'
                alt='signature'
                width={300}
                height={30}
              />
            </div>


              {/* BIOGRAPHY SCROLL SVG */}
              <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          { /* Skills Container */}
          <div className="flex flex-col justify-center gap-12">
            <h1 className="font-bold text-2xl">Skills</h1>
            <div className="flex gap-4 flex-wrap">
              {skills.map((skill, index) => (
                <div key={index}
                  className="rounded p-2 text-sm cursor-pointer bg-custom-p1 text-white hover:bg-white hover:text-custom-p1 hover:font-bold">
                  {skill}
                </div>
              ))}
            </div>
      {/* Skills SCROLL SVG */}
      <motion.svg
      initial={{ opacity: 0.2, y: 0 }}
      animate={{ opacity: 1, y: "10px" }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
    >
      <path
        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
        stroke="#000000"
        strokeWidth="1"
      ></path>
      <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
      <path
        d="M15 11L12 14L9 11"
        stroke="#000000"
        strokeWidth="1"
      ></path>
    </motion.svg>

          </div>


          { /* Experience Container */}
          <div className="flex flex-col justify-center gap-12">
          <h1 className="font-bold text-2xl">Experience</h1>
          <div>
            {experiences.map((experience, index) => (
              <div key={index} className="flex h-80 justify-between text-center">
                {index % 2 === 0 ? (
                  // Left side experience for even indexes
                  <div className="w-1/3">
                    <div className="font-semibold bg-custom-p3 text-white w-fit p-3 rounded-b-lg rounded-s-lg  flex self-center">{experience.title}</div>
                    <div className="p-3 text-sm italic text-custom-p1">{experience.description}</div>
                    <div className="text-custom-p2 p-3 text-sm font-semibold">{experience.date}</div>
                    <div className="p-2 rounded  font-semibold  text-custom-p1">{experience.company}<br/><span className="text-custom-p2 text-sm" > ({experience.Land})</span></div>
                  </div>
                ) : (
                  // Empty div for alignment
                  <div className="w-1/3"></div>
                )}
        
                <div className="w-1/6 flex justify-center items-center relative">
                  <div className="w-1 h-full absolute bg-custom-p1 rounded ">
                    <div className="h-5 w-5 absolute bg-white ring-2 ring-custom-p2 rounded-full -left-2"></div>
                  </div>
                </div>
        
                {index % 2 !== 0 ? (
                  // Right side experience for odd indexes
                  <div className="w-1/3">
                    <div className="font-semibold bg-custom-p3 text-white p-3 rounded-b-lg rounded-e-lg w-fit">{experience.title}</div>
                    <div className="p-3 text-sm italic text-custom-p1">{experience.description}</div>
                    <div className="text-custom-p2 p-3 text-sm font-semibold">{experience.date}</div>
                    <div className="p-2 rounded  font-semibold  text-custom-p1">{experience.company}<br/><span className="text-custom-p2 text-sm" > ({experience.Land})</span></div>
                    
                  </div>
                ) : (
                  // Empty div for alignment
                  <div className="w-1/3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        






        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>

  )
}

export default Aboutpage