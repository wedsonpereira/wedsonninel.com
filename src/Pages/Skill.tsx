import SectionHeader from "../Components/SectionHeader.tsx";
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
        <div className="py-1 mt-10  text-black">
            <SectionHeader title="Skills" subtitle={'Explore My Skills!'} />
            <div className="grid grid-cols-2 w-[88%] m-auto gap-2 h-250  overflow-hidden">
                <SkillCard

                    title="Frontend Development"
                    logos={frontend}
                    description={"I craft responsive, pixel-perfect interfaces using React, Next.js, and modern CSS — turning designs into fast, accessible web experiences."}
                />
                <SkillCard

                    title="Backend Development"
                    logos={backend}
                    description={"I build robust APIs and server-side logic with Node.js, Spring, and Python, backed by SQL and NoSQL databases for scalable data handling."}
                />
                <SkillCard

                    title="DevOps & Infrastructure"
                    logos={devops}
                    description={"I manage deployments, DNS, and cloud infrastructure — keeping applications reliable, secure, and easy to scale in production."}
                />
                <SkillCard

                    title="Tools & Workflow"
                    logos={tools}
                    description={"I rely on testing frameworks and utility libraries to write clean, well-tested code and streamline my day-to-day development workflow."}
                />
            </div>
        </div>
    );
};

export default Skill;

function SkillCard({title, logos, description, classname}: {
    title: string;
    logos: Icon[],
    description: string,
    classname?: string
}) {
    return (
        <div className={`relative bg-black/70 text-white overflow-hidden rounded  ${classname} w-full min-h-100 place-content-end`}>
           

            {/* Content */}
            <div className="relative p-6 grid grid-cols-1 place-content-center gap-3 place-items-center z-20 min-h-[400px] ">
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                </div>
                <div className="w-[80%]">
                    <p className="text-center">{description}</p>
                </div>
                <div className="flex gap-10 flex-wrap p-5 items-center justify-center">
                    {logos.map((Icon, index) => (
                        <span
                            key={index}
                            className="w-max bg-white rounded h-full px-2 py-1"
                        >
                    <Icon size={54} />
                </span>
                    ))}
                </div>
            </div>
        </div>
    )
}