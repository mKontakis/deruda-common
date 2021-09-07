import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GridItemStyles from "./GridItemStyles";
import GridItemProps from "./GridItemProps";

const useStyles = makeStyles(GridItemStyles)

export default function GridItem({ children, className = "", ...rest }: GridItemProps) {
  const classes = useStyles()

  return (
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  )
}
