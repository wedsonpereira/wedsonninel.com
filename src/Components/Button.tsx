import type {ReactNode} from "react";

interface String {
    text?: string;
    variant: string;
    children?: ReactNode;
    className?: string;
}

const Button = ({text,variant,children,className}: String) => {

    return (
        <>
            {variant === "simple" &&
                <div
                    className={`w-max py-1 px-3 cursor-pointer rounded  transition ${className} hover:border`}>
                    {text}
                    {children}
                </div>
            }
            {variant === "bordered" &&
                <div
                    className={`w-max py-1 px-3 cursor-pointer rounded border text-black  ${className} hover:text-white hover:bg-black transition `}>
                    {text}
                    {children}
                </div>
            }
        </>

    );
};

export default Button;