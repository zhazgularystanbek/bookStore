import React, { useEffect, useState } from "react";
import { useBookContext } from "../../../MyContext";
import backetImg from "../../../assets/backet2.png";
import backetImg2 from "../../../assets/backet1.png";

import CatBlock from "../CatBlock";

const Category = () => {
  const { readData, dataBook, changeSort, getBook, addToBacket } =
    useBookContext();
  const [show, setShow] = useState(8);

  function showMore() {
    setShow(show + 4);
  }

  useEffect(() => {
    readData();
  }, []);

  return (
    <div id="category">
      <div className="container">
        <h2>Категории</h2>
        <CatBlock />
      </div>
      <div className="container">
        <div className="all-books">
          <h2>Все книги</h2>
          <select onClick={(e) => changeSort(e)}>
            <option value="sort">Сортировка</option>
            <option value="popular">По популярности</option>
            <optgroup label="По цене">
              <option value="pricePlus">По возрастанию </option>
              <option value="priceMinus">По убыванию </option>
            </optgroup>
            <option value="letter">По буквам</option>
          </select>
        </div>
        <div className="books">
          {dataBook.slice(0, show).map((el) => (
            <div className="book-block">
              <img
                onClick={() => getBook(el)}
                src={
                  el.image
                    ? require(`../../../assets/Books_img/${el.image}`)
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
                  style={{
                    display: el.inBacket ? "block" : "none",
                  }}
                />
              </div>
              <p>{el.name}</p>
            </div>
          ))}
        </div>
        <button
          className="recommend-btn"
          onClick={showMore}
          style={{ display: dataBook.length > show ? "block" : "none" }}
        >
          Показать ещё
        </button>
      </div>
    </div>
  );
};

export default Category;
