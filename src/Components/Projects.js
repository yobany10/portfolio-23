import ProjectCard from './ProjectCard'

const projectData = [
    {
        name: 'Scorebase',
        description: 'Scorebase helps coaches from the BQ ministry with scorekeeping and also allows them to search through the 2023 material.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-23-29cb7.appspot.com/o/scorebase.png?alt=media&token=8b27352d-ffdc-43a0-a4b9-607fd0247b9c',
        github: 'https://github.com/yobany10/scorebase-2',
        demo: 'https://scorebase.netlify.app/'
    },
    {
        name: 'POS PRO',
        description: 'POS PRO is a minimalistic Point-of-Sale (POS) system. It is great for users who are looking for a quick and simple solution.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-23-29cb7.appspot.com/o/pospro.png?alt=media&token=ad2c0f3b-b42d-4ec6-a26d-c12fc6ea3431',
        github: 'https://github.com/yobany10/scorebase-2',
        demo: 'https://pospro.netlify.app/'
    },
    {
        name: 'Currently',
        description: 'Currently quickly gets you up to date on the weather and news based on the city of your choice.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-23-29cb7.appspot.com/o/currently.png?alt=media&token=7988aae5-435f-4fce-801b-f7d12f4f571c',
        github: 'https://github.com/yobany10/currently',
        demo: 'https://currently-80b34.web.app/'
    },
    {
        name: 'Recetas',
        description: 'Hungry? Recetas can help you find some recipes that are based on the food or dish of your choice.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-23-29cb7.appspot.com/o/recetas3.png?alt=media&token=e8952dc1-6378-4f32-8841-27290a04e349',
        github: 'https://github.com/yobany10/recetas',
        demo: 'https://recetas-8c07d.web.app/'
    }
]

const Projects = (props) => {
    return (
        <div className="grid gap-y-20 bg-neutral-900 py-40 px-4" ref={props.projectsRef}>
            <div className="max-w-screen-lg mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 float-left text-orange-200 mr-4">
            <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
            <h1 className="text-4xl text-left text-slate-50 font-bold float-left">Recent Projects</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 max-w-screen-lg mx-auto'>
                {projectData.map((item, index) => {
                    return <ProjectCard project={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default Projects