const About = () => {
    return (
        <div className="relative px-6 lg:px-8">
            <div className='grid max-w-screen-lg mx-auto py-32'>
                <div className='flex gap-8 justify-self-center'>
                <p className='wave inline-block text-5xl justify-self-right self-center'>👋</p>
                <div className="grid gap-4">
                    <h1 className='text-4xl font-bold'>Hi There!</h1>
                    <p className='max-w-lg text-lg italic text-gray-600'>I'm a Front End Developer with Graphic Design experience. I enjoy building and maintaining responsive web applications from the ground up. Some languages I'm proficient in include: HTML, CSS, and JavaScript; plus modern libraries like ReactJS.</p>
                </div>
                </div>
            </div>
            <div className="bg-white absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
        </div>
    )
}

export default About