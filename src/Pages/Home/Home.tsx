
import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import {Suspense} from "react";
import Skill from "./Skill.tsx";
import BigGitHubComponent from "../../Components/BigGitHubComponent.tsx";
import Education from "./Education.tsx";
import Hobbies from "./Hobbies.tsx";
import Footer from "../../Components/Footer.tsx";
import NavBar from "../../Components/NavBar.tsx";

const Home = () => {
    return (
        <Suspense fallback={"Loading..."}>
            <NavBar/>
            <Hero/>
            <Projects />
            <BigGitHubComponent/>
            <Skill/>
            <Education/>
            <Hobbies/>
            <Footer/>
        </Suspense>
    );
};

export default Home;