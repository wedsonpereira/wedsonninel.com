import * as React from "react";

interface SectionHeaderProps {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}
const SectionHeader = ({title, subtitle}:SectionHeaderProps) => {
    return (
        <div className={"h-max w-[88%] m-auto mt-10  mb-10 flex flex-col gap-3"}>
            <span className={"text-2xl font-extralight uppercase tracking-wider"}>{title} : </span>
            <h1 className={"text-5xl font"}>{subtitle}</h1>
        </div>
    );
};

export default SectionHeader;