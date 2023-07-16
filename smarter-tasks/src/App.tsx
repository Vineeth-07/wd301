import React, { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import { ThemeContext } from "./context/theme";
const App = () => {
  const currentTheme = useContext(ThemeContext)
  useEffect(() => {
    if(currentTheme.theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [currentTheme.theme])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;