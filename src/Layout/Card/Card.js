import React from 'react'
import { UiCard } from './styles'

const Card = (props) => {
  return (
    <UiCard>{props.children}</UiCard>
  )
}

export default Card