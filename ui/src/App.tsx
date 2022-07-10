import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { group, painter, art } from './models/models';
import groupData from './data/json/Group.json';
// import painterData from './data/json/Painter.json';
// import artData from './data/json/Art.json';

function App() {

  const [groups, setGroups] = useState<group[]>([])

  useEffect(() => {
    setGroups(groupData)
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
