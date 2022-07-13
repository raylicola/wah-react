import React from 'react';
import './App.css';
import db from './utils/firebase'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { group, painter, art, backround } from './models/models';
// import painterData from './data/json/Painter.json';
// import artData from './data/json/Art.json';

function App() {

  const [groups, setGroups] = useState<group[]>([])

  useEffect(() => {
    // Groupデータ
    const groupDataObj: group[] = [];
    const groupData = collection(db, 'groups');
    getDocs(groupData).then((snapShot) => {
      snapShot.forEach(elm => {
        const data = elm.data()
        let obj: group = {
          age: data.age,
          color: data.color,
          detail: data.detail,
          name: data.name,
          nameJp: data.name_jp
        };
        groupDataObj.push(obj);
      });
      setGroups(groupDataObj);
    });
  }, []);

  return (
    <div className="App">
      {groups.map((group) => {
        return (
          <p key={group.name} style={{color: group.color}}>{group.nameJp}</p>
        )
      })}
    </div>
  );
}

export default App;
