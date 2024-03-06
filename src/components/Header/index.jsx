import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import closePng from "../../assets/close.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../../MyContext";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Header = () => {
  const [pass, setPass] = useState("");
  const [truePass, setTruePass] = useState(false);
  const navigate = useNavigate();
  const [flag, setflag] = useState(false);
  const { backet, getBacket, search, setSearch, getSearchBooks, dataBook } =
    useBookContext();
  useEffect(() => {
    getBacket();
  }, []);

  function getPass() {
    if (pass === "111") {
      setTruePass(false);
      navigate("/admin");
      setPass("");
      setflag(false);
    } else {
      setTruePass(true);
    }
  }
  function getPassWithEnter(e) {
    if (e.key === "Enter") {
      getPass();
    }
  }
  useEffect(() => {
    if (search) {
      getSearchBooks(search, dataBook);
    }
  }, [search]);

  return (
    <div id="header">
      <header>
        <div className="container">
          <div className="header">
            <h1>BOOKShop</h1>
            <div className="header_txt">
              <div className="search_form">
                <input
                  className="search_form_txt"
                  type="text"
                  placeholder="Search here"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="search_form_btn">
                  <SearchIcon
                    className="search_form_img
							"
                  />{" "}
                </button>
              </div>
              <div className="profi">
                <div className="shoping" onClick={() => navigate("/backet")}>
                  {" "}
                  <div className="backet-block">
                    {" "}
                    <ShoppingCartIcon className="search_form_img" />
                    <div className="b-number">
                      <span>{backet.length}</span>{" "}
                    </div>{" "}
                  </div>
                  <h5>Корзина</h5>
                </div>
                <div className="account" onClick={() => setflag(!flag)}>
                  {" "}
                  <AccountCircleOutlinedIcon className="search_form_img" />
                  <h5>Админ</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        id="modal_admin"
        style={{ display: flag === true ? "block" : "none" }}
      >
        <div className="container">
          <div className="modal-admin">
            <img src={closePng} alt="close" onClick={() => setflag(!flag)} />
            <div className="get-pass">
              <input
                type="password"
                placeholder="Password.."
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                onKeyDown={(e) => getPassWithEnter(e)}
              />
              <p style={{ display: truePass ? "block" : "none" }}>
                *Неверный пароль
              </p>
              <button className="pass-btn" onClick={getPass}>
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="modal_backet" >
        <div className="container">
          <div className="baskets">
            {backetBook.length > 0 ? (
              backetBook.map((el, ind) => (
                <div className="basket">
                  <img
                    src={require(`../../image/books/${el.url}`)}
                    alt={el.name}
                  />
                  <div className="basket_txt">
                    <h1>{el.name}</h1>
                    <p>{el.price}$</p>
                    <div className="btns">
                      <div onClick={() => subtr(ind)}>-</div>
                      <div className="btn">
                        {isNaN(el.count) ? "0" : el.count}
                      </div>
                      <div onClick={() => add(el, ind)}>+</div>
                    </div>
                    <div className="basket_delete">
                      <h5 onClick={() => delProd(ind)}>Удалить</h5>
                      <DeleteOutlinedIcon
                        className="delete"
                        onClick={() => delProd(ind)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3> Ваша корзина пуста</h3>
            )}
            <button className="get-backet" onClick={() => toOrd()}>
              Оформить заказ
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
