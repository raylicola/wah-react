import { background } from '../models/models'
import { Rect, Text } from "react-konva";

type Props = {
  background: background,
}

export default function backgroundIcon(props: Props) {

  const background = props.background;

  const rectW = 80 + background.name.length * 20;
  const rectH = 60;
  const rectCornerRadius = 15;
  const rectColor = 'darkgray';
  const fontSize = 25;
  const fontColor = 'white';

  return (
    <>
      <Rect x={background.posX} y={background.posY} fill={rectColor} width={rectW} height={rectH} cornerRadius={rectCornerRadius}
      onMouseDown={(e) => {
        console.log(background.name);
      }}/>
      <Text x={background.posX + 20} y={background.posY + 20} fontSize={fontSize} text={background.name} fill={fontColor}
      onMouseDown={(e) => {
        console.log(background.name);
      }}/>
    </>
  );
}