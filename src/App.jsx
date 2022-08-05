import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import Board from "./pages/Board";

const App = () => {
  return (
    <>
      <div className="font-nunito">
        <Routes>
          <Route path="/v1/auth" element={<Auth />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/v1/board" element={<Board />} />
          </Route>
          <Route path="*" element={<Navigate to="/v1/board" replace />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
