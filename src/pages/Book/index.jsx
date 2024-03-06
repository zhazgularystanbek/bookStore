import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBookContext } from "../../MyContext";
import backetImg from "../../assets/backet2.png";
import backetImg2 from "../../assets/backet1.png";

const Book = () => {
  const { category, name } = useParams();
  const {
    switchToCategory,
    dataBook,
    getBook,
    readData,
    add,
    subtr,
    addToBacket,
  } = useBookContext();
  const nav = useNavigate();
  useEffect(() => {
    readData();
  }, []);

  return (
    <div id="book">
      <div className="container">
        <div className="book">
          <div className="nav">
            <span onClick={() => nav("/")}>Главная / </span>
            <span onClick={() => switchToCategory(category)}>
              {category} /{" "}
            </span>
            <span>{name}</span>
          </div>
          {dataBook
            .filter((el) => el.category === category && el.name === name)
            .map((el) => (
              <div className="book-block">
                <img
                  onClick={() => console.log(dataBook)}
                  src={require(`../../assets/Books_img/${el.image}`)}
                  alt="bookimg"
                />
                <div className="block-txt">
                  <h3>{el.name}</h3>
                  <h5>{el.price} сом</h5>
                  <h4>Жанр: {el.category}</h4>
                  <div className="count-blok">
                    <span onClick={() => subtr(el)}>-</span>
                    <span>{el.count}</span>
                    <span onClick={() => add(el)}>+</span>
                  </div>
                  <h4>Описание</h4>
                  <p>{el.descr}</p>
                  <div className="btns">
                    <button className="backet" onClick={() => addToBacket(el)}>
                      {el.inBacket ? "В корзине" : "Добавить в корзину"}
                    </button>
                    <button
                      className="buyNow"
                      onClick={() => {
                        addToBacket(el);
                        nav("/order");
                      }}
                    >
                      Купить сейчас
                    </button>
                  </div>
                </div>
              </div>
            ))}
          <h3>Возможно, Вам понравится</h3>
          <div className="books">
            {dataBook
              .filter((el) => el.name !== name)
              .map((el) => (
                <div className="book-block">
                  <img
                    onClick={() => getBook(el)}
                    src={
                      el.image
                        ? require(`../../assets/Books_img/${el.image}`)
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_RiuXhTLsByCicYjTd1twFMCTCKs8TD1H-TX_biMqA&s"
                    }
                    alt=""
                  />
                  <div className="el-txt">
                    <span className="price">{el.price} сом</span>
                    <img
                      onClick={() => addToBacket(el)}
                      src={backetImg}
                      alt="backet"
                      style={{
                        display: el.inBacket === false ? "block" : "none",
                      }}
                    />
                    <img
                      src={backetImg2}
                      alt="backet"
                      style={{ display: el.inBacket ? "block" : "none" }}
                    />
                  </div>
                  <p>{el.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
