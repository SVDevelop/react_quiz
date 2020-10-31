import React, { useState } from "react";
import FormInput from "./FormInput";

const isValidEmail = (str) => {
  const regexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  return regexp.test(str);
};

// const access = ![name, email].includes(null);

function Card5() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <div className="quiz d-flex justify-content-center align-items-center">
      <div className="card main-card border border-secondary">
        <div className="card-header">
          <h5 className="card-title">
            Контактные данные для предложения на основе ваших ответов.
          </h5>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Имя:</label>
            <FormInput
              type="text"
              className="form-control"
              placeholder="Владимир"
              onEnter={setName}
              validations={[
                (str) => str.length > 2 || "Имя должно быть от 2-х символов."
              ]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">
              Адрес электронной почты:
            </label>
            <FormInput
              type="email"
              className="form-control"
              placeholder="@mail.ru"
              onEnter={setEmail}
              validations={[(str) => isValidEmail(str) || "Некоректный email"]}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="defaultCheck"
              type="checkbox"
              name="exampleRadios"
              defaultValue="option1"
              checked={check}
              onChange={() => {}}
              onClick={() => setCheck(!check)}
            />
            <label className="form-check-label" htmlFor="defaultCheck">
              Согласен/согласна на обработку моих персональных данных.
            </label>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center">
          <div className="flex-grow-1">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "50%" }}
              />
            </div>
          </div>
          <div className="btn-group">
            <button className="btn btn-danger float-right">Назад</button>
            <button className="btn btn-success float-right">Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card5;
