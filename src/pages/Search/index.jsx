import React, { useEffect } from "react";
import { useBookContext } from "../../MyContext";
import backetImg from "../../assets/backet2.png";
import backetImg2 from "../../assets/backet1.png";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { sb, getBook, addToBacket, search, setSb, getSearchBooks, dataBook } =
    useBookContext();
  const nav = useNavigate();
  useEffect(() => {
    if (search.length === 0) {
      setSb([]);
    }
    if (search) {
      getSearchBooks(search, dataBook);
    }
  }, [search]);
  return (
    <div id="search">
      <div className="container">
        <div className="search">
          <span onClick={() => nav("/")}>Главная</span>
          <div className="search-block">
            {sb.length > 0 ? (
              sb.map((el) => (
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
              ))
            ) : (
              <h1
                style={{
                  width: "1200px",
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                По вашему запросу ничего не найдено
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
