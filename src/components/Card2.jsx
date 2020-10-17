import React, { useState } from "react";

function Card2() {
  const [selection, setSelection] = useState("Russian language");

  const variants = [
    "Russian language",
    "HTML + CSS",
    "JavaScript and TypeScript",
    "Никакого. На фронтенде пользуются браузером."
  ];

  const ul = (
    <ul className="list-group list-group-flush">
      {variants.map((variant) => (
        <li className="list-group-item" onClick={() => setSelection(variant)}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="quastion1"
              value="option1"
              checked={selection === variant}
              onChange={() => {}}
            />
            <label className="form-check-label">{variant}</label>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="quiz d-flex justify-content-center align-items-center">
      <div className="card main-card border border-secondary">
        <div className="card-header">
          <h5 className="card-title">
            Какой язык программирования используется на FrontEnd'е?
          </h5>
        </div>
        <div className="card-body">{ul}</div>
        <div className="card-footer d-flex align-items-center">
          <div className="flex-grow-1">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="btn-group">
            <button className="btn btn-danger float-right" disabled>
              Назад
            </button>
            <button className="btn btn-success float-right">Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
