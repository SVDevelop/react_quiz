import React, {useContext, useState} from "react";
import Card from "./Card";
import {CardsContext} from "./CardsContext";

function Card3(props) {
  const { data, onSelect, toNext } = props;

  const c = useContext(CardsContext)

  const items = Object.entries(selection).map(([icon, value], i) => (
    <div
      key={i}
      className="card-slectable d-inline-block flex-column justify-content-center"
      onClick={() => {
        // console.log(selection[i])
        // toggleChange();
        // console.log(selection)
        // console.log(editor);
      }}
    >
      <img src={"./assets/" + icon + ".png"} alt={""} />
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          name={icon}
          id={"defaultCheck" + i}
          onClick={(e) => {
            // toggleChange();
          }}
          checked={ value[1] }
          onChange={toggleChange}
        />
        <label
          className="form-check-label text-center"
          htmlFor={"defaultCheck" + i}
          style={{ display: "block" }}
        >
          {value[0]}
        </label>
      </div>
    </div>
  ));

  return (
    <Card
      title="Каким редактором пользуются программисты?"
      progress={60}
      toNext={toNext}
      toPrev={props.toPrev}
      nextAccess={props.nextAccess}
    >
      {items}
    </Card>
  );
}

export default Card3;
