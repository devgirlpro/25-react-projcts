import React from 'react';
import { useState } from 'react';
import data from './data';
import './styles.css'

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const singleSelectionHandler = (currentId) => {
    console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <div className="acc-wrapper">
      <button>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                onClick={() => singleSelectionHandler(item.id)}
                className="title"
              >
                <h3> {item.question}</h3>
              </div>
              {selected === item.id ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <p>No Data Found!</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
