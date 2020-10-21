import React from "react";

function Card6() {
  return (
    <div className="quiz d-flex justify-content-center align-items-center">
      <div className="card main-card border border-secondary">
        <div className="card-body d-flex flex-column justify-content-around">
          <div>
            <h4 className="card-title text-center">Наши поздравления!</h4>
            <h4 className="card-title text-center">
              Вам на почту отправлены доп-материалы
            </h4>
          </div>
          <div className="d-flex justify-content-around">
            <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
              <img src="assets/text.svg" alt="" style={{ width: 100 }} />
              <p>Учебный материал</p>
            </div>
            <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
              <img src="assets/youtube.png" alt="" style={{ width: 100 }} />
              <p>1-й видео урок</p>
            </div>
            <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
              <img src="assets/exel.png" alt="" style={{ width: 100 }} />
              <p>План обучения</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card6;
