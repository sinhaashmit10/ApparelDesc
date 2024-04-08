import React, { useState } from 'react'
import './Description.css'
import Washing from '../Washing/Washing'
import SizeFit from '../SizeFit/SizeFit'
import MaterialColor from '../MaterialColor/MaterialColor'

const Description = () => {
  const [selectedComponent, setSelectedComponent] = useState('washing');

  const showWashing = () => {
    setSelectedComponent('washing');
  }

  const showSizeFit = () => {
    setSelectedComponent('sizeFit');
  }

  const showMaterialColor = () => {
    setSelectedComponent('materialColor');
  }

  return (
    <section id="description">
      <div className="descriptionContent">
        <div className="descriptionTitle">Clothing Description</div>
        <div className="btnClass">
          <button className="btnOne" onClick={showWashing}>Washing Instruction</button>
          <button className="btnTwo" onClick={showMaterialColor}>Color of Cloth</button>
          <button className="btnThree" onClick={showSizeFit}>Size and Fit</button>
          <div className="descArea">
            {selectedComponent === 'washing' && <Washing />}
            {selectedComponent === 'sizeFit' && <SizeFit />}
            {selectedComponent === 'materialColor' && <MaterialColor/>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
