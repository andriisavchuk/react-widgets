import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    id: 1,
    title: 'Lorem 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores aspernatur autem dolorum ducimus ex hic impedit in ipsam ipsum maiores minus molestias neque odit, quas quia quo rem, sit. 1',
  },
  {
    id: 2,
    title: 'Lorem 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur autem dolorum ducimus ex hic impedit in ipsam ipsum maiores minus odit, quas quia quo rem, sit. 2',
  },
  {
    id: 3,
    title: 'Lorem 3',
    content:
      'Lorem text  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores aspernatur autem dolorum ducimus ex hic impedit in ipsam ipsum maiores minustias neque odit, quas quia quo rem. 3',
  },
];

function App() {
  return (
    <div className="App ui container">
      <br />
      {/*<Accordion items={items}/>*/}
      <Search />
    </div>
  );
}

export default App;
