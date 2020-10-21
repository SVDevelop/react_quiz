import React, { useState, useContext } from "react";
import Context from "./context";
import "./App.css";

import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";

// function showCard(id) {
//   // console.log(cards.filter((element, i) => i === id));

//   return
// }

function App() {
  const [value, setValue] = useState(Context);
  // const value = useContext(Context)

  return (
    <Context.Provider value={{ value, setValue }}>
      <Card5 />
    </Context.Provider>
  );
}

export default App;
