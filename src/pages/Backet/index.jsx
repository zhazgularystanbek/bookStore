import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../../MyContext";

const Backet = () => {
  const nav = useNavigate();
  const {
    backet,
    getBacket,
    getSum,
    add,
    subtr,
    delProduct,
    readData,
    dataBook,
  } = useBookContext();

  useEffect(() => {
    readData();
  }, [backet]);
  return (
    <div id="backet">
      <div className="container">
        <div className="backet">
          <div className="nav">
            <span onClick={() => nav("/")}>Главная / </span>
            <span>Корзина</span>
          </div>
          <div className="backet-blocks">
            {backet.length === 0 ? (
              <h3 style={{ color: "red" }}>Ваша корзина пуста</h3>
            ) : (
              <h3>Сумма: {getSum()} cом</h3>
            )}
          </div>
          <div className="backet-blocks">
            {backet.map((el) => (
              <div className="backet-block">
                <img
                  src={require(`../../assets/Books_img/${el.image}`)}
                  alt="img"
                />
                <h2>{el.name}</h2>
                <div className="count-blok">
                  <span onClick={() => subtr(el)}>-</span>
                  <span>{el.count}</span>
                  <span onClick={() => add(el)}>+</span>
                  <span> x </span>
                  <span>{el.price}</span>
                </div>
                <button onClick={() => delProduct(el)}>Удалить</button>
                <p>
                  {el.price * el.count} <span>cом</span>
                </p>
              </div>
            ))}
          </div>
          <button onClick={() => nav("/order")} disabled={backet.length === 0}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backet;
