import React from "react";

export default interface CardHeaderProps {
    [key: string]: any,
    children?: React.ReactNode,
    className?: string,
    /**
     * The color of the header
     */
    color?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose' | undefined,
    plain?: boolean,
    image?: boolean,
    contact?: boolean,
    signup?: boolean,
    stats?: boolean,
    icon?: boolean,
    text?: boolean,
}

