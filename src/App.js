// App.js
import React, { useState } from 'react';
import About from "./Components/About/About";
import Description from "./Components/Description/Description";
import Order from "./Components/Order/Order";

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  const handlePaymentComplete = () => {
    setShowAbout(false);
    setShowDescription(true);
  };

  return (
    <div className="App">
      {showAbout && <About />}
      {showDescription && <Description />}
      {showAbout && !showDescription && <Order onPaymentComplete={handlePaymentComplete} />}
    </div>
  );
}

export default App;
