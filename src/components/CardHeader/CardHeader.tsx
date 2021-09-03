import React from 'react'
import CardHeaderProps from "./CardHeaderProps";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core";
import CardHeaderStyles from "./CardHeaderStyles";

//type Color = 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose' | undefined
//type CardHeaderColor = `${Color}CardHeader`

const useStyles = makeStyles(CardHeaderStyles)

const CardHeader = ({
                        className = "",
                        children,
                        color = 'primary',
                        plain,
                        image,
                        contact,
                        signup,
                        stats,
                        icon,
                        text,
                        ...rest
                    }: CardHeaderProps) => {

    type Color = 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose'
    type CardHeaderColor = `${Color}CardHeader`

    const classes = useStyles()
    const cardHeaderColor: CardHeaderColor = `${color}CardHeader`

    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        [classes[cardHeaderColor]]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderImage]: image,
        [classes.cardHeaderContact]: contact,
        [classes.cardHeaderSignup]: signup,
        [classes.cardHeaderStats]: stats,
        [classes.cardHeaderIcon]: icon,
        [classes.cardHeaderText]: text,
        [className]: className !== undefined,
    })
    return (
        <div className={cardHeaderClasses} {...rest}>
            {children}
        </div>
    )
};


export default CardHeader
