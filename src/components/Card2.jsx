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

  const onChange = (e) => {
    setChecked(e.target.name)
  }

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
            onClick={onChange}
          >
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  id={variant}
                  name={variant}
                  checked={checked === variant}
                  onChange={onChange}
                />
                {variant}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Card2;
