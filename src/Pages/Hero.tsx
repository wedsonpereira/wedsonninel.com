import profile  from '../Data/HomePage/Hero.ts'
import Button from "../Components/Button.tsx";
import { Link } from "react-router-dom";
import heroImage from "../../public/hero.jpeg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faGlobe} from "@fortawesome/free-solid-svg-icons";


const Hero = () => {
    return (
        <div className={"flex items-center justify-between h-screen bg-olive-200"}>
            <div className={"flex justify-center flex-col w-[50%] gap-5"}>
                <div className={"m-auto w-3/4"}>
                    <h1 className={"text-5xl font-bold"}>Hi I'm {profile?.profileInfo.profileName}</h1>
                    <h1 className={"text-2xl leading-16 underline"}>{profile.profileInfo.heroTitle}</h1>
                    <div className={"flex flex-col gap-4"}>
                        <p className={"text-xl leading-8"}>
                        {profile?.profileInfo.heroIntro}
                    </p>
                        <p className={"text-xl leading-8"}>
                            {profile?.profileInfo.heroIntro1}
                        </p>
                    </div>
                </div>
                <div className={"m-auto w-3/4 flex items-center gap-3"}>
                    <Button className={"p-3!"} variant={"bordered"}>
                        <Link to={"./services"} >Explore Services</Link>
                        <FontAwesomeIcon icon={faGlobe} className={"ml-1"}/>
                    </Button>
                    <Button text={"Download Resume"}  className={"p-3!"} variant={"bordered"}>
                        <FontAwesomeIcon icon={faDownload} className={"ml-1"}/>
                    </Button>
                </div>
                <div className={"m-auto mt-6 w-3/4 flex items-center gap-3"}>
                    <span className={"text-2xl"}>{profile.profileInfo.tagline}</span>
                </div>

            </div>
            <div className={"overflow-hidden h-screen flex-1"}>
                <img src={heroImage} alt="" className={"w-full h-full object-cover"} />
            </div>
        </div>
    );
};

export default Hero;