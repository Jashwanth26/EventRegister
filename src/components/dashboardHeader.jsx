import React, { useContext, useEffect, useState } from "react";
import "./dashboardHeader.css";
import { Space, Input } from "antd";
import { Link } from "react-router-dom";
import DropDown from "./dropDown";
import { Context } from "../context/OrderContext";
import { useSelector } from "react-redux";
import data from "../components/data";
const { Search } = Input;

export default function DashBoardHeader() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const { setSearchItem } = useContext(Context);
  const [catagories, setCategories] = useState([]);
  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(data[0].events.map((item) => item.category))
    ).map((category, index) => ({
      label: category,
      key: `${index}`,
    }));

    setCategories(uniqueCategories);
  }, [data]);

  return (
    <>
      <header>
        <div className="flex flex-row justify-between items-center p-3">
          <div className="flex flex-row gap-10 items-center">
            <p>
              Explore Events
            </p>
          </div>
          <div className="flex flex-row gap-10 items-center">
            <div className="drop-down flex flex-row gap-20">
              <Search
                className="hidden md:flex flex-row items-center"
                placeholder="input search text"
                onChange={(e) => setSearchItem(e.target.value)}
                enterButton
              />
              <Space wrap>
                <DropDown catagories={catagories} />
              </Space>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
