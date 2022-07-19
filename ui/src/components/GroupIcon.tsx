import React from 'react';
import { group } from '../models/models'
import { Rect, Text } from "react-konva";

type Props = {
  group: group,
  changeSlectedGroup: (group:number) => void,
}

export default function GroupIcon(props: Props) {

  const group = props.group;

  const rectW = 60 + group.nameJp.length * 15;
  const rectH = 40;
  const cornerRadius = 15;
  const fontSize = 20;
  const fontColor = 'white';

  return (
    <>
      <Rect x={group.posX} y={group.posY} fill={group.color} width={rectW} height={rectH} cornerRadius={cornerRadius}
      onMouseDown={(e) => {
        props.changeSlectedGroup(group.ID);
      }}/>
      <Text x={group.posX + 15} y={group.posY + 12} fontSize={fontSize} text={group.nameJp} fill={fontColor}
      onMouseDown={(e) => {
        props.changeSlectedGroup(group.ID);
      }}/>
    </>
  );
}