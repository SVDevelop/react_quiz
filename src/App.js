import React, { useState } from "react";
import "./App.css";
import { CardsProvider } from "./components/CardsContext";

import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";

function App() {
  const [card2, setCard2] = useState(null);
  const [card3, setCard3] = useState([]);
  const [card4, setCard4] = useState(null);
  const [card5, setCard5] = useState(null);

  const [cardNumber, setCardNumber] = useState(1);

  let card = null;

  if (cardNumber === 1) {
    card = <Card1 toNext={() => setCardNumber(2)} />;
  } else if (cardNumber === 2) {
    card = (
      <Card2
        data={card2}
        onSelect={setCard2}
        nextAccess={card2 !== null}
        toNext={() => setCardNumber(3)}
        toPrev={() => setCardNumber(1)}
      />
    );
  } else if (cardNumber === 3) {
    card = <Card3 data={card3} onSelect={setCard3} 
    toNext={() => setCardNumber(4)}
        toPrev={() => setCardNumber(2)}
    />;
  } else if (cardNumber === 4) {
    card = <Card4 data={card4} onSelect={setCard4} toNext={() => setCardNumber(5)}
    toPrev={() => setCardNumber(3)} />;
  } else if (cardNumber === 5) {
    card = <Card5 data={card5} onSelect={setCard5} toNext={() => setCardNumber(6)}
    toPrev={() => setCardNumber(5)} />;
  } else if (cardNumber === 6) {
    card = <Card6 toPrev={() => setCardNumber(5)}/>;
  }

  return <CardsProvider>{card}</CardsProvider>;
}

export default App;
