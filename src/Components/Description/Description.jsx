import React, { useState } from 'react';
import './Description.css';
import Washing from '../Washing/Washing';
import SizeFit from '../SizeFit/SizeFit';
import MaterialColor from '../MaterialColor/MaterialColor';

const components = ['washing', 'materialColor', 'sizeFit'];

const Description = () => {
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedComponentIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedComponentIndex(prevIndex => Math.min(components.length - 1, prevIndex + 1));
  };

  const selectedComponent = components[selectedComponentIndex];

  return (
    <section id="description">
      <div className="descriptionContent">
        <div className="descriptionTitle">Clothing Description</div>
        <div className="btnClass">
          <button className="Btn" onClick={handlePrevious} disabled={selectedComponentIndex === 0}>Previous</button>
          <button className="Btn" onClick={handleNext} disabled={selectedComponentIndex === components.length - 1}>Next</button>
          <div className="descArea">
            {selectedComponent === 'washing' && <Washing />}
            {selectedComponent === 'sizeFit' && <SizeFit />}
            {selectedComponent === 'materialColor' && <MaterialColor />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
