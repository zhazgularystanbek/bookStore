import React, { useEffect, useState } from "react";
import uplImg from "../../assets/upload.png";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../../MyContext";

const Admin = () => {
  const { createData, readData } = useBookContext();
  const [newProduct, setNewProduct] = useState({
    image: "",
    name: "",
    price: "",
    category: "",
    descr: "",
    category_img: "",
    id: Date.now(),
    count: 1,
    inBacket: false,
  });

  const nav = useNavigate();

  function getCatImg() {
    if (newProduct.category === "Психология") {
      setNewProduct({
        ...newProduct,
        category_img: "https://avtoram.com/wp-content/uploads/2014/02/66.jpg",
      });
    } else if (newProduct.category === "Фантастика") {
      setNewProduct({
        ...newProduct,
        category_img:
          "https://u.livelib.ru/reader/Olechka1/o/q2gy6jvq/o-o.jpeg",
      });
    } else if (newProduct.category === "Приключения") {
      setNewProduct({
        ...newProduct,
        category_img:
          "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3bb8ef0f-0230-4eeb-acb0-e2b44329de37/600x900",
      });
    } else if (newProduct.category === "Научная") {
      setNewProduct({
        ...newProduct,
        category_img:
          "https://prof-ras.ru/media/k2/items/cache/2e83d7bc595a142d5b8cc7504455fc0e_XL.jpg",
      });
    } else if (newProduct.category === "Биографии") {
      setNewProduct({
        ...newProduct,
        category_img:
          "https://u.livelib.ru/reader/XAPOH/o/8w9c3hhp/BiM2-o.jpeg",
      });
    } else {
      setNewProduct({
        ...newProduct,
        category_img:
          "https://img.freepik.com/free-photo/front-view-of-books-and-flowers-on-wooden-table_23-2148328270.jpg",
      });
    }
  }

  function handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    setNewProduct({ ...newProduct, image: file.name });
  }

  function createNewProduct() {
    setNewProduct({
      image: "",
      name: "",
      price: "",
      category: "",
      descr: "",
      category_img: "",
      id: Date.now(),
      count: 1,
      inBacket: false,
    });
    createData(newProduct);
    readData();
    nav("/");
  }
  useEffect(() => {
    getCatImg();
  }, [newProduct.category]);

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin-img">
            <input type="file" onChange={handleImageChange} />
            <div className="upl">
              <img
                src={
                  newProduct.image
                    ? require(`../../assets/Books_img/${newProduct.image}`)
                    : uplImg
                }
                alt="logo"
              />
            </div>
          </div>
          <div className="admin-txt">
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              value={newProduct.name}
            />
            <div className="cp">
              <input
                type="text"
                placeholder="Category"
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                value={newProduct.category}
              />
              <input
                type="number"
                placeholder="price"
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                value={newProduct.price}
              />
            </div>
            <textarea
              cols="30"
              rows="10"
              placeholder="Product description..."
              onChange={(e) =>
                setNewProduct({ ...newProduct, descr: e.target.value })
              }
              value={newProduct.descr}
            ></textarea>
            <button onClick={createNewProduct}>SAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
