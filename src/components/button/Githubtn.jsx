import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Githubtn = () => {
    return (
        <div>
            <Link to= "https://github.com/Forsyth01" target='_blank'>
            <button className="flex items-center hover:scale-[106%] m-auto transition-all bg-white text-[#1d1d1d] sm:px-8 py-2 px-4 rounded-md sm:rounded-full duration-500 text-center">
                <FiGithub className="mr-2" />
                <p className="text-sm text-center text-[#1d1d1d]">Github</p>
              </button>
              </Link>
        </div>
    );
};

export default Githubtn;