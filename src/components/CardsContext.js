import React, { useState, useContext } from "react";

export const CardsContext = React.createContext();

const showCard = (card) => {
  // setCards((prev) => {
  // })
};

export const CardsProvider = ({ children }) => {
  const prevCard = (currentCard) => {

  };
  const nextCard = (currentCard) => {
    cards.filter((card, id) => id - 1 === currentCard - 1)
  };

  const [cards, setCards] = useState({
    card1: {
      visible: false,
      completed: false
    },
    card2: {
      visible: false,
      completed: false
    }
  });

  return (
    <CardsContext.Provider value={{cards, prevCard, nextCard}}>{children}</CardsContext.Provider>
  );
};
