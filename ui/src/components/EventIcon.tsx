import React from 'react';
import { background } from '../models/models'
import { Rect, Text } from "react-konva";

type Props = {
  background: background,
}

export default function backgroundIcon(props: Props) {

  const background = props.background;

  const rectW = 60 + background.name.length * 16;
  const rectH = 40;
  const rectCornerRadius = 15;
  const rectColor = 'darkgray';
  const fontSize = 20;
  const fontColor = 'white';

  return (
    <>
      <Rect x={background.posX} y={background.posY} fill={rectColor} width={rectW} height={rectH} cornerRadius={rectCornerRadius}
      onMouseDown={(e) => {
        console.log(background.name);
      }}/>
      <Text x={background.posX + 15} y={background.posY + 12} fontSize={fontSize} text={background.name} fill={fontColor}
      onMouseDown={(e) => {
        console.log(background.name);
      }}/>
    </>
  );
}