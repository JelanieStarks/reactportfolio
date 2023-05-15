import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black bg-inherit'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 myProjects'>
                    <p className='text-5xl font-bold inline border-b-4 text-black border-pink-600'>Work</p>
                    <p className='py-6'>My recent projects</p>
                </div>
                {/* this shenanigans was what I learned from Code Commerce */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
                       
                       {/* Hover effects */}
                        <div>
                            <span>

                            </span>
                            <div>
                                <a href="">

                                </a>
                                <a href="">

                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Work