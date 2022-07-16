import { group, art } from '../models/models';
import { roman1, roman2, roman3, neoclassic1, neoclassic2, neoclassic3 } from './../data/img/art';

type Props = {
  group: group,
  arts: art[],
};

type Detail = {
  img: string,
  artist: string,
  title: string,
  detail: string
}

export default function GroupOverview(props: Props) {
  const group = props.group;
  const arts = props.arts;
  const details = {
    Neoclassicism: [
      {img: neoclassic1, artist:arts[0].artist, title: arts[0].title, detail: arts[0].detail},
      {img: neoclassic2, artist:arts[1].artist, title: arts[1].title, detail: arts[1].detail},
      {img: neoclassic3, artist:arts[2].artist, title: arts[2].title, detail: arts[2].detail},
    ],
    romanticism: [
      {img: roman1, artist:arts[3].artist, title: arts[3].title, detail: arts[3].detail},
      {img: roman2, artist:arts[4].artist, title: arts[4].title, detail: arts[4].detail},
      {img: roman3, artist:arts[5].artist, title: arts[5].title, detail: arts[5].detail},
    ],
  }

  let detail: Detail[] = details.romanticism;
  switch (group.name) {
    case 'Neoclassicism':
      detail = details.Neoclassicism;
      break;
    case 'romanticism':
      detail = details.romanticism;
      break;
  }

  return (
    <div>
    {
      <div
        style={
          window.innerWidth >= 1300
          ? {padding:'50px 100px',width: '1200px', fontFamily:'serif','whiteSpace':'pre-wrap',}
          : {padding:'50px 100px', fontFamily:'serif','whiteSpace':'pre-wrap',}
        }>
        <div>
          <h2>{group.nameJp}</h2>
          <p style={{'fontSize':'30px'}}>{group.detail}</p>
        </div>
        <div style={{'display':'flex'}}>
          {
            detail &&
            detail.map((item)=>
            <div key={item.title} style={{
              'width':'400px',
              'padding':'20px',
              'whiteSpace':'pre-wrap'}}>
              <img src={item.img} alt={item.title} height={300}/>
              <p>{item.title}({item.artist})</p>
              <p>{item.detail}</p>
            </div>)
          }
        </div>
      </div>
    }
    </div>
  );
}