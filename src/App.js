import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from "./components/Header";

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

const options = [
  {
    label: 'The Red Color',
    value: 'red',
  },
  {
    label: 'The Green Color',
    value: 'green',
  },
  {
    label: 'The Blue Color',
    value: 'blue',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/wiki-search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
