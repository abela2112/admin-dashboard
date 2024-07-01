import { useContext, createContext, useState } from "react";

const StateContext = createContext();
const intialState = {
  chat: false,
  userProfile: false,
  cart: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(intialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };
  const handleClick = (click) => {
    setIsClicked({ ...intialState, [click]: true });
  };
  return (
    <StateContext.Provider
      value={{
        isActiveMenu,
        setIsActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => {
  return useContext(StateContext);
};
