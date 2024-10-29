import React from "react";
import { createContext } from "react";
import data from "../components/data";
const Context = createContext();

const SearchContext = ({ children }) => {
  const [searchItem, setSearchItem] = React.useState("");
  const [catag, setCatag] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [authError, setAuthError] = React.useState(false);
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const login = async (email, password) => {
    const check = data[0].users.filter(
      (item) => item.email == email && item.password == password
    );
    if (check) setAuthenticated(true);
    else setAuthError(true);
  };
  const value = {
    searchItem,
    setSearchItem,
    catag,
    setCatag,
    show,
    setShow,
    setAuthenticated,
    isAuthenticated,
    authError,
    login,
    setAuthError,
  };

  return (
    <>
      <Context.Provider value={value}>{children}</Context.Provider>
    </>
  );
};

export { Context, SearchContext };
