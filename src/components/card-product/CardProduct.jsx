import React, { useState, useEffect } from "react";
import "./CardProduct.scss";

const CardProduct = ({ ...props }) => {
  const [hover, setHover] = useState(false);

  const [selectedIsTrue, setSelectedIsTrue] = useState(false);

  const [textBottom, setTextBottom] = useState(
    <p className="text-bottom">
      Чего сидишь? Порадуй котэ, <a href="#0">купи.</a>
    </p>,
  );

  function onMouseHover() {
    setHover(true);
  }

  function outMouseHover() {
    setHover(false);
  }

  function selected(e) {
    const borderCard = document.querySelectorAll(".card__svg-border");

    const stickerWeight = document.querySelectorAll(".sticker-weight");

    let index = e.currentTarget.id - 1;

    if (e.currentTarget.getAttribute("state") === "disabled") {
      setTextBottom(
        <p className="text-bottom" style={{ color: "#ffff66" }}>
          Печалька, {props.subtitle} закончился.
        </p>,
      );
      return console.log("Товар отсутствует на складе");
    }

    stickerWeight[index].classList.toggle("selected");
    borderCard[index].classList.toggle("selected-border");

    if (e.currentTarget.getAttribute("state") === "normal") {
      e.currentTarget.setAttribute("state", "selected");

      if (props.subtitle === "с фуа-гра") {
        setTextBottom(
          <p className="text-bottom">Печень утки разварная с артишоками.</p>,
        );
      } else if (props.subtitle === "с рыбой") {
        setTextBottom(
          <p className="text-bottom">
            Головы щучьи с чесноком да свежайшая сёмгушка.
          </p>,
        );
      } else if (props.subtitle === "с курой") {
        setTextBottom(
          <p className="text-bottom">Филе из цыплят с трюфелями в бульоне.</p>,
        );
      }
      setSelectedIsTrue(true);
    } else if (e.currentTarget.getAttribute("state") === "selected") {
      e.currentTarget.setAttribute("state", "normal");
      setSelectedIsTrue(false);
      setTextBottom(
        <p className="text-bottom">
          Чего сидишь? Порадуй котэ, <a href="#0">купи.</a>
        </p>,
      );
    }
  }

  useEffect(() => {
    const cards = document.querySelectorAll(".container");
    const borderCard = document.querySelectorAll(".card__svg-border");
    const cardsImg = document.querySelectorAll(".card__wrapper-text");
    const stickerWeight = document.querySelectorAll(".sticker-weight");

    let count = 0;

    for (let card of cards) {
      if (card.getAttribute("state") === "disabled") {
        borderCard[count].classList.add("disabled-border");
        stickerWeight[count].classList.add("disabled");
        cardsImg[count].classList.add("disabled-img");
      }
      count++;
    }
  }, []);

  return (
    <div
      id={props.id}
      state={props.state}
      className="container"
      onClick={selected}
      onMouseEnter={onMouseHover}
      onMouseLeave={outMouseHover}
    >
      <article className="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 480"
          className="card__svg-border"
        >
          <defs>
            <clipPath id="clip-path">
              <polygon points="45,0 320,0 320,480 0,480 0,48" />
            </clipPath>
          </defs>
          <g stroke-width="4">
            <rect
              x="2"
              y="2"
              rx="14"
              clip-path="url(#clip-path)"
              width="316"
              height="476"
              fill="#fff"
            />
            <line x1="2" y1="48" x2="45" y2="2" />
          </g>
        </svg>
        <section className="card__wrapper-text">
          {hover && selectedIsTrue ? (
            <div className="card__text_top">Котэ не одобряет?</div>
          ) : (
            <div className="card__text_top">Сказочное лакомство</div>
          )}
          <h2 className="card__title">Нямушка</h2>
          <h3 className="card__subtitle">{props.subtitle}</h3>
          <section className="card__section-text">
            {props.text.map((elem) => (
              <p className="card__text">{elem}</p>
            ))}
          </section>
        </section>
        <div className="sticker-weight">
          <span className="sticker-weight__num">{props.weight}</span>
          <span className="sticker-weight__text">кг</span>
        </div>
      </article>
      {textBottom}
    </div>
  );
};

export default CardProduct;
