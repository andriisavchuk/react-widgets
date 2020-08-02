import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState(null);

  const onTitleClicked = (id) => {
    setActiveItemId(id);
  };

  const renderedItems = items.map((item) => {
    const active = item.id === activeItemId ? 'active' : '';

    return (
      <div key={item.id}
           onClick={() => onTitleClicked(item.id)}>
        <div
          className={`title ${active}`}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
