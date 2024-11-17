import React, { useReducer, createContext, useEffect } from "react"
import FooterCom from "../components/foooter/Footer"
import HeaderCom from "../components/header/Header"
import App from "../App";

type ThemeModeAction = "DARK" | "LIGHT";
type ThemeModeState = {
  mode: "DARK" | "LIGHT"
};

type ThemeModeContextType = {
  state: ThemeModeState;
  dispatch: React.Dispatch<ThemeModeAction>;
};

// const initialState: ThemeModeState = {mode:"LIGHT"}

export const getInitialMode = (): ThemeModeState => {
  const previousMode = localStorage.getItem("mode");
  return previousMode == "DARK" ? { mode: "DARK" } : { mode: "LIGHT" };
};

export const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);


const themeModeReducer = (state: ThemeModeState, action: ThemeModeAction): ThemeModeState => {
  switch (action) {
    case "LIGHT":
      localStorage.setItem("mode", "LIGHT");
      return { mode: "LIGHT" };
    case "DARK":
      localStorage.setItem("mode", "DARK");
      return { mode: "DARK" };
    default:
      return state;
  }
};

const MainLayout = () => {

  const [state,dispatch] = useReducer(themeModeReducer,getInitialMode());
  useEffect(() => {
    getInitialMode();
  },[])

  return (
    <React.Fragment>
      <ThemeModeContext.Provider value={{state,dispatch}}>
      <HeaderCom />
            <App />
        <FooterCom />
      </ThemeModeContext.Provider>
    </React.Fragment>
  )
}

export default MainLayout