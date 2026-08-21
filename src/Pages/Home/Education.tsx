import SectionHeader from "../../Components/SectionHeader.tsx";

const Education = () => {
    return (
        <div className={"p-2 w-full mb-20"}>
            <SectionHeader  title={"Education & Courses"} subtitle={"I'm a Bachelor, And a Skilled Full Stack Developer"}/>
            <div className={"w-[88%] m-auto grid gap-6"}>
                <div className={"text-4xl flex flex-col gap-4 py-7 px-4 border  border-black/30"}>
                    <span>Bachelor of Computer Application (BCA) </span>
                    <ul className={"grid gap-2 "}>
                        <li className={"ml-3 text-2xl"}>College Name:  Alvas College</li>
                        <li className={"ml-3 text-2xl"}>Major:  Computer Science</li>
                        <li className={"ml-3 text-2xl"}>CGPA: 87.73</li>
                        <li className={"ml-3 text-2xl"}>End Date: 19 July 2024</li>
                        <li className={"ml-3 text-2xl"}>Duration : 3 Years</li>
                    </ul>
                </div>
                <div className={"text-4xl flex flex-col gap-4 py-7 px-4 border  border-black/30"}>
                    <span>Courses</span>
                    <ul className={"text-2xl px-5 py-1 grid gap-4"}>
                        <li>
                            Spring Boot 4, Spring 7 & Hibernate for Beginners

                        </li>
                        <li>
                            Spring Security Zero To Master Along with JWT,OAuth2
                        </li>
                        <li>
                            Java Data Structures & Algorithms + LEETCODE Exercises
                        </li>
                        <li>
                            Fundamentals of Database Engineering
                        </li>
                        <li>
                           Web Development
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;