import React from 'react';
import { group, background } from '../models/models'
import { Layer, Stage, Rect, Line, Text } from "react-konva";
import GroupIcon from './GroupIcon'
import EventIcon from './EventIcon'

type Props = {
  groups: group[],
  backgrounds: background[],
  changeSlectedGroup: (group:number) => void,
};

export default function HistoryCanvas(props: Props) {

  const canvasX = 30;
  const canvasY = 30;
  const canvasW = 1420;
  const canvasH = 400;
  const canvasColor = 'lightyellow'
  const headerW = canvasW-100;
  const headerH = 40;
  const headerColor = 'orange'
  const fontColor = 'white'
  const textContent =
    '1750' + ' '.repeat(10) + '1800' + ' '.repeat(10) + '1850' + ' '.repeat(50) + '1900'
  const fontSize = 30;

  return (
    <Stage x={canvasX} y={canvasY} width={canvasW} height={canvasH}>
      <Layer>
        <Rect fill={headerColor} x={0} y={0} width={headerW} height={headerH}/>
        <Rect fill={canvasColor} x={0} y={headerH} width={canvasW-100} height={canvasH-100}/>
        <Text text={textContent} fontSize={fontSize} fill={fontColor} x={10} y={10}/>
        <Line points={[0, (canvasH-headerH)/2, canvasW, (canvasH-headerH)/2]} stroke={fontColor} strokeWidth={5} />
        {
          props.groups.map((group) =>
            <GroupIcon group={group} key={group.ID}
            changeSlectedGroup={props.changeSlectedGroup}/>
          )
        }
        {
          props.backgrounds.map((background) =>
            <EventIcon background={background} key={background.ID}/>
          )
        }
      </Layer>
    </Stage>
  );
}