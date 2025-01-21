import { createContext, useState, useContext } from "react";
import useColorMode from "../hooks/useColorMode";

const stateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProffile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [colorMode] = useColorMode();
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState();
  const [chartColor, setChartColor] = useState(colorMode);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        chartColor,
        setChartColor,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
