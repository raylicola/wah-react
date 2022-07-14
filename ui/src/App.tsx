import './App.css';
// import db from './utils/firebase'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { group, painter, art, background } from './models/models';
// import painterData from './data/json/Painter.json';
// import artData from './data/json/Art.json';
import groupData from './data/json/Group.json';
import backgroundData from './data/json/Background.json'
import HistoryCanvas from './components/HistoryCanvas';

function App() {

  const [loading, setLoading] = useState<boolean>(true);
  const [groups, setGroups] = useState<group[]>([]);
  const [backgrounds, setBackgrounds] = useState<background[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<group>();

  const changeselectedGroup = (groupID: number) => {
    const data = groups.find((el) => el.ID === groupID);
    setSelectedGroup(data)
  }

  useEffect(() => {
    setGroups(groupData);
    setBackgrounds(backgroundData);
    // Cloud Firestore 利用時
    // const groupDataObj: group[] = [];
    // const groupData = collection(db, 'groups');
    // getDocs(groupData).then((snapShot) => {
    //   snapShot.forEach(elm => {
    //     const data = elm.data()
    //     let obj: group = {
    //       age: data.age,
    //       color: data.color,
    //       detail: data.detail,
    //       name: data.name,
    //       nameJp: data.name_jp
    //     };
    //     groupDataObj.push(obj);
    //   });
    //   setGroups(groupDataObj);
    // });
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [groups, backgrounds]);

  return (
    <div className="App">
      {
        !loading &&
        <HistoryCanvas groups={groups} backgrounds={backgrounds}
        changeSlectedGroup={changeselectedGroup}/>
      }
      { selectedGroup &&
        <div className='groupOverview'
          style={
            window.innerWidth >= 1300
            ? {padding:'50px 100px', width: '1200px', fontFamily:'serif'}
            : {padding:'50px 100px', fontFamily:'serif'}
            }>
          <div>
            <h2>{selectedGroup.nameJp}</h2>
            <p style={{'fontSize':'30px'}}>{selectedGroup.detail}</p>
            <div>
              {
                // 絵画を表示
              }
            </div>
            <div>
              {
                // 画家を表示
              }
            </div>
          </div>
          <div>

          </div>
        </div>
      }
    </div>
  );
}

export default App;