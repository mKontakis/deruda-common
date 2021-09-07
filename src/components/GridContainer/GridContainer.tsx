
import {createStyles, makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import GridContainerProps from "./GridContainerProps";
import GridContainerStyles from "./GridContainerStyles";

const styles = createStyles(GridContainerStyles)

const useStyles = makeStyles(styles)

const GridContainer = ({children, className = "", ...rest}: GridContainerProps) => {

  const classes = useStyles()
  return (
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  )
};

export default GridContainer
