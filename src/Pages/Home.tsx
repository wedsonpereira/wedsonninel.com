
import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import {Suspense} from "react";

const Home = () => {
    return (
        <Suspense fallback={"Loading..."}>
            <Hero/>
            <Projects />
        </Suspense>
    );
};

export default Home;