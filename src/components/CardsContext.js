import React, { useState, useContext } from "react";

const CardsContext = React.createContext();

const showCard = (card) => {
  // setCards((prev) => {
  // })
};

export const useCards = () => {
  return useContext(CardsContext);
};

export const CardsProvider = ({ children }) => {
  const prevCard = (curentCard) => {
    curentCard;
  };
  const nextCard = (curentCard) => {
    curentCard;
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
    <CardsContext.Provider value={cards}>{children}</CardsContext.Provider>
  );
};
