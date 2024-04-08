import React from 'react'

function Washing() {
  return (
    <section className="washing">
        <h1 className="careTitle">Washing Instructions</h1>
        <section className="washingInstruction">
          <div className="instructionBar">
            <img src="./machinewash.svg" alt="" className="instructionImg" />
            <p className="instruction">Machine wash at 86 F / 30 C</p>
          </div>
        </section>
        <section className="washingInstruction">
          <div className="instructionBar">
            <img src="./nobleach.svg" alt="" className="instructionImg" />
            <p className="instruction">No chlorine bleach</p>
          </div>
        </section>
        <section className="washingInstruction">
          <div className="instructionBar">
            <img src="./notumbledry.svg" alt="" className="instructionImg" />
            <p className="instruction">Do not tumble dry.</p>
          </div>
        </section>
        <section className="washingInstruction">
          <div className="instructionBar">
            <img src="./maxiron.svg" alt="" className="instructionImg" />
            <p className="instruction">Maximum iron at 230 F / 110 C</p>
          </div>
        </section>
        <section className="washingInstruction">
          <div className="instructionBar">
            <img src="./nodryclean.svg" alt="" className="instructionImg" />
            <p className="instruction">Do not dry clean.</p>
          </div>
        </section>
    </section>
  )
}

export default Washing