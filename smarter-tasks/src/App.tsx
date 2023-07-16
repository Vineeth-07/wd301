import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import { ThemeContext } from "./context/theme";
const App = () => {
  const currentTheme = useContext(ThemeContext)
  return (
    <div>
      {currentTheme.theme}
      <RouterProvider router={router} />
    </div>
  );
}
export default App;