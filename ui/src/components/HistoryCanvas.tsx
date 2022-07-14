import { group, background } from '../models/models'
import { Layer, Stage, Rect, Line } from "react-konva";
import GroupIcon from './GroupIcon'
import EventIcon from './EventIcon'

type Props = {
  groups: group[],
  backgrounds: background[],
}

export default function HistoryCanvas(props: Props) {

  const canvasX = 100;
  const canvasY = 100;
  const canvasW = 1500;
  const canvasH = 600;
  const canvasColor = 'lightyellow'
  const headerW = canvasW-100;
  const headerH = 50;
  const headerColor = 'orange'
  const strColor = 'white'

  return (
    <Stage x={canvasX} y={canvasY} width={canvasW} height={canvasH}>
      <Layer>
        <Rect fill={headerColor} x={0} y={0} width={headerW} height={headerH}/>
        <Rect fill={canvasColor} x={0} y={headerH} width={canvasW-100} height={canvasH-100}/>
        <Line points={[0, (canvasH-50)/2, canvasW, (canvasH-100)/2]} stroke={strColor} strokeWidth={5} />
        {
          props.groups.map((group) =>
            <GroupIcon group={group} key={group.ID}/>
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