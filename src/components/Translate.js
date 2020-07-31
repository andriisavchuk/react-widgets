import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'German',
    value: 'de',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="translate">Input text for Translation</label>
          <input
            id="translate"
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Translated Output</h3>
      <Convert
          text={text}
          language={language} />
    </div>
  );
};

export default Translate;
