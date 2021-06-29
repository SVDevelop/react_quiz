import React, {useState} from "react";

import Card from "./Card";

function Card2(props) {
  const { data, onSelect } = props;
  const [checked, setChecked] = useState('')
  const variants = [
    "Russian language",
    "HTML + CSS",
    "JavaScript and TypeScript",
    "Никакого. На фронтенде пользуются браузером."
  ];

  return (
    <Card
      title="Какой язык программирования используется на FrontEnd'е?"
      progress={50}
      toNext={props.toNext}
      toPrev={props.toPrev}
      nextAccess={props.nextAccess}
    >
      <ul className="list-group list-group-flush">
        {variants.map((variant, i) => (
          <li
            key={variant}
            className="list-group-item"
            onClick={() => onSelect(variant)}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={variant}
                checked={checked === variant}
                onClick={(e) => console.log(e.target)}
                onChange={(e) => setChecked(e.target.name)}
              />
              <label className="form-check-label">{variant}</label>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Card2;
