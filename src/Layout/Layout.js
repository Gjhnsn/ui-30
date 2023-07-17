import React from 'react'
import { Grid } from './styles'

const Layout = (props) => {
  return (
    <Grid>{props.children}</Grid>
  )
}

export default Layout