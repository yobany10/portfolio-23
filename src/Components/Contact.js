import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = (props) => {
    return (
        <div className="grid gap-y-20 bg-neutral-900 py-20 px-4" ref={props.contactRef}>
            <div className="grid gap-8 max-w-screen-lg mx-auto">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 float-left text-orange-200 mr-4">
                <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clipRule="evenodd" />
                </svg>
                <h1 className="text-4xl text-left text-slate-50 font-bold float-left">Let's get in touch</h1>
            </div>
            <div className='grid gap-4'>
                <div className='flex gap-4 text-white justify-self-center'>
                <a href='https://www.linkedin.com/in/yobany117/' className='text-2xl hover:text-orange-500' rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                <a href='https://github.com/yobany10' className='text-2xl hover:text-orange-500' rel="noopener noreferrer" target="_blank"><FaGithub /></a>
                </div>
                <a href='mailto:yobanydesign@gmail.com' className='text-white hover:text-orange-500 text-lg justify-self-center' rel="noopener noreferrer" target="_blank">yobanydesign@gmail.com</a>
            </div>
            </div>
        </div>
    )
}

export default Contact