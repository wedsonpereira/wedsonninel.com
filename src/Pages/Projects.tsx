import SectionHeader from "../Components/SectionHeader.tsx";

const Projects = () => {
    return (
        <div className={""}>
            <SectionHeader title="Projects" subtitle={"Developed & Deployed On Server"}/>
            <div className={"m-auto w-[95%]"}>
                <div className={"text-xl shadow-2xl border w-max"}>
                    <div className={"text-5xl"}>
                        <img src="" alt=""/>
                    </div>
                    <div>
                        <span>Domain Name</span>
                    </div>
                    <div>
                        <p>Description</p>
                    </div>
                    <div>
                        <span>Tech Stack</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;