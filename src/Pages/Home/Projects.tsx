import SectionHeader from "../../Components/SectionHeader.tsx";
import project from "../../Data/HomePage/Projects.ts"
import {FirebaseIcon, NextjsIcon, TypescriptIconRound,NodejsIcon} from "@dev.icons/react";
import "./Home.css"


const Projects = () => {
    return (
        <div className={"mb-20"}>
            <SectionHeader title="Projects" subtitle={"Developed & Deployed On Server"}/>
            <div className={"m-auto w-[88%] pc-container"}>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
            </div>
        </div>
    );
};


function Card(){
    return (
        <div className={"w-full rounded overflow-hidden text-black flex-wrap p-1 outline outline-olive-300"}>
            <div className={"py-4 px-3 font-bold  flex flex-col"}>
                <a className={"text-2xl hover:text-olive-900"} href={project.domain}>#{project.project}</a>
                <span className={"w-1/4 h-1 bg-black"}></span>
            </div>
            <div className={"w-full"}>
                <img src={project.image} className={"rounded grayscale w-11/12 m-auto"} alt=""/>
            </div>
            <div className={"p-3"}>
                <div className={"p-1"} >
                    <p className={"text-[1rem] leading-5 "}>{project.description}</p>
                </div>
                <hr className={"mt-4 w-1/2 m-auto text-olive-400"}/>
                <div className={"w-max m-auto"}>
                    <label htmlFor="" className={"text-[0.7rem] m-auto "}>Tech Stack</label>
                </div>
                <div className={"p-1 mt-1"}>
                    <span className={"text-sm place-items-center justify-center flex gap-2"}>
                        <NextjsIcon size={28} />
                        <TypescriptIconRound size={28} />
                        <FirebaseIcon size={28} />
                        <NodejsIcon size={28} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Projects;