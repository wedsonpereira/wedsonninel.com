import SectionHeader from "../../Components/SectionHeader.tsx";

const Hobbies = () => {
    return (
        <div className={""}>
            <SectionHeader title="Hobbies" subtitle="I'd Like to Share my hobbies here" />
            <div className={"w-[88%] m-auto grid gap-2 grid-cols-[repeat(auto-fit,minmax(340px,1fr))] mt-5"}>
                <div className={" min-h-75 place-content-center  text-5xl  bg-black text-white  text-center rounded"}>Reading</div>
                <div className={" min-h-75 place-content-center  text-5xl  bg-black text-white  text-center rounded"}>Gaming</div>
                <div className={" min-h-75 place-content-center  text-5xl  bg-black text-white  text-center rounded"}>Sports</div>
                <div className={" min-h-75 place-content-center  text-5xl  bg-black text-white  text-center rounded"}>Coding</div>
                <div className={" min-h-75 place-content-center  text-5xl  bg-black text-white  text-center rounded"}>Playing Piano</div>
            </div>
        </div>
    );
};

export default Hobbies;