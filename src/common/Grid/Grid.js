import React from 'react'
import { Grid } from './styles'

const GridLayout = (props) => {
  return (
    <Grid>{props.children}</Grid>
  )
}

export default GridLayout;