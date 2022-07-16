import './App.css';
import { useEffect, useState } from 'react';
import { group, art, background } from './models/models';
// import painterData from './data/json/Painter.json';
import artData from './data/json/Art.json';
import groupData from './data/json/Group.json';
import backgroundData from './data/json/Background.json'
import HistoryCanvas from './components/HistoryCanvas';
import GroupOverview from './components/GroupOverview';

function App() {

  const [loading, setLoading] = useState<boolean>(true);
  const [groups, setGroups] = useState<group[]>([]);
  const [arts, setArts] = useState<art[]>([]);
  const [backgrounds, setBackgrounds] = useState<background[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<group>();

  useEffect(() => {
    setArts(artData);
    setGroups(groupData);
    setBackgrounds(backgroundData);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [groups, backgrounds]);

  const changeselectedGroup = (groupID: number) => {
    const data = groups.find((el) => el.ID === groupID);
    setSelectedGroup(data)
  }

  return (
    <div className="App">
      {
        !loading &&
        <HistoryCanvas groups={groups} backgrounds={backgrounds}
        changeSlectedGroup={changeselectedGroup}/>
      }
      { selectedGroup &&
        <GroupOverview group={selectedGroup} arts={arts}/>
      }
    </div>
  );
}

export default App;