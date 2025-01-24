import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience2 = () => {
  return (
    <div className="w-[60%] m-auto py-10">
      <h1 className="text-4xl font-semibold pb-8">Experience</h1>
      <div className="ml-8">
        <Accordion
          type="single"
          collapsible
          className="w-[70%] bg-white rounded-lg px-2 no-underline border-none mb-10 "
        >
          <AccordionItem
            value="item-1"
            className="border-b-2 border-gray-300 px-2"
          >
            <AccordionTrigger className="font-bold hover:no-underline">
              <div>
                <div className="bg-[#1d1d1d] px-2 my-1 rounded-md w-fit">
                  <p className="text-[8px] tracking-widest">
                    June 2019 - Jan 2025
                  </p>
                </div>
                <div className="flex gap-1 leading-tight">
                  <div>
                    <p className="font-bold text-[#1d1d1d]">Cardplot</p>
                  </div>
                  <div className="text-[#1d1d1d]">
                    <p className="text-[#1d1d1d]">
                      {" "}
                      (
                      <span className="font-light text-sm text-[#1d1d1d]">
                        remote
                      </span>
                      )
                    </p>
                  </div>
                </div>
                <p className="text-[13px] font-semibold text-[#1d1d1d]">
                  Frontend Developer
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-4">
                <p className="text-[#1d1d1d] leading-relaxed tracking-wide">
                  I was responsible for crafting the layout, design, and
                  interactive elements of the website or web application using
                  technologies such as ReactJS and TailwindCSS. This includes
                  ensuring the UI is visually appealing, responsive, and easy to
                  navigate.
                </p>
              </div>
              <div className="space-y-1">
                <div className="">
                  <h1 className="text-[#1d1d1d] text-[12px] font-semibold">
                    Skills
                  </h1>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="w-fit  py-1 text-[10px] bg-[#1d1d1d] rounded-full px-2">
                    Reactjs
                  </p>
                  <p className="w-fit  py-1 text-[10px] bg-[#1d1d1d] rounded-full px-2">
                    TailiwindCss
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Experience Card with Divider Lines */}
        <div className="flex gap-5">
          <div className="bg-white rounded-xl p-4 border-b-2 border-gray-300">
            <div className="bg-[#1d1d1d] py-1 px-2 my-1 rounded-md w-fit">
              <p className="text-[8px] tracking-widest">June 2019 - Jan 2025</p>
            </div>
            <div className="leading-tight">
              <div className="flex gap-1">
                <div>
                  <p className="font-bold text-[#1d1d1d]">Cardplot</p>
                </div>
                <div className="text-[#1d1d1d]">
                  <p className="text-[#1d1d1d]">
                    {" "}
                    (
                    <span className="font-light text-sm text-[#1d1d1d]">
                      remote
                    </span>
                    )
                  </p>
                </div>
              </div>
              <p className="text-[13px] font-semibold text-[#1d1d1d]">
                Frontend Developer
              </p>
            </div>
            <p className="text-[#1d1d1d] my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              error deleniti a labore sint aperiam neque mollitia, placeat
              repudiandae, nesciunt unde veniam, at aliquid. Quia hic voluptates
              dolor aliquid quidem.
            </p>

            <div className="space-y-1">
              <div className="">
                <h1 className="text-[#1d1d1d] text-[12px] font-semibold">
                  Skills
                </h1>
              </div>
              <div className="flex gap-1 items-center">
                <p className="w-fit  py-1 text-[10px] bg-[#1d1d1d] rounded-full px-2">
                  Reactjs
                </p>
                <p className="w-fit  py-1 text-[10px] bg-[#1d1d1d] rounded-full px-2">
                  TailiwindCss
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-4 border-b-2 border-gray-300">
            <div className="bg-[#1d1d1d] py-1 px-2 my-1 rounded-md w-fit">
              <p className="text-[8px] tracking-widest">June 2019 - Jan 2025</p>
            </div>
            <div className="leading-tight">
              <div className="flex gap-1">
                <div>
                  <p className="font-bold">Cardplot</p>
                </div>
                <div>
                  <p>
                    {" "}
                    (<span className="font-light text-sm">remote</span>)
                  </p>
                </div>
              </div>
              <p className="text-[13px] font-semibold">Frontend Developer</p>
            </div>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              error deleniti a labore sint aperiam neque mollitia, placeat
              repudiandae, nesciunt unde veniam, at aliquid. Quia hic voluptates
              dolor aliquid quidem.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pb-10">
            {items.map((item) => (
              <motion.a
                key={item.id}
                href={item.link}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-[#1d1d1d] p-4 border xl:border-non border-gray-700"
              >
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] object-cover rounded-xl"
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon (appears on hover) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>

                {/* Name Animation on Hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {item.name}
                </motion.div>

                {/* Card body */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">{item.text}</p>
                  <div className="space-y-1 mt-4">
                    <h1 className="text-[#fec212 text-[12px] font-medium">
                      Skills and deliverables:
                    </h1>
                    <div className="flex gap-2 flex-wrap">
                      {item.skills.map((skill, index) => (
                        <p
                          key={index}
                          className="py-1 text-[10px] bg-[#333333] text-[#1d1d1d rounded-full px-3"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
            {/* {experiences.map((exp, index) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          className="w-full no-underline border-none my-4"
        >
          <AccordionItem value={`item-${index}`} className="border-none">
            <AccordionTrigger className="font-bold hover:no-underline">
              <div>
                <div className="flex gap-1">
                  <p className="font-bold">{exp.company}</p>
                  <p>
                    (
                    <span className="font-light text-sm">{exp.location}</span>)
                  </p>
                </div>
                <p className="text-[13px] font-semibold">{exp.role}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-4 ml-6">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm">
                    {desc}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))} */}

<div className=""></div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {/* {items.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer xl:bg-[#1d1d1d] p-4 col-span-2"
          > */}
        {/* Image */}
        {/* <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-xl border"
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            /> */}

        {/* Icon (appears on hover) */}
        {/* <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white "
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.div> */}

        {/* Name Animation on Hover */}
        {/* <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {item.name}
            </motion.div> */}

        {/* Card body */}
        {/* <div className="mt-4">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{item.text}</p>
              <div className="space-y-1 mt-4">
                <h1 className="text-[#fec212 text-[12px] font-medium">
                  Build with -
                </h1>
                <div className="flex gap-2 flex-wrap">
                  {item.skills.map((skill, index) => (
                    <p
                      key={index}
                      className="py-1 text-[10px] bg-[#333333] text-[#1d1d1d rounded-full px-3"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div> */}
        {/* </motion.a>
        ))} */}
      </div>
      {/* Link to more projects */}
      {/* <div className="flex justify-end mt-6">
        <Link to="/project">
          <FaArrowRight className="text-2xl text-[#fec212] cursor-pointer hover:scale-110 transition-transform" />
        </Link>
      </div> */}
    </div>
  );
};

export default Experience2;
