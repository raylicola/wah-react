import React from 'react';
import { group, art } from '../models/models';
import {
  roman1, roman2, roman3, neoclassic1, neoclassic2, neoclassic3, 
  abstract1, abstract2, abstract3, cube1, express1, express2,
  impress1, impress2, impress3, post1, post2, post3,
  real1, real2, real3, symbol1, symbol2, symbol3  
} from './../data/img/art';

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
    neoclassicism: [
      {img: neoclassic1, artist:arts[0].artist, title: arts[0].title, detail: arts[0].detail},
      {img: neoclassic2, artist:arts[1].artist, title: arts[1].title, detail: arts[1].detail},
      {img: neoclassic3, artist:arts[2].artist, title: arts[2].title, detail: arts[2].detail},
    ],
    romanticism: [
      {img: roman1, artist:arts[3].artist, title: arts[3].title, detail: arts[3].detail},
      {img: roman2, artist:arts[4].artist, title: arts[4].title, detail: arts[4].detail},
      {img: roman3, artist:arts[5].artist, title: arts[5].title, detail: arts[5].detail},
    ],
    realism: [
      {img: real1, artist:arts[6].artist, title: arts[6].title, detail: arts[6].detail},
      {img: real2, artist:arts[7].artist, title: arts[7].title, detail: arts[7].detail},
      {img: real3, artist:arts[8].artist, title: arts[8].title, detail: arts[8].detail},
    ],
    symbolisme: [
      {img: symbol1, artist:arts[9].artist, title: arts[9].title, detail: arts[9].detail},
      {img: symbol2, artist:arts[10].artist, title: arts[10].title, detail: arts[10].detail},
      {img: symbol3, artist:arts[11].artist, title: arts[11].title, detail: arts[11].detail},
    ],
    impressionism: [
      {img: impress1, artist:arts[12].artist, title: arts[12].title, detail: arts[12].detail},
      {img: impress2, artist:arts[13].artist, title: arts[13].title, detail: arts[13].detail},
      {img: impress3, artist:arts[14].artist, title: arts[14].title, detail: arts[14].detail},
    ],
    postImpressionism: [
      {img: post1, artist:arts[15].artist, title: arts[15].title, detail: arts[15].detail},
      {img: post2, artist:arts[16].artist, title: arts[16].title, detail: arts[16].detail},
      {img: post3, artist:arts[17].artist, title: arts[17].title, detail: arts[17].detail},
    ],
    cubism: [
      {img: cube1, artist:arts[18].artist, title: arts[18].title, detail: arts[18].detail},
    ],
    expressionism: [
      {img: express1, artist:arts[19].artist, title: arts[19].title, detail: arts[19].detail},
      {img: express2, artist:arts[20].artist, title: arts[20].title, detail: arts[20].detail},
    ],
    abstractExpressionism: [
      {img: abstract1, artist:arts[21].artist, title: arts[21].title, detail: arts[21].detail},
      {img: abstract2, artist:arts[22].artist, title: arts[22].title, detail: arts[22].detail},
      {img: abstract3, artist:arts[23].artist, title: arts[23].title, detail: arts[23].detail},
    ],
  }

  let detail: Detail[]|undefined = details.romanticism;
  switch (group.name) {
    case 'Neoclassicism':
      detail = details.neoclassicism;
      break;
    case 'Romanticism':
      detail = details.romanticism;
      break;
    case 'Realism':
      detail = details.realism;
      break;
    case 'Symbolisme':
      detail = details.symbolisme;
      break;
    case 'Impressionism':
      detail = details.impressionism;
      break;
    case 'PostImpressionism':
      detail = details.postImpressionism;
      break;
    case 'Cubism':
      detail = details.cubism;
      break;
    case 'Expressionism':
      detail = details.expressionism;
      break;
    case 'AbstractExpressionism':
      detail = details.abstractExpressionism;
      break;
    default:
      detail = undefined;
      break;
  }

  return (
    <div>
    {
      <div
        style={
          window.innerWidth >= 1300
          ? {padding:'0 60px',width: '1200px', fontFamily:'serif','whiteSpace':'pre-wrap',}
          : {padding:'0 60px', fontFamily:'serif','whiteSpace':'pre-wrap',}
        }>
        <div>
          <h2>{group.nameJp}</h2>
          <p style={{'fontSize':'20px'}}>{group.detail}</p>
        </div>
        <div style={{'display':'flex'}}>
          {
            detail &&
            detail.map((item)=>
            <div key={item.title} style={{
              'width':'380px',
              'padding':'20px',
              'whiteSpace':'pre-wrap',
              'textAlign':'center'
              }}>
              <img src={item.img} alt={item.title} height={200}/>
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