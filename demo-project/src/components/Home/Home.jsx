import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full inset-0 bg-gradient-to-r from-purple-400 to-transparent opacity-80 
         max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 px-4 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-xl text-orange-300 drop-shadow-xl  font-bold sm:text-4xl">
                            Hello! My Name is,
                            <span className="hidden sm:block text-1xl mt-2 drop-shadow-lg text-lime-500  font-extrabold tracking-tight">SACHIN GIRASE.</span>
                        </h2>
                        <h4 className='text-3xl '>I am webDeveloper! <br/>
                        Welcome to my portfolio Website.                     
</h4>


                        {/* <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link> */}
                    </div>
                </div>

                <div className="absolute inset-0   rounded-full  w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96  rounded-full object-cover h-96 shadow-2xl  hover:shadow-rose-500  translate-x- " src="/Images/photo1.jpg" alt="image" />
               
                </div>
               
            </aside>

            <div className="grid  place-items-center rounded-lg bg-opacity-60 sm:mt-20">
                <img className="sm:w-96 w-48 lg-w-48 object-cover  rounded-lg bg-white backdrop-blur-lg bg-opacity-50 shadow-2xl p-6 " src="/Images/namaste.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-indigo-700 text-2xl sm:text-5xl py-10 font-medium animate-bounce  tracking-tight">Thanks for Reaching Me!</h1>
        </div>
    );
}