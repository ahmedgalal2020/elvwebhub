"use client"

import Image from "next/image";
import { motion } from "framer-motion"
export default function Home() {


  return (
    <motion.div className="h-full"
    inherit={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration: 1}}>
      <div className="h-full flex flex-col lg:flex-row-reverse  gap-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  mt-10">
        {/*Image Container*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative  ">
          <Image src='/images/hero2.svg' alt='Logo' fill className="object-contain" />
        </div>
        {/*Text Container*/}
        <div className="h-1/2  flex flex-col lg:h-full lg:w-1/2 gap-8 justify-center items-center ">
          <h1 className="text-custom-p1 text-5xl font-bold">Craftinq Digital Experiences, Designing Tomorrow.</h1>
          <p>Welcome to Our digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of Code, our
            portfolio showcases a diverse collection of projects that reflect our
            commitment to excellence.</p>
          <div className="flex gap-4 w-full">
          <a href="/portfolio" className="p-3 rounded-lg bg-custom-p1 text-white inline-block">Our Work</a>
          <a href="/contact" className="p-3 rounded-lg ring-1 ring-custom-p1 inline-block">Contact Us</a>
          
          </div>
        </div>
      </div>
    </motion.div>
  );
}
