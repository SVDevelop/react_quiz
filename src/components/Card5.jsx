import React, { useState, useContext } from "react";
import Context from "../context";

function Card5() {
  const [check, setCheck] = useState(false);
  const option = useContext(Context);

  // function toggleCheck(check) {
  //   setCheck((check = !check));
  // }
  console.log(option);

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
            <input
              type="text"
              className="form-control"
              placeholder="Владимир"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">
              Адрес электронной почты:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="@mail.ru"
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
