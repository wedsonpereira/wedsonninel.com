import Button from "./Button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"


const NavBar = () => {
    return (
        <div className={"w-full h-16 min-h-3/6  max-h-full flex justify-between outline-1"}>
            <div className={" px-4 text-white flex items-center justify-center gap-2 w-max border-black outline-olive-500 outline-offset-10"} id={"left"}>
                <span className={" text-2xl text-black"}>Wedson</span>
                <span className={" text-white border px-2 py-1 text-xl rounded bg-black"}>Freelancer.</span>
            </div>

            <div id={"right"} className={"flex items-center justify-start box-border  text-xl"}>
                <Button text={"Home"} variant={"bordered"} className={"h-full rounded-none border-none hover:bg-black place-content-center"}/>
                <Button text={"Services"} variant={"bordered"}  className={"h-full rounded-none border-none hover:bg-black place-content-center"}/>
                <Button text={"Experience"} variant={"bordered"} className={"h-full rounded-none border-none hover:bg-black place-content-center"} />
                <Button text={"Certifications"} variant={"bordered"} className={"h-full rounded-none border-none hover:bg-black place-content-center"} />
                <Button text={"Let's Connect"} variant={"bordered"} className={"flex items-center justify-between gap-1 h-full rounded-none text-white bg-black border-none place-content-center"}>
                    <FontAwesomeIcon icon={faArrowRightLong} className={"-rotate-45"} />
                </Button>
            </div>
        </div>
    );
};

export default NavBar;