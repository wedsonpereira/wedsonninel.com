import SectionHeader from "../../Components/SectionHeader.tsx";
import {
    _React,
    Angular,
    Axios,
    Cloudflare,
    Cpanel,
    Css,
    Dyndns,
    Express,
    Firebase,
    GoogleCloud,
    Html5,
    type Icon,
    Java,
    Javascript,
    Jest,
    Mongodb,
    Mysql,
    Nextjs,
    Nodejs,
    Python,
    Spring,
    Typescript,
    Vite,
    Webmin
} from "@dev.icons/react";

import fe from "../../assets/Home/svg/App data-amico.svg"
import bc from "../../assets/Home/svg/Software integration-bro.svg"
import ch from "../../assets/Home/svg/Cloud hosting-amico.svg"
import tol from "../../assets/Home/svg/Design tools-amico.svg"

const frontend = [
    Angular, Vite, _React, Html5, Css, Javascript, Nextjs, Jest, Axios
];

const backend = [
    Spring, Express, Mysql, Mongodb, Java, Python, Typescript, Nodejs, Firebase
];

const devops = [
    Cpanel, Cloudflare, Dyndns, GoogleCloud, Webmin
];

const tools = [
    Jest, Axios, Cpanel, Webmin
];


const Skill = () => {
    return (
        <div className="py-1 mt-10 mb-20 text-black">
            <SectionHeader title="Skills" subtitle={'Explore My Skills!'} />
            <div className="grid grid-cols-2 w-[88%] m-auto gap-10 h-250  overflow-hidden">
                <SkillCard
                    image={fe}
                    title="Frontend Development"
                    logos={frontend}
                    description={"I craft responsive, pixel-perfect interfaces using React, Next.js, and modern CSS — turning designs into fast, accessible web experiences."}
                />
                <SkillCard
                    image={bc}
                    title="Backend Development"
                    logos={backend}
                    description={"I build robust APIs and server-side logic with Node.js, Spring, and Python, backed by SQL and NoSQL databases for scalable data handling."}
                />
                <SkillCard
                    image={ch}
                    title="DevOps & Infrastructure"
                    logos={devops}
                    description={"I manage deployments, DNS, and cloud infrastructure — keeping applications reliable, secure, and easy to scale in production."}
                />
                <SkillCard
                    image={tol}
                    title="Tools & Workflow"
                    logos={tools}
                    description={"I rely on testing frameworks and utility libraries to write clean, well-tested code and streamline my day-to-day development workflow."}
                />
            </div>
        </div>
    );
};

export default Skill;

function SkillCard({title, logos, description, classname,image}: {
    title: string;
    logos: Icon[],
    description: string,
    classname?: string,
    image?: string,
}) {
    return (
        <div className={`relative text-black  overflow-hidden rounded  ${classname} w-full`}>
            {/* Content */}
            <div className="relative flex flex-col justify-between border border-black/20 p-6  gap-4  z-20 min-h-100  h-full">
                <div className={"flex flex-col gap-3 opacity-80"}>
                    <div>
                        <h1 className="text-[2.5rem] text-black/90 font-bold">{title}</h1>
                    </div>
                    <div className={"h-1 bg-black/60 rounded-full w-[30%]"}></div>
                    <div className="w-[66%] mt-4">
                        <p className="text-xl">{description}</p>
                    </div>
                </div>

                <div className="flex gap-6 flex-wrap mt-3 items-start ">

                    {logos.map((Icon, index) => (
                        <span key={index} className="w-max bg-white rounded px-2 py-1 ">
                            <Icon size={50} style={{aspectRatio:"3/4"}} />
                        </span>
                    ))}
                </div>
            </div>

            <div className={"absolute right-5 top-5 w-1/3 h-1/3"}>
                <img src={image} alt="" className={"opacity-50 object-cover object-center "} />
            </div>
        </div>
    )
}