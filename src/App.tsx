import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" flex  items-center justify-center w-full h-full overscroll-none">
      <Outlet />
    </div>
  );
}

export default App;
