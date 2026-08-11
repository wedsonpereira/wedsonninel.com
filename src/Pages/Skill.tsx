import SectionHeader from "../Components/SectionHeader.tsx";

const Skill = () => {
    return (
        <div className={"bg-red-500 py-1 mt-10 text-white "}>
            <SectionHeader title="Skills" subtitle={'Explore My Skills!'} />
            <div className={"grid grid-cols-2 gap-4 w-[88%] m-auto"}>
                <SkillCard title="Frontend Development" logos={[]} description={"I'm a frontend Developer who enjoys creating stunning websites"} />
                <SkillCard title="Frontend Development" logos={[]} description={"I'm a frontend Developer who enjoys creating stunning websites"} />
                <SkillCard title="Frontend Development" logos={[]} description={"I'm a frontend Developer who enjoys creating stunning websites"} />
            </div>
        </div>
    );
};

export default Skill;

function SkillCard({ title, logos,description }: { title: string; logos: string[],description: string }) {
    return(
        <div className={"bg-blue-800 text-white flex items-center justify-center flex-col"}>
            <div className={""}>
                <h1 className={"text-3xl"}>{title}</h1>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}