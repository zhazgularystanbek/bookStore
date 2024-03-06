import React from "react";
import CatBlock from "../Home/CatBlock";
import { useNavigate, useParams } from "react-router-dom";
import { useBookContext } from "../../MyContext";
import backetImg from "../../assets/backet2.png";
import backetImg2 from "../../assets/backet1.png";

const Categories = () => {
  const { dataBook, changeSort, getBook, addToBacket } = useBookContext();
  const { category } = useParams();
  const nav = useNavigate();
  return (
    <div id="categories">
      <div className="container">
        <div className="categories">
          <CatBlock />
        </div>
        <div className="nav">
          <div className="breadCrumbs">
            <span onClick={() => nav("/")}>Главная / </span>
            <span>{category}</span>
          </div>
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
        <div className="block">
          {dataBook
            .filter((el) => el.category === category)
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
                    style={{
                      display: el.inBacket ? "block" : "none",
                    }}
                  />
                </div>
                <p>{el.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
