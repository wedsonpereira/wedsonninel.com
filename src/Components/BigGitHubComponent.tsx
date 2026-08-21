import Button from "./Button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const BigGitHubComponent = () => {
    return (
        <div className={" w-full overflow-hidden h-80 box-content text-white flex flex-col  items-center justify-center transition bg-black "}>
            <span className={"text-5xl h-20"}>Visit My <u className={"decoration-wavy"}>Github</u> Profile Here, Click Button Below</span>
            <Button variant={"simple"} text={"Github"} className={" px-2 py-3 mt-10 h-max rounded flex flex-row-reverse gap-2 hover:text-black text-2xl"}>
                    <FontAwesomeIcon icon={faGithub} size="lg" />
            </Button>
        </div>
    );
};

export default BigGitHubComponent;