import clsx from "clsx";
import { ReactNode } from "react";

type CardColumnProps = {
    label?: ReactNode;
    children?: ReactNode;
    double?: boolean;
    platform?: boolean;
    id: string;
};

function CardColumn(props: CardColumnProps) {
    return (
        <div
            className={clsx(
                "bg-opacity-70 bg-white py-1 px-3 flex flex-col rounded-lg",
                { "col-span-2 flex-grow": props.double },
                { "col-span-2": props.platform }
            )}
        >
            <span className="text-gray-500 text-sm overflow-x-hidden">
                {props.label}
            </span>
            <span
                className={clsx("text-gray-800 text-2xl whitespace-pre", {
                    "min-h-[1.5em]": !props.double,
                    "min-h-[9.5em]": props.double,
                })}
                id={props.id}
            >
                {props.children}
            </span>
        </div>
    );
}

export { CardColumn };
