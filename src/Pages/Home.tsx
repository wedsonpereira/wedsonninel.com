
import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import {Suspense} from "react";
import Skill from "./Skill.tsx";

const Home = () => {
    return (
        <Suspense fallback={"Loading..."}>
            <Hero/>
            <Projects />
            <Skill/>
        </Suspense>
    );
};

export default Home;