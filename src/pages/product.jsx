import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../state/store";
import { Button, Input } from "antd";
import Products, { ProductActions } from "../state/slices/products";
import { Content } from "antd/es/layout/layout";
import { Context } from "../context/OrderContext";
import SearchComponent from "../components/Search";
import data from "../components/data";
import Event from "./Event";
const { Search } = Input;
export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [limit, setLimit] = useState(10);
  const { searchItem, show, setSearchItem } = useContext(Context);
  console.log(searchItem, "items", show, "show");
  console.log(products);
  console.log(data, "data");
  console.log(searchItem, "item");
  return (
    <div>
      <Search
        className="flex mb-5 p-2 md:hidden flex-row items-center"
        placeholder="input search text"
        onChange={(e) => setSearchItem(e.target.value)}
        enterButton
      />

      {!searchItem ? (
        <Event />
      ) : (
        <>
          <SearchComponent />
        </>
      )}
    </div>
  );
}
