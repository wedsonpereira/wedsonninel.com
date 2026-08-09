import * as React from "react";

interface SectionHeaderProps {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}
const SectionHeader = ({title, subtitle}:SectionHeaderProps) => {
    return (
        <div className={"h-max w-[88%] m-auto mt-10  mb-10"}>
            <span className={"text-2xl"}>{title} : </span>
            <h1 className={"text-5xl mt-2"}>{subtitle}</h1>
        </div>
    );
};

export default SectionHeader;