import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FaApple, FaCss3, FaGithub, FaHtml5, FaJs, FaLink, FaPython, FaReact } from 'react-icons/fa'
const Projects = () => {
  return (
    <>
       
<h1 className="mx-auto text-center text-white pb-4 text-5xl font-bold bg-black" id="projects">Projects</h1>

    <section class="md:h-full flex items-center bg-black">
        
        <div class="container px-5 py-24 mx-auto">

            <div class="flex flex-wrap -m-4">
                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full rounded-lg overflow-hidden bg-zinc-900">
                    <img src="https://i.ibb.co/WgJD4pb/vsoft.png" alt=""class="lg:h-72 md:h-48 w-full object-cover object-top" />
                        <div class="p-6 text-white">
                            <h1 class="text-2xl font-semibold mb-3">VSoft Internal WorkFlow Tool</h1>
                            <p className="text-xl text-[#3ac790]">Senior Design Project</p>
                            <p class="leading-relaxed mb-3 text-base">The goal of this project is to create a tool that will provide a web-based integration design creator. This tool will allow users to create designs and use drag-and-drop functionality to visually represent their integration design, integrating different applications and products. The frontend of this tool is created with ReactJS, CSS, HTML. The backend of this project is created with Spring Boot and SQL. This repository is for the frontend of the application. The drag and drop design is created using react-flow-renderer.</p>
                            <div class="flex items-center flex-wrap ">
                            <button button onClick={() => window.open("https://github.com/jaimemcardoso/VSoftFinalCode")} className=""> <FaGithub className="hover:text-[#3ac790] text-2xl "/></button>
                                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                <span className="text-cyan-400 font-bold inline-flex items-center"> <FaReact className="text mr-3 "/> React </span>
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <span className="text-lime-200	 font-bold inline-flex items-center"> <FaJs className="text-yellow mr-3 "/> Javascript </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full rounded-lg overflow-hidden bg-zinc-900">
                    <img src="https://i.ibb.co/WgJD4pb/vsoft.png" alt=""class="lg:h-72 md:h-48 w-full object-cover object-top" />
                        <div class="p-6 text-white">
                            <h1 className="text-2xl font-semibold mb-3">Portfolio Website</h1>
                            <p className="text-xl text-[#3ac790]">Side Project</p>
                            <p class="leading-relaxed mb-3 text-base">Personal Portfolio rework to be made in React.js using functional components for each section of the page. Implemented from scratch using React.JS. Component based easy to update JSX. Used tailwind for the css, along with some manually written css for the navigation bar properties.</p>
                            <div class="flex items-center flex-wrap ">
                            <button button onClick={() => window.open("https://github.com/jaimemcardoso/VSoftFinalCode")} className=""> <FaGithub className="hover:text-[#3ac790] text-2xl "/></button>
                                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                <span className="text-cyan-400 font-bold inline-flex items-center"> <FaReact className="text mr-3 "/> React </span>
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <span className="text-lime-200	 font-bold inline-flex items-center"> <FaJs className="text-yellow mr-3 "/> Javascript </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full rounded-lg overflow-hidden bg-zinc-900">
                    <img src="https://i.ibb.co/HNYNr2H/CC.png" alt=""class="lg:h-72 md:h-48 w-full object-cover object-top" />
                        <div class="p-6 text-white">
                            <h1 class="text-2xl font-semibold mb-3">Comet Climate</h1>
                            <p className="text-xl text-[#3ac790]">Class Project</p>
                            <p class="leading-relaxed mb-3 text-base">Comet Climate is a weather application for iOS/Android devices designed specifically for UT Dallas by implementing two APIs and a Server. I worked with Objective-C to design some of the UI used for the Weather pages.</p>
                            <div class="flex items-center flex-wrap ">
                            <button button onClick={() => window.open("https://devpost.com/software/comet-climate")} className=""> <FaLink className="hover:text-[#3ac790] text-2xl"/></button>

                                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                <span className="text-violet-800 font-bold inline-flex items-center"> <FaApple className="text mr-3 "/> C# </span>
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <span className="text-orange-500	 font-bold inline-flex items-center"> <FaApple className=" mr-3 "/> Objective C </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full rounded-lg overflow-hidden bg-zinc-900">
                    <img src="https://i.ibb.co/XkKYFP4/SBN.png" alt=""class="lg:h-72 md:h-48 w-full object-cover object-top" />
                        <div class="p-6 text-white">
                            <h1 class="text-2xl font-semibold mb-3">Bakery Website</h1>
                            <p className="text-xl text-[#3ac790]">Freelance Project</p>
                            <p class="leading-relaxed mb-3 text-base">Website for local pastry business. Implemented from scratch, with responsive media queries. Class based easy to update code. Built with HTML, CSS, and Javascript.</p>
                            <div class="flex items-center flex-wrap ">
                            <button button onClick={() => window.open("https://sweetsbynat.com")} className=""> <FaLink className="hover:text-[#3ac790] text-2xl mr-3"/></button>
                            <button button onClick={() => window.open("https://github.com/jaimemcardoso/SBN")} className=""> <FaGithub className="hover:text-[#3ac790] text-2xl "/></button>

                                <span class="text-gray-400 mr-0 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                <span className="text-orange-500 font-bold inline-flex items-center"> <FaHtml5 className="text-yellow mr-2"/> HTML </span>
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <span className="text-cyan-400 	 font-bold inline-flex items-center"> <FaCss3 className="text-yellow mr-3 "/> CSS </span>
                                <span className="text-lime-200	 font-bold inline-flex items-center"> <FaJs className="text-yellow mr-3 ml-3 "/> Javascript </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full rounded-lg overflow-hidden bg-zinc-900">
                    <img src="https://i.ibb.co/FJqBxTP/Mario-The-Barber.png" alt=""class="lg:h-72 md:h-48 w-full object-cover object-top" />
                        <div class="p-6 text-white">
                            <h1 class="text-2xl font-semibold mb-3">Barber Website</h1>
                            <p className="text-xl text-[#3ac790]">Freelance Project</p>

                            <p class="leading-relaxed mb-3 text-base">Website for local barber. Implemented from scratch, with responsive media queries. Class based easy to update code. Built with HTML, CSS, & Javascript.</p>
                            <div class="flex items-center flex-wrap ">
                            <button button onClick={() => window.open("https://sweetsbynat.com")} className=""> <FaLink className="hover:text-[#3ac790] text-2xl mr-3"/></button>

                            <button button onClick={() => window.open("https://github.com/jaimemcardoso/MTB")} className=""> <FaGithub className="hover:text-[#3ac790] text-2xl "/></button>
                                <span class="text-gray-400 mr-0 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                <span className="text-orange-500 font-bold inline-flex items-center"> <FaHtml5 className="text-yellow mr-2"/> HTML </span>
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <span className="text-cyan-400 	 font-bold inline-flex items-center"> <FaCss3 className="text-yellow mr-3 "/> CSS </span>
                                <span className="text-lime-200	 font-bold inline-flex items-center"> <FaJs className="text-yellow mr-3 ml-3 "/> Javascript </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>






                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full rounded-lg overflow-hidden bg-zinc-900">
                    <img src="https://i.ibb.co/BskJcD6/Screen-Shot-2020-08-15-at-7-43-04-PM.png" alt=""class="lg:h-72 md:h-48 w-full object-cover object-top" />
                        <div class="p-6 text-white">
                            <h1 class="text-2xl font-semibold mb-3">Google CSSI Final Project</h1>
                            <p className="text-xl text-[#3ac790]">Google Summer Camp Project</p>
                            <p class="leading-relaxed mb-3 text-base">This Quiz-game was developed in Python/HTML/CSS/JS. I worked in a group of 3 to make this game in a time crunch. I used Python for the backend to manipulate data such as scores/levels, and CSS to style the front-end.</p>
                            <div class="flex items-center flex-wrap ">
                            <button button onClick={() => window.open("https://github.com/jaimemcardoso/GoogleCSSIProj")} className=""> <FaGithub className="hover:text-[#3ac790] text-2xl "/></button>
                                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                <span className="text-lime-200 font-bold inline-flex items-center"> <FaPython className="text mr-3 "/>Python </span>
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <span className="text-cyan-400 	 font-bold inline-flex items-center"> <FaCss3 className="text-yellow mr-3 "/> CSS </span>
                                <span className="text-orange-500	 font-bold inline-flex items-center"> <FaHtml5 className="text-yellow mr-3 ml-5 "/> HTML </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>




                



            </div>
        </div>
    </section>
        </>
  )
}

export default Projects