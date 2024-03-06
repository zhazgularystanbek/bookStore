import React from "react";
import Home from "../pages/Home";
import Book from "../pages/Book";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Categories from "../pages/Categories";
import Backet from "../pages/Backet";
import Order from "../pages/Order";
import Search from "../pages/Search";

const MyRoutes = () => {
  const PRIVAT = [{ path: "/admin", elem: <Admin /> }];
  const PUBLIC = [
    { path: "/", elem: <Home /> },
    { path: "/backet", elem: <Backet /> },
  ];
  return (
    <Routes>
      {PRIVAT.map((el) => (
        <Route path={el.path} element={el.elem}></Route>
      ))}
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.elem}></Route>
      ))}
      <Route path="/categories/:category" element={<Categories />} />
      <Route path="/categories/:category/:name" element={<Book />} />
      <Route path="/backet" element={<Backet />} />
      <Route path="/order" element={<Order />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default MyRoutes;
