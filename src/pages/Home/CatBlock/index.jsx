import React, { useEffect } from "react";
import { useBookContext } from "../../../MyContext";

const CatBlock = () => {
  const { readData, dataBook, switchToCategory } = useBookContext();
  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="category">
      {dataBook
        .filter(
          (el, ind, arr) =>
            ind === arr.findIndex((t) => t.category === el.category)
        )
        .map((el) => (
          <div
            className="category__block"
            onClick={() => switchToCategory(el.category)}
            style={{ backgroundImage: `url(${el.category_img})` }}
          >
            <span>{el.category} &#129042;</span>
          </div>
        ))}
    </div>
  );
};

export default CatBlock;
