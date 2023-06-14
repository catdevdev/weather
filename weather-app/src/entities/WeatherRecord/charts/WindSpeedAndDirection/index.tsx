import React from 'react'

import 'twin.macro'
import {
  Arrow,
  ArrowContainer,
  Circle,
  Container,
  E,
  Label,
  N,
  NE,
  NW,
  S,
  SE,
  SW,
  Tail,
  W,
  WindSpeedContainer,
  WindSpeedLabel,
  WindSpeedValue,
} from './styles'

interface Props {
  windAngle: number
  windSpeed: number
}

const WindSpeedAndDirection = ({ windAngle, windSpeed }: Props) => {
  return (
    <Container>
      <Label>Wind</Label>
      {/* <div tw="rou" > */}
      <Circle>
        <N>N</N>
        <NE>NE</NE>
        <E>E</E>
        <SE>SE</SE>
        <S>S</S>
        <SW>SW</SW>
        <W>W</W>
        <NW>NW</NW>
        <WindSpeedContainer>
          <WindSpeedLabel>Wind direction</WindSpeedLabel>
          <WindSpeedValue>{windAngle}°</WindSpeedValue>
        </WindSpeedContainer>
        <ArrowContainer angle={windAngle}>
          <Arrow></Arrow>
          <Tail></Tail>
        </ArrowContainer>
      </Circle>
    </Container>
  )
}

export default WindSpeedAndDirection
