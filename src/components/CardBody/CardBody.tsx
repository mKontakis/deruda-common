import React from 'react'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/core/styles'
import cardBodyStyles from "./CardBodyStyles";
import CardBodyProps from "./CardBodyProps";

const useStyles = makeStyles(cardBodyStyles)

const CardBody = ({
                      className = "",
                      children,
                      background,
                      plain,
                      formHorizontal,
                      pricing,
                      signup,
                      color,
                      ...rest
                  }: CardBodyProps) => {

    const classes = useStyles()
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [classes.cardBodyBackground]: background,
        [classes.cardBodyPlain]: plain,
        [classes.cardBodyFormHorizontal]: formHorizontal,
        [classes.cardPricing]: pricing,
        [classes.cardSignup]: signup,
        [classes.cardBodyColor]: color,
        [className]: className !== undefined,
    })

    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    )
};
export default CardBody
