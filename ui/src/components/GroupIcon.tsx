import { group } from '../models/models'
import { Rect, Text } from "react-konva";

type Props = {
  group: group,
  changeSlectedGroup: (group:number) => void,
}

export default function GroupIcon(props: Props) {

  const group = props.group;

  const rectW = 80 + group.nameJp.length * 20;
  const rectH = 60;
  const cornerRadius = 15;
  const fontSize = 25;
  const fontColor = 'white';

  return (
    <>
      <Rect x={group.posX} y={group.posY} fill={group.color} width={rectW} height={rectH} cornerRadius={cornerRadius}
      onMouseDown={(e) => {
        console.log(group.name);
        props.changeSlectedGroup(group.ID);
      }}/>
      <Text x={group.posX + 20} y={group.posY + 20} fontSize={fontSize} text={group.nameJp} fill={fontColor}
      onMouseDown={(e) => {
        console.log(group.name);
        props.changeSlectedGroup(group.ID);
      }}/>
    </>
  );
}