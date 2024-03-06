import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const bookContext = createContext();
export const useBookContext = () => useContext(bookContext);
const MyContext = ({ children }) => {
  const [dataBook, setDataBook] = useState([]);
  const [sortType, setSortType] = useState("price");

  // create
  function createData(dataInfo) {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    data.push(dataInfo);
    setDataBook(localStorage.setItem("books", JSON.stringify(data)));
  }
  // read
  function readData() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    setDataBook(data);
  }
  // sort
  const changeSort = (event) => {
    setSortType(event.target.value);
  };
  const sortedBooks = dataBook.sort((a, b) => {
    if (sortType === "pricePlus") {
      return a.price - b.price;
    }
    if (sortType === "priceMinus") {
      return b.price - a.price;
    }
    if (sortType === "letter") {
      return a.name.localeCompare(b.name);
    }
  });
  // category sw
  const { category, name } = useParams();
  const nav = useNavigate();
  function switchToCategory(cat) {
    nav(`/categories/${cat}`);
  }
  // get1book
  function getBook(el) {
    nav(`/categories/${el.category}/${el.name}`);
  }

  // setCount

  function add(el) {
    const newDataBook = dataBook.map((book) => {
      if (book === el) {
        return { ...book, count: book.count + 1 };
      }
      return book;
    });

    localStorage.setItem("books", JSON.stringify(newDataBook));
    setDataBook(newDataBook);
    readData();
    let backet = JSON.parse(localStorage.getItem("backet")) || [];
    let found = false;
    let num;
    for (let i = 0; i < backet.length; i++) {
      if (backet[i].id === el.id) {
        found = true;
        num = i;
        break;
      }
    }

    if (found) {
      const newBacketBook = backet.map((book) => {
        if (book.name === backet[num].name) {
          return { ...book, count: book.count + 1 };
        }
        return book;
      });
      localStorage.setItem("backet", JSON.stringify(newBacketBook));
      setBacket(newBacketBook);
      console.log(backet);
    }
  }

  function subtr(el) {
    const newDataBook = dataBook.map((book) => {
      if (book === el && book.count > 0) {
        return { ...book, count: book.count - 1 };
      }
      return book;
    });
    localStorage.setItem("books", JSON.stringify(newDataBook));
    setDataBook(newDataBook);
    readData();

    let backet = JSON.parse(localStorage.getItem("backet")) || [];
    let found = false;
    let num;
    for (let i = 0; i < backet.length; i++) {
      if (backet[i].id === el.id) {
        found = true;
        num = i;
        break;
      }
    }

    if (found) {
      const newBacketBook = backet.map((book) => {
        if (book.name === backet[num].name && book.count > 1) {
          return { ...book, count: book.count - 1 };
        }
        return book;
      });
      localStorage.setItem("backet", JSON.stringify(newBacketBook));
      setBacket(newBacketBook);
    }
  }
  // backet
  const [backet, setBacket] = useState([]);

  function getBacket() {
    let backet = JSON.parse(localStorage.getItem("backet")) || [];
    setBacket(backet);
  }

  function createBacket(backetInfo) {
    let backet = JSON.parse(localStorage.getItem("backet")) || [];
    backet.push(backetInfo);
    setBacket(localStorage.setItem("backet", JSON.stringify(backet)));
  }

  function addToBacket(el) {
    const newBacketBook = dataBook.map((book) => {
      if (book === el) {
        return { ...book, inBacket: true };
      }
      return book;
    });
    localStorage.setItem("books", JSON.stringify(newBacketBook));

    let backet = JSON.parse(localStorage.getItem("backet")) || [];
    let found = false;
    for (let i = 0; i < backet.length; i++) {
      if (backet[i].id === el.id) {
        found = true;
        break;
      }
    }

    if (!found) {
      backet.push(el);
    }
    setBacket(localStorage.setItem("backet", JSON.stringify(backet)));
    setDataBook(newBacketBook);
    readData();
    getBacket();
  }

  // sum
  function getSum() {
    let sum1 = [];
    backet.map((el) => {
      return sum1.push(el.price * el.count);
    });
    sum1 = sum1.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return sum1;
  }
  // delete
  function delProduct(elem) {
    const newBacketBook = dataBook.map((book) => {
      if (elem.id === book.id) {
        return { ...book, inBacket: false };
      }
      return book;
    });
    localStorage.setItem("books", JSON.stringify(newBacketBook));
    console.log(dataBook);

    const delElem = backet.filter((el) => el !== elem);
    localStorage.setItem("backet", JSON.stringify(delElem));
    setBacket(delElem);
  }
  // search
  const [search, setSearch] = useState("");
  const [sb, setSb] = useState([]);

  function getSearchBooks(e, books) {
    if (e.length === 0) {
      setSb([]);
      return;
    }
    nav("/search");
    // setSb(
    //   books.filter((book) =>
    //     book.name.toLowerCase().startsWith(e.toLowerCase())
    //   )
    // );
    const filteredBooks = books.filter((book) => {
      const bookName = book.name.toLowerCase().startsWith(e.toLowerCase());
      const bookCategory = book.category
        .toLowerCase()
        .startsWith(e.toLowerCase());
      return bookName || bookCategory;
    });

    setSb(filteredBooks);
  }

  // value
  let values = {
    dataBook,
    setDataBook,
    createData,
    readData,
    changeSort,
    switchToCategory,
    category,
    getBook,
    name,
    add,
    subtr,
    createBacket,
    backet,
    getBacket,
    addToBacket,
    getSum,
    delProduct,
    search,
    setSearch,
    getSearchBooks,
    sb,
    setSb,
  };
  return (
    <div>
      <bookContext.Provider value={values}>{children}</bookContext.Provider>
    </div>
  );
};

export default MyContext;
