import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useBookContext } from "../../MyContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { add, subtr, backet, getBacket, getSum, delProduct } =
    useBookContext();
  // let a = getSum();
  const nav = useNavigate();
  // useEffect(() => {
  //   getSum();
  // }, [backet]);
  // useEffect(() => {
  //   getBacket();
  // }, []);
  return (
    <section id="order">
      <div className="container">
        <div className="navs">
          <div className="nav-trails">
            <span
              onClick={() => nav("/")}
              style={{
                color: "rgb(117, 117, 117)",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "22px",
              }}
            >
              Главная /
            </span>
            <span
              onClick={() => nav("/backet")}
              style={{
                color: "rgb(117, 117, 117)",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "22px",
              }}
            >
              Корзина /
            </span>
            <span
              style={{
                color: "rgb(0, 15, 53)",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "22px",
              }}
            >
              Оформление заказа
            </span>
          </div>
        </div>
        <div className="order">
          <div className="contact">
            <div className="contact_txt">
              <h2>Контакные данные</h2>
              <input className="input_1" type="text" placeholder="Фио*" />
              <input type="text" placeholder="Телефон*" />
            </div>
            <div className="payment">
              <h2>Оплата</h2>
              <div className="input_pay">
                <input type="radio" />
                <p>Оплачу наличными при получении заказа</p>
              </div>
              <p>
                Оплата с банковской картой через <span>PayBox</span>
              </p>
              <button>Оплатить</button>
            </div>
          </div>
          <div className="delivery">
            <div className="delivery_txt">
              <h2>Доставка</h2>
              <p>Выберите удобный способ доставки для этого заказа.</p>

              <div className="txt_del">
                <p>Самовывоз</p>
              </div>
              <div className="txt_del">
                <p>Доставка курьером</p>
              </div>

              <textarea
                rows="4"
                cols="50"
                placeholder="Область, город (район, село), улица, дом№, кв.№*"
              ></textarea>
            </div>
            <div className="delivery_total_amount">
              <div className="amount_txt">
                <h5>Общая сумма:</h5>
                <h6>{getSum()}cом</h6>
              </div>
              <p>Ещё не оплачено</p>
            </div>
          </div>
          <div className="baskets">
            {backet.map((el, ind) => (
              <div className="basket">
                <img
                  src={require(`../../assets/Books_img/${el.image}`)}
                  alt=""
                />
                <div className="basket_txt">
                  <h1>{el.name}</h1>
                  <p>${el.price} сом</p>
                  <div className="btns">
                    <div onClick={() => subtr(el)}>-</div>
                    <div className="btn">{Number(el.count)}</div>
                    <div onClick={() => add(el)}>+</div>
                  </div>
                  <div className="basket_delete" onClick={() => delProduct(el)}>
                    <h5>Удалить</h5>
                    <DeleteOutlinedIcon className="delete" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
