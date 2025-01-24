import React from "react";

const experiences = [
  {
    company: "BinaryBlock",
    location: "remote",
    role: "Frontend Developer",
    period: "June 2019 - Jan 2025",
    description: [
      "This is a paragraph with text that wraps to the next line. The bullet stands alone, and the text stays aligned.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error deleniti a labore sint aperiam neque mollitia, placeat repudiandae, nesciunt unde veniam, at aliquid. Quia hic voluptates dolor aliquid quidem.",
      "This is a paragraph with text that wraps to the next line. The bullet stands alone, and the text stays aligned.",
    ],
  },
  {
    company: "Cardplot",
    location: "remote",
    role: "Frontend Developer",
    period: "June 2019 - Jan 2025",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error deleniti a labore sint aperiam neque mollitia, placeat repudiandae, nesciunt unde veniam, at aliquid. Quia hic voluptates dolor aliquid quidem.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-10  xl:w-[60%] sm:w-[70%] w-[90%] m-auto">
      <div className="mb-6">
        <p className="text-white text-3xl font-bold border-gray-700">Experience</p>
      </div>
    
      <div className="lg:flex gap-5 space-y-4 sm:space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl p-4">
            <div className="bg-[#1d1d1d] py-1 px-3 rounded-md w-fit my-2">
              <p className="text-[12px] tracking-widest">{exp.period}</p>
            </div>
            <div className="leading-tight">
              <div className="flex gap-1">
                <p className="font-bold text-[#1d1d1d]">{exp.company}</p>
                <p>
                  (
                  <span className="font-light text-sm text-[#1d1d1d]">
                    {exp.location}
                  </span>
                  )
                </p>
              </div>
              <p className="text-[13px] font-semibold text-[#1d1d1d]">
                {exp.role}
              </p>
            </div>
            <p className="text-[#1d1d1d] my-2">{exp.description[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
