import { Outlet } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
function App() {
  const [theme, setTheme] = useState("");
  return (
    <div className=" flex  items-center justify-center w-full h-full overscroll-none">
      <AuthContext.Provider value={theme}>
        <Outlet />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
