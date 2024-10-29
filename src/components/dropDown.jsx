import React, { useContext } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { createReducer } from "@reduxjs/toolkit";
import { Context } from "../context/OrderContext";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { ProductActions } from "../state/slices/products";

const DropDown = (catagories) => {
  const cate = catagories.catagories;
  console.log(cate, "cate");
  const dispatch = useDispatch();
  const { catag, setCatag, setShow, setSearchItem, searchItem } =
    useContext(Context);

  const handleMenuClick = (e) => {
    const selectedLabel = e.domEvent.target.innerText;
    setSearchItem(selectedLabel);
    setCatag(selectedLabel);
  };
  return (
    <>
      {cate && (
        <Dropdown
          className="text-pop text-black"
          menu={{
            items: cate,
            onClick: handleMenuClick,
          }}
        >
          <div onClick={(e) => e.preventDefault()}>
            <Space>
              {catag || "Cateogries"}
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      )}
    </>
  );
};
export default DropDown;
