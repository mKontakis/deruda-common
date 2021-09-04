import React from "react";

export default interface CardBodyProps {
    [key: string]: any,
    children?: React.ReactNode,
    className?: string,
    background?: boolean,
    plain?: boolean,
    formHorizontal?: boolean,
    pricing?: boolean,
    signup?: boolean,
    color?: boolean,
}
