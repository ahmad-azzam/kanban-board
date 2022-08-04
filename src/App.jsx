import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Board from "./pages/Board";

const App = () => {
  return (
    <>
      <div className="font-nunito">
        <Routes>
          <Route path="/v1/auth" element={<Auth />} />
          <Route path="/v1/board" element={<Board />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
